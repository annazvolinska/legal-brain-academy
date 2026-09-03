(function () {
  'use strict';

  /* ---- Sticky nav shadow ---- */
  var nav = document.getElementById('nav');
  function onScroll() {
    nav.classList.toggle('is-stuck', window.scrollY > 8);
  }
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  /* ---- Mobile menu ---- */
  var burger = document.getElementById('burger');
  var links = document.getElementById('navLinks');
  function closeMenu() {
    links.classList.remove('is-open');
    burger.setAttribute('aria-expanded', 'false');
    burger.setAttribute('aria-label', 'Menu');
    document.body.classList.remove('is-locked');
    document.documentElement.style.overflow = '';
  }
  function setLock(on) {
    var lock = on && window.innerWidth <= 920;
    document.body.classList.toggle('is-locked', lock);
    document.documentElement.style.overflow = lock ? 'hidden' : '';
  }
  burger.addEventListener('click', function () {
    var open = links.classList.toggle('is-open');
    burger.setAttribute('aria-expanded', open ? 'true' : 'false');
    burger.setAttribute('aria-label', open ? 'Close menu' : 'Menu');
    setLock(open);
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && links.classList.contains('is-open')) {
      closeMenu();
      burger.focus();
    }
  });
  links.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') closeMenu();
  });
  window.addEventListener('resize', function () {
    if (window.innerWidth > 920) closeMenu();
  });

  /* ---- Accordions (curriculum + FAQ) ---- */
  function accordion(root, itemSel, headSel, bodySel, openClass, single) {
    var items = Array.prototype.slice.call(root.querySelectorAll(itemSel));
    function setHeight(item, open) {
      var body = item.querySelector(bodySel);
      body.style.maxHeight = open ? body.scrollHeight + 'px' : '0px';
    }
    items.forEach(function (item) {
      var head = item.querySelector(headSel);
      setHeight(item, item.classList.contains(openClass));
      head.addEventListener('click', function () {
        var willOpen = !item.classList.contains(openClass);
        if (single && willOpen) {
          items.forEach(function (other) {
            if (other !== item) {
              other.classList.remove(openClass);
              other.querySelector(headSel).setAttribute('aria-expanded', 'false');
              setHeight(other, false);
            }
          });
        }
        item.classList.toggle(openClass, willOpen);
        head.setAttribute('aria-expanded', willOpen ? 'true' : 'false');
        setHeight(item, willOpen);
      });
    });
    window.addEventListener('resize', function () {
      items.forEach(function (item) {
        if (item.classList.contains(openClass)) setHeight(item, true);
      });
    });
  }

  var modules = document.getElementById('modules');
  if (modules) accordion(modules, '.module', '.module__head', '.module__body', 'is-open', true);
  var faq = document.getElementById('faqList');
  if (faq) accordion(faq, '.qa', '.qa__head', '.qa__body', 'is-open', false);

  /* ---- Scroll reveal ---- */
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var reveals = document.querySelectorAll('.reveal');
  if (reduce || !('IntersectionObserver' in window)) {
    reveals.forEach(function (el) { el.classList.add('is-in'); });
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        var el = entry.target;
        var siblings = Array.prototype.slice.call(el.parentNode.children).filter(function (n) {
          return n.classList && n.classList.contains('reveal');
        });
        el.style.transitionDelay = Math.min(siblings.indexOf(el), 6) * 60 + 'ms';
        el.classList.add('is-in');
        io.unobserve(el);
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
    reveals.forEach(function (el) { io.observe(el); });
  }

  /* ---- Stat count-up ---- */
  var nums = document.querySelectorAll('.stat__num[data-count]');
  if (!reduce && 'IntersectionObserver' in window) {
    var so = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        var el = entry.target;
        so.unobserve(el);
        var target = parseFloat(el.getAttribute('data-count'));
        var suffix = el.getAttribute('data-suffix') || '';
        var prefix = el.getAttribute('data-prefix') || '';
        var decimals = (el.getAttribute('data-count').split('.')[1] || '').length;
        var start = performance.now();
        var dur = 900;
        (function step(now) {
          var t = Math.min((now - start) / dur, 1);
          var eased = 1 - Math.pow(1 - t, 3);
          el.innerHTML = prefix + (target * eased).toFixed(decimals) + suffix;
          if (t < 1) requestAnimationFrame(step);
        })(start);
      });
    }, { threshold: 0.5 });
    nums.forEach(function (el) { so.observe(el); });
  }

  /* ---- External links: always a real new browser tab ---- */
  Array.prototype.forEach.call(document.querySelectorAll('a[href]'), function (a) {
    var href = a.getAttribute('href') || '';
    if (!/^https?:\/\//i.test(href)) return;
    if (a.hostname === window.location.hostname) return;
    a.setAttribute('target', '_blank');
    a.setAttribute('rel', 'noopener noreferrer');
  });

  /* ---- Cookie banner ---- */
  var cookie = document.getElementById('cookie');
  if (cookie) {
    var KEY = 'lba-cookie-consent';
    var stored = null;
    try { stored = localStorage.getItem(KEY); } catch (err) { stored = 'skip'; }
    if (!stored) {
      cookie.hidden = false;
      var reveal = function () { cookie.classList.add('is-in'); };
      requestAnimationFrame(reveal);
      setTimeout(reveal, 60);
      cookie.addEventListener('click', function (e) {
        var btn = e.target.closest('[data-cookie]');
        if (!btn) return;
        try { localStorage.setItem(KEY, btn.getAttribute('data-cookie')); } catch (err) {}
        cookie.classList.remove('is-in');
        setTimeout(function () { cookie.hidden = true; }, 260);
      });
    }
  }

  /* ---- Active nav link ---- */
  var sections = ['program', 'build', 'curriculum', 'apply', 'faq']
    .map(function (id) { return document.getElementById(id); })
    .filter(Boolean);
  var navAnchors = Array.prototype.slice.call(links.querySelectorAll('a:not(.nav__cta)'));
  if ('IntersectionObserver' in window && sections.length) {
    var ao = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        navAnchors.forEach(function (a) {
          a.classList.toggle('is-active', a.getAttribute('href') === '#' + entry.target.id);
        });
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    sections.forEach(function (s) { ao.observe(s); });
  }
})();
