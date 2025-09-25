"use client";

import { useState } from 'react';
import { analyzeUrl, AnalysisResult } from '../services/apiService';

const UrlAnalyzer = () => {
    const [url, setUrl] = useState('');
    const [result, setResult] = useState<AnalysisResult | null>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!url) return;

        const analysis = await analyzeUrl(url);
        setResult(analysis);
    };

    return (
        <div className="p-4 max-w-xl mx-auto">
            <form onSubmit={handleSubmit} className="flex gap-2">
                <input
                    type="text"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    placeholder="Enter URL"
                    className="border p-2 flex-1 rounded"
                />
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
                    Analyze
                </button>
            </form>

            {result && (
                <div className="mt-6 p-4 border rounded bg-white shadow">
                    <p><strong>Prediction:</strong> {result.prediction}</p>
                    <p><strong>Probability:</strong> {(result.probability * 100).toFixed(2)}%</p>
                    <div className="mt-2">
                        <p><strong>Ranked Features:</strong></p>
                        <ul className="list-disc ml-5">
                            {result.ranked_features.map(([feature, rank], index) => (
                                <li key={index}>{feature}: {rank}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            )}
        </div>
    );
};

export default UrlAnalyzer;
