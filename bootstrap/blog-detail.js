(async () => {
  'use strict';
  const defaultSlug='can-i-go-to-university-without-a-levels';
  const slug=new URLSearchParams(location.search).get('slug')||defaultSlug;
  const post=(window.BHE_BLOG_POSTS||[]).find(item=>item.slug===slug);
  const article=document.querySelector('#articleContent');
  if(post)document.querySelector('.bd-breadcrumb>span').textContent=post.title;
  if(post && slug!==defaultSlug){
    document.title=post.title+' — BHE UNI Journal';
    document.querySelector('.bd-heading h1').textContent=post.title;
    document.querySelector('.bd-breadcrumb>span').textContent=post.title;
    const cover=document.querySelector('.bd-cover>img');cover.src=post.image;cover.alt=post.title;
    document.querySelector('.bd-date>span').textContent='Published '+new Date(post.date+'T12:00:00').toLocaleDateString('en-GB',{day:'2-digit',month:'long',year:'numeric'});
    try {
      const response=await fetch('articles/'+encodeURIComponent(slug)+'.json?v=2');
      if(!response.ok)throw new Error('Article unavailable');
      article.innerHTML=(await response.json()).html;
    } catch {article.innerHTML='';}
    if(!article.innerHTML){const p=document.createElement('p');p.textContent=post.description;article.appendChild(p);}
    const children=[...article.childNodes];article.replaceChildren();
    let section=null,number=0;
    for(const child of children){
      if(child.nodeType===1&&child.tagName==='H2'){
        section=document.createElement('section');section.className='bd-section';section.id='article-section-'+(++number);article.appendChild(section);
      }
      (section||article).appendChild(child);
    }
    article.querySelectorAll('table').forEach(table=>{const wrapper=document.createElement('div');wrapper.className='bd-table-wrap';wrapper.tabIndex=0;wrapper.setAttribute('role','region');wrapper.setAttribute('aria-label','Article comparison table');table.before(wrapper);wrapper.appendChild(table);});
    const toc=document.querySelector('.bd-toc nav');toc.replaceChildren();
    article.querySelectorAll('.bd-section').forEach(section=>{const a=document.createElement('a');a.href='#'+section.id;a.textContent=section.querySelector('h2').textContent;toc.appendChild(a);});
    document.querySelector('.bd-toc').hidden=!toc.children.length;
  }else if(!post){
    document.querySelector('.bd-heading h1').textContent='Article not found';
    article.innerHTML='<p>This article is unavailable. <a href="blogs.html">Browse the journal</a>.</p>';
    document.querySelector('.bd-cover').hidden=true;
    document.querySelector('.bd-toc').hidden=true;
  }

  article.querySelectorAll('img').forEach(image=>{
    image.loading='lazy';image.decoding='async';
    if(image.closest('.bd-inline-image'))return;
    const parent=image.parentElement;
    const figure=document.createElement('figure');figure.className='bd-inline-image';
    if(parent.tagName==='P'&&!parent.textContent.trim()&&parent.querySelectorAll('img').length===1){parent.before(figure);figure.appendChild(image);parent.remove();}
    else{image.before(figure);figure.appendChild(image);}
  });
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
  const publicArticle='https://bheuni.io/blog/'+encodeURIComponent(post?.slug||defaultSlug);
  const shareUrl=encodeURIComponent(publicArticle);
  const shareTitle=encodeURIComponent(post?.title||document.title);
  const shareTargets={
    facebook:`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`,
    linkedin:`https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`,
    whatsapp:`https://wa.me/?text=${shareTitle}%20${shareUrl}`,
    x:`https://twitter.com/intent/tweet?text=${shareTitle}&url=${shareUrl}`
  };
  document.querySelectorAll('[data-share]').forEach(link=>{link.href=shareTargets[link.dataset.share];});

  const escape=value=>String(value).replace(/[&<>"']/g,char=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
  const postCategory=post?.category;
  const related=(window.BHE_BLOG_POSTS||[]).filter(post=>post.category===postCategory&&post.slug!==slug).slice(0,3);
  const sidebarPosts=(window.BHE_BLOG_POSTS||[])
    .filter(item=>item.slug!==slug)
    .sort((a,b)=>Number(b.category===postCategory)-Number(a.category===postCategory)||b.date.localeCompare(a.date))
    .slice(0,3);
  document.querySelector('#sidebarRelatedArticles').innerHTML=sidebarPosts.map(item=>`
    <a class="bd-related-item" href="blog-detail.html?slug=${encodeURIComponent(item.slug)}">
      <img src="${escape(item.image)}" alt="" loading="lazy" width="114" height="54">
      <span><strong>${escape(item.title)}</strong><time datetime="${escape(item.date)}">${new Date(item.date+'T12:00:00').toLocaleDateString('en-US',{month:'long',day:'numeric',year:'numeric'})}</time></span>
    </a>`).join('');
  document.querySelector('.bd-related-sidebar').hidden=!sidebarPosts.length;
  document.querySelector('#relatedArticles').innerHTML=related.map(post=>`<article class="blog-card"><a class="blog-card-photo" href="blog-detail.html?slug=${encodeURIComponent(post.slug)}" tabindex="-1" aria-hidden="true"><img src="${escape(post.image)}" alt="" loading="lazy"></a><div class="blog-card-body"><span class="blog-tag">${escape(post.category)}</span><h3><a href="blog-detail.html?slug=${encodeURIComponent(post.slug)}">${escape(post.title)}</a></h3><p>${escape(post.description)}</p><div class="blog-card-foot"><span class="blog-card-date">${new Date(post.date+'T12:00:00').toLocaleDateString('en-GB',{day:'2-digit',month:'short',year:'numeric'})}</span><a class="blog-read" href="blog-detail.html?slug=${encodeURIComponent(post.slug)}" aria-label="Read ${escape(post.title)}">Read story <i class="fa-solid fa-arrow-right" aria-hidden="true"></i></a></div></div></article>`).join('');
})();
