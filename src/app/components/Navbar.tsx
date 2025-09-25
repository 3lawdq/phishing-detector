// components/Navbar.tsx
"use client";

import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="w-full flex items-center justify-between px-8 py-4">
      {/* Logo */}
      <Link href="/">
        <Image
          src="/logo.png" // استبدل بـ اسم ملفك المناسب
          alt="Logo"
          width={40}
          height={40}
          className="object-contain"
        />
      </Link>

      {/* Navigation Links */}
      <div className="flex items-center gap-6 text-[#0a0a0a] font-medium text-sm">
        <Link href="/">Home</Link>
        <Link href="/about">About us</Link>
        <Link href="/url-analyzer">Services</Link>
        <Link href="/team">Team</Link>
        <Link href="/blog">Blog</Link>
      </div>

      {/* Contact Button */}
      <Link
        href="/contact"
        className="bg-[#f5a200] text-white px-6 py-2 rounded-full font-semibold text-sm"
      >
        Contact us
      </Link>
    </nav>
  );
}
