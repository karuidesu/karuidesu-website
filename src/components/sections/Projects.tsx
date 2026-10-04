"use client";

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/components/LanguageContext';
import { Reveal } from '@/components/Reveal';

export default function Projects() {
  const { t } = useLanguage();

  return (
    <section id="projects" className="scroll-mt-[72px] py-16 px-[5%] md:px-[9%] relative z-10">
      <div className="max-w-7xl mx-auto">
        <Reveal className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16">
          <div>
            <div className="inline-flex items-center gap-4 mb-4">
              <span className="w-8 h-[2px] bg-brand-600 hidden md:block"></span>
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-brand-600">
                {t("projects.label")}
              </span>
            </div>
            <h2 className="font-display font-bold text-4xl md:text-5xl text-white">
              {t("projects.title")}
            </h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Reveal delay={0.1}>
            <div className="group relative w-full rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-slate-900/40 border border-slate-800 flex flex-col">
              <div className="relative h-48 md:h-56 w-full overflow-hidden shrink-0">
                <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{ backgroundImage: "url('/assets/projects/vicetg-site.jpeg')" }}>
                </div>
              </div>
              <div className="p-6 md:p-8 flex flex-col flex-grow">
                <span className="text-brand-300 text-xs font-bold uppercase tracking-widest mb-2">{t("projects.all.p4.tag")}</span>
                <h3 className="text-white font-display font-bold text-2xl mb-2 leading-tight">{t("projects.p4.title")}</h3>
                <p className="text-slate-300 text-sm font-light leading-relaxed mb-4 line-clamp-3">{t("projects.p4.desc")}</p>
                <div className="flex items-center justify-between w-full transition-all duration-300 mt-2">
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-slate-800/80 backdrop-blur-sm text-slate-300 text-xs rounded-md border border-slate-700/50">Next.js</span>
                    <span className="px-2 py-1 bg-slate-800/80 backdrop-blur-sm text-slate-300 text-xs rounded-md border border-slate-700/50">Django</span>
                  </div>
                  <div className="flex items-center gap-3 z-20">
                    <a href="https://vicetgasso.vercel.app" target="_blank" rel="noreferrer" className="text-slate-300 hover:text-white hover:scale-110 transition-all text-2xl">
                      <i className='bx bx-link'></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="group relative w-full rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-slate-900/40 border border-slate-800 flex flex-col">
              <div className="relative h-48 md:h-56 w-full overflow-hidden shrink-0">
                <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{ backgroundImage: "url('/assets/projects/gestion-bibliotheque.jpg')" }}>
                </div>
              </div>
              <div className="p-6 md:p-8 flex flex-col flex-grow">
                <span className="text-brand-300 text-xs font-bold uppercase tracking-widest mb-2">{t("projects.all.p2.tag")}</span>
                <h3 className="text-white font-display font-bold text-2xl mb-2 leading-tight">{t("projects.p2.title")}</h3>
                <p className="text-slate-300 text-sm font-light leading-relaxed mb-4 line-clamp-3">{t("projects.p2.desc")}</p>
                <div className="flex items-center justify-between w-full transition-all duration-300 mt-2">
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-slate-800/80 backdrop-blur-sm text-slate-300 text-xs rounded-md border border-slate-700/50">FastAPI</span>
                    <span className="px-2 py-1 bg-slate-800/80 backdrop-blur-sm text-slate-300 text-xs rounded-md border border-slate-700/50">Next.js</span>
                  </div>
                  <div className="flex items-center gap-3 z-20">
                    <a href="https://github.com/karuidesu" target="_blank" rel="noreferrer" className="text-slate-300 hover:text-white hover:scale-110 transition-all text-2xl">
                      <i className='bx bxl-github'></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.3}>
          <div className="mt-12 flex justify-center">
            <Link href="/projects" className="inline-flex items-center gap-2 px-6 py-3 bg-brand-600 text-white font-semibold rounded-xl hover:bg-brand-700 transition-colors shadow-lg shadow-brand-600/20 group">
              {t("projects.see_all")}
              <i className='bx bx-right-arrow-alt text-xl group-hover:translate-x-1 transition-transform'></i>
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
