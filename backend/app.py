from flask import Flask, request, jsonify
from flask_mysqldb import MySQL
import onnxruntime as ort
import numpy as np
from datetime import datetime
from extract_features import extract_features, rank_features
import os
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # السماح لجميع الـ origins للوصول للـ API

# --------- إعداد الاتصال بقاعدة البيانات ----------
app.config['MYSQL_HOST'] = os.getenv('DB_HOST', 'localhost')
app.config['MYSQL_USER'] = os.getenv('DB_USER', 'root')
app.config['MYSQL_PASSWORD'] = os.getenv('DB_PASSWORD', 'Asdzxc123@#')
app.config['MYSQL_DB'] = os.getenv('DB_NAME', 'phishing_detector')

mysql = MySQL(app)

# --------- تحميل نموذج ONNX ----------
model_path = os.path.join(os.path.dirname(__file__), "model", "phishing_url_detection.onnx")
onnx_model = ort.InferenceSession(model_path)
input_name = onnx_model.get_inputs()[0].name
print("Model Inputs: ", [input.name for input in onnx_model.get_inputs()])

# --------- Endpoint لتحليل الرابط ----------
@app.route('/analyze', methods=['POST'])
def analyze_url():
    data = request.json
    url = data.get('url') if data else None

    if not url:
        return jsonify({'error': 'No URL provided'}), 400

    # --------- استخراج الخصائص للعرض و ranking ----------
    features = extract_features(url)
    ranked_features = rank_features(features)

    # --------- التنبؤ باستخدام النموذج (الرابط نفسه كنص) ----------
    feature_array = np.array([url], dtype=str)
    result = onnx_model.run(None, {input_name: feature_array})

    prediction = int(result[0][0])  # 0 = Safe, 1 = Phishing
    probability = 0.0  # النموذج الحالي لا يعطي احتمالات

    # --------- تخزين النتائج في قاعدة البيانات ----------
    cursor = mysql.connection.cursor()
    cursor.execute('INSERT INTO urls (url, capture_time) VALUES (%s, %s)', (url, datetime.now()))
    url_id = cursor.lastrowid
    cursor.execute('INSERT INTO features (url_id, feature_data) VALUES (%s, %s)', (url_id, str(features)))
    cursor.execute(
        'INSERT INTO predictions (url_id, prediction, probability) VALUES (%s, %s, %s)',
        (url_id, prediction, probability)
    )
    mysql.connection.commit()

    # --------- إرسال النتيجة للواجهة ----------
    response = {
        'prediction': "Phishing" if prediction == 1 else "Safe",
        'probability': probability,
        'ranked_features': ranked_features
    }
    return jsonify(response)


if __name__ == '__main__':
    # تشغيل السيرفر على 5000 وهو port متوافق مع frontend
    app.run(host='0.0.0.0', port=5000, debug=True)
