// Endrare homepage interactions: particles, reveals, previews, story timeline and pointer details.
// Every effect responds to the visitor and respects prefers-reduced-motion.

const LOGO_SRC = '/images/endrare-symbol.png'

function particleField(canvas, kind, isPaused) {
  const ctx = canvas.getContext('2d')
  const mask = document.createElement('canvas')
  const pen = mask.getContext('2d', { willReadFrequently: true })
  const pointer = { x: -1000, y: -1000 }
  const parts = []
  const halo = kind === 'halo'
  const morph = kind === 'morph'
  const words = ['e', 'logo', 'endrare.']
  let w = 0, h = 0, targets = [], frame = 0, elapsed = 0, lastTime = 0, phase = 0, visible = true, dead = false
  const logo = new Image()
  logo.onload = () => { if (morph && phase === 1) setTargets('logo') }
  logo.src = LOGO_SRC

  const color = (i) => {
    if (halo) return i % 11 === 0 ? 'rgba(199,167,125,.85)' : 'rgba(196,200,204,.42)'
    if (morph) return i % 9 === 0 ? '#9a7b55' : '#3a4044'
    return i % 11 === 0 ? 'rgba(199,167,125,.9)' : 'rgba(167,163,155,.55)'
  }
  const targetFor = (text) => {
    if (halo) {
      const pts = [], bands = w < 600 ? 13 : 21, steps = w < 600 ? 56 : 76
      for (let b = 0; b < bands; b++) for (let i = 0; i < steps; i++) {
        const a = i / steps * Math.PI * 2 + b * 0.013, r = 1 + b * 0.019
        pts.push({ x: w * 0.5 + Math.cos(a) * Math.min(w * 0.42, 620) * r, y: h * 0.42 + Math.sin(a) * h * 0.34 * r })
      }
      return pts
    }
    mask.width = 800; mask.height = morph ? 680 : 230
    pen.clearRect(0, 0, mask.width, mask.height)
    if (text === 'logo') {
      if (logo.complete && logo.naturalWidth) {
        const lh = mask.height * 0.62, lw = lh * logo.naturalWidth / logo.naturalHeight
        pen.drawImage(logo, 400 - lw / 2, mask.height * 0.48 - lh / 2, lw, lh)
      } else text = '✳'
    }
    if (text !== 'logo') {
      const fs = morph ? (text === 'e' ? 600 : text === '✳' ? 490 : 176) : 210
      pen.font = `500 ${fs}px "DM Sans", sans-serif`; pen.textAlign = 'center'; pen.textBaseline = 'middle'; pen.fillStyle = '#000'
      pen.fillText(text, 400, mask.height * 0.48)
    }
    const px = pen.getImageData(0, 0, mask.width, mask.height).data, pts = [], gap = morph ? 8 : 6
    for (let y = 0; y < mask.height; y += gap) for (let x = 0; x < mask.width; x += gap) if (px[(y * mask.width + x) * 4 + 3] > 130) pts.push({ x: x / mask.width * w, y: y / mask.height * h })
    const limit = w < 500 ? 900 : 1800
    return pts.length > limit ? pts.filter((_, i) => i % Math.ceil(pts.length / limit) === 0) : pts
  }
  const setTargets = (t) => {
    targets = targetFor(t)
    while (parts.length < targets.length) parts.push({ x: Math.random() * w, y: Math.random() * h, vx: 0, vy: 0, s: Math.random(), r: Math.random() * 0.5 + 0.75 })
    parts.length = targets.length
  }
  const still = () => {
    ctx.clearRect(0, 0, w, h)
    targets.forEach((p, i) => { ctx.beginPath(); ctx.fillStyle = color(i); ctx.arc(p.x, p.y, halo ? 1.15 : 1.4, 0, Math.PI * 2); ctx.fill() })
  }
  const resize = () => {
    const rect = canvas.getBoundingClientRect(); w = rect.width; h = rect.height
    if (w < 1 || h < 1) return
    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    canvas.width = Math.round(w * dpr); canvas.height = Math.round(h * dpr); ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    setTargets(morph ? words[phase] : 'endrare.')
    still()
  }
  const reduced = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const loop = (time) => {
    frame = 0
    if (dead) return
    if (!visible || document.hidden || (halo && isPaused()) || reduced()) { lastTime = 0; return }
    elapsed += lastTime ? Math.min(time - lastTime, 40) : 16; lastTime = time
    if (morph) { const next = Math.floor(elapsed / 7000) % 3; if (next !== phase) { phase = next; setTargets(words[phase]) } }
    ctx.clearRect(0, 0, w, h)
    for (let i = 0; i < parts.length; i++) {
      const p = parts[i], t = targets[i]
      let tx = t.x + Math.sin(elapsed * 0.00045 + p.s * 12) * (halo ? 9 : 1.8)
      let ty = t.y + Math.cos(elapsed * 0.00038 + (halo ? t.x * 0.008 : p.s * 8)) * (halo ? 14 : 1.6)
      const dx = p.x - pointer.x, dy = p.y - pointer.y, d = Math.hypot(dx, dy), rad = halo ? 120 : 85
      if (d < rad && d > 0) { tx += dx / d * (rad - d) * 1.4; ty += dy / d * (rad - d) * 1.4 }
      p.vx = (p.vx + (tx - p.x) * 0.035) * 0.78; p.vy = (p.vy + (ty - p.y) * 0.035) * 0.78; p.x += p.vx; p.y += p.vy
      ctx.beginPath(); ctx.fillStyle = color(i); ctx.arc(p.x, p.y, (halo ? 1.15 : morph ? 1.5 : 1.35) * p.r, 0, Math.PI * 2); ctx.fill()
    }
    frame = requestAnimationFrame(loop)
  }
  const start = () => { if (!frame && !dead) frame = requestAnimationFrame(loop) }
  const io = new IntersectionObserver((e) => { visible = e[0].isIntersecting; if (visible) start() }, { rootMargin: '80px' })
  io.observe(canvas)
  const ro = new ResizeObserver(resize)
  ro.observe(canvas)
  resize(); start()
  if (document.fonts?.ready) document.fonts.ready.then(() => { if (!dead) resize() })
  return {
    start, still,
    move(e) { const r = canvas.getBoundingClientRect(); pointer.x = e.clientX - r.left; pointer.y = e.clientY - r.top },
    leave() { pointer.x = -1000; pointer.y = -1000 },
    dispose() { dead = true; cancelAnimationFrame(frame); io.disconnect(); ro.disconnect() },
  }
}

