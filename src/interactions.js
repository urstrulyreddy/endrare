export function initInteractions(){
 const cleanup=[]
 const on=(el,type,fn,options)=>{el?.addEventListener(type,fn,options);cleanup.push(()=>el?.removeEventListener(type,fn,options))}
 const put=(selector,text)=>{const el=document.querySelector(selector);if(el)el.textContent=text}
 const choice=(attribute,handler)=>{
  document.querySelectorAll(`[${attribute}]`).forEach(button=>on(button,'click',()=>{
   button.parentElement.querySelectorAll(`[${attribute}]`).forEach(b=>b.setAttribute('aria-pressed',String(b===button)))
   handler(button.getAttribute(attribute))
  }))
 }
 choice('data-work-filter',value=>{
  let count=0
  document.querySelectorAll('[data-work-kind]').forEach(card=>{const show=value==='all'||card.dataset.workKind===value;card.hidden=!show;if(show)count++})
  put('[data-work-count]',`${String(count).padStart(2,'0')} projects`)
 })
 const workflow={support:['A customer asks for help','Find approved help content','Check scope and confidence','Answer or hand over'],knowledge:['A colleague asks a question','Retrieve permitted sources','Check relevance and access','Answer with source links'],report:['An agreed reporting trigger','Read the selected data','Review gaps and anomalies','Prepare a draft for approval']}
 choice('data-workflow',value=>workflow[value].forEach((t,i)=>put(`[data-flow="${i}"]`,t)))
 const roles={Manager:['See the whole week.','Balance coverage, responsibilities, and projected demand before publishing a schedule.'],'Shift leader':['Start the day with clarity.','See who is working, what needs attention, and where a handover matters.'],Employee:['Know where you stand.','Understand the next shift, your responsibilities, and the updates relevant to your day.']}
 choice('data-role-view',value=>{put('[data-role-title]',roles[value][0]);put('[data-role-body]',roles[value][1])})
 choice('data-context-view',value=>{
  put('[data-context-output]',value==='generic'?'We regret to inform you that the release has been delayed. We are working diligently to resolve the situation and will provide further updates as soon as possible. Thank you for your patience.':'We found an issue in the release checks. We’re holding the rollout while we verify the fix, and we’ll share a new timeline after that review. No action is needed from the team yet.')
  const tags=document.querySelector('.ed-context-tags');if(tags)tags.style.opacity=value==='generic'?'.35':'1'
 })
 const total=document.querySelector('#split-total'),people=document.querySelector('#split-people')
 const split=()=>{const n=Number(people.value),v=Number(total.value);put('#split-count',String(n));put('#split-result',total.value===''?'Enter a bill amount':!Number.isFinite(v)||v<0||v>1000000?'Use a total from 0 to 1,000,000 kr':`${(v/n).toLocaleString('en-GB',{minimumFractionDigits:2,maximumFractionDigits:2})} kr`)}
 on(total,'input',split);on(people,'input',split)
 const frame=document.querySelector('#motion-frame')
 on(frame,'input',()=>{const n=Number(frame.value),angle=Math.round(110+Math.sin(n*.22)*28);put('#frame-value',`Frame ${n} · ${angle}°`);const cursor=document.querySelector('#frame-cursor');cursor?.setAttribute('x1',String(n*10));cursor?.setAttribute('x2',String(n*10))})
 const food={breakfast:['“Oats, a banana, and coffee before work.”','Food · Breakfast','Oats, banana, coffee','Before work'],workout:['“A 40-minute gym session after work.”','Activity · Training','Gym session · 40 minutes','After work'],lunch:['“A rice bowl with vegetables for lunch.”','Food · Lunch','Rice, vegetables','Lunch']}
 choice('data-food-view',value=>{const d=food[value];['input','category','items','context'].forEach((key,i)=>put(`[data-food-${key}]`,d[i]))})
 const deployment={application:'01  /  APPLICATION\n\nFlask routes\n  → receive and validate a request\n  → call application logic\n  → return a clear response\n\nThe first layer of a dependable system.',container:'02  /  CONTAINER\n\nApplication + dependencies\n  → a defined container image\n  → a consistent runtime\n  → a repeatable deployment unit\n\nFewer differences between environments.',cloud:'03  /  CLOUD ENVIRONMENT\n\nThe container reaches AWS\n  → configure the Linux environment\n  → run and manage the application\n  → understand the operating system\n\nOwnership continues after deployment.'}
 choice('data-deploy',value=>put('[data-deploy-output]',deployment[value]))
 const cloud={network:'The network separates public and private parts of the system, so exposure is an explicit design choice.',compute:'Compute provides the environment where applications run. Configuration, ownership, and resource limits remain part of the engineering work.',observe:'Monitoring connects behaviour to evidence. Logs, metrics, and alerts help explain what is happening when a system meets real traffic.'}
 choice('data-cloud',value=>put('[data-cloud-description]',cloud[value]))
 const palettes={lilac:['#dcdff1','Lilac / Quiet possibility'],mint:['#dfe9df','Mint / Room to grow'],peach:['#f0dfd3','Peach / A human warmth'],sky:['#dbe6eb','Sky / A clearer perspective']}
 choice('data-palette',value=>{const panel=document.querySelector('[data-palette-panel]');if(panel)panel.style.background=palettes[value][0];put('[data-palette-name]',palettes[value][1])})
 document.querySelectorAll('[data-carousel]').forEach(section=>{
  const rail=section.querySelector('.ed-horizontal-rail'),prev=section.querySelector('[data-rail-prev]'),next=section.querySelector('[data-rail-next]'),track=section.querySelector('.ed-rail-track'),count=section.querySelector('[data-rail-count]'),cards=[...rail.children]
  const step=()=>cards[0].getBoundingClientRect().width+parseFloat(getComputedStyle(rail).gap||'0')
  const update=()=>{const max=rail.scrollWidth-rail.clientWidth;prev.disabled=rail.scrollLeft<2;next.disabled=rail.scrollLeft>=max-2;track.style.setProperty('--rail-progress',`${max?rail.scrollLeft/max*300:0}%`);const index=Math.min(cards.length,Math.max(1,Math.round(rail.scrollLeft/step())+1));count.textContent=`${String(index).padStart(2,'0')} / ${String(cards.length).padStart(2,'0')}`}
  const advance=direction=>rail.scrollBy({left:step()*direction,behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth'})
  on(prev,'click',()=>advance(-1));on(next,'click',()=>advance(1));on(rail,'scroll',update,{passive:true});on(window,'resize',update)
  on(rail,'keydown',e=>{if(e.target===rail&&(e.key==='ArrowRight'||e.key==='ArrowLeft')){e.preventDefault();advance(e.key==='ArrowRight'?1:-1)}})
  let startX=0,startScroll=0,down=false,dragged=false
  on(rail,'pointerdown',e=>{if(e.pointerType!=='mouse'||e.button!==0||e.target.closest('button,input,textarea,summary'))return;down=true;dragged=false;startX=e.clientX;startScroll=rail.scrollLeft})
  on(rail,'pointermove',e=>{if(!down)return;const distance=e.clientX-startX;if(Math.abs(distance)>6){dragged=true;rail.classList.add('ed-dragging');rail.setPointerCapture(e.pointerId);e.preventDefault();rail.scrollLeft=startScroll-distance}})
  const finish=()=>{down=false;rail.classList.remove('ed-dragging')}
  on(rail,'pointerleave',()=>{if(!dragged)finish()});on(rail,'pointerup',finish);on(rail,'pointercancel',finish);on(rail,'lostpointercapture',finish)
  on(rail,'click',e=>{if(dragged){e.preventDefault();e.stopPropagation();dragged=false}},true)
  update()
 })
 document.querySelectorAll('[data-orbit-toggle]').forEach(button=>on(button,'click',()=>{const paused=button.getAttribute('aria-pressed')!=='true';button.setAttribute('aria-pressed',String(paused));button.textContent=paused?'Play motion ↗':'Pause motion Ⅱ';button.closest('.ed-software-orbit').classList.toggle('ed-orbit-paused',paused)}))
 document.querySelectorAll('.ed-story-visual').forEach(stage=>{const visual=stage.querySelector('.ed-schedule,.ed-ai-demo,.ed-expense-demo');if(!visual)return;const fit=()=>stage.style.setProperty('--story-scale',String(Math.min(visual.classList.contains('ed-schedule')?.7:1.04,(stage.clientWidth-34)/(visual.offsetWidth+24))));const size=new ResizeObserver(fit);size.observe(stage);fit();cleanup.push(()=>size.disconnect())})
 const emailButton=document.querySelector('#copy-btn')
 on(emailButton,'click',async()=>{
  try{
   if(!navigator.clipboard?.writeText)throw new Error('Clipboard unavailable')
   await navigator.clipboard.writeText('hello@endrare.com');put('#copy-confirm','Email address copied.')
  }catch{
   const focus=document.activeElement,ta=document.createElement('textarea');ta.value='hello@endrare.com';ta.setAttribute('readonly','');ta.style.cssText='position:fixed;left:-9999px;top:0;';document.body.append(ta);ta.select();let copied=false;try{copied=document.execCommand('copy')}catch{}ta.remove();focus?.focus();put('#copy-confirm',copied?'Email address copied.':'Couldn’t copy automatically. Use the email link above.')
  }
 })
 const note=document.querySelector('#project-note'),draft=document.querySelector('#open-email-draft')
 let requested=new URLSearchParams(location.search).get('service')?.slice(0,120)
 if(requested&&draft){document.querySelectorAll('[name="contact-topic"]').forEach(r=>r.checked=false);const context=document.querySelector('[data-contact-context]');if(context){context.hidden=false;context.textContent=`Starting with: ${requested}`}}
 const updateDraft=()=>{if(!draft)return;const selected=document.querySelector('[name="contact-topic"]:checked')?.value||'A new project';const subject=requested||selected;const body=`Hello Endrare,\n\nI’d like to talk about ${subject.toLowerCase()}.\n\n${note?.value||''}\n\nBest,`;draft.href=`mailto:hello@endrare.com?subject=${encodeURIComponent(subject+' — Endrare')}&body=${encodeURIComponent(body)}`}
 document.querySelectorAll('[name="contact-topic"]').forEach(radio=>on(radio,'change',()=>{requested=null;const context=document.querySelector('[data-contact-context]');if(context)context.hidden=true;updateDraft()}));on(note,'input',updateDraft);updateDraft()
 return()=>cleanup.forEach(fn=>fn())
}
