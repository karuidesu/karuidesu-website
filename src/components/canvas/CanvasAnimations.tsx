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
    const animate = () => {
      t++;
      ctx.clearRect(0, 0, cw, ch);

      const realNodes = [
        {x: cw * 0.2, y: ch * 0.3},
        {x: cw * 0.8, y: ch * 0.2},
        {x: cw * 0.5, y: ch * 0.6},
        {x: cw * 0.25, y: ch * 0.8},
        {x: cw * 0.85, y: ch * 0.75},
        {x: cw * 0.6, y: ch * 0.3},
        {x: cw * 0.4, y: ch * 0.2}
      ];

      // Draw connections
      ctx.strokeStyle = 'rgba(14, 165, 233, 0.2)';
      ctx.lineWidth = 1;
      
      for(let i=0; i<realNodes.length; i++) {
        for(let j=i+1; j<realNodes.length; j++) {
           const dist = Math.hypot(realNodes[i].x - realNodes[j].x, realNodes[i].y - realNodes[j].y);
           if (dist < cw * 0.7) {
              ctx.beginPath();
              ctx.moveTo(realNodes[i].x, realNodes[i].y);
              ctx.lineTo(realNodes[j].x, realNodes[j].y);
              ctx.stroke();
           }
        }
      }

      // Draw firing signals
      const pulseT1 = t % 150;
      const pulseT2 = (t + 50) % 180;
      const pulseT3 = (t + 100) % 120;
      
      const drawSignal = (fromIdx: number, toIdx: number, progress: number) => {
         if (progress > 1) return;
         const from = realNodes[fromIdx];
         const to = realNodes[toIdx];
         const x = from.x + (to.x - from.x) * progress;
         const y = from.y + (to.y - from.y) * progress;
         ctx.fillStyle = '#38bdf8';
         ctx.shadowColor = '#38bdf8';
         ctx.shadowBlur = 10;
         ctx.beginPath(); ctx.arc(x, y, 2.5, 0, Math.PI*2); ctx.fill();
         ctx.shadowBlur = 0;
      };

      drawSignal(0, 2, pulseT1 / 100);
      drawSignal(2, 4, pulseT2 / 100);
      drawSignal(1, 5, pulseT3 / 100);
      drawSignal(5, 3, (t%140) / 100);

      // Draw nodes
      realNodes.forEach((node, i) => {
        const floatY = Math.sin(t*0.02 + i) * 3;
        ctx.fillStyle = '#0ea5e9';
        ctx.shadowColor = '#0ea5e9';
        ctx.shadowBlur = 15;
        ctx.beginPath(); ctx.arc(node.x, node.y + floatY, 5, 0, Math.PI*2); ctx.fill();
        ctx.shadowBlur = 0;
        
        ctx.fillStyle = '#f8fafc';
        ctx.beginPath(); ctx.arc(node.x, node.y + floatY, 2.5, 0, Math.PI*2); ctx.fill();
      });

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

    const bars = [0.3, 0.5, 0.4, 0.7, 0.6, 0.85, 0.55, 0.9];
    const currentBars = bars.map(() => 0);
    let targetBars = [...bars];
    let t = 0;

    const animate = () => {
      t += 0.02;
      ctx.clearRect(0, 0, cw, ch);
      const barW = (cw - 40) / bars.length;
      const maxH = ch - 40;

      // Draw Grid lines
      ctx.strokeStyle = 'rgba(2, 132, 199, 0.1)';
      ctx.lineWidth = 1;
      for (let i = 1; i <= 4; i++) {
         ctx.beginPath(); ctx.moveTo(10, ch - i * (maxH/4) - 10); ctx.lineTo(cw - 10, ch - i * (maxH/4) - 10); ctx.stroke();
      }

      for (let i = 0; i < bars.length; i++) {
        const target = targetBars[i];
        currentBars[i] += (target - currentBars[i]) * 0.08;
        const bh = currentBars[i] * maxH;
        const x = 20 + i * barW;
        const grad = ctx.createLinearGradient(x, ch - bh - 10, x, ch - 10);
        grad.addColorStop(0, 'rgba(56, 189, 248, 0.8)');
        grad.addColorStop(1, 'rgba(2, 132, 199, 0.1)');
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.roundRect(x + 6, ch - 10 - bh, barW - 12, bh, [4, 4, 0, 0]);
        ctx.fill();
      }

      // Trend Line
      ctx.strokeStyle = '#38bdf8';
      ctx.shadowColor = '#38bdf8';
      ctx.shadowBlur = 10;
      ctx.lineWidth = 3;
      ctx.beginPath();
      for (let i = 0; i < bars.length; i++) {
        const x = 20 + i * barW + barW / 2;
        const y = ch - 10 - currentBars[i] * maxH - 12;
        if (i === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
      }
      ctx.stroke();
      ctx.shadowBlur = 0;

      for (let i = 0; i < bars.length; i++) {
        const x = 20 + i * barW + barW / 2;
        const y = ch - 10 - currentBars[i] * maxH - 12;
        ctx.fillStyle = '#0f172a'; 
        ctx.beginPath(); 
        ctx.arc(x, y, 5, 0, Math.PI * 2); 
        ctx.fill();
        ctx.strokeStyle = '#bae6fd'; 
        ctx.lineWidth = 2; 
        ctx.stroke();
      }

      if (Math.floor(t) % 6 === 0 && t % 1 < 0.03) {
        targetBars = targetBars.map(() => 0.2 + Math.random() * 0.7);
      }

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => cancelAnimationFrame(animationId);
  }, []);

  return <canvas ref={canvasRef} className="w-full h-full" />;
}

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
    let slashT = 0;

    const drawGrimoire = (x: number, y: number, hover: number) => {
      ctx.save();
      ctx.translate(x, y + hover);
      ctx.shadowColor = 'rgba(2, 132, 199, 0.4)';
      ctx.shadowBlur = 15;
      
      ctx.fillStyle = '#1e3a8a';
      ctx.beginPath(); ctx.roundRect(-45, -60, 90, 120, 5); ctx.fill();
      
      ctx.fillStyle = '#7dd3fc';
      ctx.beginPath(); ctx.roundRect(-40, -55, 80, 110, 3); ctx.fill();
      
      ctx.fillStyle = '#1e3a8a';
      ctx.fillRect(-40, -55, 15, 110);
      
      ctx.strokeStyle = '#1e3a8a';
      ctx.lineWidth = 2;
      ctx.beginPath(); ctx.roundRect(-35, -50, 70, 100, 2); ctx.stroke();
      
      ctx.fillStyle = '#0f172a';
      ctx.shadowBlur = 0; 
      for(let i=0; i<5; i++){
        const a = -Math.PI/2 + (i*Math.PI*2)/5;
        ctx.save();
        ctx.rotate(a);
        ctx.beginPath();
        ctx.moveTo(0,0);
        ctx.bezierCurveTo(-15, -15, -10, -25, 0, -20);
        ctx.bezierCurveTo(10, -25, 15, -15, 0, 0);
        ctx.fill();
        ctx.restore();
      }
      ctx.restore();
    };

    const drawSword = (x: number, y: number, hover: number, angle: number) => {
      ctx.save();
      ctx.translate(x, y + hover);
      ctx.rotate(angle);
      
      ctx.shadowColor = 'rgba(15, 23, 42, 0.3)';
      ctx.shadowBlur = 10;

      ctx.fillStyle = '#cbd5e1';
      ctx.beginPath();
      ctx.moveTo(-10, 60);
      ctx.lineTo(10, 60);
      ctx.lineTo(15, -40);
      ctx.lineTo(0, -60);
      ctx.lineTo(-15, -40);
      ctx.closePath();
      ctx.fill();
      
      ctx.fillStyle = '#475569';
      ctx.beginPath();
      ctx.moveTo(-2, 60);
      ctx.lineTo(2, 60);
      ctx.lineTo(3, -40);
      ctx.lineTo(0, -55);
      ctx.lineTo(-3, -40);
      ctx.closePath();
      ctx.fill();

      ctx.fillStyle = '#0f172a';
      ctx.fillRect(-25, 55, 50, 10);
      
      ctx.fillStyle = '#1e293b';
      ctx.fillRect(-6, 65, 12, 30);
      
      ctx.fillStyle = '#0f172a';
      ctx.beginPath(); ctx.arc(0, 95, 8, 0, Math.PI*2); ctx.fill();
      ctx.restore();
    };

    const animate = () => {
      t++;
      slashT++;
      ctx.clearRect(0, 0, cw, ch);
      
      const cx = cw / 2, cy = ch / 2;
      
      // Speed lines
      ctx.strokeStyle = 'rgba(56, 189, 248, 0.15)';
      ctx.lineWidth = 1;
      ctx.save();
      ctx.translate(cx, cy);
      ctx.rotate(t * 0.01);
      for(let i=0; i<12; i++) {
         ctx.rotate((Math.PI * 2) / 12);
         ctx.beginPath(); ctx.moveTo(30, 0); ctx.lineTo(cw, 0); ctx.stroke();
      }
      ctx.restore();

      let swordAngle = Math.PI / 6;
      if (slashT % 150 > 130) {
         swordAngle -= (slashT % 150 - 130) * 0.2; // Slash!
         if (slashT % 150 > 140) swordAngle = Math.PI / 6 - 2.0 + (slashT % 150 - 140) * 0.2; // Recover
      } else if (slashT % 150 > 120) {
         swordAngle += 0.2; // Wind up
      }

      drawSword(cx + 35, cy, Math.sin(t * 0.05 + 1) * 8, swordAngle);
      drawGrimoire(cx - 25, cy, Math.sin(t * 0.05) * 8);
      
      ctx.fillStyle = '#38bdf8';
      for (let i = 0; i < 4; i++) {
         const pT = t + i * 40;
         const px = cx - 60 + (pT % 140);
         const py = cy - 20 + Math.sin(pT * 0.1) * 40;
         ctx.globalAlpha = 0.6;
         ctx.beginPath(); ctx.arc(px, py, 1.5 + Math.sin(pT*0.05), 0, Math.PI*2); ctx.fill();
      }
      ctx.globalAlpha = 1.0;

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => cancelAnimationFrame(animationId);
  }, []);

  return <canvas ref={canvasRef} className="w-full h-full" />;
}

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
    const points: any[] = [];
    for(let i=0; i<35; i++) {
      points.push({
        x: (Math.random()-0.5)*cw,
        y: (Math.random()-0.5)*ch,
        blink: Math.random() * Math.PI * 2,
        speed: 0.03 + Math.random() * 0.05
      });
    }

    const animate = () => {
      t++;
      ctx.clearRect(0, 0, cw, ch);
      
      const cx = cw / 2, cy = ch / 2; 
      
      ctx.save();
      ctx.translate(cx, cy);
      
      // Draw Nucleus
      ctx.shadowColor = '#38bdf8';
      ctx.shadowBlur = 15;
      ctx.fillStyle = '#0ea5e9';
      ctx.beginPath();
      ctx.arc(0, 0, 8, 0, Math.PI*2);
      ctx.fill();
      ctx.shadowBlur = 0;
      
      // Draw Orbits
      const orbits = 3;
      for (let i = 0; i < orbits; i++) {
        ctx.save();
        ctx.rotate((Math.PI / orbits) * i + t * 0.005);
        ctx.strokeStyle = 'rgba(14, 165, 233, 0.3)';
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.ellipse(0, 0, 45, 15, 0, 0, Math.PI * 2);
        ctx.stroke();
        
        // Draw Electron
        const eAngle = t * 0.04 + i * (Math.PI * 2 / orbits);
        const ex = Math.cos(eAngle) * 45;
        const ey = Math.sin(eAngle) * 15;
        
        ctx.fillStyle = '#bae6fd';
        ctx.shadowColor = '#bae6fd';
        ctx.shadowBlur = 8;
        ctx.beginPath();
        ctx.arc(ex, ey, 3, 0, Math.PI*2);
        ctx.fill();
        ctx.restore();
      }
      
      // Background particles
      ctx.fillStyle = 'rgba(56, 189, 248, 0.5)';
      for (let i = 0; i < 15; i++) {
        const pT = t + i * 100;
        const px = Math.sin(pT * 0.01) * 80 + Math.cos(pT * 0.02) * 20;
        const py = Math.cos(pT * 0.015) * 60 + Math.sin(pT * 0.025) * 30;
        ctx.beginPath();
        ctx.arc(px, py, 1, 0, Math.PI*2);
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
