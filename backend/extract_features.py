import socket
from urllib.parse import urlparse
import datetime

def extract_features(url, capture_time=None):
    features = {}

    # --------- Lexical Features ----------
    features['url_length'] = len(url)
    features['count_?'] = url.count('?')
    features['count_/'] = url.count('/')
    features['count_%'] = url.count('%')
    features['count_='] = url.count('=')
    features['count_letters'] = sum(c.isalpha() for c in url)
    features['count_digits'] = sum(c.isdigit() for c in url)
    features['presence_of_@'] = 1 if '@' in url else 0
    features['num_special_chars'] = sum(1 for c in url if not c.isalnum())

    # --------- Domain Based Features ----------
    host = get_hostname(url)
    features['sub_domain_count'] = host.count('.') if host else 0
    features['has_ip_in_domain'] = is_ip(host) if host else 0
    features['http_https_in_domain'] = 1 if url.startswith('http://') or url.startswith('https://') else 0

    # --------- SSL Certificate ----------
    features['ssl_cert'] = 1 if url.startswith("https://") else 0
    features['ssl_cert_age'] = 0

    # --------- HTML / Anchor Features ----------
    features['url_of_anchor'] = 0
    features['iframe_present'] = 0

    # --------- Brand / Suspicious Words ----------
    features['suspicious_words_in_url'] = 0
    features['brand_targeted'] = 0

    # --------- Time / Freshness ----------
    if not capture_time:
        capture_time = datetime.datetime.now()
    features['time_of_capture'] = int(capture_time.timestamp())
    features['freshness'] = 0

    return features

def get_hostname(url):
    """ استخراج hostname من الرابط """
    try:
        parsed = urlparse(url)
        return parsed.hostname or ''
    except:
        return ''

def is_ip(hostname):
    """ التحقق إذا كان hostname هو عنوان IP """
    try:
        socket.inet_aton(hostname)
        return 1
    except:
        return 0

def rank_features(features):
    """ ترتيب الخصائص حسب الأهمية """
    feature_importance = {k: 1 for k in features}  # كل الخصائص نفس الأهمية
    ranked = sorted(feature_importance.items(), key=lambda x: x[1], reverse=True)
    return ranked
