// Keep preview navigation inside this project, including dynamically added links.
(() => {
  let notice;
  let timer;
  document.addEventListener('click', (event) => {
    const link = event.target.closest('a');
    if (!link) return;
    const url = new URL(link.href, location.href);
    if (!link.hasAttribute('data-local-preview') &&
        (url.origin === location.origin || !['http:', 'https:', 'mailto:', 'tel:'].includes(url.protocol))) return;
    event.preventDefault();
    event.stopImmediatePropagation();
    if (!notice) {
      notice = document.createElement('div');
      notice.setAttribute('role', 'status');
      notice.style.cssText = 'position:fixed;bottom:24px;left:50%;transform:translateX(-50%);z-index:10000;background:#06122a;color:white;padding:14px 20px;border-radius:12px;box-shadow:0 8px 30px #0003;max-width:calc(100% - 32px);font:14px/1.5 system-ui,sans-serif;';
      document.body.appendChild(notice);
    }
    notice.textContent = 'Local design preview — this page is not available yet.';
    notice.hidden = false;
    clearTimeout(timer);
    timer = setTimeout(() => { notice.hidden = true; }, 3500);
  }, true);
  document.addEventListener('submit', (event) => {
    // Existing local form handlers can still display their demo states.
    event.preventDefault();
  }, true);
})();
