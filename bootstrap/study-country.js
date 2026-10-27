/* Keyboard navigation for the vertical Bootstrap requirements tabs. */
(() => {
  const tabs = [...document.querySelectorAll('.requirements-tabs [role="tab"]')];
  tabs.forEach((tab, index) => {
    tab.addEventListener('keydown', event => {
      let next;
      if (event.key === 'ArrowDown' || event.key === 'ArrowRight') next = (index + 1) % tabs.length;
      if (event.key === 'ArrowUp' || event.key === 'ArrowLeft') next = (index + tabs.length - 1) % tabs.length;
      if (event.key === 'Home') next = 0;
      if (event.key === 'End') next = tabs.length - 1;
      if (next === undefined) return;
      event.preventDefault();
      bootstrap.Tab.getOrCreateInstance(tabs[next]).show();
      tabs[next].focus();
    });
  });
  document.querySelectorAll('.spain-faq details').forEach(item => {
    item.addEventListener('toggle', () => {
      if (item.open) document.querySelectorAll('.spain-faq details').forEach(other => { if (other !== item) other.open = false; });
    });
  });
  // Keep the existing consultation design, with an accurate local preview result.
  const form = document.getElementById('consultationModalForm');
  if (form) form.addEventListener('submit', event => {
    event.preventDefault();
    event.stopImmediatePropagation();
    let status = form.querySelector('[role="status"]');
    if (!status) { status = document.createElement('p'); status.setAttribute('role', 'status'); form.append(status); }
    status.textContent = 'Your details passed validation. This is a local preview; no consultation request has been sent.';
  }, true);
})();
