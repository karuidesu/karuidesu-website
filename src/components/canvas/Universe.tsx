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
      const numStars = Math.floor((width * height) / 9000);
      for (let i = 0; i < numStars; i++) {
        stars.push({
          x: Math.random() * width,
          y: Math.random() * height,
          radius: Math.random() * 1.3 + 0.4,
          alpha: Math.random(),
          speed: Math.random() * 0.04 + 0.008,
          blinkSpeed: Math.random() * 0.015 + 0.004,
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
        const numParticles = 500;
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
            size: Math.random() * 1.4 + 0.2,
            r: Math.floor(Math.random() * 50 + 100),
            g: Math.floor(Math.random() * 100 + 100),
            b: Math.floor(Math.random() * 150 + 150)
          });
        }
        
        galaxies.push({ cx, cy, particles, vx: (Math.random() - 0.5) * 0.02, vy: (Math.random() - 0.5) * 0.02 });
      }
    };

    // Shooting star state
    interface ShootingStar {
      x: number;
      y: number;
      length: number;
      speed: number;
      angle: number;
      alpha: number;
      maxAlpha: number;
      life: number;
      maxLife: number;
      thickness: number;
      active: boolean;
    }

    let shootingStar: ShootingStar | null = null;
    let nextShootingStarDelay = Math.random() * 180 + 120; // 2 to 5 seconds initial delay

    const spawnShootingStar = () => {
      const angle = (Math.PI / 180) * (Math.random() * 20 + 35); // 35° to 55° downward diagonal
      const startX = Math.random() * (width * 0.75) + width * 0.05;
      const startY = Math.random() * (height * 0.35);
      const speed = Math.random() * 6 + 10;
      const maxLife = Math.floor(Math.random() * 40 + 50);

      shootingStar = {
        x: startX,
        y: startY,
        length: Math.random() * 100 + 90,
        speed,
        angle,
        alpha: 0,
        maxAlpha: Math.random() * 0.35 + 0.65,
        life: 0,
        maxLife,
        thickness: Math.random() * 1.5 + 1.2,
        active: true,
      };
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

      // Draw Stars (quieter, less crowded)
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

        if (s.radius > 1.5) {
          ctx.shadowBlur = 8;
          ctx.shadowColor = '#38bdf8';
          ctx.fill();
          ctx.shadowBlur = 0;
        }
      }

      // Subtle constellation links (sparse)
      ctx.strokeStyle = 'rgba(56, 189, 248, 0.035)';
      ctx.lineWidth = 0.5;
      for (let i = 0; i < stars.length; i += 8) {
        for (let j = i + 1; j < stars.length; j += 8) {
          const dx = stars[i].x - stars[j].x;
          const dy = stars[i].y - stars[j].y;
          if (dx * dx + dy * dy < 7500) {
            ctx.beginPath();
            ctx.moveTo(stars[i].x, stars[i].y);
            ctx.lineTo(stars[j].x, stars[j].y);
            ctx.stroke();
          }
        }
      }

      // Shooting Star (Étoile filante) logic
      if (shootingStar && shootingStar.active) {
        shootingStar.life++;
        const progress = shootingStar.life / shootingStar.maxLife;

        // Smooth fade-in then fade-out curve
        if (progress < 0.25) {
          shootingStar.alpha = (progress / 0.25) * shootingStar.maxAlpha;
        } else {
          shootingStar.alpha = (1 - (progress - 0.25) / 0.75) * shootingStar.maxAlpha;
        }

        const headX = shootingStar.x;
        const headY = shootingStar.y;
        const tailX = headX - Math.cos(shootingStar.angle) * shootingStar.length;
        const tailY = headY - Math.sin(shootingStar.angle) * shootingStar.length;

        // Gradient trail
        const trailGrad = ctx.createLinearGradient(headX, headY, tailX, tailY);
        trailGrad.addColorStop(0, `rgba(255, 255, 255, ${shootingStar.alpha})`);
        trailGrad.addColorStop(0.2, `rgba(56, 189, 248, ${shootingStar.alpha * 0.8})`);
        trailGrad.addColorStop(1, 'rgba(56, 189, 248, 0)');

        ctx.save();
        ctx.strokeStyle = trailGrad;
        ctx.lineWidth = shootingStar.thickness;
        ctx.lineCap = 'round';
        ctx.shadowBlur = 12;
        ctx.shadowColor = '#38bdf8';

        ctx.beginPath();
        ctx.moveTo(tailX, tailY);
        ctx.lineTo(headX, headY);
        ctx.stroke();

        // Glowing star head
        ctx.fillStyle = `rgba(255, 255, 255, ${shootingStar.alpha})`;
        ctx.beginPath();
        ctx.arc(headX, headY, shootingStar.thickness * 1.3, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();

        // Advance shooting star
        shootingStar.x += Math.cos(shootingStar.angle) * shootingStar.speed;
        shootingStar.y += Math.sin(shootingStar.angle) * shootingStar.speed;

        if (shootingStar.life >= shootingStar.maxLife || shootingStar.x > width + 100 || shootingStar.y > height + 100) {
          shootingStar.active = false;
          shootingStar = null;
          // Set random delay before the next shooting star (roughly 4 to 8 seconds at 60fps)
          nextShootingStarDelay = Math.random() * 240 + 200;
        }
      } else {
        nextShootingStarDelay--;
        if (nextShootingStarDelay <= 0) {
          spawnShootingStar();
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
