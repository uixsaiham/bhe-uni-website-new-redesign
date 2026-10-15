(() => {
  'use strict';
  const form=document.querySelector('#blogEnquiryForm');
  if(!form)return;
  const $=id=>document.getElementById(id);
  const codes='AF AL DZ AS AD AO AI AG AR AM AW AU AT AZ BS BH BD BB BY BE BZ BJ BM BT BO BA BW BR BN BG BF BI KH CM CA CV KY CF TD CL CN CO KM CG CD CR CI HR CU CY CZ DK DJ DM DO EC EG SV GQ ER EE SZ ET FK FO FJ FI FR GF PF GA GM GE DE GH GI GR GL GD GP GU GT GN GW GY HT HN HK HU IS IN ID IR IQ IE IM IL IT JM JP JE JO KZ KE KI KP KR KW KG LA LV LB LS LR LY LI LT LU MO MG MW MY MV ML MT MH MQ MR MU YT MX FM MD MC MN ME MS MA MZ MM NA NR NP NL NC NZ NI NE NG NU NF MK MP NO OM PK PW PS PA PG PY PE PH PL PT PR QA RE RO RU RW KN LC VC WS SM ST SA SN RS SC SL SG SK SI SB SO ZA SS ES LK SD SR SE CH SY TW TJ TZ TH TL TG TO TT TN TR TM TC TV UG UA AE GB US UY UZ VU VA VE VN VG VI YE ZM ZW'.split(' ');
  const names=new Intl.DisplayNames(['en'],{type:'region'});
  codes.map(code=>({code,name:names.of(code)})).sort((a,b)=>a.name.localeCompare(b.name)).forEach(country=>{
    const option=document.createElement('option');option.value=country.code;option.textContent=country.name;$('enquiryCountry').appendChild(option);
  });
  let answer;
  const ids=['enquiryName','enquiryEmail','enquiryCountry','enquiryPhone','enquiryLevel','enquirySecurity'];
  function error(id,message){$(id+'Error').textContent=message;$(id).setAttribute('aria-invalid',message?'true':'false');}
  function refresh(){const random=new Uint32Array(2);crypto.getRandomValues(random);const a=random[0]%12+1,b=random[1]%9+1;answer=a+b;$('enquiryChallenge').textContent=`${a} + ${b} = ?`;$('enquirySecurity').value='';error('enquirySecurity','');}
  $('refreshEnquiryChallenge').addEventListener('click',()=>{refresh();$('enquirySecurity').focus();});
  ids.forEach(id=>$(id).addEventListener(id==='enquiryCountry'||id==='enquiryLevel'?'change':'input',()=>{error(id,'');$('enquiryStatus').hidden=true;}));
  form.addEventListener('submit',event=>{
    event.preventDefault();
    const errors={};
    if($('enquiryName').value.trim().length<2)errors.enquiryName='Enter your full name.';
    if(!$('enquiryEmail').value.trim()||!$('enquiryEmail').validity.valid)errors.enquiryEmail='Enter a valid email address.';
    if(!$('enquiryCountry').value)errors.enquiryCountry='Select your country of residence.';
    const phone=$('enquiryPhone').value.trim();
    if(!/^[+\d\s().-]+$/.test(phone)||phone.replace(/\D/g,'').length<7||phone.replace(/\D/g,'').length>15)errors.enquiryPhone='Enter a valid number with country code.';
    if(!$('enquiryLevel').value)errors.enquiryLevel='Select your interested study level.';
    if(!$('enquirySecurity').value.trim()||Number($('enquirySecurity').value)!==answer)errors.enquirySecurity='Check your answer and try again.';
    ids.forEach(id=>error(id,errors[id]||''));
    if(Object.keys(errors).length){$(Object.keys(errors)[0]).focus();return;}
    const status=$('enquiryStatus');status.textContent='Your details passed validation. This is a local preview, so no enquiry has been sent.';status.hidden=false;status.focus();
  });
  refresh();
  const dialog=$('blogEnquiryDialog');
  const fromBlogListing=new URLSearchParams(location.search).get('from')==='blogs'||(()=>{
    try{return new URL(document.referrer).pathname.endsWith('/blogs.html');}catch{return false;}
  })();
  let elapsed=false,scrolled=fromBlogListing||window.scrollY>60,shown=false;
  function maybeOpen(){
    if(!elapsed||!scrolled||shown)return;
    // Wait until another native dialog closes rather than stacking prompts.
    if(document.querySelector('dialog[open]'))return;
    dialog.showModal();shown=true;
    window.removeEventListener('scroll',onScroll);
  }
  function onScroll(){if(window.scrollY>60){scrolled=true;maybeOpen();}}
  window.addEventListener('scroll',onScroll,{passive:true});
  setTimeout(()=>{elapsed=true;maybeOpen();},2000);
  document.addEventListener('close',maybeOpen,true);
  $('closeBlogEnquiry').addEventListener('click',()=>dialog.close());
  dialog.addEventListener('click',event=>{if(event.target===dialog){const rect=dialog.getBoundingClientRect();if(event.clientX<rect.left||event.clientX>rect.right||event.clientY<rect.top||event.clientY>rect.bottom)dialog.close();}});
})();
