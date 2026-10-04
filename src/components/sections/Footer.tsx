"use client";

import React from 'react';
import { useLanguage } from '@/components/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer id="footer" className="bg-slate-950 py-10 px-[5%] md:px-[9%] border-t border-slate-900 mt-auto relative z-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">

        {/* Left: Copyright */}
        <div className="flex-1 flex justify-center md:justify-start">
          <p className="text-slate-500 text-sm font-medium">
            2026 © Designed by @karuidesu. {t("footer.rights")}
          </p>
        </div>

        {/* Middle: Socials */}
        <div className="flex-1 flex items-center justify-center gap-6">
          <a href="https://github.com/karuidesu" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-brand-600 transition-colors text-2xl">
            <i className='bx bxl-github'></i>
          </a>
          <a href="https://tg.linkedin.com/in/kekeli-diane" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-brand-600 transition-colors text-2xl">
            <i className='bx bxl-linkedin'></i>
          </a>
          <a href="https://x.com/karuidesu_" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-brand-600 transition-colors text-2xl">
            <i className='bx bxl-twitter'></i>
          </a>
        </div>

        {/* Right: Up Button */}
        <div className="flex-1 flex justify-center md:justify-end">
          <a href="/#home" className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-brand-600 hover:border-brand-600 transition-all">
            <i className='bx bx-up-arrow-alt text-xl'></i>
          </a>
        </div>
      </div>
    </footer>
  );
}
