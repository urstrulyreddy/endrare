import React, { useEffect, useMemo, useState } from 'react'
import styles from './Playground.module.css'

const STORAGE_KEY = 'endrare-playground-draft'
const GALLERY_KEY = 'endrare-playground-gallery'

const modulePackages = [
  { id: 'foundations', label: 'Foundations', modules: [
    ['announcement', 'Announcement bar', 'A small, useful message at the top of a page.'],
    ['hero', 'Hero statement', 'A confident opening with a clear action.'],
    ['logo-cloud', 'Logo cloud', 'A quiet trust signal for teams and products.'],
  ] },
  { id: 'navigation', label: 'Navigation', modules: [
    ['nav', 'Navigation', 'A simple header with a focused menu.'],
    ['sidebar', 'Sidebar navigation', 'A workspace rail for deeper products.'],
    ['breadcrumbs', 'Breadcrumbs', 'A helpful sense of place for complex journeys.'],
  ] },
  { id: 'content', label: 'Content', modules: [
    ['feature-grid', 'Feature grid', 'Three clear reasons to keep exploring.'],
    ['editorial', 'Editorial split', 'A generous story and supporting detail.'],
    ['quote', 'Quote block', 'A human voice with room to breathe.'],
    ['metrics', 'Metrics row', 'A quick, visual proof point.'],
  ] },
  { id: 'commerce', label: 'Commerce', modules: [
    ['pricing', 'Pricing table', 'Three plans with an obvious next step.'],
    ['product', 'Product card', 'A compact product story with an action.'],
    ['testimonial', 'Testimonial', 'A customer perspective with credibility.'],
  ] },
  { id: 'product', label: 'Product UI', modules: [
    ['dashboard', 'Dashboard', 'A calm starting point for a data product.'],
    ['inbox', 'Inbox list', 'A useful list with status and context.'],
    ['form', 'Smart form', 'A friendly form with progressive detail.'],
    ['timeline', 'Timeline', 'A sequence of moments or decisions.'],
  ] },
  { id: 'motion', label: 'Motion', modules: [
    ['marquee', 'Marquee strip', 'A slow moving line for atmosphere.'],
    ['cursor', 'Cursor prompt', 'A playful interaction to invite a click.'],
    ['steps', 'Scroll steps', 'A story that reveals itself one beat at a time.'],
    ['footer', 'Closing CTA', 'A considered end to the page.'],
  ] },
]

const palettes = [
  { id: 'paper', name: 'Paper & ink', bg: '#f8f8f5', ink: '#171816', accent: '#d9e7ff', line: '#dfe1dc' },
  { id: 'sky', name: 'Open sky', bg: '#f1f7ff', ink: '#172c43', accent: '#b7d8ff', line: '#ceddeb' },
  { id: 'orchard', name: 'Soft orchard', bg: '#f3f8f1', ink: '#1e3428', accent: '#c7e7b8', line: '#d6e2d0' },
  { id: 'peach', name: 'Warm peach', bg: '#fff5ed', ink: '#3f281d', accent: '#ffd1b0', line: '#ead8ca' },
  { id: 'lilac', name: 'Quiet lilac', bg: '#f7f3ff', ink: '#2d2546', accent: '#ded0ff', line: '#dfd8ee' },
  { id: 'night', name: 'Night edit', bg: '#222522', ink: '#f5f5ed', accent: '#a8d7c5', line: '#454a45' },
]

const motionPresets = [
  { id: 'still', label: 'Still', description: 'No movement' },
  { id: 'rise', label: 'Rise', description: 'A soft upward entrance' },
  { id: 'float', label: 'Float', description: 'A gentle ambient drift' },
  { id: 'slide', label: 'Slide', description: 'A horizontal reveal' },
  { id: 'focus', label: 'Focus', description: 'A quiet scale-in' },
  { id: 'marquee', label: 'Marquee', description: 'A continuous horizontal loop' },
]

const starterNodes = [
  { id: 'hero-1', type: 'hero', title: 'Make room for a better idea.', body: 'A flexible canvas for a thoughtful digital experience. Edit the words, tune the feeling, and see the page take shape.', tone: 'sky', align: 'left', padding: 'large', motion: 'rise', accent: '#b7d8ff' },
  { id: 'feature-1', type: 'feature-grid', title: 'The useful part is the part people remember.', body: 'Choose a module from the library to add a new section. Every piece can be shaped around your story.', tone: 'paper', align: 'left', padding: 'medium', motion: 'float', accent: '#d9e7ff' },
  { id: 'quote-1', type: 'quote', title: '“The best interfaces leave people with more clarity than they started with.”', body: 'A small reminder from the Endrare studio.', tone: 'lilac', align: 'center', padding: 'medium', motion: 'focus', accent: '#ded0ff' },
  { id: 'footer-1', type: 'footer', title: 'Ready to make it feel real?', body: 'Save your direction to the gallery, or keep playing until the page sounds like you.', tone: 'orchard', align: 'left', padding: 'medium', motion: 'rise', accent: '#c7e7b8' },
]

