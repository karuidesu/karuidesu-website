"use client";

import React, { useEffect, useRef } from 'react';

export const ChessCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;

    const resize = () => {
      canvas.width = canvas.offsetWidth * 2;
      canvas.height = canvas.offsetHeight * 2;
      ctx.scale(2, 2);
    };
    resize();

    const cw = canvas.offsetWidth;
    const ch = canvas.offsetHeight;
    const cellSize = Math.floor(Math.min(cw, ch) / 9);
    const ox = (cw - cellSize * 8) / 2;
    const oy = (ch - cellSize * 8) / 2;

    const pieces = [
      { type: 'K', color: 'w', x: 4, y: 7, sym: '♔' },
      { type: 'Q', color: 'w', x: 3, y: 7, sym: '♕' },
      { type: 'N', color: 'w', x: 6, y: 7, sym: '♘' },
      { type: 'N', color: 'w', x: 1, y: 7, sym: '♘' },
      { type: 'B', color: 'w', x: 2, y: 7, sym: '♗' },
      { type: 'B', color: 'w', x: 5, y: 7, sym: '♗' },
      { type: 'R', color: 'w', x: 0, y: 7, sym: '♖' },
      { type: 'R', color: 'w', x: 7, y: 7, sym: '♖' },
      { type: 'P', color: 'w', x: 0, y: 6, sym: '♙' },
      { type: 'P', color: 'w', x: 1, y: 6, sym: '♙' },
      { type: 'P', color: 'w', x: 2, y: 6, sym: '♙' },
      { type: 'P', color: 'w', x: 3, y: 6, sym: '♙' },
      { type: 'P', color: 'w', x: 4, y: 6, sym: '♙' },
      { type: 'P', color: 'w', x: 5, y: 6, sym: '♙' },
      { type: 'P', color: 'w', x: 6, y: 6, sym: '♙' },
      { type: 'P', color: 'w', x: 7, y: 6, sym: '♙' },
      
      { type: 'K', color: 'b', x: 4, y: 0, sym: '♚' },
      { type: 'Q', color: 'b', x: 3, y: 0, sym: '♛' },
      { type: 'N', color: 'b', x: 6, y: 0, sym: '♞' },
      { type: 'N', color: 'b', x: 1, y: 0, sym: '♞' },
      { type: 'B', color: 'b', x: 2, y: 0, sym: '♝' },
      { type: 'B', color: 'b', x: 5, y: 0, sym: '♝' },
      { type: 'R', color: 'b', x: 0, y: 0, sym: '♜' },
      { type: 'R', color: 'b', x: 7, y: 0, sym: '♜' },
      { type: 'P', color: 'b', x: 0, y: 1, sym: '♟' },
      { type: 'P', color: 'b', x: 1, y: 1, sym: '♟' },
      { type: 'P', color: 'b', x: 2, y: 1, sym: '♟' },
      { type: 'P', color: 'b', x: 3, y: 1, sym: '♟' },
      { type: 'P', color: 'b', x: 4, y: 1, sym: '♟' },
      { type: 'P', color: 'b', x: 5, y: 1, sym: '♟' },
      { type: 'P', color: 'b', x: 6, y: 1, sym: '♟' },
      { type: 'P', color: 'b', x: 7, y: 1, sym: '♟' }
    ];

    const sequence = [
      { p: 12, tx: 4, ty: 4 }, 
      { p: 28, tx: 4, ty: 3 }, 
      { p: 2, tx: 5, ty: 5 },  
      { p: 19, tx: 2, ty: 2 }, 
      { p: 19, tx: 1, ty: 0 }, 
      { p: 2, tx: 6, ty: 7 },  
      { p: 28, tx: 4, ty: 1 }, 
      { p: 12, tx: 4, ty: 6 }, 
    ];

    let moveIdx = 0, animProgress = 1, startX = 0, startY = 0, t = 0;

    const animate = () => {
      t++;
      ctx.clearRect(0, 0, cw, ch);
      
      for (let r = 0; r < 8; r++) {
        for (let c = 0; c < 8; c++) {
          const isWhite = (r + c) % 2 === 0;
          ctx.fillStyle = isWhite ? '#f8fafc' : '#e0f2fe';
          ctx.fillRect(ox + c * cellSize, oy + r * cellSize, cellSize, cellSize);
        }
      }
      ctx.strokeStyle = '#bae6fd'; 
      ctx.lineWidth = 1;
      ctx.strokeRect(ox, oy, cellSize*8, cellSize*8);
      
      if (animProgress < 1) {
        const m = sequence[moveIdx % sequence.length];
        ctx.fillStyle = 'rgba(56, 189, 248, 0.3)';
        ctx.fillRect(ox + startX * cellSize, oy + startY * cellSize, cellSize, cellSize);
        ctx.fillRect(ox + m.tx * cellSize, oy + m.ty * cellSize, cellSize, cellSize);
      }
      
      ctx.font = `${cellSize * 0.75}px sans-serif`;
      ctx.textAlign = 'center'; 
      ctx.textBaseline = 'middle';
      
      pieces.forEach((p, i) => {
        if (animProgress < 1 && i === sequence[moveIdx % sequence.length].p) return; 
        ctx.fillStyle = p.color === 'w' ? '#0284c7' : '#0f172a';
        ctx.fillText(p.sym, ox + p.x * cellSize + cellSize / 2, oy + p.y * cellSize + cellSize / 2 + 2);
      });
      
      if (animProgress < 1) {
        const m = sequence[moveIdx % sequence.length];
        const p = pieces[m.p];
        const ease = (1 - Math.cos(animProgress * Math.PI)) / 2; 
        const px = startX + (m.tx - startX) * ease;
        const py = startY + (m.ty - startY) * ease;
        
        const arc = Math.sin(animProgress * Math.PI) * (cellSize * 0.6);
        
        ctx.fillStyle = 'rgba(0,0,0,0.1)';
        ctx.beginPath(); 
        ctx.ellipse(ox + px * cellSize + cellSize/2, oy + py * cellSize + cellSize/2, cellSize/2, cellSize/4, 0, 0, Math.PI*2); 
        ctx.fill();
        
        ctx.fillStyle = p.color === 'w' ? '#0284c7' : '#0f172a';
        ctx.shadowColor = 'rgba(2, 132, 199, 0.3)';
        ctx.shadowBlur = 8;
        ctx.fillText(p.sym, ox + px * cellSize + cellSize / 2, oy + py * cellSize + cellSize / 2 + 2 - arc);
        ctx.shadowBlur = 0;
      }
      
      if (animProgress >= 1) {
        if (t % 150 === 0) {
          animProgress = 0;
          const m = sequence[moveIdx % sequence.length];
          startX = pieces[m.p].x;
          startY = pieces[m.p].y;
        }
      } else {
        animProgress += 0.015;
        if (animProgress >= 1) {
          animProgress = 1;
          const m = sequence[moveIdx % sequence.length];
          pieces[m.p].x = m.tx;
          pieces[m.p].y = m.ty;
          moveIdx++;
        }
      }
      
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
      t += 0.015;
      ctx.clearRect(0, 0, cw, ch);
      const barW = (cw - 40) / bars.length;
      const maxH = ch - 30;

      for (let i = 0; i < bars.length; i++) {
        const target = targetBars[i];
        currentBars[i] += (target - currentBars[i]) * 0.04;
        const bh = currentBars[i] * maxH;
        const x = 20 + i * barW;
        const grad = ctx.createLinearGradient(x, ch - bh, x, ch - 10);
        grad.addColorStop(0, '#38bdf8');
        grad.addColorStop(1, '#0284c7');
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.roundRect(x + 4, ch - 10 - bh, barW - 8, bh, [4, 4, 0, 0]);
        ctx.fill();
      }

      ctx.strokeStyle = '#0c4a6e';
      ctx.lineWidth = 2;
      ctx.beginPath();
      for (let i = 0; i < bars.length; i++) {
        const x = 20 + i * barW + barW / 2;
        const y = ch - 10 - currentBars[i] * maxH - 8;
        if (i === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
      }
      ctx.stroke();

      for (let i = 0; i < bars.length; i++) {
        const x = 20 + i * barW + barW / 2;
        const y = ch - 10 - currentBars[i] * maxH - 8;
        ctx.fillStyle = '#fff'; 
        ctx.beginPath(); 
        ctx.arc(x, y, 4, 0, Math.PI * 2); 
        ctx.fill();
        ctx.strokeStyle = '#0284c7'; 
        ctx.lineWidth = 2; 
        ctx.stroke();
      }

      if (Math.floor(t) % 4 === 0 && t % 1 < 0.02) {
        targetBars = targetBars.map(() => 0.2 + Math.random() * 0.7);
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

    const drawSword = (x: number, y: number, hover: number) => {
      ctx.save();
      ctx.translate(x, y + hover);
      ctx.rotate(Math.PI / 6);
      
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
      ctx.clearRect(0, 0, cw, ch);
      
      const cx = cw / 2, cy = ch / 2;
      
      drawSword(cx + 35, cy, Math.sin(t * 0.05 + 1) * 8);
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
      ctx.strokeStyle = 'rgba(14, 165, 233, 0.15)';
      ctx.lineWidth = 1;
      ctx.beginPath();
      for(let i=0; i<points.length; i++) {
        for(let j=i+1; j<points.length; j++) {
          const dx = points[i].x - points[j].x;
          const dy = points[i].y - points[j].y;
          if (dx*dx+dy*dy < 2500) {
            ctx.moveTo(points[i].x, points[i].y);
            ctx.lineTo(points[j].x, points[j].y);
          }
        }
      }
      ctx.stroke();
      
      for(let i=0; i<points.length; i++) {
        const p = points[i];
        p.blink += p.speed;
        const alpha = 0.2 + Math.abs(Math.sin(p.blink)) * 0.8;
        ctx.fillStyle = `rgba(56, 189, 248, ${alpha})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, 2, 0, Math.PI*2);
        ctx.fill();
        
        p.x += Math.sin(t * p.speed) * 0.3;
        p.y += Math.cos(t * p.speed) * 0.3;
      }
      ctx.restore();

      ctx.save();
      ctx.translate(cx, cy);
      
      const nodes = [
        {x: -18, y: -12},
        {x: 18, y: -18},
        {x: 0, y: 18},
        {x: -28, y: 15},
        {x: 28, y: 12},
        {x: 0, y: -30}
      ];
      
      ctx.strokeStyle = 'rgba(56, 189, 248, 0.4)';
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.moveTo(nodes[0].x, nodes[0].y); ctx.lineTo(nodes[1].x, nodes[1].y);
      ctx.lineTo(nodes[2].x, nodes[2].y); ctx.lineTo(nodes[0].x, nodes[0].y);
      ctx.lineTo(nodes[3].x, nodes[3].y); ctx.lineTo(nodes[2].x, nodes[2].y);
      ctx.moveTo(nodes[1].x, nodes[1].y); ctx.lineTo(nodes[4].x, nodes[4].y);
      ctx.lineTo(nodes[2].x, nodes[2].y);
      ctx.moveTo(nodes[0].x, nodes[0].y); ctx.lineTo(nodes[5].x, nodes[5].y);
      ctx.lineTo(nodes[1].x, nodes[1].y);
      ctx.stroke();
      
      ctx.save();
      ctx.rotate(t * 0.02);
      ctx.strokeStyle = 'rgba(14, 165, 233, 0.2)';
      ctx.beginPath();
      ctx.ellipse(0, 0, 40, 15, Math.PI/4, 0, Math.PI*2);
      ctx.stroke();
      
      const eAngle = t * 0.05;
      const ex = Math.cos(eAngle) * 40;
      const ey = Math.sin(eAngle) * 15;
      ctx.fillStyle = '#bae6fd';
      ctx.beginPath();
      const px = ex * Math.cos(Math.PI/4) - ey * Math.sin(Math.PI/4);
      const py = ex * Math.sin(Math.PI/4) + ey * Math.cos(Math.PI/4);
      ctx.arc(px, py, 2.5, 0, Math.PI*2);
      ctx.fill();
      ctx.restore();
      
      ctx.shadowColor = '#38bdf8';
      ctx.shadowBlur = 12;
      for (let i = 0; i < nodes.length; i++) {
          const n = nodes[i];
          const glow = 0.4 + Math.sin(t * 0.05 + i) * 0.6;
          ctx.fillStyle = `rgba(56, 189, 248, ${glow})`;
          ctx.beginPath();
          ctx.arc(n.x, n.y, 4, 0, Math.PI*2);
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
