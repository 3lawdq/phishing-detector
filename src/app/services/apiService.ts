import axios from 'axios';

export interface AnalysisResult {
  prediction: string;
  probability: number;
  ranked_features: Array<[string, number]>;
}

// استخدام متغير البيئة NEXT_PUBLIC_API_URL أو القيمة الافتراضية محليًا
const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';

const analyzeUrl = async (url: string): Promise<AnalysisResult | null> => {
  try {
    const response = await axios.post(`${API_URL}/analyze`, { url });
    return response.data;  // يحتوي على prediction, probability, ranked_features
  } catch (error) {
    console.error("Error analyzing the URL:", error);
    return null;
  }
};

export { analyzeUrl };
