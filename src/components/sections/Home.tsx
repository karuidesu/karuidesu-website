"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useLanguage } from '@/components/LanguageContext';

export default function Home() {
  const { t } = useLanguage();
  const greeting = t("home.greeting")?.trim();

  return (
    <section
      id="home"
      className="min-h-screen py-12 md:py-0 px-[5%] md:px-[9%] flex items-center justify-center bg-transparent relative overflow-hidden"
    >
      <div className="absolute top-1/4 left-[8%] w-96 h-96 bg-brand-400/10 rounded-full blur-3xl animate-pulse-glow pointer-events-none"></div>

      <div className="max-w-6xl mx-auto w-full flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 lg:gap-16 z-10">
        {/* Content on the Left with immediate entrance animation */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex-1 max-w-xl text-center md:text-left z-10"
        >
          {greeting && (
            <span className="inline-block text-brand-600 font-semibold tracking-widest uppercase text-sm mb-4 hello-anim">
              {greeting}
            </span>
          )}

          <h1 className="font-display font-semibold text-5xl sm:text-6xl md:text-7xl lg:text-[84px] leading-[1.1] text-white mb-6">
            <span>{t("home.intro")} </span><br />
            <span className="text-brand-600">ADONSOU</span><br />
            Kekeli Diane
          </h1>

          <div className="mb-8 max-w-xl mx-auto md:mx-0">
            <span className="block text-base sm:text-lg md:text-xl text-slate-300 leading-relaxed font-light">
              {t("home.roles")}
            </span>
          </div>

          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <Link
              href="/projects"
              className="inline-flex items-center justify-center px-7 py-3.5 md:px-8 md:py-4 bg-brand-600 text-white font-semibold rounded-full shadow-lg shadow-brand-500/30 hover:bg-brand-700 hover:-translate-y-1 transition-all duration-300"
            >
              {t("home.cta")}
            </Link>
            <a
              href="/assets/diana_cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-7 py-3.5 md:px-8 md:py-4 bg-slate-800 text-white font-semibold rounded-full border border-slate-700 shadow-lg hover:bg-slate-700 hover:-translate-y-1 transition-all duration-300 gap-2"
            >
              <i className="bx bx-download text-xl"></i> {t("nav.cv")}
            </a>
          </div>
        </motion.div>

        {/* Photo on the Right with immediate entrance animation */}
        <motion.div
          initial={{ opacity: 0, x: 30, scale: 0.95 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="flex-shrink-0 z-10"
        >
          <div className="flex flex-col items-center">
            <div className="w-[260px] h-[350px] sm:w-[280px] sm:h-[380px] md:w-[310px] md:h-[420px] lg:w-[340px] lg:h-[460px] rounded-3xl bg-slate-800 border-4 border-slate-800 shadow-2xl overflow-hidden relative group transition-transform duration-500 hover:-translate-y-2">
              <div className="absolute inset-0 border-4 border-brand-600 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none"></div>
              <img src="/assets/me.jpg" alt="Kekeli Diane ADONSOU" className="w-full h-full object-cover object-top" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
