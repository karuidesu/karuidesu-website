"use client";

import React from 'react';
import { useLanguage } from '@/components/LanguageContext';
import { Reveal } from '@/components/Reveal';

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="scroll-mt-[72px] min-h-[calc(100vh-72px)] py-10 px-[5%] md:px-[9%] bg-slate-900/40 flex flex-col justify-center relative overflow-hidden">
      <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24 max-w-7xl mx-auto w-full">
        <Reveal className="flex-shrink-0 lg:w-5/12 text-center lg:text-left">
          <div className="inline-flex items-center gap-4 mb-6">
            <span className="w-8 h-[2px] bg-brand-600 hidden lg:block"></span>
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-brand-600">
              {t("about.label")}
            </span>
          </div>
          <h2 className="font-display font-bold text-6xl md:text-8xl leading-tight text-white"
            dangerouslySetInnerHTML={{ __html: t("about.title") }}>
          </h2>

          <div className="flex justify-center lg:justify-start gap-4 mt-10">
            <a href="https://github.com/karuidesu" target="_blank" rel="noopener noreferrer"
              className="w-12 h-12 rounded-full border border-slate-800 flex items-center justify-center text-xl text-slate-400 hover:text-brand-600 hover:border-brand-600 hover:bg-brand-50 hover:-translate-y-1 transition-all shadow-sm">
              <i className='bx bxl-github'></i>
            </a>
            <a href="https://tg.linkedin.com/in/kekeli-diane" target="_blank" rel="noopener noreferrer"
              className="w-12 h-12 rounded-full border border-slate-800 flex items-center justify-center text-xl text-slate-400 hover:text-brand-600 hover:border-brand-600 hover:bg-brand-50 hover:-translate-y-1 transition-all shadow-sm">
              <i className='bx bxl-linkedin'></i>
            </a>
            <a href="https://x.com/karuidesu_" target="_blank" rel="noopener noreferrer"
              className="w-12 h-12 rounded-full border border-slate-800 flex items-center justify-center text-xl text-slate-400 hover:text-brand-600 hover:border-brand-600 hover:bg-brand-50 hover:-translate-y-1 transition-all shadow-sm">
              <i className='bx bxl-twitter'></i>
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.15} className="flex-1">
          <p className="text-lg md:text-xl leading-relaxed text-slate-300 font-light"
            dangerouslySetInnerHTML={{ __html: t("about.text") }}>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
