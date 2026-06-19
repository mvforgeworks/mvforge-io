'use client';

import React from 'react';

export default function TermsOfService() {
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
        <h1>Terms of Service</h1>
        <p><strong>MVForge LLC</strong> • Effective Date: June 19, 2026</p>

        <h2>Text Messaging Terms</h2>
        <p>By providing your mobile number and opting in, you consent to receive text messages from MVForge related to your inquiries (scheduling, quotes, updates).</p>
        <ul>
          <li>Message and data rates may apply.</li>
          <li>Message frequency varies.</li>
          <li>Text <strong>HELP</strong> for help.</li>
          <li>Text <strong>STOP</strong> to cancel.</li>
        </ul>

        <h2>General Terms</h2>
        <p>By using mvforge.io or contacting us, you agree to these Terms. We provide cybersecurity services (ForgeWorks and AuditForge) “as is.”</p>

        <p>Your use is also governed by our <a href="/privacy">Privacy Policy</a>.</p>

        <p><strong>Governing Law:</strong> State of Ohio.</p>

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
