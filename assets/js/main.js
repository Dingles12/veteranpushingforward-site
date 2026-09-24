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

  // Contact form: compose a pre-filled email (no backend, no third-party service)
  var form = document.getElementById('contact-form');
  if (form) {
    var status = document.getElementById('form-status');
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }
      var get = function (name) { return (form.elements[name] && form.elements[name].value || '').trim(); };
      var to = form.getAttribute('data-email');
      var subject = 'Consultation request: ' + get('topic') + (get('organization') ? ' (' + get('organization') + ')' : '');
      var body = [
        'Name: ' + get('name'),
        'Organization: ' + (get('organization') || '-'),
        'Email: ' + get('email'),
        'Phone: ' + (get('phone') || '-'),
        'Interested in: ' + get('topic'),
        '',
        get('message')
      ].join('\r\n');
      window.location.href = 'mailto:' + to + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
      if (status) {
        status.textContent = 'Opening your email app… If nothing happens, email us directly at ' + to + '.';
      }
    });
  }

  // Capability statement print button
  var printBtn = document.querySelector('[data-print]');
  if (printBtn) {
    printBtn.addEventListener('click', function () { window.print(); });
  }
})();
