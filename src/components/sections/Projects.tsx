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
          <Link href="/projects" className="group inline-flex items-center gap-2 text-brand-600 font-semibold hover:text-brand-500 transition-colors">
            <span>{t("projects.see_all")}</span>
            <i className='bx bx-right-arrow-alt text-xl group-hover:translate-x-1 transition-transform'></i>
          </Link>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Reveal delay={0.1}>
            <div className="group relative bg-slate-900/40 rounded-3xl overflow-hidden border border-slate-800 hover:border-brand-600/50 transition-all duration-500">
              <div className="aspect-video bg-slate-800 overflow-hidden relative">
                <div className="absolute inset-0 bg-brand-900/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                <img src="/assets/projects/p1.jpeg" alt="Projet 1" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-8">
                <span className="inline-block px-3 py-1 bg-brand-600/20 text-brand-400 text-xs font-bold rounded-full mb-4">
                  {t("projects.p1.tag")}
                </span>
                <h3 className="text-2xl font-display font-bold text-white mb-6 group-hover:text-brand-400 transition-colors">
                  {t("projects.p1.title")}
                </h3>
                <div className="flex items-center justify-between w-full">
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-slate-800 text-slate-300 text-xs rounded-md border border-slate-700">Django</span>
                    <span className="px-2 py-1 bg-slate-800 text-slate-300 text-xs rounded-md border border-slate-700">PostgreSQL</span>
                  </div>
                  <div className="flex items-center gap-3 z-20">
                    <a href="https://github.com/karuidesu" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors text-xl" title="Source Code">
                      <i className='bx bxl-github'></i>
                    </a>
                    <a href="#" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors text-xl" title="Live Preview">
                      <svg viewBox="0 0 256 222" width="20" height="20" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" fill="currentColor">
                        <path d="M128 0l128 221.705H0z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="group relative bg-slate-900/40 rounded-3xl overflow-hidden border border-slate-800 hover:border-brand-600/50 transition-all duration-500">
              <div className="aspect-video bg-slate-800 overflow-hidden relative">
                <div className="absolute inset-0 bg-brand-900/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                <img src="/assets/projects/p2.jpeg" alt="Projet 2" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-8">
                <span className="inline-block px-3 py-1 bg-brand-600/20 text-brand-400 text-xs font-bold rounded-full mb-4">
                  {t("projects.p2.tag")}
                </span>
                <h3 className="text-2xl font-display font-bold text-white mb-6 group-hover:text-brand-400 transition-colors">
                  {t("projects.p2.title")}
                </h3>
                <div className="flex items-center justify-between w-full">
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-slate-800 text-slate-300 text-xs rounded-md border border-slate-700">Next.js</span>
                    <span className="px-2 py-1 bg-slate-800 text-slate-300 text-xs rounded-md border border-slate-700">Tailwind</span>
                  </div>
                  <div className="flex items-center gap-3 z-20">
                    <a href="https://github.com/karuidesu" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors text-xl" title="Source Code">
                      <i className='bx bxl-github'></i>
                    </a>
                    <a href="#" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors text-xl" title="Live Preview">
                      <svg viewBox="0 0 256 222" width="20" height="20" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" fill="currentColor">
                        <path d="M128 0l128 221.705H0z" />
                      </svg>
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
