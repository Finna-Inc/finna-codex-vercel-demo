/* ══ THE TUTORIAL · Freya walks a new household through the whole office (2 Oct 2026) ═══════════
   Christian: "replacing the tutorial with an app platform tutorial with the support of Freya … the
   user should start the journey at the platform with a modal asking only for name … then the
   Freya loops should begin, step by step … pick the lowest hanging fruits first … Call this the
   tutorial and let's make it a long one in stages so that the user can continue later and end up
   having gone through all the features." The idea is Esben's first loop (freya-first-loop).

   WHERE IT RUNS: index.html?tutorial#/home. app.js gives ?tutorial its own household (TUT): no
   name, nothing recorded, its own browser storage. Anywhere else this file only lends its five desks
   to the demo's Profile (window.FT_STAGES), so the demo, ?day-one and Esben's Home walk (?tour, or
   holding Freya's mark) are as they were.

   THE SHAPE: a name, then eight stages, each ending on a "Stage n done" card with Later beside
   Next. The easy wins come first: savings, a debt, the family, the home, investments. Then the
   first Learn quest, then the email (in this preview any six digits work and nothing is sent).
     1 Your first picture · 2 Protect it (cover, and papers into the Vault) · 3 Your Financial
     Identity · 4 Ask Freya (her question is written in her bar; one tap sends it) · 5 Your rules ·
     6 Wealth planning · 7 Succession · 8 Your office, together.
   After each entry the page under the veil is the outcome: the treemap on Home, the family tree,
   each desk. A small quest from Learn follows most entries. Its question is written from the
   household's own figures, and answering it marks the matching quest in learn.js as answered:
   40 XP, and the path moves on the Map. Every word here is a DRAFT for Christian.

   THREE WAYS ON SCREEN, one card. The look reuses Esben's walk classes (app.css, THE HOME WALK):
     · modal — the card in the middle (a sheet from the foot on a phone); the page is dimmed and
       inert. The questions are asked here, with the old tutorial's ruler, dial, ride and ladder.
     · guide — the card on Freya's row at the foot, the page dimmed with a hole round the part it
       explains, scrolled into the room above the card. The page is inert.
     · free — no dim, only the ring; the page is live (Ask Freya). When her panel opens, the card
       moves above it, or under its head on a phone.
   Later, the close key or Escape pause it anywhere. A pill above Freya's bar picks it up again;
   a reload asks "Welcome back". Where it is is kept in S.tutor, saved with the household.

   HOOKS IN app.js: window.FINNA_API (the shell's functions), FT.onRender after every render,
   FT.chips for Freya's chips and FT.answer for her preview answers. Every step fires
   window "finna:tutorial" events ({type: begin | step | leave | complete, stage, step}) for the
   live app's analytics (tutorial_begin, tutorial_step, tutorial_leave, tutorial_complete). */
