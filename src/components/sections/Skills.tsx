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
        <Reveal className="text-center md:text-left mb-14">
          <h2 className="font-display font-semibold text-4xl md:text-5xl text-white">
            {t("skills.title")}
          </h2>
        </Reveal>

        {/* Row 1: Main Experience (col-span-3) + Formations (col-span-2) */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-stretch mb-8">
          {/* Top Left: Main Experience (col-span-3) */}
          <Reveal delay={0.1} className="lg:col-span-3 flex flex-col">
            <div className="bg-slate-900/40 rounded-3xl p-8 md:p-10 border border-slate-800 shadow-sm hover:shadow-lg transition-shadow duration-300 relative overflow-hidden flex flex-col justify-between h-full group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-600/10 blur-[50px] -mr-10 -mt-10 pointer-events-none"></div>

              <div>
                <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4 mb-6">
                  <div className="text-brand-400 font-medium flex items-center">
                    <i className='bx bx-building-house mr-2 text-xl'></i>{mainExp.company}
                  </div>
                  <span className="inline-block text-xs font-medium text-brand-400 bg-brand-900/30 px-3 py-1.5 rounded-full border border-brand-800/30 text-center">
                    {mainExp.date[lang as 'fr' | 'en']}
                  </span>
                </div>
                <h4 className="text-2xl font-semibold text-white mb-3">
                  {mainExp.role[lang as 'fr' | 'en']}
                </h4>
                <p className="text-slate-300 leading-relaxed font-light mb-8 text-justify">
                  {mainExp.description[lang as 'fr' | 'en']}
                </p>
              </div>

              <div>
                <Link href="/experiences" className="inline-flex items-center gap-2 px-6 py-3 bg-brand-600 hover:bg-brand-500 text-white font-medium rounded-xl transition-all shadow-lg shadow-brand-600/20">
                  {t("skills.see_all")}
                  <i className='bx bx-right-arrow-alt text-xl'></i>
                </Link>
              </div>
            </div>
          </Reveal>

          {/* Top Right: Formations (col-span-2) */}
          <Reveal delay={0.15} className="lg:col-span-2 flex flex-col">
            <div className="bg-slate-900/40 rounded-3xl p-8 md:p-9 border border-brand-500/20 shadow-[0_0_30px_rgba(2,132,199,0.05)] flex flex-col justify-between h-full">
              <div>
                <h3 className="text-lg font-display font-semibold text-brand-500 mb-6 flex items-center gap-3">
                  <i className='bx bxs-graduation text-2xl'></i>
                  {t("skills.cert_title")}
                </h3>
                <ul className="space-y-6">
                  <li className="flex items-start gap-3">
                    <i className='bx bx-check-circle text-brand-500 mt-1 text-lg shrink-0'></i>
                    <div>
                      <strong className="block text-white font-semibold">{t("skills.cert1")}</strong>
                      <span className="text-sm text-slate-400 font-light">{t("skills.cert1_desc")}</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <i className='bx bx-check-circle text-brand-500 mt-1 text-lg shrink-0'></i>
                    <div>
                      <strong className="block text-white font-semibold">{t("skills.cert3")}</strong>
                      <span className="text-sm text-slate-400 font-light block mb-2">{t("skills.cert3_desc")}</span>
                      {/* Relevant Coursework */}
                      <p className="text-sm text-brand-200/95 leading-relaxed bg-brand-950/60 p-3.5 rounded-xl border border-brand-800/40 mt-2">
                        {t("skills.cert3_courses")}
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Row 2: 3 Tech Blocks (Dev, Databases & Tools, Analysis & Integration) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {/* Block 1: Développement */}
          <Reveal delay={0.2} className="flex flex-col">
            <div className="bg-gradient-to-br from-slate-900/70 via-slate-900/40 to-slate-950/70 rounded-3xl p-7 md:p-8 border border-slate-800 hover:border-brand-500/40 shadow-xl transition-all duration-300 relative overflow-hidden flex flex-col justify-between h-full group">
              <div className="absolute -top-14 -right-14 w-36 h-36 bg-brand-500/10 rounded-full blur-2xl group-hover:bg-brand-500/20 transition-all duration-500 pointer-events-none"></div>

              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-2xl bg-brand-500/10 border border-brand-500/20 flex items-center justify-center text-brand-400 text-xl group-hover:scale-105 group-hover:bg-brand-500/20 transition-all shrink-0">
                    <i className='bx bx-code-alt'></i>
                  </div>
                  <h3 className="text-lg font-display font-semibold text-white">
                    {t("skills.stack_dev")}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2.5">
                  {["Python", "FastAPI", "Django", "JavaScript", "Next.js", "Java", "C++"].map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 rounded-xl bg-slate-950/70 border border-slate-800 text-slate-200 text-sm font-medium hover:text-white hover:border-brand-500/50 hover:bg-slate-900/90 hover:scale-105 hover:shadow-[0_0_12px_rgba(2,132,199,0.25)] transition-all duration-200 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          {/* Block 2: Bases de données et outils */}
          <Reveal delay={0.25} className="flex flex-col">
            <div className="bg-gradient-to-br from-slate-900/70 via-slate-900/40 to-slate-950/70 rounded-3xl p-7 md:p-8 border border-slate-800 hover:border-emerald-500/40 shadow-xl transition-all duration-300 relative overflow-hidden flex flex-col justify-between h-full group">
              <div className="absolute -top-14 -right-14 w-36 h-36 bg-emerald-500/10 rounded-full blur-2xl group-hover:bg-emerald-500/20 transition-all duration-500 pointer-events-none"></div>

              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 text-xl group-hover:scale-105 group-hover:bg-emerald-500/20 transition-all shrink-0">
                    <i className='bx bx-data'></i>
                  </div>
                  <h3 className="text-lg font-display font-semibold text-white">
                    {t("skills.stack_infra")}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2.5">
                  {["PostgreSQL", "MySQL", "Camunda", "Docker", "Git"].map((tool) => (
                    <span
                      key={tool}
                      className="px-4 py-2 rounded-xl bg-slate-950/70 border border-slate-800 text-slate-200 text-sm font-medium hover:text-white hover:border-emerald-500/50 hover:bg-slate-900/90 hover:scale-105 hover:shadow-[0_0_12px_rgba(16,185,129,0.25)] transition-all duration-200 cursor-default"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          {/* Block 3: Analyse et intégration */}
          <Reveal delay={0.3} className="flex flex-col">
            <div className="bg-gradient-to-br from-slate-900/70 via-slate-900/40 to-slate-950/70 rounded-3xl p-7 md:p-8 border border-slate-800 hover:border-cyan-500/40 shadow-xl transition-all duration-300 relative overflow-hidden flex flex-col justify-between h-full group">
              <div className="absolute -top-14 -right-14 w-36 h-36 bg-cyan-500/10 rounded-full blur-2xl group-hover:bg-cyan-500/20 transition-all duration-500 pointer-events-none"></div>

              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 text-xl group-hover:scale-105 group-hover:bg-cyan-500/20 transition-all shrink-0">
                    <i className='bx bx-git-branch'></i>
                  </div>
                  <h3 className="text-lg font-display font-semibold text-white">
                    {t("skills.stack_analysis_integration")}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2.5">
                  {["BPMN 2.0", "UML", "Merise", "Odoo", "Form.io", "Total.js"].map((item) => (
                    <span
                      key={item}
                      className="px-4 py-2 rounded-xl bg-slate-950/70 border border-slate-800 text-slate-200 text-sm font-medium hover:text-white hover:border-cyan-500/50 hover:bg-slate-900/90 hover:scale-105 hover:shadow-[0_0_12px_rgba(6,182,212,0.25)] transition-all duration-200 cursor-default"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
