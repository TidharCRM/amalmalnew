(function () {
  'use strict';

  // FAQ accordion
  document.querySelectorAll('.faq__item').forEach(function (item) {
    var btn = item.querySelector('.faq__q');
    btn.addEventListener('click', function () {
      var isOpen = item.classList.toggle('open');
      btn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
  });

  // Testimonials deck — stacked card carousel
  var deck = document.getElementById('testi-deck');
  if (deck) {
    var cards = Array.from(deck.querySelectorAll('.tcard'));
    var current = 0;

    function layout() {
      cards.forEach(function (card, i) {
        var offset = (i - current + cards.length) % cards.length;
        var scale = 1 - offset * 0.04;
        var y = offset * 14;
        var z = cards.length - offset;
        card.style.transform = 'translateY(' + y + 'px) scale(' + scale + ')';
        card.style.zIndex = z;
        card.style.opacity = offset > 3 ? 0 : 1;
      });
    }

    function next() { current = (current + 1) % cards.length; layout(); }
    function prev() { current = (current - 1 + cards.length) % cards.length; layout(); }

    document.getElementById('t-next').addEventListener('click', next);
    document.getElementById('t-prev').addEventListener('click', prev);

    layout();
    var auto = setInterval(next, 5000);
    deck.addEventListener('mouseenter', function () { clearInterval(auto); });
  }

  // Lead form — handles submission via Formspree
  var form = document.getElementById('lead-form');
  var success = document.getElementById('lead-success');
  var submit = document.getElementById('lead-submit');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      if (!form.reportValidity()) return;
      submit.disabled = true;
      submit.textContent = 'שולח...';
      fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { 'Accept': 'application/json' }
      }).then(function (res) {
        if (res.ok) {
          form.style.display = 'none';
          success.hidden = false;
        } else {
          submit.disabled = false;
          submit.textContent = 'שלחי לי פרטים';
          alert('שגיאה בשליחה, נסי שוב');
        }
      }).catch(function () {
        submit.disabled = false;
        submit.textContent = 'שלחי לי פרטים';
        alert('שגיאה בחיבור');
      });
    });
  }

  // Optional countdown — reads ?start=ISO date or a data attribute
  var params = new URLSearchParams(window.location.search);
  var startIso = params.get('start');
  if (startIso) {
    var cd = document.getElementById('countdown');
    if (cd) {
      cd.style.display = 'block';
      var target = new Date(startIso).getTime();
      function tick() {
        var diff = target - Date.now();
        if (diff <= 0) { cd.style.display = 'none'; return; }
        var d = Math.floor(diff / 86400000);
        var h = Math.floor((diff % 86400000) / 3600000);
        var m = Math.floor((diff % 3600000) / 60000);
        document.getElementById('cd-days').textContent = String(d).padStart(2, '0');
        document.getElementById('cd-hours').textContent = String(h).padStart(2, '0');
        document.getElementById('cd-minutes').textContent = String(m).padStart(2, '0');
      }
      tick();
      setInterval(tick, 30000);
    }
  }

  // Smooth active-section highlight in nav
  var navLinks = document.querySelectorAll('.nav__links a');
  var sections = Array.from(navLinks).map(function (a) {
    var id = a.getAttribute('href').slice(1);
    return document.getElementById(id);
  }).filter(Boolean);

  window.addEventListener('scroll', function () {
    var y = window.scrollY + 90;
    var active = sections.length ? sections[0] : null;
    sections.forEach(function (s) { if (s && s.offsetTop <= y) active = s; });
    navLinks.forEach(function (a) {
      a.style.color = (active && a.getAttribute('href') === '#' + active.id) ? 'var(--red)' : '';
    });
  }, { passive: true });

})();
