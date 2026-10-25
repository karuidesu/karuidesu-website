"use client";

import React, { useEffect, useRef } from 'react';

export const NeuroCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let cw: number = 0, ch: number = 0;

    const resize = () => {
      cw = canvas.offsetWidth;
      ch = canvas.offsetHeight;
      canvas.width = cw * 2;
      canvas.height = ch * 2;
      ctx.scale(2, 2);
    };
    resize();

    let t = 0;
    const nodes = [
      {x: 0.2, y: 0.3}, {x: 0.8, y: 0.2}, {x: 0.5, y: 0.5},
      {x: 0.3, y: 0.7}, {x: 0.7, y: 0.8}, {x: 0.6, y: 0.3}, {x: 0.4, y: 0.2}
    ];

    const animate = () => {
      t += 0.5;
      ctx.clearRect(0, 0, cw, ch);

      const realNodes = nodes.map((n, i) => ({
        x: n.x * cw + Math.cos(t * 0.02 + i) * 5,
        y: n.y * ch + Math.sin(t * 0.02 + i) * 5,
      }));

      ctx.strokeStyle = 'rgba(14, 165, 233, 0.15)';
      ctx.lineWidth = 1.5;
      
      for(let i=0; i<realNodes.length; i++) {
        for(let j=i+1; j<realNodes.length; j++) {
           const dist = Math.hypot(realNodes[i].x - realNodes[j].x, realNodes[i].y - realNodes[j].y);
           if (dist < cw * 0.6) {
              ctx.beginPath();
              ctx.moveTo(realNodes[i].x, realNodes[i].y);
              ctx.lineTo(realNodes[j].x, realNodes[j].y);
              ctx.stroke();
           }
        }
      }

      realNodes.forEach((node) => {
        ctx.fillStyle = '#0ea5e9';
        ctx.shadowColor = '#0ea5e9';
        ctx.shadowBlur = 10;
        ctx.beginPath(); ctx.arc(node.x, node.y, 4, 0, Math.PI*2); ctx.fill();
        ctx.shadowBlur = 0;
        ctx.fillStyle = '#f8fafc';
        ctx.beginPath(); ctx.arc(node.x, node.y, 2, 0, Math.PI*2); ctx.fill();
      });

      const drawSignal = (fromIdx: number, toIdx: number, offset: number) => {
         const progress = ((t + offset) % 200) / 200;
         if (progress > 1) return;
         const from = realNodes[fromIdx];
         const to = realNodes[toIdx];
         const x = from.x + (to.x - from.x) * progress;
         const y = from.y + (to.y - from.y) * progress;
         ctx.fillStyle = '#38bdf8';
         ctx.shadowColor = '#38bdf8';
         ctx.shadowBlur = 8;
         ctx.beginPath(); ctx.arc(x, y, 2.5, 0, Math.PI*2); ctx.fill();
         ctx.shadowBlur = 0;
      };

      drawSignal(0, 2, 0);
      drawSignal(2, 4, 50);
      drawSignal(1, 5, 100);
      drawSignal(5, 3, 150);

      animationId = requestAnimationFrame(animate);
    };

    animate();
    return () => cancelAnimationFrame(animationId);
  }, []);

  return <canvas ref={canvasRef} className="w-full h-full" />;
};

