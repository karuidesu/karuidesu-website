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
          <h2 className="font-display font-bold text-4xl md:text-5xl text-white mb-4">
            {t("projects.all.title")}
          </h2>
          <p className="text-lg md:text-xl leading-relaxed text-slate-300 font-light max-w-3xl">
            {t("projects.all.subtitle")}
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Reveal delay={0.1}>
            <div className="group relative w-full rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-slate-900/40 border border-slate-800 flex flex-col">
              <div className="relative h-48 md:h-56 w-full overflow-hidden shrink-0">
                <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{ backgroundImage: "url('/assets/projects/backend-si.jpg')" }}>
                </div>
              </div>
              <div className="p-6 md:p-8 flex flex-col flex-grow">
                <span className="text-brand-300 text-xs font-bold uppercase tracking-widest mb-2">{t("projects.all.p1.tag")}</span>
                <h3 className="text-white font-display font-bold text-2xl mb-2 leading-tight">{t("projects.p1.title")}</h3>
                <p className="text-slate-300 text-sm font-light leading-relaxed mb-4 line-clamp-3">{t("projects.p1.desc")}</p>
                <div className="flex items-center justify-between w-full transition-all duration-300 mt-2">
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-slate-800/80 backdrop-blur-sm text-slate-300 text-xs rounded-md border border-slate-700/50">Django</span>
                    <span className="px-2 py-1 bg-slate-800/80 backdrop-blur-sm text-slate-300 text-xs rounded-md border border-slate-700/50">Python</span>
                  </div>
                  <div className="flex items-center gap-3 z-20">
                    <a href="https://github.com/karuidesu/School-SI-management" target="_blank" rel="noreferrer" className="text-slate-300 hover:text-white hover:scale-110 transition-all text-2xl">
                      <i className='bx bxl-github'></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.4}>
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
                    <span className="px-2 py-1 bg-slate-800/80 backdrop-blur-sm text-slate-300 text-xs rounded-md border border-slate-700/50">Tailwind</span>
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
                    <span className="px-2 py-1 bg-slate-800/80 backdrop-blur-sm text-slate-300 text-xs rounded-md border border-slate-700/50">React</span>
                    <span className="px-2 py-1 bg-slate-800/80 backdrop-blur-sm text-slate-300 text-xs rounded-md border border-slate-700/50">Node.js</span>
                  </div>
                  <div className="flex items-center gap-3 z-20">
                    <a href="https://github.com/karuidesu/library-manager" target="_blank" rel="noreferrer" className="text-slate-300 hover:text-white hover:scale-110 transition-all text-2xl">
                      <i className='bx bxl-github'></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="group relative w-full rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-slate-900/40 border border-slate-800 flex flex-col">
              <div className="relative h-48 md:h-56 w-full overflow-hidden shrink-0">
                <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{ backgroundImage: "url('/assets/projects/gestion-salles-epl.jpg')" }}>
                </div>
              </div>
              <div className="p-6 md:p-8 flex flex-col flex-grow">
                <span className="text-brand-300 text-xs font-bold uppercase tracking-widest mb-2">{t("projects.all.p3.tag")}</span>
                <h3 className="text-white font-display font-bold text-2xl mb-2 leading-tight">{t("projects.p3.title")}</h3>
                <p className="text-slate-300 text-sm font-light leading-relaxed mb-4 line-clamp-3">{t("projects.p3.desc")}</p>
                <div className="flex items-center justify-between w-full transition-all duration-300 mt-2">
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-slate-800/80 backdrop-blur-sm text-slate-300 text-xs rounded-md border border-slate-700/50">BPMN</span>
                    <span className="px-2 py-1 bg-slate-800/80 backdrop-blur-sm text-slate-300 text-xs rounded-md border border-slate-700/50">UML</span>
                  </div>
                  <div className="flex items-center gap-3 z-20">
                    <a href="https://github.com/karuidesu/gramsApi" target="_blank" rel="noreferrer" className="text-slate-300 hover:text-white hover:scale-110 transition-all text-2xl">
                      <i className='bx bxl-github'></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.4}>
            <div className="group relative w-full rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-slate-900/40 border border-slate-800 flex flex-col">
              <div className="relative h-48 md:h-56 w-full overflow-hidden shrink-0">
                <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{ backgroundImage: "url('/assets/projects/inheritage.jpg')" }}>
                </div>
              </div>
              <div className="p-6 md:p-8 flex flex-col flex-grow">
                <span className="text-brand-300 text-xs font-bold uppercase tracking-widest mb-2">{t("projects.all.p5.tag")}</span>
                <h3 className="text-white font-display font-bold text-2xl mb-2 leading-tight">{t("projects.p5.title")}</h3>
                <p className="text-slate-300 text-sm font-light leading-relaxed mb-4 line-clamp-3">{t("projects.p5.desc")}</p>
                <div className="flex items-center justify-between w-full transition-all duration-300 mt-2">
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-slate-800/80 backdrop-blur-sm text-slate-300 text-xs rounded-md border border-slate-700/50">Python</span>
                    <span className="px-2 py-1 bg-slate-800/80 backdrop-blur-sm text-slate-300 text-xs rounded-md border border-slate-700/50">FastApi</span>
                  </div>
                  <div className="flex items-center gap-3 z-20">
                    <a href="https://github.com/karuidesu/inheritage-manager" target="_blank" rel="noreferrer" className="text-slate-300 hover:text-white hover:scale-110 transition-all text-2xl">
                      <i className='bx bxl-github'></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal className="mt-24 mb-16 text-center md:text-left">
          <div className="inline-flex items-center gap-4 mb-4">
            <span className="w-8 h-[2px] bg-brand-600 hidden md:block"></span>
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-brand-600">
              {t("hackathons.label")}
            </span>
          </div>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-white">
            {t("hackathons.title")}
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <Reveal delay={0.1}>
            <div className="group relative w-full rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 bg-slate-900/40 border border-slate-800 p-6 md:p-8 flex flex-col h-full">
              <span className="text-brand-300 text-xs font-bold uppercase tracking-widest mb-2">{t("hackathons.h1.tag")}</span>
              <h3 className="text-white font-display font-bold text-2xl mb-4 leading-tight">{t("hackathons.h1.title")}</h3>
              <p className="text-slate-300 text-sm font-light leading-relaxed mb-6 flex-grow">{t("hackathons.h1.desc")}</p>
              <div className="flex items-center justify-between mt-auto">
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-slate-800/80 text-slate-300 text-xs rounded-md border border-slate-700/50">Javascript V2</span>
                  <span className="px-2 py-1 bg-slate-800/80 text-slate-300 text-xs rounded-md border border-slate-700/50">Python + Vonage V1</span>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="group relative w-full rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 bg-slate-900/40 border border-slate-800 p-6 md:p-8 flex flex-col h-full">
              <span className="text-brand-300 text-xs font-bold uppercase tracking-widest mb-2">{t("hackathons.h2.tag")}</span>
              <h3 className="text-white font-display font-bold text-2xl mb-4 leading-tight">{t("hackathons.h2.title")}</h3>
              <p className="text-slate-300 text-sm font-light leading-relaxed mb-6 flex-grow">{t("hackathons.h2.desc")}</p>
              <div className="flex items-center justify-between mt-auto">
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-slate-800/80 text-slate-300 text-xs rounded-md border border-slate-700/50">Python</span>
                  <span className="px-2 py-1 bg-slate-800/80 text-slate-300 text-xs rounded-md border border-slate-700/50">Algorithms</span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
