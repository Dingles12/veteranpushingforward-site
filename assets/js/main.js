/* Veteran Pushing Forward LLC — minimal progressive enhancement. The site works without JS. */
(function () {
  'use strict';

  // Mobile navigation toggle
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('site-nav');
  if (toggle && nav) {
    var setOpen = function (open) {
      toggle.setAttribute('aria-expanded', String(open));
      nav.classList.toggle('is-open', open);
    };
    toggle.addEventListener('click', function () {
      setOpen(toggle.getAttribute('aria-expanded') !== 'true');
    });
    nav.addEventListener('click', function (e) {
      if (e.target.closest('a')) setOpen(false);
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
        setOpen(false);
        toggle.focus();
      }
    });
  }

  // Booking link — the ONE place to set it. Replace BOOKING_URL_TODO with the Cal.com/Calendly link.
  var BOOKING_URL = 'BOOKING_URL_TODO';
  if (BOOKING_URL.indexOf('TODO') === -1) {
    document.querySelectorAll('[data-booking]').forEach(function (a) {
      a.href = BOOKING_URL; a.target = '_blank'; a.rel = 'noopener';
    });
  }
  // Until a booking link is set, [data-booking] buttons fall back to the contact form (#contact).

  // Capability statement print button
  var printBtn = document.querySelector('[data-print]');
  if (printBtn) {
    printBtn.addEventListener('click', function () { window.print(); });
  }
})();
