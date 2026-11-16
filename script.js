// Light / dark theme toggle, remembered per visitor when storage is available.
(function () {
  var root = document.documentElement;
  var btn = document.getElementById('theme-btn');
  var saved = null;
  try { saved = localStorage.getItem('theme'); } catch (e) {}
  if (saved === 'light' || saved === 'dark') root.setAttribute('data-theme', saved);

  function current() {
    var t = root.getAttribute('data-theme');
    if (t) return t;
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }
  function label() { if (btn) btn.textContent = current() === 'dark' ? 'Light' : 'Dark'; }
  label();

  if (btn) btn.addEventListener('click', function () {
    var next = current() === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    try { localStorage.setItem('theme', next); } catch (e) {}
    label();
  });

  var y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();
})();
