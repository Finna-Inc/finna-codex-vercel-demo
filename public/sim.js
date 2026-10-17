/* ═══ FINNA SIMULATION ENGINE · FinnaSim · 28 Sep 2026 ════════════════════════════════════
   The engine behind the what-if tools (Retirement runway, Mix lab, the Set-aside planner, Cash
   runway, The cost of waiting). Pure functions: no DOM, no network, no storage. app.js reads it
   as A.sim and every tool screen calls it; nothing else in the platform computes a forecast.
   Assumptions are data, dated and sourced, and shown on Policy › How the numbers work.
   Built and checked in the simulation tools plan (Claude outputs/finna-simulation-tools.html);
   selfTest() runs the checks the engine must pass before it ships.
   Mixes are in percentage points: {shares, bonds, cash, private, re, infra}. */
(function (root) {
  'use strict';
  const ASOF = {
    cma: 'J.P. Morgan Asset Management 2026 Long-Term Capital Market Assumptions (USD, 10 to 15 years, data to 30 Sep 2025)',
    history: 'Calendar years 1996 to 2025',
    used: 'J.P. Morgan’s compound returns, except Finna’s own for private equity; volatility as reported for the private markets'
  };
  /* J.P. Morgan's published figures: [compound, arithmetic, volatility] in %. Shares are AC World; infrastructure is global core */
  const CMA = { shares:[7.00,8.28,16.78], bonds:[4.80,4.91,4.76], cash:[3.10,3.10,0.67],
                pe:[10.20,11.91,19.78], pc:[7.70,8.59,14.01], re:[8.20,8.79,11.39], infra:[6.50,6.99,10.25] };
  const KEYS = ['shares','bonds','cash','pe','pc','re','infra'];
  /* where Finna departs from J.P. Morgan. Private equity: the funds Finna's members reach. The private markets' volatility:
     as reported. They are valued quarterly from appraisals, which smooths them, so it is measured on the thirty calendar years below */
  const FINNA = {
    pe: { compound: 15.50, why: 'Finna’s assumption for the private equity funds its members reach: 40 funds with 25 managers, 4.2 years’ average life, 16.4% a year after fees; 15.5% is the conservative figure' },
    reported: ['pe', 'pc', 're', 'infra']
  };
  /* correlations: Finna placeholders until a licensed matrix is loaded; infrastructure's row from J.P. Morgan's 2026 matrix */
  const CORR = [[1,.30,0,.80,.60,.55,.55],[.30,1,.20,.15,.20,.25,.06],[0,.20,1,0,0,0,0],[.80,.15,0,1,.60,.50,.62],[.60,.20,0,.60,1,.40,.40],[.55,.25,0,.50,.40,1,.29],[.55,.06,0,.62,.40,.29,1]];
  const INFL = 0.025;
  /* thirty calendar years of total returns, in %, 1996 → 2025 */
  const HISTORY = {
    from: 1996, to: 2025,
    shares: [22.96,33.36,28.58,21.04,-9.10,-11.89,-22.10,28.68,10.88,4.91,15.79,5.49,-37.00,26.46,15.06,2.11,16.00,32.39,13.69,1.38,11.96,21.83,-4.38,31.49,18.40,28.71,-18.11,26.29,25.02,17.88],
    bonds:  [3.63,9.65,8.69,-0.82,11.63,8.44,10.26,4.10,4.34,2.43,4.33,6.97,5.24,5.93,6.54,7.84,4.21,-2.02,5.97,0.55,2.65,3.54,0.01,8.72,7.51,-1.54,-13.01,5.53,1.25,7.30],
    cash:   [5.15,5.20,4.91,4.78,6.00,3.48,1.64,1.03,1.40,3.22,4.85,4.48,1.40,0.15,0.14,0.05,0.09,0.06,0.03,0.05,0.32,0.95,1.97,2.11,0.36,0.04,2.09,5.28,5.18,4.21],
    pe:     [28.28,30.79,15.35,42.39,5.03,-11.58,-7.49,22.67,25.09,28.54,28.44,18.67,-23.37,13.52,21.84,11.26,13.40,21.10,11.33,5.76,12.89,19.5,12.7,18.6,27.8,41.31,-4.34,9.31,8.1,8.7],
    pc:     [5.28,7.59,5.25,3.65,4.99,4.18,1.91,9.97,5.17,10.10,13.70,10.23,-6.50,13.18,15.79,9.75,14.03,12.68,9.57,5.54,11.24,8.62,8.07,9.00,5.45,12.78,6.29,12.13,8.95,9.3],
    re:     [10.53,13.94,15.29,12.05,13.19,4.64,4.57,8.28,12.00,20.15,15.27,14.84,-10.70,-30.40,15.26,14.96,9.79,12.90,11.46,13.95,7.79,6.66,7.36,4.39,0.34,21.02,6.55,-12.73,-2.27,2.92],
    /* no unlisted series runs back to 1996: 2014 → 2025 unlisted core, 1996 → 2013 listed utilities scaled to unlisted volatility */
    infra:  scaled([7.16,21.43,18.37,-3.34,21.96,-13.07,-28.8,26.5,23.6,16.4,20.9,18.4,-28.9,11.7,5.3,19.6,0,13.1], 8.81)
              .concat([31.65,9.27,9.12,8.47,8.25,12.25,3.28,9.88,4.62,16.81,9.22,4.40]),
    series: {
      shares: 'S&P 500, total return with dividends',
      bonds: 'Bloomberg US Aggregate Bond Index',
      cash: '3-month Treasury bill, average yield in the year',
      pe: 'Cambridge Associates US Private Equity Index, net to investors (buyout and growth equity only from 2017)',
      pc: 'Cliffwater Direct Lending Index from 2005; Morningstar LSTA US Leveraged Loan Index 1997–2004',
      re: 'NCREIF NFI-ODCE (core private real estate), net of fees',
      infra: 'infraMetrics infra100 Core (Scientific Infra & Private Assets, formerly EDHECinfra): unlisted core infrastructure, local currency, gross of fees, from 2014 (back-tested before its 2019 launch)'
    },
    standIns: { pc: { 1996: 'Baa corporate bonds: no loan index before 1997', 2024: 'LSTA leveraged loans: the CDLI 2024 figure was not verified' },
                infra: { '1996–2013': 'US listed utilities (the Utilities Select Sector SPDR, XLU, from 1999; the Dow Jones Utility Average plus an estimated 4 points of dividends before), scaled around their mean to the 8.8% reported volatility of Cambridge Associates’ infrastructure index' } }
  };
  /* a stand-in's years scaled around their mean to a target volatility */
  function scaled(a, sd) { const m = a.reduce((x, y) => x + y, 0) / a.length, s = Math.sqrt(a.reduce((x, y) => x + (y - m) ** 2, 0) / (a.length - 1)); return a.map(v => Math.round((m + (v - m) * sd / s) * 100) / 100); }
  function sdOf(a) { const m = a.reduce((x, y) => x + y, 0) / a.length; return Math.sqrt(a.reduce((x, y) => x + (y - m) ** 2, 0) / (a.length - 1)); }
  /* the arithmetic mean that gives a compound return at a volatility, the way J.P. Morgan relates the two (log-normal) */
  function arithOf(g, s) { const G = (1 + g / 100) ** 2, v = (s / 100) ** 2, A = (G + Math.sqrt(G * G + 4 * G * v)) / 2; return (Math.sqrt(A) - 1) * 100; }
  /* the figures the tools use: [compound, arithmetic, volatility] in % */
  const USED = {};
  KEYS.forEach(k => { const g = k === 'pe' ? FINNA.pe.compound : CMA[k][0], vol = FINNA.reported.includes(k) ? sdOf(HISTORY[k]) : CMA[k][2];
    USED[k] = [g, vol === CMA[k][2] && g === CMA[k][0] ? CMA[k][1] : arithOf(g, vol), vol]; });

  /* ── mixes ─────────────────────────────────────────────────────────── */
  function total(mix) { return (mix.shares || 0) + (mix.bonds || 0) + (mix.cash || 0) + (mix.private || 0) + (mix.re || 0) + (mix.infra || 0); }
  function weights(mix, peShare) {
    const pe = peShare == null ? 0.7 : peShare, t = total(mix) || 1, w = k => (mix[k] || 0) / t;
    return { shares: w('shares'), bonds: w('bonds'), cash: w('cash'), pe: w('private') * pe, pc: w('private') * (1 - pe), re: w('re'), infra: w('infra') };
  }
  /* expected return and volatility of a mix rebalanced once a year; mu and sl are the log-normal parameters */
  function stats(mix, peShare) {
    const w = weights(mix, peShare); let a = 0, v = 0;
    KEYS.forEach((x, i) => { a += w[x] * USED[x][1] / 100; KEYS.forEach((y, j) => { v += w[x] * w[y] * USED[x][2] / 100 * USED[y][2] / 100 * CORR[i][j]; }); });
    const s2 = Math.log(1 + v / ((1 + a) ** 2)), mu = Math.log(1 + a) - s2 / 2;
    return { arith: a, vol: Math.sqrt(v), mu, sl: Math.sqrt(s2), geo: Math.exp(mu) - 1 };
  }
  const Z10 = 1.2815516;
  /* the 1-in-10 low, the middle and the 1-in-10 high after `years`, nothing added or taken out */
  function mixRange(mix, years, amount, peShare) {
    const s = stats(mix, peShare), a = years * s.mu, b = Math.sqrt(years) * s.sl;
    return { lo: amount * Math.exp(a - Z10 * b), mid: amount * Math.exp(a), hi: amount * Math.exp(a + Z10 * b), stats: s };
  }
  /* the mix through the last 30 calendar years: each year's return, the worst year, when it was back */
  function mixHistory(mix, peShare) {
    const w = weights(mix, peShare), H = HISTORY, n = H.to - H.from + 1, years = [], ret = [];
    for (let i = 0; i < n; i++) { years.push(H.from + i); let r = 0; KEYS.forEach(k => { r += w[k] * H[k][i] / 100; }); ret.push(r); }
    let wi = 0; ret.forEach((r, i) => { if (r < ret[wi]) wi = i; });
    let v = 1, back = null; for (let i = wi; i < n; i++) { v *= 1 + ret[i]; if (i > wi && v >= 1) { back = years[i]; break; } }
    let peak = 1, val = 1, dd = 0, from = null, to = null, pk = H.from - 1;
    ret.forEach((r, i) => { val *= 1 + r; if (val > peak) { peak = val; pk = years[i]; } const d = val / peak - 1; if (d < dd) { dd = d; from = pk; to = years[i]; } });
    return { years, ret, worst: { year: years[wi], ret: ret[wi], back }, drawdown: { depth: dd, from, to } };
  }


  /* ── the track record, month by month, January 1996 → December 2025 ─── */
  /* shares, bonds and cash are monthly; the private markets are quarterly, each quarter spread evenly over its months;
     infrastructure is by calendar year only, each year spread evenly over its months */
  const MONTHLY = {
    from: [1996, 1], n: 360,
    shares: [3.4,0.93,0.96,1.47,2.58,0.38,-4.42,2.11,5.63,2.76,7.56,-1.98,6.25,0.78,-4.11,5.97,6.09,4.48,7.96,-5.6,5.48,-3.34,4.63,1.72,1.11,7.21,5.12,1.01,-1.72,4.06,-1.06,-14.46,6.41,8.13,6.06,5.76,4.18,-3.11,4,3.87,-2.36,5.55,-3.12,-0.49,-2.74,6.33,2.03,5.89,-5.02,-1.89,9.78,-3.01,-2.05,2.47,-1.56,6.21,-5.28,-0.42,-7.88,0.49,3.55,-9.12,-6.34,7.77,0.67,-2.43,-0.98,-6.26,-8.08,1.91,7.67,0.88,-1.46,-1.93,3.76,-6.06,-0.74,-7.12,-7.8,0.66,-10.87,8.8,5.89,-5.87,-2.62,-1.5,0.97,8.24,5.27,1.28,1.76,1.95,-1.06,5.66,0.88,5.24,1.84,1.39,-1.51,-1.57,1.37,1.95,-3.31,0.4,1.08,1.53,4.05,3.4,-2.44,2.1,-1.77,-1.9,3.18,0.14,3.72,-0.91,0.81,-1.67,3.78,0.04,2.65,0.27,1.24,1.34,-2.88,0.14,0.62,2.38,2.58,3.26,1.9,1.4,1.51,-1.96,1.12,4.43,3.49,-1.66,-3.1,1.5,3.74,1.59,-4.18,-0.69,-6,-3.25,-0.43,4.87,1.3,-8.43,-0.84,1.45,-8.91,-16.8,-7.18,1.06,-8.43,-10.65,8.76,9.57,5.59,0.2,7.56,3.61,3.73,-1.86,6,1.93,-3.6,3.1,6.03,1.58,-7.99,-5.23,7.01,-4.51,8.92,3.81,0.01,6.68,2.37,3.43,0.04,2.96,-1.13,-1.67,-2.03,-5.43,-7.03,10.93,-0.22,1.02,4.48,4.32,3.29,-0.63,-6.01,4.12,1.39,2.25,2.58,-1.85,0.58,0.91,5.18,1.36,3.75,1.93,2.34,-1.34,5.09,-2.9,3.14,4.6,3.05,2.53,-3.46,4.57,0.84,0.74,2.35,2.07,-1.38,4,-1.4,2.44,2.69,-0.25,-3,5.75,-1.58,0.96,1.29,-1.94,2.1,-6.03,-2.47,8.44,0.3,-1.58,-4.96,-0.13,6.78,0.39,1.8,0.26,3.69,0.14,0.02,-1.82,3.7,1.98,1.9,3.97,0.12,1.03,1.41,0.62,2.06,0.31,2.06,2.33,3.07,1.11,5.73,-3.69,-2.54,0.38,2.41,0.62,3.72,3.26,0.57,-6.83,2.04,-9.03,8.01,3.21,1.94,4.05,-6.35,7.05,1.44,-1.58,1.87,2.17,3.63,3.02,-0.04,-8.23,-12.35,12.82,4.76,1.99,5.64,7.19,-3.8,-2.66,10.95,3.84,-1.01,2.76,4.38,5.34,0.7,2.33,2.38,3.04,-4.65,7.01,-0.69,4.48,-5.17,-2.99,3.71,-8.72,0.18,-8.25,9.22,-4.08,-9.21,8.1,5.59,-5.76,6.28,-2.44,3.67,1.56,0.43,6.61,3.21,-1.59,-4.77,-2.1,9.13,4.54,1.68,5.34,3.22,-4.08,4.96,3.59,1.22,2.43,2.14,-0.91,5.87,-2.38,2.78,-1.3,-5.63,-0.68,6.29,5.09,2.24,2.03,3.65,2.34,0.25,0.06],
    bonds: [0.63,-1.76,-0.77,-0.49,-0.17,1.27,0.25,-0.16,1.7,2.21,1.76,-0.85,0.25,0.11,-0.97,1.49,0.87,1.16,2.8,-0.85,1.45,1.45,0.33,1.04,1.32,-0.1,0.33,0.51,1.02,0.81,0.23,1.9,1.96,-0.55,0.49,0.38,0.79,-1.77,0.56,0.4,-0.88,-0.5,-0.39,-0.08,1.26,0.33,0.02,-0.48,-0.17,1.18,1.4,-0.49,-0.16,2.15,0.88,1.4,0.76,0.57,1.58,1.79,1.76,0.91,0.54,-0.46,0.73,0.52,2.23,1.11,0.89,1.86,-1.34,-0.58,0.69,0.85,-1.46,1.69,0.8,0.29,0.48,1.66,1.53,-0.61,0.02,2.07,0.05,1.38,-0.13,0.87,1.82,-0.13,-3.34,0.61,2.71,-0.96,0.27,0.88,0.86,1.03,0.8,-2.61,-0.43,0.56,0.96,1.94,0.16,0.85,-0.81,0.92,0.65,-0.63,-0.49,1.35,1.05,0.55,-0.99,1.36,-1.1,-0.81,0.48,0.99,-0.11,0.37,-1,-0.21,-0.09,0.1,1.35,1.64,0.81,0.72,1.11,-0.48,-0.08,1.5,0.02,0.51,-0.78,-0.39,0.84,1.34,0.72,0.93,1.91,0.22,1.69,0.19,0.3,-0.3,-0.79,-0.01,0,0.7,-1.1,-2.53,3.64,3.32,-0.7,-0.42,1.48,0.36,0.85,0.54,1.43,1.01,1.19,0.41,1.36,-1.68,1.57,0.2,-0.08,1.06,0.87,1.61,0.94,1.48,-0.01,0.36,-0.57,-1.15,0.08,0.16,-0.01,1.32,1.3,-0.39,1.58,1.46,0.89,0.16,-0.3,1.08,0.87,-0.05,-0.58,1.14,0.95,0.04,1.39,0.03,0.11,0.11,0.19,-0.2,-0.71,0.54,0.08,0.91,-1.71,-1.65,0.2,-0.64,0.96,0.78,-0.35,-0.65,1.54,0.48,-0.15,0.77,1.05,0.11,-0.26,1.13,-0.72,0.94,0.65,0.09,2.31,-1.08,0.41,-0.36,-0.45,-1.01,0.76,-0.36,0.76,0.01,-0.27,-0.38,1.43,0.66,0.94,0.38,0.01,1.94,0.64,-0.17,-0.09,-0.81,-2.64,0.24,0.29,0.66,-0.07,0.76,0.67,0.01,0.39,0.85,-0.54,0.11,-0.17,0.44,-1.09,-1.03,0.63,-0.83,0.61,0.03,0.03,0.52,-0.54,-0.73,0.53,1.8,1.01,-0.06,1.96,0.04,1.83,1.15,0.23,2.78,-0.6,0.21,-0.06,-0.15,2.11,1.71,-0.59,1.69,0.54,0.7,1.55,-1.02,0.08,-0.61,1.11,0.15,-0.8,-1.51,-1.38,0.95,0.24,0.77,1.21,-0.2,-0.91,-0.03,0.33,-0.41,-2.17,-1.13,-2.82,-3.85,0.58,-1.5,2.31,-2.77,-4.18,-1.38,3.69,-0.61,3.19,-2.55,2.56,0.54,-1.09,-0.38,-0.06,-0.58,-2.49,-1.57,4.5,3.69,-0.24,-1.39,0.82,-2.44,1.7,0.93,2.31,1.33,1.31,-2.44,1.13,-1.76,0.63,2.08,0.01,0.42,-0.72,1.57,-0.3,1.16,1.04,0.63,0.62,-0.29],
    cashYield: [5,4.83,4.96,4.95,5.02,5.09,5.15,5.05,5.09,4.99,5.03,4.91,5.03,5.01,5.14,5.16,5.05,4.93,5.05,5.14,4.95,4.97,5.14,5.16,5.04,5.09,5.03,4.95,5,4.98,4.96,4.9,4.61,3.96,4.41,4.39,4.34,4.44,4.44,4.29,4.5,4.57,4.55,4.72,4.68,4.86,5.07,5.2,5.32,5.55,5.69,5.66,5.79,5.69,5.96,6.09,6,6.11,6.17,5.77,5.15,4.88,4.42,3.87,3.62,3.49,3.51,3.36,2.64,2.16,1.87,1.69,1.65,1.72,1.79,1.71,1.73,1.7,1.68,1.62,1.63,1.58,1.23,1.19,1.17,1.17,1.13,1.13,1.07,0.92,0.9,0.95,0.94,0.92,0.93,0.9,0.88,0.93,0.94,0.94,1.02,1.27,1.33,1.48,1.65,1.76,2.07,2.19,2.33,2.54,2.74,2.78,2.84,2.97,3.22,3.44,3.42,3.71,3.88,3.89,4.24,4.43,4.51,4.6,4.72,4.79,4.95,4.96,4.81,4.92,4.94,4.85,4.98,5.03,4.94,4.87,4.73,4.61,4.82,4.2,3.89,3.9,3.27,3,2.75,2.12,1.26,1.29,1.73,1.86,1.63,1.72,1.13,0.67,0.19,0.03,0.13,0.3,0.21,0.16,0.18,0.18,0.18,0.17,0.12,0.07,0.05,0.05,0.06,0.11,0.15,0.16,0.16,0.12,0.16,0.16,0.15,0.13,0.14,0.14,0.15,0.13,0.1,0.06,0.04,0.04,0.04,0.02,0.01,0.02,0.01,0.01,0.03,0.09,0.08,0.08,0.09,0.09,0.1,0.1,0.11,0.1,0.09,0.07,0.07,0.1,0.09,0.06,0.04,0.05,0.04,0.04,0.02,0.05,0.07,0.07,0.04,0.05,0.05,0.03,0.03,0.04,0.03,0.03,0.02,0.02,0.02,0.03,0.03,0.02,0.03,0.02,0.02,0.02,0.03,0.07,0.02,0.02,0.12,0.23,0.26,0.31,0.29,0.23,0.27,0.27,0.3,0.3,0.29,0.33,0.45,0.51,0.51,0.52,0.74,0.8,0.89,0.98,1.07,1.01,1.03,1.07,1.23,1.32,1.41,1.57,1.7,1.76,1.86,1.9,1.96,2.03,2.13,2.25,2.33,2.37,2.37,2.39,2.4,2.38,2.35,2.17,2.1,1.95,1.89,1.65,1.54,1.54,1.52,1.52,0.29,0.14,0.13,0.16,0.13,0.1,0.11,0.1,0.09,0.09,0.08,0.04,0.03,0.02,0.02,0.04,0.05,0.05,0.04,0.05,0.05,0.06,0.15,0.33,0.44,0.76,0.98,1.49,2.23,2.63,3.13,3.72,4.15,4.25,4.54,4.65,4.69,4.92,5.14,5.16,5.25,5.3,5.32,5.34,5.27,5.24,5.22,5.24,5.24,5.24,5.25,5.24,5.2,5.05,4.72,4.51,4.42,4.27,4.21,4.22,4.2,4.21,4.25,4.23,4.25,4.12,3.92,3.82,3.78,3.59],
    pe_q: [6.21,7.04,6.78,6.77,0.87,11.74,7.41,9.67,10.8,4.78,-6.91,8.33,4.39,10.68,3.51,19.5,13.82,-1.48,-0.14,-7,-6.48,3.11,-9.03,0.02,-0.66,-2.95,-5.03,-0.14,-0.36,7.18,5.55,9.61,3.07,3.46,2.15,15.15,0.64,8.32,7.45,7.9,5.77,3.54,3.56,12.55,5.63,7.78,1.06,2.83,-2.66,-0.25,-6.73,-16.71,-3.68,4.91,6.43,6.34,4.92,2.11,4.84,9.41,5.27,4.79,-4.48,4.99,5.62,0.24,4.1,3.81,4.91,3.5,5.79,7.58,3.31,4.94,1.61,3.26,3.36,4.56,-0.27,1.9,0.45,3.61,3.99,3.83,4.23,4.63,4.26,5.48,3.16,5.68,4.05,-1.23,5.59,4.61,2.2,5.01,-8.15,10.62,11.78,12.41,10.41,13.47,5.97,5.7,-0.35,-4.96,-0.26,0.9,2.69,2.76,0.58,2.97,1.75,1.6,2.53,2.01,1.14,2.78,2.13,2.32],
    pc_q: [1.2946,1.2946,1.2946,1.2946,1.8458,1.8458,1.8458,1.8458,1.2874,1.2874,1.2874,1.2874,0.9003,0.9003,0.9003,0.9003,1.2248,1.2248,1.2248,1.2248,1.029,1.029,1.029,1.029,0.4741,0.4741,0.4741,0.4741,2.4044,2.4044,2.4044,2.4044,1.2682,1.2682,1.2682,1.2682,1.9,2.37,2.68,2.78,2.89,3.5,3.52,3.14,3.74,4.12,0.95,1.1,-1.14,2.5,-1.12,-6.68,2.32,2.82,3.94,3.49,3.38,3.83,3.36,4.37,3.88,2.41,-0.18,3.35,3.97,2.45,3.74,3.19,3.2,2.62,3.13,3.18,2.9,2.81,2.42,1.12,2.45,2.46,0.82,-0.28,1.52,3.62,3.05,2.61,2.36,2,1.97,2.02,2.18,2.44,2.38,0.84,2.78,2.25,1.77,1.91,-4.84,3.25,3.53,3.67,3.24,3.96,2.68,2.34,1.76,0.53,1.82,2.04,2.69,2.81,3.17,2.95,3.02,2.63,2.65,2.57,2.14,2.34,2.41,2.22],
    infra_y: HISTORY.infra,
    re_q: [2.13,2.97,2.45,2.59,2.58,3.36,3.35,3.98,3.55,4.76,3.59,2.59,2.77,2.92,2.69,3.16,2.49,3.4,3.62,3.08,2.06,1.7,0.66,0.15,0.29,1.04,1.44,1.74,1.61,2.22,2.03,2.17,2.09,3.04,2.97,3.4,4.27,4.97,4.75,4.8,3.63,3.71,3.25,3.88,3.71,4.82,3.68,1.9,1.15,0.09,-0.85,-11.04,-13.89,-9.24,-7.52,-3.7,0.51,4.09,5.22,4.7,3.79,4.39,3.31,2.71,2.55,2.29,2.53,2.08,2.44,3.6,3.35,2.94,2.29,2.69,3,3.02,3.15,3.58,3.43,3.11,1.95,1.91,1.83,1.88,1.54,1.47,1.64,1.85,1.97,1.81,1.87,1.52,1.2,0.77,1.08,1.27,0.75,-1.75,0.27,1.1,1.89,3.68,6.41,7.66,7.14,4.54,0.31,-5.17,-3.38,-2.88,-2.1,-5,-2.58,-0.66,0.02,0.96,0.85,0.81,0.52,0.7],
    series: {
      shares: 'S&P 500 Total Return index (S&P Dow Jones Indices data, via Yahoo Finance), monthly',
      bonds: 'Vanguard Total Bond Market Index Fund Investor shares (VBMFX), monthly, standing in for the Bloomberg US Aggregate (about 0.15% a year in costs)',
      cash: '3-month Treasury bill rate, FRED TB3MS, a twelfth of the yield each month',
      pe: 'Cambridge Associates US Private Equity Index, quarterly, net (buyout and growth equity)',
      pc: 'Cliffwater Direct Lending Index, quarterly, from 2005; 1997–2004 the leveraged loan index and 1996 Baa bonds, each year spread over its quarters',
      re: 'NCREIF NFI-ODCE, net, quarterly',
      infra: 'infra100 Core by calendar year from 2014, and the scaled listed-utilities stand-in before, each year spread evenly over its months'
    },
    flags: ['Private equity 2020 Q4 is derived from Cambridge’s 2020 total and its Q3 year to date', 'Direct lending 2024 Q4 is derived from Cliffwater’s 2024 total; 2025 Q4 is a published estimate', 'Bonds Aug and Sep 2025 from PortfoliosLab, where Portfolio Visualizer put a month’s income in the wrong month', 'Infrastructure has no published monthly or quarterly series here: its months are its calendar years spread evenly, so its worst month shows its worst year a twelfth at a time']
  };

  const MO = {};
  function monthlyOf(k) {
    if (MO[k]) return MO[k];
    let out;
    if (k === 'cash') out = MONTHLY.cashYield.map(v => v / 1200);
    else if (MONTHLY[k]) out = MONTHLY[k].map(v => v / 100);
    else if (MONTHLY[k + '_y']) { out = []; MONTHLY[k + '_y'].forEach(v => { const m = Math.pow(1 + v / 100, 1 / 12) - 1; for (let j = 0; j < 12; j++) out.push(m); }); }
    else { out = []; MONTHLY[k + '_q'].forEach(v => { const m = Math.pow(1 + v / 100, 1 / 3) - 1; out.push(m, m, m); }); }
    return (MO[k] = out);
  }
  function monthOf(i) { const t = MONTHLY.from[1] - 1 + i; return [MONTHLY.from[0] + Math.floor(t / 12), ((t % 12) + 12) % 12 + 1]; }
  /* the mix held from January 1996 and put back to its weights every January: its return each month */
  function mixMonths(mix, peShare) {
    const w = weights(mix, peShare), out = [], hold = {};
    for (let i = 0; i < MONTHLY.n; i++) {
      if (i % 12 === 0) KEYS.forEach(k => { hold[k] = w[k]; });
      let before = 0, after = 0; KEYS.forEach(k => { before += hold[k]; hold[k] *= 1 + monthlyOf(k)[i]; after += hold[k]; });
      out.push(after / before - 1);
    }
    return out;
  }
  /* what a portfolio deck shows: return, volatility, Sharpe, best and worst month and year, the deepest fall and its months under water */
  function trackRecord(mix, peShare) {
    const r = mixMonths(mix, peShare), n = r.length, V = []; let v = 1; r.forEach(x => { v *= 1 + x; V.push(v); });
    const mean = r.reduce((a, b) => a + b, 0) / n, sd = Math.sqrt(r.reduce((a, b) => a + (b - mean) ** 2, 0) / (n - 1));
    const c = monthlyOf('cash'), ex = r.map((x, i) => x - c[i]), em = ex.reduce((a, b) => a + b, 0) / n, es = Math.sqrt(ex.reduce((a, b) => a + (b - em) ** 2, 0) / (n - 1));
    let wi = 0, bi = 0; r.forEach((x, i) => { if (x < r[wi]) wi = i; if (x > r[bi]) bi = i; });
    const years = [], yret = []; for (let y = 0; y < n / 12; y++) { let g = 1; for (let m = 0; m < 12; m++) g *= 1 + r[y * 12 + m]; years.push(MONTHLY.from[0] + y); yret.push(g - 1); }
    let wy = 0, by = 0; yret.forEach((x, i) => { if (x < yret[wy]) wy = i; if (x > yret[by]) by = i; });
    const dd = []; let peak = 1, pI = -1, depth = 0, dPeak = -1, dTrough = -1;
    V.forEach((x, i) => { if (x >= peak) { peak = x; pI = i; } const d = x / peak - 1; dd.push(d); if (d < depth) { depth = d; dPeak = pI; dTrough = i; } });
    let rec = null; if (dTrough >= 0) { const pv = dPeak < 0 ? 1 : V[dPeak]; for (let i = dTrough + 1; i < n; i++) if (V[i] >= pv) { rec = i; break; } }
    let longest = { months: 0, peak: null, rec: null, open: false }, sp = null;
    dd.forEach((d, i) => { if (d < 0 && sp === null) sp = i - 1; if (sp !== null && (d >= 0 || i === n - 1)) { const open = d < 0, len = (open ? n - 1 : i) - sp; if (len > longest.months) longest = { months: len, peak: sp, rec: open ? null : i, open }; if (!open) sp = null; } });
    return { r, V, dd, n, cagr: Math.pow(V[n - 1], 12 / n) - 1, vol: sd * Math.sqrt(12), sharpe: es ? em * 12 / (es * Math.sqrt(12)) : 0,
      worstMonth: { i: wi, ret: r[wi] }, bestMonth: { i: bi, ret: r[bi] }, years, yret, worstYear: { year: years[wy], ret: yret[wy] }, bestYear: { year: years[by], ret: yret[by] },
      maxDD: dTrough < 0 ? null : { depth, peak: dPeak, trough: dTrough, rec, falling: dTrough - dPeak, recovering: rec == null ? null : rec - dTrough, under: rec == null ? null : rec - dPeak }, longest };
  }

  /* ── the retirement runway: Monte Carlo in today's dollars ─────────── */
  function rng(seed) { return () => { seed |= 0; seed = seed + 0x6D2B79F5 | 0; let t = Math.imul(seed ^ seed >>> 15, 1 | seed); t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t; return ((t ^ t >>> 14) >>> 0) / 4294967296; }; }
  function gauss(r) { let u = 0, v = 0; while (!u) u = r(); while (!v) v = r(); return Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * v); }
  function quant(sorted, p) { const i = (sorted.length - 1) * p, lo = Math.floor(i), hi = Math.ceil(i); return sorted[lo] + (sorted[hi] - sorted[lo]) * (i - lo); }
  /* o: {start, save (a month), retireYear, spend (a year), ss (a year), ssFrom, startYear, endYear, mix, peShare, infl, paths, seed} */
  function runway(o) {
    const st = stats(o.mix, o.peShare), r = rng(o.seed || 20260928), infl = o.infl == null ? INFL : o.infl, years = [];
    for (let y = o.startYear || 2027; y <= o.endYear; y++) years.push(y);
    const P = o.paths || 3000, W = years.map(() => new Float64Array(P)), depl = new Float64Array(P); let lasts = 0;
    for (let p = 0; p < P; p++) {
      let w = o.start, dead = 0;
      for (let t = 0; t < years.length; t++) {
        const y = years[t];
        if (w > 0) {
          const nom = Math.exp(st.mu + st.sl * gauss(r)) - 1; w = w * ((1 + nom) / (1 + infl));
          if (y <= o.retireYear) w += o.save * 12; else w -= o.spend - (y >= o.ssFrom ? o.ss : 0);
          if (w <= 0) { w = 0; if (!dead) dead = y; }
        }
        W[t][p] = w;
      }
      if (!dead) lasts++; depl[p] = dead || 9999;
    }
    const q = W.map(a => { const s = Array.from(a).sort((x, y) => x - y); return [quant(s, .1), quant(s, .5), quant(s, .9)]; });
    const ds = Array.from(depl).sort((x, y) => x - y);
    return { years, p10: q.map(x => x[0]), p50: q.map(x => x[1]), p90: q.map(x => x[2]), success: lasts / P, depl10: quant(ds, .1), stats: st };
  }

  /* ── goals, cash, waiting: plain arithmetic, no forecast ───────────── */
  function monthsBetween(a, b) { return (b[0] - a[0]) * 12 + (b[1] - a[1]); }
  /* what to set aside each month so `now` plus the set-asides reach `amount` in `months`, both growing at `rate` a year */
  function goalNeed(amount, now, months, rate) {
    if (months <= 0) return Math.max(0, amount - now);
    const r = rate / 12; if (r === 0) return Math.max(0, (amount - now) / months);
    const g = Math.pow(1 + r, months); return Math.max(0, (amount - now * g) * r / (g - 1));
  }
  function goalValueAt(now, months, rate) { return now * Math.pow(1 + rate / 12, months); }
  /* o: {cash, floor, taxable, spend (a month), income (a month), sell} → months */
  function cashRunway(o) {
    const burn = o.spend - (o.income || 0), below = o.cash <= o.floor, all = o.cash + (o.sell ? o.taxable : 0);
    if (burn <= 0) return { burn: 0, monthsCash: Infinity, monthsFloor: Infinity, below, monthsAll: Infinity };
    return { burn, monthsCash: o.cash / burn, monthsFloor: below ? 0 : (o.cash - o.floor) / burn, below, monthsAll: all / burn };
  }
  function monthlyToReach(target, years, rate) { return goalNeed(target, 0, years * 12, rate); }

  /* ── private markets: Takahashi–Alexander (Yale, 2001) ──────────────── */
  /* one fund of commitment 1: calls 25%, 33% then 50% of what is uncalled; distributes (age/L)^B of its value */
  function taUnit(g, T) {
    const L = 12, B = 2.5, rc = [.25, 1 / 3, .5], calls = [], dist = [], nav = []; let N = 0, PIC = 0;
    for (let age = 1; age <= T; age++) {
      const C = age <= L ? rc[Math.min(age - 1, 2)] * (1 - PIC) : 0; PIC += C;
      const RD = age >= L ? 1 : Math.pow(age / L, B), grown = N * (1 + g), D = RD * grown; N = grown + C - D;
      calls.push(C); dist.push(D); nav.push(N);
    }
    return { calls, dist, nav };
  }
  function flows(T) { return { calls: Array(T).fill(0), dist: Array(T).fill(0), nav: Array(T).fill(0) }; }
  function netOf(f) { let c = 0; f.net = f.calls.map((x, i) => c += f.dist[i] - x); return f; }
  /* new funds: `commit` each year for `vintages` years */
  function ta(o) {
    const T = o.years || 20, u = taUnit(o.g, T + 1), f = flows(T);
    for (let v = 0; v < o.vintages; v++) for (let t = v; t < T; t++) { const a = t - v; f.calls[t] += o.commit * u.calls[a]; f.dist[t] += o.commit * u.dist[a]; f.nav[t] += o.commit * u.nav[a]; }
    return netOf(f);
  }
  /* secondaries: each year `commit` buys a stake in a fund already `age` years old, at `discount` to its value,
     and takes on what that fund has still to call — so price plus the calls still to come equals `commit` */
  function taSecondary(o) {
    const T = o.years || 20, A = o.age || 5, d = o.discount || 0, u = taUnit(o.g, 40), f = flows(T);
    const navA = u.nav[A - 1], pic = u.calls.slice(0, A).reduce((s, x) => s + x, 0), C = o.commit / (navA * (1 - d) + (1 - pic));
    for (let v = 0; v < o.vintages; v++) {
      f.calls[v] += C * navA * (1 - d);
      for (let t = v; t < T; t++) { const a = A + (t - v); if (a >= u.calls.length) break; f.calls[t] += C * u.calls[a]; f.dist[t] += C * u.dist[a]; f.nav[t] += C * u.nav[a]; }
    }
    return netOf(f);
  }


  /* ── the staircase: ways to hold money, each expected to earn more than the step before ── */
  const NEAR_MONTHS = 36; // money needed within three years stays no riskier than the money market
  const LADDER = [
    { k: 'savings', name: 'Savings account', the: 'a savings account', rate: 0.0037, desc: 'Bank deposits at the national average rate: 0.37% (FDIC, September 2026).', mix: { shares: 0, bonds: 0, cash: 100, private: 0, re: 0 } },
    { k: 'mmf', name: 'Money market', the: 'a money market fund', desc: 'Short Treasury bills and deposits, at J.P. Morgan’s cash assumption.', mix: { shares: 0, bonds: 0, cash: 100, private: 0, re: 0 } },
    { k: 'cons', name: 'Conservative', the: 'a conservative portfolio', desc: '30% shares, 60% bonds, 10% cash.', mix: { shares: 30, bonds: 60, cash: 10, private: 0, re: 0 } },
    { k: 'bal', name: 'Balanced', the: 'a balanced portfolio', desc: '60% shares, 40% bonds.', mix: { shares: 60, bonds: 40, cash: 0, private: 0, re: 0 } },
    { k: 'gro', name: 'Growth', the: 'a growth portfolio', desc: '80% shares, 20% bonds.', mix: { shares: 80, bonds: 20, cash: 0, private: 0, re: 0 } },
    { k: 'fo-cons', fo: true, name: 'Conservative', the: 'a family office conservative mix', desc: '25% shares, 35% bonds, 5% cash, 25% private markets (mostly private credit), 10% real estate.', mix: { shares: 25, bonds: 35, cash: 5, private: 25, re: 10 }, pe: 0.4 },
    { k: 'fo-bal', fo: true, name: 'Balanced', the: 'a family office balanced mix', desc: '40% shares, 20% bonds, 30% private markets, 10% real estate.', mix: { shares: 40, bonds: 20, cash: 0, private: 30, re: 10 }, pe: 0.6 },
    { k: 'fo-gro', fo: true, name: 'Growth', the: 'a family office growth mix', desc: '45% shares, 5% bonds, 40% private markets (mostly private equity), 10% real estate.', mix: { shares: 45, bonds: 5, cash: 0, private: 40, re: 10 }, pe: 0.75 }
  ];
  function ladder() {
    return LADDER.map(s => { const st = stats(s.mix, s.pe), t = total(s.mix);
      return Object.assign({}, s, { expected: s.rate != null ? s.rate : st.geo, vol: s.rate != null ? 0 : st.vol, record: s.rate != null ? null : trackRecord(s.mix, s.pe), liquid: (s.mix.shares + s.mix.bonds + s.mix.cash) / t }); });
  }
  /* each goal's monthly need when the money is held on step `rate`; near goals are held no riskier than cash */
  function goalsNeed(goals, today, rate, cashRate) {
    return goals.map(g => { const n = monthsBetween(today, g.due), near = n < NEAR_MONTHS, r = near ? Math.min(rate, cashRate) : rate;
      return Object.assign({}, g, { n, near, rate: r, need: goalNeed(g.amount, g.linkedNow, n, r), reaches: goalValueAt(g.linkedNow, n, r) }); });
  }

  /* ── fees and the order of returns ─────────────────────────────────── */
  function feeFV(P, r, f, n) { return P * Math.pow((1 + r) * (1 - f), n); }
  /* Schwab's example: $1M, $50,000 a year raised 2%, 6% a year except two years of −15%; withdrawal at the start */
  function seq(bad) { let w = 1e6, wd = 50000; const out = []; for (let y = 1; y <= 30; y++) { if (w > 0) { w -= wd; w = w * (1 + (bad.includes(y) ? -.15 : .06)); if (w < 0) w = 0; } wd *= 1.02; out.push(w); } return out; }

  /* ── the checks the engine must pass before it ships ───────────────── */
  function selfTest(S) {
    const rows = [], add = (what, expected, got, ok) => rows.push({ what, expected, got, ok: !!ok });
    const r1 = n => Math.round(n), k = n => '$' + Math.round(n).toLocaleString('en-US');
    const H = HISTORY, n = H.to - H.from + 1;
    add('Thirty years of history in every series', '30 × 7', KEYS.map(x => H[x].length).join(' · '), KEYS.every(x => H[x].length === n));
    const s64 = stats({ shares: 60, bonds: 40, cash: 0, private: 0, re: 0 }).geo * 100;
    add('A 60/40 mix, compound a year', 'J.P. Morgan: 6.4%', s64.toFixed(2) + '%', Math.abs(s64 - 6.4) < 0.15);
    const peG = stats({ private: 100 }, 1).geo * 100, inG = stats({ infra: 100 }).geo * 100, lower = FINNA.reported.every(k => USED[k][2] < CMA[k][2]);
    add('Private equity alone, and infrastructure alone', 'Finna 15.50% · J.P. Morgan 6.50%', peG.toFixed(2) + '% · ' + inG.toFixed(2) + '%', Math.abs(peG - 15.5) < 0.005 && Math.abs(inG - 6.5) < 0.005);
    add('Private markets volatility, as reported', 'below J.P. Morgan’s for all four', FINNA.reported.map(k => USED[k][2].toFixed(1) + ' < ' + CMA[k][2].toFixed(1)).join(' · '), lower);
    const fees = [.0025, .005, .01].map(f => feeFV(1e5, .04, f, 20));
    add('The SEC fee example, $100,000 · 20 years · 4%', '$208,000 / $198,000 / $179,000', fees.map(x => k(Math.round(x / 1000) * 1000)).join(' / '), [208000, 198000, 179000].every((e, i) => Math.abs(fees[i] - e) < 1000));
    const A1 = seq([1, 2]), B1 = seq([10, 11]), runs = A1.findIndex(v => v <= 0) + 1;
    add('Schwab: bad years first, then a decade in', '"roughly 18 years" / "nearly $400,000" at 18', 'year ' + runs + ' / ' + k(B1[17]), runs >= 18 && runs <= 19 && Math.abs(B1[17] - 400000) < 10000);
    const need = S.goals.map(g => goalNeed(g.amount, g.linkedNow, monthsBetween(S.today, g.due), 0));
    const tot = need.reduce((a, b) => a + b, 0);
    add('Set-aside planner, the Johnsens at 0%', '$13,715 a month', k(tot), r1(tot) === 13715);
    const ret = S.goals.find(g => g.kind === 'retirement'), m = monthsBetween(S.today, ret.due);
    add('Set-aside planner, retirement at 5%', '$0 a month (reaches $2.5M)', k(goalNeed(ret.amount, ret.linkedNow, m, .05)) + ' (' + k(goalValueAt(ret.linkedNow, m, .05)) + ')', goalNeed(ret.amount, ret.linkedNow, m, .05) === 0);
    const cr = cashRunway({ cash: S.cash.cash, floor: S.cash.floor, taxable: S.cash.taxable, spend: 12000, income: 0, sell: true });
    add('Cash runway at $12,000 a month', '11.4 months · floor after 5.1 · 56.8 with taxable', cr.monthsCash.toFixed(1) + ' · ' + cr.monthsFloor.toFixed(1) + ' · ' + cr.monthsAll.toFixed(1), cr.monthsCash.toFixed(1) === '11.4' && cr.monthsFloor.toFixed(1) === '5.1' && cr.monthsAll.toFixed(1) === '56.8');
    const w0 = monthlyToReach(1e6, 30, .06), w5 = monthlyToReach(1e6, 25, .06);
    add('Cost of waiting, $1M at 6%', '$996 now · $1,443 five years later', k(w0) + ' · ' + k(w5), r1(w0) === 996 && r1(w5) === 1443);
    const rw = runway({ start: S.retirement.start, save: S.savingsMonthly, retireYear: 2037, spend: 120000, ss: 55000, ssFrom: 2042, endYear: 2073, mix: S.policyMix });
    add('Retirement runway, the Johnsens (demo inputs)', '97 of 100 paths', Math.round(rw.success * 100) + ' of 100', Math.round(rw.success * 100) === 97);
    const tr = trackRecord(S.policyMix), lab = i => { const [y, m] = monthOf(i); return ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'][m - 1] + ' ' + y; };
    add('Monthly history: 360 months, 120 quarters, 30 years', '360 · 360 · 360 · 120 · 120 · 120 · 30', [MONTHLY.shares, MONTHLY.bonds, MONTHLY.cashYield, MONTHLY.pe_q, MONTHLY.pc_q, MONTHLY.re_q, MONTHLY.infra_y].map(a => a.length).join(' · '), [MONTHLY.shares, MONTHLY.bonds, MONTHLY.cashYield].every(a => a.length === 360) && [MONTHLY.pe_q, MONTHLY.pc_q, MONTHLY.re_q].every(a => a.length === 120) && MONTHLY.infra_y.length === 30 && KEYS.every(k => monthlyOf(k).length === 360));
    const sp08 = (monthlyOf('shares').slice(144, 156).reduce((g, x) => g * (1 + x), 1) - 1) * 100;
    add('S&P 500 months compound to its 2008', '−37.00%', sp08.toFixed(2) + '%', Math.abs(sp08 + 37) < 0.1);
    add('Mix lab, the policy mix: worst year and month', '2008 · Oct 2008', tr.worstYear.year + ', ' + (tr.worstYear.ret * 100).toFixed(1) + '% · ' + lab(tr.worstMonth.i) + ', ' + (tr.worstMonth.ret * 100).toFixed(1) + '%', tr.worstYear.year === 2008 && lab(tr.worstMonth.i) === 'Oct 2008');
    add('Mix lab, the policy mix: deepest fall', 'Oct 2007 → Feb 2009 · 38 months under water', (tr.maxDD.depth * 100).toFixed(1) + '% · ' + lab(tr.maxDD.peak) + ' → ' + lab(tr.maxDD.trough) + ' · ' + tr.maxDD.under + ' months', lab(tr.maxDD.peak) === 'Oct 2007' && lab(tr.maxDD.trough) === 'Feb 2009' && tr.maxDD.under === 38);
    const L = ladder(), rising = L.every((x, i) => !i || x.expected > L[i - 1].expected);
    add('The staircase: each step expected to earn more', '8 steps, rising', L.map(x => (x.expected * 100).toFixed(1)).join(' < '), rising && L.length === 8);
    const cashR = L[1].expected, atSave = goalsNeed(S.goals, S.today, L[0].expected, cashR).reduce((a, g) => a + g.need, 0), atBal = goalsNeed(S.goals, S.today, L[3].expected, cashR).reduce((a, g) => a + g.need, 0);
    add('Set-aside planner on the staircase', '$13,040 in savings · $5,143 balanced', k(atSave) + ' · ' + k(atBal), r1(atSave) === 13040 && r1(atBal) === 5143);
    const pm = ta({ commit: 100000, vintages: 5, g: .102 }), lo = Math.min(...pm.net);
    add('Private markets, $100,000 a year for 5 years', 'most in at once $334,000 in year 6 · even in year 11', k(-lo) + ' in year ' + (pm.net.indexOf(lo) + 1) + ' · even in year ' + (pm.net.findIndex((x, i) => i > pm.net.indexOf(lo) && x >= 0) + 1), Math.abs(-lo - 334000) < 1500 && pm.net.indexOf(lo) === 5);
    return rows;
  }

  root.FinnaSim = { ASOF, CMA, USED, FINNA, total, KEYS, CORR, INFL, HISTORY, MONTHLY, LADDER, NEAR_MONTHS, ladder, goalsNeed, monthlyOf, monthOf, mixMonths, trackRecord, weights, stats, mixRange, mixHistory, runway, monthsBetween, goalNeed, goalValueAt, cashRunway, monthlyToReach, taUnit, ta, taSecondary, feeFV, seq, selfTest };
})(typeof window !== 'undefined' ? window : globalThis);
