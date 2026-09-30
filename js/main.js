var currentLang = localStorage.getItem('portfolio-lang') || 'fr';

async function loadSections() {
  var app = document.getElementById('app');
  var page = app.dataset.page || 'home';
  var sections = [];
  if (page === 'home') {
    sections = ['header', 'home', 'about', 'skills', 'projects', 'volunteer', 'interests', 'contact', 'footer'];
  } else if (page === 'all-projects') {
    sections = ['header', 'projects_all', 'footer'];
  }

  for (var i = 0; i < sections.length; i++) {
    try {
      var res = await fetch('sections/' + sections[i] + '.html');
      var html = await res.text();
      app.insertAdjacentHTML('beforeend', html);
    } catch (e) {
      console.warn('Could not load section: ' + sections[i]);
    }
  }
}

function initApp() {
  initStickyHeader();
  initMobileMenu();
  initHeaderLinks();
  initActiveNav();
  initScrollReveal();
  initLanguageToggle();
  initContactForm();
  initPhysics();
  initInterestAnim();
}

function initHeaderLinks() {
  var app = document.getElementById('app');
  var page = app ? app.dataset.page : 'home';
  if (page && page !== 'home') {
    var navLinks = document.querySelectorAll('#navbar a[href^="#"]');
    navLinks.forEach(function(link) {
      link.setAttribute('href', 'index.html' + link.getAttribute('href'));
    });
    var logo = document.querySelector('#header .logo');
    if (logo && logo.getAttribute('href') === '#home') {
      logo.setAttribute('href', 'index.html#home');
    }
    var footerUp = document.querySelector('#footer a[href="#home"]');
    if (footerUp) {
      footerUp.setAttribute('href', 'index.html#home');
    }
  }
}

function initStickyHeader() {
  var header = document.getElementById('header');
  if (!header) return;
  window.addEventListener('scroll', function() {
    header.classList.toggle('scrolled', window.scrollY > 60);
  }, { passive: true });
}

function initMobileMenu() {
  var toggle = document.getElementById('menuToggle');
  var navbar = document.getElementById('navbar');
  if (!toggle || !navbar) return;
  toggle.addEventListener('click', function() { navbar.classList.toggle('open'); });
  var links = navbar.querySelectorAll('a');
  for (var i = 0; i < links.length; i++) {
    links[i].addEventListener('click', function() { navbar.classList.remove('open'); });
  }
}

function initActiveNav() {
  var sections = document.querySelectorAll('section[id]');
  var navLinks = document.querySelectorAll('#navbar a');
  if (!sections.length || !navLinks.length) return;
  var observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        navLinks.forEach(function(link) {
          link.classList.toggle('active', link.getAttribute('href') === '#' + entry.target.id);
        });
      }
    });
  }, { rootMargin: '-40% 0px -55% 0px' });
  sections.forEach(function(s) { observer.observe(s); });
}

function initScrollReveal() {
  var els = document.querySelectorAll('.reveal');
  if (!els.length) return;
  var observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        observer.unobserve(entry.target);
      }
    });
  }, { rootMargin: '0px 0px -80px 0px', threshold: 0.1 });
  els.forEach(function(el) { observer.observe(el); });
}

function initLanguageToggle() {
  var toggle = document.getElementById('langToggle');
  if (!toggle) return;
  var buttons = toggle.querySelectorAll('button');
  buttons.forEach(function(btn) {
    if (btn.dataset.lang === currentLang) btn.classList.add('active');
    else btn.classList.remove('active');
    btn.addEventListener('click', function() {
      currentLang = this.dataset.lang;
      localStorage.setItem('portfolio-lang', currentLang);
      buttons.forEach(function(b) { b.classList.remove('active'); });
      this.classList.add('active');
      applyTranslations(currentLang);
    });
  });
  applyTranslations(currentLang);
}

function applyTranslations(lang) {
  if (typeof TRANSLATIONS === 'undefined') return;
  var dict = TRANSLATIONS[lang];
  if (!dict) return;
  document.querySelectorAll('[data-i18n]').forEach(function(el) {
    var key = el.getAttribute('data-i18n');
    if (dict[key]) el.textContent = dict[key];
  });
  document.querySelectorAll('[data-i18n-html]').forEach(function(el) {
    var key = el.getAttribute('data-i18n-html');
    if (dict[key]) el.innerHTML = dict[key];
  });
}