const demoGallery = [
  { id: 'demo-clarity', title: 'A calmer way to begin', author: 'Endrare studio', palette: 'sky', nodes: starterNodes.slice(0, 2) },
  { id: 'demo-editorial', title: 'A little more human', author: 'Endrare studio', palette: 'lilac', nodes: starterNodes.slice(1, 4) },
]

function readStored(key, fallback) {
  if (typeof window === 'undefined') return fallback
  try { return JSON.parse(window.localStorage.getItem(key)) || fallback } catch { return fallback }
}

function sectionLabel(type) {
  return modulePackages.flatMap((pack) => pack.modules).find(([id]) => id === type)?.[1] || 'Section'
}

function createNode(type, index) {
  const copy = {
    announcement: ['A little note worth sharing.', 'Use this space for a launch, an update, or a useful nudge.'],
    nav: ['A clear way through.', 'Start with what matters, then give people a simple next step.'],
    sidebar: ['Everything in reach.', 'A workspace frame for products with more depth.'],
    breadcrumbs: ['You are here.', 'A quiet guide for a considered journey.'],
    'logo-cloud': ['Made with good people.', 'A little social proof can make a new idea feel familiar.'],
    editorial: ['The detail changes the feeling.', 'Pair a strong thought with the context that helps it land.'],
    quote: ['Make the complex feel clear.', 'A sentence with enough room to be remembered.'],
    metrics: ['Small signals. Real movement.', 'A few numbers to give your story a sense of scale.'],
    pricing: ['Choose your pace.', 'Make the decision easy with a clear set of options.'],
    product: ['A useful object, thoughtfully made.', 'Show the thing people came for, with just enough context.'],
    testimonial: ['“It made the next step obvious.”', 'A customer voice can carry more weight than a feature list.'],
    dashboard: ['A better view of what is happening.', 'Turn a busy system into a calm starting point.'],
    inbox: ['Keep the signal close.', 'A list that makes action feel lighter.'],
    form: ['Tell us what you are thinking.', 'A friendly form is often the beginning of a good conversation.'],
    timeline: ['From first thought to next step.', 'Use a sequence to make progress visible.'],
    marquee: ['Ideas in motion · Useful by design · Built with care ·', 'A moving line adds energy without asking for attention.'],
    cursor: ['Move closer.', 'Invite people to discover a detail at their own pace.'],
    steps: ['One thoughtful step at a time.', 'Let the story arrive in a sequence that feels natural.'],
    footer: ['Keep the good idea moving.', 'End with a clear invitation and a little optimism.'],
  }[type] || ['A new section.', 'Shape this section around your idea.']
  return { id: `${type}-${Date.now()}-${index}`, type, title: copy[0], body: copy[1], tone: 'paper', align: 'left', padding: 'medium', motion: 'rise', accent: '#d9e7ff' }
}

function clone(value) { return JSON.parse(JSON.stringify(value)) }