export function initHome(root) {
  if (!root) return () => {}
  const cleanups = []
  const on = (el, ev, fn, opts) => { if (!el) return; el.addEventListener(ev, fn, opts); cleanups.push(() => el.removeEventListener(ev, fn, opts)) }
  const $ = (sel) => root.querySelector(sel)
  const $$ = (sel) => [...root.querySelectorAll(sel)]
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const fine = window.matchMedia('(pointer: fine)').matches && !reduced
  const rel = (e, el) => { const r = el.getBoundingClientRect(); return { x: (e.clientX - r.left) / r.width, y: (e.clientY - r.top) / r.height } }

  // Reveals
  if (!reduced) document.documentElement.classList.add('eh-anim')
  const reveal = (el) => { el.classList.add('in'); el.querySelectorAll('.rv').forEach((c) => c.classList.add('in')) }
  const heroIn = setTimeout(() => $$('#top .rv').forEach((el) => el.classList.add('in')), 60)
  cleanups.push(() => clearTimeout(heroIn))
  if (reduced) $$('[data-rv]').forEach(reveal)
  else {
    const io = new IntersectionObserver((entries) => entries.forEach((e) => { if (e.isIntersecting) { reveal(e.target); io.unobserve(e.target) } }), { threshold: 0.15 })
    $$('[data-rv]').forEach((el) => io.observe(el))
    cleanups.push(() => io.disconnect())
  }

  // Particles
  let paused = false
  const fields = {}
  $$('[data-field]').forEach((c) => { fields[c.dataset.field] = particleField(c, c.dataset.field, () => paused) })
  $$('[data-field-zone]').forEach((zone) => {
    const f = fields[zone.querySelector('[data-field]')?.dataset.field]
    if (!f) return
    on(zone, 'pointermove', (e) => f.move(e)); on(zone, 'pointerleave', () => f.leave())
  })
  cleanups.push(() => Object.values(fields).forEach((f) => f.dispose()))
  const pauseBtn = $('[data-pause]')
  on(pauseBtn, 'click', () => {
    paused = !paused
    pauseBtn.setAttribute('aria-pressed', String(paused)); pauseBtn.textContent = paused ? 'Play motion' : 'Pause motion'
    if (paused) fields.halo?.still(); else fields.halo?.start()
  })

  // Hero preview tabs with gentle autoplay until the visitor chooses
  const tabs = $$('[data-pick]'), screens = $$('#top .screen')
  let active = 0, manual = false
  const show = (i) => {
    active = i
    tabs.forEach((t, k) => {
      t.setAttribute('aria-pressed', String(k === i))
      const bar = t.querySelector('.tab-bar i'); if (bar) bar.replaceWith(bar.cloneNode())
    })
    screens.forEach((s, k) => s.classList.toggle('on', k === i))
  }
  tabs.forEach((t) => on(t, 'click', () => { manual = true; $$('.tab-bar').forEach((b) => b.classList.add('still')); show(Number(t.dataset.pick)) }))
  if (reduced) $$('.tab-bar').forEach((b) => b.classList.add('still'))
  else { const auto = setInterval(() => { if (!manual && !document.hidden) show((active + 1) % 3) }, 5000); cleanups.push(() => clearInterval(auto)) }

  // Skift roles
  const roleCaps = ['Managers see coverage, hours and demand for the whole week.', 'Shift leaders see who is on today, team notes and requests.', 'Employees see their next shift, pick up open shifts and swap from their phone.']
  const roleTabs = $$('[data-role]'), roleScreens = $$('#skift-roles .screen'), roleCaption = $('[data-role-caption]')
  roleTabs.forEach((t) => on(t, 'click', () => {
    const i = Number(t.dataset.role)
    roleTabs.forEach((b, k) => b.setAttribute('aria-pressed', String(k === i)))
    roleScreens.forEach((s, k) => s.classList.toggle('on', k === i))
    if (roleCaption) roleCaption.textContent = roleCaps[i]
  }))

  // Pointer details
  $$('[data-magnet]').forEach((el) => {
    on(el, 'pointermove', (e) => {
      if (!fine) return
      const p = rel(e, el)
      el.style.setProperty('--tx', `${((p.x - 0.5) * 10).toFixed(1)}px`); el.style.setProperty('--ty', `${((p.y - 0.5) * 8).toFixed(1)}px`)
      el.style.setProperty('--bx', `${(p.x * 100).toFixed(0)}%`); el.style.setProperty('--by', `${(p.y * 100).toFixed(0)}%`)
    })
    on(el, 'pointerleave', () => { el.style.setProperty('--tx', '0px'); el.style.setProperty('--ty', '0px') })
  })
  $$('[data-tilt]').forEach((wrap) => {
    const stage = wrap.firstElementChild
    on(wrap, 'pointermove', (e) => {
      if (!fine) return
      const p = rel(e, wrap)
      stage.style.setProperty('--ry', `${((p.x - 0.5) * 7).toFixed(2)}deg`); stage.style.setProperty('--rx', `${((0.5 - p.y) * 5).toFixed(2)}deg`)
      stage.style.setProperty('--gx', `${(p.x * 100).toFixed(0)}%`); stage.style.setProperty('--gy', `${(p.y * 100).toFixed(0)}%`)
    })
    on(wrap, 'pointerleave', () => { stage.style.setProperty('--rx', '0deg'); stage.style.setProperty('--ry', '0deg') })
  })
  $$('[data-scrub]').forEach((vp) => {
    on(vp, 'pointermove', (e) => { if (!fine) return; const p = rel(e, vp); vp.firstElementChild.style.setProperty('--scrub', Math.max(0, Math.min(1, (p.y - 0.12) / 0.76)).toFixed(3)) })
    on(vp, 'pointerleave', () => vp.firstElementChild.style.setProperty('--scrub', '0'))
  })
  $$('[data-spot]').forEach((el) => on(el, 'pointermove', (e) => { const p = rel(e, el); el.style.setProperty('--mx', `${(p.x * 100).toFixed(1)}%`); el.style.setProperty('--my', `${(p.y * 100).toFixed(1)}%`) }))
  $$('[data-parallax]').forEach((sec) => {
    const img = sec.querySelector('.approach-img')
    on(sec, 'pointermove', (e) => { if (!fine || !img) return; const p = rel(e, sec); img.style.setProperty('--px', `${((0.5 - p.x) * 28).toFixed(1)}px`); img.style.setProperty('--py', `${((0.5 - p.y) * 20).toFixed(1)}px`) })
    on(sec, 'pointerleave', () => { img?.style.setProperty('--px', '0px'); img?.style.setProperty('--py', '0px') })
  })

  // Copy email
  const copyBtn = $('[data-copy]'), copyStatus = $('[data-copy-status]')
  let copyT = 0
  on(copyBtn, 'click', () => {
    const done = () => {
      copyBtn.textContent = 'Copied'; if (copyStatus) copyStatus.textContent = 'hello@endrare.com is on your clipboard.'
      clearTimeout(copyT); copyT = setTimeout(() => { copyBtn.textContent = 'Copy email address'; if (copyStatus) copyStatus.textContent = '' }, 2600)
    }
    try { navigator.clipboard.writeText('hello@endrare.com').then(done, done) } catch { done() }
  })
  cleanups.push(() => clearTimeout(copyT))

  // Clock + scroll progress
  const clock = $('[data-clock]')
  const tick = () => { try { if (clock) clock.textContent = `Sweden · ${new Intl.DateTimeFormat('en-GB', { timeZone: 'Europe/Stockholm', hour: '2-digit', minute: '2-digit' }).format(new Date())}` } catch { /* keep CET */ } }
  tick(); const clockId = setInterval(tick, 30000); cleanups.push(() => clearInterval(clockId))
  const progress = $('[data-progress]')
  let raf = 0
  const onScroll = () => {
    if (raf) return
    raf = requestAnimationFrame(() => { raf = 0; const max = document.documentElement.scrollHeight - window.innerHeight; progress?.style.setProperty('--p', max > 0 ? String(window.scrollY / max) : '0') })
  }
  on(window, 'scroll', onScroll, { passive: true }); onScroll()

  // Mobile menu
  const menu = root.querySelector('#eh-menu'), openBtn = $('[data-menu-open]'), closeBtn = $('[data-menu-close]')
  on(openBtn, 'click', () => { menu?.showModal(); openBtn.setAttribute('aria-expanded', 'true') })
  on(closeBtn, 'click', () => menu?.close())
  on(menu, 'close', () => { openBtn?.setAttribute('aria-expanded', 'false'); openBtn?.focus() })
  on(menu, 'click', (e) => { if (e.target === menu || e.target.closest('a')) menu.close() })

  // Maintenance story: one value --t (0–100) drives the whole scene
  const story = $('[data-story]'), range = $('[data-range]'), counter = $('[data-counter]'), caps = $$('.cap')
  let t = 100, act = 3, storyRaf = 0, touched = false
  const applyT = (v) => {
    t = Math.max(0, Math.min(100, v))
    story?.style.setProperty('--t', t.toFixed(2))
    if (range) { if (Number(range.value) !== t) range.value = String(t); range.style.setProperty('--fill', `${t}%`) }
    if (counter) {
      counter.textContent = t < 22 ? `Day ${Math.max(1, Math.ceil(t / 22 * 7))}`
        : t < 60 ? `Month ${Math.min(6, 1 + Math.floor((t - 22) / 38 * 6))}`
        : t < 83 ? `Month ${Math.min(10, 7 + Math.floor((t - 60) / 23 * 4))}`
        : `Year ${Math.min(2, 1 + Math.floor((t - 83) / 17 * 2))}`
    }
    const next = t < 22 ? 0 : t < 60 ? 1 : t < 82 ? 2 : 3
    if (next !== act) { act = next; caps.forEach((c, k) => c.classList.toggle('on', k === act)) }
    range?.setAttribute('aria-valuetext', ['Day 1: AI builds it', 'Month 6: things need attention', 'Endrare steps in', 'Every day after: running smoothly'][act])
  }
  const ease = (x) => (x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2)
  const play = () => {
    cancelAnimationFrame(storyRaf)
    if (reduced) { applyT(100); return }
    const keys = [[0, 0], [2600, 20], [3700, 20], [8200, 58], [9500, 58], [12600, 80], [13700, 80], [16200, 100]]
    const start = performance.now()
    const step = (now) => {
      const el = now - start
      let i = 0
      while (i < keys.length - 2 && el > keys[i + 1][0]) i++
      const a = keys[i], b = keys[i + 1], k = Math.min(1, Math.max(0, (el - a[0]) / (b[0] - a[0])))
      applyT(a[1] + (b[1] - a[1]) * ease(k))
      if (el < keys[keys.length - 1][0]) storyRaf = requestAnimationFrame(step)
    }
    storyRaf = requestAnimationFrame(step)
  }
  const tween = (to) => {
    cancelAnimationFrame(storyRaf)
    if (reduced) { applyT(to); return }
    const from = t, start = performance.now()
    const step = (now) => { const k = Math.min(1, (now - start) / 900); applyT(from + (to - from) * ease(k)); if (k < 1) storyRaf = requestAnimationFrame(step) }
    storyRaf = requestAnimationFrame(step)
  }
  const stop = () => { touched = true; cancelAnimationFrame(storyRaf); storyIo?.disconnect() }
  let storyIo = null
  if (story) {
    if (reduced) applyT(100)
    else {
      applyT(0)
      storyIo = new IntersectionObserver((en) => { if (en[0].isIntersecting && !touched) { storyIo.disconnect(); play() } }, { threshold: 0.45 })
      storyIo.observe(story)
    }
  }
  on(range, 'input', () => { stop(); applyT(Number(range.value)) })
  on(range, 'pointerdown', stop)
  $$('[data-jump]').forEach((b) => on(b, 'click', () => { stop(); tween(Number(b.dataset.jump)) }))
  on($('[data-replay]'), 'click', () => { stop(); applyT(0); play() })
  cleanups.push(() => { cancelAnimationFrame(storyRaf); storyIo?.disconnect(); cancelAnimationFrame(raf) })

  return () => { cleanups.forEach((fn) => fn()); document.documentElement.classList.remove('eh-anim') }
}