function initContactForm() {
  var form = document.getElementById('contactForm');
  var status = document.getElementById('formStatus');
  var btn = document.getElementById('submitBtn');
  if (!form) return;

  form.addEventListener('submit', function(e) {
    e.preventDefault();
    var dict = (typeof TRANSLATIONS !== 'undefined') ? TRANSLATIONS[currentLang] : {};
    btn.disabled = true;
    btn.innerHTML = '<i class="bx bx-loader-alt bx-spin"></i> ' + (dict['contact.form.sending'] || 'Envoi...');

    fetch('https://api.web3forms.com/submit', { method: 'POST', body: new FormData(form) })
    .then(function(res) { return res.json(); })
    .then(function(data) {
      if (data.success) {
        showStatus(dict['contact.form.success'] || 'Message envoyé !', 'success');
        form.reset();
      } else {
        showStatus(dict['contact.form.error'] || 'Erreur. Réessayez.', 'error');
      }
    })
    .catch(function() {
      showStatus(dict['contact.form.error'] || 'Erreur. Réessayez.', 'error');
    })
    .finally(function() {
      btn.disabled = false;
      btn.innerHTML = '<i class="bx bx-send"></i> ' + (dict['contact.form.send'] || 'Envoyer');
    });
  });

  function showStatus(msg, type) {
    if (!status) return;
    status.textContent = msg;
    status.style.color = type === 'error' ? 'hsla(0,65%,55%,1)' : 'hsla(35,87%,39%,1)';
    setTimeout(function() { status.textContent = ''; }, 6000);
  }
}

function initPhysics() {
  if (typeof PhysicsEngine !== 'undefined') {
    new PhysicsEngine('physicsArena');
  }
}

function initInterestAnim() {
  // Chess animation
  var chessCanvas = document.getElementById('chessCanvas');
  if (chessCanvas) initChessAnim(chessCanvas);
  // Business animation
  var bizCanvas = document.getElementById('bizCanvas');
  if (bizCanvas) initBizAnim(bizCanvas);
  // Manga animation
  var mangaCanvas = document.getElementById('mangaCanvas');
  if (mangaCanvas) initMangaAnim(mangaCanvas);
  // Psyche animation
  var psycheCanvas = document.getElementById('psycheCanvas');
  if (psycheCanvas) initPsycheAnim(psycheCanvas);
}

