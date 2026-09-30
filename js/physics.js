class PhysicsEngine {
  constructor(containerId) {
    this.container = document.getElementById(containerId);
    if (!this.container) return;
    this.balls = Array.from(this.container.querySelectorAll('.physics-ball'));
    if (!this.balls.length) return;

    this.particles = [];
    this.dragging = null;
    this.mouseX = 0;
    this.mouseY = 0;
    this.lastMouseX = 0;
    this.lastMouseY = 0;
    this.running = false;

    this.init();
  }

  init() {
    var rect = this.container.getBoundingClientRect();
    this.w = rect.width;
    this.h = rect.height;

    // Reset inline positions so transform works from (0,0)
    for (var i = 0; i < this.balls.length; i++) {
      this.balls[i].style.position = 'absolute';
      this.balls[i].style.top = '0';
      this.balls[i].style.left = '0';
    }

    for (var i = 0; i < this.balls.length; i++) {
      var r = (this.balls[i].offsetWidth || 80) / 2;
      var d = r * 2;
      // Place each ball safely within bounds
      var angle = (i / this.balls.length) * Math.PI * 2;
      var cx = this.w / 2 + Math.cos(angle) * (this.w * 0.2) - r;
      var cy = this.h / 2 + Math.sin(angle) * (this.h * 0.2) - r;
      // Clamp initial position
      cx = Math.max(0, Math.min(this.w - d, cx));
      cy = Math.max(0, Math.min(this.h - d, cy));

      // Give each a unique direction
      var va = (i / this.balls.length) * Math.PI * 2 + 0.5;
      this.particles.push({
        el: this.balls[i],
        x: cx,
        y: cy,
        vx: Math.cos(va) * 1.5,
        vy: Math.sin(va) * 1.5,
        r: r
      });
    }

    this.bindEvents();
    this.running = true;
    this.loop();
  }

  bindEvents() {
    var self = this;

    this.container.addEventListener('mousedown', function(e) {
      var hit = self.hitTest(e.clientX, e.clientY);
      if (hit) {
        self.dragging = hit;
        self.lastMouseX = e.clientX;
        self.lastMouseY = e.clientY;
        e.preventDefault();
      }
    });

    this.container.addEventListener('touchstart', function(e) {
      var t = e.touches[0];
      var hit = self.hitTest(t.clientX, t.clientY);
      if (hit) {
        self.dragging = hit;
        self.lastMouseX = t.clientX;
        self.lastMouseY = t.clientY;
        e.preventDefault();
      }
    }, { passive: false });

    document.addEventListener('mousemove', function(e) {
      self.mouseX = e.clientX;
      self.mouseY = e.clientY;
    });

    document.addEventListener('touchmove', function(e) {
      if (self.dragging) {
        self.mouseX = e.touches[0].clientX;
        self.mouseY = e.touches[0].clientY;
        e.preventDefault();
      }
    }, { passive: false });

    document.addEventListener('mouseup', function() { self.release(); });
    document.addEventListener('touchend', function() { self.release(); });

    window.addEventListener('resize', function() {
      var r = self.container.getBoundingClientRect();
      self.w = r.width;
      self.h = r.height;
      // Re-clamp all particles inside new bounds
      for (var i = 0; i < self.particles.length; i++) {
        var p = self.particles[i];
        var d = p.r * 2;
        if (p.x < 0) p.x = 0;
        if (p.x > self.w - d) p.x = self.w - d;
        if (p.y < 0) p.y = 0;
        if (p.y > self.h - d) p.y = self.h - d;
      }
    });
  }

  hitTest(clientX, clientY) {
    var rect = this.container.getBoundingClientRect();
    var mx = clientX - rect.left;
    var my = clientY - rect.top;
    for (var i = 0; i < this.particles.length; i++) {
      var p = this.particles[i];
      var dx = mx - (p.x + p.r);
      var dy = my - (p.y + p.r);
      if (dx * dx + dy * dy < p.r * p.r) return p;
    }
    return null;
  }

  release() {
    if (this.dragging) {
      // Give a throw velocity but cap it
      var throwVx = (this.mouseX - this.lastMouseX) * 0.3;
      var throwVy = (this.mouseY - this.lastMouseY) * 0.3;
      var throwSpeed = Math.sqrt(throwVx * throwVx + throwVy * throwVy);
      if (throwSpeed > 4) {
        throwVx = (throwVx / throwSpeed) * 4;
        throwVy = (throwVy / throwSpeed) * 4;
      }
      this.dragging.vx = throwVx;
      this.dragging.vy = throwVy;
      this.dragging = null;
    }
  }

  loop() {
    if (!this.running) return;

    var targetSpeed = 1.2;

    for (var i = 0; i < this.particles.length; i++) {
      var p = this.particles[i];

      if (this.dragging === p) {
        var rect = this.container.getBoundingClientRect();
        var tx = this.mouseX - rect.left - p.r;
        var ty = this.mouseY - rect.top - p.r;
        // Clamp drag target within bounds
        var d = p.r * 2;
        tx = Math.max(0, Math.min(this.w - d, tx));
        ty = Math.max(0, Math.min(this.h - d, ty));
        p.x += (tx - p.x) * 0.25;
        p.y += (ty - p.y) * 0.25;
        p.vx = (this.mouseX - this.lastMouseX) * 0.15;
        p.vy = (this.mouseY - this.lastMouseY) * 0.15;
        this.lastMouseX = this.mouseX;
        this.lastMouseY = this.mouseY;
        continue;
      }

      // Normalize speed to target
      var speed = Math.sqrt(p.vx * p.vx + p.vy * p.vy);
      if (speed > 0.01) {
        p.vx = (p.vx / speed) * targetSpeed;
        p.vy = (p.vy / speed) * targetSpeed;
      } else {
        var a = Math.random() * Math.PI * 2;
        p.vx = Math.cos(a) * targetSpeed;
        p.vy = Math.sin(a) * targetSpeed;
      }

      p.x += p.vx;
      p.y += p.vy;

      // Wall bounce — strict clamping
      var d = p.r * 2;
      if (p.x <= 0) { p.x = 0; p.vx = Math.abs(p.vx); this.flashBorder(p); }
      if (p.x >= this.w - d) { p.x = this.w - d; p.vx = -Math.abs(p.vx); this.flashBorder(p); }
      if (p.y <= 0) { p.y = 0; p.vy = Math.abs(p.vy); this.flashBorder(p); }
      if (p.y >= this.h - d) { p.y = this.h - d; p.vy = -Math.abs(p.vy); this.flashBorder(p); }
    }

    // Collisions
    for (var a = 0; a < this.particles.length; a++) {
      for (var b = a + 1; b < this.particles.length; b++) {
        this.collide(this.particles[a], this.particles[b]);
      }
    }

    // Final clamp + render
    for (var k = 0; k < this.particles.length; k++) {
      var pp = this.particles[k];
      var dd = pp.r * 2;
      // Double-check bounds after collision resolution
      if (pp.x < 0) pp.x = 0;
      if (pp.x > this.w - dd) pp.x = this.w - dd;
      if (pp.y < 0) pp.y = 0;
      if (pp.y > this.h - dd) pp.y = this.h - dd;
      pp.el.style.transform = 'translate(' + pp.x.toFixed(1) + 'px,' + pp.y.toFixed(1) + 'px)';
    }

    requestAnimationFrame(this.loop.bind(this));
  }

  collide(a, b) {
    var dx = (a.x + a.r) - (b.x + b.r);
    var dy = (a.y + a.r) - (b.y + b.r);
    var dist = Math.sqrt(dx * dx + dy * dy);
    var minDist = a.r + b.r;

    if (dist < minDist && dist > 0.01) {
      var nx = dx / dist;
      var ny = dy / dist;
      var dvx = a.vx - b.vx;
      var dvy = a.vy - b.vy;
      var impulse = dvx * nx + dvy * ny;

      if (impulse > 0) return;

      a.vx -= impulse * nx;
      a.vy -= impulse * ny;
      b.vx += impulse * nx;
      b.vy += impulse * ny;

      // Separate overlapping balls
      var overlap = (minDist - dist) / 2 + 1;
      a.x += overlap * nx;
      a.y += overlap * ny;
      b.x -= overlap * nx;
      b.y -= overlap * ny;

      this.flashCollision(a);
      this.flashCollision(b);
    }
  }

  flashBorder(p) {
    var inner = p.el;
    if (!inner) return;
    inner.style.transition = 'box-shadow 0.2s';
    inner.style.boxShadow = '0 0 20px rgba(2, 132, 199, 0.4)';
    setTimeout(function() { inner.style.boxShadow = ''; }, 300);
  }

  flashCollision(p) {
    var inner = p.el;
    if (!inner) return;
    inner.style.transition = 'box-shadow 0.2s';
    inner.style.boxShadow = '0 0 30px rgba(2, 132, 199, 0.6)';
    setTimeout(function() { inner.style.boxShadow = ''; }, 300);
  }
}
