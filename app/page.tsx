'use client';

import React, { useState, useEffect } from 'react';

export default function CyberWarriorForge() {
  const [theme, setTheme] = useState<'cyber' | 'stealth'>('cyber');

  // Theme toggle effect
  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'stealth') {
      root.classList.add('stealth');
      root.classList.remove('cyber');
    } else {
      root.classList.add('cyber');
      root.classList.remove('stealth');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'cyber' ? 'stealth' : 'cyber');
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0c] text-[#e5e7eb] cyber">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-[#0a0a0c]/90 backdrop-blur-lg border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Forge Logo + Brand */}
          <div className="flex items-center gap-3">
            <div className="relative w-9 h-9 flex-shrink-0">
              <svg viewBox="0 0 36 36" className="w-9 h-9 text-[#00f9ff]">
                <path 
                  fill="currentColor" 
                  d="M18 3 L30 9 L30 21 L18 27 L6 21 L6 9 Z M18 7 L25 11 L25 19 L18 23 L11 19 L11 11 Z M14 14 L22 14 L22 16 L14 16 Z" 
                />
              </svg>
              <div className="absolute inset-0 border border-[#00f9ff] rounded-sm animate-pulse" />
            </div>
            <div>
              <div className="font-semibold tracking-tight text-xl">CYBERWARRIOR FORGE</div>
              <div className="font-mono text-[9px] text-[#00f9ff] -mt-1 tracking-[4px]">MVFORGE</div>
            </div>
          </div>

          {/* Navigation + Toggle */}
          <div className="flex items-center gap-7 text-sm font-medium">
            <button onClick={() => scrollToSection('services')} className="hover:text-[#00f9ff] transition-colors hidden sm:block">
              Services
            </button>
            <button onClick={() => scrollToSection('contact')} className="hover:text-[#00f9ff] transition-colors">
              Contact
            </button>

            {/* Dark Mode Toggle */}
            <button 
              onClick={toggleTheme}
              className="w-9 h-9 flex items-center justify-center rounded-lg hover:bg-white/5 transition-all border border-white/10"
              aria-label="Toggle theme"
            >
              {theme === 'cyber' ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="#00f9ff">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="#7b5cff">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="max-w-5xl mx-auto px-6 pt-20 pb-20 text-center">
        <div className="mb-8">
          <div className="inline font-mono uppercase tracking-[4px] text-xs border border-[#00f9ff]/40 text-[#00f9ff] px-4 py-1 rounded-full">
            SECURE • SELF-OWNED • MASTERED
          </div>
        </div>

        <h1 className="text-6xl md:text-[76px] font-semibold tracking-[-4.2px] leading-[0.95] text-white mb-6">
          Forge Your<br />Digital Shield.
        </h1>

        <p className="max-w-lg mx-auto text-xl text-[#8d9199] mb-10">
          Practical cybersecurity tools and hardened websites for landlords and business owners who demand control.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => scrollToSection('services')}
            className="bg-[#00f9ff] text-[#0a0a0c] hover:bg-[#7b5cff] hover:text-white transition-all font-medium px-9 py-[17px] text-sm tracking-widest rounded-xl"
          >
            VIEW OUR FORGES
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="border border-white/20 hover:bg-white/5 px-9 py-[17px] text-sm tracking-widest rounded-xl transition-all"
          >
            SPEAK WITH A WARRIOR
          </button>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="border-y border-white/10 bg-[#0a0a0c]">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <div className="text-center mb-12">
            <div className="font-mono text-xs uppercase tracking-[3px] text-[#00f9ff]">OPERATIONAL CAPABILITIES</div>
            <h2 className="text-5xl tracking-tighter font-semibold mt-3">Two Precision Tools</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* ForgeWorks Card */}
            <div className="glass-card group">
              <div className="terminal-header">root@forgeworks / forge</div>
              <div className="px-8 pb-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="text-[#00f9ff]">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1v-5m0 0l10-10" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-3xl tracking-tight">ForgeWorks</div>
                    <div className="text-xs text-[#00f9ff]">SECURE PROPERTY WEBSITES</div>
                  </div>
                </div>

                <p className="text-[#8d9199] leading-relaxed mb-7">
                  Hardened rental property websites that attract quality tenants while protecting your data and reputation. 
                  Built with self-ownership and long-term security in mind.
                </p>

                <ul className="space-y-2 text-sm mb-8">
                  {['End-to-end encryption & secure hosting', 'Mobile-first & accessible tenant portals', 'Automated inquiry routing without leaks'].map((item, i) => (
                    <li key={i} className="flex gap-3 items-start"><span className="text-[#00f9ff] mt-1">›</span> {item}</li>
                  ))}
                </ul>

                <a href="mailto:forge@mvforge.io?subject=ForgeWorks%20Inquiry" 
                   className="neon-btn w-full block text-center py-3 text-sm font-medium tracking-widest border border-[#00f9ff] hover:bg-[#00f9ff] hover:text-black">
                  REQUEST FORGEWORKS
                </a>
              </div>
            </div>

            {/* AuditForge Card */}
            <div className="glass-card group">
              <div className="terminal-header">root@auditforge / forge</div>
              <div className="px-8 pb-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="text-[#7b5cff]">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 8.944 11.271.727.846 1.488 1.558 2.056 2.072" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-3xl tracking-tight">AuditForge</div>
                    <div className="text-xs text-[#7b5cff]">SECURITY AUDITS & ASSESSMENTS</div>
                  </div>
                </div>

                <p className="text-[#8d9199] leading-relaxed mb-7">
                  Comprehensive security audits and risk assessments for property businesses. 
                  Clear reports, actionable fixes, and ongoing peace of mind.
                </p>

                <ul className="space-y-2 text-sm mb-8">
                  {['Vulnerability & access review', 'Compliance & data hygiene audit', 'Plain English executive report + plan'].map((item, i) => (
                    <li key={i} className="flex gap-3 items-start"><span className="text-[#7b5cff] mt-1">›</span> {item}</li>
                  ))}
                </ul>

                <a href="mailto:forge@mvforge.io?subject=AuditForge%20Inquiry" 
                   className="neon-btn w-full block text-center py-3 text-sm font-medium tracking-widest border border-[#7b5cff] hover:bg-[#7b5cff] hover:text-black text-[#7b5cff]">
                  REQUEST AUDITFORGE
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="max-w-5xl mx-auto px-6 pt-16 pb-20">
        <div className="text-center mb-10">
          <div className="font-mono uppercase tracking-widest text-xs text-[#00f9ff]">ESTABLISH SECURE CONTACT</div>
          <h3 className="mt-3 text-4xl font-semibold tracking-tight">Ready to build your shield?</h3>
        </div>

        <div className="glass-card max-w-md mx-auto p-9">
          <div className="space-y-6 text-center">
            <div>
              <div className="font-semibold text-xl">Mark Villalon</div>
              <div className="font-mono text-[#00f9ff] text-xs tracking-[3px]">CYBERWARRIOR FORGE</div>
            </div>

            <div className="text-lg space-y-1">
              <a href="mailto:forge@mvforge.io" className="block hover:text-[#00f9ff]">forge@mvforge.io</a>
              <a href="tel:+19377292945" className="block hover:text-[#00f9ff]">(937) 729-2945</a>
            </div>

            <div className="text-xs tracking-normal pt-4 border-t border-white/10 text-[#8d9199]">
              Ohio-based. Available for on-site & remote engagements.
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-y-2 text-xs text-[#6e727b]">
          <div>© {new Date().getFullYear()} CyberWarrior Forge • MVForge</div>
          <div>Self-ownership through technical mastery.</div>
        </div>
      </footer>
    </div>
  );
}
