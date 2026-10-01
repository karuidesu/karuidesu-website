"use client";

import React, { useState } from 'react';
import { useLanguage } from '@/components/LanguageContext';
import { Reveal } from '@/components/Reveal';

export default function Contact() {
  const { t } = useLanguage();
  const [status, setStatus] = useState<{ message: string; type: 'success' | 'error' | null }>({ message: '', type: null });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ message: t('contact.form.sending'), type: null });

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch('https://api.web3forms.com/submit', { method: 'POST', body: formData });
      const data = await res.json();
      if (data.success) {
        setStatus({ message: t('contact.form.success'), type: 'success' });
        form.reset();
      } else {
        setStatus({ message: t('contact.form.error'), type: 'error' });
      }
    } catch (err) {
      setStatus({ message: t('contact.form.error'), type: 'error' });
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setStatus({ message: '', type: null }), 6000);
    }
  };

  return (
    <section id="contact" className="scroll-mt-[72px] py-16 px-[5%] md:px-[9%] bg-transparent relative overflow-hidden">
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-brand-600/10 rounded-full blur-[100px] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16">
        <div className="md:w-5/12">
          <Reveal>
            <div className="inline-flex items-center gap-4 mb-6">
              <span className="w-8 h-[2px] bg-brand-600 shadow-[0_0_10px_rgba(2,132,199,0.5)]"></span>
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-brand-400">
                {t("contact.label")}
              </span>
            </div>
            <h2 className="font-display font-bold text-5xl md:text-6xl text-white mb-6 leading-tight drop-shadow-lg">
              {t("contact.title")}
            </h2>
            <p className="text-slate-300 text-lg leading-relaxed font-light mb-12 drop-shadow-md">
              {t("contact.subtitle")}
            </p>

            <div className="space-y-6">
              <a href="mailto:kekelidiane3@gmail.com" className="flex items-center gap-5 p-5 rounded-3xl bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 hover:border-brand-500/50 hover:shadow-[0_0_30px_rgba(2,132,199,0.2)] transition-all duration-300 group">
                <div className="w-14 h-14 rounded-2xl bg-brand-600/20 flex items-center justify-center text-brand-400 text-2xl group-hover:bg-brand-500 group-hover:text-white group-hover:scale-110 transition-all duration-300">
                  <i className='bx bx-envelope'></i>
                </div>
                <div>
                  <span className="block text-xs text-brand-300 font-bold uppercase tracking-widest mb-1">Email</span>
                  <span className="block text-white font-medium text-lg tracking-wide">kekelidiane3@gmail.com</span>
                </div>
              </a>
              
              <div className="flex items-center gap-5 p-5 rounded-3xl bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 transition-all duration-300">
                <div className="w-14 h-14 rounded-2xl bg-brand-600/20 flex items-center justify-center text-brand-400 text-2xl">
                  <i className='bx bx-map'></i>
                </div>
                <div>
                  <span className="block text-xs text-brand-300 font-bold uppercase tracking-widest mb-1">{t("contact.address")}</span>
                  <span className="block text-white font-medium text-lg tracking-wide">{t("contact.address_value")}</span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.2} className="md:w-7/12">
          <form id="contactForm" onSubmit={handleSubmit} className="bg-white/5 backdrop-blur-xl p-8 md:p-12 rounded-[2.5rem] border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] relative z-10">
            <input type="hidden" name="access_key" value="51722e1f-7f72-46cc-952b-c8c364736f83" />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="space-y-3">
                <label htmlFor="name" className="text-xs font-bold text-brand-300 uppercase tracking-widest ml-1">{t("contact.form.name")}</label>
                <input type="text" id="name" name="name" required
                  className="w-full bg-black/20 border border-white/10 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-brand-500 focus:bg-black/40 focus:ring-1 focus:ring-brand-500 transition-all placeholder:text-slate-500"
                  placeholder="John Doe" />
              </div>
              <div className="space-y-3">
                <label htmlFor="email" className="text-xs font-bold text-brand-300 uppercase tracking-widest ml-1">{t("contact.form.email")}</label>
                <input type="email" id="email" name="email" required
                  className="w-full bg-black/20 border border-white/10 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-brand-500 focus:bg-black/40 focus:ring-1 focus:ring-brand-500 transition-all placeholder:text-slate-500"
                  placeholder="john@example.com" />
              </div>
            </div>

            <div className="space-y-3 mb-8">
              <label htmlFor="subject" className="text-xs font-bold text-brand-300 uppercase tracking-widest ml-1">{t("contact.form.subject")}</label>
              <input type="text" id="subject" name="subject" required
                className="w-full bg-black/20 border border-white/10 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-brand-500 focus:bg-black/40 focus:ring-1 focus:ring-brand-500 transition-all placeholder:text-slate-500"
                placeholder="Proposition de mission" />
            </div>

            <div className="space-y-3 mb-10">
              <label htmlFor="message" className="text-xs font-bold text-brand-300 uppercase tracking-widest ml-1">{t("contact.form.msg")}</label>
              <textarea id="message" name="message" rows={5} required
                className="w-full bg-black/20 border border-white/10 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-brand-500 focus:bg-black/40 focus:ring-1 focus:ring-brand-500 transition-all placeholder:text-slate-500 resize-none"
                placeholder="Bonjour Diane..."></textarea>
            </div>

            <div className="flex items-center justify-between">
              <button type="submit" id="submitBtn" disabled={isSubmitting}
                className="inline-flex items-center justify-center gap-3 px-10 py-4 bg-brand-600 hover:bg-brand-500 text-white text-lg font-bold rounded-2xl transition-all duration-300 shadow-[0_0_20px_rgba(2,132,199,0.4)] hover:shadow-[0_0_30px_rgba(2,132,199,0.6)] hover:-translate-y-1 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none">
                {isSubmitting ? (
                  <><i className='bx bx-loader-alt bx-spin text-2xl'></i> {t("contact.form.sending")}</>
                ) : (
                  <><i className='bx bx-send text-2xl'></i> {t("contact.form.send")}</>
                )}
              </button>
              
              <span id="formStatus" className={`text-sm font-bold tracking-wide ${status.type === 'error' ? 'text-red-400' : 'text-green-400'}`}>
                {status.message}
              </span>
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
