"use client";

import React, { useEffect, useRef } from 'react';

export default function Universe() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = window.innerWidth;
    let height = window.innerHeight;

    let stars: any[] = [];
    let nebulae: any[] = [];
    let galaxies: any[] = [];

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    const init = () => {
      stars = [];
      const numStars = Math.floor((width * height) / 3000);
      for (let i = 0; i < numStars; i++) {
        stars.push({
          x: Math.random() * width,
          y: Math.random() * height,
          radius: Math.random() * 1.5 + 0.5,
          alpha: Math.random(),
          speed: Math.random() * 0.05 + 0.01,
          blinkSpeed: Math.random() * 0.02 + 0.005,
        });
      }

      nebulae = [];
      for (let i = 0; i < 4; i++) {
        nebulae.push({
          x: Math.random() * width,
          y: Math.random() * height,
          radius: Math.random() * 300 + 150,
          r: Math.floor(Math.random() * 50 + 10),
          g: Math.floor(Math.random() * 50 + 20),
          b: Math.floor(Math.random() * 100 + 100),
          vx: (Math.random() - 0.5) * 0.2,
          vy: (Math.random() - 0.5) * 0.2,
        });
      }

      galaxies = [];
      // Generate one beautiful spiral galaxy on the upper right
      for (let g = 0; g < 1; g++) {
        const cx = width * 0.8; // upper right
        const cy = height * 0.2; // upper right
        const particles = [];
        const numParticles = 600;
        const arms = 3;

        for (let i = 0; i < numParticles; i++) {
          const armIndex = i % arms;
          const angleBase = (Math.PI * 2 * armIndex) / arms;
          
          // Spiral offset
          const dist = Math.random() * 250 + 20;
          const angleOffset = dist * 0.015; // Tightness of the spiral
          const angle = angleBase + angleOffset + (Math.random() - 0.5) * 0.5;

          particles.push({
            dist,
            angle,
            speed: (300 - dist) * 0.00001, // Inner particles rotate slower
            size: Math.random() * 1.5 + 0.2,
            r: Math.floor(Math.random() * 50 + 100),
            g: Math.floor(Math.random() * 100 + 100),
            b: Math.floor(Math.random() * 150 + 150)
          });
        }
        
        galaxies.push({ cx, cy, particles, vx: (Math.random() - 0.5) * 0.02, vy: (Math.random() - 0.5) * 0.02 });
      }
    };

    const animate = () => {
      // Clear with very dark blue/black
      ctx.fillStyle = '#02000f';
      ctx.fillRect(0, 0, width, height);

      // Draw Nebulae
      for (let n of nebulae) {
        n.x += n.vx;
        n.y += n.vy;

        if (n.x < -n.radius) n.x = width + n.radius;
        if (n.x > width + n.radius) n.x = -n.radius;
        if (n.y < -n.radius) n.y = height + n.radius;
        if (n.y > height + n.radius) n.y = -n.radius;

        const grad = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, n.radius);
        grad.addColorStop(0, `rgba(${n.r}, ${n.g}, ${n.b}, 0.15)`);
        grad.addColorStop(1, `rgba(${n.r}, ${n.g}, ${n.b}, 0)`);
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.radius, 0, Math.PI * 2);
        ctx.fill();
      }

      // Draw Galaxies
      for (let g of galaxies) {
        g.cx += g.vx;
        g.cy += g.vy;
        
        if (g.cx < -300) g.cx = width + 300;
        if (g.cx > width + 300) g.cx = -300;
        if (g.cy < -300) g.cy = height + 300;
        if (g.cy > height + 300) g.cy = -300;

        for (let p of g.particles) {
          p.angle -= p.speed; // Rotate spiral
          
          const px = g.cx + Math.cos(p.angle) * p.dist;
          const py = g.cy + Math.sin(p.angle) * p.dist * 0.5; // Slightly tilted view
          
          ctx.fillStyle = `rgba(${p.r}, ${p.g}, ${p.b}, ${1 - (p.dist / 250)})`;
          ctx.beginPath();
          ctx.arc(px, py, p.size, 0, Math.PI * 2);
          ctx.fill();
          
          if (p.size > 1.2) {
             ctx.shadowBlur = 8;
             ctx.shadowColor = `rgb(${p.r}, ${p.g}, ${p.b})`;
             ctx.fill();
             ctx.shadowBlur = 0;
          }
        }
      }

      // Draw Stars
      for (let s of stars) {
        s.alpha += s.blinkSpeed;
        if (s.alpha >= 1 || s.alpha <= 0) {
          s.blinkSpeed *= -1;
        }
        
        s.y -= s.speed;
        if (s.y < 0) {
          s.y = height;
          s.x = Math.random() * width;
        }

        ctx.beginPath();
        ctx.arc(s.x, s.y, s.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${Math.abs(s.alpha)})`;
        ctx.fill();

        if (s.radius > 1.8) {
          ctx.shadowBlur = 10;
          ctx.shadowColor = '#38bdf8';
          ctx.fill();
          ctx.shadowBlur = 0;
        }
      }

      // Connecting lines
      ctx.strokeStyle = 'rgba(56, 189, 248, 0.05)';
      ctx.lineWidth = 0.5;
      for (let i = 0; i < stars.length; i += 6) {
        for (let j = i + 1; j < stars.length; j += 6) {
          const dx = stars[i].x - stars[j].x;
          const dy = stars[i].y - stars[j].y;
          if (dx * dx + dy * dy < 10000) {
            ctx.beginPath();
            ctx.moveTo(stars[i].x, stars[i].y);
            ctx.lineTo(stars[j].x, stars[j].y);
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener('resize', resize);
    resize();
    init();
    animate();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none -z-10"
    />
  );
}
