import { initInteractions } from './interactions.js'
import { initParticleFields } from './motion.js'
export function initDesign() {
  const disposers = [initParticleFields(), initInteractions()]
  const listen = (target, event, fn, options) => { target?.addEventListener(event, fn, options); disposers.push(() => target?.removeEventListener(event, fn, options)) }
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)')
  const reveal = new IntersectionObserver(entries => entries.forEach(entry => {
    if (entry.isIntersecting) { entry.target.classList.add('ed-visible'); reveal.unobserve(entry.target) }
  }), { threshold: 0.06 })
  document.querySelectorAll('.ed-reveal').forEach(el => { if (!reduced.matches) { el.classList.add('ed-will-reveal'); reveal.observe(el) } })
  disposers.push(() => reveal.disconnect())
  const toggle = document.querySelector('.ed-nav-disclosure')
  const dropdown = document.querySelector('.ed-dropdown')
  const closeDropdown = () => { if (dropdown) dropdown.hidden = true; toggle?.setAttribute('aria-expanded', 'false') }
  listen(toggle, 'click', () => { const isOpen = toggle.getAttribute('aria-expanded') === 'true'; toggle.setAttribute('aria-expanded', String(!isOpen)); dropdown.hidden = isOpen })
  listen(document, 'click', e => { if (!e.target.closest('.ed-work-menu')) closeDropdown() })
  listen(document, 'keydown', e => { if (e.key === 'Escape' && dropdown && !dropdown.hidden) { closeDropdown(); toggle.focus() } })
  listen(document, 'focusin', e => { if (!e.target.closest('.ed-work-menu')) closeDropdown() })
  const dialog = document.querySelector('#ed-mobile-menu')
  const menuButton = document.querySelector('.ed-menu-button')
  const closeButton = document.querySelector('.ed-menu-close')
  const closeMenu = () => dialog?.close()
  listen(menuButton, 'click', () => { dialog.showModal(); menuButton.setAttribute('aria-expanded','true'); document.body.classList.add('ed-menu-open'); closeButton.focus() })
  listen(closeButton, 'click', closeMenu)
  listen(dialog, 'close', () => { document.body.classList.remove('ed-menu-open'); menuButton.setAttribute('aria-expanded','false'); menuButton.focus() })
  listen(dialog, 'click', e => { if (e.target === dialog || e.target.closest('a')) closeMenu() })
  listen(window, 'resize', () => { if (window.innerWidth > 760 && dialog?.open) closeMenu() })
  const clock = document.querySelector('.ed-local-time')
  const tick = () => { if (clock) clock.textContent = `Sweden · ${new Intl.DateTimeFormat('en-GB', { timeZone: 'Europe/Stockholm', hour:'2-digit', minute:'2-digit' }).format(new Date())}` }
  tick(); const interval = setInterval(tick, 60000); disposers.push(() => clearInterval(interval))
  let frame = 0
  const art = document.querySelector('[data-parallax]')
  if (art && window.matchMedia('(pointer: fine)').matches && !reduced.matches) {
    listen(art, 'pointermove', e => { cancelAnimationFrame(frame); frame = requestAnimationFrame(() => { const rect = art.getBoundingClientRect(); art.style.setProperty('--px', `${((e.clientX - rect.left) / rect.width - .5) * 12}px`); art.style.setProperty('--py', `${((e.clientY - rect.top) / rect.height - .5) * 10}px`) }) })
    listen(art, 'pointerleave', () => { cancelAnimationFrame(frame); art.style.setProperty('--px','0px'); art.style.setProperty('--py','0px') })
  }
  disposers.push(() => cancelAnimationFrame(frame))
  // One passive listener and one animation frame for all scroll-linked effects.
  const header = document.querySelector('.ed-header')
  const stages = [...document.querySelectorAll('.ed-project-art')]
  const strip = document.querySelector('.ed-disciplines')
  const cinema = document.querySelector('[data-cinema]')
  const filmFrames = cinema ? [...cinema.querySelectorAll('[data-film-frame]')] : []
  let activeFilm = -1
  let scrollFrame = 0
  const updateScroll = () => {
    const vh = window.innerHeight
    const available = document.documentElement.scrollHeight - vh
    header?.style.setProperty('--ed-progress', available > 0 ? String(window.scrollY / available) : '0')
    if (!reduced.matches) {
      if (cinema) {
        const rect = cinema.getBoundingClientRect()
        const progress = Math.max(0, Math.min(1, -rect.top / Math.max(1, rect.height - vh)))
        if (rect.top < vh && rect.bottom > 0) {
          cinema.style.setProperty('--film-progress',String(progress))
          cinema.style.setProperty('--film-scale',String(1.13 - Math.sin(progress*Math.PI)*.2 + progress*.13))
          cinema.style.setProperty('--film-x',`${progress*-90}px`)
          cinema.style.setProperty('--film-rotate',`${-7+progress*13}deg`)
        }
        const frame = progress < .32 ? 0 : progress < .67 ? 1 : 2
        if (frame !== activeFilm) {
          activeFilm = frame
          filmFrames.forEach((el,i)=>{ el.classList.toggle('ed-cinema-frame-active',i===frame); el.setAttribute('aria-hidden',String(i!==frame)) })
          const counter=cinema.querySelector('.ed-film-counter')
          if(counter)counter.textContent=`0${frame+1} — 03`
        }
      }
      stages.forEach(stage => {
        const rect = stage.getBoundingClientRect()
        if (rect.top < vh && rect.bottom > 0) stage.style.setProperty('--ed-scroll', String(Math.max(-1,Math.min(1,(vh*.65-rect.top)/(vh*.8)))))
      })
      if (art) {
        const rect = art.getBoundingClientRect()
        if (rect.bottom > 0) art.style.setProperty('--ed-drift', `${Math.min(32,Math.max(-8,window.scrollY*.065))}px`)
      }
      if (strip) {
        const rect = strip.getBoundingClientRect()
        if (rect.top < vh && rect.bottom > 0) {
          const phase = (vh*.65-rect.top)/vh
          strip.style.setProperty('--ed-strip', `${phase*-12}px`)
          strip.style.setProperty('--ed-rotate', `${phase*75}deg`)
        }
      }
    }
    scrollFrame = 0
  }
  const queueScroll = () => { if (!scrollFrame) scrollFrame = requestAnimationFrame(updateScroll) }
  listen(window,'scroll',queueScroll,{passive:true})
  listen(window,'resize',queueScroll)
  listen(reduced,'change',()=>{
    if(reduced.matches)filmFrames.forEach(el=>el.removeAttribute('aria-hidden'))
    else activeFilm=-1
    queueScroll()
  })
  updateScroll()
  disposers.push(()=>cancelAnimationFrame(scrollFrame))
  const steps = new IntersectionObserver(entries => entries.forEach(entry => {
    if (entry.isIntersecting) { entry.target.classList.add('ed-step-active'); steps.unobserve(entry.target) }
  }),{threshold:.6})
  document.querySelectorAll('.ed-principles>div').forEach(el => { if (!reduced.matches) { el.classList.add('ed-step-wait'); steps.observe(el) } })
  disposers.push(()=>steps.disconnect())
  return () => disposers.forEach(dispose => dispose())
}