export default function Playground() {
  const [nodes, setNodes] = useState(() => readStored(STORAGE_KEY, starterNodes))
  const [palette, setPalette] = useState(() => readStored(`${STORAGE_KEY}-palette`, palettes[0]))
  const [selectedId, setSelectedId] = useState(() => starterNodes[0].id)
  const [query, setQuery] = useState('')
  const [packageId, setPackageId] = useState('all')
  const [device, setDevice] = useState('desktop')
  const [tab, setTab] = useState('design')
  const [mode, setMode] = useState('editor')
  const [preview, setPreview] = useState(false)
  const [history, setHistory] = useState([])
  const [future, setFuture] = useState([])
  const [gallery, setGallery] = useState(() => readStored(GALLERY_KEY, demoGallery))
  const [saveOpen, setSaveOpen] = useState(false)
  const [saveTitle, setSaveTitle] = useState('A new direction')

  const selected = nodes.find((node) => node.id === selectedId) || nodes[0]
  const visiblePackages = useMemo(() => {
    const needle = query.trim().toLowerCase()
    return modulePackages.filter((pack) => packageId === 'all' || pack.id === packageId).map((pack) => ({
      ...pack,
      modules: pack.modules.filter(([, label, description]) => !needle || `${label} ${description}`.toLowerCase().includes(needle)),
    })).filter((pack) => pack.modules.length)
  }, [packageId, query])

  useEffect(() => { window.localStorage?.setItem(STORAGE_KEY, JSON.stringify(nodes)) }, [nodes])
  useEffect(() => { window.localStorage?.setItem(`${STORAGE_KEY}-palette`, JSON.stringify(palette)) }, [palette])
  useEffect(() => { window.localStorage?.setItem(GALLERY_KEY, JSON.stringify(gallery)) }, [gallery])

  function commit(next) {
    setHistory((items) => [...items.slice(-29), { nodes: clone(nodes), palette: clone(palette) }])
    setFuture([])
    if (next.nodes) setNodes(next.nodes)
    if (next.palette) setPalette(next.palette)
  }

  function updateNode(id, patch) { commit({ nodes: nodes.map((node) => node.id === id ? { ...node, ...patch } : node) }) }
  function addModule(type) { const node = createNode(type, nodes.length); commit({ nodes: [...nodes, node] }); setSelectedId(node.id); setMode('editor') }
  function moveNode(direction) {
    const index = nodes.findIndex((node) => node.id === selectedId)
    const target = index + direction
    if (index < 0 || target < 0 || target >= nodes.length) return
    const next = [...nodes]; [next[index], next[target]] = [next[target], next[index]]; commit({ nodes: next })
  }
  function undo() {
    const previous = history.at(-1); if (!previous) return
    setFuture((items) => [{ nodes: clone(nodes), palette: clone(palette) }, ...items]); setHistory((items) => items.slice(0, -1)); setNodes(previous.nodes); setPalette(previous.palette)
  }
  function redo() {
    const next = future[0]; if (!next) return
    setHistory((items) => [...items, { nodes: clone(nodes), palette: clone(palette) }]); setFuture((items) => items.slice(1)); setNodes(next.nodes); setPalette(next.palette)
  }
  function saveToGallery() {
    const entry = { id: `saved-${Date.now()}`, title: saveTitle.trim() || 'Untitled direction', author: 'You', palette: palette.id, nodes: clone(nodes) }
    setGallery((items) => [entry, ...items]); setSaveOpen(false); setMode('gallery')
  }
  function exportDraft() {
    const blob = new Blob([JSON.stringify({ palette, nodes }, null, 2)], { type: 'application/json' })
    const url = URL.createObjectURL(blob); const link = document.createElement('a'); link.href = url; link.download = 'endrare-playground.json'; link.click(); URL.revokeObjectURL(url)
  }

  const paletteStyle = { '--play-bg': palette.bg, '--play-ink': palette.ink, '--play-accent': palette.accent, '--play-line': palette.line }

  return <main className={styles.playground} style={paletteStyle}>
    <header className={styles.topbar}>
      <a className={styles.brand} href="/" aria-label="Back to Endrare"><span>✳</span> endrare<span className={styles.period}>.</span></a>
      <div className={styles.breadcrumb}><span>Playground</span><b>/</b><strong>{mode === 'gallery' ? 'Gallery' : 'Untitled direction'}</strong></div>
      <div className={styles.topActions}>
        <button className={mode === 'gallery' ? styles.topButtonActive : styles.topButton} onClick={() => setMode(mode === 'gallery' ? 'editor' : 'gallery')}>Gallery <span>{gallery.length}</span></button>
        <button className={styles.topButton} onClick={() => setSaveOpen(true)}>Save direction</button>
        <a className={styles.leave} href="/">Exit <span aria-hidden="true">↗</span></a>
      </div>
    </header>
    {mode === 'gallery' ? <Gallery gallery={gallery} onOpen={(entry) => { setNodes(clone(entry.nodes)); setPalette(palettes.find((item) => item.id === entry.palette) || palettes[0]); setSelectedId(entry.nodes[0]?.id); setMode('editor') }} /> : <>
      <div className={styles.workspaceHeader}>
        <div><span className={styles.eyebrow}>Build a direction</span><h1>Make a page<br /><em>feel like yours.</em></h1></div>
        <div className={styles.workspaceTools}>
          <button onClick={undo} disabled={!history.length} aria-label="Undo">↶</button><button onClick={redo} disabled={!future.length} aria-label="Redo">↷</button>
          <span className={styles.toolDivider} />
          <div className={styles.deviceSwitch} role="group" aria-label="Preview size">{[['desktop','Desktop'],['tablet','Tablet'],['mobile','Mobile']].map(([id, label]) => <button key={id} className={device === id ? styles.deviceActive : ''} onClick={() => setDevice(id)}>{label}</button>)}</div>
          <button className={preview ? styles.previewActive : styles.previewButton} onClick={() => setPreview(!preview)}>{preview ? 'Edit' : 'Preview'} <span aria-hidden="true">{preview ? '✎' : '◉'}</span></button>
        </div>
      </div>
      <div className={styles.editorGrid}>
        {!preview && <aside className={styles.library} aria-label="Module library">
          <div className={styles.panelIntro}><div><span className={styles.panelLabel}>01 / Library</span><h2>Building blocks</h2></div><span className={styles.count}>{modulePackages.reduce((total, item) => total + item.modules.length, 0)}</span></div>
          <label className={styles.search}><span aria-hidden="true">⌕</span><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search modules" aria-label="Search modules" />{query && <button onClick={() => setQuery('')} aria-label="Clear search">×</button>}</label>
          <div className={styles.packageTabs}><button className={packageId === 'all' ? styles.packageActive : ''} onClick={() => setPackageId('all')}>All</button>{modulePackages.map((pack) => <button key={pack.id} className={packageId === pack.id ? styles.packageActive : ''} onClick={() => setPackageId(pack.id)}>{pack.label}</button>)}</div>
          <div className={styles.moduleList}>{visiblePackages.map((pack) => <section key={pack.id}><div className={styles.packageHeading}><span>{pack.label}</span><small>{pack.modules.length}</small></div>{pack.modules.map(([id, label, description]) => <button className={styles.moduleCard} key={id} onClick={() => addModule(id)}><span className={`${styles.moduleIcon} ${styles[`icon_${id.replace('-', '')}`] || ''}`}>{id === 'hero' ? '✳' : id === 'form' ? '⌁' : id === 'dashboard' ? '▦' : id === 'marquee' ? '→' : '+'}</span><span><b>{label}</b><small>{description}</small></span><i aria-hidden="true">+</i></button>)}</section>)}</div>
          <div className={styles.libraryFoot}><span>Drag is optional.</span><b>Click any block to add it.</b></div>
        </aside>}
        <section className={`${styles.canvasArea} ${preview ? styles.canvasFull : ''}`} aria-label="Editable website canvas">
          <div className={styles.canvasMeta}><span><i /> Live canvas</span><span>{nodes.length} sections · {device}</span></div>
          <div className={`${styles.canvasFrame} ${styles[`frame_${device}`]}`}>
            <div className={`${styles.siteCanvas} ${preview ? styles.previewMode : ''}`}>
              <div className={styles.canvasChrome}><span>your-direction.endrare.com</span><span>● ● ●</span></div>
              {nodes.map((node, index) => <EditableSection key={node.id} node={node} index={index} selected={node.id === selectedId} preview={preview} onSelect={() => setSelectedId(node.id)} onUpdate={updateNode} />)}
              {!nodes.length && <button className={styles.emptyCanvas} onClick={() => addModule('hero')}>Start with a block <span>↗</span></button>}
            </div>
          </div>
          <div className={styles.canvasHint}>{preview ? 'Preview mode · switch to Edit to change the page' : 'Click text to edit · select a section to tune its details'}</div>
        </section>
        {!preview && <aside className={styles.inspector} aria-label="Section inspector">
          <div className={styles.panelIntro}><div><span className={styles.panelLabel}>02 / Inspector</span><h2>{selected ? sectionLabel(selected.type) : 'Select a section'}</h2></div><span className={styles.inspectorDot} /></div>
          {selected ? <>
            <div className={styles.inspectorTabs}>{[['design','Design'],['color','Color'],['motion','Motion']].map(([id, label]) => <button key={id} className={tab === id ? styles.inspectorActive : ''} onClick={() => setTab(id)}>{label}</button>)}</div>
            {tab === 'design' && <div className={styles.controlStack}>
              <ControlLabel label="Alignment"><div className={styles.segmented}>{['left','center','right'].map((value) => <button key={value} className={selected.align === value ? styles.segmentActive : ''} onClick={() => updateNode(selected.id, { align: value })}>{value}</button>)}</div></ControlLabel>
              <ControlLabel label="Section space"><div className={styles.segmented}>{[['small','S'],['medium','M'],['large','L']].map(([value, label]) => <button key={value} className={selected.padding === value ? styles.segmentActive : ''} onClick={() => updateNode(selected.id, { padding: value })}>{label}</button>)}</div></ControlLabel>
              <ControlLabel label="Section order"><div className={styles.orderButtons}><button onClick={() => moveNode(-1)} disabled={nodes[0]?.id === selected.id}>↑ Move up</button><button onClick={() => moveNode(1)} disabled={nodes[nodes.length - 1]?.id === selected.id}>↓ Move down</button></div></ControlLabel>
              <div className={styles.inspectorActions}><button onClick={() => { const copy = createNode(selected.type, nodes.length); commit({ nodes: [...nodes, { ...copy, title: selected.title, body: selected.body, tone: selected.tone }] }); setSelectedId(copy.id) }}>Duplicate</button><button onClick={() => { commit({ nodes: nodes.filter((node) => node.id !== selected.id) }); setSelectedId(nodes.find((node) => node.id !== selected.id)?.id) }}>Remove</button></div>
            </div>}
            {tab === 'color' && <div className={styles.controlStack}><ControlLabel label="Page palette"><div className={styles.paletteGrid}>{palettes.map((item) => <button key={item.id} className={`${styles.paletteSwatch} ${palette.id === item.id ? styles.paletteSelected : ''}`} style={{ background: item.bg, color: item.ink }} onClick={() => commit({ palette: item })}><span style={{ background: item.accent }} /><b>{item.name}</b></button>)}</div></ControlLabel><ControlLabel label="Section tone"><div className={styles.toneGrid}>{palettes.slice(0, 5).map((item) => <button key={item.id} className={selected.tone === item.id ? styles.toneSelected : ''} style={{ background: item.bg }} onClick={() => updateNode(selected.id, { tone: item.id, accent: item.accent })}><i style={{ background: item.accent }} /></button>)}</div></ControlLabel><ControlLabel label="Accent color"><input className={styles.colorInput} type="color" value={selected.accent} onChange={(event) => updateNode(selected.id, { accent: event.target.value })} /></ControlLabel></div>}
            {tab === 'motion' && <div className={styles.controlStack}><ControlLabel label="Entrance preset"><div className={styles.motionList}>{motionPresets.map((item) => <button key={item.id} className={selected.motion === item.id ? styles.motionSelected : ''} onClick={() => updateNode(selected.id, { motion: item.id })}><span className={`${styles.motionPreview} ${styles[`motion_${item.id}`]}`} /><span><b>{item.label}</b><small>{item.description}</small></span><i>{selected.motion === item.id ? '✓' : ''}</i></button>)}</div></ControlLabel><p className={styles.motionNote}>Motion is tuned for calm. Every preset respects reduced-motion preferences.</p></div>}
          </> : <p className={styles.emptyInspector}>Select a section in the canvas to edit its layout, color, and motion.</p>}
          <div className={styles.inspectorFoot}><button onClick={exportDraft}>Export JSON ↗</button><span>Autosaved locally</span></div>
        </aside>}
      </div>
    </>}
    {saveOpen && <div className={styles.modalBackdrop} role="presentation"><form className={styles.saveModal} onSubmit={(event) => { event.preventDefault(); saveToGallery() }}><button type="button" className={styles.modalClose} onClick={() => setSaveOpen(false)} aria-label="Close">×</button><span className={styles.eyebrow}>Save to the gallery</span><h2>Give this direction<br /><em>a name.</em></h2><label>Direction name<input autoFocus value={saveTitle} onChange={(event) => setSaveTitle(event.target.value)} /></label><button className={styles.saveButton} type="submit">Save direction <span>↗</span></button></form></div>}
  </main>
}

