// app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Phishing Detector",
  description: "AI-powered real-time phishing link checker",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-[#f4f8ff]">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#f4f8ff]`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
