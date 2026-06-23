'use client';
import React, { useState } from 'react';

export default function Home() {
  const [formData, setFormData] = useState({ name: '', email: '', business: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('[lead-main]', formData);
    setSubmitted(true);
    setTimeout(() => { setSubmitted(false); setFormData({ name: '', email: '', business: '', message: '' }); }, 2000);
  };

  return (
    <div className="min-h-screen bg-[#F8F5F0] text-[#2C3E50]">
      <div className="bg-[#0A2540] text-white py-2 text-center text-sm font-medium tracking-[1.5px]">
        OHIO-BUILT • VETERAN-OWNED • NO HYPE — JUST RESULTS
      </div>

      <nav className="border-b border-[#E5E0D8] bg-white sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-8 flex items-center justify-between h-20">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-[#0A2540] flex items-center justify-center rounded"><span className="text-white font-bold text-xl tracking-[-1px]">MV</span></div>
            <div><div className="font-semibold text-2xl tracking-[-1.5px] text-[#0A2540]">MVFORGE</div><div className="text-[10px] text-[#4A5568] -mt-1">DIGITAL SHIELD FOR OHIO BUSINESSES</div></div>
          </div>
          <div className="hidden md:flex items-center gap-10 text-sm font-medium">
            <a href="/forgeworks" className="hover:text-[#0A2540]">FORGEWORKS</a>
            <a href="/auditforge" className="hover:text-[#0A2540]">AUDITFORGE</a>
            <a href="/domainforge" className="hover:text-[#0A2540]">DOMAINFORGE</a>
          </div>
          <a href="#contact" className="bg-[#0A2540] hover:bg-[#132f52] text-white px-6 py-2.5 rounded-full text-sm font-medium">GET STARTED</a>
        </div>
      </nav>

      <section className="max-w-5xl mx-auto px-8 pt-20 pb-16 text-center">
        <div className="inline-block px-4 py-1.5 bg-[#0A2540] text-white text-xs tracking-[2px] mb-6 rounded">MVFORGE • OHIO</div>
        <h1 className="text-6xl md:text-7xl leading-[1.05] tracking-[-2.8px] font-semibold text-[#0A2540] max-w-5xl mx-auto mb-6">
          You’re not building a website.<br />You’re building a <span className="text-[#2E7D32]">revenue-generating machine</span>.
        </h1>
        <p className="text-2xl tracking-tight text-[#2C3E50] max-w-3xl mx-auto mb-10">Secure, self-owned digital tools for Ohio small businesses and landlords who demand control.</p>
        <a href="#contact" className="inline-block bg-[#0A2540] hover:bg-[#132f52] text-white px-10 py-4 rounded-full text-lg font-medium">GET YOUR FREE ASSESSMENT</a>
      </section>

      {/* Services Grid */}
      <section className="max-w-6xl mx-auto px-8 py-20">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-2xl border border-[#E5E0D8]">
            <h3 className="text-2xl font-semibold mb-4">ForgeWorks</h3>
            <p className="text-[#2C3E50]">Professional websites that generate qualified leads for landlords and service businesses.</p>
          </div>
          <div className="bg-white p-8 rounded-2xl border border-[#E5E0D8]">
            <h3 className="text-2xl font-semibold mb-4">AuditForge</h3>
            <p className="text-[#2C3E50]">Practical cybersecurity audits to protect your business and rental data.</p>
          </div>
          <div className="bg-white p-8 rounded-2xl border border-[#E5E0D8]">
            <h3 className="text-2xl font-semibold mb-4">DomainForge</h3>
            <p className="text-[#2C3E50]">Secure domain acquisition and management for true ownership.</p>
          </div>
        </div>
      </section>

      <section id="contact" className="max-w-2xl mx-auto px-8 py-20">
        <div className="text-center mb-10">
          <h2 className="text-5xl tracking-[-2px] font-semibold text-[#0A2540] mb-4">Ready to build your Revenue Machine?</h2>
        </div>
        {!submitted ? (
          <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl border border-[#E5E0D8] space-y-5">
            {/* form fields here - same as previous examples */}
            <button type="submit" className="w-full bg-[#0A2540] hover:bg-[#132f52] text-white py-4 rounded-full text-lg font-medium">GET YOUR FREE ASSESSMENT</button>
          </form>
        ) : <div className="bg-[#2E7D32] text-white p-10 rounded-2xl text-center">Thank you. We’ll be in touch shortly.</div>}
      </section>

      <footer className="border-t border-[#E5E0D8] py-8 bg-white text-center text-sm text-[#4A5568]">© {new Date().getFullYear()} MVForge • Logan County, Ohio • Veteran-Owned</footer>
    </div>
  );
}