(function () {
  'use strict';
  var API = window.FINNA_API;
  /* ── the five desks, one at a time (3 Oct 2026; was eight stages). Here, before the guard, so the
     demo's Profile can offer them too (window.FT_STAGES, read by tutDemoCard() in app.js) ────── */
  var STAGES = [null,
    { k: 'records', t: 'Records', d: 'Your savings, debts, family and home, and Office', min: 4 },
    { k: 'investment', t: 'Investment', d: 'What you invest in, liquid and illiquid, and Learn', min: 3 },
    { k: 'policy', t: 'Governance', d: 'Your Financial Identity, your first rule, and Freya', min: 4 },
    { k: 'protection', t: 'Protection', d: 'Your insurance, and your papers in the Vault', min: 3 },
    { k: 'succession', t: 'Succession', d: 'The will, your partner, and Profile', min: 3 }];
  var NS = STAGES.length - 1;
  window.FT_STAGES = STAGES;
  if (!API || !API.A || !API.A.TUT) {
    /* a Profile drawn before this file ran has no tutorial card yet */
    if (API && API.render && /^#\/profile\/?$/.test(location.hash)) API.render();
    return;
  }
  var A = API.A, e = A.esc, LI = A.LI || { BAD: [], HORIZON: [], WHO: {}, GLYPH: {}, SIGS: {} }, TODAY = window.DEMO_TODAY || '2026-09-24';
  var RM = matchMedia('(prefers-reduced-motion: reduce)'), COARSE = matchMedia('(pointer: coarse)');
  var CHECK = '<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 8.5l3 3 7-7"/></svg>';
  var MINUS = '<svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" aria-hidden="true"><path d="M5 12h14"/></svg>';
  var GRIP = '<svg class="gr" viewBox="0 0 18 18" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" aria-hidden="true"><path d="M3 6h12M3 12h12"/></svg>';

  function S() { return A.S; }
  function T() {
    var s = S();
    if (!s.tutor) s.tutor = { v: A.TUT_V || 3, step: 'hello', paused: false, done: '', began: TODAY, xp: 0, open: ['records'], data: { ids: {}, q: {}, inv: {} } };
    if (!s.tutor.open) s.tutor.open = ['records'];
    return s.tutor;
  }
  function D() { return T().data; }

  /* ── small helpers ───────────────────────────────────────────────────────────────────── */
  var WORDS = ['no', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'];
  function words(n) { return WORDS[n] || String(n); }
  function cap(s) { s = String(s || ''); return s.charAt(0).toUpperCase() + s.slice(1); }
  function list(a) { return a.length < 2 ? (a[0] || '') : a.slice(0, -1).join(', ') + ' and ' + a[a.length - 1]; }
  function M(n) { return A.money(n); }
  function clamp(v, a, b) { return Math.max(a, Math.min(b, v)); }
  function first() { var m = S().members[0]; return m && m.name ? m.name.trim().split(/\s+/)[0] : ''; }
  function surname() { var p = (S().members[0].name || '').trim().split(/\s+/); return p.length > 1 ? p[p.length - 1] : ''; }
  function full(n) { n = String(n || '').trim(); return surname() && n.indexOf(' ') < 0 ? n + ' ' + surname() : n; }
  function partner() { var me = S().people[0], ids = me ? A.partnersOf(me.id) : []; return ids.length ? A.person(ids[0]) || null : null; }   /* by the tree, not the words: a spouse is a partner too */
  function couple() { return !!partner(); }
  function we(a, b) { return couple() ? a : b; }
  function kids() { return S().people.filter(function (p) { return p.relationship === 'Child'; }); }
  function line(key) { var id = D().ids[key]; return id ? A.line(id) || null : null; }
  function amt(key) { var l = line(key); return l ? A.amount(l.id) : 0; }
  function yearOk(v) { return /^\d{4}$/.test(String(v || '')) && +v >= 1900 && +v <= +TODAY.slice(0, 4); }
  function layout() { return API.layout(); }
  function emit(type, x) {
    var d = { type: type, stage: (BY[T().step] || {}).stage || 0, step: T().step };
    if (x) for (var k in x) d[k] = x[k];
    try { window.dispatchEvent(new CustomEvent('finna:tutorial', { detail: d })); } catch (err) {}
  }

  /* ── the record, written the way the app's own forms write it (app.js FORMS) ───────────── */
  function val(id, v) {
    var s = S(), x = s.valuations.filter(function (r) { return r.line === id && r.reason === 'Entered in the tutorial'; })[0];
    if (!x) s.valuations.push({ line: id, amount: v, asOf: TODAY, source: 'entered', ref: '', by: A.who(), reason: 'Entered in the tutorial', at: TODAY });
    else x.amount = v;
  }
  function putAsset(key, o, v) {
    var s = S(), a = line(key);
    if (!a || !A.asset(a.id)) { a = { id: A.uid('a'), holder: first(), country: cur() === 'USD' ? 'United States' : '', currency: cur(), docs: [] }; s.assets.push(a); D().ids[key] = a.id; }
    for (var k in o) a[k] = o[k];
    a.mix = A.DEFAULT_MIX[a.cls]; a.liquidity = A.LIQ[a.cls];
    val(a.id, v); return a;
  }
  function putDebt(key, o, v) {
    var s = S(), l = line(key);
    if (!l || !A.liability(l.id)) { l = { id: A.uid('l'), securedOn: '', rate: 0, rateType: '—', reset: '', maturity: '', kind: 'drawn', docs: [] }; s.liabilities.push(l); D().ids[key] = l.id; }
    for (var k in o) l[k] = o[k];
    val(l.id, v); return l;
  }
  function drop(key) {
    var id = D().ids[key], s = S(); if (!id) return;
    s.assets = s.assets.filter(function (x) { return x.id !== id; });
    s.liabilities = s.liabilities.filter(function (x) { return x.id !== id; });
    s.valuations = s.valuations.filter(function (v) { return v.line !== id; });
    s.liabilities.forEach(function (l) { if (l.securedOn === id) l.securedOn = ''; });
    delete D().ids[key];
  }
  function fwSet(k) { (S().firstWeekSet = S().firstWeekSet || {})[k] = true; }

  /* ══ THE PIECES — the old tutorial's ruler, dial, ride and ladder (tutorial.html, deleted 14 Oct 2026), on tq- ══ */
  /* the ruler's ranges; their names are written in the household's currency when drawn ($100K, €100K, DKK 100K) */
  var MB = [[10000], [100000], [1000000], [10000000]];
  var SB = [[1000], [5000], [10000], [25000]];
  var GB = [[100000, 'Up to '], [1000000], [10000000]];

  /* THE RULER: a range key per band, a track with a turned square that comes to the hand, the
     figure above it, and "Type it instead". o: { v, bands, open, label, onValue } */
  function ruler(box, o) {
    var st = { v: o.v == null ? null : o.v, typing: false };
    function bandFor(v) { return (o.bands.filter(function (b) { return b[0] >= v; })[0] || o.bands[o.bands.length - 1])[0]; }
    function html() {
      var max = st.v == null ? o.open : bandFor(st.v);
      if (st.typing) return '<div class="tq-type"><span>' + e(A.sym().trim()) + '</span><input class="input" type="text" inputmode="numeric" autocomplete="off" aria-label="' + e(o.label) + ', in dollars" value="' + (st.v ? Math.round(st.v).toLocaleString('en-US') : '') + '" placeholder="0"></div>' +
        '<button type="button" class="link tq-ty" data-ty>Use the ruler</button>';
      return '<p class="tq-fig' + (st.v == null ? ' is-unset' : '') + '" data-fig aria-hidden="true">' + (st.v == null ? 'Drag the ruler' : M(st.v)) + '</p>' +
        '<div class="tq-bands' + (o.bands.length === 3 ? ' is-3' : '') + '" role="group" aria-label="How far the ruler goes">' + o.bands.map(function (b) {
          return '<button type="button" class="key key-secondary key-s" data-max="' + b[0] + '" aria-pressed="' + (b[0] === max) + '">' + e((b[1] || '') + A.short(b[0])) + '</button>'; }).join('') + '</div>' +
        '<div class="tq-sl' + (st.v == null ? ' is-unset' : '') + '"><div class="tq-track"><span class="tq-fill"></span><span class="tq-knob"></span></div>' +
        '<input type="range" min="0" max="' + max + '" step="' + (max / 1000) + '" value="' + Math.min(st.v || 0, max) + '" aria-label="' + e(o.label) + '"></div>' +
        '<div class="tq-axis" aria-hidden="true"></div><button type="button" class="link tq-ty" data-ty>Type it instead</button>';
    }
    function setV(v) { st.v = v; if (o.onValue) o.onValue(v); }
    function draw() { box.innerHTML = html(); bind(); }
    function bind() {
      box.querySelector('[data-ty]').addEventListener('click', function () { st.typing = !st.typing; draw(); var i = box.querySelector('input'); if (i) i.focus(); });
      if (st.typing) {
        var inp = box.querySelector('input');
        inp.addEventListener('input', function () { var d = inp.value.replace(/[^0-9]/g, '').slice(0, 11); inp.value = d ? Number(d).toLocaleString('en-US') : ''; setV(d ? Number(d) : null); });
        inp.addEventListener('keydown', function (ev) { if (ev.key === 'Enter') { ev.preventDefault(); var k = card.querySelector('[data-tq="go"]'); if (k && !k.disabled) k.click(); } });
        return;
      }
      var rng = box.querySelector('input[type=range]'), sl = box.querySelector('.tq-sl'), fill = box.querySelector('.tq-fill'), knob = box.querySelector('.tq-knob'),
        axis = box.querySelector('.tq-axis'), bands = box.querySelector('.tq-bands'), fig = box.querySelector('[data-fig]');
      function paint() {
        var f = (+rng.value) / (+rng.max || 1);
        fill.style.width = (f * 100) + '%'; knob.style.left = (f * 100) + '%';
        rng.setAttribute('aria-valuetext', st.v == null ? 'Not set' : M(+rng.value));
        fig.textContent = st.v == null ? 'Drag the ruler' : M(st.v); fig.classList.toggle('is-unset', st.v == null);
      }
      /* fifths, so every tick is a round figure */
      function drawAxis() { var m = +rng.max; axis.innerHTML = [0, 0.2, 0.4, 0.6, 0.8, 1].map(function (f) { return '<span>' + (f ? A.short(Math.round(m * f)) : M(0)) + '</span>'; }).join(''); }
      function light(m) { Array.prototype.forEach.call(bands.querySelectorAll('button'), function (b) { b.setAttribute('aria-pressed', String(+b.getAttribute('data-max') === m)); }); }
      rng.addEventListener('input', function () { sl.classList.remove('is-unset'); setV(+rng.value); paint(); light(+rng.max); });
      rng.addEventListener('pointerdown', function () { sl.classList.add('is-drag'); });
      rng.addEventListener('pointerup', function () { if (st.v == null) { sl.classList.remove('is-unset'); setV(+rng.value); paint(); } });
      ['pointerup', 'pointercancel', 'blur'].forEach(function (t) { rng.addEventListener(t, function () { sl.classList.remove('is-drag'); }); });
      bands.addEventListener('click', function (ev) {
        var b = ev.target.closest('button'); if (!b) return;
        var m = +b.getAttribute('data-max'), keep = +rng.value;
        rng.max = m; rng.step = m / 1000; rng.value = Math.min(keep, m); light(m); drawAxis();
        if (st.v != null) setV(+rng.value);
        paint();
      });
      drawAxis(); paint();
    }
    draw();
    return { get: function () { return st.v; } };
  }

  /* a year on the same track: 2027 to 2076 */
  function yearSlider(box, o) {
    var st = { v: o.v || null }, y0 = o.min, y1 = o.max;
    box.innerHTML = '<p class="tq-fig' + (st.v ? '' : ' is-unset') + '" data-fig aria-hidden="true">' + (st.v || 'Drag to a year') + '</p>' +
      '<div class="tq-sl' + (st.v ? '' : ' is-unset') + '"><div class="tq-track"><span class="tq-fill"></span><span class="tq-knob"></span></div>' +
      '<input type="range" min="' + y0 + '" max="' + y1 + '" step="1" value="' + (st.v || o.open) + '" aria-label="' + e(o.label) + '"></div>' +
      '<div class="tq-axis" aria-hidden="true">' + [0, 0.2, 0.4, 0.6, 0.8, 1].map(function (f) { return '<span>' + Math.round(y0 + (y1 - y0) * f) + '</span>'; }).join('') + '</div>';
    var rng = box.querySelector('input'), sl = box.querySelector('.tq-sl'), fig = box.querySelector('[data-fig]');
    function paint() {
      var f = (+rng.value - y0) / (y1 - y0);
      box.querySelector('.tq-fill').style.width = (f * 100) + '%'; box.querySelector('.tq-knob').style.left = (f * 100) + '%';
      fig.textContent = st.v ? st.v + ' · in ' + (st.v - +TODAY.slice(0, 4)) + ' years' : 'Drag to a year'; fig.classList.toggle('is-unset', !st.v);
    }
    function set() { st.v = +rng.value; sl.classList.remove('is-unset'); paint(); o.onValue(st.v); }
    rng.addEventListener('input', set);
    rng.addEventListener('pointerup', function () { if (!st.v) set(); });
    rng.addEventListener('pointerdown', function () { sl.classList.add('is-drag'); });
    ['pointerup', 'pointercancel', 'blur'].forEach(function (t) { rng.addEventListener(t, function () { sl.classList.remove('is-drag'); }); });
    paint();
  }

  /* THE DIAL: 1 to 40 years round 270 degrees */
  var DIAL = { cx: 136, cy: 140, r: 100, a0: 135, sw: 270, min: 1, max: 40 };
  var OPENS = [['money you can reach', 0], ['bonds held to maturity', 3], ['listed shares', 5], ['private markets', 7], ['long-dated holdings', 10], ['holdings for the next generation', 25]];
  function hzBucket(v) { return v == null ? '' : v < 6 ? 'few' : v <= 15 ? 'decade' : v <= 30 ? 'decades' : 'generations'; }
  function hzLabel(v) { var b = hzBucket(v), h = LI.HORIZON.filter(function (x) { return x[0] === b; })[0]; return h ? h[1] : ''; }
  function polar(r, d) { var a = d * Math.PI / 180; return [DIAL.cx + r * Math.cos(a), DIAL.cy + r * Math.sin(a)]; }
  function hzText(t, gold) {
    var w = t.split(' '), best = [t, ''], gap = Infinity, cls = 'hz' + (gold ? ' is-gold' : '');
    if (t.length > 13) for (var i = 1; i < w.length; i++) { var a = w.slice(0, i).join(' '), b = w.slice(i).join(' '), d = Math.max(a.length, b.length); if (d < gap) { gap = d; best = [a, b]; } }
    return best[1] ? '<text class="' + cls + '" x="136" y="188"><tspan x="136">' + e(best[0]) + '</tspan><tspan x="136" dy="15">' + e(best[1]) + '</tspan></text>' : '<text class="' + cls + '" x="136" y="194">' + e(best[0]) + '</text>';
  }
  function dialSvg(v, unset) {
    var t = (v - DIAL.min) / (DIAL.max - DIAL.min), st = polar(DIAL.r, DIAL.a0), en = polar(DIAL.r, DIAL.a0 + DIAL.sw), hi = polar(DIAL.r, DIAL.a0 + t * DIAL.sw);
    var ticks = [1, 10, 20, 30, 40].map(function (y) {
      var d = DIAL.a0 + (y - DIAL.min) / (DIAL.max - DIAL.min) * DIAL.sw, p1 = polar(DIAL.r + 10, d), p2 = polar(DIAL.r + 16, d), p3 = polar(DIAL.r + 30, d);
      return '<line class="tk" x1="' + p1[0].toFixed(1) + '" y1="' + p1[1].toFixed(1) + '" x2="' + p2[0].toFixed(1) + '" y2="' + p2[1].toFixed(1) + '"/><text class="lb" x="' + p3[0].toFixed(1) + '" y="' + (p3[1] + 4).toFixed(1) + '">' + (y === 40 ? '40+' : y) + '</text>';
    }).join('');
    return '<svg viewBox="0 0 272 252" aria-hidden="true"><path class="ring" d="M' + st[0].toFixed(1) + ' ' + st[1].toFixed(1) + ' A100 100 0 1 1 ' + en[0].toFixed(1) + ' ' + en[1].toFixed(1) + '"/>' +
      '<path class="arc" d="M' + st[0].toFixed(1) + ' ' + st[1].toFixed(1) + ' A100 100 0 ' + (t * DIAL.sw > 180 ? 1 : 0) + ' 1 ' + hi[0].toFixed(1) + ' ' + hi[1].toFixed(1) + '"/>' + ticks +
      '<text class="big" x="136" y="142">' + (v === 40 ? '40+' : v) + '</text><text class="cap" x="136" y="166">' + (v === 1 ? 'year' : 'years') + '</text>' +
      hzText(unset ? 'Turn the dial' : hzLabel(v).toUpperCase(), !unset && hzBucket(v) === 'generations') +
      '<g transform="translate(' + hi[0].toFixed(1) + ' ' + hi[1].toFixed(1) + ') rotate(45)"><rect class="dk" x="-10" y="-10" width="20" height="20" rx="6"/></g></svg>';
  }
  function opensLine(v) {
    if (v == null) return '<p class="dim">Turn it to see what that much time allows.</p>';
    var lit = OPENS.filter(function (o) { return v >= o[1]; }).map(function (o) { return o[0]; }), dim = OPENS.filter(function (o) { return v < o[1]; });
    return '<p>At <b>' + (v === 40 ? '40 years or more' : v + (v === 1 ? ' year' : ' years')) + '</b> there is time for <b>' + e(list(lit)) + '</b>.</p>' +
      '<p class="dim">' + (dim.length ? e(dim.map(function (o) { return cap(o[0]) + ' from ' + o[1] + ' years'; }).join('; ')) + '.' : 'Nothing here is out of reach.') + '</p>';
  }
  function dial(box, o) {
    var v0 = o.v == null ? 10 : o.v;
    box.innerHTML = '<div class="tq-dial' + (o.v == null ? ' is-unset' : '') + '" tabindex="0" role="slider" aria-label="' + e(o.label) + '" aria-valuemin="1" aria-valuemax="40" aria-valuenow="' + v0 + '" aria-valuetext="' + (o.v == null ? 'Not set' : v0 + ' years, ' + e(hzLabel(v0))) + '">' + dialSvg(v0, o.v == null) + '</div>' +
      '<div class="tq-opens" aria-live="polite">' + opensLine(o.v) + '</div>';
    var w = box.querySelector('.tq-dial'), cur = o.v;
    function set(nv) {
      nv = clamp(nv, 1, 40); if (nv === cur) return;
      cur = nv; w.classList.remove('is-unset'); w.innerHTML = dialSvg(nv, false);
      w.setAttribute('aria-valuenow', nv); w.setAttribute('aria-valuetext', nv + ' years, ' + hzLabel(nv));
      box.querySelector('.tq-opens').innerHTML = opensLine(nv); o.onValue(nv);
    }
    function at(ev) {
      var r = w.querySelector('svg').getBoundingClientRect(), x = (ev.clientX - r.left) / r.width * 272 - DIAL.cx, y = (ev.clientY - r.top) / r.height * 252 - DIAL.cy;
      var off = (Math.atan2(y, x) * 180 / Math.PI - DIAL.a0 + 720) % 360;
      if (off > DIAL.sw) off = (off - DIAL.sw < 360 - off) ? DIAL.sw : 0;
      set(Math.round(DIAL.min + off / DIAL.sw * (DIAL.max - DIAL.min)));
    }
    w.addEventListener('pointerdown', function (ev) { try { w.setPointerCapture(ev.pointerId); } catch (x) {} w.classList.add('is-drag'); at(ev); ev.preventDefault(); });
    w.addEventListener('pointermove', function (ev) { if (w.classList.contains('is-drag')) at(ev); });
    ['pointerup', 'pointercancel', 'lostpointercapture'].forEach(function (t) { w.addEventListener(t, function () { w.classList.remove('is-drag'); }); });
    w.addEventListener('keydown', function (ev) {
      var v = cur == null ? 10 : cur, d = { ArrowRight: 1, ArrowUp: 1, ArrowLeft: -1, ArrowDown: -1, PageUp: 5, PageDown: -5 }[ev.key];
      if (d != null) { set(v + d); ev.preventDefault(); } else if (ev.key === 'Home') { set(1); ev.preventDefault(); } else if (ev.key === 'End') { set(40); ev.preventDefault(); }
    });
  }

  /* THE RIDE: a fall of a quarter in a year, drawn on their own figure */
  function rideSvg(base, own) {
    var low = base * 0.75, p = [[10, 30], [64, 22], [108, 30], [142, 98], [196, 78], [246, 52], [292, 30], [312, 22]];
    return '<svg class="tq-ride' + (RM.matches ? '' : ' is-draw') + '" viewBox="0 0 320 124" role="img" aria-label="' + e((own ? 'Your ' : 'An example of ') + M(base) + ' falling by a quarter to ' + M(low) + ', then coming back') + '" style="--len:420">' +
      '<line class="base" x1="10" y1="24" x2="312" y2="24"/><path class="dip" d="M108 24 L108 30 L142 98 L196 78 L246 52 L292 30 L292 24 Z"/><path class="ln" d="M' + p.map(function (q) { return q.join(' '); }).join(' L') + '"/>' +
      '<circle class="pt" cx="142" cy="98" r="4"/><text class="lbv" x="10" y="14">' + M(base) + '</text><text class="lb" x="312" y="14" text-anchor="end">' + (own ? 'your investments today' : 'an example') + '</text>' +
      '<text class="lbv" x="156" y="102">' + M(low) + '</text><text class="lb" x="156" y="117">at the low</text></svg>';
  }

  /* THE CREST: the archetype's glyph in a dashed ring (the old tutorial's arrival) */
  function crest(arch, size) {
    return '<svg class="tq-crest" viewBox="0 0 64 64" width="' + size + '" height="' + size + '" aria-hidden="true"><circle class="o" cx="32" cy="32" r="30"/>' +
      '<g transform="translate(14 14) scale(1.5)"><path class="g" d="' + (LI.GLYPH[arch] || '') + '"/></g></svg>';
  }

  /* the dark running total: the picture's sum, as the old tutorial drew it */
  function netHTML(label) { return '<div class="tq-net" data-net aria-live="polite">' + netIn(label) + '</div>'; }
  function netIn(label) {
    var t = A.totals(), n = S().assets.length + S().liabilities.length;
    return '<p class="l">' + e(label || 'Your net worth') + '</p><p class="v' + (n ? '' : ' is-dash') + '">' + (n ? (t.net < 0 ? '−' : '') + M(Math.abs(t.net)) : '—') + '</p>' +
      '<p class="w">' + (n ? 'Owned <b>' + M(t.owned) + '</b> · owed <b>' + M(t.owed) + '</b>' : 'Nothing set yet. Rough is fine.') + '</p>';
  }
  function netRedraw(c, label) { var n = c.querySelector('[data-net]'); if (n) n.innerHTML = netIn(label); }

  function field(id, label, v, opt, extra) {
    return '<div class="form-row"><label class="label" for="' + id + '">' + e(label) + (opt ? ' <span class="opt">(' + e(opt) + ')</span>' : '') + '</label>' +
      '<input class="input" id="' + id + '" value="' + e(v == null ? '' : v) + '"' + (extra || ' type="text" autocomplete="off"') + '></div>';
  }
  function opts(name, items, cur, cls) {
    return '<div class="tq-opts' + (cls ? ' ' + cls : '') + '" role="group">' + items.map(function (o) {
      return '<button type="button" class="tq-opt" data-' + name + '="' + o[0] + '" aria-pressed="' + (cur === o[0]) + '">' + e(o[1]) + (o[2] ? '<span class="nt">' + e(o[2]) + '</span>' : '') + '</button>'; }).join('') + '</div>';
  }
  function chips(name, items, cur, multi, cls) {
    return '<div class="tq-chips' + (cls ? ' ' + cls : '') + '" role="group">' + items.map(function (c) {
      var on = multi ? (cur || []).indexOf(c[0]) > -1 : cur === c[0];
      return '<button type="button" class="tq-chip" data-' + name + '="' + c[0] + '" aria-pressed="' + on + '">' + (multi ? '<span class="bx">' + CHECK + '</span>' : '') + e(c[1]) + '</button>'; }).join('') + '</div>';
  }
  /* one choice in a group: the pressed state moves to the key tapped */
  function pickIn(c, sel, fn) {
    c.addEventListener('click', function (ev) {
      var b = ev.target.closest(sel); if (!b || !c.contains(b)) return;
      c.querySelectorAll(sel).forEach(function (x) { x.setAttribute('aria-pressed', String(x === b)); });
      fn(b);
    });
  }
  function onInput(c, sel, fn) { var i = c.querySelector(sel); if (i) i.addEventListener('input', function () { fn(i.value); }); }
  function mapHTML(now) {
    return '<ol class="tq-map">' + STAGES.slice(1).map(function (g, i) {
      var n = i + 1, st = n < now ? 'done' : n === now ? 'now' : '', lk = !st && !A.deskOpen(g.k);
      return '<li class="' + st + (lk ? ' locked' : '') + '"><span class="n">' + (st === 'done' ? CHECK : lk ? A.ic('lock') : n) + '</span><span class="t"><b>' + e(g.t) + '</b><small>' + e(g.d) + '</small></span><span class="m">' + g.min + ' min</span></li>';
    }).join('') + '</ol>';
  }
  function sumHTML(rows) {
    return '<dl class="tq-sum">' + rows.filter(Boolean).map(function (r) { return '<div><dt>' + e(r[0]) + '</dt><dd>' + r[1] + '</dd></div>'; }).join('') + '</dl>';
  }

  /* ══ THE STEPS ═════════════════════════════════════════════════════════════════════════
     Each step: id, stage, mode (modal | guide | free), at (the page it stands on), spot (the part
     it lights: selectors, and a smaller piece when the whole part is too tall), when (shown only
     if), eb / title / line / body (HTML, every figure and name escaped), wire (its controls),
     ok (the key waits until), key, go (on the key: false stays, a step id jumps), skip (a link
     that moves on), later (a Later link), noBack. */
  var STEPS = [], BY = {};
  function step(o) { STEPS.push(o); BY[o.id] = o; }
  function F(v) { return typeof v === 'function' ? v() : v; }
  function okWhen(s) { return !s.when || !!s.when(); }
  function nextOf(id) { for (var i = STEPS.indexOf(BY[id]) + 1; i < STEPS.length; i++) if (okWhen(STEPS[i])) return STEPS[i]; return null; }
  /* Back: a step can say where it goes back to (backTo, an id), else the step before it */
  function backOf(s) { var t = s.backTo && s.backTo(); return t ? BY[t] : prevOf(s.id); }
  function prevOf(id) {
    var s0 = BY[id];
    for (var i = STEPS.indexOf(s0) - 1; i >= 0; i--) { var s = STEPS[i]; if (s.stage !== s0.stage || s.done) return null; if (okWhen(s)) return s.noRevisit ? null : s; }
    return null;
  }

  /* A QUEST FROM LEARN, asked on the household's own figures. The right answer is listed first
     (as in learn.js) and shown in the order `show`. A wrong answer is marked and set aside; a
     second try earns the same 40 XP. */
  function Q(o) { var k = o.pid + '.' + o.n, q = D().q; return q[k] || (q[k] = { done: false, wrong: [] }); }
  /* each quest below is also the household's own wording of that quest on Learn's page (FT.quest) */
  var QX = {};
  function qFilm(o) { return (BY[o.id] && BY[o.id].film) || o.film || ''; }
  function quest(o) {
    QX[o.pid + '.' + o.n] = o;
    step({ id: o.id, stage: o.stage, mode: 'side', at: o.at, spot: o.spot, when: o.when, noRevisit: true, qk: o.pid + '.' + o.n,
      eb: function () { var P = A.LM.PATHS[o.pid]; return 'Learn · ' + e(P ? P.t : '') + ' · quest ' + o.n; },
      title: function () { return e(o.q()); },
      body: function () {
        var st = Q(o), ops = o.o(), ord = o.show || [0, 1, 2, 3];
        return '<div class="answers" data-qa>' + ord.map(function (i, k) {
          var w = st.wrong.indexOf(i) > -1;
          return '<button type="button" class="answer' + (st.done && i === 0 ? ' correct' : '') + (w ? ' wrong' : '') + '" data-i="' + i + '" aria-pressed="false"' + (st.done || w ? ' disabled' : '') + '>' +
            '<span class="letter">' + 'ABCD'.charAt(k) + '</span><span>' + e(ops[i]) + '</span></button>';
        }).join('') + '</div><div class="feedback' + (st.done ? ' ok' : '') + '" data-fb aria-live="polite">' + (st.done ? '<b>Yes.</b> ' + e(o.why()) : '') + '</div>' +
          (qFilm(o) ? '<div class="tq-qfilm"' + (st.done ? '' : ' hidden') + '>' + filmCard(qFilm(o)) + '</div>' : '');
      },
      wire: function (c) {
        L.pick = null;
        c.addEventListener('click', function (ev) {
          var b = ev.target.closest('.answer'); if (!b || b.disabled) return;
          L.pick = +b.getAttribute('data-i');
          c.querySelectorAll('.answer').forEach(function (x) { x.setAttribute('aria-pressed', String(x === b)); });
          refresh();
        });
      },
      ok: function () { return Q(o).done || L.pick != null; },
      key: function () { return Q(o).done ? 'Continue' : 'Check my answer'; },
      go: function () {
        var st = Q(o); if (st.done) return true;
        var c = card.querySelector('.tq-body'), fb = c.querySelector('[data-fb]'), b = c.querySelector('.answer[data-i="' + L.pick + '"]');
        if (L.pick !== 0) {
          st.wrong.push(L.pick); b.classList.add('wrong'); b.disabled = true; b.setAttribute('aria-pressed', 'false'); L.pick = null;
          fb.className = 'feedback try'; fb.innerHTML = '<b>Not quite.</b> ' + e(o.hint) + ' Choose again: a second try earns the same.'; A.save(); return false;
        }
        st.done = true; b.classList.add('correct'); b.setAttribute('aria-pressed', 'false');
        var qf = c.querySelector('.tq-qfilm'); if (qf) qf.hidden = false;
        c.querySelectorAll('.answer').forEach(function (x) { x.disabled = true; });
        var r = A.learnAnswer(o.pid, o.n); if (r && r.first) xp(40);
        fb.className = 'feedback ok';
        fb.innerHTML = '<b>' + (st.wrong.length ? 'That’s it.' : 'Yes.') + '</b> ' + e(o.why()) + (r && r.first ? ' <b>+40 XP.</b>' : '') +
          (r && r.finished ? ' <span class="tq-badge">' + A.ic('check') + 'Badge earned: ' + e(A.LM.PATHS[o.pid].t) + '</span>' : '');
        A.save(); return false;
      } });
  }

  /* ── the currency (Christian, 2 Oct 2026): USD unless another is chosen on the first card; the
     eight most used first, then every other active currency by name. Every figure in the office is
     shown in it; nothing is converted. */
  var TOP_CUR = ['USD', 'GBP', 'EUR', 'CHF', 'DKK', 'NOK', 'SEK', 'CAD'];
  var ALL_CUR = ('AED AFN ALL AMD AOA ARS AUD AWG AZN BAM BBD BDT BGN BHD BIF BMD BND BOB BRL BSD BTN BWP BYN BZD CDF CLP CNY COP CRC ' +
    'CUP CVE CZK DJF DOP DZD EGP ERN ETB FJD FKP GEL GHS GIP GMD GNF GTQ GYD HKD HNL HTG HUF IDR ILS INR IQD IRR ISK JMD JOD JPY KES ' +
    'KGS KHR KMF KRW KWD KYD KZT LAK LBP LKR LRD LSL LYD MAD MDL MGA MKD MMK MNT MOP MRU MUR MVR MWK MXN MYR MZN NAD NGN NIO NPR NZD ' +
    'OMR PAB PEN PGK PHP PKR PLN PYG QAR RON RSD RUB RWF SAR SBD SCR SDG SGD SHP SLE SOS SRD SSP STN SYP SZL THB TJS TMT TND TOP TRY ' +
    'TTD TWD TZS UAH UGX UYU UZS VES VND VUV WST XAF XCD XOF XPF YER ZAR ZMW').split(' ');
  var CURN = null;
  function curName(c) {
    try { CURN = CURN || new Intl.DisplayNames(['en'], { type: 'currency' }); var n = CURN.of(c); return n && n !== c ? n : c; } catch (x) { return c; }
  }
  function cur() { return (S().household && S().household.base) || 'USD'; }
  function curOptions(sel) {
    function o(c) { return '<option value="' + c + '"' + (c === sel ? ' selected' : '') + '>' + e(curName(c)) + ' · ' + c + '</option>'; }
    var rest = ALL_CUR.filter(function (c) { return TOP_CUR.indexOf(c) < 0; }).sort(function (a, b) { return curName(a).localeCompare(curName(b)); });
    return '<optgroup label="Most used">' + TOP_CUR.map(o).join('') + '</optgroup><optgroup label="All currencies">' + rest.map(o).join('') + '</optgroup>';
  }
  function setCur(c) {
    var s = S(); s.household.base = c;
    s.assets.forEach(function (a) { if (Object.keys(D().ids).some(function (k) { return D().ids[k] === a.id; })) { a.currency = c; a.country = c === 'USD' ? 'United States' : ''; } });
  }

  /* A TAP: the card points at a real key or link in the platform and waits for it to be pressed.
     "Take me there" goes for them. On a phone a place in the bar is behind the menu key: the menu
     key is lit first, then the place inside the open menu. */
  function navSel(k) { return ['#mainbar [data-nav="' + k + '"]', '.phone-head [data-act="menu"]']; }
  function pageSel(path) { return ['#submenu a[href="#' + path + '"]', '#section-keys a[href="#' + path + '"]', '.page-bar [data-act="submenu"]']; }
  function inBar(name) { return layout() === 'phone' ? 'Open the menu at the top, then tap ' + name + '.' : 'Tap ' + name + ' in the bar on the left.'; }
  function tap(o) {
    step({ id: o.id, stage: o.stage, mode: 'tap', at: o.at, when: o.when, noBack: true, noRevisit: true,
      spot: { sel: o.sel }, eb: o.eb, title: o.title, line: o.line, key: null, skip: o.skip || (o.route ? 'Take me there' : null),
      onSkip: o.route ? function () { location.hash = '#' + o.route; } : o.onSkip,
      until: o.route ? function () { var h = location.hash.replace(/^#/, ''); return h === o.route || h.indexOf(o.route + '/') === 0; } : null,
      intercept: o.intercept });
  }
  var FIRST_ROW = function (el) { var c = [].slice.call(el.querySelectorAll('.hm-grid > *')), t = c.length ? c[0].getBoundingClientRect().top : 0; return [el.querySelector('.section-h')].concat(c.filter(function (x) { return Math.abs(x.getBoundingClientRect().top - t) < 1; })); };
  var BRIEF = { sel: ['#view .scene.brief', '#view .page-head'], piece: function (el) { return [el.querySelector('.sc-words') || el]; } };
  var SUBNAV = { sel: ['#submenu .sm-inner', '#section-keys', '.page-bar'] };
  function subnavLine(pages) { return (layout() === 'tablet' ? 'The key beside the path opens them: ' : '') + pages + ' Every desk works the same way.'; }
  function notPhone() { return layout() !== 'phone'; }

  /* ── STAGE 0 · the name, then the map of the stages ───────────────────────────────────── */
  step({ id: 'hello', stage: 0, mode: 'modal', at: '/home', hello: true, noRevisit: true,
    title: function () { return 'Hi, I’m Freya.'; },
    line: function () { return 'I’ll help you set up your family office, one small step at a time. First, what should I call you?'; },
    body: function () {
      return '<div class="tq-fields">' + field('tq-first', 'First name', D().first, '', ' type="text" autocomplete="given-name" maxlength="40"') +
        field('tq-last', 'Family name', D().last, 'optional', ' type="text" autocomplete="family-name" maxlength="40"') +
        '<div class="form-row"><label class="label" for="tq-cur">Your currency</label><select class="input" id="tq-cur">' + curOptions(cur()) + '</select>' +
        '<p class="help">Every figure in your office is shown in it. US dollars unless you choose another.</p></div></div>' +
        '<p class="tq-quiet">This is a preview. What you enter stays in this browser.</p>';
    },
    wire: function (c) {
      onInput(c, '#tq-first', function (v) { D().first = v; refresh(); });
      onInput(c, '#tq-last', function (v) { D().last = v; });
      var cs = c.querySelector('#tq-cur'); cs.addEventListener('change', function () { setCur(cs.value); A.save(); });
      enterGo(c);
    },
    ok: function () { return !!String(D().first || '').trim(); },
    need: function () { return 'Write your first name to go on.'; },
    key: 'Continue',
    go: function () {
      var f = String(D().first).trim(), l = String(D().last || '').trim(), nm = l ? f + ' ' + l : f, s = S();
      s.members[0].name = nm; s.people[0].name = nm;
      s.household.name = l ? 'The ' + l + ' household' : f + '’s household';
      if (!T().named) { T().named = TODAY; A.log('Opened the office'); emit('begin'); }
      A.save(); API.render(); return true;
    } });
  step({ id: 'map', stage: 0, mode: 'modal', at: '/home', noRevisit: true,
    title: function () { return 'Nice to meet you, ' + e(first()) + '.'; },
    line: function () { return 'Your office has five desks, and we’ll open them one at a time, each with your own figures in it. A short quest on Learn opens the next one. About twenty minutes in all, and you can stop after any desk.'; },
    body: function () { return mapHTML(1) + '<p class="tq-quiet">And I’ll be getting to know you as we go: my rings fill as I learn.</p>'; },
    key: 'Start with Records', later: true });

  /* ── the office, shown before anything is asked: the bar, Home, the desks, Learn, the Vault,
     Freya, the desk cards, and then the real key that starts the picture ──────────────────── */
  step({ id: 't-office', stage: 1, mode: 'coach', at: '/home', noBack: true, spot: { sel: ['#mainbar .mb-list', '.phone-head [data-act="menu"]'] },
    eb: 'Your office',
    title: function () { return 'This is your family office.'; },
    line: function () { return layout() === 'phone' ? 'The menu holds everything: Office, your desks, Learn, me and the Family Vault.' : 'Everything is in this bar, on every page: Office, your desks, Learn and me.'; } });
  step({ id: 't-home', stage: 1, mode: 'coach', at: '/home', when: notPhone, spot: { sel: ['#mainbar [data-nav="home"]'] },
    eb: 'Office',
    title: function () { return 'Office is the whole household on one screen.'; },
    line: function () { return 'Where each visit starts: the one thing that matters most today, then every desk at a glance.'; } });
  step({ id: 't-desks', stage: 1, mode: 'coach', at: '/home', when: notPhone, spot: { sel: ['#mb-desks'] },
    eb: 'The desks',
    title: function () { return 'Five desks. One is open.'; },
    line: function () { return 'Records is open. The other four are here too, with a lock: each opens when you pass a short quest on Learn. You can peek into any of them.'; } });
  step({ id: 't-learn', stage: 1, mode: 'coach', at: '/home', when: notPhone, spot: { sel: ['#mainbar [data-nav="learn"]'] },
    eb: 'Learn',
    title: function () { return 'Learn opens your office.'; },
    line: function () { return 'It starts with you: your Financial Identity. Then short quests about your own office; each desk ends with one, and passing it opens the next.'; } });
  step({ id: 't-vault', stage: 1, mode: 'coach', at: '/home', when: notPhone, spot: { sel: ['#mainbar [data-nav="vault"]'] },
    eb: 'Family Vault',
    title: function () { return 'Your papers, filed.'; },
    line: function () { return 'A copy of each, linked to the figure it proves, with a note of where the original is kept.'; } });
  step({ id: 't-fy', stage: 1, mode: 'coach', at: '/home', spot: { sel: ['#fy-bar'] },
    eb: 'Freya',
    title: function () { return 'And me, on every page.'; },
    line: function () { return 'I answer from your record, with the source of every figure. And the more we work together, the better I know you and your needs.'; } });
  step({ id: 't-cards', stage: 1, mode: 'coach', at: '/home', spot: { sel: ['#view .home-desks'], piece: FIRST_ROW },
    eb: 'Office · Your family office',
    title: function () { return 'Each desk has a card here.'; },
    line: function () { return 'Records is open. The other cards show a lock and when they open. We’ll fill them one desk at a time.'; } });
  /* the key is in Freya's summary only while nothing is recorded; a replay from Profile goes straight on */
  tap({ id: 't-add', stage: 1, at: '/home', when: function () { return !S().assets.length; }, sel: ['#view .hm-brief [data-act="add-asset"]', '#view [data-act="add-asset"]'],
    eb: 'Records',
    title: function () { return 'Tap Add what you have.'; },
    line: function () { return 'It’s the key in my summary. Your household record starts with what you have, and I’ll ask the easy ones first.'; },
    intercept: function () { advance(); }, skip: 'Skip' });

  /* ── STAGE 1 · YOUR FIRST PICTURE ─────────────────────────────────────────────────────── */
  function putCash(v) {
    putAsset('cash', { name: D().bank ? 'Savings · ' + D().bank.trim() : 'Savings account', cls: 'cash', institution: (D().bank || '').trim(), program: 'Bank deposits' }, v);
  }
  step({ id: 'cash', stage: 1, mode: 'side', at: '/home', spot: { sel: ['#view .home-map .tv-card', '#view .hm-grid > :first-child'], piece: function (el) { return [el.querySelector('.tv-bar'), el.querySelector('.tv')]; } },
    eb: 'Records · What you own',
    title: function () { return 'Let’s start with your savings.'; },
    line: function () { return 'Almost everyone has a savings account, so it’s the easiest first block. Roughly is fine.'; },
    body: function () {
      return netHTML() + '<div class="tq-q"><p class="tq-l">Your savings account</p><div data-r></div></div>' +
        field('tq-bank', 'Which bank is it with?', D().bank, 'optional', ' type="text" autocomplete="organization" maxlength="40"');
    },
    wire: function (c) {
      ruler(c.querySelector('[data-r]'), { v: line('cash') ? amt('cash') : null, bands: MB, open: 100000, label: 'Your savings',
        onValue: function (v) { if (!v) drop('cash'); else putCash(v); netRedraw(c); refresh(); live(); } });
      onInput(c, '#tq-bank', function (v) { D().bank = v; if (line('cash')) putCash(amt('cash')); });
    },
    ok: function () { return amt('cash') > 0; },
    need: function () { return 'Drag the ruler, or type the figure.'; },
    skip: 'I don’t have one', onSkip: function () { drop('cash'); },
    go: function () { A.save(); API.render(); return true; } });
  step({ id: 'cash-see', stage: 1, mode: 'coach', at: '/home', when: function () { return !!line('cash'); },
    spot: { sel: ['#view .home-map .tv-card'], piece: function (el) { return [el.querySelector('.tv-bar'), el.querySelector('.tv')]; } },
    eb: 'Office · What you own',
    title: function () { return 'There’s your first block.'; },
    line: function () { return 'Everything you own is drawn here, sized by value. One block for now; it grows as we go.'; } });
  quest({ id: 'cash-q', spot: { sel: ['#view .home-map .tv-card'], piece: function (el) { return [el.querySelector('.tv-bar'), el.querySelector('.tv')]; } }, at: '/home', stage: 1, pid: 'fo-record', n: 5, when: function () { return !!line('cash'); },
    q: function () { return 'Your savings are in the record at ' + M(amt('cash')) + '. Where does that figure come from?'; },
    o: function () { return ['You entered it, today', 'Your bank, through a connection', 'Freya’s estimate for a household like yours', 'An average of the last twelve months']; },
    show: [1, 0, 3, 2], hint: 'Think about who put the figure in, and when.',
    why: function () { return 'Every figure carries its source and its date. Yours reads Entered by you, today. A statement later is saved as a new row, and this one stays in the history.'; } });

  /* what you owe: tap each kind there is; each one opens as a line with its own ruler and lender
     (Christian, 2 Oct 2026: "it should be possible to insert more than one") */
  var DEBTS = [['mortgage', 'Mortgage', 'Mortgage', 'Mortgage on the home', 1000000], ['car', 'Car loan', 'Loan', 'Car loan', 100000], ['student', 'Student loan', 'Loan', 'Student loan', 100000],
    ['card', 'Credit card', 'Credit card', 'Credit card', 10000], ['other', 'Another loan', 'Loan', 'Loan', 100000]];
  function kindOf(k) { return DEBTS.filter(function (d) { return d[0] === k; })[0] || null; }
  function debtList() {
    var d = D();
    if (d.debtKind && d.ids.debt) { d.ids['debt-' + d.debtKind] = d.ids.debt; delete d.ids.debt; d.debts = [d.debtKind]; (d.lenders = d.lenders || {})[d.debtKind] = d.lender || ''; delete d.debtKind; }   /* one debt, as the first build kept it */
    return d.debts || (d.debts = []);
  }
  function debtLines() { return debtList().map(function (k) { return line('debt-' + k); }).filter(Boolean); }
  function mortgage() { return line('debt-mortgage'); }
  function putDebtNow(k, v) { var K = kindOf(k), ls = D().lenders || {}; putDebt('debt-' + k, { name: K[3], type: K[2], lender: String(ls[k] || '').trim() }, v); }
  function debtHTML() {
    var d = D(), ks = debtList();
    return chips('debt', DEBTS.map(function (x) { return [x[0], x[1]]; }), ks, true) +
      (ks.length ? '<ul class="tq-rows">' + ks.map(function (k, i) {
        var K = kindOf(k), l = line('debt-' + k), open = d.debtOpen === k;
        return '<li><button type="button" class="tq-row' + (l ? ' is-set' : '') + '" data-drow="' + k + '" aria-expanded="' + open + '">' +
          '<span class="num">' + (l ? CHECK : i + 1) + '</span><span class="t">' + e(K[1]) + '</span><span class="am' + (l ? '' : ' is-add') + '">' + (l ? M(amt('debt-' + k)) : 'Set it') + '</span>' + A.ic('chevron', 'chev') + '</button>' +
          (open ? '<div class="tq-edit"><p class="hint">What is still owed on it. Rough is fine.' + (k === 'mortgage' ? ' More than one home? Set the one on your home here: each other home gets its own mortgage in a moment.' : '') + '</p><div data-r></div>' +
            field('tq-lender', 'Who is it with?', (d.lenders || {})[k], 'optional', ' type="text" autocomplete="organization" maxlength="40"') + '</div>' : '') + '</li>';
      }).join('') + '</ul>' : '');
  }
  step({ id: 'debt', stage: 1, mode: 'side', at: '/home', spot: { sel: ['#view .home-map .tv-owe-wrap', '#view .home-map .tv-card', '#view .hm-grid > :first-child'] },
    eb: 'Records · What you owe',
    title: function () { return 'Now, what you owe.'; },
    line: function () { return 'Nearly everyone owes something. Tap each one you have and set what is still owed. It’s shown beside what you own, never netted away.'; },
    body: function () { return netHTML() + '<p class="tq-l">What do you owe?</p><div data-debts>' + debtHTML() + '</div>'; },
    wire: function (c) {
      var box = c.querySelector('[data-debts]');
      function bind() {
        var k = D().debtOpen, r = box.querySelector('[data-r]'); if (!k || !r) return;
        ruler(r, { v: line('debt-' + k) ? amt('debt-' + k) : null, bands: MB, open: kindOf(k)[4], label: kindOf(k)[1] + ', what is still owed',
          onValue: function (v) {
            if (!v) drop('debt-' + k); else putDebtNow(k, v);
            var row = box.querySelector('[data-drow="' + k + '"]'), l = line('debt-' + k);
            row.classList.toggle('is-set', !!l); row.querySelector('.num').innerHTML = l ? CHECK : debtList().indexOf(k) + 1;
            var am = row.querySelector('.am'); am.classList.toggle('is-add', !l); am.textContent = l ? M(amt('debt-' + k)) : 'Set it';
            netRedraw(c); refresh(); live();
          } });
        onInput(box, '#tq-lender', function (v) { (D().lenders = D().lenders || {})[k] = v; if (line('debt-' + k)) putDebtNow(k, amt('debt-' + k)); });
      }
      function redraw(k) { box.innerHTML = debtHTML(); bind(); refresh(); netRedraw(c); var r = k && box.querySelector('[data-drow="' + k + '"]'); if (r) r.closest('li').scrollIntoView({ block: 'nearest', behavior: RM.matches ? 'auto' : 'smooth' }); }
      box.addEventListener('click', function (ev) {
        var ch = ev.target.closest('[data-debt]'), row = ev.target.closest('[data-drow]'), ks = debtList();
        if (ch) {
          var k = ch.getAttribute('data-debt'), i = ks.indexOf(k);
          if (i < 0) { ks.push(k); D().debtOpen = k; }
          else { ks.splice(i, 1); drop('debt-' + k); if (D().debtOpen === k) D().debtOpen = (ks.filter(function (x) { return !line('debt-' + x); })[0] || null); }
          redraw(D().debtOpen);
        } else if (row) { var k2 = row.getAttribute('data-drow'); D().debtOpen = D().debtOpen === k2 ? null : k2; redraw(k2); }
      });
      bind();
    },
    ok: function () { var ks = debtList(); return ks.length > 0 && ks.every(function (k) { return amt('debt-' + k) > 0; }); },
    need: function () { var ks = debtList(), miss = ks.filter(function (k) { return !(amt('debt-' + k) > 0); }); return !ks.length ? 'Tap what you owe, or No debts.' : miss.length ? 'Set what is still owed on the ' + list(miss.map(function (k) { return kindOf(k)[1].toLowerCase(); })) + '.' : ''; },
    key: function () { var n = debtLines().length; return n === 2 ? 'Add both' : n > 2 ? 'Add all ' + words(n) : 'Continue'; },
    skip: 'No debts', onSkip: function () { debtList().slice().forEach(function (k) { drop('debt-' + k); }); D().debts = []; fwSet('owe'); A.save(); API.render(); },
    go: function () { A.save(); API.render(); return true; } });
  step({ id: 'debt-see', stage: 1, mode: 'coach', at: '/home', when: function () { return debtLines().length > 0; },
    spot: { sel: ['#view .home-map .tv-card', '#view .home-desks'], piece: function (el) { return [el.querySelector('.tv-owe-wrap') || el]; } },
    eb: 'Office · What you owe',
    title: function () { return debtLines().length > 1 ? 'What you owe sits right under it, one block each.' : 'What you owe sits right under it.'; },
    line: function () { var t = A.totals(), m = mortgage(); return 'Drawn to the same scale, so you see one against the other. Your net worth is the difference: ' + M(t.net) + (t.net < 0 && m && !line('home') ? ' for now. Your home comes in two steps, and it sits against the mortgage.' : '.'); } });
  quest({ id: 'debt-q', spot: { sel: ['#view .home-map .tv-owe-wrap', '#view .home-map .tv-card'] }, at: '/home', stage: 1, pid: 'fo-owe', n: 1, when: function () { return debtLines().length > 0; },
    q: function () { return 'Which of these belongs in What you owe?'; },
    o: function () { var d = debtLines().sort(function (a, b) { return A.amount(b.id) - A.amount(a.id); })[0]; return ['Your ' + d.name.charAt(0).toLowerCase() + d.name.slice(1) + ', ' + M(A.amount(d.id)), line('cash') ? 'Your savings account, ' + M(amt('cash')) : 'Your savings account', 'A bill you paid in full last month', 'Your home, at what it would sell for']; },
    show: [2, 0, 3, 1], hint: 'Owed means money you still have to pay back.',
    why: function () { return 'What you owe is money still to be paid back. Your savings are something you own, and a bill already paid is in neither list.'; } });

  /* the family: who the money is for (it feeds the Financial Identity), then who is in it */
  var WHO = [['me', LI.WHO.me || 'Myself', 'one person'], ['partner', LI.WHO.partner || 'My partner and me', 'two of you, one household'],
    ['family', LI.WHO.family || 'The two of us and our children', 'a family, growing'], ['generations', LI.WHO.generations || 'Future generations', 'children, grandchildren and after']];
  var WHO5 = ['purpose', LI.WHO.purpose || 'A wider purpose', 'causes beyond the family'];
  function famHTML() {
    var d = D(), kidsHTML = (d.kids || []).map(function (k, i) {
      return '<div class="tq-pair" data-kid="' + i + '">' + field('tq-kid-' + i, 'Child’s first name', k.name, '', ' type="text" autocomplete="off" maxlength="40" data-kn') +
        field('tq-kidy-' + i, 'Year of birth', k.born, '', ' type="text" inputmode="numeric" maxlength="4" autocomplete="off" data-ky') +
        '<button type="button" class="icon-key tq-x" data-kill="' + i + '" aria-label="Remove this child">' + A.ic('close') + '</button></div>';
    }).join('');
    return '<div class="tq-fam">' + field('tq-born', 'Your year of birth', d.born, '', ' type="text" inputmode="numeric" maxlength="4" autocomplete="bday-year"') +
      (d.hasPartner ? '<div class="tq-pair">' + field('tq-pn', 'Your partner’s first name', d.partner, '', ' type="text" autocomplete="off" maxlength="40"') +
        field('tq-py', 'Year of birth', d.pBorn, '', ' type="text" inputmode="numeric" maxlength="4" autocomplete="off"') +
        '<button type="button" class="icon-key tq-x" data-nopartner aria-label="Remove your partner">' + A.ic('close') + '</button></div>' +
        /* married or not (Christian, 3 Oct 2026: "very important data for us"): it decides what a partner inherits */
        '<div class="tq-union"><p class="tq-l" id="tq-union-l">Are you married?</p>' + chips('union', A.UNION, d.pStatus, false, 'is-union').replace('role="group"', 'role="group" aria-labelledby="tq-union-l"') +
        '<p class="tq-quiet">It decides what a partner inherits without a will. A civil partnership includes a civil union or a registered partnership.</p></div>' : '') +
      kidsHTML + '<div class="tq-adds">' + (d.hasPartner ? '' : '<button type="button" class="key key-secondary key-s" data-addp>' + A.ic('plus') + 'Add your partner</button>') +
      '<button type="button" class="key key-secondary key-s" data-addk>' + A.ic('plus') + 'Add a child</button></div></div>';
  }
  /* a partner or a child is never required (Christian, 2 Oct 2026): a row left empty is skipped;
     only a row begun (a name, or a year) asks to be finished */
  function famRows() {
    var d = D(), rows = [];
    if (d.hasPartner) rows.push({ who: 'partner', name: String(d.partner || '').trim(), born: d.pBorn || '', status: d.pStatus || '' });
    (d.kids || []).forEach(function (k) { rows.push({ who: 'child', name: String(k.name || '').trim(), born: k.born || '' }); });
    return rows;
  }
  function rowEmpty(r) { return !r.name && !r.born; }
  function rowDone(r) { return !!r.name && yearOk(r.born) && (r.who !== 'partner' || !!r.status); }   /* a partner says married or not */
  function famOk() {
    var d = D();
    if (!d.who || !yearOk(d.born)) return false;
    return famRows().every(function (r) { return rowEmpty(r) || rowDone(r); });
  }
  function writeFamily(quiet) {
    var s = S(), d = D(), old = d.ids.people || [], ids = [], me = s.people[0], R;
    me.born = +d.born;
    s.people = s.people.filter(function (p) { return old.indexOf(p.id) < 0; });
    s.relations = (s.relations || []).filter(function (r) { return old.indexOf(r.a) < 0 && old.indexOf(r.b) < 0; });
    R = s.relations;
    var pid = null;
    if (d.hasPartner && String(d.partner || '').trim() && (!quiet || yearOk(d.pBorn))) {
      pid = A.uid('p'); ids.push(pid);
      s.people.push({ id: pid, name: full(d.partner), born: +d.pBorn, relationship: A.UNION_WORD[d.pStatus] || 'Partner', dependant: false });
      R.push({ a: me.id, b: pid, kind: 'partner', status: d.pStatus || '' });
    }
    (d.kids || []).filter(function (k) { return String(k.name || '').trim() && (!quiet || yearOk(k.born)); }).forEach(function (k) {
      var id = A.uid('p'); ids.push(id);
      s.people.push({ id: id, name: full(k.name), born: +k.born, relationship: 'Child', dependant: +TODAY.slice(0, 4) - +k.born < 18 });
      R.push({ a: me.id, b: id, kind: 'parent' }); if (pid) R.push({ a: pid, b: id, kind: 'parent' });
    });
    d.ids.people = ids;
    s.identity.whoFor = LI.WHO[d.who] || '';
    if (ids.length && !quiet) A.log('Added ' + words(ids.length) + (ids.length === 1 ? ' person' : ' people') + ' to the family');
  }
  step({ id: 'family', stage: 1, mode: 'side', at: '/records/family', spot: { sel: ['#view .ftree', '#view .panel'] },
    eb: 'Records · Family',
    title: function () { return 'Who is this money for?'; },
    line: function () { return 'Tap the one that fits. Then add who is in the family: it takes a few seconds, and nobody gets a login unless you invite them.'; },
    body: function () { return opts('who', WHO, D().who, 'is-pyramid') + '<p class="tq-or">or</p>' + opts('who', [WHO5], D().who) + '<div data-fam>' + famHTML() + '</div>'; },
    wire: function (c) {
      var box = c.querySelector('[data-fam]');
      function redraw(focus) { box.innerHTML = famHTML(); refresh(); if (focus) { var f = box.querySelector(focus); if (f) f.focus(); } }
      pickIn(c, '[data-who]', function (b) {
        var d = D(); d.who = b.getAttribute('data-who');
        if ((d.who === 'partner' || d.who === 'family') && !d.hasPartner) d.hasPartner = true;
        if ((d.who === 'me' || d.who === 'purpose') && d.hasPartner && !String(d.partner || '').trim() && !d.pBorn) d.hasPartner = false;
        if (d.who !== 'family' && d.who !== 'generations') d.kids = (d.kids || []).filter(function (k) { return String(k.name || '').trim() || k.born; });
        if (d.who === 'family' && !(d.kids || []).length) d.kids = [{ name: '', born: '' }];
        redraw();
        box.scrollIntoView({ block: 'start', behavior: RM.matches ? 'auto' : 'smooth' });   /* the fields come up into view */
      });
      box.addEventListener('input', function (ev) {
        var t = ev.target, d = D(), k = t.closest('[data-kid]');
        if (t.id === 'tq-born') d.born = t.value.replace(/\D/g, '');
        else if (t.id === 'tq-pn') d.partner = t.value;
        else if (t.id === 'tq-py') d.pBorn = t.value.replace(/\D/g, '');
        else if (k) { var i = +k.getAttribute('data-kid'); if (t.hasAttribute('data-kn')) d.kids[i].name = t.value; else d.kids[i].born = t.value.replace(/\D/g, ''); }
        refresh();
        if (yearOk(d.born)) { writeFamily(true); live(); }
      });
      box.addEventListener('click', function (ev) {
        var d = D(), b = ev.target.closest('button'); if (!b) return;
        if (b.hasAttribute('data-addp')) { d.hasPartner = true; redraw('#tq-pn'); }
        else if (b.hasAttribute('data-addk')) { (d.kids = d.kids || []).push({ name: '', born: '' }); redraw('#tq-kid-' + (d.kids.length - 1)); }
        else if (b.hasAttribute('data-nopartner')) { d.hasPartner = false; d.partner = ''; d.pBorn = ''; d.pStatus = ''; redraw(); }
        else if (b.hasAttribute('data-union')) {
          d.pStatus = b.getAttribute('data-union');
          box.querySelectorAll('[data-union]').forEach(function (x) { x.setAttribute('aria-pressed', String(x === b)); });
          refresh(); if (yearOk(d.born)) { writeFamily(true); live(); }
        }
        else if (b.hasAttribute('data-kill')) { d.kids.splice(+b.getAttribute('data-kill'), 1); redraw(); }
      });
    },
    ok: famOk,
    key: function () { var n = famRows().filter(rowDone).length; return n === 1 ? 'Add to the family' : n === 2 ? 'Add both' : n ? 'Add all ' + words(n) : 'Continue'; },
    need: function () {
      var d = D(), r = famRows().filter(function (x) { return !rowEmpty(x) && !rowDone(x); })[0];
      if (!d.who) return 'Tap who the money is for.';
      if (!yearOk(d.born)) return 'Add your year of birth to go on.';
      if (!r) return '';
      if (r.who === 'partner' && r.name && yearOk(r.born) && !r.status) return 'Tap whether you and ' + r.name.split(' ')[0] + ' are married.';
      return !r.name ? 'Add ' + (r.who === 'partner' ? 'your partner' : 'your child') + '’s first name, or leave the row empty.' : 'Add ' + r.name.split(' ')[0] + '’s year of birth, or leave the row empty.';
    },
    go: function () { writeFamily(); A.save(); API.render(); return true; } });
  step({ id: 'family-see', stage: 1, mode: 'coach', at: '/records/family', when: function () { return S().people.length > 1; },
    spot: { sel: ['#view .ftree', '#view .tr-card', '#view .panel'] },
    eb: 'Records · Family',
    title: function () { return 'Your family, on one tree.'; },
    line: function () { return 'Records and Succession read the same tree, so nobody enters it twice. Children and parents never use a seat.'; } });
  step({ id: 't-addp', stage: 1, mode: 'coach', at: '/records/family', when: function () { return S().people.length > 1; }, spot: { sel: ['#view [data-act="add-person"]'] },
    eb: 'Records · Family',
    title: function () { return 'Add more people any time.'; },
    line: function () { return 'Parents, grandchildren, anyone the money is for. They’re recorded without a login, and use no seat.'; } });
  quest({ id: 'family-q', spot: { sel: ['#view .ftree'] }, stage: 1, pid: 'fo-family', n: 1, at: '/records/family', when: function () { return S().people.length > 1; },
    q: function () { var n = S().people.slice(1).map(function (p) { return p.name.split(' ')[0]; }); return 'Why record ' + list(n) + ' in Family?'; },
    o: function () { return ['So the record shows everyone the money is for', 'So they can log in and follow the plan', 'Because Finna needs an account for everyone', 'So Finna can contact them about the household']; },
    show: [1, 0, 2, 3], hint: 'Think about what the record is for, not about logins.',
    why: function () { return 'The record shows everyone the money is for. People in Family need no login: only the adults you invite have one.'; } });

  /* THE HOMES (3 Oct 2026, Christian: "should be able to add more homes and the mortgage to each home").
     Own or rent; then one row per home, each with what it would sell for, where it is, and its own
     mortgage, drawn against that home in What you owe. The first home is line 'home' and its mortgage
     the debt step's ('debt-mortgage'), so the two steps agree; a second home is 'home-2' with its
     mortgage 'debt-home-2', and so on. A home added and left empty is skipped. */
  var HOME_N = ['Home', 'Second home', 'Third home', 'Fourth home', 'Fifth home'];
  function homes() {
    var d = D();
    if (!d.homes) d.homes = [{ k: 'home', city: d.city || '', mort: mortgage() && d.linkHome !== false ? 'yes' : 'no' }];
    return d.homes;
  }
  function homeName(i) { var h = homes()[i], c = String(h.city || '').trim(); return HOME_N[i] + (c ? ', ' + c : ''); }
  function mortKey(h) { return h.k === 'home' ? 'debt-mortgage' : 'debt-' + h.k; }
  function putHomeAt(i, v) {
    var h = homes()[i];
    putAsset(h.k, { name: homeName(i), cls: 'property', holder: couple() ? 'Joint' : first() }, v);
    linkMort(i);
  }
  function linkMort(i) {
    var h = homes()[i], m = line(mortKey(h)); if (!m) return;
    m.securedOn = h.mort === 'yes' && line(h.k) ? D().ids[h.k] : '';
    if (h.mort === 'yes') m.name = 'Mortgage · ' + homeName(i);
  }
  function putMortAt(i, v) {
    var h = homes()[i], d = D();
    if (h.k === 'home') {   /* the first home's mortgage is the one the debt step asked for */
      if (debtList().indexOf('mortgage') < 0) debtList().push('mortgage');
      (d.lenders = d.lenders || {}).mortgage = h.lender != null ? h.lender : (d.lenders.mortgage || '');
      putDebtNow('mortgage', v);
    } else putDebt(mortKey(h), { name: 'Mortgage · ' + homeName(i), type: 'Mortgage', lender: String(h.lender || '').trim() }, v);
    linkMort(i);
  }
  function dropMort(i) {
    var h = homes()[i]; drop(mortKey(h));
    if (h.k === 'home') { var ks = debtList(), j = ks.indexOf('mortgage'); if (j > -1) ks.splice(j, 1); }
  }
  function homeRow(i) {
    var h = homes()[i], l = line(h.k), m = h.mort === 'yes' && line(mortKey(h));
    return '<span class="num">' + (l ? CHECK : i + 1) + '</span><span class="t">' + e(HOME_N[i]) +
      (l ? '<small>' + (m ? 'Mortgage ' + e(A.short(amt(mortKey(h)))) : h.mort === 'yes' ? 'Mortgage not set' : 'No mortgage') + '</small>' : '') + '</span>' +
      '<span class="am' + (l ? '' : ' is-add') + '">' + (l ? M(amt(h.k)) : 'Set it') + '</span>' + A.ic('chevron', 'chev');
  }
  function homesHTML() {
    var d = D(), hs = homes(), m0 = mortgage();
    return '<ul class="tq-rows">' + hs.map(function (h, i) {
      var open = d.homeOpen === h.k, l = line(h.k);
      return '<li><button type="button" class="tq-row' + (l ? ' is-set' : '') + '" data-hrow="' + h.k + '" aria-expanded="' + open + '">' + homeRow(i) + '</button>' +
        (open ? '<div class="tq-edit"><p class="tq-l">What would it sell for, roughly?</p><div data-r></div>' +
          field('tq-hcity', 'Where is it?', h.city, 'optional', ' type="text" autocomplete="address-level2" maxlength="40"') +
          '<div class="tq-q"><p class="tq-l" id="tq-hm-l">A mortgage on it?</p>' + chips('hm', [['no', 'No mortgage'], ['yes', 'Yes, a mortgage']], h.mort, false, 'is-grid2').replace('role="group"', 'role="group" aria-labelledby="tq-hm-l"') + '</div>' +
          (h.mort === 'yes' ? '<div class="tq-q tq-mort"><p class="hint">' + (h.k === 'home' && m0 ? 'The mortgage you set a moment ago. What is still owed on it, roughly?' : 'What is still owed on it, roughly?') + '</p><div data-rm></div>' +
            field('tq-hlender', 'Who is it with?', h.k === 'home' ? (d.lenders || {}).mortgage : h.lender, 'optional', ' type="text" autocomplete="organization" maxlength="40"') + '</div>' : '') +
          (i ? '<div class="tq-edit-k"><button type="button" class="link" data-hkill>Remove this home</button></div>' : '') + '</div>' : '') + '</li>';
    }).join('') + '</ul>' +
      (hs.length < HOME_N.length ? '<div class="tq-adds"><button type="button" class="key key-secondary key-s" data-hadd>' + A.ic('plus') + 'Add another home</button></div>' : '');
  }
  step({ id: 'home', stage: 1, mode: 'side', at: '/home', spot: { sel: ['#view .home-map .tv-card', '#view .hm-grid > :first-child'], piece: function (el) { return [el.querySelector('.tv-bar'), el.querySelector('.tv')]; } },
    eb: 'Records · What you own',
    title: function () { return 'Do you own your home?'; },
    line: function () { return 'For most households it’s the largest block of what they own. A second home, a holiday home or a flat you let goes here too, each with its own mortgage.'; },
    enter: function () { var d = D(); homes(); if (d.homeOpen === undefined) d.homeOpen = 'home'; },
    body: function () {
      return opts('own', [['yes', 'Yes, ' + we('we', 'I') + ' own it'], ['no', 'No, ' + we('we', 'I') + ' rent']], D().own, 'is-grid2') +
        '<div data-hw' + (D().own === 'yes' ? '' : ' hidden') + '>' + homesHTML() + '</div>';
    },
    wire: function (c) {
      var box = c.querySelector('[data-hw]');
      function at() { var hs = homes(); for (var i = 0; i < hs.length; i++) if (hs[i].k === D().homeOpen) return i; return -1; }
      function head(i) { var b = box.querySelector('[data-hrow="' + homes()[i].k + '"]'); if (b) { b.innerHTML = homeRow(i); b.classList.toggle('is-set', !!line(homes()[i].k)); } }
      function bind() {
        var i = at(); if (i < 0) return;
        var h = homes()[i], r = box.querySelector('[data-r]'), rm = box.querySelector('[data-rm]');
        if (r) ruler(r, { v: line(h.k) ? amt(h.k) : null, bands: MB, open: 1000000, label: HOME_N[i] + ', what it would sell for',
          onValue: function (v) { if (!v) drop(h.k); else putHomeAt(i, v); head(i); refresh(); live(); } });
        if (rm) ruler(rm, { v: line(mortKey(h)) ? amt(mortKey(h)) : null, bands: MB, open: 1000000, label: 'The mortgage on the ' + HOME_N[i].toLowerCase() + ', what is still owed',
          onValue: function (v) { if (!v) dropMort(i); else putMortAt(i, v); head(i); refresh(); live(); } });
        onInput(box, '#tq-hcity', function (v) { h.city = v; if (!i) D().city = v; if (line(h.k)) putHomeAt(i, amt(h.k)); head(i); });
        onInput(box, '#tq-hlender', function (v) {
          if (h.k === 'home') (D().lenders = D().lenders || {}).mortgage = v; else h.lender = v;
          if (line(mortKey(h))) putMortAt(i, amt(mortKey(h)));
        });
      }
      function redraw(k) { box.innerHTML = homesHTML(); bind(); refresh(); var r = k && box.querySelector('[data-hrow="' + k + '"]'); if (r) r.closest('li').scrollIntoView({ block: 'nearest', behavior: RM.matches ? 'auto' : 'smooth' }); }
      pickIn(c, '[data-own]', function (b) { D().own = b.getAttribute('data-own'); box.hidden = D().own !== 'yes'; if (D().own === 'yes') redraw(); refresh(); });
      box.addEventListener('click', function (ev) {
        var d = D(), row = ev.target.closest('[data-hrow]'), hm = ev.target.closest('[data-hm]'), i = at();
        if (row) { var k = row.getAttribute('data-hrow'); d.homeOpen = d.homeOpen === k ? null : k; redraw(k); }
        else if (hm && i > -1) {
          var h = homes()[i]; h.mort = hm.getAttribute('data-hm');
          if (h.mort === 'no') dropMort(i); else linkMort(i);
          redraw(h.k); live();
          if (h.mort === 'yes') { var rr = box.querySelector('[data-rm]'); if (rr) rr.scrollIntoView({ block: 'nearest', behavior: RM.matches ? 'auto' : 'smooth' }); }
        } else if (ev.target.closest('[data-hadd]')) {
          var hs = homes(), n = 2; while (hs.some(function (x) { return x.k === 'home-' + n; })) n++;
          hs.push({ k: 'home-' + n, city: '', mort: 'no', lender: '' }); d.homeOpen = 'home-' + n; redraw(d.homeOpen);
        } else if (ev.target.closest('[data-hkill]') && i > 0) {
          var hk = homes()[i]; drop(hk.k); dropMort(i); homes().splice(i, 1); d.homeOpen = null; redraw(); live();
          homes().forEach(function (x, j) { if (line(x.k)) putHomeAt(j, amt(x.k)); });   /* the names follow the order */
        }
      });
      if (D().own === 'yes') bind();
    },
    ok: function () {
      var d = D(); if (d.own === 'no') return true;
      return d.own === 'yes' && amt('home') > 0 && homes().every(function (h) { return !line(h.k) || h.mort !== 'yes' || amt(mortKey(h)) > 0; });
    },
    need: function () {
      var d = D(); if (!d.own) return 'Tap yes or no.';
      if (!(amt('home') > 0)) return 'Set roughly what your home would sell for.';
      var hs = homes(), i = -1; hs.forEach(function (h, j) { if (i < 0 && line(h.k) && h.mort === 'yes' && !(amt(mortKey(h)) > 0)) i = j; });
      return i > -1 ? 'Set what is still owed on the ' + (i ? HOME_N[i].toLowerCase() : 'home') + '’s mortgage, or tap No mortgage.' : '';
    },
    key: function () { var n = homes().filter(function (h) { return line(h.k); }).length; return D().own === 'yes' && n > 1 ? 'Add ' + words(n) + ' homes' : 'Continue'; },
    go: function () {
      var d = D();
      if (d.own === 'no') {
        homes().forEach(function (h, i) { drop(h.k); if (h.k !== 'home') drop(mortKey(h)); else if (mortgage()) mortgage().securedOn = ''; });
        d.homes = [{ k: 'home', city: '', mort: 'no' }];
      } else {
        /* a home added and left empty is skipped, with its mortgage */
        for (var i = homes().length - 1; i > 0; i--) { var h = homes()[i]; if (!line(h.k)) { dropMort(i); homes().splice(i, 1); } }
        homes().forEach(function (x, j) { putHomeAt(j, amt(x.k)); });
        var city = String(homes()[0].city || '').trim(); if (city) S().household.city = city;
        var n = homes().length; if (n > 1) A.log('Added ' + words(n) + ' homes');
      }
      A.save(); API.render(); return true;
    } });
  step({ id: 'home-see', stage: 1, mode: 'coach', at: '/home', when: function () { return !!line('home'); },
    spot: { sel: ['#view .home-map .tv-card'], piece: function (el) { return [el.querySelector('.tv-bar'), el.querySelector('.tv')]; } },
    eb: 'Office · What you own',
    title: function () {
      var hs = homes().filter(function (h) { return line(h.k); }), h = hs.reduce(function (t, x) { return t + amt(x.k); }, 0), n = hs.length;
      var big = S().assets.filter(function (a) { return a.cls !== 'property'; }).every(function (a) { return A.amount(a.id) <= h; });
      return n > 1 ? (big ? 'Your homes are now the biggest block.' : 'Your homes are in your record.') : big ? 'Your home is now the biggest block.' : 'Your home is in your record.';
    },
    line: function () {
      var hs = homes().filter(function (h) { return line(h.k); }), ms = hs.filter(function (h) { var m = line(mortKey(h)); return m && m.securedOn === D().ids[h.k]; }).length;
      return (hs.length > 1 ? 'Each home is a block, sized by what it would sell for.' : 'Sized by what it would sell for.') +
        (ms ? ' ' + (ms > 1 ? 'Each mortgage is drawn against its home' : hs.length > 1 ? 'The mortgage is drawn against its home' : 'The mortgage on it is drawn') + ' in What you owe, below.' : '');
    } });

  /* investments: tap each kind there is, as with what you owe; each one opens as a line with its own ruler and where
     it is held, or upload the latest statement (Christian, 4 Oct 2026: "reuse the debt tags … Shares, Bonds, Private
     Equity, Real Estate, Venture Capital, Other or upload your latest statement", and no fixed Bonds line). Shares
     include funds in any account, a 401(k) or an IRA; real estate here is property held as an investment (the home is
     on Home), drawn in the real-estate colour; other investments sit with the private holdings until a statement says more. */
  var INV = [
    { k: 'shares', t: 'Shares', d: 'Shares and funds, in any account: a brokerage account, a 401(k) or an IRA.', cls: 'listed', name: 'Shares and funds', open: 100000 },
    { k: 'bonds', t: 'Bonds', d: 'Bonds and bond funds, held directly or in an account.', cls: 'bonds', name: 'Bonds', open: 100000 },
    { k: 'pe', t: 'Private equity', d: 'A private equity fund, or a share in a private company.', cls: 'private', name: 'Private equity', open: 100000 },
    { k: 're', t: 'Real estate', d: 'Property you hold as an investment, or a real estate fund. Your own home is in Records.', cls: 'private', mix: { property: 1 }, liq: 'Property', name: 'Real estate investment', open: 1000000 },
    { k: 'vc', t: 'Venture capital', d: 'Early-stage companies, directly or through a fund.', cls: 'private', name: 'Venture capital', open: 100000 },
    { k: 'other', t: 'Other', d: 'Anything else you invest in. It sits with your private holdings until a statement says more.', cls: 'private', name: 'Other investments', open: 100000 }];
  function invKind(k) { return INV.filter(function (h) { return h.k === k; })[0] || null; }
  function invList() { var d = D(); if (!Array.isArray(d.invs)) d.invs = []; return d.invs; }
  function invSet() { return invList().filter(function (k) { return amt('inv-' + k) > 0; }); }
  function invTotal() { return INV.reduce(function (s, h) { return s + amt('inv-' + h.k); }, 0); }
  function putInv(k, v) {
    var h = invKind(k), a = putAsset('inv-' + k, { name: h.name, cls: h.cls, program: '', institution: String((D().invAt || {})[k] || '').trim() }, v);
    if (h.mix) a.mix = h.mix; if (h.liq) a.liquidity = h.liq;
  }
  function invHTML() {
    var d = D(), t = invTotal(), ks = invList(), n = invSet().length, st = d.invStmt;
    return '<div class="tq-net" data-inet aria-live="polite"><p class="l">Invested</p><p class="v' + (t ? '' : ' is-dash') + '">' + (t ? M(t) : '—') + '</p><p class="w">' +
      (t ? (n === 1 ? 'One kind' : cap(words(n)) + ' kinds') : 'Tap the kinds you have') + ' · net worth <b>' + M(A.totals().net) + '</b></p></div>' +
      '<p class="tq-l">What do you invest in?</p>' + chips('inv', INV.map(function (h) { return [h.k, h.t]; }), ks, true) +
      '<div class="tq-stmt">' + (st ? '<p class="tq-stmt-done">' + CHECK + '<span><b>' + e(st) + '</b> is in your Family Vault, where I can read it. Set the amounts below for now; rough is fine.</span></p>' :
        '<label class="tq-chip tq-file tq-stmt-k"><input class="sr" type="file" data-inv-file accept="application/pdf,image/*,.csv">' + A.ic('plus', 'tq-up-ic') + 'Or upload your latest statement</label>') + '</div>' +
      (ks.length ? '<ul class="tq-rows">' + ks.map(function (k, i) {
        var h = invKind(k), l = line('inv-' + k), open = d.invOpen === k;
        return '<li><button type="button" class="tq-row' + (l ? ' is-set' : '') + '" data-irow="' + k + '" aria-expanded="' + open + '">' +
          '<span class="num">' + (l ? CHECK : i + 1) + '</span><span class="t">' + e(h.t) + '</span><span class="am' + (l ? '' : ' is-add') + '">' + (l ? M(amt('inv-' + k)) : 'Set it') + '</span>' + A.ic('chevron', 'chev') + '</button>' +
          (open ? '<div class="tq-edit"><p class="hint">' + e(h.d) + ' Rough is fine.</p><div data-r></div>' +
            field('tq-invat', 'Where is it held?', (d.invAt || {})[k], 'optional', ' type="text" autocomplete="organization" maxlength="40"') + '</div>' : '') + '</li>';
      }).join('') + '</ul>' : '');
  }
  step({ id: 'invest', stage: 1, mode: 'side', at: '/investment/holdings', spot: { sel: ['#view .block .tv-card', '#view .sg-card', '#view .scene'], piece: function (el) { return [el.querySelector('.tv-bar') || el, el.querySelector('.tv') || el]; } },
    eb: 'Records · What you own',
    title: function () { return 'What do you invest in?'; },
    line: function () { return 'Tap each kind you have and set roughly what it’s worth, or upload your latest statement. Skip what you don’t have.'; },
    body: function () { return '<div data-invbox>' + invHTML() + '</div>'; },
    wire: function (c) {
      var box = c.querySelector('[data-invbox]');
      function bind() {
        var k = D().invOpen, h = invKind(k), r = box.querySelector('[data-r]'); if (!h || !r) return;
        ruler(r, { v: line('inv-' + k) ? amt('inv-' + k) : null, bands: MB, open: h.open, label: h.t + ', roughly what it’s worth',
          onValue: function (v) {
            if (!v) drop('inv-' + k); else putInv(k, v);
            var row = box.querySelector('[data-irow="' + k + '"]'), l = line('inv-' + k);
            row.classList.toggle('is-set', !!l); row.querySelector('.num').innerHTML = l ? CHECK : invList().indexOf(k) + 1;
            var am = row.querySelector('.am'); am.classList.toggle('is-add', !l); am.textContent = l ? M(amt('inv-' + k)) : 'Set it';
            box.querySelector('[data-inet]').outerHTML = invHTML().match(/^<div class="tq-net"[\s\S]*?<\/div>/)[0];
            refresh(); live();
          } });
        onInput(box, '#tq-invat', function (v) { (D().invAt = D().invAt || {})[k] = v; if (line('inv-' + k)) putInv(k, amt('inv-' + k)); });
      }
      function redraw(k) { box.innerHTML = invHTML(); bind(); refresh(); var r = k && box.querySelector('[data-irow="' + k + '"]'); if (r) r.closest('li').scrollIntoView({ block: 'nearest', behavior: RM.matches ? 'auto' : 'smooth' }); }
      box.addEventListener('click', function (ev) {
        var ch = ev.target.closest('.tq-chip[data-inv]'), row = ev.target.closest('[data-irow]'), ks = invList();
        if (ch) {
          var k = ch.getAttribute('data-inv'), i = ks.indexOf(k);
          if (i < 0) { ks.push(k); D().invOpen = k; }
          else { ks.splice(i, 1); drop('inv-' + k); if (D().invOpen === k) D().invOpen = (ks.filter(function (x) { return !line('inv-' + x); })[0] || null); }
          redraw(D().invOpen);
        } else if (row) { var k2 = row.getAttribute('data-irow'); D().invOpen = D().invOpen === k2 ? null : k2; redraw(k2); }
      });
      /* the statement: filed in the Family Vault as it is; the amounts are still set here, rough */
      box.addEventListener('change', function (ev) {
        var inp = ev.target.closest('[data-inv-file]'); if (!inp || !inp.files || !inp.files[0]) return;
        var f = inp.files[0], nm = f.name.replace(/\.[^.]+$/, '');
        S().documents.push({ id: A.uid('d'), name: nm, cat: 'Statements', date: TODAY, size: Math.max(0.1, f.size / 1048576).toFixed(1) + ' MB', original: 'Digital only', lines: [], summary: '', uploaded: true, from: 'investment' });
        D().invStmt = f.name; A.log('Filed ' + nm + ' in the Family Vault'); A.save(); redraw(D().invOpen);
      });
      bind();
    },
    ok: function () { var ks = invList(); return ks.every(function (k) { return amt('inv-' + k) > 0; }); },
    need: function () { var miss = invList().filter(function (k) { return !(amt('inv-' + k) > 0); }); return miss.length ? 'Set roughly what the ' + list(miss.map(function (k) { return invKind(k).t.toLowerCase(); })) + ' ' + (miss.length > 1 ? 'are' : 'is') + ' worth.' : ''; },
    key: function () { var n = invSet().length; return n === 2 ? 'Add both' : n > 2 ? 'Add all ' + words(n) : n || D().invStmt ? 'Continue' : 'I have none of these'; },
    go: function () { A.save(); API.render(); return true; } });
  step({ id: 'invest-see', stage: 1, mode: 'coach', at: '/investment/holdings', when: function () { return invTotal() > 0; },
    spot: { sel: ['#view .block .tv-card', '#view .scene'], piece: function (el) { return [el.querySelector('.tv-bar') || el, el.querySelector('.tv') || el]; } },
    eb: 'Investment desk',
    title: function () { return 'The Investment desk reads them.'; },
    line: function () { var ks = invSet().map(function (k) { return invKind(k).t.toLowerCase(); }); return M(invTotal()) + ' in ' + list(ks) + ', drawn by what it is, with your savings beside it. The single holdings come later, when your accounts are linked.'; } });

  step({ id: 't-subnav', stage: 1, mode: 'coach', at: '/investment/holdings', when: function () { return invTotal() > 0; }, spot: SUBNAV,
    eb: 'Investment desk',
    title: function () { return 'Each desk has its own pages.'; },
    line: function () { return subnavLine('Here: What you hold, the Mix lab and The route to investing. Fees come later.'); } });

  /* Learn, The First Picture, quest 1: put five holdings in order (a puzzle, not a quiz) */
  var ORDER_RIGHT = ['Cash', 'Government bonds', 'Listed shares', 'Property', 'Private markets'];
  var ORDER_START = ['Property', 'Cash', 'Private markets', 'Listed shares', 'Government bonds'];
  var OWHY = 'Money in a bank account is already cash. Government bonds and listed shares sell in days, a home in months, and a stake in a private fund can take years.';
  step({ id: 'ladder', stage: 1, mode: 'side', at: '/home', noRevisit: true,
    eb: function () { return 'Learn · The First Picture · quest 1 of 2'; },
    title: function () { return 'Put these in order.'; },
    line: function () { return 'Soonest to cash at the top, longest to reach at the bottom. Drag the rows, or use the arrow keys. Getting it wrong costs nothing.'; },
    enter: function () { var d = D(); if (!d.order) { d.order = ORDER_START.slice(); d.orderTry = 0; } },
    body: function () {
      var d = D(), done = !!d.orderDone;
      return '<p class="tq-rung">Cash tomorrow</p><ol class="tq-ladder' + (done ? ' is-done' : '') + '" aria-label="Five holdings, in order. Focus a row and use the arrow keys to move it.">' +
        d.order.map(function (t, i) { return '<li' + (done ? ' class="is-ok"' : ' tabindex="0"') + ' data-t="' + e(t) + '" aria-label="' + e(t) + ', ' + (i + 1) + ' of 5"><span class="rank">' + (i + 1) + '</span><span class="t">' + e(t) + '</span>' + GRIP + '<span class="ok">' + CHECK + '</span></li>'; }).join('') +
        '</ol><p class="tq-rung">Years to reach</p><p class="sr" aria-live="assertive" data-say></p><div class="feedback' + (done ? ' ok' : '') + '" data-fb aria-live="polite">' + (done ? '<b>Yes.</b> ' + OWHY : '') + '</div>';
    },
    wire: function (c) {
      var ul = c.querySelector('.tq-ladder'), say = c.querySelector('[data-say]'), row = null, y0 = 0, h = 58;
      if (D().orderDone) return;
      function sync() {
        D().order = Array.prototype.map.call(ul.children, function (li) { return li.getAttribute('data-t'); });
        Array.prototype.forEach.call(ul.children, function (li, i) { li.querySelector('.rank').textContent = i + 1; li.setAttribute('aria-label', li.getAttribute('data-t') + ', ' + (i + 1) + ' of 5'); li.classList.remove('is-off'); });
        var fb = c.querySelector('[data-fb]'); if (fb.classList.contains('try')) { fb.className = 'feedback'; fb.innerHTML = ''; }
      }
      function pitch() { return ul.children[1].getBoundingClientRect().top - ul.children[0].getBoundingClientRect().top; }
      ul.addEventListener('pointerdown', function (ev) { row = ev.target.closest('li'); if (!row) return; try { ul.setPointerCapture(ev.pointerId); } catch (x) {} y0 = ev.clientY; h = pitch(); row.classList.add('is-lift'); ev.preventDefault(); });
      ul.addEventListener('pointermove', function (ev) {
        if (!row) return;
        var dy = ev.clientY - y0;
        if (dy > h * 0.55 && row.nextElementSibling) { ul.insertBefore(row.nextElementSibling, row); y0 += h; dy -= h; }
        else if (dy < -h * 0.55 && row.previousElementSibling) { ul.insertBefore(row, row.previousElementSibling); y0 -= h; dy += h; }
        row.style.transform = 'translateY(' + dy + 'px)';
      });
      function dropRow() { if (!row) return; row.style.transform = ''; row.classList.remove('is-lift'); row = null; sync(); }
      ul.addEventListener('pointerup', dropRow); ul.addEventListener('pointercancel', dropRow);
      ul.addEventListener('keydown', function (ev) {
        var li = ev.target.closest('li'); if (!li) return;
        if (ev.key === 'ArrowUp' && li.previousElementSibling) ul.insertBefore(li, li.previousElementSibling);
        else if (ev.key === 'ArrowDown' && li.nextElementSibling) ul.insertBefore(li.nextElementSibling, li);
        else return;
        ev.preventDefault(); li.focus(); sync();
        say.textContent = li.getAttribute('data-t') + ', moved to ' + (Array.prototype.indexOf.call(ul.children, li) + 1) + ' of 5';
      });
    },
    key: function () { return D().orderDone ? 'Continue' : 'Check my answer'; },
    go: function () {
      var d = D(); if (d.orderDone) return true;
      var c = card.querySelector('.tq-body'), ul = c.querySelector('.tq-ladder'), fb = c.querySelector('[data-fb]'), off = 0;
      Array.prototype.forEach.call(ul.children, function (li, i) { var ok = li.getAttribute('data-t') === ORDER_RIGHT[i]; li.classList.toggle('is-off', !ok); if (!ok) off++; });
      if (off && !d.orderTry) {
        d.orderTry = 1; fb.className = 'feedback try';
        fb.innerHTML = (off === 5 ? '<b>Not yet.</b> None is in its place, marked in gold.' : '<b>Nearly.</b> ' + cap(words(off)) + (off === 1 ? ' is' : ' are') + ' out of place, marked in gold.') + ' Move ' + (off === 1 ? 'it' : 'them') + ' and check again: a second try earns the full 40 XP.';
        A.save(); return false;
      }
      if (off) {   /* the second try shows the order, each row gliding to its place */
        var top0 = {}; Array.prototype.forEach.call(ul.children, function (li) { top0[li.getAttribute('data-t')] = li.getBoundingClientRect().top; });
        ORDER_RIGHT.forEach(function (t) { ul.appendChild(ul.querySelector('li[data-t="' + t + '"]')); });
        Array.prototype.forEach.call(ul.children, function (li, i) {
          li.querySelector('.rank').textContent = i + 1; if (RM.matches) return;
          var dd = top0[li.getAttribute('data-t')] - li.getBoundingClientRect().top; li.style.transition = 'none'; li.style.transform = 'translateY(' + dd + 'px)';
          requestAnimationFrame(function () { requestAnimationFrame(function () { li.style.transition = 'transform 420ms var(--ease)'; li.style.transform = ''; }); });
        });
      }
      d.order = ORDER_RIGHT.slice(); d.orderDone = true; ul.classList.add('is-done');
      Array.prototype.forEach.call(ul.children, function (li) { li.classList.remove('is-off'); li.classList.add('is-ok'); li.removeAttribute('tabindex'); });
      var r = A.learnAnswer('first-picture', 1); if (r && r.first) xp(40);
      fb.className = 'feedback ok'; fb.innerHTML = '<b>' + (off ? 'Here is the order.' : d.orderTry ? 'That’s it.' : 'Yes.') + '</b> ' + OWHY + ' <b>+40 XP.</b>';
      A.save(); return false;
    } });

  /* the email: so the first picture is kept in their name (in the platform, a code by email) */
  function saveStep(id, stage, when, title, line0, at) {
    step({ id: id, stage: stage, mode: 'side', at: at || '/home', when: when, noRevisit: true,
      eb: 'Keep it',
      title: function () { return title(); },
      line: function () { return line0(); },
      enter: function () { L.code = L.code || { sent: false, to: '' }; },
      body: function () {
        var c = L.code;
        return '<div class="tq-save">' + (c.sent ?
          '<p class="tq-sent">We sent a six-digit code to <b>' + e(c.to) + '</b>.</p>' + field('tq-code', 'The code', '', '', ' type="text" inputmode="numeric" autocomplete="one-time-code" maxlength="6" placeholder="000000"') +
            '<p class="tq-quiet">In this preview any six digits work, and nothing is sent. <button type="button" class="link" data-again>Use another email</button></p>' :
          field('tq-email', 'Your email', D().email, '', ' type="email" inputmode="email" autocomplete="email" maxlength="80" placeholder="you@example.com"') +
            '<p class="tq-quiet">One code by email, no password to remember. Your record stays private to your household.</p>') + '</div>';
      },
      wire: function (c) {
        onInput(c, '#tq-email', function (v) { D().email = v.trim(); refresh(); });
        onInput(c, '#tq-code', function (v) { var i = c.querySelector('#tq-code'); i.value = v.replace(/\D/g, '').slice(0, 6); L.codeV = i.value; refresh(); });
        var ag = c.querySelector('[data-again]'); if (ag) ag.addEventListener('click', function () { L.code = { sent: false, to: '' }; draw(); });
        enterGo(c);
      },
      ok: function () { return L.code && L.code.sent ? /^\d{6}$/.test(L.codeV || '') : /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(D().email || ''); },
      key: function () { return L.code && L.code.sent ? 'Keep it in my name' : 'Send me a code'; },
      skip: 'Not now',
      go: function () {
        if (!L.code.sent) { L.code = { sent: true, to: D().email }; L.codeV = ''; draw(); var i = card.querySelector('#tq-code'); if (i && !COARSE.matches) i.focus(); return false; }
        S().members[0].email = L.code.to; A.log('Kept the office in ' + first() + '’s name'); L.code = null; L.codeV = ''; A.save(); emit('saved');
        return true;
      } });
  }
  quest({ id: 'fp2', stage: 1, pid: 'first-picture', n: 2,
    q: function () { return 'One more, and the first badge is yours. What does Finna do for you?'; },
    o: function () { return ['Keeps your record, holds your rules and tells you when you drift', 'Chooses investments and trades them for you', 'Gives personal tax and legal advice', 'Manages your money for a share of the gains']; },
    show: [1, 0, 3, 2], hint: 'Think about what you have done so far: you entered, Finna kept.',
    why: function () { return 'Finna keeps your record, holds the rules you write, and tells you when you drift from them. It never trades, and tax and legal questions go to your own advisers.'; } });

  /* THE BADGE: the first path finished, celebrated on the spot (Christian, 2 Oct 2026) */
  function badgeArt() {
    return '<div class="tq-medal" aria-hidden="true"><i></i><i></i><i></i><svg class="lmk is-done is-huge is-draw" viewBox="0 0 24 24"><circle class="b" cx="12" cy="12" r="10.5"/><path class="tick" d="M7.4 12.4l3.1 3.1 6.1-6.5"/></svg></div>';
  }
  step({ id: 'badge', stage: 1, mode: 'modal', noBack: true, noRevisit: true, badge: true, when: function () { return A.learnPath('first-picture').state === 'done'; },
    title: function () { return 'The First Picture'; },
    eb: function () { return 'Your first badge'; },
    line: function () { return 'Two quests about your own office, and the first leaves on your Learn Map. It opens the paths of every desk there, and your next desk.'; },
    body: function () { return badgeArt(); },
    after: function () { return '<p class="tq-badge-xp"><b>' + A.learnXP() + ' XP</b> so far · rank ' + A.ring(A.learnXP()).r + ' of 12</p>'; },
    enter: function () { emit('badge', { path: 'first-picture' }); },
    key: 'See it on my Map' });
  /* the Map, with the latest step drawing itself (app.js lmLatest: the leaf, or the finished path's mark, slowly) */
  step({ id: 'lq-map-1', stage: 1, mode: 'coach', at: '/learn/map/records', learn: true, noBack: true, noRevisit: true, spot: { sel: ['#view .lm-map'] },
    eb: 'Learn · The Map',
    title: function () { return 'Your Map just grew.'; },
    line: function () { return 'The First Picture’s two leaves, and its mark, earned. Every quest you pass grows a leaf here, and every path you finish closes its mark. Your household record is next on Records.'; } });
  /* Home again, now with their figures in it, then the Records desk, then the email */
  step({ id: 'h-brief', stage: 1, mode: 'coach', at: '/home', noBack: true, spot: { sel: ['#view .hm-brief'] },
    eb: 'Office',
    title: function () { return 'My summary, at the top of Office.'; },
    line: function () { return 'Each day I put the one thing that matters most here, with the key that takes you to it.'; } });
  step({ id: 'h-cards', stage: 1, mode: 'coach', at: '/home', spot: { sel: ['#view .home-desks'], piece: FIRST_ROW },
    eb: 'Office · Your family office',
    title: function () { return 'Your desks, with your own figures.'; },
    line: function () { return 'Records shows your net worth, ' + M(A.totals().net) + '. The others open one at a time.'; } });
  tap({ id: 't-records', stage: 1, at: '/home', sel: navSel('records'), route: '/records',
    eb: 'Records',
    title: function () { return 'Now open the Records desk.'; },
    line: function () { return inBar('Records'); } });
  step({ id: 'r-brief', stage: 1, mode: 'coach', at: '/records', spot: BRIEF,
    eb: 'Records desk',
    title: function () { return 'Records: the household record.'; },
    line: function () { var n = S().assets.length + S().liabilities.length; return 'Every desk is written from here: ' + words(n) + (n === 1 ? ' line' : ' lines') + ' so far, each with its source and its date. Nothing is ever overwritten.'; } });
  step({ id: 'r-pages', stage: 1, mode: 'coach', at: '/records', spot: SUBNAV,
    eb: 'Records desk',
    title: function () { return 'Its pages.'; },
    line: function () { return subnavLine('The Statement, What you own, What you owe, the Timeline and the Family tree. Advisers come later.'); } });
  saveStep('save', 2, function () { return !S().members[0].email; }, function () { return 'Let’s keep this in your name.'; },
    function () { return 'Your figures, your Financial Identity, and everything I learn about you from here on. Add your email so it stays yours, and you can open your office from any device.'; }, '/freya/map');

  /* a stage's last card: what it built, the map, and Later beside Next */
  function stageDone(n, title, sum) {
    step({ id: 'done' + n, stage: n, done: true, mode: 'modal', noRevisit: true,
      title: function () { return title(); },
      line: function () { return 'Stage ' + n + ' of 8 is done. Take a break here if you like: the tutorial picks up at stage ' + (n + 1) + '.'; },
      body: function () { return sumHTML(sum()) + mapHTML(n + 1); },
      enter: function () { emit('stage', { done: n }); },
      key: function () { return 'Next: ' + STAGES[n + 1].t; }, later: true });
  }
  stageDone(1, function () { return 'That’s your first picture, ' + e(first()) + '.'; }, function () {
    var t = A.totals(), p = S().people.length;
    return [['Net worth', M(t.net)], ['In Records', words(S().assets.length + S().liabilities.length) === 'one' ? 'One line' : cap(words(S().assets.length + S().liabilities.length)) + ' lines'],
      p > 1 ? ['In Family', cap(words(p)) + ' people'] : null, A.learnPath('first-picture').state === 'done' ? ['Your first badge', 'The First Picture'] : null, ['Earned', T().xp + ' XP']];
  });

  /* ── STAGE 2 · PROTECT IT ──────────────────────────────────────────────────────────────── */
  /* A SUM FOR EVERY POLICY THAT HAS ONE (Christian, 4 Oct 2026: four policies entered, "I was only
     allowed to insert numbers for the two of them"). Each kind with one sum gets a ruler: a sum insured
     (c.sum), or for Disability what it pays each month (c.monthly). Health and Auto have no single sum,
     as in the demo record, and the card says so rather than leaving it unexplained. */
  var CSUM = {
    'Life': { f: 'lifeSum', l: 'Life cover pays, roughly', a: 'Life cover, what it pays', bands: MB, open: 1000000, need: 'Set roughly what the life cover pays.' },
    'Homeowners': { f: 'homeSum', l: 'Homeowners: the dwelling cover, roughly', a: 'Homeowners, the dwelling cover', bands: MB, open: 1000000, need: 'Set roughly what the dwelling cover is.' },
    'Renters': { f: 'rentSum', l: 'Renters: what’s in the home is covered for, roughly', a: 'Renters, the cover for what is in the home', bands: MB, open: 100000, need: 'Set roughly what the cover for what’s in the home is.' },
    'Disability': { f: 'disMonth', month: true, l: 'Disability pays each month, roughly', a: 'Disability cover, what it pays each month', bands: SB, open: 10000, need: 'Set roughly what disability cover pays each month.' },
    'Umbrella liability': { f: 'umbSum', l: 'Umbrella liability: the limit, roughly', a: 'Umbrella liability, the limit', bands: MB, open: 1000000, need: 'Set roughly what the umbrella limit is.' }
  };
  function coverKinds() {
    return [['Life', 'Life'], ['Health', 'Health'], line('home') ? ['Homeowners', 'Homeowners'] : ['Renters', 'Renters'], ['Auto', 'Auto'], ['Disability', 'Disability'], ['Umbrella liability', 'Umbrella liability']];
  }
  function writeCover(quiet) {
    var s = S(), d = D(), old = d.ids.cover || {}, sel = d.covers || [], ids = {};
    s.cover = s.cover.filter(function (c) { return !Object.keys(old).some(function (k) { return old[k] === c.id && sel.indexOf(k) < 0; }); });
    sel.forEach(function (k) {
      var c = s.cover.filter(function (x) { return x.id === old[k]; })[0];
      if (!c) { c = { id: A.uid('c'), type: k, insurer: '—', premium: 0, renews: '', beneficiaries: '', nominated: '', doc: '' }; s.cover.push(c); }
      c.covers = k === 'Life' || k === 'Disability' ? first() : k === 'Homeowners' ? (line('home') ? line('home').name : 'Home') : k === 'Health' ? S().people.map(function (p) { return p.name.split(' ')[0]; }).join(', ') : k === 'Auto' ? 'Car' : k === 'Renters' ? 'What is in the home' : S().household.name;
      c.sum = CSUM[k] && !CSUM[k].month ? d[CSUM[k].f] || 0 : 0;
      if (CSUM[k] && CSUM[k].month) c.monthly = d[CSUM[k].f] || 0; else delete c.monthly;
      ids[k] = c.id;
    });
    d.ids.cover = ids;
    if (sel.length && !quiet) A.log('Listed ' + words(sel.length) + (sel.length === 1 ? ' insurance policy' : ' insurance policies'));
  }
  tap({ id: 't-protect', stage: 2, sel: navSel('protection'), route: '/protection',
    eb: 'Protection',
    title: function () { return 'Open Protection.'; },
    line: function () { return inBar('Protection') + ' It’s the desk for your insurance.'; } });
  step({ id: 'p-brief', stage: 2, mode: 'coach', at: '/protection', spot: BRIEF,
    eb: 'Protection desk',
    title: function () { return 'Protection: what’s covered, and what isn’t.'; },
    line: function () { return 'My summary here names every gap while it’s still a gap. Nothing is listed yet, so let’s add what you have.'; } });
  step({ id: 'cover', stage: 2, mode: 'side', at: '/protection', spot: { sel: ['#view .scene.brief', '#view .page-head'], piece: function (el) { return [el.querySelector('.sc-words') || el]; } },
    eb: 'Protection · Cover',
    title: function () { return 'Which insurance do you have?'; },
    line: function () { return 'Tap all that apply. A rough sum is enough for now, and the details can come from each policy later.'; },
    body: function () {
      var d = D(), sel = d.covers || [];
      return chips('cv', coverKinds(), sel, true, 'is-place') +
        '<button type="button" class="tq-chip tq-none" data-cvnone aria-pressed="' + !!d.noCover + '">None of these yet</button>' +
        coverKinds().filter(function (k) { return CSUM[k[0]]; }).map(function (k) {
          return '<div class="tq-q" data-sum="' + e(k[0]) + '"' + (sel.indexOf(k[0]) > -1 ? '' : ' hidden') + '><p class="tq-l">' + e(CSUM[k[0]].l) + '</p><div data-r></div></div>'; }).join('') +
        '<p class="tq-quiet" data-nosum hidden></p>';
    },
    wire: function (c) {
      var d = D(), on = {};
      function mount() {
        var sel = d.covers || [], none = sel.filter(function (k) { return !CSUM[k]; });
        c.querySelectorAll('[data-sum]').forEach(function (box) {
          var k = box.getAttribute('data-sum'), o = CSUM[k]; box.hidden = sel.indexOf(k) < 0;
          if (!box.hidden && !on[k]) { on[k] = true; ruler(box.querySelector('[data-r]'), { v: d[o.f] || null, bands: o.bands, open: o.open, label: o.a, onValue: function (v) { d[o.f] = v; refresh(); } }); }
        });
        var ns = c.querySelector('[data-nosum]'); ns.hidden = !none.length;
        ns.textContent = none.length ? list(none) + (none.length > 1 ? ' have' : ' has') + ' no single sum insured, so there’s nothing to set here: the details come from ' + (none.length > 1 ? 'each policy' : 'the policy') + ' later.' : '';
      }
      c.addEventListener('click', function (ev) {
        var b = ev.target.closest('[data-cv]'), n = ev.target.closest('[data-cvnone]');
        if (b) { var k = b.getAttribute('data-cv'), sel = d.covers = d.covers || [], i = sel.indexOf(k); if (i > -1) sel.splice(i, 1); else sel.push(k); b.setAttribute('aria-pressed', String(i < 0)); d.noCover = false; c.querySelector('[data-cvnone]').setAttribute('aria-pressed', 'false'); }
        else if (n) { d.noCover = !d.noCover; if (d.noCover) { d.covers = []; c.querySelectorAll('[data-cv]').forEach(function (x) { x.setAttribute('aria-pressed', 'false'); }); } n.setAttribute('aria-pressed', String(d.noCover)); }
        else return;
        mount(); refresh(); writeCover(true); live();
      });
      mount();
    },
    ok: function () { var d = D(), sel = d.covers || [], ks = coverKinds().map(function (x) { return x[0]; }); return (d.noCover || sel.length > 0) && sel.every(function (k) { return !CSUM[k] || ks.indexOf(k) < 0 || d[CSUM[k].f] > 0; }); },
    need: function () { var d = D(), sel = d.covers || []; if (!(d.noCover || sel.length)) return 'Tap the ones you have, or None of these yet.'; var k = coverKinds().map(function (x) { return x[0]; }).filter(function (x) { return sel.indexOf(x) > -1 && CSUM[x] && !(d[CSUM[x].f] > 0); })[0]; return k ? CSUM[k].need : ''; },
    go: function () { writeCover(); fwSet('cover'); A.save(); API.render(); return true; } });
  function gaps() {
    var have = S().cover.map(function (c) { return c.type; }), out = [];
    if (have.indexOf('Life') < 0 && (couple() || kids().length)) out.push('life cover');
    if (have.indexOf('Disability') < 0) out.push('disability cover');
    if (have.indexOf('Umbrella liability') < 0) out.push('umbrella liability');
    if (line('home') && have.indexOf('Homeowners') < 0) out.push('homeowners cover');
    return out;
  }
  step({ id: 'cover-see', stage: 2, mode: 'coach', at: '/protection',
    spot: { sel: ['#view .scene.brief', '#view .page-head'], piece: function (el) { return [el.querySelector('.sc-words') || el]; } },
    eb: 'Protection desk',
    title: function () { return S().cover.length ? 'Protection shows what’s covered, and what isn’t.' : 'Protection names every gap, while it’s a gap.'; },
    line: function () { var g = gaps(); return (S().cover.length ? cap(words(S().cover.length)) + (S().cover.length === 1 ? ' policy is' : ' policies are') + ' in the record. ' : '') + (g.length ? 'Not recorded yet: ' + list(g) + '. ' : '') + 'Gaps are named before they’re a claim, never sold to you.'; } });
  quest({ id: 'cover-q', spot: { sel: ['#view .scene.brief'], piece: function (el) { return [el.querySelector('.sc-words') || el]; } }, at: '/protection', stage: 2, pid: 'fo-cover', n: 1,
    q: function () { return 'Which of these could you most easily pay from ' + (line('cash') ? 'your ' + M(amt('cash')) + ' in savings' : 'savings') + ', with no insurance at all?'; },
    o: function () { return ['Replacing a dishwasher that breaks down', line('home') ? 'Rebuilding your home after a fire' : 'Replacing everything in your home after a fire', 'Paying for water damage you cause to a neighbour’s home', 'Replacing years of income if you couldn’t work']; },
    show: [2, 0, 3, 1], hint: 'Insurance is for the losses you couldn’t carry yourself.',
    why: function () { return 'Insurance is for the losses you couldn’t carry yourself. A small, likely cost is cheaper to pay from savings than to insure.'; } });

  /* the papers: a statement or a policy, filed with its line in the Family Vault (optional) */
  function docRows() {
    var rows = [];
    if (line('cash')) rows.push([D().ids.cash, line('cash').name, 'A statement']);
    INV.forEach(function (h) { var l = line('inv-' + h.k); if (l) rows.push([l.id, l.name, 'A statement']); });
    debtLines().forEach(function (l) { rows.push([l.id, l.name, 'The agreement or a statement']); });
    homes().forEach(function (h) { if (line(h.k)) rows.push([D().ids[h.k], line(h.k).name, 'An appraisal or the deed']); });
    S().cover.forEach(function (c) { rows.push(['c:' + c.id, c.type + ' cover', 'The policy']); });
    return rows;
  }
  function docsFor(t) { return S().documents.filter(function (d) { return t.indexOf('c:') === 0 ? S().cover.some(function (c) { return 'c:' + c.id === t && c.doc === d.id; }) : (d.lines || []).indexOf(t) > -1; }); }
  function docsHTML() {
    var rows = docRows();
    return '<ul class="tq-up">' + rows.map(function (r) {
      var ds = docsFor(r[0]);
      return '<li class="' + (ds.length ? 'is-set' : '') + '"><span class="num">' + (ds.length ? CHECK : A.ic('vault')) + '</span><span class="t"><b>' + e(r[1]) + '</b><small>' + (ds.length ? 'Filed: ' + e(ds.map(function (d) { return d.name; }).join(', ')) : e(r[2])) + '</small></span>' +
        '<label class="key key-secondary key-s tq-file"><input class="sr" type="file" data-upload data-upload-for="' + e(r[0]) + '" accept="application/pdf,image/*">' + (ds.length ? 'Add another' : 'Add a file') + '</label></li>';
    }).join('') + '</ul>';
  }
  tap({ id: 't-vault2', stage: 2, sel: navSel('vault'), route: '/vault', when: function () { return docRows().length > 0; },
    eb: 'Family Vault',
    title: function () { return 'Open the Family Vault.'; },
    line: function () { return layout() === 'phone' ? 'Open the menu; it’s at the foot.' : 'At the foot of the bar.'; } });
  step({ id: 'docs', stage: 2, mode: 'side', at: '/vault', spot: { sel: ['#view .data-table', '#view .collection-state', '#view .page-head'] }, when: function () { return docRows().length > 0; },
    eb: 'The Family Vault',
    title: function () { return 'Have any of these as a PDF?'; },
    line: function () { return 'Add a statement or a policy and it’s filed with the line it belongs to. Optional: it can wait, and nothing here needs it.'; },
    enter: function () { L.docs0 = S().documents.length; },
    body: function () { return '<div data-docs>' + docsHTML() + '</div>'; },
    refreshOnRender: function () { var b = card.querySelector('[data-docs]'); if (b) b.innerHTML = docsHTML(); refresh(); },
    key: 'Continue' });
  step({ id: 'vault-see', stage: 2, mode: 'coach', at: '/vault',
    spot: { sel: ['#view .data-table', '#view .collection-state', '#view .panel', '#view .page-head'] },
    eb: 'The Family Vault',
    title: function () { return S().documents.length ? 'Filed in the Family Vault.' : 'This is your Family Vault.'; },
    line: function () { return (S().documents.length ? 'Each file is linked to its line. ' : 'Empty for now. ') + 'A copy lives here, with a note of where the original is kept, and Freya can read it.'; } });
  quest({ id: 'vault-q', spot: { sel: ['#view .data-table', '#view .collection-state'] }, stage: 2, pid: 'fo-vault', n: 1, at: '/vault',
    q: function () { return 'Your Family Vault keeps your papers. What does it hold for each one?'; },
    o: function () { return ['A copy, with a note of where the original is', 'The original, so the paper one can be thrown away', 'Only the date it was signed', 'Nothing, until Freya has read it']; },
    show: [1, 2, 0, 3], hint: 'Think about what someone would need if they had to find the paper itself.',
    why: function () { return 'The Vault holds a copy, and names where the original is kept, so it can be found when someone needs it.'; } });
  stageDone(2, function () { return 'Protected, and filed.'; }, function () {
    return [['Insurance', S().cover.length ? cap(words(S().cover.length)) + (S().cover.length === 1 ? ' policy' : ' policies') : 'None recorded yet'], ['In the Vault', S().documents.length ? cap(words(S().documents.length)) + (S().documents.length === 1 ? ' document' : ' documents') : 'Nothing yet'], ['Earned', T().xp + ' XP']];
  });

  /* ── STAGE 3 · YOUR FINANCIAL IDENTITY ─────────────────────────────────────────────────── */
  function badLabel(k) { var b = LI.BAD.filter(function (x) { return x[0] === k; })[0]; if (!b) return ''; return couple() ? b[1] : b[1].replace('our mix', 'my mix'); }
  step({ id: 'horizon', stage: 3, mode: 'side', at: '/home',
    eb: 'Your Financial Identity',
    title: function () { return 'How long could your savings wait?'; },
    line: function () { var s = amt('cash') + invTotal(); return (s ? 'You have ' + M(s) + ' in savings and investments. ' : '') + 'The years before you’d need most of it. Drag round the dial, or use the arrow keys.'; },
    body: function () { return '<div data-dial></div>'; },
    wire: function (c) { dial(c.querySelector('[data-dial]'), { v: D().hz == null ? null : D().hz, label: 'How long your savings could wait, in years', onValue: function (v) { D().hz = v; refresh(); } }); },
    ok: function () { return D().hz != null; },
    need: function () { return 'Turn the dial to a number of years.'; } });
  step({ id: 'bad', stage: 3, mode: 'side', at: '/home',
    eb: 'Your Financial Identity',
    title: function () { return 'In a bad year, what would you do?'; },
    line: function () { return 'Markets have bad years. Here is one, drawn on ' + (invTotal() ? 'your figure' : 'an example') + '. There is no right answer: this one is about you.'; },
    body: function () {
      var own = invTotal() > 0, base = own ? invTotal() : 100000;
      return rideSvg(base, own) + '<p class="tq-cap">A fall of a quarter in a year. An illustration, not a forecast.</p>' +
        opts('bad', LI.BAD.map(function (b) { return [b[0], badLabel(b[0])]; }), D().bad);
    },
    wire: function (c) { pickIn(c, '[data-bad]', function (b) { D().bad = b.getAttribute('data-bad'); refresh(); }); },
    ok: function () { return !!D().bad; },
    need: function () { return 'Tap the one closest to what you would do.'; } });
  step({ id: 'monthly', stage: 3, mode: 'side', at: '/home',
    eb: 'Your Financial Identity',
    title: function () { return 'How much do you set aside each month?'; },
    line: function () { return 'Roughly, for savings and investments together. The planning tools use it later. Skip it if it changes a lot.'; },
    body: function () { return '<div class="tq-q"><div data-r></div></div>'; },
    wire: function (c) { ruler(c.querySelector('[data-r]'), { v: D().monthly || null, bands: SB, open: 5000, label: 'Set aside each month', onValue: function (v) { D().monthly = v; refresh(); } }); },
    ok: function () { return D().monthly > 0; },
    skip: 'Skip this one', onSkip: function () { D().monthly = 0; } });
  function writeIdentity() {
    var s = S(), d = D(), bad = LI.BAD.filter(function (b) { return b[0] === d.bad; })[0];
    s.identity = { whoFor: LI.WHO[d.who] || '', horizon: d.hz, badYear: bad ? bad[1] : '', updated: TODAY, savingsMonthly: d.monthly || 0 };
    delete s.learn.identity;
    var I = A.idS(); I.ans.who = d.who || 'family';
    var r = A.idResolve(I.ans); I.title = { arch: r.arch, mod: r.mod };
    I.hist = [{ date: TODAY, t: 'A first reading', d: 'The ' + r.mod + ' ' + r.arch + ', from four answers you gave in the tutorial.' }];
    A.log('Drew a first Financial Identity');
    s.learn.last = { id: 'identity', n: 1 };   /* its first leaf is the latest step on the Map */
    return r;
  }
  step({ id: 'crest', stage: 3, mode: 'modal', at: '/home', noRevisit: true, noBack: true,
    enter: function () { if (!D().idDone) { D().id = writeIdentity(); D().idDone = true; xp(40); A.save(); } },
    eb: 'Your Financial Identity · a first reading',
    title: function () { var r = D().id; return e(r.title); },
    line: function () { var r = D().id; return e(cap(r.sigLine || '')) + '.'; },
    body: function () {
      var r = D().id;
      return '<div class="tq-id">' + crest(r.arch, 88) + '<div class="tq-chips is-static">' + (r.chips || []).map(function (c) { return '<span class="tq-chip">' + e(c) + '</span>'; }).join('') + '</div></div>' +
        '<p class="tq-quiet">Drawn from four answers by the same written rules for every household. It firms as you go, and it never decides what you can access. <b>+40 XP.</b></p>';
    },
    key: 'Continue' });
  /* on Learn, before the second desk: it's about them, not the system */
  /* first, why it matters: a short film (learn.js VIDEOS 'id-why'; Christian, 4 Oct 2026: "more than just a risk analysis which
     the banks are doing, its the core of the family office and the future family charter … passed on to the next generation") */
  step({ id: 'id-intro', stage: 3, mode: 'modal', at: '/learn/map/identity', learn: true, noBack: true, cls: 'is-film',
    eb: 'Learn · Your Financial Identity',
    title: function () { return 'It starts with you.'; },
    line: function () { return 'Not the risk profile a bank asks for: the core of your family office, and one day your Family Charter. Watch the short film, or read it, then four quick answers.'; },
    body: function () { return API.V.lvFor ? API.V.lvFor('tut:identity', 'full') : ''; },
    key: 'Begin my four answers' });
  step({ id: 'id-learn', stage: 3, mode: 'coach', at: '/learn/map/identity', learn: true, noBack: true, noRevisit: true, spot: { sel: ['#view .lm-card', '#view .lm-map'] },
    eb: 'Learn · Your Financial Identity',
    title: function () { return 'It grows with you.'; },
    line: function () { return 'Your four answers are its first quest. Sixteen more, in four stages, sharpen it over time. When Governance opens, it sits there, beside the rules you write.'; } });
  /* on Policy, later: the rules start from it */
  step({ id: 'identity-see', stage: 3, mode: 'coach', at: '/policy/identity', when: function () { return !!D().id; },
    spot: { sel: ['#view .id-card', '#view .panel', '#view .page-head'], piece: function (el) { return [el.querySelector('.id-card-top'), el.querySelector('.id-card-id')]; } },
    eb: 'Governance · Financial Identity',
    title: function () { return 'Your Financial Identity lives here.'; },
    line: function () { return 'The reading you drew on Learn, now beside your rules. They start from it: what the money is for, and how long it can wait.'; } });
  stageDone(3, function () { return 'You’re ' + e(D().id ? D().id.title.replace(/^The /, 'the ') : 'on the Map') + '.'; }, function () {
    return [['Your Financial Identity', e(D().id ? D().id.title : '')], ['Horizon', e(hzLabel(D().hz))], D().monthly ? ['Set aside', M(D().monthly) + ' a month'] : null, ['Earned', T().xp + ' XP']];
  });

  /* ── STAGE 4 · ASK FREYA ───────────────────────────────────────────────────────────────── */
  function theQ() { return couple() ? 'What do we own and owe, and what should we look at first?' : 'What do I own and owe, and what should I look at first?'; }
  function userN() { return API.fy().thread.filter(function (m) { return m.role === 'user'; }).length; }
  step({ id: 'freya-ask', stage: 4, mode: 'free', at: '/home', noBack: true,
    spot: { sel: ['#fy-bar'] },
    enter: function () {
      if (API.fy().open) API.ACT['fy-close']();
      L.fyN = userN();
      var i = API.inputEl(); if (i) { i.value = theQ(); API.sendState(); }
    },
    eb: 'Ask Freya',
    title: function () { return 'I’ve written a question for you.'; },
    line: function () { return 'It’s in my bar below. Press the green arrow to send it: I answer from your record, and every figure carries its source.'; },
    key: null, skip: 'Skip this stage', onSkip: function () { var i = API.inputEl(); if (i && i.value === theQ()) { i.value = ''; API.sendState(); } },
    watch: function () {
      var F = API.fy();
      if (userN() > L.fyN && !F.busy) { var last = F.thread[F.thread.length - 1]; if (last && last.role === 'assistant' && last.content) return 'freya-read'; }
      return null;
    } });
  step({ id: 'freya-read', stage: 4, mode: 'free', noBack: true, noRevisit: true,
    spot: { sel: ['#fy-panel'] },
    eb: 'Ask Freya',
    title: function () { return 'That’s my answer, from your record.'; },
    line: function () { return D().id ? 'Ask me anything about your office, on any page: I know which page you’re on. The free office has 40 questions a month.' :
      'Your rules start with you, so that’s where we go next: your Financial Identity, on Learn. You can ask me anything, on any page.'; },
    key: function () { return D().id ? 'Continue' : 'Draw my Financial Identity'; },
    go: function () { if (API.fy().open) API.ACT['fy-close'](); return true; } });
  quest({ id: 'freya-q', stage: 4, pid: 'fo-freya', n: 1, at: '/home',
    q: function () { return 'Where did I find that answer?'; },
    o: function () { return ['In your record and the documents in your Vault', 'In what households like yours have done', 'In my own estimate of your figures', 'In the news, and what markets did today']; },
    show: [2, 1, 0, 3], hint: 'Look at the sources under each line of the answer.',
    why: function () { return 'Freya reads only your record and your Vault, and names the source of every figure. If something is not there, she says so, and where it would go.'; } });
  stageDone(4, function () { return 'You’ve met Freya properly.'; }, function () {
    return [['Your first conversation', 'Kept in Freya · Recent'], ['Questions left this month', String(S().freya.allowanceMessages - S().freya.messages)], ['Earned', T().xp + ' XP']];
  });

  /* ── STAGE 5 · YOUR RULES ──────────────────────────────────────────────────────────────── */
  var KL = { equities: 'Listed shares', fixed: 'Bonds', cash: 'Cash', private: 'Private markets' };
  var KC = { equities: 'var(--c-eq)', fixed: 'var(--c-bonds)', cash: 'var(--c-cash)', private: 'var(--c-pe)' };   /* the class colours (app.css, CHART COLOURS) */
  /* the starting targets: what they hold today, to the nearest 5, made to add up to 100 */
  function startMix() {
    var inv = A.investable(), out = {}, sum = 0;
    A.POLICY_CLASSES.forEach(function (k) { out[k] = inv.total ? Math.round(inv.by[k] / inv.total * 20) * 5 : (k === 'cash' ? 100 : 0); sum += out[k]; });
    if (sum !== 100) { var big = A.POLICY_CLASSES.slice().sort(function (a, b) { return out[b] - out[a]; })[0]; out[big] = clamp(out[big] + 100 - sum, 0, 100); }
    return out;
  }
  function mixSum() { var m = D().mix || {}; return A.POLICY_CLASSES.reduce(function (s, k) { return s + (m[k] || 0); }, 0); }
  function mixHTML() {
    var d = D(), m = d.mix, sum = mixSum();
    return '<div class="tq-mixbar" aria-hidden="true">' + A.POLICY_CLASSES.map(function (k) { return m[k] ? '<i style="flex:' + m[k] + ';background:' + KC[k] + '"></i>' : ''; }).join('') + '</div>' +
      '<ul class="tq-steps">' + A.POLICY_CLASSES.map(function (k) {
        return '<li><span class="sw" style="background:' + KC[k] + '"></span><span class="t">' + KL[k] + '</span>' +
          '<button type="button" class="icon-key" data-dn="' + k + '" aria-label="Less ' + KL[k].toLowerCase() + '"' + (m[k] <= 0 ? ' disabled' : '') + '>' + MINUS + '</button>' +
          '<output class="v" aria-live="polite">' + m[k] + '%</output>' +
          '<button type="button" class="icon-key" data-up="' + k + '" aria-label="More ' + KL[k].toLowerCase() + '"' + (m[k] >= 100 ? ' disabled' : '') + '>' + A.ic('plus') + '</button></li>';
      }).join('') + '</ul><p class="tq-tot' + (sum === 100 ? '' : ' is-off') + '">' + (sum === 100 ? 'Adds up to 100%.' : 'Adds up to ' + sum + '%. Move them until they make 100%.') + '</p>';
  }
  tap({ id: 't-policy', stage: 5, sel: navSel('policy'), route: '/policy',
    eb: 'Governance',
    title: function () { return 'Open Governance.'; },
    line: function () { return inBar('Governance') + ' Your household’s rules are written there once, and watched.'; } });
  step({ id: 'pol-brief', stage: 5, mode: 'coach', at: '/policy', spot: BRIEF,
    eb: 'Governance desk',
    title: function () { return 'Governance: your rules, watched.'; },
    line: function () { return D().id ? 'Nothing is written yet. Your Financial Identity is here already; your first rules start from it, then one goal.' : 'Nothing is written yet. First, three questions about how you think about money. Then your first rules, and one goal.'; } });
  step({ id: 'floor', stage: 5, mode: 'side', at: '/policy/rules', spot: { sel: ['#view .collection-state', '#view .rg-panel', '#view .panel'] },
    eb: 'Governance · Your rules',
    title: function () { return 'How much cash must always be reachable?'; },
    line: function () { return 'Your first rule. ' + (line('cash') ? 'You have ' + M(amt('cash')) + ' in savings today. ' : '') + 'Finna never suggests the figure: it’s yours to set, and you’re told if cash falls under it.'; },
    body: function () { return '<div class="tq-q"><div data-r></div></div>'; },
    wire: function (c) { var cash = A.reachableCash(); ruler(c.querySelector('[data-r]'), { v: D().floor || null, bands: MB, open: cash > 100000 ? 1000000 : 100000, label: 'Cash that must stay reachable', onValue: function (v) { D().floor = v; refresh(); } }); },
    ok: function () { return D().floor > 0; },
    need: function () { return 'Drag the ruler to the cash you always want reachable.'; } });
  step({ id: 'mix', stage: 5, mode: 'side', at: '/policy/rules', spot: { sel: ['#view .collection-state', '#view .rg-panel', '#view .panel'] },
    eb: 'Governance · Your rules',
    title: function () { return 'Your mix, in four ranges.'; },
    line: function () { return 'A target for each, and how far it may drift before you’re told. It starts at what you hold today, so keeping it as it is works too.'; },
    enter: function () { if (!D().mix) D().mix = startMix(); },
    /* Christian, 4 Oct 2026: "at this stage the user dont know anything about investing and portfolio
       strategy." Finna never picks the mix (no advice), so the card says what happens instead: it is a
       starting point, written down; Freya shows where it and the household pull apart as she learns
       them, and the yearly review (in the Timeline a year after version 1) asks again. */
    body: function () {
      var d = D();
      return '<div data-mix>' + mixHTML() + '</div><p class="tq-l">How far may each drift from its target?</p>' + chips('w', [['5', '5 points'], ['10', '10 points'], ['15', '15 points']], d.width ? String(d.width) : '') +
        '<p class="tq-l">No single company above</p>' + chips('cc', [['5', '5%'], ['10', '10%'], ['20', '20%'], ['25', '25%']], d.conc ? String(d.conc) : '') +
        '<p class="tq-quiet"><b>You don’t need to know the right mix yet.</b> This is a starting point. As you learn, and as I get to know you, I’ll show you where your rules and your goals pull apart, and your yearly review asks again. The mix is always yours to set: Finna never picks it for you.</p>';
    },
    wire: function (c) {
      var box = c.querySelector('[data-mix]');
      box.addEventListener('click', function (ev) {
        var b = ev.target.closest('[data-up],[data-dn]'); if (!b) return;
        var k = b.getAttribute('data-up') || b.getAttribute('data-dn'), m = D().mix;
        m[k] = clamp(m[k] + (b.hasAttribute('data-up') ? 5 : -5), 0, 100); box.innerHTML = mixHTML();
        var f = box.querySelector('[data-' + (b.hasAttribute('data-up') ? 'up' : 'dn') + '="' + k + '"]'); if (f && !f.disabled) f.focus(); refresh();
      });
      pickIn(c, '[data-w]', function (b) { D().width = +b.getAttribute('data-w'); refresh(); });
      pickIn(c, '[data-cc]', function (b) { D().conc = +b.getAttribute('data-cc'); refresh(); });
    },
    ok: function () { return mixSum() === 100 && !!D().width && !!D().conc; },
    need: function () { return mixSum() !== 100 ? 'Move the targets until they add up to 100%.' : !D().width ? 'Choose how far each may drift.' : 'Choose the single-company limit.'; },
    key: 'Write my rules',
    go: function () {
      var d = D(), s = S(), b = {}, w = d.width;
      A.POLICY_CLASSES.forEach(function (k) { var t = d.mix[k]; b[k] = [t, Math.max(0, t - w), Math.min(100, t + w)]; });
      var who = LI.WHO[d.who], p = { version: 1, effective: TODAY, by: first(), agreed: [first()], note: 'Written in the tutorial', purpose: who ? 'This money is for ' + who.charAt(0).toLowerCase() + who.slice(1) + '.' : '', enough: '',
        exclusions: 'No single company above ' + d.conc + '%.', liquidityMin: d.floor, concentrationMax: d.conc, bands: b };
      if (s.policy.length && d.policyDone) s.policy[s.policy.length - 1] = p; else { s.policy.push(p); A.log('Wrote policy version 1'); }
      d.policyDone = true; fwSet('rule'); A.save(); API.render(); return true;
    } });
  step({ id: 'rules-see', stage: 5, mode: 'coach', at: '/policy/rules',
    spot: { sel: ['#view .rg-panel', '#view .panel', '#view .page-head'], piece: function (el) { return [el.firstElementChild || el]; } },
    eb: 'Governance · Your rules',
    title: function () { return 'Written down once, then watched.'; },
    line: function () { var out = A.drift().filter(function (x) { return x.out; }); return 'Drift is measured against these ranges from today. ' + (out.length ? cap(words(out.length)) + (out.length === 1 ? ' class is' : ' classes are') + ' outside a range already: that is on Drift, with what moved it.' : 'Everything is inside its range, and if that changes you’re told the same day.'); } });
  tap({ id: 't-drift', stage: 5, at: '/policy/rules', sel: pageSel('/policy/drift'), route: '/policy/drift',
    eb: 'Governance',
    title: function () { return 'Open Drift.'; },
    line: function () { return 'One of Governance’s pages: where you stand against each range, today.'; } });
  step({ id: 'drift-see', stage: 5, mode: 'coach', at: '/policy/drift', spot: { sel: ['#view .scene', '#view .rg-panel', '#view .page-head'] },
    eb: 'Governance · Drift',
    title: function () { return 'Where you stand, against your own ranges.'; },
    line: function () { return 'When something moves outside a range, it shows here first, with what moved it.'; } });
  quest({ id: 'rules-q', spot: { sel: ['#view .scene', '#view .rg-panel'] }, stage: 5, pid: 'fo-rules', n: 3, at: '/policy/drift',
    q: function () { var b = A.policy().bands.equities; return 'Your listed shares have a target of ' + b[0] + '%, a floor of ' + b[1] + '% and a ceiling of ' + b[2] + '%. What does that range allow?'; },
    o: function () { var b = A.policy().bands.equities; return ['Anything from ' + b[1] + '% to ' + b[2] + '% keeps to the rule; ' + b[0] + '% is the aim', 'Listed shares must sit at exactly ' + b[0] + '% at all times', 'Anything under ' + b[2] + '% keeps to the rule', 'The range moves up and down with the market']; },
    show: [1, 0, 3, 2], hint: 'A range has two ends.',
    why: function () { return 'Anywhere between the floor and the ceiling keeps to your rule. The target is where you aim to sit; outside the range, you’re told.'; } });
  stageDone(5, function () { return 'Your rules are written.'; }, function () {
    var p = A.policy(); return p ? [['Cash always reachable', M(p.liquidityMin)], ['Ranges', '±' + D().width + ' points round each target'], ['Single company', 'No more than ' + p.concentrationMax + '%'], ['Earned', T().xp + ' XP']] : [];
  });

  /* ── STAGE 6 · WEALTH PLANNING ─────────────────────────────────────────────────────────── */
  var GOALS = [['retire', 'Retiring'], ['home', 'A home'], ['edu', 'Education'], ['work', 'A change of work'], ['gift', 'A gift'], ['else', 'Something else']];
  var PRIO = [['Need', 'Need', 'It has to happen'], ['Want', 'Want', 'It would matter'], ['Wish', 'Wish', 'If it can']];
  function goalName() { var d = D(); if (d.goal === 'else') return String(d.goalText || '').trim() || 'Something else'; if (d.goal === 'retire') return 'Retire'; var g = GOALS.filter(function (x) { return x[0] === d.goal; })[0]; return g ? g[1] : ''; }
  tap({ id: 't-plan', stage: 6, at: '/policy/drift', sel: pageSel('/policy/planning'), route: '/policy/planning',
    eb: 'Governance',
    title: function () { return 'Open Wealth planning.'; },
    line: function () { return 'Another of Governance’s pages: your goals, each with an amount, a date and a priority.'; } });
  /* ANOTHER GOAL (Christian, 4 Oct 2026: after the goal map "ask them if there are other goals, so that
     they can repeat the process"). goal-more offers the round again: goalNew makes the next Add the goal
     a new goal, and Back from the goal's first card returns to the question with the last goal as it was. */
  function tutGoals() { return S().goals.filter(function (g) { return g.source === 'Written in the tutorial'; }); }
  var GKEYS = ['goal', 'goalText', 'gAmt', 'gYear', 'prio', 'linked', 'gMonthly'];
  function goalSnap() { var d = D(), o = {}; GKEYS.forEach(function (k) { o[k] = k === 'linked' ? (d.linked || []).slice() : d[k]; }); return o; }
  function goalLoad(o) { var d = D(); GKEYS.forEach(function (k) { d[k] = o ? (k === 'linked' ? (o.linked || []).slice() : o[k]) : (k === 'linked' ? [] : k === 'goalText' ? '' : null); }); }
  step({ id: 'goal', stage: 6, mode: 'side', at: '/policy/planning', spot: { sel: ['#view .gx-plot', '#view .collection-state', '#view .panel'] },
    eb: 'Governance · Wealth planning',
    title: function () { return D().goalNew ? 'What else is this money for?' : 'What is one thing this money is for?'; },
    line: function () { return D().goalNew ? 'Tap one, then the amount and the year, as before.' : 'Tap one. You can add more goals later.'; },
    backTo: function () { return D().goalNew ? 'goal-more' : null; },
    onBack: function () { var d = D(); if (d.goalNew) { d.goalNew = false; goalLoad((d.goalSnaps || {})[d.ids.goal]); A.save(); } },
    body: function () {
      var d = D();
      return chips('goal', GOALS, d.goal) + '<div data-else' + (d.goal === 'else' ? '' : ' hidden') + '>' + field('tq-goal', 'Name it, in a few words', d.goalText, '', ' type="text" autocomplete="off" maxlength="40"') + '</div>' +
        '<div class="tq-q"><p class="tq-l">How much will it take?</p><div data-ra></div></div><div class="tq-q"><p class="tq-l">By when?</p><div data-ry></div></div>';
    },
    wire: function (c) {
      var d = D();
      pickIn(c, '[data-goal]', function (b) { d.goal = b.getAttribute('data-goal'); c.querySelector('[data-else]').hidden = d.goal !== 'else'; refresh(); });
      onInput(c, '#tq-goal', function (v) { d.goalText = v; refresh(); });
      ruler(c.querySelector('[data-ra]'), { v: d.gAmt || null, bands: GB, open: 1000000, label: 'What the goal will take', onValue: function (v) { d.gAmt = v; refresh(); } });
      var y = +TODAY.slice(0, 4);
      yearSlider(c.querySelector('[data-ry]'), { v: d.gYear || null, min: y + 1, max: y + 51, open: y + 11, label: 'The year of the goal', onValue: function (v) { d.gYear = v; refresh(); } });
    },
    ok: function () { var d = D(); return !!d.goal && (d.goal !== 'else' || !!String(d.goalText || '').trim()) && d.gAmt > 0 && !!d.gYear; },
    need: function () { var d = D(); return !d.goal ? 'Tap one goal.' : d.goal === 'else' && !String(d.goalText || '').trim() ? 'Name it in a few words.' : !(d.gAmt > 0) ? 'Set roughly what it will take.' : 'Drag to the year you want it by.'; } });
  function goalLines() { return S().assets.filter(function (a) { return A.isInvestable(a); }); }
  step({ id: 'goal-2', stage: 6, mode: 'side', at: '/policy/planning', spot: { sel: ['#view .gx-plot', '#view .collection-state', '#view .panel'] },
    eb: 'Governance · Wealth planning',
    title: function () { return 'How much does it matter?'; },
    line: function () { return e(goalName()) + ', ' + A.short(D().gAmt) + ' by ' + D().gYear + '. Its priority decides what comes first if money runs short.'; },
    body: function () {
      var d = D(), ls = goalLines();
      return opts('prio', PRIO.map(function (p) { return [p[0], p[1], p[2]]; }), d.prio, 'is-grid3') +
        (ls.length ? '<p class="tq-l">Which accounts will pay for it?</p><div class="tq-checks">' + ls.map(function (a) {
          return '<label class="choice"><input type="checkbox" data-ln="' + a.id + '"' + ((d.linked || []).indexOf(a.id) > -1 ? ' checked' : '') + '><span class="choice-body">' + e(a.name) + '<span class="choice-note">' + M(A.amount(a.id)) + '</span></span></label>'; }).join('') + '</div>' : '') +
        '<div class="tq-q"><p class="tq-l">Set aside for it each month <span class="opt">(optional)</span></p><div data-rm></div></div>';
    },
    wire: function (c) {
      var d = D();
      pickIn(c, '[data-prio]', function (b) { d.prio = b.getAttribute('data-prio'); refresh(); });
      c.addEventListener('change', function (ev) { var t = ev.target; if (!t.hasAttribute('data-ln')) return; var l = d.linked = d.linked || [], i = l.indexOf(t.getAttribute('data-ln')); if (t.checked && i < 0) l.push(t.getAttribute('data-ln')); if (!t.checked && i > -1) l.splice(i, 1); });
      ruler(c.querySelector('[data-rm]'), { v: d.gMonthly || null, bands: SB, open: 5000, label: 'Set aside for it each month', onValue: function (v) { d.gMonthly = v; } });
    },
    ok: function () { return !!D().prio; },
    need: function () { return 'Tap Need, Want or Wish.'; },
    key: 'Add the goal',
    go: function () {
      var d = D(), s = S(), g = !d.goalNew && s.goals.filter(function (x) { return x.id === d.ids.goal; })[0];
      if (!g) { g = { id: A.uid('g'), source: 'Written in the tutorial' }; s.goals.push(g); d.ids.goal = g.id; A.log('Added goal ' + goalName()); }
      d.goalNew = false;
      g.name = goalName(); g.amount = d.gAmt; g.date = d.gYear + '-06-30'; g.priority = d.prio; g.linked = (d.linked || []).slice(); g.monthly = d.gMonthly || 0;
      (d.goalSnaps = d.goalSnaps || {})[g.id] = goalSnap();
      A.save(); API.render(); return true;
    } });
  function theGoal() { return S().goals.filter(function (x) { return x.id === D().ids.goal; })[0]; }
  function goalsRow(g) { var gs = tutGoals(); if (gs.length < 2) return g ? ['Goal', e(g.name) + ' · ' + A.short(g.amount)] : null; return ['Goals', gs.map(function (x) { return e(x.name) + ' · ' + A.short(x.amount); }).join('<br>')]; }
  step({ id: 'plan-see', stage: 6, mode: 'coach', at: '/policy/planning', when: function () { return !!theGoal(); },
    spot: { sel: ['#view .gx-plot', '#view .panel', '#view .page-head'] },
    eb: 'Governance · Wealth planning',
    title: function () { return tutGoals().length > 1 ? 'Your goals, on the map.' : 'Your goal, on the map.'; },
    line: function () { var g = theGoal(), pr = A.goalProgress(g); return 'The amount up, the year across. Linked accounts count as progress' + (tutGoals().length > 1 ? ', for ' + e(g.name) + ': ' : ': ') + M(pr.have) + ' of ' + M(g.amount) + ' today, before any growth.'; } });
  step({ id: 'goal-more', stage: 6, mode: 'coach', at: '/policy/planning', when: function () { return !!theGoal(); },
    spot: { sel: ['#view .gx-plot', '#view .panel', '#view .page-head'] },
    eb: 'Governance · Wealth planning',
    title: function () { return 'Is there another goal?'; },
    line: function () { var n = tutGoals().length; return (n > 1 ? cap(words(n)) + ' goals are' : 'One goal is') + ' on the map. Add another the same way now, or later, whenever you like.'; },
    alt: { label: 'Add another goal', go: function () { var d = D(); d.goalNew = true; goalLoad(null); A.save(); return 'goal'; } },
    key: 'Not now' });
  quest({ id: 'plan-q', spot: { sel: ['#view .gx-plot'] }, stage: 6, pid: 'fo-plan', n: 1, at: '/policy/planning', when: function () { return !!theGoal(); },
    q: function () { return 'Every goal you set carries three things. Which three?'; },
    o: function () { return ['An amount, a date and a priority', 'An amount, a fund and an adviser', 'A date, a return and a risk score', 'A name, a fee and a tax rate']; },
    show: [1, 2, 0, 3], hint: 'Think of the goal you just added.',
    why: function () { var g = theGoal(); return 'An amount, a date and a priority: yours is ' + A.short(g.amount) + ' by ' + g.date.slice(0, 4) + ', a ' + g.priority + '. The priority decides what comes first if money runs short.'; } });
  stageDone(6, function () { return 'Your first goal is on the map.'; }, function () {
    var g = theGoal(); return g ? [['Goal', e(g.name)], ['Amount', M(g.amount)], ['By', g.date.slice(0, 4)], ['Priority', e(g.priority)], ['Earned', T().xp + ' XP']] : [];
  });

  /* ── STAGE 7 · SUCCESSION ──────────────────────────────────────────────────────────────── */
  tap({ id: 't-succ', stage: 7, sel: navSel('succession'), route: '/succession',
    eb: 'Succession',
    title: function () { return 'Open Succession.'; },
    line: function () { return inBar('Succession') + ' The desk for the will, the people and what passes on.'; } });
  step({ id: 'will', stage: 7, mode: 'side', at: '/succession', spot: { sel: ['#view .scene.brief', '#view .page-head'], piece: function (el) { return [el.querySelector('.sc-words') || el]; } },
    eb: 'Succession · The will',
    title: function () { return couple() ? 'Is there a will?' : 'Do you have a will?'; },
    line: function () { return 'Just where things stand. Who it names can come later, with your lawyer.'; },
    body: function () {
      var d = D();
      return opts('will', [['yes', 'Yes'], ['no', 'No'], ['unsure', 'Not sure']], d.will, 'is-grid3') +
        '<div data-yes' + (d.will === 'yes' ? '' : ' hidden') + '>' + field('tq-where', 'Where is the signed original?', d.willWhere, '', ' type="text" autocomplete="off" maxlength="80" placeholder="A lawyer’s office, a safe at home …"') +
        field('tq-signed', 'When was it signed?', d.willSigned, 'optional', ' type="date" max="' + TODAY + '"') + '</div>';
    },
    wire: function (c) {
      var d = D();
      pickIn(c, '[data-will]', function (b) { d.will = b.getAttribute('data-will'); c.querySelector('[data-yes]').hidden = d.will !== 'yes'; refresh(); });
      onInput(c, '#tq-where', function (v) { d.willWhere = v; refresh(); });
      var sg = c.querySelector('#tq-signed'); sg.addEventListener('change', function () { d.willSigned = sg.value; });
    },
    ok: function () { var d = D(); return d.will === 'no' || d.will === 'unsure' || (d.will === 'yes' && !!String(d.willWhere || '').trim()); },
    need: function () { return D().will === 'yes' ? 'Write where the signed original is.' : 'Tap one.'; },
    go: function () {
      var d = D(), w = S().will;
      w.exists = d.will === 'yes' ? 'Yes' : d.will === 'no' ? 'No' : '';
      w.original = d.will === 'yes' ? String(d.willWhere).trim() : ''; w.signed = d.will === 'yes' ? d.willSigned || '' : ''; w.reviewed = w.signed;
      if (d.will === 'unsure') fwSet('will');
      A.log('Updated the will record'); A.save(); API.render(); return true;
    } });
  step({ id: 'will-see', stage: 7, mode: 'coach', at: '/succession',
    spot: { sel: ['#view .scene.brief', '#view .page-head'], piece: function (el) { return [el.querySelector('.sc-words') || el]; } },
    eb: 'Succession desk',
    title: function () { return 'The papers and the people, together.'; },
    line: function () { var w = S().will; return w.exists === 'Yes' ? 'Where the original is: ' + e(w.original) + '. After a death it’s the first thing someone needs to find, and now it’s written down.' : w.exists === 'No' ? 'No will is recorded. It’s named here, while it’s still a gap.' : 'Not sure is an answer too: it stays here as a question until you know.'; } });
  quest({ id: 'will-q', spot: { sel: ['#view .scene.brief'], piece: function (el) { return [el.querySelector('.sc-words') || el]; } }, stage: 7, pid: 'fo-will', n: 1, at: '/succession',
    q: function () { return 'What is a will’s main job?'; },
    o: function () { return ['It says who receives what you own, and who carries that out', 'It lists what you own today, with each value and its date', 'It moves your property to your children while you’re alive', 'It replaces the beneficiaries named on your accounts']; },
    show: [1, 0, 2, 3], hint: 'Think about what happens after, not before.',
    why: function () { return 'A will says who receives what you own and who carries it out. The beneficiaries on accounts and policies sit apart from it, which is why Succession lists both.'; } });
  stageDone(7, function () { return 'Succession has its first page.'; }, function () {
    var w = S().will; return [['The will', w.exists === 'Yes' ? 'Recorded, with where the original is' : w.exists === 'No' ? 'None, named as a gap' : 'Not sure yet'], ['Earned', T().xp + ' XP']];
  });

  /* ── STAGE 8 · YOUR OFFICE, TOGETHER ───────────────────────────────────────────────────── */
  step({ id: 'invite', stage: 8, mode: 'side', at: '/profile/members', spot: { sel: ['#view .panel', '#view .page-head'] }, when: function () { return couple() && S().members.length < 2; },
    eb: 'Profile · Household members',
    title: function () { return 'Invite ' + e(partner().name.split(' ')[0]) + '?'; },
    line: function () { return 'The free office is for two adults and one shared record. ' + e(partner().name.split(' ')[0]) + ' gets a login of their own and sees everything you’ve added.'; },
    body: function () { return field('tq-pemail', e(partner().name.split(' ')[0]) + '’s email', D().pEmail, '', ' type="email" inputmode="email" autocomplete="off" maxlength="80"') + '<p class="tq-quiet">In this preview nothing is sent.</p>'; },
    wire: function (c) { onInput(c, '#tq-pemail', function (v) { D().pEmail = v.trim(); refresh(); }); enterGo(c); },
    ok: function () { return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(D().pEmail || ''); },
    key: 'Send the invitation', skip: 'Not now',
    go: function () {
      var p = partner(), id = A.uid('m');
      S().members.push({ id: id, name: p.name, role: 'partner', email: D().pEmail, joined: TODAY }); p.member = id;
      A.log('Invited ' + p.name.split(' ')[0]); A.save(); API.render(); return true;
    } });
  tap({ id: 't-learn2', stage: 8, sel: navSel('learn'), route: '/learn',
    eb: 'Learn',
    title: function () { return 'Open Learn.'; },
    line: function () { return inBar('Learn') + ' Everything you answered on the way is there.'; } });
  step({ id: 'learn-see', stage: 8, mode: 'coach', at: '/learn',
    spot: { sel: ['#view .lm-stand', '#view .panel', '#view .page-head'] },
    eb: 'Learn',
    title: function () { return 'Learn, one question at a time.'; },
    line: function () { var n = Object.keys(D().q).filter(function (k) { return D().q[k].done; }).length + (D().orderDone ? 1 : 0); return 'You answered ' + words(n) + ' quests on the way and earned ' + T().xp + ' XP. Each desk has its own paths, and the Map grows as you go.'; } });
  tap({ id: 't-home2', stage: 8, sel: navSel('home'), route: '/home',
    eb: 'Office',
    title: function () { return 'Back to Office.'; },
    line: function () { return inBar('Office') + ' The whole office, filled in.'; } });
  step({ id: 'desks-see', stage: 8, mode: 'coach', at: '/home',
    spot: { sel: ['#view .home-desks'], piece: function (el) { var c = [].slice.call(el.querySelectorAll('.hm-grid > *')), t = c.length ? c[0].getBoundingClientRect().top : 0; return [el.querySelector('.section-h')].concat(c.filter(function (x) { return Math.abs(x.getBoundingClientRect().top - t) < 1; })); } },
    eb: 'Office · Your family office',
    title: function () { return 'Five desks and Learn, one card each.'; },
    line: function () { return 'Every desk is open now, and each card shows where things stand, from what you entered today. My summary above them says what matters most.'; } });
  saveStep('save-end', 8, function () { return !S().members[0].email; }, function () { return 'Before you go, keep it in your name.'; },
    function () { return 'Everything you’ve added is in this browser. Add your email so it’s yours, on any device.'; });
  step({ id: 'end', stage: 8, done: true, mode: 'modal', at: '/home', noRevisit: true,
    title: function () { return 'That’s the tutorial, ' + e(first()) + '.'; },
    line: function () { return 'Every desk is open and has something in it, and I know you a little. What you entered is rough, and that’s fine: a statement makes any figure exact. The rest comes with time: the more we work together, the more my rings fill.'; },
    body: function () {
      var t = A.totals(), p = A.policy(), g = theGoal(), lp = A.nextPath();
      return sumHTML([['Net worth', M(t.net)], ['Insurance', S().cover.length ? cap(words(S().cover.length)) + (S().cover.length === 1 ? ' policy' : ' policies') : 'None yet'],
        p ? ['Your rules', 'Version 1, from today'] : null, goalsRow(g), D().id ? ['Financial Identity', e(D().id.title)] : null, ['Earned', A.learnXP() + ' XP'], ['Freya knows you', A.freyaGrowth().pct + ' of 100, and growing']]) +
        (lp ? '<p class="tq-quiet">Next in Learn: <b>' + e(lp.title) + '</b>, about ' + lp.minutes + ' minutes.</p>' : '') +
        '<p class="tq-quiet"><button type="button" class="link" data-tq="restart">Start the tutorial over</button> (this preview only: it clears everything here)</p>';
    },
    key: 'Go to my office',
    go: function () { finish(); return false; } });


  /* ══ ONE DESK AT A TIME (3 Oct 2026) ═══════════════════════════════════════════════════
     Christian, after the deep user test: "the tutorial takes the user through each desk one at a time
     mixing with a few learn quests to show that learning the features is through the Learn part …
     show the unlocked desk in a way so that you can see they are there but lock until you have done
     the tutorial … include Freya … that she gets better at understanding you and your needs."
     The order: Records, Investment, Policy, Protection, Succession. Each desk ends the same way:
       · Freya, what I know now: her rings grow (A.freyaGrowth) and she says what she can do now;
       · a question for her, answered from the record (Records, Investment, Policy, Protection);
       · Learn: the user opens Learn and takes a short quest on its own page, written on their own
         record (FT.quest); passing it opens the next desk, with a short ceremony in the desk blue.
     The first desk's quests are The First Picture, two of them and the first badge; it also opens the
     desks' paths on the Map. Before them, Learn starts with the household itself: Freya's first answer says a
     household's rules start with its Financial Identity, and the four answers that draw it are asked on Learn's
     Map, right after Records (Christian, 4 Oct 2026: "about them and not the system"). The Investment desk then
     ends with Freya's map, how she grows over months, and only then the email: "shortly after an aha moment". The steps defined above are put in this order by PLAN below; the old
     quests inside the card (cash-q, debt-q, …) stay defined only as the household's own wording of those
     quests on Learn. */
  var NEXT = { 1: 'investment', 2: 'policy', 3: 'protection', 4: 'succession' };
  function deskN(k) { return A.DESKS[k].noun; }
  function fgNow() { return A.freyaGrowth(); }
  function fgSeen() { return T().fgSeen || null; }
  function fgKeep() { var g = fgNow(); T().fgSeen = { pct: g.pct, you: { pct: g.you.pct }, strands: g.strands.map(function (x) { return { k: x.k, pct: x.pct }; }) }; A.save(); }
  /* FREYA, WHAT I KNOW NOW: her rings, played from the last time she said so */
  var FY_SAY = {
    /* she is learning, never done (Christian, 4 Oct 2026: "at this stage she is starting to understand") */
    records: ['I’m starting to understand your household.', 'Ask me something'],
    investment: ['I’m beginning to see what your money is doing.', 'See how I grow'],
    policy: ['I’m learning your rules, and what you want.', 'Ask me about them'],
    protection: ['I’m learning what protects you.', 'Ask me about it'],
    succession: ['I’m learning what you will pass on.', 'Continue']
  };
  function fyStep(id, k) {
    step({ id: id, stage: 0, mode: 'modal', noRevisit: true, noBack: true, cls: 'is-fg',
      eb: function () { return 'Freya · what I know now'; },
      title: function () { return FY_SAY[k][0]; },
      line: function () {
        var x = fgNow().strands.filter(function (s) { return s.k === k; })[0];
        return x.can ? e(x.can) : 'I’m only starting to understand this one. A little more in the record and I can help here.';
      },
      /* the promise, the first time she says what she knows: set apart in the desk blue so it is read (Christian, 4 Oct 2026:
         "make it very clear … we need to make sure that they read and see this and understand") */
      after: function () { return k === 'records' ? '<p class="tq-more">' + A.ic('trend', 'tq-more-ic') + '<span>The more we do together, the more I can do.</span></p>' : ''; },
      body: function () {
        var g = fgNow(), x = g.strands.filter(function (s) { return s.k === k; })[0], facts = x.facts.filter(function (f) { return f[1]; }).slice(0, 4),
          gaps = x.facts.filter(function (f) { return !f[1]; }).slice(0, 3).map(function (f) { return f[0].toLowerCase(); });
        return '<div class="tq-fg">' + API.V.fgRings(g, 132, { from: fgSeen(), hot: k }) +
          '<div class="tq-fg-t"><p class="tq-fg-k"><b>' + e(x.t) + '</b><span>' + e(x.name) + ' · ' + x.pct + ' of 100</span></p>' +
          (facts.length ? '<ul class="tq-fg-l">' + facts.map(function (f) { return '<li>' + CHECK + '<span><b>' + e(f[0]) + '</b>' + (f[2] ? ' · ' + e(f[2]) : '') + '</span></li>'; }).join('') + '</ul>' : '') +
          (gaps.length ? '<p class="tq-fg-gap">Still to learn: ' + e(list(gaps)) + '.</p>' : '') +
          '<p class="tq-fg-you"><b>How you decide · ' + e(g.you.name.toLowerCase()) + '.</b> That inner ring I learn only from time together, so it grows over months, not minutes.</p></div></div>';
      },
      enter: function () { emit('freya', { desk: k }); },
      wire: function () { requestAnimationFrame(function () { API.V.fgPlay(card); }); },
      key: function () { return FY_SAY[k][1]; },
      go: function () { fgKeep(); return true; } });
  }
  /* A QUESTION FOR HER, written into her bar; one tap sends it, and she answers from the record */
  function askSteps(id, at, q) {
    step({ id: id, stage: 0, mode: 'free', at: at, noBack: true,
      spot: { sel: ['#fy-bar'] },
      enter: function () {
        if (API.fy().open) API.ACT['fy-close']();
        L.fyN = userN();
        var i = API.inputEl(); if (i) { i.value = q(); API.sendState(); }
      },
      eb: 'Ask Freya',
      title: function () { return 'I’ve written a question for you.'; },
      line: function () { return 'It’s in my bar below. Press the arrow to send it, and watch what I know turn into an answer.'; },
      key: null, skip: 'Skip it', onSkip: function () { var i = API.inputEl(); if (i && i.value === q()) { i.value = ''; API.sendState(); } },
      watch: function () {
        var F = API.fy();
        if (userN() > L.fyN && !F.busy) { var last = F.thread[F.thread.length - 1]; if (last && last.role === 'assistant' && last.content) return id + '-read'; }
        return null;
      } });
    step({ id: id + '-read', stage: 0, mode: 'free', noBack: true, noRevisit: true,
      spot: { sel: ['#fy-panel'] },
      eb: 'Ask Freya',
      title: function () { return 'From your record, with its sources.'; },
      line: function () { return 'My rings sit at the top of this panel. Tap them any time to see what I know, and what would help me know you better.'; },
      key: 'Continue',
      go: function () { if (API.fy().open) API.ACT['fy-close'](); return true; } });
  }
  /* LEARN OPENS THE NEXT DESK: the user opens Learn, then takes the quest on its own page */
  function learnSteps(n, quests) {
    var nk = NEXT[n];
    tap({ id: 'lq-go-' + n, stage: 0, sel: navSel('learn'), route: '/learn',
      eb: 'Learn',
      title: function () { return nk ? 'Now Learn opens ' + deskN(nk) + '.' : 'One last quest, on Learn.'; },
      line: function () { return (n === 1 ? 'This is how your office opens: a short quest about what you just did, on Learn. ' : nk ? deskN(nk) + ' opens when you pass ' + (quests.length > 1 ? words(quests.length) + ' short quests. ' : 'one short quest. ') : 'It finishes the tutorial and opens Freya’s map. ') + inBar('Learn'); } });
    BY['lq-go-' + n].learn = true;   /* Learn's steps wear Learn's green */
    if (n === 1) step({ id: 'lq-see-1', stage: 0, mode: 'coach', at: '/learn', noBack: true, noRevisit: true, learn: true,
      spot: { sel: ['#view .lm-stand', '#view .panel', '#view .page-head'] },
      eb: 'Learn',
      title: function () { return 'Now your first badge.'; },
      line: function () { return 'Every desk has its paths here, and they grow on your Map. The First Picture is two quests on your own figures, about four minutes. Pass it and Investment opens.'; },
      key: 'Start the quest' });
    quests.forEach(function (qq, i) {
      var pid = qq[0], qn = qq[1], last = i === quests.length - 1, id = 'lq-' + n + (quests.length > 1 ? 'abc'.charAt(i) : '');
      var qat = '/learn/path/' + pid + '/quest/' + qn;
      step({ id: id, stage: 0, mode: 'free', slim: true, learn: true, at: qat, noBack: true, noRevisit: true, pid: pid, qn: qn,
        /* answered, the page's own key carries the tutorial on (FT.afterKey): the card steps aside while it is there
           (Christian, 4 Oct 2026: "not show the tutorial bar with the CTA as long as there is a CTA relating to the tutorial") */
        quiet: function () { return L.lqDone && L.lqId === id && here(qat); },
        spot: { sel: ['#view .quest [data-feedback] > .stack', '#view .quest', '#view .page-head'] },   /* once answered, the why and the page's keys */
        /* once answered, the card says so and waits: the why on the page is theirs to read */
        enter: function () { if (L.lqId !== id) { L.lqId = id; L.lqDone = false; L.lqWas = A.learnPath(pid).answered.indexOf(qn) > -1; } },
        eb: function () { var P = A.LM.PATHS[pid]; return 'Learn · ' + e(P ? P.t : '') + (quests.length > 1 ? ' · ' + (i + 1) + ' of ' + quests.length : ''); },
        title: function () {
          /* "Succession opens" read as Succession's Learn opening while the page was still Protection's path
             (Christian, 4 Oct 2026), so the desk is named as the next step, not as something already open */
          if (L.lqDone) return last ? (nk ? 'Passed. Next: the ' + deskN(nk) + ' desk.' : 'Passed. Your whole office opens.') : n === 1 ? 'Passed. One more for your first badge.' : 'Passed. One more, then the ' + deskN(nk) + ' desk.';
          return quests.length > 1 && i ? (n === 1 ? 'And one more, for your first badge.' : 'And one more.') : 'Your quest: answer it on the page.';
        },
        line: function () {
          if (L.lqDone) return here(qat) ? 'Read why on the page, then carry on.' : 'Your answer is kept, and any other quest you do on Learn counts too.';
          return last ? (nk ? 'Pass it and ' + deskN(nk) + ' opens. Getting it wrong costs nothing.' : 'Pass it and your whole office is open.') :
            n === 1 ? 'Getting it wrong costs nothing, and the i after the question says it in plain words. Two quests make The First Picture.' : 'Two plain questions, and ' + deskN(nk) + ' opens. Getting it wrong costs nothing.';
        },
        key: function () { return L.lqDone ? (last ? (nk ? 'On to ' + deskN(nk) : 'Continue') : 'Next quest') : null; },
        goLabel: last && nk ? 'On to ' + deskN(nk) : null,
        skip: function () { return L.lqDone ? null : 'Take me past it'; },
        onSkip: function () { L.lqId = null; if (A.learnPath(pid).answered.indexOf(qn) < 0) { var r = A.learnAnswer(pid, qn); if (r && r.first) xp(40); } },
        go: function () { L.lqId = null; return true; },
        watch: function () {
          if (L.lqDone) { var nx = nextOf(id); if (nx && nx.at && here(nx.at)) { L.lqId = null; return nx.id; } if (L.hush && !here(qat)) draw(); return null; }   /* the page's own Next quest; left the page: the card comes back */
          if (L.lqWas ? !document.querySelector('#view .quest .answer.correct') : A.learnPath(pid).answered.indexOf(qn) < 0) return null;
          if (document.querySelector('.lm-veil')) return null;   /* a ring closing: Carry on first */
          L.lqDone = true; T().lqPassed = id; A.save(); draw(); return null;
        } });
    });
  }
  /* A DESK OPENS: a short ceremony in the desk blue, then the user opens it from the bar */
  function openStep(n, sum) {
    var k = NEXT[n];
    step({ id: 'open-' + (n + 1), stage: 0, done: true, mode: 'modal', noRevisit: true, noBack: true, cls: 'is-open',
      enter: function () { if (A.openDesk(k, true)) { A.log('The ' + deskN(k) + ' desk opened, with a quest on Learn'); A.save(); } emit('stage', { done: n, opened: k }); API.render(); },
      eb: function () { return deskN(A.DESK_ORDER[n - 1]) + ' is done'; },
      title: function () { return deskN(k) + ' is open.'; },
      line: function () { return e(A.DESKS[k].lede) + ' Your quest on Learn opened it.'; },
      big: function () { return '<div class="tq-open">' + A.sectionIcon(A.DESKS[k].icon) + '</div>'; },
      body: function () { return sumHTML(sum()) + mapHTML(n + 1); },
      key: function () { return 'Open ' + deskN(k); }, later: true });
  }

  /* RECORDS */
  fyStep('fy-1', 'records');
  learnSteps(1, [['first-picture', 1], ['first-picture', 2]]);
  BY['lq-go-1'].title = function () { return 'Learn starts with you.'; };
  BY['lq-go-1'].line = function () { return 'Tap Learn. First your Financial Identity, who you are with money, in four answers. Then two short quests open Investment.'; };
  openStep(1, function () {
    var t = A.totals(), p = S().people.length;
    return [['Net worth', M(t.net)], ['In Records', cap(words(S().assets.length + S().liabilities.length)) + (S().assets.length + S().liabilities.length === 1 ? ' line' : ' lines')],
      p > 1 ? ['In Family', cap(words(p)) + ' people'] : null, D().id ? ['Financial Identity', e(D().id.title)] : null,
      A.learnPath('first-picture').state === 'done' ? ['Your first badge', 'The First Picture'] : null];
  });
  /* INVESTMENT */
  tap({ id: 't-inv', stage: 0, sel: navSel('investment'), route: '/investment',
    eb: 'Investment',
    title: function () { return 'Open Investment.'; },
    line: function () { return inBar('Investment') + ' Its lock is gone.'; } });
  step({ id: 'i-brief', stage: 0, mode: 'coach', at: '/investment', spot: BRIEF,
    eb: 'Investment desk',
    title: function () { return 'Every desk opens with my summary.'; },
    line: function () { return 'Here it will say what you hold, how it’s spread, and where you stand against your own rules. First, what you invest in.'; } });
  fyStep('fy-2', 'investment');
  askSteps('ask-2', '/investment', function () { return couple() ? 'What do we hold, and how is it spread?' : 'What do I hold, and how is it spread?'; });   /* not played: the Investment desk moves on to Freya's map (4 Oct 2026; fees come with linked accounts) */
  learnSteps(2, [['ia-start', 1], ['ia-start', 2]]);   /* two plain quests first (Christian, 3 Oct 2026: "simple questions and then open"); the Foundation, with the Mix lab, comes later */
  openStep(2, function () {
    var inv = A.investable(), n = S().assets.filter(A.isInvestable).length;
    return [['Invested', M(inv.total)], ['Accounts', cap(words(n))]];
  });
  /* POLICY */
  fyStep('fy-3', 'policy');
  askSteps('ask-3', '/policy', function () { return couple() ? 'What do our rules say?' : 'What do my rules say?'; });
  learnSteps(3, [['fo-rules', 3]]);
  openStep(3, function () {
    var p = A.policy(), g = theGoal();
    return [D().id ? ['Financial Identity', e(D().id.title)] : null, p ? ['Your rules', 'Version 1, from today'] : null, goalsRow(g)];
  });
  /* PROTECTION */
  fyStep('fy-4', 'protection');
  askSteps('ask-4', '/protection', function () { return couple() ? 'What cover is in our record?' : 'What cover is in my record?'; });
  learnSteps(4, [['fo-cover', 1]]);
  openStep(4, function () { var c = S().cover.length; return [['Insurance', c ? cap(words(c)) + (c === 1 ? ' policy' : ' policies') : 'None yet'], ['In the Vault', S().documents.length ? cap(words(S().documents.length)) + ' files' : 'Nothing yet']]; });
  /* SUCCESSION, then the whole office and Freya's map */
  fyStep('fy-5', 'succession');
  learnSteps(5, [['fo-will', 1]]);
  step({ id: 'all-open', stage: 0, mode: 'modal', noRevisit: true, noBack: true,
    enter: function () { A.DESK_ORDER.forEach(function (k) { A.openDesk(k, true); }); emit('stage', { done: 5, opened: 'all' }); API.render(); }, cls: 'is-fg',
    eb: 'Every desk is open',
    title: function () { return 'Your whole office is open, ' + e(first()) + '.'; },
    line: function () { return 'Five desks, each with your own figures in it, and a quest from each on your Map. My rings grew with every desk; my map in Freya shows what each one lets me do.'; },
    body: function () { return '<div class="tq-fg is-row">' + API.V.fgRings(fgNow(), 96, { from: fgSeen() }) + '<p class="tq-quiet">Five strands, one for each desk, and the inner ring: how you decide. That one is the long journey.</p></div>'; },
    wire: function () { requestAnimationFrame(function () { API.V.fgPlay(card); }); },
    key: 'Continue', go: function () { fgKeep(); return true; } });
  step({ id: 'fmap', stage: 0, mode: 'coach', at: '/freya/map', spot: { sel: ['#view .fg-stand'] },
    eb: 'Freya · My map',
    title: function () { return 'This is how well I know you, so far.'; },
    line: function () { var g = fgNow(); return 'Today, ' + g.pct + ' of 100: never a score of you, only how much I can help. Five strands are your desks; the inner ring is how you decide. One at a time:'; } });
  /* EVERY STRAND, IN SHORT (Christian, 4 Oct 2026: the map "only explain How you decide, it should take the user in
     short through all the overall areas and explain in very short what and why"): what I learn there, and what it
     lets me do for you */
  [['records', 'Your household record', 'What you own and owe, each figure with where it came from. The fuller it is, the more exactly I can answer.'],
   ['investment', 'Your money at work', 'What you hold and how it’s spread. With it I can explain a drift the day it happens, and what moved it.'],
   ['policy', 'Your rules and goals', 'The rules you write and the goals you set. With them I can check today against what you decided.'],
   ['protection', 'What protects you', 'Your cover, policy by policy. With it I can name a gap before it’s a claim, and remind you before each renewal.'],
   ['succession', 'What you pass on', 'The will, the people and the papers. With them I keep what your family would need in one place.']].forEach(function (x) {
    step({ id: 'fmap-' + x[0], stage: 0, mode: 'coach', at: '/freya/map', spot: { sel: ['#view .fg-card.fg-' + x[0]] },
      eb: 'Freya · My map',
      title: function () { return x[1] + '.'; },
      line: function () { return x[2] + (A.deskOpen && !A.deskOpen(x[0]) ? ' It starts when that desk opens.' : ''); } });
  });
  step({ id: 'fmap-you', stage: 0, mode: 'coach', at: '/freya/map', spot: { sel: ['#view .fg-you'] },
    eb: 'Freya · My map',
    title: function () { return 'How you decide: this one takes months.'; },
    line: function () { return 'The questions you ask, the days you come back, the choices you write down. With it I lay out each choice the way you weigh it. However fast the rest goes, it grows a little each month.'; } });


  /* ══ THE CONCEPT · THE TUTORIAL IN FIVE STAGES (11 Oct 2026, prompts 16–23) ═════════════════════════════
     Christian, 14 Oct 2026: build the concept here, from the Concept Prompts. Five stages, one desk each, in
     DESK_ORDER, and every stage runs the same six steps: Ask (the desk's questions, one to a screen), Payoff (the
     desk's own figure, in its picture), Show (two or three pointers on the real page, one line each), Lesson (the
     desk's film and one or two quests, in Learn's green), Open ("{Next desk} is open.", with Open {Next desk} and,
     under it, Look around first) and Explore (the tutorial steps aside; the Continue pill picks it up). A desk opens
     when its stage starts: from the Open card, the pill, Office's brief or Open now. Every card is short: a title of
     eight words at most and a line of fifteen; the rest is one tap away, behind its "i" (prompt 17). */
  function stageOf(k) { for (var i = 1; i <= NS; i++) if (STAGES[i].k === k) return i; return 0; }
  function nextClosed() { return A.DESK_ORDER.filter(function (k) { return !A.deskOpen(k); })[0] || ''; }
  function startStage(n) {
    var k = STAGES[n] && STAGES[n].k; if (!k) return;
    T().pillOff = false; T().paused = false;
    if (!A.deskOpen(k)) { A.openDesk(k, true); A.log('The ' + deskN(k) + ' desk opened'); emit('stage', { opened: k }); }
    A.save();
    var s0 = firstOf(n); if (s0) go(s0.id); else advance();
  }
  /* Look around first (Tomorrow on day one): the tutorial steps aside on the next desk's first step; the pill waits */
  function lookAround(home) {
    var k = nextClosed(), s0 = k && firstOf(stageOf(k));
    if (s0) T().step = s0.id;
    pause();
    if (home && location.hash !== '#/home') location.hash = '#/home';
  }
  /* the five desks' plates in a row: this one lit, the open ones filled, the rest waiting */
  function platesHTML(lit) {
    return '<div class="tq-plates" role="img" aria-label="' + e(A.desksOpenCount() + ' of 5 desks open') + '">' + A.DESK_ORDER.map(function (k) {
      return '<span class="tq-plate' + (k === lit ? ' is-lit' : A.deskOpen(k) ? ' is-on' : '') + '">' + A.sectionIcon(A.DESKS[k].icon) + '</span>';
    }).join('') + '</div>';
  }
  /* a Learn film as a card, which plays in place */
  function filmCard(place) { return API.V && API.V.lvFor ? '<div class="tq-film">' + API.V.lvFor(place, 'mini', 'Film') + '</div>' : ''; }
  function sayHTML(t) { return '<p class="tq-say">' + A.fyMark('ready') + '<span>' + t + '</span></p>'; }
  function chipHTML(t, learn) { return '<p class="tq-flag' + (learn ? ' is-learn' : '') + '">' + CHECK + '<span>' + t + '</span></p>'; }
  function picLayout(c) {
    requestAnimationFrame(function () {
      (c || card).querySelectorAll('[data-wp]').forEach(function (b) { API.V.wpLayout(b); });
      (c || card).querySelectorAll('[data-mt]').forEach(function (b) { API.V.mtLayout(b); });
      (c || card).querySelectorAll('[data-tvp]').forEach(function (b) { API.V.tvPlain(b, false); });
    });
  }
  /* an Ask step: one question to a screen, the desk's name and "2 of 4" at the top, the why behind its "i" */
  function ask(id, at, spot, title, line, info) {
    var s = BY[id]; if (!s) throw new Error('The tutorial has no step ' + id);
    s.at = at; s.spot = spot; s.title = title; s.line = line; s.info = info; s.grp = 'ask'; s.say = true; s.stack = true; s.eb = null; s.learn = false;
    s.skip = s.skip || 'Skip for now'; s.cls = 'is-desk';
  }
  /* a pointer on the real page: the stage, one line, its "i", "1 of 2" and Next. When the part is the key to press,
     Skip for now takes Next's place */
  function point(o) {
    step({ id: o.id, stage: o.stage, mode: o.tap ? 'tap' : 'coach', at: o.at, when: o.when, noBack: true, noRevisit: true, point: true, grp: 'show', cls: 'is-desk',
      spot: { sel: o.sel }, title: o.title, info: o.info, key: o.tap ? null : 'Next', skip: o.tap ? 'Skip for now' : null, onSkip: o.onSkip, intercept: o.intercept,
      until: o.route ? function () { var h = location.hash.replace(/^#/, ''); return h === o.route || h.indexOf(o.route + '/') === 0; } : o.until });
  }
  /* the payoff: the desk's own figure, in its picture */
  function payoff(o) {
    step({ id: o.id, stage: o.stage, mode: 'side', at: o.at, noBack: true, noRevisit: true, bare: true, stack: true, cls: 'is-desk is-pay',
      before: function () { return chipHTML(o.chip); }, eb: o.eb, title: o.title, info: o.info,
      body: function () { return o.pic() + sayHTML(o.say); },
      wire: function (c) { picLayout(c); }, key: 'Continue', later: true });
  }
  /* the lesson on Learn: the desk's film as a card, then its quests on their own page, where the page's own key
     carries the tutorial on (app.js lxAfter, FT.afterKey) and this card steps aside */
  var LESSON = {};
  function lesson(n, title, film, quests) {
    LESSON[n] = quests;
    step({ id: 'les-' + n + '-in', stage: n, mode: 'side', at: '/learn', noBack: true, noRevisit: true, learn: true, stack: true, bare: true,
      eb: 'Learn · a lesson', title: function () { return e(title); },
      line: function () { return quests.length > 1 ? 'A short film, then ' + words(quests.length) + ' questions.' : 'A short film, then one question.'; },
      info: 'Getting a question wrong costs nothing. Every answer earns XP once, and the film is never forced.',
      body: function () { return filmCard(film); }, key: 'Start the lesson', later: true });
    quests.forEach(function (qq, i) {
      var pid = qq[0], qn = qq[1], id = 'les-' + n + 'abc'.charAt(i), qat = '/learn/path/' + pid + '/quest/' + qn, last = i === quests.length - 1;
      step({ id: id, stage: n, mode: 'free', slim: true, learn: true, at: qat, noBack: true, noRevisit: true, pid: pid, qn: qn,
        quiet: function () { return here(qat); },
        enter: function () { if (L.lqId !== id) { L.lqId = id; L.lqDone = A.learnPath(pid).answered.indexOf(qn) > -1 && T().lqPassed === id; } },
        eb: function () { return 'Learn · ' + (i + 1) + ' of ' + quests.length; },
        title: function () { return L.lqDone ? 'Answered. On you go.' : 'Your question is open in Learn.'; },
        line: function () { return L.lqDone ? 'Your answer is kept.' : 'Answer it there. Getting it wrong costs nothing.'; },
        key: function () { return L.lqDone ? 'Continue' : 'Back to the question'; },
        goLabel: last ? 'Continue' : 'Next question',
        skip: function () { return L.lqDone ? null : 'Take me past it'; },
        onSkip: function () { L.lqId = null; if (A.learnPath(pid).answered.indexOf(qn) < 0) { var r = A.learnAnswer(pid, qn); if (r && r.first) xp(40); } },
        go: function () { if (!L.lqDone) { location.hash = '#' + qat; return false; } L.lqId = null; return true; },
        watch: function () {
          if (!L.lqDone && A.learnPath(pid).answered.indexOf(qn) > -1 && document.querySelector('#view .quest .answer.correct')) { L.lqDone = true; T().lqPassed = id; A.save(); }
          if (L.lqDone) { var nx = nextOf(id); if (nx && nx.at && here(nx.at) && nx.at !== qat) { L.lqId = null; return nx.id; } }
          if (L.hush && !here(qat)) draw();
          return null;
        } });
    });
  }
  function lessonXP(n) { return (LESSON[n] || []).filter(function (q) { return A.learnPath(q[0]).answered.indexOf(q[1]) > -1; }).length * 40; }
  /* the Open card: the next desk in DESK_ORDER that is not open yet (a desk opened early keeps the order of the rest);
     with every desk open it is the end: "Your office is open." */
  var NEXT_SAY = { investment: 'Your investments are on it, liquid and illiquid.', policy: 'Your Financial Identity and your rules are on it.',
    protection: 'Your cover is on it, and your papers go in the Vault.', succession: 'Your will, and the people it names, are on it.' };
  function openCard(id, n) {
    step({ id: id, stage: n, mode: 'side', at: '/' + STAGES[n].k, noBack: true, noRevisit: true, done: true, bare: true, stack: true, cls: 'is-open is-opencard',
      enter: function () { emit('stage', { done: n }); },
      before: function () { var x = lessonXP(n); return x ? chipHTML('Lesson done · +' + x + ' XP', true) : ''; },
      big: function () { var k = nextClosed(); return '<div class="tq-open">' + (k ? A.sectionIcon(A.DESKS[k].icon) : A.fyMark('ready')) + '</div>'; },
      title: function () { var k = nextClosed(); return k ? e(deskN(k)) + ' is open.' : 'Your office is open.'; },
      body: function () { var k = nextClosed(); return sayHTML(k ? e(NEXT_SAY[k] || '') : 'Every desk is open. I’ll bring you what needs a decision.'); },
      key: function () { var k = nextClosed(); return k ? 'Open ' + deskN(k) : 'Go to Office'; },
      under: { label: function () { return !nextClosed() ? '' : n === 1 ? 'Tomorrow' : 'Look around first'; }, go: function () { lookAround(n === 1); } },
      go: function () {
        var k = nextClosed();
        if (!k) { if (location.hash !== '#/home') location.hash = '#/home'; finish(); return false; }
        startStage(stageOf(k)); return false;
      } });
  }

  /* STAGE 1 · RECORDS, DAY ONE (prompt 18): Freya's hello, four questions, the payoff, Office and the tab bar,
     the first lesson, Investment */
  step({ id: 'r-hi', stage: 1, mode: 'side', at: '/home', hello: true, noBack: true, noRevisit: true, stack: true, cls: 'is-desk is-hi',
    title: function () { return 'Hi ' + e(first()) + '. I’m Freya, your chief of staff.'; },
    line: function () { return 'You own the office. I’ll open its five desks with you, one at a time.'; },
    body: function () { return platesHTML('records') + filmCard('first-picture'); },
    key: 'Open the Records desk', under: { text: 'About ' + STAGES[1].min + ' minutes' } });
  payoff({ id: 'r-pay', stage: 1, at: '/records', chip: 'Records is open', eb: 'Your total wealth',
    title: function () { return '<span class="num">' + M(A.totals().net) + '</span>'; },
    info: 'Everything you own, less everything you owe. Each figure keeps where it came from, and its date.',
    pic: function () { return A.totals().owned > 0 ? API.V.wpPicture({ link: false }) : '<p class="tq-quiet">Nothing is recorded yet. The picture starts with the first figure.</p>'; },
    say: 'I’ll keep this current.' });
  point({ id: 'r-show-1', stage: 1, at: '/home', sel: ['#tabbar', '#mainbar .mb-list'],
    title: 'Five places, always here.',
    info: 'Office is your overview. Desks holds the five desks, opened one at a time. Freya is in the middle; Learn and the Vault follow.' });
  point({ id: 'r-show-2', stage: 1, at: '/home', sel: ['#view .of-wealth .gl-i', '#view .of-wealth'],
    title: 'Tap an “i” whenever you want more.',
    info: 'An “i” explains a word or a figure in a sentence or two. Close it, and you are back where you were.' });
  quest({ id: 'r-les-1', stage: 1, pid: 'first-picture', n: 1, at: '/records', film: 'first-picture', show: [1, 0, 3, 2],
    q: function () { return fp1().q; }, o: function () { return fp1().o; }, hint: 'Ask what has to be sold first, and how long selling takes.', why: function () { return OWHY; } });
  openCard('r-open', 1);

  /* STAGE 2 · INVESTMENT, WITH LEARN AND ITS FILMS (prompt 20) */
  payoff({ id: 'i-pay', stage: 2, at: '/investment', chip: 'Investment is open', eb: 'What you hold',
    title: function () { return '<span class="num">' + M(invTotal() + amt('cash')) + '</span>'; },
    info: 'Liquid is what could be money within days. Illiquid takes months or years to sell.',
    pic: function () { return invTotal() + amt('cash') > 0 ? API.V.deskPicture('investment') : '<p class="tq-quiet">Nothing invested is recorded yet.</p>'; },
    say: 'Each block to scale. The greens are liquid, the blues are not.' });
  point({ id: 'i-show-1', stage: 2, at: '/investment', sel: ['#view .dp-hold', '#view .dp-sec', '#view .dp-head'],
    title: 'What you hold: liquid and illiquid.',
    info: 'The greens could be money within days. The blues take longer: a private fund can take years.' });
  point({ id: 'i-show-2', stage: 2, at: '/investment', sel: ['#view .dp-learn .dp-film', '#view .dp-learn', '#view .dp-links'],
    title: 'Every desk has a short film.',
    info: 'Watch it when you like. Each is under 90 seconds.' });
  point({ id: 'i-show-3', stage: 2, at: '/investment', tap: true, sel: ['#tabbar [data-tab="learn"]', '#mainbar [data-nav="learn"]'], route: '/learn',
    title: 'Learn shows where you stand, and every path.',
    info: 'Your rank, your XP and every path of every desk, on one page.',
    onSkip: function () { location.hash = '#/learn'; } });
  lesson(2, 'Shares, bonds and funds', 'ia-start', [['ia-start', 1], ['ia-start', 2]]);
  openCard('i-open', 2);

  /* STAGE 3 · GOVERNANCE, WITH FREYA (prompt 21) */
  step({ id: 'g-show-1', stage: 3, mode: 'tap', at: '/policy', noBack: true, noRevisit: true, point: true, grp: 'show', cls: 'is-desk',
    spot: { sel: ['#tabbar .tb-freya', '#fy-bar'] }, key: null, skip: 'Skip for now',
    title: 'Ask me anything. I answer from your record.',
    info: 'On a phone I am in the middle of the tab bar; on a desktop my bar is at the foot of every page.',
    onSkip: function () { L.noAsk = true; },
    intercept: function () { L.noAsk = false; if (layout() === 'phone' && API.ACT['fy-tab']) API.ACT['fy-tab'](); else { var i = API.inputEl(); if (i) i.focus(); } advance(); } });
  step({ id: 'g-ask', stage: 3, mode: 'free', at: '/policy', noBack: true, noRevisit: true, grp: 'show', point: true, cls: 'is-desk',
    when: function () { return !L.noAsk; },
    spot: { sel: ['#fy-panel .fy-field', '#fy-bar'] },
    enter: function () {
      if (layout() === 'phone' && !API.fy().open && API.ACT['fy-tab']) API.ACT['fy-tab']();
      L.fyN = userN();
      var i = API.inputEl(); if (i) { i.value = couple() ? 'What does our first limit mean?' : 'What does my first limit mean?'; API.sendState(); }
    },
    title: 'I’ve written a question for you.',
    info: 'Send it with the arrow. I answer from your record, and you can ask anything else the same way.',
    key: null, skip: 'Skip it', onSkip: function () { var i = API.inputEl(); if (i) { i.value = ''; API.sendState(); } },
    watch: function () {
      var F = API.fy();
      if (userN() > L.fyN && !F.busy) { var last = F.thread[F.thread.length - 1]; if (last && last.role === 'assistant' && last.content) return 'g-ask-read'; }
      return null;
    } });
  step({ id: 'g-ask-read', stage: 3, mode: 'free', noBack: true, noRevisit: true, grp: 'show2', point: true, cls: 'is-desk',
    when: function () { return !L.noAsk; },
    spot: { sel: ['#fy-panel'] },
    pos: function () { return { i: 2, n: 2 }; },
    title: 'Every figure I give carries its source.',
    info: 'The source is in brackets after each figure: where it came from, and its date.',
    key: 'Next', go: function () { if (API.fy().open) API.ACT['fy-close'](); return true; } });
  lesson(3, 'Why a household writes its rules down', 'fo-rules', [['fo-rules', 3]]);
  openCard('g-open', 3);

  /* STAGE 4 · PROTECTION, WITH THE VAULT (prompt 22) */
  function coverSum() { return S().cover.reduce(function (s, c) { return s + (c.sum || 0); }, 0); }
  payoff({ id: 'p-pay', stage: 4, at: '/protection', chip: 'Protection is open', eb: 'Your cover',
    title: function () { return S().cover.length ? '<span class="num">' + M(coverSum()) + '</span>' : 'No cover recorded yet'; },
    info: 'What each policy pays, added up. Health and car cover have no single sum, so they are listed, not counted.',
    pic: function () { var g = gaps(); return S().cover.length ? API.V.deskPicture('protection') + (g.length ? '<p class="tq-gap"><b>The one gap:</b> ' + e(g[0]) + '. Whether you need it is your decision.</p>' : '') : ''; },
    say: 'I’ll tell you before each renewal.' });
  point({ id: 'p-show-1', stage: 4, at: '/protection', sel: ['#tabbar [data-tab="vault"]', '#mainbar [data-nav="vault"]'],
    title: 'Every paper, filed by desk.',
    info: 'A copy of each, linked to the figure it proves, with where the original is kept.' });
  lesson(4, 'What insurance is for', 'fo-cover', [['fo-cover', 1]]);
  openCard('p-open', 4);

  /* STAGE 5 · SUCCESSION, WITH PROFILE, THEN THE WHOLE OFFICE (prompt 23) */
  payoff({ id: 's-pay', stage: 5, at: '/succession', chip: 'Succession is open', eb: 'What you pass on',
    title: function () { var w = S().will || {}; return w.exists === 'Yes' ? 'Your will is in the record' : w.exists === 'No' ? 'No will yet' : 'The will, still to record'; },
    info: 'The will decides what the will covers. Accounts with a beneficiary named on them pass outside it.',
    pic: function () { return API.V.deskPicture('succession'); },
    say: 'I’ll tell you when it is time to read it again.' });
  point({ id: 's-show-1', stage: 5, at: '/home', sel: ['#view .of-ini', '#mainbar .mb-owner'],
    title: 'Your household, who sees what, and settings.',
    info: 'Profile holds the members, the plan, security, notifications and the export, and replays any stage of this tutorial.' });
  lesson(5, 'What a will does', 'fo-will', [['fo-will', 1]]);
  openCard('s-open', 5);

  /* the questions, short, in their desk's own page (prompt 17: eight words, fifteen, and the rest behind the "i") */
  ask('cash', '/records', { sel: ['#view .wp', '#view .dp-head'] }, function () { return 'How much is in your savings?'; }, function () { return 'Roughly is fine.'; },
    'Almost everyone has a savings account, so it is the easiest first block. The bank is optional.');
  ask('debt', '/records', { sel: ['#view .wp', '#view .dp-head'] }, function () { return 'What do you owe?'; }, function () { return 'Tap each one you have, and what is still owed.'; },
    'What you owe is shown beside what you own, never netted away.');
  ask('family', '/records/family', BY.family.spot, function () { return 'Who is this money for?'; }, function () { return 'Tap the one that fits, then who is in the family.'; },
    'It takes a few seconds, and nobody gets a login unless you invite them.');
  ask('home', '/records', { sel: ['#view .wp', '#view .dp-head'] }, function () { return 'Do you own your home?'; }, function () { return 'A second home goes here too, each with its mortgage.'; },
    'For most households the home is the largest block of what they own.');
  ask('invest', '/investment', { sel: ['#view .pi', '#view .dp-head'] }, function () { return 'What do you invest in?'; }, function () { return 'Tap each kind you have, and roughly what it is worth.'; },
    'Or upload your latest statement, and it is filed in the Vault. Skip what you don’t have.');
  ask('horizon', '/policy', null, function () { return 'How long can most of this money wait?'; }, function () { return 'Drag round the dial, or use the arrow keys.'; },
    'The years before you would need most of your savings and investments. It is the first part of your Financial Identity.');
  ask('bad', '/policy', null, function () { return 'In a bad year, what would you do?'; }, function () { return 'There is no right answer: this one is about you.'; },
    'Markets have bad years. The picture shows one, drawn on your own figure where there is one.');
  ask('monthly', '/policy', null, function () { return 'How much do you set aside each month?'; }, function () { return 'Roughly, for savings and investments together.'; },
    'The planning tools use it later. Skip it if it changes a lot.');
  ask('floor', '/policy/rules', BY.floor.spot, function () { return 'How much cash must stay reachable?'; }, function () { return 'Your first rule. The figure is yours to set.'; },
    'Finna never suggests it. You are told if cash falls under it.');
  ask('mix', '/policy/rules', BY.mix.spot, function () { return 'Your mix, in four ranges.'; }, function () { return 'A target for each, and how far it may drift.'; },
    'It starts at what you hold today, so keeping it as it is works too.');
  ask('cover', '/protection', { sel: ['#view .mt', '#view .dp-head'] }, function () { return 'Which insurance do you have?'; }, function () { return 'Tap all that apply. A rough sum is enough.'; },
    'The details can come from each policy later.');
  ask('will', '/succession', { sel: ['#view .pw', '#view .dp-head'] }, function () { return couple() ? 'Is there a will?' : 'Do you have a will?'; }, function () { return 'Just where things stand.'; },
    'Who it names can come later, with your lawyer.');
  /* the Financial Identity's first reading is Governance's payoff, with the first limit and Change */
  (function (s) {
    s.mode = 'side'; s.at = '/policy'; s.bare = true; s.stack = true; s.cls = 'is-desk is-pay'; s.eb = 'Your Financial Identity';
    s.before = function () { return chipHTML('Governance is open'); };
    s.info = 'Drawn from your answers by the same written rules for every household. It firms as you go, and it never decides what you can access.';
    var body0 = s.body;
    s.body = function () { var p = A.policy(); return body0() + (p ? '<p class="tq-limit"><b>Your first limit</b><span>At least <b class="num">' + M(p.liquidityMin) + '</b> of cash, always reachable.</span></p>' : ''); };
    s.alt = { label: 'Change', go: function () { return 'floor'; } };
    s.later = true;
  })(BY.crest);
  /* the papers: the Vault's own upload, as today, with Skip for now */
  (function (s) {
    s.title = function () { return 'Add your home insurance policy.'; }; s.line = function () { return 'Its key opens the Vault’s own upload.'; };
    s.info = 'A copy, filed with the line it belongs to. It can wait: nothing in the office needs it.'; s.skip = 'Skip for now'; s.grp = 'show'; s.say = true; s.stack = true; s.cls = 'is-desk'; s.eb = null;
  })(BY.docs);
  (function (s) {
    s.title = function () { return 'Invite ' + e(partner().name.split(' ')[0]) + '?'; }; s.line = function () { return 'They get a login of their own, and see the same record.'; };
    s.info = 'The free office is for two adults and one shared record.'; s.skip = 'Skip for now'; s.grp = 'show'; s.say = true; s.stack = true; s.cls = 'is-desk'; s.eb = null;
  })(BY.invite);
  BY.fp2.at = '/records'; BY.fp2.film = 'first-picture';
  ['r-les-1', 'fp2'].forEach(function (id) { var s = BY[id]; s.grp = 'les'; s.learn = true; s.say = true; s.stack = true; s.eb = null; });
  BY.save.at = '/learn'; BY['save-end'].at = '/succession';
  /* one key at the foot of every step, with one quiet link under it or nothing (prompt 4) */
  ['hello', 'save', 'save-end'].forEach(function (id) { BY[id].stack = true; });
  ['save', 'save-end'].forEach(function (id) { BY[id].bare = true; });   /* XP stays in Learn (prompt 3): the old head with its XP goes */

  /* THE ORDER (the concept, 14 Oct 2026): five stages, each Ask, Payoff, Show, Lesson, Open. The steps of the eight-stage
     and the desk-by-desk tutorials not listed here stay defined, unplayed (the quests in the card are still the household's
     own wording of their quests on Learn) */
  var PLAN = [
    [0, ['hello']],
    [1, ['r-hi', 'cash', 'debt', 'family', 'home', 'r-pay', 'r-show-1', 'r-show-2', 'r-les-1', 'fp2', 'r-open']],
    [2, ['invest', 'i-pay', 'i-show-1', 'i-show-2', 'i-show-3', 'les-2-in', 'les-2a', 'les-2b', 'save', 'i-open']],
    [3, ['horizon', 'bad', 'monthly', 'floor', 'mix', 'crest', 'g-show-1', 'g-ask', 'g-ask-read', 'les-3-in', 'les-3a', 'g-open']],
    [4, ['cover', 'p-pay', 'p-show-1', 'docs', 'les-4-in', 'les-4a', 'p-open']],
    [5, ['will', 's-pay', 's-show-1', 'invite', 'les-5-in', 'les-5a', 'save-end', 's-open']]
  ];
  STEPS.length = 0;
  PLAN.forEach(function (p) { p[1].forEach(function (id) { var s = BY[id]; if (!s) throw new Error('The tutorial has no step ' + id); s.stage = p[0]; STEPS.push(s); }); });

  /* ══ THE ENGINE ═══════════════════════════════════════════════════════════════════════
     FIVE WAYS ON SCREEN (rebuilt 2 Oct 2026; Christian: "it needs to move around and show the
     buttons and the desks and explain"):
       · modal — the card in the middle: the name, a stage's end, a badge. Page dimmed and inert.
       · side — Freya's panel, docked at the right on a desktop (the page narrows beside it, so
         the whole page shows), rising from the foot on a tablet or a phone. The questions are
         asked here, and the page under a light veil answers while you drag: the block grows.
       · coach — the card stands beside the part it explains, with a pointer, and moves from part
         to part; the page is dimmed round it and inert.
       · tap — the same card, pointing at a real key or link to press; the page is live for that
         one and nothing else (a tap anywhere else is held, and the card nods).
       · free — no veil, the page live; the card sits on Freya's row (Ask Freya). */
  var L = { foot: 0, on: false, mode: 'off', st: null, spot: null, spotI: -1, cut: false, wait: null, waitT: 0, pick: null, fyN: 0, side: 0, liveT: 0, liveQ: null, intoT: 0 };
  var lay, card, spot, pill;
  function px(n) { return API.px(n); }

  function build() {
    lay = document.createElement('div');
    lay.className = 'walk tq'; lay.id = 'tq';
    if (typeof lay.showPopover === 'function') lay.setAttribute('popover', 'manual'); else lay.hidden = true;
    lay.innerHTML = '<div class="walk-spot" aria-hidden="true"></div>' +
      '<section class="walk-card tq-card" role="dialog" aria-labelledby="tq-title" data-lenis-prevent></section>' +
      '<div class="tq-pillw" hidden><button class="tq-pill" type="button" data-tq="resume"><span class="tq-pill-p" data-pill-p aria-hidden="true"></span><b data-pill>Continue</b></button>' +
      '<button class="icon-key tq-pill-x" type="button" data-tq="pill-off" aria-label="Hide the key that continues the tutorial">' + A.ic('close') + '</button></div>';
    document.body.appendChild(lay);
    card = lay.querySelector('.tq-card'); spot = lay.querySelector('.walk-spot'); pill = lay.querySelector('.tq-pillw');
    lay.addEventListener('click', onClick);
    lay.addEventListener('keydown', onKey);
    /* the page's scroll is held while the page is locked, as under a sheet; the card's own body scrolls */
    ['wheel', 'touchmove'].forEach(function (t) {
      lay.addEventListener(t, function (ev) {
        if (!locked()) return;
        var sc = ev.target.closest && ev.target.closest('.tq-scroll');
        if (!sc || sc.scrollHeight <= sc.clientHeight + 1) ev.preventDefault();
      }, { passive: false });
    });
    /* TAP: only the lit key answers; a tap anywhere else is held, and the card nods */
    document.addEventListener('click', function (ev) {
      if (!L.on || L.mode !== 'tap' || lay.contains(ev.target)) return;
      var s = L.st, el = L.spot;
      if (el && el.contains(ev.target)) { if (s && s.intercept) { ev.preventDefault(); ev.stopPropagation(); s.intercept(); } return; }
      ev.preventDefault(); ev.stopPropagation(); nudge();
    }, true);
    document.addEventListener('keydown', function (ev) { if (L.on && (L.mode === 'tap' || L.mode === 'side') && ev.key === 'Escape' && !lay.contains(ev.target)) { ev.preventDefault(); ev.stopPropagation(); pause(); } }, true);
    window.addEventListener('resize', function () { if (L.mode === 'side') { L.side = -1; sideOn(true); } });
  }
  function locked() { return L.mode === 'modal' || L.mode === 'coach' || L.mode === 'wait'; }
  function layerOn() {
    if (L.on) return;
    L.on = true;
    if (lay.hasAttribute('popover')) { try { lay.showPopover(); } catch (x) {} } else lay.hidden = false;
    requestAnimationFrame(tick);
  }
  function layerOff() {
    L.on = false; setMode('off');
    if (lay.hasAttribute('popover')) { try { lay.hidePopover(); } catch (x) {} } else lay.hidden = true;
  }
  /* the part a card shows is marked .tq-lit while a coach or side card is on screen, so its own keys rest
     and the card's key is the one to press (freya-tutorial.css, ONE KEY ON SCREEN; 9 Oct 2026) */
  function litMark(el) {
    if (L.lit && L.lit !== el) L.lit.classList.remove('tq-lit');
    if (el && !el.classList.contains('tq-lit')) el.classList.add('tq-lit');
    L.lit = el || null;
  }
  /* ON A PHONE A CARD THAT ASKS OR TELLS FILLS THE SCREEN (modal and side; freya-tutorial.css, ONE WINDOW
     AT A TIME): the page is out of sight, so nothing is lit or scrolled behind it. (Not full(): that one
     writes a name with the family name.) */
  function fullScreen(m) { return layout() === 'phone' && (m === 'modal' || m === 'side'); }
  function setMode(m) {
    L.mode = m; lay.setAttribute('data-mode', m); litMark(null);
    /* while the card is on screen the tutorial leads: Learn's own next-step keys step aside (app.css, THE TUTORIAL LEADS) */
    document.documentElement.toggleAttribute('data-tq-lead', !(m === 'pill' || m === 'off'));
    var root = document.getElementById('root');
    if (root) root.inert = m === 'modal' || m === 'coach' || m === 'wait' || m === 'side';
    API.lenis(!locked());
    card.hidden = m === 'pill' || m === 'wait' || m === 'off';
    pill.hidden = m !== 'pill' || !!T().pillOff;
    if (m === 'pill') { var s = cur(), n = s.stage || 1; pill.querySelector('[data-pill]').textContent = 'Continue · ' + STAGES[n].t; pill.querySelector('[data-pill-p]').innerHTML = A.sectionIcon(A.DESKS[STAGES[n].k].icon); }
    if (m !== 'coach' && m !== 'tap' && m !== 'free') { card.style.left = card.style.top = card.style.width = ''; card.removeAttribute('data-pt'); }
    if (m !== 'free' && !((m === 'coach' || m === 'tap') && layout() === 'phone')) footRoom(0);   /* a phone's coach keeps its room from step to step */
    sideOn(m === 'side');
  }
  /* the page holds the tutorial's next key (a quest answered): the card steps aside, so only one key shows */
  function hush(on) {
    L.hush = on;
    if (on) card.hidden = true;
    document.documentElement.toggleAttribute('data-tq-lead', !on && !(L.mode === 'pill' || L.mode === 'off'));
  }
  function footRoom(h) {
    h = Math.round(h); if (h === L.foot) return; L.foot = h; var r = document.documentElement;
    if (h) { r.setAttribute('data-tq-foot', ''); r.style.setProperty('--tq-foot', h + 'px'); } else { r.removeAttribute('data-tq-foot'); r.style.removeProperty('--tq-foot'); }
  }
  /* the page narrows beside Freya's panel on a desktop, so the whole page shows beside it */
  function sideOn(on) {
    var r = document.documentElement, w = on && layout() === 'desktop' ? Math.round(clamp(window.innerWidth * 0.3, 380, 440)) : 0;
    if (w === L.side) return;
    L.side = w;
    if (w) { r.setAttribute('data-tq-side', ''); r.style.setProperty('--tq-side-w', w + 'px'); r.style.setProperty('--tq-side', (w + 2 * px('--space-4')) + 'px'); }
    else { r.removeAttribute('data-tq-side'); r.style.removeProperty('--tq-side'); r.style.removeProperty('--tq-side-w'); }
  }
  function inPlay(id) { return !!BY[id] && STEPS.indexOf(BY[id]) > -1; }
  function cur() { return inPlay(T().step) ? BY[T().step] : BY.hello; }
  function firstOf(n) { for (var i = 0; i < STEPS.length; i++) if (STEPS[i].stage === n && okWhen(STEPS[i])) return STEPS[i]; return null; }
  function here(at) { return location.hash.replace(/^#/, '') === at; }
  /* the page answers while you drag: drawn again, at most four times a second */
  function live() {
    var now = performance.now(); clearTimeout(L.liveQ);
    function run() { L.liveT = performance.now(); API.render(); }
    if (now - L.liveT > 250) run(); else L.liveQ = setTimeout(run, 250 - (now - L.liveT));
  }
  function nudge() { if (RM.matches) return; card.animate([{ translate: '0 0' }, { translate: '-6px 0' }, { translate: '6px 0' }, { translate: '0 0' }], { duration: 300, easing: 'ease-out' }); }

  function go(id) {
    var s = BY[id]; if (!s) return;
    if (!okWhen(s)) { var n = nextOf(id); if (n) { go(n.id); return; } finish(); return; }
    T().step = s.id; T().paused = false; A.save(); emit('step');
    show();
  }
  function advance() { var n = nextOf(cur().id); if (n) go(n.id); else finish(); }
  function show() {
    var s = cur(); L.st = s;
    layerOn();
    /* A QUEST ALREADY ANSWERED (Christian, 4 Oct 2026: back from a badge, the tutorial took him back to the
       answered quest instead of on). Resumed, reloaded or left: the card meets them where they are, passed */
    if (s.pid && s.at && !here(s.at) && T().lqPassed === s.id && A.learnPath(s.pid).answered.indexOf(s.qn) > -1) { L.lqId = s.id; L.lqDone = true; L.wait = null; draw(); return; }
    if (s.at && !here(s.at)) { L.wait = s.at; L.waitT = performance.now(); setMode('wait'); location.hash = '#' + s.at; return; }
    L.wait = null; draw();
  }
  function head(s) {
    var st = s.stage, bars = '';
    for (var i = 1; i <= NS; i++) bars += '<i' + (i < st || (i === st && s.done) ? ' class="on"' : i === st ? ' class="now"' : '') + '></i>';
    var x = earned() ? A.learnXP() : 0;   /* Learn's own count, once a quest is passed */
    return '<div class="wg-head">' + A.fyMark(API.fy().state || 'ready') + '<span class="wg-bars" aria-hidden="true">' + bars + '</span>' +
      '<span class="wg-n">' + (st ? 'Desk ' + st + ' of ' + NS + ' · ' + e(STAGES[st].t) : 'The tutorial') + '</span><span class="tq-xp" data-xp' + (x ? '' : ' hidden') + '>' + x + ' XP</span>' +
      '<button class="icon-key" type="button" data-tq="later" aria-label="Pause the tutorial">' + A.ic('close') + '</button></div>';
  }
  function pointy(s) { return s.mode === 'coach' || s.mode === 'guide'; }
  /* where a step stands in its group of the stage (its questions, its pointers): "2 of 4" */
  function grpPos(s) { if (s.pos) return s.pos(); if (!s.grp) return null; var l = STEPS.filter(function (x) { return x.stage === s.stage && x.grp === s.grp && okWhen(x); }); return { i: Math.max(1, l.indexOf(s) + 1), n: Math.max(1, l.length) }; }
  function iBtn(s) { return F(s.info) ? '<button class="tq-i" type="button" data-tq="info" aria-label="More about this" aria-expanded="false">' + A.ic('info') + '</button>' : ''; }
  function askHead(s) {
    var p = grpPos(s) || { i: 1, n: 1 }, bars = '', k = STAGES[s.stage] && STAGES[s.stage].k;
    for (var i = 1; i <= p.n; i++) bars += '<i' + (i < p.i ? ' class="on"' : i === p.i ? ' class="now"' : '') + '></i>';
    var lab = s.learn ? A.ic('learn') + '<span>Learn</span>' : k ? A.sectionIcon(A.DESKS[k].icon) + '<span>' + e(deskN(k)) + '</span>' : '';
    return '<div class="tq-ahead"><button class="icon-key" type="button" data-tq="later" aria-label="Pause the tutorial">' + A.ic('close') + '</button><span class="tq-ah-t">' + lab + '</span>' +
      '<span class="tq-ah-n">' + p.i + ' of ' + p.n + '</span></div><div class="tq-abars" aria-hidden="true">' + bars + '</div>';
  }
  function bareHead() { return '<div class="tq-xhead"><button class="icon-key" type="button" data-tq="later" aria-label="Pause the tutorial">' + A.ic('close') + '</button></div>'; }
  function pointHTML(s, title, line0) {
    var p = grpPos(s) || { i: 1, n: 1 }, st = STAGES[s.stage] || {};
    return '<div class="tq-pt"><p class="eyebrow wg-eb">' + (s.stage ? 'Desk ' + s.stage + ' of ' + NS + ' · ' + e(st.t) : 'The tutorial') + '</p>' +
      '<h2 class="walk-title tq-t" id="tq-title" tabindex="-1">' + A.fyMark('ready') + '<span>' + title + '</span>' + iBtn(s) + '</h2>' + (line0 ? '<p class="walk-line">' + line0 + '</p>' : '') +
      '<div class="walk-keys tq-keys tq-pt-k"><span class="tq-pt-n">' + p.i + ' of ' + p.n + '</span>' + (F(s.skip) ? '<button class="link" type="button" data-tq="skip">' + e(F(s.skip)) + '</button>' : '') +
      (s.key === null ? '' : '<button class="key" type="button" data-tq="go">' + e(keyOf(s)) + '</button>') + '</div></div>';
  }
  /* the "i": one or two sentences, a sheet from the foot on a phone and a small card beside it on a desktop (prompt 17).
     Closing it returns to the step as it was */
  function infoClose() { var d = lay && lay.querySelector('.tq-info'); if (!d) return; var b = card.querySelector('[data-tq="info"]'); if (b) { b.setAttribute('aria-expanded', 'false'); b.focus({ preventScroll: true }); } d.remove(); }
  function infoToggle(b) {
    if (lay.querySelector('.tq-info')) { infoClose(); return; }
    var s = cur(), t = F(s.info); if (!t) return;
    var d = document.createElement('div'); d.className = 'tq-info'; d.setAttribute('role', 'dialog'); d.setAttribute('aria-label', 'More about this');
    d.innerHTML = '<p>' + t + '</p>' + (F(s.infoFilm) ? filmCard(F(s.infoFilm)) : '') + '<button class="key key-secondary key-s" type="button" data-tq="info-x">Close</button>';
    lay.appendChild(d); b.setAttribute('aria-expanded', 'true');
    if (layout() !== 'phone') {
      var r = b.getBoundingClientRect(), vw = document.documentElement.clientWidth, w = d.offsetWidth, h = d.offsetHeight, g = px('--space-4');
      var x = clamp(r.left + r.width / 2 - w / 2, g, vw - w - g), y = r.bottom + px('--space-2'); if (y + h > window.innerHeight - g) y = Math.max(g, r.top - h - px('--space-2'));
      d.style.left = x + 'px'; d.style.top = y + 'px';
    }
    var k = d.querySelector('[data-tq="info-x"]'); if (k) k.focus({ preventScroll: true });
  }
  function keys(s) {
    var p = !s.noBack && !s.done && backOf(s), k = s.key === null ? '' : '<button class="key" type="button" data-tq="go">' + e(keyOf(s)) + (pointy(s) ? A.ic('arrow') : '') + '</button>';
    /* stacked (the concept's cards): the key, then Skip for now, Look around first or a quiet line under it */
    if (s.stack) {
      var u = s.under, ul = u && u.go ? F(u.label) : '', ut = u && u.text ? F(u.text) : '';
      return '<div class="walk-keys tq-keys is-stack">' + (s.need ? '<p class="tq-need" data-need aria-live="polite" hidden></p>' : '') + k +
        (s.alt ? '<button class="link" type="button" data-tq="alt">' + e(F(s.alt.label)) + '</button>' : '') +
        (F(s.skip) ? '<button class="link" type="button" data-tq="skip">' + e(F(s.skip)) + '</button>' : '') + (ul ? '<button class="link" type="button" data-tq="under">' + e(ul) + '</button>' : '') +
        (ut ? '<p class="tq-under">' + e(ut) + '</p>' : '') + (s.later && !ul && !F(s.skip) && !s.alt ? '<button class="link" type="button" data-tq="later">Later</button>' : '') + '</div>';
    }
    var left = (s.skip ? '<button class="link" type="button" data-tq="skip">' + e(s.skip) + '</button>' : '') + (s.later ? '<button class="link" type="button" data-tq="later">Later</button>' : '');
    return '<div class="walk-keys tq-keys">' + (s.need ? '<p class="tq-need" data-need aria-live="polite" hidden></p>' : '') + (left ? '<span class="tq-left">' + left + '</span>' : '') + (s.alt ? '<button class="key key-secondary" type="button" data-tq="alt">' + e(F(s.alt.label)) + '</button>' : p ? '<button class="key key-secondary" type="button" data-tq="back">Back</button>' : '') + k + '</div>';
  }
  function modeOf(s) { return s.mode === 'guide' ? 'coach' : s.mode; }
  function draw() {
    var s = L.st = cur(), m = modeOf(s);
    infoClose();
    if (s.enter) s.enter();
    L.spot = null; L.spotI = -1; L.cut = false;
    var big = s.hello ? '<div class="tq-hello">' + A.fyMark(API.fy().state || 'ready') + '</div>' : s.big ? s.big() : '';
    var title = F(s.title), line0 = F(s.line), eb = F(s.eb), body = s.body ? s.body() : '';
    var slim = s.slim && m === 'free';
    card.className = 'walk-card tq-card ' + ({ modal: 'is-modal', side: 'is-side', coach: 'is-coach', tap: 'is-coach is-tap', free: 'is-guide walk-guide' }[m] || 'is-modal') +
      (s.hello ? ' is-hello' : '') + (s.done ? ' is-done' : '') + (s.badge ? ' is-badge' : '') + (slim ? ' is-slim' : '') + (s.learn ? ' is-learn' : '') + (s.point ? ' is-point' : '') + (s.grp && !s.point ? ' is-ask' : '') + (s.cls ? ' ' + s.cls : '');
    card.setAttribute('aria-modal', String(m === 'modal' || m === 'coach' || m === 'side'));
    /* SLIM: one row on Freya's row, for a page the user works in (a quest on Learn): the page stays clear */
    if (slim) card.innerHTML = '<div class="tq-slim">' + A.fyMark(API.fy().state || 'ready') + '<div class="tq-slim-say" aria-live="polite">' + (eb ? '<p class="eyebrow wg-eb">' + eb + '</p>' : '') +
      '<h2 class="tq-slim-t" id="tq-title" tabindex="-1">' + title + '</h2>' + (line0 ? '<p class="tq-slim-l">' + line0 + '</p>' : '') + '</div>' +
      '<span class="tq-slim-k">' + (F(s.skip) ? '<button class="link" type="button" data-tq="skip">' + e(F(s.skip)) + '</button>' : '') +
      (F(s.key) ? '<button class="key" type="button" data-tq="go">' + e(F(s.key)) + A.ic('arrow') + '</button>' : '') +
      '<button class="icon-key" type="button" data-tq="later" aria-label="Pause the tutorial">' + A.ic('close') + '</button></span></div>';
    else if (s.point) card.innerHTML = pointHTML(s, title, line0);
    else card.innerHTML = (s.hello || s.badge ? '' : s.bare ? bareHead() : s.grp ? askHead(s) : head(s)) + '<div class="tq-scroll">' + big + '<div class="walk-say" aria-live="polite">' + (s.before ? s.before() : '') + (eb ? '<p class="eyebrow wg-eb">' + eb + '</p>' : '') +
      '<h2 class="walk-title' + (s.say || F(s.info) ? ' tq-t' : '') + '" id="tq-title" tabindex="-1">' + (s.say ? A.fyMark('ready') : '') + (s.say || F(s.info) ? '<span>' + title + '</span>' + iBtn(s) : title) + '</h2>' + (line0 ? '<p class="walk-line">' + line0 + '</p>' : '') + (s.after ? s.after() : '') + '</div>' +
      (body ? '<div class="tq-body">' + body + '</div>' : '') + '</div>' + keys(s);
    if (s.wire) s.wire(card.querySelector('.tq-body') || card);
    setMode(m);
    hush(!!(s.quiet && s.quiet()));
    refresh();
    place();
    if (!RM.matches) card.animate([{ opacity: 0, scale: m === 'coach' || m === 'tap' ? '0.97' : '1', translate: m === 'side' && L.side ? '16px 0' : '0 8px' }, { opacity: 1, scale: '1', translate: '0 0' }],
      { duration: px('--t-move') || 240, easing: getComputedStyle(document.documentElement).getPropertyValue('--ease').trim() || 'ease' });
    var sc = card.querySelector('.tq-scroll'); if (sc) sc.scrollTop = 0;
    /* focus: the first field on a keyboard (a phone keeps its keyboard down until asked), else the title */
    var f = !COARSE.matches && card.querySelector('.tq-body input.input:not([type=date])');
    if (f && !f.value) f.focus({ preventScroll: true }); else { var t = card.querySelector('#tq-title'); if (t) t.focus({ preventScroll: true }); }
    if (m !== 'modal') { requestAnimationFrame(function () { place(); into(); }); setTimeout(function () { if (L.st === s) { place(); into(); } }, 450); }
  }
  function keyOf(s) { return F(s.key) || (s.mode === 'modal' || s.mode === 'side' ? 'Continue' : 'Next'); }
  /* the key waits for what the step needs; its words can change as the answers do */
  function refresh() {
    var s = cur(), k = card.querySelector('[data-tq="go"]'), nd = card.querySelector('[data-need]');
    if (k) { k.disabled = s.ok ? !s.ok() : false; var lb = keyOf(s); if (k.firstChild && k.firstChild.nodeType === 3) k.firstChild.nodeValue = lb; else k.textContent = lb; if (pointy(s) && !k.querySelector('svg')) k.insertAdjacentHTML('beforeend', A.ic('arrow')); }
    if (nd) { var t = k && k.disabled && s.need ? s.need() : ''; nd.textContent = t || ''; nd.hidden = !t; }
  }
  function earned() { var d = (S().learn && S().learn.done) || {}; return Object.keys(d).some(function (k) { return d[k].length; }); }
  function xp(n) {
    T().xp += n;
    var x = card.querySelector('[data-xp]'); if (!x) return;
    x.hidden = false; x.textContent = A.learnXP() + ' XP'; x.classList.remove('is-pop'); void x.offsetWidth; x.classList.add('is-pop');
  }
  function enterGo(c) {
    c.addEventListener('keydown', function (ev) {
      if (ev.key !== 'Enter' || !ev.target.matches('input.input')) return;
      ev.preventDefault(); var k = card.querySelector('[data-tq="go"]'); if (k && !k.disabled) k.click();
    });
  }

  function onClick(ev) {
    var b = ev.target.closest('[data-tq]'); if (!b || b.disabled) return;
    var a = b.getAttribute('data-tq'), s = cur();
    if (a === 'go') { var r = s.go ? s.go(b) : true; if (r === false) { refresh(); return; } if (typeof r === 'string') go(r); else advance(); }
    else if (a === 'back') { var p = backOf(s); if (s.onBack) s.onBack(); if (p) go(p.id); }
    else if (a === 'alt') { var r2 = s.alt.go(); if (typeof r2 === 'string') go(r2); else advance(); }
    else if (a === 'skip') { if (s.onSkip) s.onSkip(); A.save(); if (!s.until) advance(); }
    else if (a === 'later') { if (s.done) { var n = nextOf(s.id); if (n) T().step = n.id; } pause(); }
    else if (a === 'resume') resume();
    else if (a === 'under') { if (s.under && s.under.go) s.under.go(); }
    else if (a === 'info') infoToggle(b);
    else if (a === 'info-x') infoClose();
    else if (a === 'pill-off') { T().pillOff = true; A.save(); pill.hidden = true; }
    else if (a === 'restart') restart();
    else if (a === 'continue') { T().paused = false; A.save(); show(); }
  }
  function onKey(ev) {
    if (ev.key === 'Escape' && lay.querySelector('.tq-info')) { ev.preventDefault(); infoClose(); ev.stopPropagation(); return; }
    if (ev.key === 'Escape' && L.mode !== 'pill') { ev.preventDefault(); pause(); }
    /* the app's own keys ([, ], Ctrl K) wait while the tutorial has the focus */
    ev.stopPropagation();
  }
  function pause() {
    T().paused = true; A.save(); emit('leave');
    L.wait = null; L.spot = null;
    setMode('pill'); place();
  }
  function resume() {
    T().paused = false; A.save(); emit('step');
    var s = cur(), k = s.stage && STAGES[s.stage] && STAGES[s.stage].k;
    if (k && !A.deskOpen(k) && firstOf(s.stage) === s) { startStage(s.stage); return; }   /* the pill opens the next desk */
    show();
  }
  function finish() {
    var s = S(); T().done = TODAY; T().paused = false;
    if (!s.household.tutorialDone) { s.household.tutorialDone = TODAY; A.log('Finished the tutorial'); }
    A.save(); emit('complete'); layerOff(); API.render();
    API.toast('The tutorial is done. Your office is yours.');
  }
  function restart() {
    try { localStorage.removeItem(A.KEY); } catch (x) {}
    window.__tqRestart = true;
    history.replaceState(null, '', location.pathname + location.search + '#/home');
    location.reload();
  }
  /* START AGAIN AT A DESK (Christian, 2 Oct 2026: "an option under profile to restart tutorial";
     five desks since 3 Oct). The record stays, so every entry opens on what was entered. The desks
     before it are open and the rest lock again, to be opened on the way; the quests on Learn keep
     their answers, so no XP is counted twice. */
  function from(n) {
    if (!S().members[0].name) { go('hello'); return; }
    var s0 = firstOf(n);
    if (!s0) return;
    var t = T(), dd = D(); t.done = ''; t.paused = false; delete t.lqPassed; t.open = A.DESK_ORDER.slice(0, n); L.lqId = null;
    if (dd.goalNew) { dd.goalNew = false; goalLoad((dd.goalSnaps || {})[dd.ids.goal]); }
    delete S().household.allDesks;
    L.code = null; L.codeV = ''; L.pick = null;
    emit('restart', { from: n });
    go(s0.id);
  }
  function profileCard() {
    var t = T(), now = t.done ? 0 : cur().stage || 0, all = 0;
    STAGES.slice(1).forEach(function (g) { all += g.min; });
    var meta = t.done ? '<span class="status-label ok">Done</span>' : now ? '<span class="status-label">' + (t.paused ? 'Paused at desk ' : 'Desk ') + now + ' of ' + NS + '</span>' : '';
    var rows = STAGES.slice(1).map(function (g, i) {
      var n = i + 1, st = t.done || n < now ? 'done' : n === now ? 'now' : '';
      var lk = !st && !A.deskOpen(g.k);
      return '<button type="button" class="record sg-rec tq-from' + (st ? ' is-' + st : '') + (lk ? ' is-locked' : '') + '" data-tq-from="' + n + '">' +
        '<span class="n" aria-hidden="true">' + (st === 'done' ? CHECK : lk ? A.ic('lock') : n) + '</span>' +
        '<span class="record-main"><span class="record-title"><span class="sr">Start at desk ' + n + ': </span>' + e(g.t) + '</span>' +
        '<span class="record-sub">' + (st === 'now' ? 'You’re here · ' : '') + e(g.d) + '</span></span>' +
        '<span class="record-meta">' + g.min + ' min' + A.ic('arrow') + '</span></button>';
    }).join('');
    var shut = !A.desksAllOpen() && A.desksOpenCount() < NS;
    return { meta: meta, body: '<p class="sg-line">Five desks, opened one at a time, about ' + all + ' minutes in all. Start again at any of them: what you entered stays, and you can change it as you go.</p>' +
      '<div class="tq-from-list">' + rows + '</div>' +
      (shut ? '<div class="tq-open-all"><p class="help">The other desks open as you go, each with a short quest on Learn. Rather look around first? Open them all now; the tutorial carries on where it is.</p>' +
        '<button type="button" class="key key-secondary" data-act="desks-open-all">Open every desk now</button></div>' : '') +
      '<div class="sg-foot"><p class="help">' + (S().assets.length ? '' : 'Nothing is recorded yet, so the later desks have no figures to read until Records is done. ') +
        'Starting at a desk locks the ones after it again. Learn keeps your answers, so no XP is counted twice.</p>' +
      '<button type="button" class="link" data-tq-fresh>Start over with an empty office</button></div>' };
  }
  /* the card's keys; clearing everything asks twice */
  document.addEventListener('click', function (ev) {
    var b = ev.target.closest && ev.target.closest('#view [data-tq-from], #view [data-tq-fresh]'); if (!b) return;
    if (b.hasAttribute('data-tq-from')) { from(+b.getAttribute('data-tq-from')); return; }
    if (b.hasAttribute('data-armed')) { restart(); return; }
    b.setAttribute('data-armed', ''); b.textContent = 'Tap again to clear everything here';
    setTimeout(function () { if (b.isConnected) { b.removeAttribute('data-armed'); b.textContent = 'Start over with an empty office'; } }, 4000);
  });

  /* ── where things go on screen, every frame ─────────────────────────────────────────── */
  function findSpot(s) {
    var sp = s.spot; if (!sp) return { el: null, i: -1 };
    for (var i = 0; i < sp.sel.length; i++) { var el = document.querySelector(sp.sel[i]); if (el && API.shown(el)) return { el: el, i: i }; }
    return { el: null, i: -1 };
  }
  function rectOf(s, el) {
    var r = el.getBoundingClientRect();
    if (!L.cut || !s.spot.piece) return { x: r.left, y: r.top, w: r.width, h: r.height };
    var p = s.spot.piece(el).filter(Boolean), top = Infinity, bot = -Infinity, a = px('--space-2');
    p.forEach(function (n) { var q = n.getBoundingClientRect(); top = Math.min(top, q.top); bot = Math.max(bot, q.bottom); });
    return { x: r.left - a, y: top - a, w: r.width + 2 * a, h: bot - top + 2 * a };
  }
  function phoneTop() { var ph = document.querySelector('.phone-top'); return API.shown(ph) && API.held(ph) ? ph.getBoundingClientRect().bottom : 0; }
  /* the room a lit part has on screen: under the phone's header, and clear of the card when the
     card sits across the page (the panel from the foot, the guide on Freya's row, a phone's card) */
  function wideCoach() {
    var m = L.mode; if ((m !== 'coach' && m !== 'tap') || layout() === 'phone' || !L.spot) return false;
    return L.spot.getBoundingClientRect().width > document.documentElement.clientWidth * 0.42;
  }
  function roomOf() {
    var t = phoneTop(), b = window.innerHeight, m = L.mode;
    if (wideCoach()) b = window.innerHeight - card.offsetHeight - 2 * px('--space-4') - 4;
    if (!card.hidden && !card.classList.contains('is-compact')) {
      var c = card.getBoundingClientRect();
      var across = m === 'free' || (m === 'side' && !L.side) || ((m === 'coach' || m === 'tap') && layout() === 'phone');
      if (across) { if (c.top > window.innerHeight / 2) b = c.top; else t = Math.max(t, c.bottom); }
    }
    return { t: t, b: b };
  }
  /* above Freya's open panel, or under its head on a phone where it fills the screen */
  function compactPos() {
    var pn = document.getElementById('fy-panel'); if (!pn || pn.hidden) return null;
    var g = px('--space-4'), h = card.offsetHeight, vw = document.documentElement.clientWidth;
    if (document.documentElement.hasAttribute('data-fy-open') && layout() === 'phone') {
      var hd = pn.querySelector('.fy-panel-head'), hb = hd ? hd.getBoundingClientRect().bottom : 64;
      return { x: px('--space-3'), w: vw - 2 * px('--space-3'), y: hb + px('--space-2') };
    }
    var r = pn.getBoundingClientRect();
    return { x: r.left, w: r.width, y: Math.max(g, r.top - h - px('--space-3')) };
  }
  /* COACH: beside the part, on whichever side has room — beside a tall or narrow part, under or
     over a wide one — with the pointer at the part's middle. On a phone: across the foot (below). */
  function coachPos(R, el) {
    var vw = document.documentElement.clientWidth, vh = window.innerHeight, g = px('--space-4'), gap = px('--space-4') + 4;
    /* ON A PHONE THE CARD SITS AT THE FOOT, in the same place every step, as wide as Freya's bar (9 Oct 2026,
       Christian: "keeps trying to show two windows at the same time"): it used to jump to the top whenever
       the part was low on screen. The part is scrolled into the room above it (into); only a part held at
       the foot itself, as Freya's bar is, sends the card to the top */
    if (layout() === 'phone') {
      var m0 = px('--space-4'), w0 = vw - 2 * m0, h0 = card.offsetHeight, low = !!(R && el && API.held(el) && R.y + R.h > vh - h0 - 2 * m0);
      if (low && R.y > vh / 2) return { x: m0, y: Math.max(phoneTop() + px('--space-2'), R.y - h0 - px('--space-3')), w: w0, pt: '' };
      return { x: m0, y: low ? phoneTop() + px('--space-2') : vh - h0 - m0, w: w0, pt: '' };
    }
    var w = Math.min(380, vw - 2 * g);
    if (Math.abs(parseFloat(card.style.width) - w) > 0.5) card.style.width = w + 'px';
    var h = card.offsetHeight;
    if (!R) return { x: (vw - w) / 2, y: vh - h - g, w: w, pt: '' };
    var cy = clamp(R.y + R.h / 2 - h / 2, g, vh - h - g), cx = clamp(R.x + R.w / 2 - w / 2, g, vw - w - g);
    var C = {
      right: { x: R.x + R.w + gap, y: cy, ok: R.x + R.w + gap + w <= vw - g },
      left: { x: R.x - gap - w, y: cy, ok: R.x - gap - w >= g },
      below: { x: cx, y: R.y + R.h + gap, ok: R.y + R.h + gap + h <= vh - g },
      above: { x: cx, y: R.y - gap - h, ok: R.y - gap - h >= g }
    };
    var order = R.w > vw * 0.42 && R.h < vh * 0.5 ? ['below', 'above', 'right', 'left'] : ['right', 'left', 'below', 'above'];
    for (var i = 0; i < order.length; i++) { var c = C[order[i]]; if (c.ok) return { x: c.x, y: c.y, w: w, pt: order[i], ay: clamp(R.y + R.h / 2 - c.y, 20, h - 20), ax: clamp(R.x + R.w / 2 - c.x, 20, w - 20) }; }
    return { x: vw - w - g, y: vh - h - g, w: w, pt: '' };
  }
  function place() {
    if (!L.on || !lay) return;
    var away = !!(API.walkOn && API.walkOn());
    lay.classList.toggle('is-away', away);
    var m = L.mode, s = L.st;
    if (m === 'pill') {
      var sh = document.getElementById('sheet');
      pill.hidden = API.fy().open || (sh && !sh.hidden) || away || !!T().pillOff;
      /* above the tab bar on a phone, above Freya's bar on a desktop */
      var tb = document.getElementById('tabbar');
      if (layout() === 'phone' && tb && API.shown(tb)) { var dk = tb.querySelector('.tb-disc'), top = Math.min(tb.getBoundingClientRect().top, dk ? dk.getBoundingClientRect().top : Infinity); pill.style.left = (document.documentElement.clientWidth / 2) + 'px'; pill.style.top = (top - pill.offsetHeight - px('--space-2')) + 'px'; }
      else { var D0 = API.dock(); pill.style.left = (D0.x + D0.w / 2) + 'px'; pill.style.top = (D0.foot - pill.offsetHeight) + 'px'; }
      clearSpot(); return;
    }
    if (m === 'wait' && L.wait && performance.now() - L.waitT > 1600) { L.wait = null; draw(); return; }
    /* the part: found again whenever the page is drawn again, and every frame while a tap waits
       (on a phone the menu opens, and the key it holds takes over from the menu key) */
    var el = null;
    if (s && s.spot && m !== 'wait' && m !== 'modal' && !fullScreen(m)) {
      if (m === 'tap' || !L.spot || !L.spot.isConnected) {
        var f = findSpot(s);
        if (f.el !== L.spot) { L.spot = f.el; L.cut = false; if (f.el) revealX(f.el); if (f.i !== L.spotI && L.spotI !== -1 && performance.now() - L.intoT > 600) { L.intoT = performance.now(); requestAnimationFrame(into); } }
        L.spotI = f.i;
      }
      el = L.spot;
    }
    var shown = !!(el && API.shown(el)), vh = window.innerHeight, g = px('--space-4');
    if (shown && !L.cut && s.spot.piece && !API.held(el)) {
      var hmax = vh - 2 * g - (layout() === 'phone' || (m === 'side' && !L.side) || m === 'free' || wideCoach() ? card.offsetHeight + g : 0);
      if (el.getBoundingClientRect().height > hmax) L.cut = true;
    }
    var R = shown ? rectOf(s, el) : null;
    if (R && wideCoach() && !API.held(el)) { var bot = vh - card.offsetHeight - 2 * g - 4; if (R.y + R.h > bot) R.h = Math.max(g, bot - R.y); }
    /* the card */
    if (m === 'free') {
      var P = compactPos(), D1 = API.dock();
      card.classList.toggle('is-compact', !!P);
      if (P) { card.style.width = P.w.toFixed(1) + 'px'; card.style.left = P.x.toFixed(1) + 'px'; card.style.top = P.y.toFixed(1) + 'px'; }
      else {
        if (!(Math.abs(parseFloat(card.style.width) - D1.w) <= 0.5)) card.style.width = D1.w.toFixed(1) + 'px';
        card.style.left = D1.x.toFixed(1) + 'px'; card.style.top = Math.max(px('--space-3'), D1.foot - card.offsetHeight).toFixed(1) + 'px';
      }
      footRoom(P ? 0 : card.offsetHeight + px('--space-3'));
    } else if (m === 'coach' || m === 'tap') {
      var Q = coachPos(R, el);
      card.style.width = Q.w.toFixed(1) + 'px'; card.style.left = Q.x.toFixed(1) + 'px'; card.style.top = Q.y.toFixed(1) + 'px';
      if (Q.pt) { card.setAttribute('data-pt', Q.pt); card.style.setProperty('--tq-ay', Q.ay.toFixed(1) + 'px'); card.style.setProperty('--tq-ax', Q.ax.toFixed(1) + 'px'); } else card.removeAttribute('data-pt');
    }
    litMark(R && (m === 'coach' || m === 'side') ? el : null);
    /* on a phone a coach card at the foot leaves the page room to scroll the part above it */
    if ((m === 'coach' || m === 'tap') && layout() === 'phone') footRoom(card.offsetHeight + px('--space-4'));
    if (!R) { clearSpot(); return; }
    /* what is lit stays clear of a card that sits across the page */
    var room = roomOf();
    if (!API.held(el) && (m === 'free' || (m === 'side' && !L.side) || layout() === 'phone')) {
      if (R.y + R.h > room.b - g / 2) R.h = Math.max(g, room.b - g / 2 - R.y);
      if (R.y < room.t + g / 2) { var cutTop = room.t + g / 2 - R.y; R.y += cutTop; R.h = Math.max(g, R.h - cutTop); }
    }
    lay.style.setProperty('--walk-x', R.x.toFixed(1) + 'px'); lay.style.setProperty('--walk-y', (R.y + window.scrollY).toFixed(1) + 'px');
    lay.style.setProperty('--walk-sy', window.scrollY.toFixed(1) + 'px');
    lay.style.setProperty('--walk-w', R.w.toFixed(1) + 'px'); lay.style.setProperty('--walk-h', R.h.toFixed(1) + 'px');
    if (L.cut) lay.style.removeProperty('--walk-r'); else lay.style.setProperty('--walk-r', getComputedStyle(el).borderTopLeftRadius);
    lay.setAttribute('data-walk-at', s.id);
  }
  /* a key in a row that scrolls sideways (a phone's page keys) is brought into the row's view */
  function revealX(el) {
    for (var n = el.parentElement; n && n !== document.body; n = n.parentElement) {
      if (n.scrollWidth > n.clientWidth + 1 && /(auto|scroll)/.test(getComputedStyle(n).overflowX)) {
        var a = el.getBoundingClientRect(), b = n.getBoundingClientRect();
        if (a.left < b.left || a.right > b.right) n.scrollTo({ left: n.scrollLeft + (a.left + a.width / 2) - (b.left + b.width / 2), behavior: RM.matches ? 'auto' : 'smooth' });
        return;
      }
    }
  }
  function clearSpot() { ['x', 'y', 'w', 'h', 'r', 'sy'].forEach(function (k) { lay.style.removeProperty('--walk-' + k); }); lay.removeAttribute('data-walk-at'); }
  /* the part glides into view: centred in the room it has when it fits, else from its top */
  function into() {
    var s = L.st; if (!s || !s.spot || fullScreen(L.mode)) return;
    var el = L.spot || (L.spot = findSpot(s).el); if (!el || API.held(el)) return;
    var room = roomOf(), g = px('--space-4'), t = room.t + g, b = room.b - g, R = rectOf(s, el);
    if (R.y >= t && R.y + R.h <= b) return;
    var off = R.h <= b - t ? R.y - t - (b - t - R.h) / 2 : R.y - t, max = document.documentElement.scrollHeight - window.innerHeight,
      y = clamp(window.scrollY + off, 0, Math.max(0, max));
    if (Math.abs(y - window.scrollY) > 1) API.glide(y);
  }
  function tick() {
    if (!L.on) return;
    place();
    var s = L.st;
    if (s && s.watch && L.mode === 'free') { var n = s.watch(); if (n) go(n); }
    if (s && s.until && L.mode === 'tap' && s.until()) { setTimeout(advance, 0); L.mode = 'wait-tap'; }
    requestAnimationFrame(tick);
  }

  /* ── Freya's side: her chips and her preview answers, from this household's record ─────── */
  function src() { return 'Entered by you · ' + A.date(TODAY); }
  function pictureAnswer() {
    var s = S(), t = A.totals(), own = s.assets.slice().sort(function (a, b) { return A.amount(b.id) - A.amount(a.id); }), owe = s.liabilities.filter(function (l) { return l.kind !== 'commitment'; });
    if (!own.length && !owe.length) return 'Nothing is recorded yet, so there is nothing for me to answer from. Add what you have in Records and I will answer from it, with the source of every figure.';
    var lines = [];
    if (own.length) lines.push('· You own ' + M(t.owned) + ': ' + list(own.slice(0, 3).map(function (a) { return a.name + ' ' + M(A.amount(a.id)); })) + (own.length > 3 ? ', and ' + words(own.length - 3) + ' more' : '') + ' [' + src() + ']');
    lines.push(owe.length ? '· You owe ' + M(t.owed) + ': ' + list(owe.map(function (l) { return l.name + ' ' + M(A.amount(l.id)); })) + ' [' + src() + ']' : '· You owe nothing in the record [Records · What you owe]');
    lines.push('· Your net worth is ' + M(t.net) + ' [computed from the record]');
    var look;
    if (!A.policy()) look = 'no rule yet says how much cash must stay reachable. You have ' + M(A.reachableCash()) + ' in cash today. ' + (D().id ?
      'Your rules start from your Financial Identity, ' + D().id.title.replace(/^The /, 'the ') + ', and the Governance desk writes them' :
      'A household’s rules start with its Financial Identity: what the money is for, and how long it can wait. It is the first thing on Learn, in four answers');
    else if (S().cover.every(function (c) { return c.type !== 'Life'; }) && (couple() || kids().length)) look = (couple() ? 'two adults' : 'your children') + ' rely on the household, and no life cover is in the record';
    else if (S().will.exists !== 'Yes') look = 'no will is in the record yet';
    else look = 'every figure is rough and dated today. A statement for the largest, ' + (own[0] ? own[0].name : 'your largest line') + ', would make it exact';
    return 'Here is your household today, from what you entered:\n\n' + lines.join('\n') + '\n\nWorth a look first: ' + look + ' [computed from the record]. What to do about it is yours to decide.';
  }
  function answer(q) {
    var s = S(), ql = String(q || '').toLowerCase();
    if (/\b(buy|sell|switch|invest in|which fund|recommend)\b|should (we|i) (buy|sell|invest|move|switch|put)/.test(ql)) return 'That is your decision, and I will not make it for you. What I can do is lay out what the record shows and which of your own rules applies. Ask me what you own and owe, and I will start there.';
    if (/\btax/.test(ql)) return 'Tax is outside what Finna does, so I will not structure or advise on it. Your CPA is the person for it, and you can add them to the adviser register in Records.';
    if (/(\binvest|\bhold|\bfees?\b|\bcosts?\b|portfolio|\bfunds?\b)/.test(ql)) {
      var inv = s.assets.filter(function (a) { return A.isInvestable(a) && a.cls !== 'cash'; }), cash = s.assets.filter(function (a) { return a.cls === 'cash'; });
      if (!inv.length) return 'No investments are in the record yet. They go in Investment · What you hold, one account at a time [Investment].';
      var fees = inv.filter(function (a) { return a.fee != null; }), sum = inv.reduce(function (x, a) { return x + A.amount(a.id); }, 0);
      return 'What you hold, from your record:\n\n' + inv.map(function (a) { return '· ' + a.name + ' ' + M(A.amount(a.id)) + ' [' + src() + ']'; }).join('\n') +
        '\n· Invested in all: ' + M(sum) + (cash.length ? ', with ' + M(cash.reduce(function (x, a) { return x + A.amount(a.id); }, 0)) + ' in savings beside it' : '') + ' [computed from the record]' +
        '\n\n' + (fees.length ? 'Fees are recorded on ' + words(fees.length) + ' of them [Investment · Fees].' : 'The single holdings inside each one come later, when your accounts are linked.') +
        ' I show what you hold and how it’s spread. What to buy or sell stays your decision.';
    }
    if (/(insur|cover|protect)/.test(ql)) return s.cover.length ? 'The cover in your record:\n\n' + s.cover.map(function (c) { return '· ' + c.type + (c.sum ? ', ' + M(c.sum) : c.monthly ? ', ' + M(c.monthly) + ' a month' : '') + ' [' + src() + ']'; }).join('\n') + (gaps().length ? '\n\nNot in the record: ' + list(gaps()) + ' [Protection]. Whether you need them is your decision.' : '') : 'No insurance is in the record yet. It goes in Protection, one policy at a time [Protection · Cover].';
    if (/(will|succession|inherit|executor)/.test(ql)) return s.will.exists === 'Yes' ? 'Your will is recorded, with the original at ' + s.will.original + ' [Will record · Succession].' : s.will.exists === 'No' ? 'The record says there is no will yet [Will record · Succession]. Who it would name is a question for a lawyer.' : 'No will is recorded yet. It goes in Succession, with where the original is [Succession · The will].';
    if (/(goal|plan|retire)/.test(ql)) { var g = theGoal(); return g ? '· ' + g.name + ': ' + M(A.goalProgress(g).have) + ' of ' + M(g.amount) + ' linked today, by ' + A.date(g.date) + ', a ' + g.priority + ' [computed from the record]\n\nI do not forecast. Wealth planning shows the plain arithmetic of what you set aside.' : 'No goal is recorded yet. Add one on Wealth planning, with an amount, a date and a priority.'; }
    if (/(rule|policy|range|drift|floor|limit)/.test(ql)) { var p = A.policy(); return p ? 'Your rules, version 1 from ' + A.date(p.effective) + ': at least ' + M(p.liquidityMin) + ' of cash always reachable, and a range for each class [Governance · Your rules]. ' + (A.drift().some(function (x) { return x.out; }) ? 'One class is outside its range today [Governance · Drift].' : 'Everything is inside its range today [Governance · Drift].') : 'No rules are written yet. The first one is how much cash must always be reachable [Governance · Your rules].'; }
    if (/(learn|next|quest)/.test(ql)) { var lp = A.nextPath(); return lp ? lp.title + ' is open, ' + lp.quests + ' quests, about ' + lp.minutes + ' minutes. I suggest one path at a time, from your record.' : 'Every path open to you is done. More appear on the Map as you go.'; }
    if (/(not (in|recorded)|missing|yet)/.test(ql)) return 'Not in your record yet:\n\n' + [!s.cover.length ? '· your insurance [Protection]' : '', !A.policy() ? '· your rules [Governance]' : '', !s.goals.length ? '· a goal [Wealth planning]' : '', s.will.exists !== 'Yes' ? '· a will [Succession]' : '', !s.documents.length ? '· any statement or policy [Family Vault]' : ''].filter(Boolean).join('\n') + '\n\nEach one is a step in the tutorial, or one question on its desk.';
    return pictureAnswer();
  }
  function fyChips(route) {
    var base = String(route || 'home').split('.')[0], w = we('we', 'I'), o = we('our', 'my');
    var C = { home: [theQ(), 'What is not in ' + o + ' record yet?'], records: ['What do ' + w + ' own and owe?', 'What is not in ' + o + ' record yet?'], policy: ['What do ' + o + ' rules say?', 'How is ' + o + ' goal doing?'],
      investment: ['What do ' + w + ' hold, and how is it spread?', 'What do ' + w + ' own and owe?'], protection: ['What cover is in ' + o + ' record?'], succession: ['What does the record say about a will?'], learn: ['What should I learn next?'], vault: ['What is not in ' + o + ' record yet?'] };
    return C[base] || C.home;
  }

  /* A QUEST ON LEARN, IN THE HOUSEHOLD'S OWN WORDS (A.learnQ): the quests the tutorial once asked in
     its card (QX), and The First Picture's first, asked on what they entered. The right answer stays
     first, as in learn.js. Nothing is returned when the quest would read on a part not in the record. */
  function fp1() {
    var bank = String(D().bank || '').trim();
    return { q: 'Which of these could you turn into cash soonest?',
      o: [line('cash') ? 'Your savings' + (bank ? ' at ' + bank : '') : 'Money in a savings account', line('inv-shares') ? 'Your shares and funds' : 'Shares in a brokerage account',
        line('home') ? 'Your home' : 'A home', line('inv-pe') ? 'Your private equity' : line('inv-vc') ? 'Your venture capital' : 'A stake in a private fund'],
      why: OWHY, hint: 'Ask what has to be sold first, and how long selling takes.' };
  }
  function learnWords(pid, n) {
    if (!S().members[0].name) return null;
    if (pid === 'first-picture' && n === 1) return fp1();
    var o = QX[pid + '.' + n]; if (!o) return null;
    try { if (o.when && !o.when()) return null; return { q: o.q(), o: o.o(), why: o.why(), hint: o.hint }; } catch (x) { return null; }
  }

  /* ── the hooks app.js calls ──────────────────────────────────────────────────────────── */
  window.FT = {
    onRender: function () {
      if (!L.on) return;
      L.spot = null; L.cut = false;
      if (L.wait && here(L.wait)) { L.wait = null; setTimeout(function () { if (L.on && L.mode === 'wait') draw(); }, 160); return; }
      var s = L.st; if (s && s.refreshOnRender && L.mode !== 'pill') s.refreshOnRender();
    },
    chips: function (route) { return fyChips(route); },
    answer: function (q) { return answer(q); },
    state: function () { return { step: T().step, stage: cur().stage, paused: T().paused, done: T().done, xp: T().xp }; },
    go: function (id) { if (BY[id]) go(id); },
    from: function (n) { from(+n); },
    profile: function () { return profileCard(); },
    resume: function () { if (T().done || !L.on) return; if (T().paused) resume(); else show(); },
    quest: function (pid, n) { return learnWords(pid, +n); },
    /* the key under a quest the tutorial set, once answered: null keeps the page's own (its Next quest is the tutorial's next
       step too); otherwise the page's key carries the tutorial on, in the tutorial's words (app.js lxAfter, 'tq-next') */
    afterKey: function (pid, n) {
      if (!L.on || T().paused) return null;
      var s = cur(); if (!s || s.pid !== pid || s.qn !== +n) return null;
      var nx = nextOf(s.id), p = A.learnPath(pid), nat = p.nextQ && p.state !== 'done' ? '/learn/path/' + pid + '/quest/' + p.nextQ : '';
      if (nx && nx.at && nat && nx.at === nat) return null;
      return { label: nx && nx.badge ? (p.cert ? 'See the certificate' : 'See the badge') : s.goLabel || 'Continue' };
    },
    next: function () { if (!L.on) return; var s = cur(); L.lqId = null; var r = s.go ? s.go() : true; if (r === false) return; if (typeof r === 'string') go(r); else advance(); },
    startDesk: function (k) { if (T().done || !lay) return false; var n = stageOf(k); if (!n) return false; layerOn(); startStage(n); return true; }
  };
  /* Open now, from a desk's page, the Desks page or Office: that desk's stage runs, and the order of the rest stays.
     In the middle of a stage the desk only opens; the stage carries on */
  window.addEventListener('finna:desk-open', function (ev) {
    var k = ev.detail && ev.detail.desk; if (!k || k === 'all' || T().done || !L.on) return;
    var s = cur(); if (!(T().paused || s.done || s.id === 'r-hi')) return;
    var n = stageOf(k); if (n) setTimeout(function () { startStage(n); }, 0);
  });
  /* a page drawn before this file ran has no card yet: Profile opened straight from a link */
  if (/^#\/profile\/?$/.test(location.hash)) API.render();

  /* ── the first moment ────────────────────────────────────────────────────────────────── */
  function boot() {
    build();
    var t = T();
    /* opened from the demo's Profile (3 Oct 2026): &from=n starts again at desk n, &resume goes
       straight back in. Taken once, then dropped from the address so a reload is a plain one */
    var q = location.search, fm = /[?&]from=(\d)/.exec(q), rs = /[?&]resume\b/.test(q);
    if (fm || rs) {
      history.replaceState(null, '', location.pathname + q.replace(/&(from=\d|resume\b)/g, '') + location.hash);
      if (fm && S().members[0].name && +fm[1] >= 1 && +fm[1] <= NS) { from(+fm[1]); return; }
      if (rs && !t.done && S().members[0].name && inPlay(t.step)) { resume(); return; }
    }
    if (t.done) return;
    if (!S().members[0].name) { t.step = 'hello'; show(); return; }
    if (t.paused) { L.st = cur(); layerOn(); setMode('pill'); return; }
    if (!inPlay(t.step)) { var f0 = firstOf(1); t.step = f0 ? f0.id : 'hello'; A.save(); }
    if (t.step === 'hello' || t.step === 'map') { show(); return; }
    /* a reload in the middle: say where it stands, and offer the way on */
    L.st = cur(); layerOn();
    var s = cur();
    card.className = 'walk-card tq-card is-modal';
    card.setAttribute('aria-modal', 'true');
    card.innerHTML = head(s) + '<div class="tq-scroll"><div class="walk-say"><p class="eyebrow wg-eb">The tutorial</p><h2 class="walk-title" id="tq-title" tabindex="-1">Welcome back, ' + e(first()) + '.</h2>' +
      '<p class="walk-line">You’re at ' + e(STAGES[s.stage || 1].t) + ', desk ' + (s.stage || 1) + ' of ' + NS + '. Everything you entered is where you left it.</p></div>' +
      '<div class="tq-body">' + mapHTML(s.stage || 1) + '</div></div>' +
      '<div class="walk-keys tq-keys"><span class="tq-left"><button class="link" type="button" data-tq="later">Later</button><button class="link" type="button" data-tq="restart">Start over</button></span>' +
      '<button class="key" type="button" data-tq="continue">Pick up where I left off</button></div>';
    setMode('modal');
    var k = card.querySelector('[data-tq="continue"]'); if (k) k.focus({ preventScroll: true });
  }
  requestAnimationFrame(boot);
})();
