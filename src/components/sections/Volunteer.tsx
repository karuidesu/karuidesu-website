"use client";

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/components/LanguageContext';
import { Reveal } from '@/components/Reveal';

const logos = [
  "/assets/logos/gdg_lome_logo.jpg",
  "/assets/logos/wtm-logo.png",
  "/assets/logos/tdev-logo.jpeg",
  "/assets/logos/logo-ujpod.jpg",
  "/assets/logos/logo_vicetg_bg.jpg",
  "/assets/logos/cncg-lome-logo.png",
  "/assets/logos/acf_logo.jpg",
  "/assets/logos/all-for-change_logo.jpg",
  "/assets/logos/pma_logo.png",
  "/assets/logos/solidarite-afrique_logo.jpg",
  "/assets/logos/tcd_logo.jpg"
];

const LOGO_SIZE = 80; // w-20 h-20 is 80px
const RADIUS = LOGO_SIZE / 2;

export default function Volunteer() {
  const { t, lang } = useLanguage();
  const containerRef = useRef<HTMLDivElement>(null);
  const elementsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (!containerRef.current) return;
    const container = containerRef.current;

    // Initialize balls
    const balls = logos.map((_, i) => ({
      x: Math.random() * (container.clientWidth - LOGO_SIZE),
      y: Math.random() * (container.clientHeight - LOGO_SIZE),
      vx: (Math.random() - 0.5) * 3,
      vy: (Math.random() - 0.5) * 3,
      radius: RADIUS,
      mass: 1
    }));

    let animationId: number;

    const update = () => {
      const width = container.clientWidth;
      const height = container.clientHeight;

      for (let i = 0; i < balls.length; i++) {
        let b = balls[i];

        // Wall collisions
        if (b.x <= 0) { b.x = 0; b.vx *= -1; }
        else if (b.x + LOGO_SIZE >= width) { b.x = width - LOGO_SIZE; b.vx *= -1; }

        if (b.y <= 0) { b.y = 0; b.vy *= -1; }
        else if (b.y + LOGO_SIZE >= height) { b.y = height - LOGO_SIZE; b.vy *= -1; }

        // Ball collisions
        for (let j = i + 1; j < balls.length; j++) {
          let b2 = balls[j];
          let dx = (b2.x + RADIUS) - (b.x + RADIUS);
          let dy = (b2.y + RADIUS) - (b.y + RADIUS);
          let dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < RADIUS * 2) {
            // Collision response
            let angle = Math.atan2(dy, dx);
            let sin = Math.sin(angle);
            let cos = Math.cos(angle);

            // Rotate velocities
            let vx1 = b.vx * cos + b.vy * sin;
            let vy1 = b.vy * cos - b.vx * sin;
            let vx2 = b2.vx * cos + b2.vy * sin;
            let vy2 = b2.vy * cos - b2.vx * sin;

            // Swap velocities (elastic collision with equal mass)
            let temp = vx1;
            vx1 = vx2;
            vx2 = temp;

            // Rotate velocities back
            b.vx = vx1 * cos - vy1 * sin;
            b.vy = vy1 * cos + vx1 * sin;
            b2.vx = vx2 * cos - vy2 * sin;
            b2.vy = vy2 * cos + vx2 * sin;

            // Separate to prevent sticking
            let overlap = (RADIUS * 2) - dist;
            let sepX = (overlap / 2) * cos;
            let sepY = (overlap / 2) * sin;

            b.x -= sepX;
            b.y -= sepY;
            b2.x += sepX;
            b2.y += sepY;
          }
        }

        b.x += b.vx;
        b.y += b.vy;

        // Apply to DOM
        if (elementsRef.current[i]) {
          elementsRef.current[i]!.style.transform = `translate(${b.x}px, ${b.y}px)`;
        }
      }

      animationId = requestAnimationFrame(update);
    };

    animationId = requestAnimationFrame(update);

    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <section id="volunteer" className="scroll-mt-[72px] py-16 px-[5%] md:px-[9%] bg-slate-900/40 border-y border-slate-800">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
        <Reveal className="lg:w-1/2">
          <div className="inline-flex items-center gap-4 mb-4">
            <span className="w-8 h-[2px] bg-brand-600 hidden lg:block"></span>
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-brand-600">
              {t("volunteer.label")}
            </span>
          </div>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-white mb-6">
            {t("volunteer.title")}
          </h2>
          <p className="text-lg text-slate-300 leading-relaxed font-light mb-8">
            {t("volunteer.text")}
          </p>
          <Link href="/volunteering" className="inline-flex items-center gap-2 px-6 py-3 bg-brand-600 text-white font-semibold rounded-xl hover:bg-brand-700 transition-colors shadow-lg shadow-brand-600/20">
            {t("volunteer.see_all")}
            <i className='bx bx-right-arrow-alt text-xl'></i>
          </Link>
        </Reveal>

        <Reveal delay={0.2} className="lg:w-1/2 w-full relative">
          <div className="absolute inset-0 bg-brand-500/5 blur-[100px] rounded-full pointer-events-none"></div>

          <div
            ref={containerRef}
            className="bg-slate-950/80 p-8 rounded-3xl border border-slate-800 relative z-10 shadow-2xl h-[400px] overflow-hidden w-full"
          >
            {logos.map((src, i) => (
              <div
                key={i}
                ref={el => { elementsRef.current[i] = el; }}
                className="absolute w-20 h-20 bg-white rounded-full flex items-center justify-center border-4 border-slate-700 shadow-lg overflow-hidden"
                style={{ top: 0, left: 0 }}
              >
                <img src={src} alt="Volunteer Logo" className="w-full h-full object-cover pointer-events-none" />
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
