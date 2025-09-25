CREATE DATABASE IF NOT EXISTS phishing_detector;

USE phishing_detector;

CREATE TABLE IF NOT EXISTS urls (
    id INT AUTO_INCREMENT PRIMARY KEY,
    url VARCHAR(255),
    capture_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS features (
    id INT AUTO_INCREMENT PRIMARY KEY,
    url_id INT,
    feature_data TEXT,
    FOREIGN KEY (url_id) REFERENCES urls(id)
);

CREATE TABLE IF NOT EXISTS predictions (
    id INT AUTO_INCREMENT PRIMARY KEY,
    url_id INT,
    prediction VARCHAR(50),
    probability FLOAT,
    FOREIGN KEY (url_id) REFERENCES urls(id)
);
