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

  // Contact form: plain HTML POST to Formspree works without JS; this enhances it with an inline result.
  var cf = document.getElementById('contact-form');
  if (cf && cf.getAttribute('action').indexOf('FORM_ENDPOINT_TODO') !== -1) {
    var pend = cf.closest('.form-card');
    if (pend) pend.setAttribute('data-form-pending', '');
  } else if (cf && window.fetch && window.FormData) {
    var st = document.getElementById('form-status');
    var btn = cf.querySelector('button[type="submit"]');
    var fallback = ' Please email david.ingles@veteranpushingforward.com or call (602) 456-0961.';
    cf.addEventListener('submit', function (e) {
      e.preventDefault();
      if (!cf.checkValidity()) { cf.reportValidity(); return; }
      btn.disabled = true; st.textContent = 'Sending…';
      fetch(cf.action, { method: 'POST', body: new FormData(cf), headers: { 'Accept': 'application/json' } })
        .then(function (r) {
          if (r.ok) { cf.reset(); st.textContent = 'Thanks, David will reply within one business day.'; return; }
          return r.json().then(function (d) {
            var msg = d && d.errors ? d.errors.map(function (x) { return x.message; }).join(' ') : 'Something went wrong.';
            st.textContent = msg + fallback;
          }, function () { st.textContent = 'Something went wrong.' + fallback; });
        })
        .catch(function () { st.textContent = 'Could not send your message.' + fallback; })
        .then(function () { btn.disabled = false; });
    });
  }

  // Capability statement print button
  var printBtn = document.querySelector('[data-print]');
  if (printBtn) {
    printBtn.addEventListener('click', function () { window.print(); });
  }
})();
