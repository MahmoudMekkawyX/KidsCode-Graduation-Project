(function(){
  var CREDS={'student@demo.kidscode':'studentDach.html','teacher@demo.kidscode':'teacherDash.html','admin@demo.kidscode':'AdminDashboard.html'};
  function toast(msg){var t=document.createElement('div');t.textContent=msg;t.style.cssText='position:fixed;left:50%;bottom:28px;transform:translateX(-50%);background:#1f2937;color:#fff;padding:12px 20px;border-radius:10px;font:14px/1.4 system-ui,sans-serif;z-index:99999;box-shadow:0 8px 24px rgba(0,0,0,.3);max-width:90vw;text-align:center';document.body.appendChild(t);setTimeout(function(){t.remove()},3800);}
  document.addEventListener('submit',function(e){
    var f=e.target, sub=e.submitter, act=(f.getAttribute('action')||'');
    if(f.classList.contains('signIn-Form')){e.preventDefault();e.stopImmediatePropagation();
      var em=(f.querySelector('[name=email]').value||'').trim().toLowerCase(), pw=f.querySelector('[name=password]').value;
      if(CREDS[em]&&pw==='demo1234'){location.href=CREDS[em];}else{toast('Use one of the demo accounts below (password demo1234).');}
      return;}
    if(sub&&sub.name==='logout'){e.preventDefault();location.href='login.html';return;}
    if(f.classList.contains('signUp-Form')){e.preventDefault();toast('Sign up is disabled in the static demo. Use a demo account.');return;}
    var m=(f.getAttribute('method')||'get').toLowerCase();
    if(m==='post'||/\.php/.test(act)){e.preventDefault();e.stopImmediatePropagation();toast('Read-only demo: saving is disabled here. Run the PHP version locally for full features.');}
  },true);
  document.addEventListener('DOMContentLoaded',function(){
    var st=document.createElement('style');st.textContent='video{max-width:100%!important;height:auto!important}';document.head.appendChild(st);
    var p=location.pathname.split('/').pop();
    if(/^(studentDach|teacherDash|AdminDashboard)\.html$/.test(p)){
      var b=document.createElement('div');b.textContent='Demo mode \u00b7 read-only sample data';
      b.style.cssText='position:fixed;right:14px;bottom:14px;background:#111827;color:#fde68a;padding:7px 14px;border-radius:999px;font:600 12px system-ui,sans-serif;z-index:99998;opacity:.92;pointer-events:none';
      document.body.appendChild(b);}
    if(p==='login.html'){
      var box=document.createElement('div');
      box.style.cssText='position:fixed;left:50%;bottom:16px;transform:translateX(-50%);background:#fff;border:1px solid #e5e7eb;border-radius:14px;padding:12px 16px;font:13px/1.4 system-ui,sans-serif;z-index:99998;box-shadow:0 10px 30px rgba(0,0,0,.15);text-align:center;max-width:94vw';
      box.innerHTML='<div style="font-weight:700;margin-bottom:8px">Try the demo (password: demo1234)</div>'+
       ['student','teacher','admin'].map(function(r){return '<button data-r="'+r+'" style="margin:2px 4px;padding:6px 14px;border:0;border-radius:8px;background:#6d5dfc;color:#fff;font-weight:600;cursor:pointer">'+r[0].toUpperCase()+r.slice(1)+'</button>'}).join('');
      document.body.appendChild(box);
      box.addEventListener('click',function(e){var r=e.target.getAttribute&&e.target.getAttribute('data-r');if(r){location.href={student:'studentDach.html',teacher:'teacherDash.html',admin:'AdminDashboard.html'}[r];}});
    }
  });
})();
