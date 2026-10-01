"use client";

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/components/LanguageContext';
import { Reveal } from '@/components/Reveal';

export default function ProjectsAll() {
  const { t } = useLanguage();

  return (
    <section id="projects_all" className="min-h-[calc(100vh-72px)] py-10 px-[5%] md:px-[9%] bg-slate-900/40 flex flex-col justify-center">
      <div className="max-w-7xl mx-auto w-full">
        <Link href="/" className="inline-flex items-center gap-2 text-brand-600 text-sm font-medium mb-8 hover:gap-3 transition-all group">
          <i className='bx bx-left-arrow-alt text-lg group-hover:-translate-x-1 transition-transform'></i>
          <span>{t("projects.back")}</span>
        </Link>
        
        <Reveal className="text-center md:text-left mb-16">
          <h2 className="font-display font-bold text-4xl md:text-5xl text-white">
            {t("projects.all.title")}
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Reveal delay={0.1}>
            <div className="group relative h-72 md:h-80 w-full rounded-3xl overflow-hidden block shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{ backgroundImage: "url('/assets/projects/gestion-salles-epl.jpg')" }}>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent"></div>
              <div className="absolute inset-x-0 bottom-0 p-8 flex flex-col justify-end">
                <span className="text-brand-300 text-xs font-bold uppercase tracking-widest mb-2">{t("projects.all.p1.tag")}</span>
                <h3 className="text-white font-display font-bold text-2xl mb-2 leading-tight">{t("projects.p1.title")}</h3>
                <div className="flex items-center justify-between w-full opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 mt-2">
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-slate-800/80 backdrop-blur-sm text-slate-300 text-xs rounded-md border border-slate-700/50">Django</span>
                    <span className="px-2 py-1 bg-slate-800/80 backdrop-blur-sm text-slate-300 text-xs rounded-md border border-slate-700/50">PostgreSQL</span>
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

          <Reveal delay={0.2}>
            <div className="group relative h-72 md:h-80 w-full rounded-3xl overflow-hidden block shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{ backgroundImage: "url('/assets/projects/vicetg-site.jpeg')" }}>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent"></div>
              <div className="absolute inset-x-0 bottom-0 p-8 flex flex-col justify-end">
                <span className="text-brand-300 text-xs font-bold uppercase tracking-widest mb-2">{t("projects.all.p2.tag")}</span>
                <h3 className="text-white font-display font-bold text-2xl mb-2 leading-tight">{t("projects.p2.title")}</h3>
                <div className="flex items-center justify-between w-full opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 mt-2">
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-slate-800/80 backdrop-blur-sm text-slate-300 text-xs rounded-md border border-slate-700/50">Next.js</span>
                    <span className="px-2 py-1 bg-slate-800/80 backdrop-blur-sm text-slate-300 text-xs rounded-md border border-slate-700/50">Tailwind</span>
                  </div>
                  <div className="flex items-center gap-3 z-20">
                    <a href="https://github.com/karuidesu" target="_blank" rel="noreferrer" className="text-slate-300 hover:text-white hover:scale-110 transition-all text-2xl">
                      <i className='bx bxl-github'></i>
                    </a>
                    <a href="https://vicetgasso.vercel.app" target="_blank" rel="noreferrer" className="text-slate-300 hover:text-white hover:scale-110 transition-all text-xl">
                      <svg viewBox="0 0 256 222" width="20" height="20" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" fill="currentColor"><path d="M128 0l128 221.705H0z" /></svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="group relative h-72 md:h-80 w-full rounded-3xl overflow-hidden block shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{ backgroundImage: "url('/assets/projects/gestion-bibliotheque.jpg')" }}>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent"></div>
              <div className="absolute inset-x-0 bottom-0 p-8 flex flex-col justify-end">
                <span className="text-brand-300 text-xs font-bold uppercase tracking-widest mb-2">{t("projects.all.p3.tag")}</span>
                <h3 className="text-white font-display font-bold text-2xl mb-2 leading-tight">{t("projects.p3.title")}</h3>
                <div className="flex items-center justify-between w-full opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 mt-2">
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-slate-800/80 backdrop-blur-sm text-slate-300 text-xs rounded-md border border-slate-700/50">React</span>
                    <span className="px-2 py-1 bg-slate-800/80 backdrop-blur-sm text-slate-300 text-xs rounded-md border border-slate-700/50">Node.js</span>
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

          <Reveal delay={0.4}>
            <div className="group relative h-72 md:h-80 w-full rounded-3xl overflow-hidden block shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{ backgroundImage: "url('/assets/projects/backend-si.jpg')" }}>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent"></div>
              <div className="absolute inset-x-0 bottom-0 p-8 flex flex-col justify-end">
                <span className="text-brand-300 text-xs font-bold uppercase tracking-widest mb-2">{t("projects.all.p4.tag")}</span>
                <h3 className="text-white font-display font-bold text-2xl mb-2 leading-tight">{t("projects.p4.title")}</h3>
                <div className="flex items-center justify-between w-full opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 mt-2">
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-slate-800/80 backdrop-blur-sm text-slate-300 text-xs rounded-md border border-slate-700/50">Python</span>
                    <span className="px-2 py-1 bg-slate-800/80 backdrop-blur-sm text-slate-300 text-xs rounded-md border border-slate-700/50">FastAPI</span>
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
      </div>
    </section>
  );
}
