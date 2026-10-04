"use client";

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/components/LanguageContext';
import { Reveal } from '@/components/Reveal';
import { EXPERIENCES } from '@/data/experiences';

export default function ExperiencesAll() {
  const { t, lang } = useLanguage();

  return (
    <section id="experiences_all" className="min-h-[calc(100vh-72px)] py-10 px-[5%] md:px-[9%] bg-transparent flex flex-col justify-center">
      <div className="max-w-7xl mx-auto w-full">
        <Link href="/" className="inline-flex items-center gap-2 text-brand-600 text-sm font-medium mb-8 hover:gap-3 transition-all group">
          <i className='bx bx-left-arrow-alt text-lg group-hover:-translate-x-1 transition-transform'></i>
          <span>{t("projects.back")}</span>
        </Link>
        
        <Reveal className="text-center md:text-left mb-16">
          <h2 className="font-display font-bold text-4xl md:text-5xl text-white">
            {t("skills.all.title")}
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {EXPERIENCES.map((exp, idx) => (
            <Reveal key={exp.id} delay={idx * 0.1}>
              <div className="bg-slate-900/40 rounded-3xl p-8 md:p-10 border border-slate-800 shadow-sm hover:shadow-lg transition-shadow duration-300 relative overflow-hidden flex flex-col h-full">
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-600/5 blur-[50px] -mr-10 -mt-10 pointer-events-none"></div>
                
                <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4 mb-6">
                  <div className="text-brand-400 font-medium flex items-center">
                    <i className='bx bx-building-house mr-2 text-xl'></i>{exp.company}
                  </div>
                  <span className="inline-block text-xs font-bold uppercase tracking-wider text-brand-600 bg-brand-900/30 px-3 py-1.5 rounded-full border border-brand-800/30 text-center">
                    {exp.date[lang as 'fr' | 'en']}
                  </span>
                </div>
                <h4 className="text-2xl font-bold text-white mb-2">
                  {exp.role[lang as 'fr' | 'en']}
                </h4>
                <p className="mt-4 text-slate-300 leading-relaxed whitespace-pre-line font-light">
                  {exp.description[lang as 'fr' | 'en']}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
