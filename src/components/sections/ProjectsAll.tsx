"use client";

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/components/LanguageContext';
import { Reveal } from '@/components/Reveal';

export default function ProjectsAll() {
  const { t } = useLanguage();

  return (
    <section id="projects_all" className="min-h-[calc(100vh-72px)] py-16 px-[5%] md:px-[9%] bg-transparent flex flex-col justify-center relative z-10">
      <div className="max-w-7xl mx-auto w-full">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-brand-400 hover:text-brand-300 text-sm font-medium mb-10 hover:gap-3 transition-all group"
        >
          <i className='bx bx-left-arrow-alt text-xl group-hover:-translate-x-1.5 transition-transform'></i>
          <span>{t("projects.back")}</span>
        </Link>

        <Reveal className="text-center md:text-left mb-16">
          <div className="inline-flex items-center gap-4 mb-4">
            <span className="w-8 h-[2px] bg-brand-600 hidden md:block"></span>
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-brand-600">
              Portfolio
            </span>
          </div>
          <h2 className="font-display font-semibold text-4xl md:text-5xl text-white mb-4">
            {t("projects.all.title")}
          </h2>
          <p className="text-lg md:text-xl leading-relaxed text-slate-300 font-light max-w-3xl">
            {t("projects.all.subtitle")}
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {/* Project 1: Family Estate & Asset Management Platform */}
          <Reveal delay={0.1}>
            <div className="group relative w-full rounded-3xl overflow-hidden shadow-lg bg-slate-900/50 backdrop-blur-md border border-slate-800/90 hover:border-brand-500/50 flex flex-col h-full transition-colors duration-300">
              <div className="relative h-52 md:h-60 w-full overflow-hidden shrink-0 bg-slate-950">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: "url('/assets/projects/inheritage.jpg')" }}
                >
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
              </div>
              <div className="p-7 md:p-8 flex flex-col flex-grow">
                <span className="inline-block px-3 py-1 bg-brand-500/10 text-brand-300 text-xs font-medium uppercase tracking-wider rounded-lg border border-brand-500/20 w-fit mb-3">
                  {t("projects.p3.tag")}
                </span>
                <h3 className="text-white font-display font-semibold text-2xl mb-3 leading-tight group-hover:text-brand-300 transition-colors">
                  {t("projects.p3.title")}
                </h3>
                <p className="text-slate-300 text-sm font-light leading-relaxed mb-6 line-clamp-3">
                  {t("projects.p3.desc")}
                </p>
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
              <div className="relative h-52 md:h-60 w-full overflow-hidden shrink-0 bg-slate-950">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: "url('/assets/projects/gestion-bibliotheque.jpg')" }}
                >
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
              </div>
              <div className="p-7 md:p-8 flex flex-col flex-grow">
                <span className="inline-block px-3 py-1 bg-brand-500/10 text-brand-300 text-xs font-medium uppercase tracking-wider rounded-lg border border-brand-500/20 w-fit mb-3">
                  {t("projects.p2.tag")}
                </span>
                <h3 className="text-white font-display font-semibold text-2xl mb-3 leading-tight group-hover:text-brand-300 transition-colors">
                  {t("projects.p2.title")}
                </h3>
                <p className="text-slate-300 text-sm font-light leading-relaxed mb-6 line-clamp-3">
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
                    className="w-10 h-10 rounded-xl bg-slate-800/80 hover:bg-brand-600 border border-slate-700/70 hover:border-brand-500 flex items-center justify-center text-slate-300 hover:text-white transition-all shadow-md"
                  >
                    <i className='bx bxl-github text-xl'></i>
                  </a>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Project 3: School SI Management (EPL) */}
          <Reveal delay={0.3}>
            <div className="group relative w-full rounded-3xl overflow-hidden shadow-lg bg-slate-900/50 backdrop-blur-md border border-slate-800/90 hover:border-brand-500/50 flex flex-col h-full transition-colors duration-300">
              <div className="relative h-52 md:h-60 w-full overflow-hidden shrink-0 bg-slate-950">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: "url('/assets/projects/backend-si.jpg')" }}
                >
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
              </div>
              <div className="p-7 md:p-8 flex flex-col flex-grow">
                <span className="inline-block px-3 py-1 bg-brand-500/10 text-brand-300 text-xs font-medium uppercase tracking-wider rounded-lg border border-brand-500/20 w-fit mb-3">
                  {t("projects.p1.tag")}
                </span>
                <h3 className="text-white font-display font-semibold text-2xl mb-3 leading-tight group-hover:text-brand-300 transition-colors">
                  {t("projects.p1.title")}
                </h3>
                <p className="text-slate-300 text-sm font-light leading-relaxed mb-6 line-clamp-3">
                  {t("projects.p1.desc")}
                </p>
                <div className="flex items-center justify-between w-full pt-4 mt-auto border-t border-slate-800/60">
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2.5 py-1 bg-slate-800/80 backdrop-blur-sm text-slate-200 text-xs font-medium rounded-md border border-slate-700/60">Python</span>
                    <span className="px-2.5 py-1 bg-slate-800/80 backdrop-blur-sm text-slate-200 text-xs font-medium rounded-md border border-slate-700/60">Django</span>
                    <span className="px-2.5 py-1 bg-slate-800/80 backdrop-blur-sm text-slate-200 text-xs font-medium rounded-md border border-slate-700/60">REST API</span>
                  </div>
                  <a
                    href="https://github.com/karuidesu/School-SI-management"
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

          {/* Project 4: Vice Togo Association */}
          <Reveal delay={0.4}>
            <div className="group relative w-full rounded-3xl overflow-hidden shadow-lg bg-slate-900/50 backdrop-blur-md border border-slate-800/90 hover:border-brand-500/50 flex flex-col h-full transition-colors duration-300">
              <div className="relative h-52 md:h-60 w-full overflow-hidden shrink-0 bg-slate-950">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: "url('/assets/projects/vicetg-site.jpeg')" }}
                >
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
              </div>
              <div className="p-7 md:p-8 flex flex-col flex-grow">
                <span className="inline-block px-3 py-1 bg-brand-500/10 text-brand-300 text-xs font-medium uppercase tracking-wider rounded-lg border border-brand-500/20 w-fit mb-3">
                  {t("projects.p4.tag")}
                </span>
                <h3 className="text-white font-display font-semibold text-2xl mb-3 leading-tight group-hover:text-brand-300 transition-colors">
                  {t("projects.p4.title")}
                </h3>
                <p className="text-slate-300 text-sm font-light leading-relaxed mb-6 line-clamp-3">
                  {t("projects.p4.desc")}
                </p>
                <div className="flex items-center justify-between w-full pt-4 mt-auto border-t border-slate-800/60">
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2.5 py-1 bg-slate-800/80 backdrop-blur-sm text-slate-200 text-xs font-medium rounded-md border border-slate-700/60">Next.js</span>
                    <span className="px-2.5 py-1 bg-slate-800/80 backdrop-blur-sm text-slate-200 text-xs font-medium rounded-md border border-slate-700/60">Tailwind CSS</span>
                  </div>
                  <a
                    href="https://vicetgasso.vercel.app"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Live Website"
                    className="w-10 h-10 rounded-xl bg-slate-800/80 hover:bg-brand-600 border border-slate-700/70 hover:border-brand-500 flex items-center justify-center text-slate-300 hover:text-white transition-all shadow-md"
                  >
                    <i className='bx bx-link-external text-xl'></i>
                  </a>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Project 5: Gestion des Salles EPL */}
          <Reveal delay={0.5}>
            <div className="group relative w-full rounded-3xl overflow-hidden shadow-lg bg-slate-900/50 backdrop-blur-md border border-slate-800/90 hover:border-brand-500/50 flex flex-col h-full transition-colors duration-300">
              <div className="relative h-52 md:h-60 w-full overflow-hidden shrink-0 bg-slate-950">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: "url('/assets/projects/gestion-salles-epl.jpg')" }}
                >
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
              </div>
              <div className="p-7 md:p-8 flex flex-col flex-grow">
                <span className="inline-block px-3 py-1 bg-brand-500/10 text-brand-300 text-xs font-medium uppercase tracking-wider rounded-lg border border-brand-500/20 w-fit mb-3">
                  {t("projects.p5.tag")}
                </span>
                <h3 className="text-white font-display font-semibold text-2xl mb-3 leading-tight group-hover:text-brand-300 transition-colors">
                  {t("projects.p5.title")}
                </h3>
                <p className="text-slate-300 text-sm font-light leading-relaxed mb-6 line-clamp-3">
                  {t("projects.p5.desc")}
                </p>
                <div className="flex items-center justify-between w-full pt-4 mt-auto border-t border-slate-800/60">
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2.5 py-1 bg-slate-800/80 backdrop-blur-sm text-slate-200 text-xs font-medium rounded-md border border-slate-700/60">BPMN 2.0</span>
                    <span className="px-2.5 py-1 bg-slate-800/80 backdrop-blur-sm text-slate-200 text-xs font-medium rounded-md border border-slate-700/60">UML</span>
                  </div>
                  <a
                    href="https://github.com/karuidesu/gramsApi"
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

        {/* Hackathons & Awards Section */}
        <Reveal className="mt-28 mb-16 text-center md:text-left">
          <div className="inline-flex items-center gap-4 mb-4">
            <span className="w-8 h-[2px] bg-brand-600 hidden md:block"></span>
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-brand-600">
              {t("hackathons.label")}
            </span>
          </div>
          <h2 className="font-display font-semibold text-4xl md:text-5xl text-white">
            {t("hackathons.title")}
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Hackathon 1: Hack4Peace UNFPA */}
          <Reveal delay={0.1}>
            <div className="group relative w-full rounded-3xl overflow-hidden shadow-lg bg-slate-900/50 backdrop-blur-md border border-slate-800/90 hover:border-brand-500/50 p-7 flex flex-col h-full transition-colors duration-300">
              <div className="flex items-center justify-between mb-4">
                <span className="inline-block px-3 py-1 bg-brand-500/10 text-brand-300 text-xs font-medium uppercase tracking-wider rounded-lg border border-brand-500/20">
                  {t("hackathons.h1.tag")}
                </span>
                <i className='bx bx-award text-2xl text-brand-400'></i>
              </div>
              <h3 className="text-white font-display font-semibold text-xl mb-3 leading-snug group-hover:text-brand-300 transition-colors">
                {t("hackathons.h1.title")}
              </h3>
              <p className="text-slate-300 text-sm font-light leading-relaxed mb-6 flex-grow">
                {t("hackathons.h1.desc")}
              </p>
              <div className="flex items-center justify-between pt-4 mt-auto border-t border-slate-800/60">
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-slate-800/80 text-slate-200 text-xs font-medium rounded-md border border-slate-700/60">JavaScript</span>
                  <span className="px-2 py-1 bg-slate-800/80 text-slate-200 text-xs font-medium rounded-md border border-slate-700/60">Python</span>
                  <span className="px-2 py-1 bg-slate-800/80 text-slate-200 text-xs font-medium rounded-md border border-slate-700/60">Vonage</span>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Hackathon 2: 228 Code Challenge */}
          <Reveal delay={0.2}>
            <div className="group relative w-full rounded-3xl overflow-hidden shadow-lg bg-slate-900/50 backdrop-blur-md border border-slate-800/90 hover:border-brand-500/50 p-7 flex flex-col h-full transition-colors duration-300">
              <div className="flex items-center justify-between mb-4">
                <span className="inline-block px-3 py-1 bg-amber-500/10 text-amber-300 text-xs font-medium uppercase tracking-wider rounded-lg border border-amber-500/20">
                  {t("hackathons.h2.tag")}
                </span>
                <i className='bx bx-trophy text-2xl text-amber-400'></i>
              </div>
              <h3 className="text-white font-display font-semibold text-xl mb-3 leading-snug group-hover:text-brand-300 transition-colors">
                {t("hackathons.h2.title")}
              </h3>
              <p className="text-slate-300 text-sm font-light leading-relaxed mb-6 flex-grow">
                {t("hackathons.h2.desc")}
              </p>
              <div className="flex items-center justify-between pt-4 mt-auto border-t border-slate-800/60">
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-slate-800/80 text-slate-200 text-xs font-medium rounded-md border border-slate-700/60">Python</span>
                  <span className="px-2 py-1 bg-slate-800/80 text-slate-200 text-xs font-medium rounded-md border border-slate-700/60">Algorithms</span>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Hackathon 3: Miabe Hackathon (Darollo Technologies) */}
          <Reveal delay={0.3}>
            <div className="group relative w-full rounded-3xl overflow-hidden shadow-lg bg-slate-900/50 backdrop-blur-md border border-slate-800/90 hover:border-brand-500/50 p-7 flex flex-col h-full transition-colors duration-300">
              <div className="flex items-center justify-between mb-4">
                <span className="inline-block px-3 py-1 bg-sky-500/10 text-sky-300 text-xs font-medium uppercase tracking-wider rounded-lg border border-sky-500/20">
                  {t("hackathons.h3.tag")}
                </span>
                <i className='bx bx-group text-2xl text-sky-400'></i>
              </div>
              <h3 className="text-white font-display font-semibold text-xl mb-3 leading-snug group-hover:text-brand-300 transition-colors">
                {t("hackathons.h3.title")}
              </h3>
              <p className="text-slate-300 text-sm font-light leading-relaxed mb-6 flex-grow">
                {t("hackathons.h3.desc")}
              </p>
              <div className="flex items-center justify-between pt-4 mt-auto border-t border-slate-800/60">
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-slate-800/80 text-slate-200 text-xs font-medium rounded-md border border-slate-700/60">Team Prototype</span>
                  <span className="px-2 py-1 bg-slate-800/80 text-slate-200 text-xs font-medium rounded-md border border-slate-700/60">Innovation</span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