export const PsycheCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let cw: number = 0, ch: number = 0;

    const resize = () => {
      cw = canvas.offsetWidth;
      ch = canvas.offsetHeight;
      canvas.width = cw * 2;
      canvas.height = ch * 2;
      ctx.scale(2, 2);
    };
    resize();

    let t = 0;

    // Floating thought / intuition sparks
    const sparks = Array.from({ length: 18 }, (_, i) => ({
      angle: (i / 18) * Math.PI * 2,
      orbitR: Math.random() * 28 + 22,
      speed: (Math.random() * 0.015 + 0.01) * (i % 2 === 0 ? 1 : -1),
      size: Math.random() * 1.6 + 0.8,
      pulseSpeed: Math.random() * 0.04 + 0.02,
      color: i % 3 === 0 ? '#38bdf8' : i % 3 === 1 ? '#a855f7' : '#ec4899',
    }));

    const animate = () => {
      t += 0.025;
      ctx.clearRect(0, 0, cw, ch);

      const cx = cw / 2;
      const cy = ch / 2;

      // Breathing resonance factor
      const breath = Math.sin(t * 0.8) * 4;

      // 1. Luminous Core (Consciousness spark)
      const coreGrad = ctx.createRadialGradient(cx, cy, 0, cx, cy, 32 + breath);
      coreGrad.addColorStop(0, 'rgba(56, 189, 248, 0.45)');
      coreGrad.addColorStop(0.4, 'rgba(168, 85, 247, 0.2)');
      coreGrad.addColorStop(1, 'rgba(15, 23, 42, 0)');

      ctx.fillStyle = coreGrad;
      ctx.beginPath();
      ctx.arc(cx, cy, 32 + breath, 0, Math.PI * 2);
      ctx.fill();

      // 2. Harmonic Lissajous / Consciousness Waveforms (Harmoniques de la pensée)
      const drawHarmonicRing = (
        k: number,
        baseR: number,
        amp: number,
        color: string,
        glow: string,
        rotSpeed: number,
        lineWidth: number
      ) => {
        ctx.save();
        ctx.strokeStyle = color;
        ctx.shadowColor = glow;
        ctx.shadowBlur = 8;
        ctx.lineWidth = lineWidth;
        ctx.beginPath();

        const steps = 180;
        for (let i = 0; i <= steps; i++) {
          const theta = (i / steps) * Math.PI * 2;
          const r = baseR + breath + Math.sin(theta * k + t * rotSpeed) * amp;
          const x = cx + Math.cos(theta) * r;
          const y = cy + Math.sin(theta) * r * 0.85; // slightly elliptic
          if (i === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }

        ctx.closePath();
        ctx.stroke();
        ctx.restore();
      };

      // Outer wave: Intuition & Imagination (Violet/Pink)
      drawHarmonicRing(6, 44, 7, 'rgba(168, 85, 247, 0.65)', '#a855f7', 1.2, 1.4);

      // Middle wave: Rationality & Cognition (Sky blue / Cyan)
      drawHarmonicRing(4, 32, 6, 'rgba(56, 189, 248, 0.75)', '#38bdf8', -1.5, 1.6);

      // Inner wave: Self-awareness (Bright Cyan / White)
      drawHarmonicRing(3, 20, 4, 'rgba(125, 211, 252, 0.85)', '#38bdf8', 2.0, 1.8);

      // 3. Floating sparks of thought / intuition
      for (let s of sparks) {
        s.angle += s.speed;
        const currentR = s.orbitR + breath * 0.5 + Math.sin(t * 2 + s.angle) * 3;
        const sx = cx + Math.cos(s.angle) * currentR;
        const sy = cy + Math.sin(s.angle) * currentR * 0.85;

        const sparkAlpha = Math.sin(t * 3 + s.angle * 2) * 0.3 + 0.7;

        ctx.save();
        ctx.fillStyle = s.color;
        ctx.globalAlpha = sparkAlpha;
        ctx.shadowColor = s.color;
        ctx.shadowBlur = 6;
        ctx.beginPath();
        ctx.arc(sx, sy, s.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

      // 4. Central spark point
      ctx.save();
      ctx.fillStyle = '#ffffff';
      ctx.shadowColor = '#38bdf8';
      ctx.shadowBlur = 10;
      ctx.beginPath();
      ctx.arc(cx, cy, 2.5 + Math.sin(t * 1.5) * 0.5, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();

      animationId = requestAnimationFrame(animate);
    };

    animate();
    return () => cancelAnimationFrame(animationId);
  }, []);

  return <canvas ref={canvasRef} className="w-full h-full" />;
};

export const BizCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let cw: number = 0, ch: number = 0;

    const resize = () => {
      cw = canvas.offsetWidth;
      ch = canvas.offsetHeight;
      canvas.width = cw * 2;
      canvas.height = ch * 2;
      ctx.scale(2, 2);
    };
    resize();

    let t = 0;
    const bars = [0.4, 0.6, 0.5, 0.8, 0.7];

    const animate = () => {
      t += 0.03;
      ctx.clearRect(0, 0, cw, ch);

      ctx.strokeStyle = 'rgba(2, 132, 199, 0.1)';
      ctx.lineWidth = 1;
      for (let i = 1; i <= 3; i++) {
         ctx.beginPath(); ctx.moveTo(0, ch - i * (ch/4)); ctx.lineTo(cw, ch - i * (ch/4)); ctx.stroke();
      }

      const barWidth = Math.min(cw / (bars.length * 2), 40);
      const gap = barWidth;
      const startX = (cw - (bars.length * barWidth + (bars.length - 1) * gap)) / 2;

      for(let i=0; i<bars.length; i++) {
        const heightMultiplier = bars[i] + Math.sin(t + i) * 0.05;
        const h = ch * 0.8 * heightMultiplier;
        const x = startX + i * (barWidth + gap);
        const y = ch - h;

        const grad = ctx.createLinearGradient(x, y, x, ch);
        grad.addColorStop(0, 'rgba(14, 165, 233, 0.8)');
        grad.addColorStop(1, 'rgba(14, 165, 233, 0.1)');
        
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.roundRect(x, y, barWidth, h, [4, 4, 0, 0]);
        ctx.fill();
        
        ctx.fillStyle = '#38bdf8';
        ctx.fillRect(x, y, barWidth, 2);
      }

      animationId = requestAnimationFrame(animate);
    };

    animate();
    return () => cancelAnimationFrame(animationId);
  }, []);

  return <canvas ref={canvasRef} className="w-full h-full" />;
};

