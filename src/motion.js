// Original canvas motion: a living particle halo and responsive brand typography.
export function initParticleFields() {
  const cleanups=[]
  document.querySelectorAll('[data-particles]').forEach(field=>{
    const canvas=field.querySelector('canvas'), ctx=canvas?.getContext('2d',{alpha:true})
    if(!ctx)return
    const reduced=matchMedia('(prefers-reduced-motion: reduce)')
    const kind=field.dataset.particles,hero=kind==='hero',landing=kind==='landing'
    const pointer={x:-1000,y:-1000},particles=[]
    let width=0,height=0,targets=[],frame=0,last=0,phase=0,visible=false,paused=false,elapsed=0,lastTime=0,disposed=false
    const mask=document.createElement('canvas'),pen=mask.getContext('2d',{willReadFrequently:true})
    const targetFor=text=>{
      if(landing){
        const points=[],bands=width<600?13:21,steps=width<600?56:76
        for(let band=0;band<bands;band++)for(let i=0;i<steps;i++){
          const a=i/steps*Math.PI*2+band*.013,r=1+band*.019
          points.push({x:width*.5+Math.cos(a)*width*.42*r,y:height*.49+Math.sin(a)*height*.36*r,s:band/bands})
        }
        return points
      }
      mask.width=800;mask.height=hero?680:230
      pen.clearRect(0,0,mask.width,mask.height)
      const fontSize=hero?(text==='e'?600:text==='✳'?490:176):210
      pen.font=`500 ${fontSize}px "DM Sans", sans-serif`;pen.textAlign='center';pen.textBaseline='middle';pen.fillStyle='#000';pen.fillText(text,400,mask.height*.48)
      const pixels=pen.getImageData(0,0,mask.width,mask.height).data,points=[],gap=hero?8:7
      for(let y=0;y<mask.height;y+=gap)for(let x=0;x<mask.width;x+=gap)if(pixels[(y*mask.width+x)*4+3]>130)points.push({x:x/mask.width*width,y:y/mask.height*height})
      const limit=width<500?800:1600
      return points.length>limit?points.filter((_,i)=>i%Math.ceil(points.length/limit)===0):points
    }
    const setTargets=next=>{
      targets=targetFor(next)
      while(particles.length<targets.length)particles.push({x:Math.random()*width,y:Math.random()*height,vx:0,vy:0,s:Math.random(),r:Math.random()*.5+.75})
      particles.length=targets.length
    }
    const color=i=>landing?(i%11===0?'rgba(177,153,115,.65)':'rgba(79,124,149,.58)'):hero?(i%9===0?'#ad9780':'#637f8c'):(i%11===0?'#817566':'#42586b')
    const drawStatic=()=>{ctx.clearRect(0,0,width,height);targets.forEach((p,i)=>{ctx.beginPath();ctx.fillStyle=color(i);ctx.arc(p.x,p.y,landing?1.15:hero?1.45:1.25,0,Math.PI*2);ctx.fill()})}
    const resize=()=>{
      const rect=canvas.getBoundingClientRect();width=rect.width;height=rect.height
      if(width<1||height<1)return
      const dpr=Math.min(devicePixelRatio||1,1.5);canvas.width=Math.round(width*dpr);canvas.height=Math.round(height*dpr);ctx.setTransform(dpr,0,0,dpr,0,0)
      setTargets(hero?['e','✳','endrare.'][phase]:'endrare.');drawStatic()
    }
    const tick=time=>{
      frame=0
      if(!visible||document.hidden||paused||reduced.matches){lastTime=0;return}
      if(time-last<(width<600?32:22)){frame=requestAnimationFrame(tick);return}
      elapsed+=lastTime?Math.min(time-lastTime,40):16;lastTime=time;last=time
      const next=hero?Math.floor(elapsed/8500)%3:0
      if(next!==phase){phase=next;setTargets(['e','✳','endrare.'][phase])}
      ctx.clearRect(0,0,width,height)
      for(let i=0;i<particles.length;i++){
        const p=particles[i],t=targets[i]
        let tx=t.x+Math.sin(elapsed*.00045+p.s*12)*(landing?9:1.8),ty=t.y+Math.cos(elapsed*.00038+(landing?t.x*.008:p.s*8))*(landing?14:1.6)
        const dx=p.x-pointer.x,dy=p.y-pointer.y,d=Math.hypot(dx,dy),radius=landing?105:80
        if(d<radius&&d>0){tx+=dx/d*(radius-d)*1.35;ty+=dy/d*(radius-d)*1.35}
        p.vx=(p.vx+(tx-p.x)*.035)*.78;p.vy=(p.vy+(ty-p.y)*.035)*.78;p.x+=p.vx;p.y+=p.vy
        ctx.beginPath();ctx.fillStyle=color(i);ctx.arc(p.x,p.y,(landing?1.15:hero?1.5:1.35)*p.r,0,Math.PI*2);ctx.fill()
      }
      frame=requestAnimationFrame(tick)
    }
    const start=()=>{if(!disposed&&!frame&&!reduced.matches&&!paused&&visible&&!document.hidden)frame=requestAnimationFrame(tick)}
    const stop=()=>{cancelAnimationFrame(frame);frame=0;lastTime=0}
    const observer=new IntersectionObserver(entries=>{visible=entries[0].isIntersecting;if(visible)start();else stop()},{rootMargin:'60px'});observer.observe(field)
    const size=new ResizeObserver(resize);size.observe(field)
    const move=e=>{const r=canvas.getBoundingClientRect();pointer.x=e.clientX-r.left;pointer.y=e.clientY-r.top},leave=()=>{pointer.x=-1000;pointer.y=-1000}
    field.addEventListener('pointermove',move);field.addEventListener('pointerleave',leave)
    const visibility=()=>document.hidden?stop():start();document.addEventListener('visibilitychange',visibility)
    const motionChange=()=>{stop();if(reduced.matches)drawStatic();else start()};reduced.addEventListener('change',motionChange)
    const control=field.querySelector('[data-pause-particles]')
    const toggle=()=>{paused=!paused;control.setAttribute('aria-pressed',String(paused));control.setAttribute('aria-label',paused?'Resume ambient animation':'Pause ambient animation');control.textContent=paused?'Play motion ↗':'Pause motion Ⅱ';if(paused){stop();drawStatic()}else start()};control?.addEventListener('click',toggle)
    document.fonts.ready.then(()=>{if(!disposed&&field.isConnected){resize();field.classList.add('ed-particles-ready');start()}})
    cleanups.push(()=>{disposed=true;stop();observer.disconnect();size.disconnect();field.removeEventListener('pointermove',move);field.removeEventListener('pointerleave',leave);document.removeEventListener('visibilitychange',visibility);reduced.removeEventListener('change',motionChange);control?.removeEventListener('click',toggle)})
  })
  return()=>cleanups.forEach(fn=>fn())
}