function initChessAnim(canvas) {
  var ctx = canvas.getContext('2d');
  function resize() { canvas.width = canvas.offsetWidth * 2; canvas.height = canvas.offsetHeight * 2; ctx.scale(2, 2); }
  resize();
  var cw = canvas.offsetWidth, ch = canvas.offsetHeight;
  
  var cellSize = Math.floor(Math.min(cw, ch) / 9);
  var ox = (cw - cellSize * 8) / 2, oy = (ch - cellSize * 8) / 2;
  
  var pieces = [
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
  
  var sequence = [
    { p: 12, tx: 4, ty: 4 }, // E4
    { p: 28, tx: 4, ty: 3 }, // E5
    { p: 2, tx: 5, ty: 5 },  // Nf3
    { p: 19, tx: 2, ty: 2 }, // Nc6
    { p: 19, tx: 1, ty: 0 }, // Nc6 back
    { p: 2, tx: 6, ty: 7 },  // Nf3 back
    { p: 28, tx: 4, ty: 1 }, // E5 back
    { p: 12, tx: 4, ty: 6 }, // E4 back
  ];
  
  var moveIdx = 0, animProgress = 1, startX, startY, t = 0;
  
  function animate() {
    t++;
    ctx.clearRect(0, 0, cw, ch);
    
    for (var r = 0; r < 8; r++) {
      for (var c = 0; c < 8; c++) {
        var isWhite = (r + c) % 2 === 0;
        ctx.fillStyle = isWhite ? '#f8fafc' : '#e0f2fe';
        ctx.fillRect(ox + c * cellSize, oy + r * cellSize, cellSize, cellSize);
      }
    }
    ctx.strokeStyle = '#bae6fd'; ctx.lineWidth = 1;
    ctx.strokeRect(ox, oy, cellSize*8, cellSize*8);
    
    if (animProgress < 1) {
      var m = sequence[moveIdx % sequence.length];
      ctx.fillStyle = 'rgba(56, 189, 248, 0.3)';
      ctx.fillRect(ox + startX * cellSize, oy + startY * cellSize, cellSize, cellSize);
      ctx.fillRect(ox + m.tx * cellSize, oy + m.ty * cellSize, cellSize, cellSize);
    }
    
    ctx.font = (cellSize * 0.75) + 'px sans-serif';
    ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    
    pieces.forEach(function(p, i) {
      if (animProgress < 1 && i === sequence[moveIdx % sequence.length].p) return; 
      ctx.fillStyle = p.color === 'w' ? '#0284c7' : '#0f172a';
      ctx.fillText(p.sym, ox + p.x * cellSize + cellSize / 2, oy + p.y * cellSize + cellSize / 2 + 2);
    });
    
    if (animProgress < 1) {
      var m = sequence[moveIdx % sequence.length];
      var p = pieces[m.p];
      var ease = (1 - Math.cos(animProgress * Math.PI)) / 2; 
      var px = startX + (m.tx - startX) * ease;
      var py = startY + (m.ty - startY) * ease;
      
      var arc = Math.sin(animProgress * Math.PI) * (cellSize * 0.6);
      
      ctx.fillStyle = 'rgba(0,0,0,0.1)';
      ctx.beginPath(); ctx.ellipse(ox + px * cellSize + cellSize/2, oy + py * cellSize + cellSize/2, cellSize/2, cellSize/4, 0, 0, Math.PI*2); ctx.fill();
      
      ctx.fillStyle = p.color === 'w' ? '#0284c7' : '#0f172a';
      ctx.shadowColor = 'rgba(2, 132, 199, 0.3)';
      ctx.shadowBlur = 8;
      ctx.fillText(p.sym, ox + px * cellSize + cellSize / 2, oy + py * cellSize + cellSize / 2 + 2 - arc);
      ctx.shadowBlur = 0;
    }
    
    if (animProgress >= 1) {
      if (t % 150 === 0) {
        animProgress = 0;
        var m = sequence[moveIdx % sequence.length];
        startX = pieces[m.p].x;
        startY = pieces[m.p].y;
      }
    } else {
      animProgress += 0.015;
      if (animProgress >= 1) {
        animProgress = 1;
        var m = sequence[moveIdx % sequence.length];
        pieces[m.p].x = m.tx;
        pieces[m.p].y = m.ty;
        moveIdx++;
      }
    }
    
    requestAnimationFrame(animate);
  }
  animate();
}

function initBizAnim(canvas) {
  var ctx = canvas.getContext('2d');
  var w, h;
  function resize() { w = canvas.width = canvas.offsetWidth * 2; h = canvas.height = canvas.offsetHeight * 2; ctx.scale(2, 2); }
  resize();
  var cw = canvas.offsetWidth, ch = canvas.offsetHeight;
  var bars = [0.3, 0.5, 0.4, 0.7, 0.6, 0.85, 0.55, 0.9];
  var currentBars = bars.map(function() { return 0; });
  var targetBars = bars.slice();
  var t = 0;

  function animate() {
    t += 0.015;
    ctx.clearRect(0, 0, cw, ch);
    var barW = (cw - 40) / bars.length;
    var maxH = ch - 30;
    for (var i = 0; i < bars.length; i++) {
      var target = targetBars[i];
      currentBars[i] += (target - currentBars[i]) * 0.04;
      var bh = currentBars[i] * maxH;
      var x = 20 + i * barW;
      var grad = ctx.createLinearGradient(x, ch - bh, x, ch - 10);
      grad.addColorStop(0, '#38bdf8');
      grad.addColorStop(1, '#0284c7');
      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.roundRect(x + 4, ch - 10 - bh, barW - 8, bh, [4, 4, 0, 0]);
      ctx.fill();
    }
    // Line chart overlay
    ctx.strokeStyle = '#0c4a6e';
    ctx.lineWidth = 2;
    ctx.beginPath();
    for (var i = 0; i < bars.length; i++) {
      var x = 20 + i * barW + barW / 2;
      var y = ch - 10 - currentBars[i] * maxH - 8;
      if (i === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
    }
    ctx.stroke();
    // Dots
    for (var i = 0; i < bars.length; i++) {
      var x = 20 + i * barW + barW / 2;
      var y = ch - 10 - currentBars[i] * maxH - 8;
      ctx.fillStyle = '#fff'; ctx.beginPath(); ctx.arc(x, y, 4, 0, Math.PI * 2); ctx.fill();
      ctx.strokeStyle = '#0284c7'; ctx.lineWidth = 2; ctx.stroke();
    }
    if (Math.floor(t) % 4 === 0 && t % 1 < 0.02) {
      targetBars = targetBars.map(function() { return 0.2 + Math.random() * 0.7; });
    }
    requestAnimationFrame(animate);
  }
  animate();
}

function initMangaAnim(canvas) {
  var ctx = canvas.getContext('2d');
  function resize() { canvas.width = canvas.offsetWidth * 2; canvas.height = canvas.offsetHeight * 2; ctx.scale(2, 2); }
  resize();
  var cw = canvas.offsetWidth, ch = canvas.offsetHeight;
  
  var t = 0;
  
  function drawGrimoire(x, y, hover) {
    ctx.save();
    ctx.translate(x, y + hover);
    ctx.shadowColor = 'rgba(2, 132, 199, 0.4)';
    ctx.shadowBlur = 15;
    
    // Grimoire (Dark blue border)
    ctx.fillStyle = '#1e3a8a';
    ctx.beginPath(); ctx.roundRect(-45, -60, 90, 120, 5); ctx.fill();
    
    ctx.fillStyle = '#7dd3fc'; // Light blue cover
    ctx.beginPath(); ctx.roundRect(-40, -55, 80, 110, 3); ctx.fill();
    
    ctx.fillStyle = '#1e3a8a'; // Binding
    ctx.fillRect(-40, -55, 15, 110);
    
    ctx.strokeStyle = '#1e3a8a'; // Dark blue inner border
    ctx.lineWidth = 2;
    ctx.beginPath(); ctx.roundRect(-35, -50, 70, 100, 2); ctx.stroke();
    
    ctx.fillStyle = '#0f172a'; // Black clover
    ctx.shadowBlur = 0; 
    for(var i=0; i<5; i++){ // Always 5 leaves
      var a = -Math.PI/2 + (i*Math.PI*2)/5;
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
  }

  function drawSword(x, y, hover) {
    ctx.save();
    ctx.translate(x, y + hover);
    ctx.rotate(Math.PI / 6); // slight angle
    
    ctx.shadowColor = 'rgba(15, 23, 42, 0.3)';
    ctx.shadowBlur = 10;

    // Blade
    ctx.fillStyle = '#cbd5e1';
    ctx.beginPath();
    ctx.moveTo(-10, 60);
    ctx.lineTo(10, 60);
    ctx.lineTo(15, -40);
    ctx.lineTo(0, -60);
    ctx.lineTo(-15, -40);
    ctx.closePath();
    ctx.fill();
    
    // Inner dark line
    ctx.fillStyle = '#475569';
    ctx.beginPath();
    ctx.moveTo(-2, 60);
    ctx.lineTo(2, 60);
    ctx.lineTo(3, -40);
    ctx.lineTo(0, -55);
    ctx.lineTo(-3, -40);
    ctx.closePath();
    ctx.fill();

    // Guard
    ctx.fillStyle = '#0f172a';
    ctx.fillRect(-25, 55, 50, 10);
    
    // Handle (at bottom)
    ctx.fillStyle = '#1e293b';
    ctx.fillRect(-6, 65, 12, 30);
    
    // Pommel
    ctx.fillStyle = '#0f172a';
    ctx.beginPath(); ctx.arc(0, 95, 8, 0, Math.PI*2); ctx.fill();
    ctx.restore();
  }

  function animate() {
    t++;
    ctx.clearRect(0, 0, cw, ch);
    
    var cx = cw / 2, cy = ch / 2;
    
    drawSword(cx + 35, cy, Math.sin(t * 0.05 + 1) * 8);
    drawGrimoire(cx - 25, cy, Math.sin(t * 0.05) * 8);
    
    ctx.fillStyle = '#38bdf8';
    for (var i = 0; i < 4; i++) {
       var pT = t + i * 40;
       var px = cx - 60 + (pT % 140);
       var py = cy - 20 + Math.sin(pT * 0.1) * 40;
       ctx.globalAlpha = 0.6;
       ctx.beginPath(); ctx.arc(px, py, 1.5 + Math.sin(pT*0.05), 0, Math.PI*2); ctx.fill();
    }
    ctx.globalAlpha = 1.0;

    requestAnimationFrame(animate);
  }
  animate();
}

function initPsycheAnim(canvas) {
  var ctx = canvas.getContext('2d');
  function resize() { canvas.width = canvas.offsetWidth * 2; canvas.height = canvas.offsetHeight * 2; ctx.scale(2, 2); }
  resize();
  var cw = canvas.offsetWidth, ch = canvas.offsetHeight;
  
  var t = 0;
  var points = [];
  for(var i=0; i<35; i++) {
    points.push({
      x: (Math.random()-0.5)*cw,
      y: (Math.random()-0.5)*ch,
      blink: Math.random() * Math.PI * 2,
      speed: 0.03 + Math.random() * 0.05
    });
  }

  function animate() {
    t++;
    ctx.clearRect(0, 0, cw, ch);
    
    var cx = cw / 2, cy = ch / 2; 
    
    // Background connecting lines & points
    ctx.save();
    ctx.translate(cx, cy);
    ctx.strokeStyle = 'rgba(14, 165, 233, 0.15)';
    ctx.lineWidth = 1;
    ctx.beginPath();
    for(var i=0; i<points.length; i++) {
      for(var j=i+1; j<points.length; j++) {
        var dx = points[i].x - points[j].x;
        var dy = points[i].y - points[j].y;
        if (dx*dx+dy*dy < 2500) {
          ctx.moveTo(points[i].x, points[i].y);
          ctx.lineTo(points[j].x, points[j].y);
        }
      }
    }
    ctx.stroke();
    
    for(var i=0; i<points.length; i++) {
      var p = points[i];
      p.blink += p.speed;
      var alpha = 0.2 + Math.abs(Math.sin(p.blink)) * 0.8;
      ctx.fillStyle = 'rgba(56, 189, 248, ' + alpha + ')';
      ctx.beginPath();
      ctx.arc(p.x, p.y, 2, 0, Math.PI*2);
      ctx.fill();
      
      // softly drift points
      p.x += Math.sin(t * p.speed) * 0.3;
      p.y += Math.cos(t * p.speed) * 0.3;
    }
    ctx.restore();

    // Central Neural Network / Atom Core
    ctx.save();
    ctx.translate(cx, cy);
    
    var nodes = [
      {x: -18, y: -12},
      {x: 18, y: -18},
      {x: 0, y: 18},
      {x: -28, y: 15},
      {x: 28, y: 12},
      {x: 0, y: -30}
    ];
    
    // Connections (Synapses)
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
    
    // Physics orbital ring
    ctx.save();
    ctx.rotate(t * 0.02);
    ctx.strokeStyle = 'rgba(14, 165, 233, 0.2)';
    ctx.beginPath();
    ctx.ellipse(0, 0, 40, 15, Math.PI/4, 0, Math.PI*2);
    ctx.stroke();
    
    // Orbiting particle
    var eAngle = t * 0.05;
    var ex = Math.cos(eAngle) * 40;
    var ey = Math.sin(eAngle) * 15;
    ctx.fillStyle = '#bae6fd';
    ctx.beginPath();
    // we need to rotate point by Math.PI/4
    var px = ex * Math.cos(Math.PI/4) - ey * Math.sin(Math.PI/4);
    var py = ex * Math.sin(Math.PI/4) + ey * Math.cos(Math.PI/4);
    ctx.arc(px, py, 2.5, 0, Math.PI*2);
    ctx.fill();
    ctx.restore();
    
    // Glowing Nodes
    ctx.shadowColor = '#38bdf8';
    ctx.shadowBlur = 12;
    for (var i = 0; i < nodes.length; i++) {
        var n = nodes[i];
        var glow = 0.4 + Math.sin(t * 0.05 + i) * 0.6;
        ctx.fillStyle = 'rgba(56, 189, 248, ' + glow + ')';
        ctx.beginPath();
        ctx.arc(n.x, n.y, 4, 0, Math.PI*2);
        ctx.fill();
    }
    
    ctx.restore();
    
    requestAnimationFrame(animate);
  }
  animate();
}

loadSections().then(initApp);
