"use client";

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/components/LanguageContext';
import { Reveal } from '@/components/Reveal';

export default function Home() {
  const { t } = useLanguage();

  return (
    <section id="home"
      className="scroll-mt-[72px] min-h-[calc(100vh-72px)] pt-32 pb-10 px-[5%] md:px-[9%] flex flex-col md:flex-row items-center justify-center gap-12 md:gap-20 bg-transparent relative overflow-hidden">

      <div className="absolute top-1/4 right-[10%] w-96 h-96 bg-brand-400/10 rounded-full blur-3xl animate-pulse-glow pointer-events-none">
      </div>

      <div className="flex-1 max-w-2xl text-center md:text-left z-10">
        <span className="inline-block text-brand-600 font-semibold tracking-widest uppercase text-sm mb-6 hello-anim">
          {t("home.greeting")}
        </span>
        <Reveal>
          <h1 className="font-display font-semibold text-6xl md:text-8xl lg:text-[100px] leading-[1.1] text-white mb-8">
            <span>{t("home.intro")} </span><br />
            <span className="text-brand-600">ADONSOU</span><br />
            Kekeli Diane
          </h1>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="mb-10 max-w-3xl mx-auto md:mx-0">
            <span className="block text-lg md:text-xl text-slate-300 leading-relaxed mb-2">
              {t("home.roles")}
            </span>
          </div>
        </Reveal>

        <Reveal delay={0.3}>
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <Link href="/projects"
              className="inline-flex items-center justify-center px-8 py-4 bg-brand-600 text-white font-semibold rounded-full shadow-lg shadow-brand-500/30 hover:bg-brand-700 hover:-translate-y-1 transition-all duration-300">
              {t("home.cta")}
            </Link>
            <a href="/assets/diana_cv.pdf" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-slate-800 text-white font-semibold rounded-full border border-slate-700 shadow-lg hover:bg-slate-700 hover:-translate-y-1 transition-all duration-300 gap-2">
              <i className="bx bx-download text-xl"></i> {t("nav.cv")}
            </a>
          </div>
        </Reveal>
      </div>

      <Reveal delay={0.3} className="flex-shrink-0 z-10">
        <div className="flex flex-col items-center">
          <div className="w-[280px] h-[380px] md:w-[360px] md:h-[500px] rounded-3xl bg-slate-800 border-4 border-slate-800 shadow-2xl overflow-hidden relative group transition-transform duration-500 hover:-translate-y-2 mb-6">
            <div className="absolute inset-0 border-4 border-brand-600 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none">
            </div>
            <img src="/assets/moi.png" alt="me" className="w-full h-full object-cover object-top" />
          </div>
        </div>
      </Reveal>

    </section>
  );
}
