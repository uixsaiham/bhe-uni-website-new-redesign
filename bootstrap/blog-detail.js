(() => {
  'use strict';
  const article=document.querySelector('#articleContent');
  const words=article.textContent.trim().split(/\s+/).length;
  document.querySelector('#readTime').textContent=`${Math.max(1,Math.ceil(words/220))} min read`;
  const sections=[...article.querySelectorAll('.bd-section')];
  const links=[...document.querySelectorAll('.bd-toc nav a')];
  const progress=document.querySelector('#readingProgress');
  let scheduled=false;
  function updateReading(){
    const top=window.scrollY+article.getBoundingClientRect().top;
    const distance=Math.max(1,article.offsetHeight-window.innerHeight+110);
    progress.style.width=`${Math.max(0,Math.min(100,(window.scrollY-top+110)/distance*100))}%`;
    let current=sections[0]?.id;
    for(const section of sections)if(section.getBoundingClientRect().top<=150)current=section.id;
    for(const link of links){const active=link.hash==='#'+current;link.classList.toggle('active',active);if(active)link.setAttribute('aria-current','location');else link.removeAttribute('aria-current');}
    scheduled=false;
  }
  window.addEventListener('scroll',()=>{if(!scheduled){scheduled=true;requestAnimationFrame(updateReading);}},{passive:true});
  window.addEventListener('resize',updateReading);updateReading();
  document.querySelector('#copyArticle').addEventListener('click',async()=>{
    const status=document.querySelector('#shareStatus');
    try{await navigator.clipboard.writeText(location.href.split('#')[0]);status.textContent='Link copied';}catch{status.textContent='Copy the URL from your address bar';}
    setTimeout(()=>status.textContent='',3500);
  });
  document.querySelector('#printArticle').addEventListener('click',()=>window.print());
  const publicArticle='https://bheuni.io/blog/can-i-go-to-university-without-a-levels';
  const shareUrl=encodeURIComponent(publicArticle);
  const shareTitle=encodeURIComponent('Can I Go to University Without A Levels? UK Guide 2027');
  const shareTargets={
    facebook:`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`,
    linkedin:`https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`,
    whatsapp:`https://wa.me/?text=${shareTitle}%20${shareUrl}`,
    x:`https://twitter.com/intent/tweet?text=${shareTitle}&url=${shareUrl}`
  };
  document.querySelectorAll('[data-share]').forEach(link=>{link.href=shareTargets[link.dataset.share];});

  const escape=value=>String(value).replace(/[&<>"']/g,char=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
  const related=(window.BHE_BLOG_POSTS||[]).filter(post=>post.category==='Student guides'&&post.slug!=='can-i-go-to-university-without-a-levels').slice(0,3);
  document.querySelector('#relatedArticles').innerHTML=related.map(post=>`<article class="blog-card"><a class="blog-card-photo" href="https://bheuni.io/blog/${encodeURIComponent(post.slug)}" data-allow-external tabindex="-1" aria-hidden="true"><img src="${escape(post.image)}" alt="" loading="lazy"></a><div class="blog-card-body"><span class="blog-tag">${escape(post.category)}</span><h3><a href="https://bheuni.io/blog/${encodeURIComponent(post.slug)}" data-allow-external>${escape(post.title)}</a></h3><p>${escape(post.description)}</p><div class="blog-card-foot"><span class="blog-card-date">${new Date(post.date+'T12:00:00').toLocaleDateString('en-GB',{day:'2-digit',month:'short',year:'numeric'})}</span><a class="blog-read" href="https://bheuni.io/blog/${encodeURIComponent(post.slug)}" data-allow-external aria-label="Read ${escape(post.title)}">Read story <i class="fa-solid fa-arrow-right" aria-hidden="true"></i></a></div></div></article>`).join('');
})();
