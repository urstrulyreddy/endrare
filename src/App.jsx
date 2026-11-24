import React, { useEffect } from 'react'
import { CONTENT_ITEMS } from './data/seo'
import { headerMarkup, footerMarkup, clientWorkMarkup } from './data/design'
import { initDesign } from './design'
import ServicesRail from './components/ServicesRail'
import WorkStories from './components/WorkStories'
import Playground from './sections/Playground'
const Arrow = () => <span aria-hidden="true">↗</span>
export default function App({ pathname = typeof window !== 'undefined' ? window.location.pathname : '/' } = {}) {
  if (pathname.startsWith('/playground')) return <Playground />
  return <HomePage />
}

function HomePage() {
  useEffect(() => initDesign(), [])
  return <><div className="ed-shell" dangerouslySetInnerHTML={{ __html: headerMarkup('home') }} /><main id="main-content" className="ed-home">
    <section className="ed-landing" data-particles="landing" aria-labelledby="landing-title">
      <canvas className="ed-landing-particles" aria-hidden="true" />
      <div className="ed-landing-copy ed-container"><div className="ed-eyebrow ed-entrance"><span className="ed-status-dot" /> Software. Intelligence. Possibility.</div>
      <h1 id="landing-title" className="ed-entrance">Good ideas.<br /><em>Extraordinarily built.</em></h1>
      <p className="ed-entrance">We bring ambitious ideas to life through thoughtful software,<br className="ed-desktop-break" /> useful AI, and a relentless care for the experience.</p>
      <div className="ed-hero-actions ed-entrance"><a className="ed-button" href="#systems">Explore what we build <Arrow /></a><a className="ed-button ed-button-light" href="/services/">What we can do <Arrow /></a></div></div>
      <div className="ed-landing-bottom ed-container"><a href="#systems">A little curiosity goes a long way. <span aria-hidden="true">↓</span></a><button className="ed-particle-control" data-pause-particles aria-pressed="false" aria-label="Pause ambient animation">Pause motion Ⅱ</button></div>
    </section>
    <div className="ed-disciplines ed-container" aria-label="Areas of practice"><span>Product thinking</span><i aria-hidden="true">✳</i><span>Software engineering</span><i aria-hidden="true">✳</i><span>Applied AI</span><i aria-hidden="true">✳</i><span>Cloud & systems</span></div>
    <WorkStories />
    <div dangerouslySetInnerHTML={{ __html: clientWorkMarkup({ home: true }) }} />
    <section className="ed-possibility ed-container"><div className="ed-possibility-copy ed-reveal"><span className="ed-eyebrow">From a spark to something real</span><h2>Ideas don’t stand still.<br /><em>Neither do we.</em></h2><p>A question becomes a prototype. A prototype reveals a better question. We bring design, engineering, and AI together to move an idea forward—with purpose at every step.</p><a className="ed-text-link" href="/about/">The people and thinking behind Endrare <Arrow /></a></div><div className="ed-particle-hero ed-possibility-art" data-particles="hero"><span className="ed-particle-fallback" aria-hidden="true">e</span><canvas aria-hidden="true" /><span className="ed-art-index">IDEAS, ALWAYS BECOMING</span><button className="ed-particle-control" data-pause-particles aria-pressed="false" aria-label="Pause ambient animation">Pause motion Ⅱ</button></div></section>
    <ServicesRail />
    <section className="ed-cinema" aria-label="The Endrare approach" data-cinema>
      <div className="ed-cinema-sticky">
        <div className="ed-cinema-media" aria-hidden="true"><img src="/images/endrare-ribbon.jpg" alt="" width="1536" height="1024" loading="lazy" /></div>
        <div className="ed-cinema-shade" aria-hidden="true" />
        <div className="ed-cinema-top ed-container"><span className="ed-label">The Endrare approach</span><a href="#about" className="ed-cinema-skip">Meet the studio <span aria-hidden="true">↓</span></a></div>
        <div className="ed-cinema-story ed-container">
          <div className="ed-cinema-frame ed-cinema-frame-active" data-film-frame="0"><span className="ed-film-kicker">01 / A different perspective</span><h2>Look<br /><em>closer.</em></h2><p>Behind every complex system, there’s a human problem worth understanding.</p></div>
          <div className="ed-cinema-frame" data-film-frame="1"><span className="ed-film-kicker">02 / Room for the essential</span><h2>Find the<br /><em>clarity.</em></h2><p>Make space for what matters. Give every decision, every detail, a purpose.</p></div>
          <div className="ed-cinema-frame" data-film-frame="2"><span className="ed-film-kicker">03 / Thoughtfully brought to life</span><h2>Make it<br /><em>matter.</em></h2><p>Bring the experience and the engineering together. Build something people can depend on.</p></div>
        </div>
        <div className="ed-cinema-bottom ed-container"><span className="ed-film-caption">FROM COMPLEXITY, TO CLARITY.</span><div className="ed-film-track" aria-hidden="true"><i /></div><span className="ed-film-counter" aria-hidden="true">01 — 03</span></div>
      </div>
    </section>
    <section className="ed-about-band" id="about"><div className="ed-container ed-about-grid"><div className="ed-sticky-story ed-reveal"><span className="ed-eyebrow">02 / The studio behind the work</span><h2>Different perspectives.<br /><em>Shared ambition.</em></h2><div className="ed-location"><span aria-hidden="true">↗</span> Led by Deependra. Based in Sweden.</div></div><div className="ed-about-copy ed-reveal"><p className="ed-large-copy">The best software starts with paying attention.</p><p>Endrare is a software and AI partner led by Deependra. We bring product thinking, software engineering, and a close understanding of real-world operations to every project.</p><p>Our work starts with people: what slows them down, what they need to know, and what could work better. Then we build the experience, and the reliable systems behind it.</p><a className="ed-text-link" href="/about/">Get to know Endrare <Arrow /></a></div><div className="ed-principles ed-reveal"><div><span>01</span><h3>Understand first.</h3><p>Get close to the people and the problem before choosing a solution.</p></div><div><span>02</span><h3>Make it clear.</h3><p>Every interaction should help someone move forward with confidence.</p></div><div><span>03</span><h3>Build to hold up.</h3><p>Care for the details people see, and the systems they never have to.</p></div></div></div></section>
    <section className="ed-section ed-container" id="archive"><div className="ed-section-heading ed-reveal"><div><span className="ed-eyebrow">03 / Notes from the process</span><h2>Thinking, <em>out loud.</em></h2></div><a className="ed-text-link" href="/archive/">Visit the journal <Arrow /></a></div><div className="ed-journal">{CONTENT_ITEMS.slice(0,3).map((item,i) => <a key={item.id} className="ed-journal-row ed-reveal" href={`${item.path}/`}><span className="ed-journal-number">0{i+1}</span><div><span className="ed-label">{item.type} · {item.readTime} read</span><h3>{item.title}</h3><p>{item.archiveDescription}</p></div><span className="ed-round-arrow" aria-hidden="true">↗</span></a>)}</div></section>
  </main><div dangerouslySetInnerHTML={{ __html: footerMarkup({cta:true,home:true}) }} /></>
}