function ControlLabel({ label, children }) { return <label className={styles.controlLabel}><span>{label}</span>{children}</label> }

function EditableSection({ node, index, selected, preview, onSelect, onUpdate }) {
  return <article className={`${styles.editableSection} ${styles[`section_${node.type.replace('-', '')}`]} ${styles[`tone_${node.tone}`]} ${styles[`pad_${node.padding}`]} ${styles[`align_${node.align}`]} ${styles[`motion_${node.motion}`]} ${selected && !preview ? styles.selectedSection : ''}`} style={{ '--section-accent': node.accent }} onClick={onSelect}>
    {!preview && <div className={styles.sectionToolbar}><span>{String(index + 1).padStart(2, '0')} · {sectionLabel(node.type)}</span><i>Click to select</i></div>}
    <div className={styles.sectionInner}>
      {node.type === 'nav' && <div className={styles.fakeNav}><b>your brand<span>.</span></b><span>Work</span><span>About</span><span>Contact ↗</span></div>}
      {node.type === 'announcement' && <div className={styles.announcement}>A small idea can move a whole project forward. <span>Learn more ↗</span></div>}
      {node.type === 'dashboard' && <div className={styles.dashboardTop}><span>Workspace / Overview</span><b>Today, in view <i>●</i></b></div>}
      {node.type === 'logo-cloud' && <div className={styles.logoCloud}><span>northstar</span><span>kindred</span><span>COMMONS</span><span>field notes</span></div>}
      <div className={styles.sectionCopy}>
        <span className={styles.sectionKicker}>{sectionLabel(node.type)} <i>↗</i></span>
        <h2 contentEditable={!preview} suppressContentEditableWarning onBlur={(event) => onUpdate(node.id, { title: event.currentTarget.textContent })}>{node.title}</h2>
        <p contentEditable={!preview} suppressContentEditableWarning onBlur={(event) => onUpdate(node.id, { body: event.currentTarget.textContent })}>{node.body}</p>
        {!['quote','metrics','logo-cloud','announcement','marquee'].includes(node.type) && <button className={styles.sectionCta}>Explore the idea <span>↗</span></button>}
      </div>
      <SectionVisual type={node.type} accent={node.accent} />
    </div>
  </article>
}

