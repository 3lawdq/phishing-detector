"use client";

import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [url, setUrl] = useState("");

  return (
    <main className="min-h-screen bg-[#f5f9ff] px-6 pt-6 pb-16 font-sans">
      {/* Navbar */}


      {/* Main Section */}
      <div className="flex flex-col md:flex-row items-center justify-between px-8 py-12 bg-[#f4f8ff]">
  <img src="/globe.png" alt="logo" className="w-full max-w-md" />
  
  <div className="max-w-xl text-left mt-10 md:mt-0">
    <p className="text-blue-600 font-semibold tracking-wide uppercase">URL Phishing Detection Platform</p>
    <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight text-[#0a0a0a] mt-2 mb-4">
      URL Phishing Link Checker
    </h1>
    <p className="text-blue-500 text-lg mb-6">
      Check if a URL, website, is safe before you visit with our AI-powered, real-time phishing link checker.
    </p>
    
    <div className="flex items-center gap-4">
      <div className="relative w-full">
        <span className="absolute left-3 top-1/2 transform -translate-y-1/2">
          <img src="/input-icon.png" alt="icon" className="w-6 h-6" />
        </span>
        <input
          type="text"
          placeholder="Enter URL link"
          className="w-full pl-12 pr-4 py-3 rounded-full bg-white shadow text-gray-700 placeholder:text-gray-400"
        />
      </div>
      <button className="bg-[#021e4b] text-white px-6 py-3 rounded-full font-semibold">
        URL Check
      </button>
    </div>
  </div>
</div>

    </main>
  );
}
