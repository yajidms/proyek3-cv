(function () {
  var bar = document.getElementById('scroll-progress');
  if (!bar) return;
  function update() {
    var h = document.documentElement;
    var st = h.scrollTop || document.body.scrollTop;
    var sh = h.scrollHeight - h.clientHeight;
    var p = sh ? (st / sh) * 100 : 0;
    bar.style.width = p + '%';
  }
  update();
  document.addEventListener('scroll', update, { passive: true });
  window.addEventListener('resize', update);
})();

(function () {
  var els = [].slice.call(document.querySelectorAll('.reveal'));
  if (!('IntersectionObserver' in window) || els.length === 0) {
    els.forEach(function (el) { el.classList.add('in'); });
    return;
  }
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -10% 0px' });
  els.forEach(function (el) { io.observe(el); });
})();

(function () {
  var figures = [].slice.call(document.querySelectorAll('.gallery figure'));
  figures.forEach(function (fig) {
    var cap = fig.querySelector('figcaption');
    var img = fig.querySelector('img');
    if (cap) {
      cap.textContent = '';
    }
    if (img) {
      var alt = img.getAttribute('alt') || '';
      if (/\.(png|jpe?g|webp|gif|bmp|svg)$/i.test(alt)) {
        img.setAttribute('alt', 'Screenshot');
      }
    }
  });
})();