function SectionVisual({ type, accent }) {
  if (type === 'metrics') return <div className={styles.metrics}><div><b>24</b><span>new ideas</span></div><div><b>8.4k</b><span>people reached</span></div><div><b>96%</b><span>felt clear</span></div></div>
  if (type === 'quote' || type === 'testimonial') return <div className={styles.avatarStack}><span style={{ background: accent }}>D</span><span style={{ background: '#e5ecdf' }}>M</span><span style={{ background: '#f3d4c1' }}>A</span><small>People making useful things</small></div>
  if (type === 'pricing') return <div className={styles.pricingCards}><div><small>Start</small><b>Free</b><span>For a first direction</span></div><div className={styles.pricingFeatured}><small>Build</small><b>€24</b><span>For a real project</span></div><div><small>Studio</small><b>Let’s talk</b><span>For the whole team</span></div></div>
  if (type === 'dashboard' || type === 'inbox') return <div className={styles.uiCard}><div /><div /><div /><div /><div /></div>
  if (type === 'form') return <div className={styles.formCard}><span>Your email address</span><b>hello@yourstudio.com</b><button>Continue ↗</button></div>
  if (type === 'timeline' || type === 'steps') return <div className={styles.timeline}><span /><span /><span /><span /></div>
  if (type === 'marquee') return <div className={styles.marquee}><span>MAKE ROOM FOR BETTER IDEAS · MAKE ROOM FOR BETTER IDEAS ·</span></div>
  if (type === 'cursor') return <div className={styles.cursorVisual}><span>Move closer</span><i>↗</i></div>
  if (type === 'sidebar') return <div className={styles.sidebarVisual}><i /><i /><i /><i /></div>
  return <div className={styles.abstractVisual} style={{ background: `radial-gradient(circle at 30% 30%, ${accent}, transparent 45%), linear-gradient(135deg, #ffffff, transparent)` }}><span>✳</span></div>
}

function Gallery({ gallery, onOpen }) {
  return <section className={styles.galleryView}><div className={styles.galleryHeading}><div><span className={styles.eyebrow}>03 / Shared directions</span><h1>Make something.<br /><em>Leave a trace.</em></h1><p>Saved directions from the Endrare Playground. Open one to remix it and make it your own.</p></div><span className={styles.galleryCount}>{gallery.length}<small>directions</small></span></div><div className={styles.galleryGrid}>{gallery.map((entry) => <button className={styles.galleryCard} key={entry.id} onClick={() => onOpen(entry)}><div className={`${styles.galleryThumb} ${styles[`gallery_${entry.palette}`]}`}>{entry.nodes.slice(0, 3).map((node, index) => <div key={node.id} className={styles.galleryMini} style={{ transform: `translateY(${index * 10}px)`, background: node.accent }}><b>{node.title}</b><span>{node.body}</span></div>)}</div><div className={styles.galleryCardMeta}><span>{entry.author}</span><b>{entry.title}</b><i>Open & remix ↗</i></div></button>)}</div></section>
}
