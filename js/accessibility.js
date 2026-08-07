(function(){
  'use strict';
  const style=document.createElement('style');
  style.textContent=`
    :focus-visible{outline:4px solid #facc15!important;outline-offset:4px!important}
    button,a,input,select,textarea{font:inherit}
    button,a[href],select,input[type="range"],input[type="checkbox"],input[type="radio"]{min-height:44px}
    @media (prefers-reduced-motion:reduce){*,*::before,*::after{animation-duration:.01ms!important;animation-iteration-count:1!important;transition-duration:.01ms!important;scroll-behavior:auto!important}}
    .sr-only{position:absolute!important;width:1px!important;height:1px!important;padding:0!important;margin:-1px!important;overflow:hidden!important;clip:rect(0,0,0,0)!important;white-space:nowrap!important;border:0!important}
  `;
  document.head.appendChild(style);
  document.querySelectorAll('button:not([type])').forEach(b=>b.type='button');
  document.querySelectorAll('.feedback').forEach(el=>{if(!el.hasAttribute('role'))el.setAttribute('role','status');if(!el.hasAttribute('aria-live'))el.setAttribute('aria-live','polite');});
  document.querySelectorAll('canvas,[aria-hidden="true"]').forEach(el=>{if(el.tagName==='CANVAS'&&!el.hasAttribute('aria-label')) el.setAttribute('aria-hidden','true');});
  document.querySelectorAll('h1,h2').forEach(h=>{if(!h.hasAttribute('tabindex'))h.setAttribute('tabindex','-1');});
  const observer=new MutationObserver(()=>document.querySelectorAll('.feedback').forEach(el=>{if(!el.hasAttribute('role'))el.setAttribute('role','status');if(!el.hasAttribute('aria-live'))el.setAttribute('aria-live','polite');}));
  observer.observe(document.body,{subtree:true,childList:true,attributes:true,attributeFilter:['class']});
})();
