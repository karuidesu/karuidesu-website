"use client";

import React from 'react';
import { useLanguage } from '@/components/LanguageContext';
import { Reveal } from '@/components/Reveal';
import { ChessCanvas, BizCanvas, MangaCanvas, PsycheCanvas } from '@/components/canvas/CanvasAnimations';

export default function Interests() {
  const { t } = useLanguage();

  return (
    <section id="interests" className="scroll-mt-[72px] py-16 px-[5%] md:px-[9%] relative z-10">
      <div className="max-w-7xl mx-auto">
        <Reveal className="text-center mb-16 flex flex-col items-center">
          <div className="inline-flex items-center gap-4 mb-4 justify-center">
            <span className="w-8 h-[2px] bg-brand-600"></span>
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-brand-600">
              {t("interests.label")}
            </span>
            <span className="w-8 h-[2px] bg-brand-600"></span>
          </div>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-white">
            {t("interests.title")}
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Reveal delay={0.1}>
            <div className="group h-full bg-slate-900/50 rounded-3xl border border-slate-800 p-8 hover:bg-slate-800 hover:border-brand-600 transition-all duration-300">
              <div className="w-full h-40 mb-6 rounded-2xl bg-slate-950 flex items-center justify-center relative overflow-hidden border border-slate-800/50">
                <ChessCanvas />
              </div>
              <h3 className="text-xl font-bold text-white mb-3 font-display group-hover:text-brand-400 transition-colors">
                {t("interests.chess.title")}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                {t("interests.chess.text")}
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="group h-full bg-slate-900/50 rounded-3xl border border-slate-800 p-8 hover:bg-slate-800 hover:border-brand-600 transition-all duration-300">
              <div className="w-full h-40 mb-6 rounded-2xl bg-slate-950 flex items-center justify-center relative overflow-hidden border border-slate-800/50">
                <MangaCanvas />
              </div>
              <h3 className="text-xl font-bold text-white mb-3 font-display group-hover:text-brand-400 transition-colors">
                {t("interests.manga.title")}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                {t("interests.manga.text")}
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="group h-full bg-slate-900/50 rounded-3xl border border-slate-800 p-8 hover:bg-slate-800 hover:border-brand-600 transition-all duration-300">
              <div className="w-full h-40 mb-6 rounded-2xl bg-slate-950 flex items-center justify-center relative overflow-hidden border border-slate-800/50">
                <BizCanvas />
              </div>
              <h3 className="text-xl font-bold text-white mb-3 font-display group-hover:text-brand-400 transition-colors">
                {t("interests.business.title")}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                {t("interests.business.text")}
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.4}>
            <div className="group h-full bg-slate-900/50 rounded-3xl border border-slate-800 p-8 hover:bg-slate-800 hover:border-brand-600 transition-all duration-300">
              <div className="w-full h-40 mb-6 rounded-2xl bg-slate-950 flex items-center justify-center relative overflow-hidden border border-slate-800/50">
                <PsycheCanvas />
              </div>
              <h3 className="text-xl font-bold text-white mb-3 font-display group-hover:text-brand-400 transition-colors">
                {t("interests.psyche.title")}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                {t("interests.psyche.text")}
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
