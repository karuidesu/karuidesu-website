"use client";

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/components/LanguageContext';
import { Reveal } from '@/components/Reveal';

export default function ProjectsAll() {
  const { t } = useLanguage();

  const projectsList = [
    {
      id: "p3",
      titleKey: "projects.p3.title",
      descKey: "projects.p3.desc",
      image: "/assets/projects/kesinonou.jpeg",
      tags: ["Python", "FastAPI", "BPMN", "PostgreSQL"],
      github: "https://github.com/karuidesu/inheritage-manager",
    },
    {
      id: "wiko",
      titleKey: "projects.wiko.title",
      descKey: "projects.wiko.desc",
      image: "/assets/projects/wiko.jpeg",
      tags: ["Next.js", "FastAPI", "PostgreSQL"],
      github: "https://github.com/karuidesu/wiki-manager",
    },
    {
      id: "p2",
      titleKey: "projects.p2.title",
      descKey: "projects.p2.desc",
      image: "/assets/projects/agbale.jpeg",
      tags: ["FastAPI", "Next.js", "PostgreSQL"],
      github: "https://github.com/karuidesu/library-management-api",
    },
    {
      id: "p1",
      titleKey: "projects.p1.title",
      descKey: "projects.p1.desc",
      image: "/assets/projects/backend-si.jpg",
      tags: ["Python", "Django", "REST API"],
      github: "https://github.com/karuidesu/School-SI-management",
    },
    {
      id: "p5",
      titleKey: "projects.p5.title",
      descKey: "projects.p5.desc",
      image: "/assets/projects/gestion-salles-epl.jpg",
      tags: ["BPMN 2.0", "UML"],
      github: "https://github.com/karuidesu/gramsApi",
    },
  ];

  return (
    <section id="projects_all" className="min-h-screen py-16 px-[5%] md:px-[9%] bg-transparent relative z-10">
      <div className="max-w-6xl mx-auto w-full">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-brand-400 hover:text-brand-300 text-sm font-medium mb-10 hover:gap-3 transition-all group"
        >
          <i className='bx bx-left-arrow-alt text-xl group-hover:-translate-x-1.5 transition-transform'></i>
          <span>{t("projects.back")}</span>
        </Link>

        <Reveal className="text-center md:text-left mb-14">
          <h2 className="font-display font-semibold text-4xl md:text-5xl text-white mb-4">
            {t("projects.all.title")}
          </h2>
          <p className="text-lg md:text-xl leading-relaxed text-slate-300 font-light max-w-3xl">
            {t("projects.all.subtitle")}
          </p>
        </Reveal>

        {/* Projects List: Image on Left, Bold Title & Full Description on Right */}
        <div className="space-y-10 md:space-y-12">
          {projectsList.map((project, idx) => (
            <Reveal key={project.id} delay={0.1 * (idx % 3)}>
              <div className="group relative w-full rounded-3xl overflow-hidden shadow-2xl bg-slate-900/50 backdrop-blur-md border border-slate-800/90 hover:border-brand-500/50 p-6 md:p-8 lg:p-9 flex flex-col md:flex-row items-center gap-8 lg:gap-12 transition-all duration-300">
                {/* Left: Image cleanly framed without extra background block, rounded corners, full occupy */}
                <div className="w-full md:w-5/12 lg:w-1/2 shrink-0 rounded-2xl overflow-hidden relative shadow-xl border border-slate-800/80 bg-transparent group-hover:border-brand-500/40 transition-colors">
                  <img
                    src={project.image}
                    alt={t(project.titleKey)}
                    className="w-full h-auto block rounded-2xl transition-transform duration-500 ease-out group-hover:scale-[1.02]"
                  />
                </div>

                {/* Right: Title in bold on top, full description underneath */}
                <div className="w-full md:w-7/12 lg:w-1/2 flex flex-col justify-center">
                  <h3 className="text-white font-display font-bold text-2xl sm:text-3xl md:text-4xl mb-4 leading-snug group-hover:text-brand-300 transition-colors">
                    {t(project.titleKey)}
                  </h3>

                  <p className="text-slate-300 text-sm sm:text-base md:text-lg font-light leading-relaxed mb-6">
                    {t(project.descKey)}
                  </p>

                  <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-800/60 mt-auto">
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-slate-800/80 backdrop-blur-sm text-slate-200 text-xs sm:text-sm font-medium rounded-lg border border-slate-700/60"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        aria-label="GitHub Repository"
                        className="w-11 h-11 rounded-xl bg-slate-800/80 hover:bg-brand-600 border border-slate-700/70 hover:border-brand-500 flex items-center justify-center text-slate-300 hover:text-white transition-all shadow-md shrink-0"
                      >
                        <i className='bx bxl-github text-2xl'></i>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Hackathons & Awards Section */}
        <Reveal className="mt-24 mb-14 text-center md:text-left">
          <h2 className="font-display font-semibold text-4xl md:text-5xl text-white">
            {t("hackathons.title")}
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {/* Hackathon 1: Hack4Peace UNFPA */}
          <Reveal delay={0.1}>
            <div className="group relative w-full rounded-3xl overflow-hidden shadow-lg bg-slate-900/50 backdrop-blur-md border border-slate-800/90 hover:border-brand-500/50 p-7 flex flex-col h-full transition-colors duration-300">
              <div className="flex items-center justify-between mb-4">
                <span className="inline-block px-3 py-1 bg-brand-500/10 text-brand-300 text-xs font-medium rounded-lg border border-brand-500/20">
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
                <span className="inline-block px-3 py-1 bg-amber-500/10 text-amber-300 text-xs font-medium rounded-lg border border-amber-500/20">
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
                <span className="inline-block px-3 py-1 bg-sky-500/10 text-sky-300 text-xs font-medium rounded-lg border border-sky-500/20">
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