export const MangaCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let cw: number = 0, ch: number = 0;

    const resize = () => {
      cw = canvas.offsetWidth;
      ch = canvas.offsetHeight;
      canvas.width = cw * 2;
      canvas.height = ch * 2;
      ctx.scale(2, 2);
    };
    resize();

    let t = 0;

    const drawGrimoire = (x: number, y: number, hover: number) => {
      ctx.save();
      ctx.translate(x, y + hover);
      
      ctx.fillStyle = '#1e3a8a';
      ctx.beginPath(); ctx.roundRect(-40, -55, 80, 110, 5); ctx.fill();
      
      ctx.fillStyle = '#7dd3fc';
      ctx.beginPath(); ctx.roundRect(-35, -50, 70, 100, 3); ctx.fill();
      
      ctx.fillStyle = '#1e3a8a';
      ctx.fillRect(-35, -50, 15, 100);
      
      ctx.strokeStyle = '#1e3a8a';
      ctx.lineWidth = 2;
      ctx.beginPath(); ctx.roundRect(-30, -45, 60, 90, 2); ctx.stroke();
      
      ctx.fillStyle = '#0f172a';
      for(let i=0; i<5; i++){
        const a = -Math.PI/2 + (i*Math.PI*2)/5;
        ctx.save();
        ctx.rotate(a);
        ctx.beginPath();
        ctx.moveTo(0,0);
        ctx.bezierCurveTo(-10, -10, -8, -20, 0, -15);
        ctx.bezierCurveTo(8, -20, 10, -10, 0, 0);
        ctx.fill();
        ctx.restore();
      }
      ctx.restore();
    };

    const drawSword = (x: number, y: number, hover: number, angle: number) => {
      ctx.save();
      ctx.translate(x, y + hover);
      ctx.rotate(angle);
      
      ctx.fillStyle = '#cbd5e1';
      ctx.beginPath();
      ctx.moveTo(-8, 50);
      ctx.lineTo(8, 50);
      ctx.lineTo(12, -30);
      ctx.lineTo(0, -50);
      ctx.lineTo(-12, -30);
      ctx.closePath();
      ctx.fill();
      
      ctx.fillStyle = '#475569';
      ctx.beginPath();
      ctx.moveTo(-1, 50);
      ctx.lineTo(1, 50);
      ctx.lineTo(2, -30);
      ctx.lineTo(0, -45);
      ctx.lineTo(-2, -30);
      ctx.closePath();
      ctx.fill();

      ctx.fillStyle = '#0f172a';
      ctx.fillRect(-20, 45, 40, 8);
      
      ctx.fillStyle = '#1e293b';
      ctx.fillRect(-5, 53, 10, 25);
      
      ctx.fillStyle = '#0f172a';
      ctx.beginPath(); ctx.arc(0, 80, 6, 0, Math.PI*2); ctx.fill();
      ctx.restore();
    };

    const animate = () => {
      t += 0.05;
      ctx.clearRect(0, 0, cw, ch);
      
      const cx = cw / 2, cy = ch / 2;
      
      const hoverGrimoire = Math.sin(t) * 3;
      const hoverSword = Math.sin(t + 1) * 3;
      const swordAngle = Math.PI / 6 + Math.sin(t * 0.5) * 0.05;

      drawSword(cx + 30, cy, hoverSword, swordAngle);
      drawGrimoire(cx - 30, cy, hoverGrimoire);
      
      ctx.fillStyle = '#38bdf8';
      for (let i = 0; i < 3; i++) {
         const pT = t * 10 + i * 50;
         const px = cx - 50 + (pT % 100);
         const py = cy - 20 + Math.sin(pT * 0.05) * 20;
         ctx.globalAlpha = Math.sin(pT * 0.05) * 0.5 + 0.5;
         ctx.beginPath(); ctx.arc(px, py, 1.5, 0, Math.PI*2); ctx.fill();
      }
      ctx.globalAlpha = 1.0;

      animationId = requestAnimationFrame(animate);
    };

    animate();
    return () => cancelAnimationFrame(animationId);
  }, []);

  return <canvas ref={canvasRef} className="w-full h-full" />;
};

