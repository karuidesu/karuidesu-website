"use client";

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/components/LanguageContext';
import { Reveal } from '@/components/Reveal';
import { VOLUNTEERING } from '@/data/volunteering';

export default function VolunteerAll() {
  const { t, lang } = useLanguage();

  return (
    <section id="volunteer_all" className="min-h-[calc(100vh-72px)] py-10 px-[5%] md:px-[9%] bg-slate-900/40 flex flex-col justify-center">
      <div className="max-w-7xl mx-auto w-full">
        <Link href="/" className="inline-flex items-center gap-2 text-brand-600 text-sm font-medium mb-8 hover:gap-3 transition-all group">
          <i className='bx bx-left-arrow-alt text-lg group-hover:-translate-x-1 transition-transform'></i>
          <span>{t("projects.back")}</span>
        </Link>

        <Reveal className="text-center md:text-left mb-16">
          <h2 className="font-display font-bold text-4xl md:text-5xl text-white">
            {t("volunteer.all.title")}
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {VOLUNTEERING.map((vol, idx) => (
            <Reveal key={vol.id} delay={idx * 0.1}>
              <div className="bg-slate-900/30 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/5 hover:border-brand-500/20 transition-all h-full shadow-lg">
                <div className="flex flex-col mb-4">
                  <h4 className="text-xl font-bold text-white mb-2">{vol.role[lang as 'fr' | 'en']}</h4>
                  <div className="text-sm text-slate-400 font-medium">
                    {vol.date[lang as 'fr' | 'en']}
                  </div>
                </div>
                <div className="text-brand-400 font-medium mb-4">
                  <i className='bx bx-group mr-2'></i>{vol.organization}
                </div>
                <p className="text-slate-300 leading-relaxed whitespace-pre-line text-sm">
                  {vol.description[lang as 'fr' | 'en']}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
