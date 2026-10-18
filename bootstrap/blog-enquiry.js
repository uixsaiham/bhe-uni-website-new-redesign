(() => {
  'use strict';
  const form=document.querySelector('#blogEnquiryForm');
  if(!form)return;
  const $=id=>document.getElementById(id);
  const ids=['enquiryName','enquiryEmail','enquiryPhone'];
  function error(id,message){$(id+'Error').textContent=message;$(id).setAttribute('aria-invalid',message?'true':'false');}
  ids.forEach(id=>$(id).addEventListener('input',()=>{error(id,'');$('enquiryStatus').hidden=true;}));
  form.addEventListener('submit',event=>{
    event.preventDefault();
    const errors={};
    if($('enquiryName').value.trim().length<2)errors.enquiryName='Enter your full name.';
    if(!$('enquiryEmail').value.trim()||!$('enquiryEmail').validity.valid)errors.enquiryEmail='Enter a valid email address.';
    const phone=$('enquiryPhone').value.trim();
    if(!/^[+\d\s().-]+$/.test(phone)||phone.replace(/\D/g,'').length<7||phone.replace(/\D/g,'').length>15)errors.enquiryPhone='Enter a valid number with country code.';
    ids.forEach(id=>error(id,errors[id]||''));
    if(Object.keys(errors).length){$(Object.keys(errors)[0]).focus();return;}
    const status=$('enquiryStatus');status.textContent='Your details passed validation. This is a local preview, so no enquiry has been sent.';status.hidden=false;status.focus();
  });
})();
