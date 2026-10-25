"use client";

import React from 'react';
import { useLanguage } from '@/components/LanguageContext';
import { Reveal } from '@/components/Reveal';

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="scroll-mt-[72px] min-h-[calc(100vh-72px)] py-10 px-[5%] md:px-[9%] bg-slate-900/40 flex flex-col justify-center relative overflow-hidden">
      <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24 max-w-7xl mx-auto w-full">
        <Reveal className="flex-shrink-0 lg:w-5/12 text-center lg:text-left">
          <h2 className="font-display font-semibold text-6xl md:text-8xl leading-tight text-white"
            dangerouslySetInnerHTML={{ __html: t("about.title") }}>
          </h2>
        </Reveal>

        <Reveal delay={0.15} className="flex-1">
          <p className="text-lg md:text-xl leading-relaxed text-slate-300 font-light"
            dangerouslySetInnerHTML={{ __html: t("about.text") }}>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
