(() => {
  const events = [
    ['Multi Destination Education Expo 2026','2026-10-10','10 October 2026','10:00 AM – 6:00 PM','Hotel Sarina, Banani, Dhaka','Education expos','0.png'],
    ['BHE UNI Education Expo 2026 – One Step to Your Global Future','2026-04-18','18 April 2026','10:00 AM – 6:00 PM','Unique Regency Hotel, Banani, Dhaka','Education expos','1.png'],
    ['One Decision Can Change 2026','2026-01-23','23–24 January 2026','11:00 AM – 7:00 PM (GMT+6)','BHE UNI Banani Office, Dhaka','Education expos','2.jpeg'],
    ['UK, Australia & China Application Day','2025-12-06','6 December 2025','11:00 AM – 7:00 PM','Cube Holdings, Road 17, Banani, Dhaka','Education expos','3.png'],
    ['Grand Opening of Our Banani Branch & 13 Years','2025-10-09','9 October 2025','11:00 AM (GMT+6)','Hotel Sheraton, Dhaka','Community','4.png'],
    ['UK Education Expo 2025','2025-02-24','24 February 2025','11:00 AM – 6:00 PM','Unique Regency Hotel, Dhaka','Education expos','5.png'],
    ['Your Abroad Dream Takes Flight at FACD CAB','2024-06-24','June 2024','11:00 AM – 7:00 PM','Sylhet, Bangladesh','Education expos','8.png'],
    ['Virtual Open Day Live Webinar','2024-05-02','2 May 2024','11:00 AM (GMT+1)','Online · Facebook Live','Webinars','9.png'],
    ['Canterbury Christ Church University: Easier Than Ever','2024-04-26','26 April 2024','4:30 PM','Dhaka, Bangladesh','Community','7.jpeg'],
    ['BHE UNI: Your AI-powered EdTech Gateway','2023-11-02','2 November 2023','11:00 AM (GMT+1)','United Kingdom','Community','6.png']
  ];
  let category = 'All', query = '', order = 'new', page = 1;
  const grid = document.getElementById('eventGrid'), pager = document.getElementById('eventPager'), dialog = document.getElementById('eventDialog');
  const meta = e => `<div class="ne-meta"><span><i class="bi bi-calendar3"></i>${e[2]}</span><span><i class="bi bi-clock"></i>${e[3]}</span><span><i class="bi bi-geo-alt"></i>${e[4]}</span></div>`;
  function render() {
    const filtered = events.map((e,id) => ({e,id})).filter(({e}) => (category === 'All' || e[5] === category) && e.join(' ').toLowerCase().includes(query)).sort((a,b) => order === 'new' ? b.e[1].localeCompare(a.e[1]) : a.e[1].localeCompare(b.e[1]));
    const pages = Math.ceil(filtered.length / 6);
    document.getElementById('eventCount').textContent = `${filtered.length} updates${category === 'All' ? '' : ' · ' + category}`;
    grid.innerHTML = filtered.slice((page-1)*6,page*6).map(({e,id}) => `<article class="ne-card"><div class="ne-card-image"><img src="assets/events/${e[6]}" alt="${e[0]}" loading="lazy"><span class="ne-date">${e[2]}</span></div><div class="ne-card-body"><span class="ne-category">${e[5]}</span><h3>${e[0]}</h3>${meta(e)}<button class="ne-text-link" data-event="${id}" aria-label="View details for ${e[0]}">View event details <i class="bi bi-arrow-right"></i></button></div></article>`).join('') || '<div class="ne-empty"><h3>No updates found</h3><p>Try a different search or category.</p><button class="btn btn-ghost-navy" id="resetEvents">Clear filters</button></div>';
    pager.innerHTML = pages > 1 ? `<button data-page="${page-1}" ${page===1?'disabled':''} aria-label="Previous page">←</button>` + Array.from({length:pages},(_,i) => `<button data-page="${i+1}" class="${page===i+1?'active':''}" ${page===i+1?'aria-current="page"':''}>${i+1}</button>`).join('') + `<button data-page="${page+1}" ${page===pages?'disabled':''} aria-label="Next page">→</button>` : '';
  }
  document.querySelector('.ne-tabs').addEventListener('click',event => {
    const b = event.target.closest('[data-category]'); if (!b) return;
    category = b.dataset.category; page=1;
    document.querySelectorAll('[data-category]').forEach(t => {t.classList.toggle('active',t===b);t.setAttribute('aria-pressed',t===b?'true':'false');});render();
  });
  document.getElementById('eventSearch').addEventListener('input',event => {query=event.target.value.trim().toLowerCase();page=1;render();});
  document.getElementById('eventSort').addEventListener('change',event => {order=event.target.value;page=1;render();});
  pager.addEventListener('click',event => {const b=event.target.closest('[data-page]');if(!b||b.disabled)return;page=Number(b.dataset.page);render();document.getElementById('discover').scrollIntoView({behavior:'smooth'});});
  document.addEventListener('click',event => {
    const sideCategory = event.target.closest('[data-side-category]');
    const sideTag = event.target.closest('[data-side-tag]');
    if (sideCategory || sideTag) {
      const value = sideCategory ? sideCategory.dataset.sideCategory : sideTag.dataset.sideTag;
      query = '';
      document.getElementById('eventSearch').value = '';
      const matchingTab = Array.from(document.querySelectorAll('[data-category]')).find(t => t.dataset.category === value);
      (matchingTab || document.querySelector('[data-category="All"]')).click();
      if (!matchingTab) {
        query = value.toLowerCase();
        document.getElementById('eventSearch').value = value;
        page = 1;
        render();
      }
      document.getElementById('discover').scrollIntoView({behavior:'smooth'});
      return;
    }
    if(event.target.closest('#resetEvents')) {document.getElementById('eventSearch').value='';query='';document.querySelector('[data-category="All"]').click();return;}
    const b = event.target.closest('[data-event]'); if(!b)return;
    const e=events[Number(b.dataset.event)];
    document.getElementById('eventDetails').innerHTML=`<img src="assets/events/${e[6]}" alt="${e[0]}"><div class="ne-dialog-body"><span class="ne-category">${e[5]}</span><h2>${e[0]}</h2>${meta(e)}<p>This event is part of the BHE UNI news archive. For advice about future events and your study plans, speak to our team.</p><a class="btn btn-brand" href="contact.html">Contact BHE UNI <i class="bi bi-arrow-right ms-2"></i></a></div>`;
    dialog.showModal();
  });
  dialog.querySelector('.ne-close').addEventListener('click',()=>dialog.close());
  dialog.addEventListener('click',event=>{if(event.target===dialog){const r=dialog.getBoundingClientRect();if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)dialog.close();}});
  render();
})();
