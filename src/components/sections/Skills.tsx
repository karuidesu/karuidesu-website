"use client";

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/components/LanguageContext';
import { Reveal } from '@/components/Reveal';
import { EXPERIENCES } from '@/data/experiences';

export default function Skills() {
  const { t, lang } = useLanguage();
  const mainExp = EXPERIENCES[0];

  return (
    <section id="skills" className="scroll-mt-[72px] min-h-[calc(100vh-72px)] py-16 px-[5%] md:px-[9%] bg-transparent flex flex-col justify-center">
      <div className="max-w-7xl mx-auto w-full">
        <Reveal className="text-center md:text-left mb-16">
          <div className="inline-flex items-center gap-4 mb-6">
            <span className="w-8 h-[2px] bg-brand-600 hidden lg:block"></span>
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-brand-600">
              {t("skills.label")}
            </span>
          </div>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-white">
            {t("skills.title")}
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
          <Reveal delay={0.15} className="lg:col-span-3">
            <div className="bg-slate-900/40 rounded-3xl p-8 md:p-10 border border-slate-800 shadow-sm hover:shadow-lg transition-shadow duration-300 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-600/10 blur-[50px] -mr-10 -mt-10 pointer-events-none"></div>

              <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4 mb-6">
                <div className="text-brand-400 font-medium flex items-center">
                  <i className='bx bx-building-house mr-2 text-xl'></i>{mainExp.company}
                </div>
                <span className="inline-block text-xs font-bold uppercase tracking-wider text-brand-600 bg-brand-900/30 px-3 py-1.5 rounded-full border border-brand-800/30 text-center">
                  {mainExp.date[lang as 'fr' | 'en']}
                </span>
              </div>
              <h4 className="text-2xl font-bold text-white mb-2">
                {mainExp.role[lang as 'fr' | 'en']}
              </h4>
              <p className="mt-4 text-slate-300 leading-relaxed whitespace-pre-line font-light mb-8">
                {mainExp.description[lang as 'fr' | 'en']}
              </p>

              <Link href="/experiences" className="inline-flex items-center gap-2 px-6 py-3 bg-brand-600 text-white font-semibold rounded-xl hover:bg-brand-700 transition-colors shadow-lg shadow-brand-600/20">
                {t("skills.see_all")}
                <i className='bx bx-right-arrow-alt text-xl'></i>
              </Link>
            </div>
          </Reveal>

          <div className="lg:col-span-2 space-y-10">
            <Reveal delay={0.15}>
              <div className="bg-slate-900/40 rounded-3xl p-8 border border-brand-500/20 shadow-[0_0_30px_rgba(2,132,199,0.05)]">
                <h3 className="text-lg font-display font-bold text-brand-600 mb-6 flex items-center gap-3">
                  <i className='bx bxs-graduation text-2xl'></i>
                  {t("skills.cert_title")}
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <i className='bx bx-check-circle text-brand-500 mt-1 text-lg'></i>
                    <div>
                      <strong className="block text-white">{t("skills.cert1")}</strong>
                      <span className="text-sm text-slate-400 font-light">{t("skills.cert1_desc")}</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <i className='bx bx-check-circle text-brand-500 mt-1 text-lg'></i>
                    <div>
                      <strong className="block text-white">{t("skills.cert2")}</strong>
                      <span className="text-sm text-slate-400 font-light">{t("skills.cert2_desc")}</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <i className='bx bx-check-circle text-brand-500 mt-1 text-lg'></i>
                    <div>
                      <strong className="block text-white">{t("skills.cert3")}</strong>
                      <span className="text-sm text-slate-400 font-light">{t("skills.cert3_desc")}</span>
                    </div>
                  </li>
                </ul>
              </div>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="bg-slate-900/40 rounded-3xl p-8 border border-slate-800 shadow-sm">
                <h3 className="text-lg font-display font-bold text-white mb-6 flex items-center gap-3">
                  <i className='bx bx-code-alt text-brand-500 text-2xl'></i>
                  {t("skills.stack_title")}
                </h3>

                <div className="space-y-6">
                  <div>
                    <span className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">
                      {t("skills.stack_process")}
                    </span>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1.5 bg-brand-900/20 text-brand-400 text-xs font-medium rounded-lg border border-brand-800/30">BPMN</span>
                      <span className="px-3 py-1.5 bg-brand-900/20 text-brand-400 text-xs font-medium rounded-lg border border-brand-800/30">UML</span>
                      <span className="px-3 py-1.5 bg-brand-900/20 text-brand-400 text-xs font-medium rounded-lg border border-brand-800/30">Merise</span>
                      <span className="px-3 py-1.5 bg-brand-900/20 text-brand-400 text-xs font-medium rounded-lg border border-brand-800/30">Python</span>
                      <span className="px-3 py-1.5 bg-brand-900/20 text-brand-400 text-xs font-medium rounded-lg border border-brand-800/30">Django</span>
                      <span className="px-3 py-1.5 bg-brand-900/20 text-brand-400 text-xs font-medium rounded-lg border border-brand-800/30">FastAPI</span>
                      <span className="px-3 py-1.5 bg-brand-900/20 text-brand-400 text-xs font-medium rounded-lg border border-brand-800/30">PostgreSQL</span>
                      <span className="px-3 py-1.5 bg-brand-900/20 text-brand-400 text-xs font-medium rounded-lg border border-brand-800/30">Next.js</span>
                      <span className="px-3 py-1.5 bg-brand-900/20 text-brand-400 text-xs font-medium rounded-lg border border-brand-800/30">Tailwind CSS</span>
                    </div>
                  </div>

                  <div>
                    <span className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">
                      {t("skills.stack_creativity")}
                    </span>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1.5 bg-brand-900/20 text-brand-400 text-xs font-medium rounded-lg border border-brand-800/30">Adobe Photoshop</span>
                      <span className="px-3 py-1.5 bg-brand-900/20 text-brand-400 text-xs font-medium rounded-lg border border-brand-800/30">Canva</span>
                      <span className="px-3 py-1.5 bg-brand-900/20 text-brand-400 text-xs font-medium rounded-lg border border-brand-800/30">CapCut</span>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
