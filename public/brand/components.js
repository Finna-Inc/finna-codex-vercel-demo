/* ══ FINNA · COMPONENTS.JS — shared behaviour for the component layer (REV 36) ═══════════
   One maintained home for the behaviours the data components need. Load AFTER
   components.css, with defer. Everything is declared in markup with data- attributes and
   found at DOMContentLoaded; call Finna.init(root) after inserting markup dynamically.

   WHAT IT DOES
   1  FORMATTING  <data data-amount="1250000" data-currency="DKK"> and <time data-date=
      "2026-08-02"> are written out with Intl in the page's locale (html lang, or data-locale
      on the element). An EMPTY data-amount/data-date renders an em dash with .unknown and
      says "not recorded" — an unknown value is never a zero.
   2  SEARCH  .search wrappers get their clear action: the button shows once there is text,
      clears, refocuses the field, and fires an input event so a collection re-filters.
   3  SLIDERS  .slider inputs keep their fill and their <output> in step with the value.
   4  COLLECTIONS  [data-collection] wires one list screen together: a search input
      ([data-search-input]), native select filters ([data-filter="field"]), removable
      active-filter tags ([data-tags]), a result count ([data-count], aria-live), and a
      pager ([data-pager] with [data-prev]/[data-next]/[data-range]). Rows are
      tbody > tr[data-text="haystack"] with data-<field> attributes for the filters.
      Everything updates as the controls change; no Apply.

   No framework, no build step. Native elements carry the keyboard behaviour. */
