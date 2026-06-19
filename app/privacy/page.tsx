'use client';

import React from 'react';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-[#0a0a0c] text-[#e5e7eb]">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-[#0a0a0c]/90 backdrop-blur-lg border-b border-white/10">
        <div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="/" className="flex items-center gap-3">
            <div className="relative w-8 h-8 flex-shrink-0">
              <svg viewBox="0 0 36 36" className="w-8 h-8 text-[#00f9ff]">
                <path 
                  fill="currentColor" 
                  d="M18 3 L30 9 L30 21 L18 27 L6 21 L6 9 Z M18 7 L25 11 L25 19 L18 23 L11 19 L11 11 Z M14 14 L22 14 L22 16 L14 16 Z"
                />
              </svg>
            </div>
            <div>
              <div className="font-semibold tracking-tight text-lg">CYBERWARRIOR FORGE</div>
              <div className="font-mono text-[9px] text-[#00f9ff] -mt-1 tracking-[3px]">MVFORGE</div>
            </div>
          </a>
          <a href="/" className="text-sm hover:text-[#00f9ff] transition-colors">← Back to Home</a>
        </div>
      </nav>

      {/* Content */}
      <main className="max-w-3xl mx-auto px-6 py-16 prose prose-invert prose-headings:tracking-tight prose-a:text-[#00f9ff]">
        <h1>Privacy Policy</h1>
        <p><strong>MVForge LLC</strong> • Effective Date: June 19, 2026</p>

        <p>At MVForge, we are committed to protecting your privacy and digital sovereignty. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit <a href="https://mvforge.io">mvforge.io</a> or engage with our services.</p>

        <h2>1. Information We Collect</h2>
        <p><strong>Automatically Collected:</strong> IP address, device information, pages visited.</p>
        <p><strong>Information You Provide:</strong> Name, email, phone number, and business details when you contact us.</p>

        <h2>2. Text Messaging</h2>
        <p>We may send transactional text messages related to your inquiries about ForgeWorks or AuditForge services. Message and data rates may apply. We do not share your mobile number with third parties for marketing purposes.</p>

        <h2>3. How We Use & Share Information</h2>
        <p>We use your information to respond to inquiries and deliver our services. We do not sell your data. Information may be shared only with trusted vendors under confidentiality agreements or when legally required.</p>

        <h2>4. Your Rights</h2>
        <p>You may request access to, correction of, or deletion of your personal data by contacting us.</p>

        <p><strong>Contact:</strong> forge@mvforge.io</p>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-y-2 text-xs text-[#6e727b]">
          <div>© {new Date().getFullYear()} CyberWarrior Forge • MVForge</div>
          <div className="flex gap-4">
            <a href="/privacy" className="hover:text-white">Privacy Policy</a>
            <a href="/terms" className="hover:text-white">Terms of Service</a>
          </div>
          <div>Self-ownership through technical mastery.</div>
        </div>
      </footer>
    </div>
  );
}
