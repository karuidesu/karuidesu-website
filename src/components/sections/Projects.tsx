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
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-brand-600">
                {t("projects.label")}
              </span>
            </div>
            <h2 className="font-display font-semibold text-4xl md:text-5xl text-white">
              {t("projects.title")}
            </h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {/* Project 1: Family Estate & Asset Management Platform */}
          <Reveal delay={0.1}>
            <div className="group relative w-full rounded-3xl overflow-hidden shadow-lg bg-slate-900/50 backdrop-blur-md border border-slate-800/90 hover:border-brand-500/50 flex flex-col h-full transition-colors duration-300">
              {/* Static Image (no zoom / no hover movements) */}
              <div className="relative h-56 md:h-64 w-full overflow-hidden shrink-0 bg-slate-950">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: "url('/assets/projects/inheritage.jpg')" }}
                >
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
              </div>

              {/* Content */}
              <div className="p-7 md:p-8 flex flex-col flex-grow">
                <div className="flex items-center justify-between mb-3">
                  <span className="inline-block px-3 py-1 bg-brand-500/10 text-brand-300 text-xs font-medium uppercase tracking-wider rounded-lg border border-brand-500/20">
                    {t("projects.p3.tag")}
                  </span>
                </div>

                <h3 className="text-white font-display font-semibold text-2xl mb-3 leading-snug group-hover:text-brand-300 transition-colors">
                  {t("projects.p3.title")}
                </h3>

                <p className="text-slate-300 text-sm font-light leading-relaxed mb-6 line-clamp-3">
                  {t("projects.p3.desc")}
                </p>

                {/* Footer with Stack and Links */}
                <div className="flex items-center justify-between w-full pt-4 mt-auto border-t border-slate-800/60">
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2.5 py-1 bg-slate-800/80 backdrop-blur-sm text-slate-200 text-xs font-medium rounded-md border border-slate-700/60">Python</span>
                    <span className="px-2.5 py-1 bg-slate-800/80 backdrop-blur-sm text-slate-200 text-xs font-medium rounded-md border border-slate-700/60">FastAPI</span>
                    <span className="px-2.5 py-1 bg-slate-800/80 backdrop-blur-sm text-slate-200 text-xs font-medium rounded-md border border-slate-700/60">BPMN</span>
                    <span className="px-2.5 py-1 bg-slate-800/80 backdrop-blur-sm text-slate-200 text-xs font-medium rounded-md border border-slate-700/60">PostgreSQL</span>
                  </div>

                  <a
                    href="https://github.com/karuidesu/inheritage-manager"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="GitHub Repository"
                    className="w-10 h-10 rounded-xl bg-slate-800/80 hover:bg-brand-600 border border-slate-700/70 hover:border-brand-500 flex items-center justify-center text-slate-300 hover:text-white transition-all shadow-md"
                  >
                    <i className='bx bxl-github text-xl'></i>
                  </a>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Project 2: Library Management System */}
          <Reveal delay={0.2}>
            <div className="group relative w-full rounded-3xl overflow-hidden shadow-lg bg-slate-900/50 backdrop-blur-md border border-slate-800/90 hover:border-brand-500/50 flex flex-col h-full transition-colors duration-300">
              {/* Static Image (no zoom / no hover movements) */}
              <div className="relative h-56 md:h-64 w-full overflow-hidden shrink-0 bg-slate-950">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: "url('/assets/projects/gestion-bibliotheque.jpg')" }}
                >
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
              </div>

              {/* Content */}
              <div className="p-7 md:p-8 flex flex-col flex-grow">
                <div className="flex items-center justify-between mb-3">
                  <span className="inline-block px-3 py-1 bg-brand-500/10 text-brand-300 text-xs font-medium uppercase tracking-wider rounded-lg border border-brand-500/20">
                    {t("projects.p2.tag")}
                  </span>
                </div>

                <h3 className="text-white font-display font-semibold text-2xl mb-3 leading-snug group-hover:text-brand-300 transition-colors">
                  {t("projects.p2.title")}
                </h3>

                <p className="text-slate-300 text-sm font-light leading-relaxed mb-6 line-clamp-3">
                  {t("projects.p2.desc")}
                </p>

                {/* Footer with Stack and Links */}
                <div className="flex items-center justify-between w-full pt-4 mt-auto border-t border-slate-800/60">
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2.5 py-1 bg-slate-800/80 backdrop-blur-sm text-slate-200 text-xs font-medium rounded-md border border-slate-700/60">FastAPI</span>
                    <span className="px-2.5 py-1 bg-slate-800/80 backdrop-blur-sm text-slate-200 text-xs font-medium rounded-md border border-slate-700/60">Next.js</span>
                    <span className="px-2.5 py-1 bg-slate-800/80 backdrop-blur-sm text-slate-200 text-xs font-medium rounded-md border border-slate-700/60">PostgreSQL</span>
                  </div>

                  <a
                    href="https://github.com/karuidesu/library-management-api"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="GitHub Repository"
                    className="w-10 h-10 rounded-xl bg-slate-800/80 hover:bg-brand-600 border border-slate-700/70 hover:border-brand-500 flex items-center justify-center text-slate-300 hover:text-white transition-all shadow-md"
                  >
                    <i className='bx bxl-github text-xl'></i>
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.3}>
          <div className="mt-14 flex justify-center">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2.5 px-8 py-3.5 bg-brand-600 hover:bg-brand-500 text-white font-medium rounded-2xl transition-all duration-300 shadow-lg shadow-brand-600/25 hover:shadow-brand-600/40 hover:-translate-y-0.5 group"
            >
              <span>{t("projects.see_all")}</span>
              <i className='bx bx-right-arrow-alt text-xl group-hover:translate-x-1.5 transition-transform'></i>
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