(function () {
  'use strict';
  var DASH = '—';

  function locale(el) {
    return el.getAttribute('data-locale') || document.documentElement.lang || 'en';
  }

  /* ── 1 · formatting ─────────────────────────────────────────────────────── */
  function formatAmounts(root) {
    root.querySelectorAll('[data-amount]').forEach(function (el) {
      var v = el.getAttribute('data-amount');
      if (v === '' || v === null) {
        el.textContent = DASH; el.classList.add('unknown');
        el.setAttribute('aria-label', 'not recorded'); return;
      }
      var n = Number(v); if (!isFinite(n)) return;
      el.textContent = new Intl.NumberFormat(locale(el), {
        style: 'currency', currency: el.getAttribute('data-currency') || 'DKK',
        maximumFractionDigits: Math.abs(n) >= 1000 ? 0 : 2
      }).format(n);
    });
  }
  function formatDates(root) {
    root.querySelectorAll('[data-date]').forEach(function (el) {
      var v = el.getAttribute('data-date');
      if (v === '' || v === null) {
        el.textContent = DASH; el.classList.add('unknown');
        el.setAttribute('aria-label', 'not recorded'); return;
      }
      var d = new Date(v + 'T00:00:00'); if (isNaN(+d)) return;
      if (el.tagName === 'TIME' && !el.getAttribute('datetime')) el.setAttribute('datetime', v);
      el.textContent = new Intl.DateTimeFormat(locale(el), {
        day: 'numeric', month: 'short', year: 'numeric' }).format(d);
    });
  }

  /* ── 2 · search clear ───────────────────────────────────────────────────── */
  function wireSearch(root) {
    root.querySelectorAll('.search').forEach(function (box) {
      if (box.dataset.wired) return; box.dataset.wired = '1';
      var input = box.querySelector('input'), clear = box.querySelector('.search-clear');
      if (!input || !clear) return;
      function sync() { if (input.value) box.setAttribute('data-filled', ''); else box.removeAttribute('data-filled'); }
      input.addEventListener('input', sync); sync();
      clear.addEventListener('click', function () {
        input.value = ''; sync(); input.focus();
        input.dispatchEvent(new Event('input', { bubbles: true }));
      });
    });
  }

  /* ── 3 · the collection: filter → tag → count → page ────────────────────── */
  function wireCollection(rootEl) {
    if (rootEl.dataset.wired) return; rootEl.dataset.wired = '1';
    var rows = Array.prototype.slice.call(rootEl.querySelectorAll('tbody > tr, [data-rows] > *'));
    var search = rootEl.querySelector('[data-search-input]');
    var filters = Array.prototype.slice.call(rootEl.querySelectorAll('[data-filter]'));
    var tags = rootEl.querySelector('[data-tags]');
    var count = rootEl.querySelector('[data-count]');
    var pager = rootEl.querySelector('[data-pager]');
    var prev = pager && pager.querySelector('[data-prev]');
    var next = pager && pager.querySelector('[data-next]');
    var range = pager && pager.querySelector('[data-range]');
    var stateHost = rootEl.querySelector('[data-state-host]');
    var noun = rootEl.getAttribute('data-noun') || 'items';
    var size = parseInt(rootEl.getAttribute('data-page-size') || '0', 10);
    var page = 0;

    function matches(row) {
      if (search && search.value) {
        var hay = (row.getAttribute('data-text') || row.textContent).toLowerCase();
        if (hay.indexOf(search.value.toLowerCase()) === -1) return false;
      }
      return filters.every(function (f) {
        return !f.value || row.getAttribute('data-' + f.getAttribute('data-filter')) === f.value;
      });
    }
    function drawTags() {
      if (!tags) return;
      tags.textContent = '';
      filters.forEach(function (f) {
        if (!f.value) return;
        var label = f.options[f.selectedIndex].textContent;
        var b = document.createElement('button');
        b.type = 'button'; b.className = 'filter-tag';
        b.setAttribute('aria-label', 'Remove the filter ' + label);
        b.innerHTML = label + '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" aria-hidden="true"><path d="M18 6 6 18M6 6l12 12"/></svg>';
        b.addEventListener('click', function () {
          f.value = ''; f.dispatchEvent(new Event('change', { bubbles: true })); f.focus();
        });
        tags.appendChild(b);
      });
    }
    function render() {
      var hit = rows.filter(matches);
      var pages = size ? Math.max(1, Math.ceil(hit.length / size)) : 1;
      if (page >= pages) page = pages - 1;
      rows.forEach(function (r) { r.hidden = true; });
      (size ? hit.slice(page * size, page * size + size) : hit)
        .forEach(function (r) { r.hidden = false; });
      if (count) count.textContent = hit.length === rows.length
        ? rows.length + ' ' + noun
        : hit.length + ' of ' + rows.length + ' ' + noun;
      if (pager) {
        pager.hidden = !size || hit.length <= size;
        if (prev) prev.disabled = page === 0;
        if (next) next.disabled = page >= pages - 1;
        if (range) range.textContent = hit.length
          ? (page * size + 1) + '–' + Math.min((page + 1) * size, hit.length) + ' of ' + hit.length
          : '';
      }
      if (stateHost) stateHost.hidden = hit.length !== 0;   /* the no-results state */
      rootEl.dispatchEvent(new CustomEvent('finna:collection', { detail: { shown: hit.length } }));
      drawTags();
    }
    if (search) search.addEventListener('input', function () { page = 0; render(); });
    filters.forEach(function (f) { f.addEventListener('change', function () { page = 0; render(); }); });
    if (prev) prev.addEventListener('click', function () { page--; render(); });
    if (next) next.addEventListener('click', function () { page++; render(); });
    render();
  }

  /* ── 4 · sliders: the fill and the <output> follow the value ────────────── */
  function wireSliders(root) {
    root.querySelectorAll('.slider').forEach(function (sl) {
      if (sl.dataset.wired) return; sl.dataset.wired = '1';
      var row = sl.closest('.slider-row');
      var out = row && row.querySelector('output');
      function sync() {
        var min = +sl.min || 0, max = +sl.max === 0 ? 0 : (+sl.max || 100), v = +sl.value;
        sl.style.setProperty('--fill', ((v - min) / (max - min) * 100) + '%');
        if (out) out.textContent = v + (sl.getAttribute('data-unit') || '');
      }
      sl.addEventListener('input', sync); sync();
    });
  }

  function init(root) {
    root = root || document;
    formatAmounts(root); formatDates(root); wireSearch(root); wireSliders(root);
    root.querySelectorAll('[data-collection]').forEach(wireCollection);
  }
  window.Finna = { init: init };
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', function () { init(); });
  else init();
})();
