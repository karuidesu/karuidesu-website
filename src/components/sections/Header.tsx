"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/components/LanguageContext';

export default function Header() {
  const { lang, setLang, t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
      
      const sections = ['home', 'about', 'skills', 'projects', 'volunteer', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            setActiveSection(section);
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: "about", i18n: "nav.about" },
    { id: "skills", i18n: "nav.skills" },
    { id: "projects", i18n: "nav.projects" },
    { id: "volunteer", i18n: "nav.volunteer" },
    { id: "interests", i18n: "interests.label" },
    { id: "contact", i18n: "nav.contact" },
  ];

  return (
    <header id="header"
      className={`fixed top-0 left-0 w-full h-[72px] px-[5%] md:px-[9%] transition-all duration-300 z-50 flex items-center justify-between ${
        scrolled ? 'bg-slate-950/95 backdrop-blur-md border-b border-slate-800 shadow-lg shadow-black/50' : 'bg-transparent border-b border-transparent'
      }`}>
      <Link href="/#home" className="logo font-display font-bold text-xl text-brand-600 tracking-wide">
        @karuidesu
      </Link>

      <nav id="navbar" className={`${menuOpen ? 'flex flex-col absolute top-[72px] left-0 w-full bg-slate-950/98 p-6 border-b border-slate-800 shadow-xl' : 'hidden'} md:static md:flex md:flex-row md:bg-transparent md:p-0 md:border-none md:shadow-none gap-8 items-center`}>
        {navLinks.map((link) => (
          <Link key={link.id} href={`/#${link.id}`} onClick={() => setMenuOpen(false)}
            className={`text-base font-medium transition-colors relative group ${activeSection === link.id ? 'text-brand-600' : 'text-slate-300 hover:text-brand-600'}`}>
            <span>{t(link.i18n)}</span>
            <span
              className={`absolute -bottom-1 left-0 h-[2px] bg-brand-600 transition-all duration-300 ${activeSection === link.id ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
          </Link>
        ))}
      </nav>

      <div className="flex items-center gap-4">

        <div id="langToggle" className="flex gap-1 bg-slate-800/50 p-1 rounded-full border border-slate-800">
          <button onClick={() => setLang("fr")}
            className={`text-xs font-semibold px-3 py-1.5 rounded-full transition-all ${lang === 'fr' ? 'bg-brand-600 text-white scale-105 shadow-[0_4px_6px_-1px_rgba(2,132,199,0.3)]' : 'text-slate-400 hover:text-brand-600'}`}>FR</button>
          <button onClick={() => setLang("en")}
            className={`text-xs font-semibold px-3 py-1.5 rounded-full transition-all ${lang === 'en' ? 'bg-brand-600 text-white scale-105 shadow-[0_4px_6px_-1px_rgba(2,132,199,0.3)]' : 'text-slate-400 hover:text-brand-600'}`}>EN</button>
        </div>

        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden flex flex-col gap-[5px] p-2">
          <span className={`block w-6 h-[2px] bg-brand-600 rounded-full transition-transform ${menuOpen ? 'rotate-45 translate-y-[7px]' : ''}`}></span>
          <span className={`block w-6 h-[2px] bg-brand-600 rounded-full transition-opacity ${menuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-6 h-[2px] bg-brand-600 rounded-full transition-transform ${menuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`}></span>
        </button>
      </div>
    </header>
  );
}
