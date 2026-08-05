function showScreen(id){document.querySelectorAll('.screen').forEach(x=>x.classList.remove('active'));const el=document.getElementById(id);el.classList.add('active');el.setAttribute('tabindex','-1');el.focus();window.scrollTo({top:0,behavior:'smooth'});}
function setFeedback(id,ok,text){const el=document.getElementById(id);el.className='feedback show '+(ok?'ok':'bad');el.textContent=text;}
function markChoice(btn,ok,group){document.querySelectorAll(group+' .choice').forEach(b=>b.disabled=true);btn.classList.add(ok?'correct':'wrong');}
function saveDone(key){localStorage.setItem('plgr_'+key,'done');}
function done(key){return localStorage.getItem('plgr_'+key)==='done';}
