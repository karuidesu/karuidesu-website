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
      const formDataObj = Object.fromEntries(formData.entries());
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formDataObj)
      });
      const data = await res.json();
      if (data.success) {
        setStatus({ message: t('contact.form.success'), type: 'success' });
        form.reset();
      } else {
        setStatus({ message: data.error || t('contact.form.error'), type: 'error' });
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

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 items-center">
        <div className="md:w-5/12 flex flex-col justify-center text-center">
          <Reveal>
            <h2 className="font-display font-semibold text-5xl md:text-6xl text-white mb-6 leading-tight drop-shadow-lg">
              {t("contact.title")}
            </h2>
            <p className="text-slate-300 text-lg leading-relaxed font-light drop-shadow-md mx-auto">
              {t("contact.subtitle")}
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.2} className="md:w-7/12">
          <form id="contactForm" onSubmit={handleSubmit} className="bg-white/5 backdrop-blur-xl p-8 md:p-12 rounded-[2.5rem] border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] relative z-10">
            <input type="hidden" name="access_key" value={process.env.WEB3FORMS_ACCESS_KEY} />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none text-slate-400 group-focus-within:text-brand-500 transition-colors">
                  <i className='bx bx-user text-xl'></i>
                </div>
                <input type="text" id="name" name="name" required
                  className="w-full bg-slate-900/50 border border-slate-700/50 rounded-2xl pl-12 pr-5 py-4 text-white focus:outline-none focus:border-brand-500 focus:bg-slate-800/80 focus:ring-2 focus:ring-brand-500/20 transition-all duration-300 placeholder:text-slate-500 shadow-inner hover:border-brand-500/30"
                  placeholder={t("contact.form.name")} />
              </div>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none text-slate-400 group-focus-within:text-brand-500 transition-colors">
                  <i className='bx bx-envelope text-xl'></i>
                </div>
                <input type="email" id="email" name="email" required
                  className="w-full bg-slate-900/50 border border-slate-700/50 rounded-2xl pl-12 pr-5 py-4 text-white focus:outline-none focus:border-brand-500 focus:bg-slate-800/80 focus:ring-2 focus:ring-brand-500/20 transition-all duration-300 placeholder:text-slate-500 shadow-inner hover:border-brand-500/30"
                  placeholder={t("contact.form.email")} />
              </div>
            </div>

            <div className="mb-8 relative group">
              <div className="absolute top-5 left-0 pl-5 pointer-events-none text-slate-400 group-focus-within:text-brand-500 transition-colors">
                <i className='bx bx-message-square-detail text-xl'></i>
              </div>
              <textarea id="message" name="message" rows={5} required
                className="w-full bg-slate-900/50 border border-slate-700/50 rounded-2xl pl-12 pr-5 py-4 text-white focus:outline-none focus:border-brand-500 focus:bg-slate-800/80 focus:ring-2 focus:ring-brand-500/20 transition-all duration-300 placeholder:text-slate-500 resize-none shadow-inner hover:border-brand-500/30"
                placeholder={t("contact.form.msg")}></textarea>
            </div>

            <div className="flex flex-col items-center justify-center gap-3 pt-2">
              <button type="submit" id="submitBtn" disabled={isSubmitting}
                className="inline-flex items-center justify-center gap-2 px-7 py-3 bg-brand-600 hover:bg-brand-500 text-white text-sm md:text-base font-semibold rounded-xl transition-all duration-300 shadow-[0_0_15px_rgba(2,132,199,0.35)] hover:shadow-[0_0_25px_rgba(2,132,199,0.55)] hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none">
                {isSubmitting ? (
                  <><i className='bx bx-loader-alt bx-spin text-xl'></i> {t("contact.form.sending")}</>
                ) : (
                  <><i className='bx bx-send text-xl'></i> {t("contact.form.send")}</>
                )}
              </button>

              {status.message && (
                <span id="formStatus" className={`text-sm font-medium tracking-wide text-center ${status.type === 'error' ? 'text-red-400' : 'text-green-400'}`}>
                  {status.message}
                </span>
              )}
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
