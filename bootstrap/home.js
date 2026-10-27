(() => {
  const popup = document.getElementById('ambPopup');
  const key = 'bhe-ambassador-dismissed';
  let lastFocus;
  let dismissed = 0;
  try { dismissed = Number(localStorage.getItem(key)) || 0; } catch {}
  const close = () => popup.close();
  popup.querySelector('.amb-close').addEventListener('click', close);
  popup.querySelector('.popup-later').addEventListener('click', close);
  popup.addEventListener('click', event => {
    if (event.target === popup) {
      const r = popup.getBoundingClientRect();
      if (event.clientX < r.left || event.clientX > r.right || event.clientY < r.top || event.clientY > r.bottom) close();
    }
  });
  popup.addEventListener('close', () => {
    try { localStorage.setItem(key, String(Date.now())); } catch {}
    lastFocus?.focus();
  });
  document.querySelectorAll('[data-ios]').forEach(button => {
    button.addEventListener('click', () => {
      button.closest('.amb-stores').nextElementSibling.hidden = false;
    });
  });
  setTimeout(() => {
    if (Date.now() - dismissed < 7 * 86400000 || document.querySelector('dialog[open], .modal.show, .offcanvas.show') || document.activeElement?.matches('input, textarea, select')) return;
    lastFocus = document.activeElement;
    popup.showModal();
  }, 15000);
})();
