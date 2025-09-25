// /app/about/page.tsx

import Image from 'next/image'

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#f4f8ff] px-6 py-12">
      {/* Header section */}
      <div className="text-center mb-10">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-800">About Us</h1>
        <div className="mt-4">
          <span className="inline-block bg-[#021e4b] text-white px-4 py-2 rounded-full text-sm font-medium">Home &nbsp;›&nbsp; About</span>
        </div>
      </div>

      {/* Main content section */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start gap-6">

        
        {/* Left – University logo and images */}
        <div className="flex-1 space-y-6 flex flex-col items-center md:items-end text-center md:text-right">

          <Image
            src="/ksu-logo.png" // 👈 غيّر هذا المسار إلى شعار الجامعة
            alt="King Saud University Logo"
            width={240}
            height={240}
            className="mx-auto md:mx-0"
          />

          <div className="flex justify-center md:justify-start gap-4">
            <Image
              src="/cyber1.png" // 👈 صورة لفتاة على حاسوب/تحليل بيانات
              alt="Cyber training 1"
              width={100}
              height={100}
              className="rounded-full"
            />
            <Image
              src="/cyber2.png" // 👈 صورة لفتاة أخرى على شاشة تحليل أو أمن
              alt="Cyber training 2"
              width={100}
              height={100}
              className="rounded-full"
            />
          </div>
        </div>

        {/* Right – Textual content */}
        <div className="flex-1 text-gray-700">
          <h2 className="text-2xl font-bold text-[#0a0a0a] mb-4">
            Intelligent URL Phishing Detection and Awareness Platform
          </h2>
          <p className="mb-6 leading-relaxed text-blue-900">
            We developed an AI-powered platform that detects and classifies URLs as safe, suspicious, or malicious in real time. 
            It also offers gamified cybersecurity training in Arabic and English to teach users how to spot phishing attempts.
          </p>

          <ul className="space-y-3 text-blue-800 font-medium">
            <li>▾ URL Phishing Petection</li>
          </ul>
        </div>
      </div>
    </main>
  )
}