export const AstroCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let cw: number = 0, ch: number = 0;

    const resize = () => {
      cw = canvas.offsetWidth;
      ch = canvas.offsetHeight;
      canvas.width = cw * 2;
      canvas.height = ch * 2;
      ctx.scale(2, 2);
    };
    resize();

    let t = 0;

    const animate = () => {
      t += 0.01;
      ctx.clearRect(0, 0, cw, ch);
      
      const cx = cw / 2, cy = ch / 2; 
      
      ctx.save();
      ctx.translate(cx, cy);
      
      ctx.shadowColor = '#0ea5e9';
      ctx.shadowBlur = 15;
      ctx.fillStyle = '#38bdf8';
      ctx.beginPath();
      ctx.arc(0, 0, 8, 0, Math.PI*2);
      ctx.fill();
      ctx.shadowBlur = 0;
      
      const orbits = 3;
      for (let i = 0; i < orbits; i++) {
        ctx.save();
        ctx.rotate((Math.PI / orbits) * i + t * 0.2);
        ctx.strokeStyle = 'rgba(14, 165, 233, 0.25)';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.ellipse(0, 0, 45, 12, 0, 0, Math.PI * 2);
        ctx.stroke();
        
        const eAngle = t * 3 + i * (Math.PI * 2 / orbits);
        const ex = Math.cos(eAngle) * 45;
        const ey = Math.sin(eAngle) * 12;
        
        ctx.fillStyle = '#f8fafc';
        ctx.shadowColor = '#bae6fd';
        ctx.shadowBlur = 10;
        ctx.beginPath();
        ctx.arc(ex, ey, 2.5, 0, Math.PI*2);
        ctx.fill();
        ctx.restore();
      }
      
      ctx.fillStyle = 'rgba(56, 189, 248, 0.4)';
      for (let i = 0; i < 15; i++) {
        const pT = t * 100 + i * 200;
        const px = Math.sin(pT * 0.01) * 80 + Math.cos(pT * 0.015) * 20;
        const py = Math.cos(pT * 0.012) * 60 + Math.sin(pT * 0.018) * 30;
        ctx.beginPath();
        ctx.arc(px, py, 1 + Math.sin(pT * 0.05) * 0.5, 0, Math.PI*2);
        ctx.fill();
      }
      
      ctx.restore();
      
      animationId = requestAnimationFrame(animate);
    };

    animate();
    return () => cancelAnimationFrame(animationId);
  }, []);

  return <canvas ref={canvasRef} className="w-full h-full" />;
};

