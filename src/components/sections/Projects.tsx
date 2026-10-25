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
        <Reveal className="flex flex-col md:flex-row justify-between items-end gap-6 mb-14">
          <div>
            <h2 className="font-display font-semibold text-4xl md:text-5xl text-white">
              {t("projects.title")}
            </h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Project 1: Kesinonou Kpôla */}
          <Reveal delay={0.1}>
            <div className="group relative w-full rounded-3xl overflow-hidden shadow-lg bg-slate-900/50 backdrop-blur-md border border-slate-800/90 hover:border-brand-500/50 flex flex-col h-full transition-all duration-300 p-5 sm:p-6">
              <div className="relative w-full rounded-2xl overflow-hidden shadow-xl border border-slate-800/80 mb-6 bg-transparent group-hover:border-brand-500/40 transition-colors">
                <img
                  src="/assets/projects/kesinonou.jpeg"
                  alt={t("projects.p3.title")}
                  className="w-full h-auto block rounded-2xl transition-transform duration-500 ease-out group-hover:scale-105"
                />
              </div>

              <div className="flex flex-col flex-grow">
                <h3 className="text-white font-display font-semibold text-2xl mb-3 leading-snug group-hover:text-brand-300 transition-colors">
                  {t("projects.p3.title")}
                </h3>

                <p className="text-slate-300 text-sm font-light leading-relaxed mb-6 line-clamp-4">
                  {t("projects.p3.desc")}
                </p>

                <div className="flex items-center justify-between w-full pt-4 mt-auto border-t border-slate-800/60">
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2.5 py-1 bg-slate-800/80 backdrop-blur-sm text-slate-200 text-xs font-medium rounded-md border border-slate-700/60">Django</span>
                    <span className="px-2.5 py-1 bg-slate-800/80 backdrop-blur-sm text-slate-200 text-xs font-medium rounded-md border border-slate-700/60">PostgreSQL</span>
                    <span className="px-2.5 py-1 bg-slate-800/80 backdrop-blur-sm text-slate-200 text-xs font-medium rounded-md border border-slate-700/60">Next.js</span>
                  </div>

                  <a
                    href="https://github.com/karuidesu/inheritage-manager"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="GitHub Repository"
                    className="w-10 h-10 rounded-xl bg-slate-800/80 hover:bg-brand-600 border border-slate-700/70 hover:border-brand-500 flex items-center justify-center text-slate-300 hover:text-white transition-all shadow-md shrink-0"
                  >
                    <i className='bx bxl-github text-xl'></i>
                  </a>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Project 2: Wiko */}
          <Reveal delay={0.2}>
            <div className="group relative w-full rounded-3xl overflow-hidden shadow-lg bg-slate-900/50 backdrop-blur-md border border-slate-800/90 hover:border-brand-500/50 flex flex-col h-full transition-all duration-300 p-5 sm:p-6">
              <div className="relative w-full rounded-2xl overflow-hidden shadow-xl border border-slate-800/80 mb-6 bg-transparent group-hover:border-brand-500/40 transition-colors">
                <img
                  src="/assets/projects/wiko.jpeg"
                  alt={t("projects.wiko.title")}
                  className="w-full h-auto block rounded-2xl transition-transform duration-500 ease-out group-hover:scale-105"
                />
              </div>

              <div className="flex flex-col flex-grow">
                <h3 className="text-white font-display font-semibold text-2xl mb-3 leading-snug group-hover:text-brand-300 transition-colors">
                  {t("projects.wiko.title")}
                </h3>

                <p className="text-slate-300 text-sm font-light leading-relaxed mb-6 line-clamp-4">
                  {t("projects.wiko.desc")}
                </p>

                <div className="flex items-center justify-between w-full pt-4 mt-auto border-t border-slate-800/60">
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2.5 py-1 bg-slate-800/80 backdrop-blur-sm text-slate-200 text-xs font-medium rounded-md border border-slate-700/60">Next.js</span>
                    <span className="px-2.5 py-1 bg-slate-800/80 backdrop-blur-sm text-slate-200 text-xs font-medium rounded-md border border-slate-700/60">FastAPI</span>
                    <span className="px-2.5 py-1 bg-slate-800/80 backdrop-blur-sm text-slate-200 text-xs font-medium rounded-md border border-slate-700/60">PostgreSQL</span>
                  </div>

                  <a
                    href="https://github.com/karuidesu/wiki-manager"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="GitHub Repository"
                    className="w-10 h-10 rounded-xl bg-slate-800/80 hover:bg-brand-600 border border-slate-700/70 hover:border-brand-500 flex items-center justify-center text-slate-300 hover:text-white transition-all shadow-md shrink-0"
                  >
                    <i className='bx bxl-github text-xl'></i>
                  </a>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Project 3: Agbale */}
          <Reveal delay={0.3}>
            <div className="group relative w-full rounded-3xl overflow-hidden shadow-lg bg-slate-900/50 backdrop-blur-md border border-slate-800/90 hover:border-brand-500/50 flex flex-col h-full transition-all duration-300 p-5 sm:p-6">
              <div className="relative w-full rounded-2xl overflow-hidden shadow-xl border border-slate-800/80 mb-6 bg-transparent group-hover:border-brand-500/40 transition-colors">
                <img
                  src="/assets/projects/agbale.jpeg"
                  alt={t("projects.p2.title")}
                  className="w-full h-auto block rounded-2xl transition-transform duration-500 ease-out group-hover:scale-105"
                />
              </div>

              <div className="flex flex-col flex-grow">
                <h3 className="text-white font-display font-semibold text-2xl mb-3 leading-snug group-hover:text-brand-300 transition-colors">
                  {t("projects.p2.title")}
                </h3>

                <p className="text-slate-300 text-sm font-light leading-relaxed mb-6 line-clamp-4">
                  {t("projects.p2.desc")}
                </p>

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
                    className="w-10 h-10 rounded-xl bg-slate-800/80 hover:bg-brand-600 border border-slate-700/70 hover:border-brand-500 flex items-center justify-center text-slate-300 hover:text-white transition-all shadow-md shrink-0"
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
