/* Report embed. Usage:
   <script src="https://YOUR-HOST/embed.js" data-report="REPORT-ID"
           data-accent="#2E63F2" data-font="Inter" data-bg="#FFFFFF" data-theme="light" data-brand="Your Agency" async></script>
   Every data-* option except data-report is optional. */
(function () {
  var s = document.currentScript;
  if (!s || !s.dataset.report) return;
  var d = s.dataset, base = s.src.replace(/embed\.js(\?.*)?$/, '');
  var id = 'r' + Math.random().toString(36).slice(2, 10);
  var q = ['embed=1', 'fid=' + id];
  ['accent', 'font', 'bg', 'ink', 'theme', 'brand'].forEach(function (k) {
    if (d[k]) q.push(k + '=' + encodeURIComponent(d[k]));
  });
  var f = document.createElement('iframe');
  f.src = base + 'r/' + encodeURIComponent(d.report) + '/?' + q.join('&');
  f.title = d.title || 'Backlink report';
  f.setAttribute('scrolling', 'no');
  f.setAttribute('allow', 'clipboard-write');
  f.setAttribute('referrerpolicy', 'no-referrer');
  f.style.cssText = 'display:block;width:100%;min-width:0;border:0;overflow:hidden;background:transparent;height:1600px;transition:height .2s ease';
  var target = d.target && document.querySelector(d.target);
  if (target) target.appendChild(f); else s.parentNode.insertBefore(f, s);
  window.addEventListener('message', function (e) {
    var m = e.data;
    if (e.source === f.contentWindow && m && m.type === 'report-height' && m.id === id && m.h > 200) f.style.height = m.h + 'px';
  });
})();