export const AgriCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let cw: number = 0, ch: number = 0;

    const resize = () => {
      cw = canvas.offsetWidth;
      ch = canvas.offsetHeight;
      canvas.width = cw * 2;
      canvas.height = ch * 2;
      ctx.scale(2, 2);
    };
    resize();

    let t = 0;

    // Organic spores / glowing pollen particles
    const spores = Array.from({ length: 16 }, () => ({
      x: Math.random(),
      y: Math.random(),
      speed: Math.random() * 0.4 + 0.2,
      size: Math.random() * 1.5 + 0.8,
      seed: Math.random() * Math.PI * 2,
    }));

    const animate = () => {
      t += 0.02;
      ctx.clearRect(0, 0, cw, ch);

      const cx = cw / 2;
      const baseY = ch * 0.82;

      // Soft ground / fertile soil nutrition glow
      const groundGrad = ctx.createRadialGradient(cx, baseY, 5, cx, baseY, 60);
      groundGrad.addColorStop(0, 'rgba(16, 185, 129, 0.25)');
      groundGrad.addColorStop(1, 'rgba(16, 185, 129, 0)');
      ctx.fillStyle = groundGrad;
      ctx.beginPath();
      ctx.ellipse(cx, baseY, 50, 14, 0, 0, Math.PI * 2);
      ctx.fill();

      // Gentle wind sway
      const sway = Math.sin(t * 1.2) * 5;
      const swayTip = Math.sin(t * 1.2 + 0.5) * 8;

      // Draw Main Stem
      ctx.save();
      ctx.strokeStyle = '#10b981';
      ctx.lineWidth = 3;
      ctx.lineCap = 'round';
      ctx.shadowColor = '#10b981';
      ctx.shadowBlur = 8;
      ctx.beginPath();
      ctx.moveTo(cx, baseY);
      ctx.quadraticCurveTo(cx - sway * 0.4, baseY - 32, cx + swayTip, baseY - 62);
      ctx.stroke();
      ctx.restore();

      const tipX = cx + swayTip;
      const tipY = baseY - 62;

      // Draw Leaf function
      const drawLeaf = (
        x: number,
        y: number,
        scale: number,
        angle: number,
        curvature: number,
        color1: string,
        color2: string
      ) => {
        ctx.save();
        ctx.translate(x, y);
        ctx.rotate(angle);
        ctx.scale(scale, scale);

        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.bezierCurveTo(-14 * curvature, -12, -20 * curvature, -24, 0, -38);
        ctx.bezierCurveTo(8 * curvature, -24, 6 * curvature, -12, 0, 0);

        const leafGrad = ctx.createLinearGradient(0, 0, 0, -38);
        leafGrad.addColorStop(0, color1);
        leafGrad.addColorStop(1, color2);

        ctx.fillStyle = leafGrad;
        ctx.shadowColor = color2;
        ctx.shadowBlur = 8;
        ctx.fill();

        // Central leaf vein
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.35)';
        ctx.lineWidth = 1;
        ctx.shadowBlur = 0;
        ctx.beginPath();
        ctx.moveTo(0, -2);
        ctx.lineTo(0, -34);
        ctx.stroke();

        ctx.restore();
      };

      // Left Leaf
      const leftAngle = -0.75 + Math.sin(t * 1.2 - 0.2) * 0.08;
      drawLeaf(cx + sway * 0.2, baseY - 34, 0.8, leftAngle, 1, '#059669', '#34d399');

      // Right Leaf
      const rightAngle = 0.8 + Math.sin(t * 1.2 + 0.3) * 0.08;
      drawLeaf(cx + sway * 0.5, baseY - 46, 0.9, rightAngle, 1, '#10b981', '#6ee7b7');

      // Top young shoot
      const budAngle = 0.15 + Math.sin(t * 1.2 + 0.6) * 0.1;
      drawLeaf(tipX, tipY, 0.55, budAngle, 0.8, '#34d399', '#a7f3d0');

      // Floating spores / glowing particles rising
      for (let s of spores) {
        s.y -= s.speed * 0.005;
        if (s.y < 0) {
          s.y = 1;
          s.x = Math.random();
        }
        const px = s.x * cw + Math.sin(t * 2 + s.seed) * 8;
        const py = s.y * ch;
        const alpha = Math.sin(s.y * Math.PI) * 0.7;

        ctx.save();
        ctx.fillStyle = '#34d399';
        ctx.globalAlpha = Math.max(0, alpha);
        ctx.shadowColor = '#10b981';
        ctx.shadowBlur = 6;
        ctx.beginPath();
        ctx.arc(px, py, s.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

      animationId = requestAnimationFrame(animate);
    };

    animate();
    return () => cancelAnimationFrame(animationId);
  }, []);

  return <canvas ref={canvasRef} className="w-full h-full" />;
};

