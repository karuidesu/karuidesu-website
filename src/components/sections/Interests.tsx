"use client";

import React from 'react';
import { useLanguage } from '@/components/LanguageContext';
import { Reveal } from '@/components/Reveal';
import { NeuroCanvas, PsycheCanvas, MangaCanvas, AstroCanvas } from '@/components/canvas/CanvasAnimations';

export default function Interests() {
  const { t } = useLanguage();

  return (
    <section id="interests" className="scroll-mt-[72px] py-16 px-[5%] md:px-[9%] relative z-10">
      <div className="max-w-7xl mx-auto">
        <Reveal className="text-center mb-16 flex flex-col items-center">
          <div className="inline-flex items-center gap-4 mb-4 justify-center">
            <span className="w-8 h-[2px] bg-brand-600"></span>
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-brand-600">
              {t("interests.label")}
            </span>
            <span className="w-8 h-[2px] bg-brand-600"></span>
          </div>
          <h2 className="font-display font-semibold text-4xl md:text-5xl text-white">
            {t("interests.title")}
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {/* Card 1: Neurosciences */}
          <Reveal delay={0.1}>
            <div className="group h-full bg-slate-900/50 rounded-3xl border border-slate-800 p-7 hover:bg-slate-800/80 hover:border-brand-600 transition-all duration-300 flex flex-col items-center">
              <div className="w-full h-36 mb-5 rounded-2xl bg-slate-950 flex items-center justify-center relative overflow-hidden border border-slate-800/50 shrink-0">
                <NeuroCanvas />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2 font-display group-hover:text-brand-400 transition-colors text-center h-14 flex items-center justify-center">
                {t("interests.neuroscience.title")}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed text-center font-light">
                {t("interests.neuroscience.text")}
              </p>
            </div>
          </Reveal>

          {/* Card 2: Astrophysique */}
          <Reveal delay={0.2}>
            <div className="group h-full bg-slate-900/50 rounded-3xl border border-slate-800 p-7 hover:bg-slate-800/80 hover:border-brand-600 transition-all duration-300 flex flex-col items-center">
              <div className="w-full h-36 mb-5 rounded-2xl bg-slate-950 flex items-center justify-center relative overflow-hidden border border-slate-800/50 shrink-0">
                <AstroCanvas />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2 font-display group-hover:text-brand-400 transition-colors text-center h-14 flex items-center justify-center">
                {t("interests.astrophysics.title")}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed text-center font-light">
                {t("interests.astrophysics.text")}
              </p>
            </div>
          </Reveal>

          {/* Card 3: Psychologie humaine */}
          <Reveal delay={0.3}>
            <div className="group h-full bg-slate-900/50 rounded-3xl border border-slate-800 p-7 hover:bg-slate-800/80 hover:border-brand-600 transition-all duration-300 flex flex-col items-center">
              <div className="w-full h-36 mb-5 rounded-2xl bg-slate-950 flex items-center justify-center relative overflow-hidden border border-slate-800/50 shrink-0">
                <PsycheCanvas />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2 font-display group-hover:text-brand-400 transition-colors text-center h-14 flex items-center justify-center">
                {t("interests.psyche.title")}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed text-center font-light">
                {t("interests.psyche.text")}
              </p>
            </div>
          </Reveal>

          {/* Card 4: Mangas */}
          <Reveal delay={0.4}>
            <div className="group h-full bg-slate-900/50 rounded-3xl border border-slate-800 p-7 hover:bg-slate-800/80 hover:border-brand-600 transition-all duration-300 flex flex-col items-center">
              <div className="w-full h-36 mb-5 rounded-2xl bg-slate-950 flex items-center justify-center relative overflow-hidden border border-slate-800/50 shrink-0">
                <MangaCanvas />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2 font-display group-hover:text-brand-400 transition-colors text-center h-14 flex items-center justify-center">
                {t("interests.manga.title")}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed text-center font-light">
                {t("interests.manga.text")}
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
