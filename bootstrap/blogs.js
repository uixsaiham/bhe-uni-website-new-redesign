(() => {
  'use strict';
  const escape = value => String(value).replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
  const posts = (window.BHE_BLOG_POSTS || []).map(post => ({...post, title:escape(post.title), description:escape(post.description)}));
  const categories=['All articles','Student guides','Study destinations','Courses & careers','English tests','Scholarships'];
  const $=s=>document.querySelector(s);
  const grid=$('#blogGrid'), filters=$('#blogFilters'), pager=$('#blogPager');
  let category='All articles', page=1;
  const size=18;
  const formatDate=s=>new Date(s+'T12:00:00').toLocaleDateString('en-GB',{day:'2-digit',month:'short',year:'numeric'});
  const articleUrl=p=>'blog-detail.html?slug='+encodeURIComponent(p.slug)+'&from=blogs';
  function render(){
    const query=$('#blogSearch').value.trim().toLowerCase();
    const filtered=posts.filter(p=>(category==='All articles'||p.category===category)&&[p.title,p.description,p.category].join(' ').toLowerCase().includes(query)).sort((a,b)=>$('#blogSort').value==='new'?b.date.localeCompare(a.date):a.date.localeCompare(b.date));
    filters.innerHTML=categories.map(c=>`<button type="button" data-topic="${c}" class="${category===c?'active':''}" aria-pressed="${category===c}">${c}</button>`).join('');
    page=Math.max(1,Math.min(page,Math.ceil(filtered.length/size)||1));
    $('#blogCount').textContent=filtered.length ? `Showing ${(page-1)*size+1}–${Math.min(page*size,filtered.length)} of ${filtered.length} articles${category==='All articles'?'':' · '+category}` : 'No matching articles';
    grid.innerHTML=filtered.slice((page-1)*size,page*size).map(p=>`<article class="blog-card"><a class="blog-card-photo" href="${articleUrl(p)}" tabindex="-1" aria-hidden="true"><img src="${p.image}" alt="" loading="lazy"></a><div class="blog-card-body"><div class="blog-card-meta"><span class="blog-tag">${p.category}</span><time class="blog-card-date" datetime="${p.date}">${formatDate(p.date)}</time></div><h3><a href="${articleUrl(p)}">${p.title}</a></h3><p>${p.description}</p><div class="blog-card-foot"><a class="blog-card-author" href="author.html"><img src="assets/team/shafiq.png" alt=""><span><strong>Dr Mohammad Shafiq</strong><small>Author</small></span></a><a class="blog-read" href="${articleUrl(p)}" aria-label="Read ${p.title}">Read story <i class="fa-solid fa-arrow-right" aria-hidden="true"></i></a></div></div></article>`).join('')||'<div class="blog-empty"><h3>No articles found.</h3><p>Try another search or explore all topics.</p><button type="button" id="resetBlog">Clear filters</button></div>';
    const total=Math.ceil(filtered.length/size);
    const pages=[];
    for(let n=1;n<=total;n++) if(n===1||n===total||Math.abs(n-page)<=1)pages.push(n);
    let previous=0;
    const numbered=pages.map(n=>{const gap=previous&&n-previous>1?'<span class="blog-page-gap" aria-hidden="true">…</span>':'';previous=n;return gap+`<button type="button" data-page="${n}" aria-label="Page ${n}" ${page===n?'aria-current="page"':''}>${n}</button>`;}).join('');
    pager.innerHTML=total>1?`<button type="button" class="blog-page-direction" data-page="${page-1}" ${page===1?'disabled':''} aria-label="Previous page"><i class="fa-solid fa-chevron-left" aria-hidden="true"></i><span>Previous</span></button>${numbered}<button type="button" class="blog-page-direction" data-page="${page+1}" ${page===total?'disabled':''} aria-label="Next page"><span>Next</span><i class="fa-solid fa-chevron-right" aria-hidden="true"></i></button><span class="blog-page-summary">Page ${page} of ${total}</span>`:'';
  }
  filters.addEventListener('click',e=>{const b=e.target.closest('[data-topic]');if(b){category=b.dataset.topic;page=1;render();}});
  $('#blogSearch').addEventListener('input',()=>{page=1;render();});
  $('#blogSort').addEventListener('change',()=>{page=1;render();});
  pager.addEventListener('click',e=>{const b=e.target.closest('[data-page]');if(b&&!b.disabled){page=Number(b.dataset.page);render();$('#articles').scrollIntoView({behavior:'smooth'});}});
  grid.addEventListener('click',e=>{if(e.target.closest('#resetBlog')){category='All articles';page=1;$('#blogSearch').value='';render();}});
  render();
})();
