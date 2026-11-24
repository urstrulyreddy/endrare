import React, { useEffect, useMemo, useRef, useState } from 'react'
import { WORKSPACE_KEY, allItems, blankDocument, blankWorkspace, copyItem, createHistory, createModule, findItem, loadWorkspace, modules, motions, normalizeDocument, parentSection, reduceHistory, uid } from '../playground/model'
import { Icon, IconButton, isTyping, CanvasItem, LayerTree, Modal, MotionList, paletteVars } from '../playground/components'
import Inspector from '../playground/Inspector'
import s from './Playground.module.css'

const sizes = { desktop: 1200, tablet: 768, mobile: 390 }
export default function Playground() {
  const initial = useRef(blankWorkspace())
  const workspaceRef = useRef(initial.current)
  const historyRef = useRef(createHistory(initial.current.projects[0]))
  const [history, setHistory] = useState(historyRef.current)
  const [workspace, setWorkspace] = useState(initial.current)
  const [ready, setReady] = useState(false)
  const loaded = useRef(false)
  const [saveError, setSaveError] = useState('')
  const blockedStorage = useRef(false)
  const [selectedId, setSelectedId] = useState(null)
  const [leftTab, setLeftTab] = useState('insert')
  const [rightTab, setRightTab] = useState('design')
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState('All modules')
  const [preview, setPreview] = useState(false)
  const [zoom, setZoom] = useState('fit')
  const [availableWidth, setAvailableWidth] = useState(600)
  const [canvasHeight, setCanvasHeight] = useState(780)
  const [modal, setModal] = useState(null)
  const [tourStep, setTourStep] = useState(0)
  const [mobilePanel, setMobilePanel] = useState(null)
  const [notice, setNotice] = useState('')
  const [motionReplay, setMotionReplay] = useState(0)
  const [playing, setPlaying] = useState(false)
  const [collapsed, setCollapsed] = useState({})
  const importInput = useRef(null), imageInput = useRef(null), imageTarget = useRef(null), viewport = useRef(null), canvas = useRef(null)
  const doc = history.doc
  const selected = findItem(doc.nodes, selectedId)
  const section = parentSection(doc.nodes, selectedId)
  const width = sizes[doc.device]
  const scale = zoom === 'fit' ? Math.min(1, Math.max(0.1, (availableWidth - 64) / width)) : Number(zoom) / 100

  useEffect(() => {
    if (loaded.current) return
    loaded.current = true
    try {
      const saved = loadWorkspace(window.localStorage)
      workspaceRef.current = saved; setWorkspace(saved)
      const next = createHistory(saved.projects.find((p) => p.id === saved.activeId))
      historyRef.current = next; setHistory(next)
      if (!saved.introSeen) setModal('intro')
    } catch (error) { blockedStorage.current = true; setSaveError(error.message || 'Browser storage is unavailable. Export a backup to keep your work.'); setModal('intro') }
    setReady(true)
  }, [])
  function persist(next) {
    workspaceRef.current = next; setWorkspace(next)
    if (blockedStorage.current) return
    try { window.localStorage.setItem(WORKSPACE_KEY, JSON.stringify(next)); setSaveError('') }
    catch { setSaveError('Your latest edits could not be saved in this browser. Export a backup before leaving.') }
  }
  function syncDocument(next) { const current = workspaceRef.current; persist({ ...current, activeId: next.id, projects: current.projects.map((project) => project.id === next.id ? next : project) }) }
  function dispatch(action) {
    try { const next = reduceHistory(historyRef.current, action); historyRef.current = next; setHistory(next); if (action.type !== 'end') syncDocument(next.doc) }
    catch (error) { setNotice(error.message) }
  }
  function patch(id, changes, group) { dispatch({ type: 'patch', id, patch: changes, group }) }
  function endEdit() { dispatch({ type: 'end' }) }
  function select(id) { setSelectedId(id); setPlaying(false) }
  function insert(type) {
    const node = createModule(type)
    dispatch({ type: 'insert', node }); select(node.id); setNotice(`${modules.find((m) => m.id === type).name} added to your canvas`); setMobilePanel(null)
    requestAnimationFrame(() => document.getElementById(`layer-${node.id}`)?.scrollIntoView({ block: 'nearest', inline: 'nearest' }))
  }
  function replace(type) { if (!section) return; dispatch({ type: 'replace', id: section.id, node: createModule(type) }); select(section.id); setNotice('Selected section replaced. You can undo this change.'); setMobilePanel(null) }
  function duplicate() { if (!selected) return; const copy = copyItem(selected); dispatch({ type: 'duplicate', id: selected.id, copy }); select(copy.id) }
  function remove() { if (selected) { dispatch({ type: 'remove', id: selected.id }); select(null) } }
  function replay() { setMotionReplay((n) => n + 1); setPlaying(true) }
  function applyMotion(value) { if (!selected) return; patch(selected.id, { motion: value }); replay(); setNotice(`${motions.find((m) => m.id === value).name} applied to ${selected.name}`) }
  function openProject(project) {
    const next = createHistory(project); historyRef.current = next; setHistory(next)
    persist({ ...workspaceRef.current, activeId: project.id }); select(null); setModal(null); setPreview(false); setZoom('fit')
  }
  function newProject() { const next = blankDocument(); persist({ ...workspaceRef.current, projects: [...workspaceRef.current.projects, next], activeId: next.id }); openProject(next); setNotice('New blank canvas. Your other projects are in Gallery.') }
  function finishIntro() { persist({ ...workspaceRef.current, introSeen: true }); setModal(null); setTourStep(0) }
  function exportProject() {
    const link = document.createElement('a'); const url = URL.createObjectURL(new Blob([JSON.stringify(historyRef.current.doc, null, 2)], { type: 'application/json' }))
    link.href = url; link.download = `${historyRef.current.doc.name.replace(/[^a-z0-9-_ ]/gi, '').trim() || 'endrare-project'}.json`; link.click(); setTimeout(() => URL.revokeObjectURL(url), 1000)
    setNotice('Project exported. Import it to continue on another browser.')
  }
  async function importProject(event) {
    const file = event.target.files?.[0]; event.target.value = ''; if (!file) return
    try {
      if (file.size > 8 * 1024 * 1024) throw new Error('Choose a project file smaller than 8 MB.')
      const project = normalizeDocument(JSON.parse(await file.text())); project.id = uid(); project.name = `${project.name} (imported)`
      persist({ ...workspaceRef.current, projects: [...workspaceRef.current.projects, project] }); openProject(project); setNotice('Project imported. Your existing projects are still in Gallery.')
    } catch (error) { setNotice(error.message || 'This project file could not be imported.') }
  }
  function chooseImage(id) { imageTarget.current = id; imageInput.current?.click() }
  async function uploadImage(event) {
    const file = event.target.files?.[0]; event.target.value = ''; const target = imageTarget.current
    if (!file || !findItem(historyRef.current.doc.nodes, target)) return
    try {
      if (!['image/png', 'image/jpeg', 'image/webp', 'image/gif'].includes(file.type)) throw new Error('Choose a PNG, JPEG, WebP or GIF image.')
      if (file.size > 1024 * 1024) throw new Error('Choose an image under 1 MB, or use an image URL.')
      const src = await new Promise((resolve, reject) => { const reader = new FileReader(); reader.onload = () => resolve(reader.result); reader.onerror = reject; reader.readAsDataURL(file) })
      patch(target, { src, alt: file.name.replace(/\.[^.]+$/, '') }); setNotice('Image added and saved with your project.')
    } catch (error) { setNotice(error.message || 'The image could not be added.') }
  }
  useEffect(() => {
    if (!ready || !viewport.current || !canvas.current) return
    const observe = new ResizeObserver(() => { setAvailableWidth(viewport.current?.clientWidth || 600); setCanvasHeight(canvas.current?.offsetHeight || 780) })
    observe.observe(viewport.current); observe.observe(canvas.current); return () => observe.disconnect()
  }, [ready])
  useEffect(() => { if (!notice) return; const timeout = setTimeout(() => setNotice(''), 4500); return () => clearTimeout(timeout) }, [notice])
  useEffect(() => { if (!playing) return; const timeout = setTimeout(() => setPlaying(false), Math.max(1600, Number(selected?.duration || 800) + Number(selected?.delay || 0)) * 2); return () => clearTimeout(timeout) }, [playing, motionReplay, selected?.duration, selected?.delay])
  useEffect(() => {
    function onKey(event) {
      if (modal) return
      if (event.key === 'Escape') { if (preview) setPreview(false); else { event.target.blur?.(); select(null); setMobilePanel(null) }; return }
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 's') { event.preventDefault(); syncDocument(historyRef.current.doc); return }
      if (isTyping(event.target)) return
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'z') { event.preventDefault(); dispatch({ type: event.shiftKey ? 'redo' : 'undo' }); return }
      if (preview) return
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'd') { event.preventDefault(); duplicate(); return }
      if (event.key === 'Delete' || event.key === 'Backspace') { if (selected) { event.preventDefault(); remove() }; return }
      if (event.key.toLowerCase() === 't' && !event.metaKey && !event.ctrlKey) insert('text')
    }
    window.addEventListener('keydown', onKey); return () => window.removeEventListener('keydown', onKey)
  })
  useEffect(() => {
    function onStorage(event) { if (event.key === WORKSPACE_KEY && event.newValue && event.newValue !== JSON.stringify(workspaceRef.current)) { blockedStorage.current = true; setSaveError('This workspace changed in another tab. Export your current edits, then reload to use the latest saved version.') } }
    window.addEventListener('storage', onStorage); return () => window.removeEventListener('storage', onStorage)
  }, [])
  const filtered = useMemo(() => modules.filter((entry) => (category === 'All modules' || category === entry.category) && `${entry.name} ${entry.category} ${entry.description}`.toLowerCase().includes(query.toLowerCase())), [query, category])

  return <main id="main-content" className={`${s.app} ${preview ? s.presenting : ''}`}><h1 className="ed-sr-only">Endrare Playground: design and animate website ideas</h1>
    <header className={s.topbar}>
      <a href="/" className={s.brand} aria-label="Back to Endrare"><span aria-hidden="true">✳</span><b>endrare.</b></a><span className={s.topDivider} />
      <div className={s.projectIdentity}><span>PLAYGROUND <span className={s.beta}>BETA</span></span><input aria-label="Project name" value={doc.name} maxLength={120} onChange={(event) => dispatch({ type: 'document', patch: { name: event.target.value }, group: 'project-name' })} onBlur={endEdit} /></div>
      <span className={`${s.saveState} ${saveError ? s.saveWarning : ''}`} role="status"><Icon name={saveError ? 'help' : 'check'} size={14} />{!ready ? 'Opening workspace' : saveError ? 'Not saved' : 'Saved in this browser'}</span>
      <div className={s.topActions}><button onClick={() => setModal('gallery')}><Icon name="folder" />Gallery</button><button onClick={() => { setTourStep(0); setModal('intro') }} aria-label="Open quick guide"><Icon name="help" /></button><button className={s.primary} onClick={() => { setPreview(!preview); setPlaying(false); setMobilePanel(null) }} disabled={!ready}><Icon name={preview ? 'back' : 'play'} />{preview ? 'Back to editor' : 'Present'}</button></div>
    </header>
    {saveError && <div className={s.errorBanner} role="alert">{saveError}<button onClick={exportProject}>Export backup</button></div>}
    <div className={s.toolbar}>
      <div className={s.toolbarGroup}><button onClick={newProject} disabled={!ready}><Icon name="plus" />New project</button><IconButton icon="undo" label="Undo (⌘Z)" onClick={() => dispatch({ type: 'undo' })} disabled={!history.past.length || preview} /><IconButton icon="redo" label="Redo (⇧⌘Z)" onClick={() => dispatch({ type: 'redo' })} disabled={!history.future.length || preview} /></div>
      <div className={s.devices} aria-label="Canvas size">{Object.keys(sizes).map((device) => <button key={device} aria-label={`${device[0].toUpperCase()}${device.slice(1)} canvas`} aria-pressed={doc.device === device} onClick={() => dispatch({ type: 'document', patch: { device } })}><Icon name={device} /><span>{device}</span></button>)}</div>
      <div className={s.toolbarGroup}><label className={s.zoomLabel}><span className={s.srOnly}>Canvas zoom</span><select value={zoom} onChange={(event) => setZoom(event.target.value)}><option value="fit">Fit · {Math.round(scale * 100)}%</option>{[25, 50, 75, 100, 125, 150].map((n) => <option key={n} value={n}>{n}%</option>)}</select></label><IconButton icon="upload" label="Import project" onClick={() => importInput.current?.click()} /><IconButton icon="download" label="Export project" onClick={exportProject} /></div>
    </div>
    <div className={s.mobileTools}><button onClick={() => setMobilePanel(mobilePanel === 'library' ? null : 'library')}><Icon name="plus" />Insert & layers</button><button onClick={() => setMobilePanel(mobilePanel === 'inspector' ? null : 'inspector')}><Icon name="settings" />Edit selection</button></div>
    <div className={s.workspace}>
      {!preview && <aside className={`${s.library} ${mobilePanel === 'library' ? s.panelOpen : ''}`} aria-label="Module library">
        <div className={s.panelTabs}>{[['insert', 'Insert', 'plus'], ['layers', 'Layers', 'layers'], ['motion', 'Motion', 'motion']].map(([id, label, icon]) => <button key={id} aria-pressed={leftTab === id} onClick={() => setLeftTab(id)}><Icon name={icon} size={16} />{label}</button>)}</div>
        {leftTab === 'insert' && <><div className={s.search}><Icon name="search" size={16} /><input aria-label="Search modules" placeholder="Find a building block…" value={query} onChange={(event) => setQuery(event.target.value)} />{query && <IconButton icon="close" label="Clear search" onClick={() => setQuery('')} />}</div><label className={s.category}><span className={s.srOnly}>Module category</span><select value={category} onChange={(event) => setCategory(event.target.value)}>{['All modules', ...new Set(modules.map((m) => m.category))].map((entry) => <option key={entry}>{entry}</option>)}</select><span>{filtered.length}</span></label>
          <div className={s.scrollPanel}>{filtered.length ? filtered.map((entry) => <div className={s.module} key={entry.id}><button className={s.moduleInsert} onClick={() => insert(entry.id)} aria-label={`Add ${entry.name}`} disabled={!ready}><span className={s.moduleArt} data-kind={entry.icon}><Icon name={entry.icon} size={28} /><span /><span /></span><span className={s.moduleTitle}>{entry.name}<Icon name="plus" size={14} /></span><small>{entry.description}</small></button>{section && <button className={s.replaceButton} onClick={() => replace(entry.id)} aria-label={`Replace selected section with ${entry.name}`}>Replace selected section</button>}</div>) : <div className={s.panelEmpty}><Icon name="search" /><p>No matching modules</p><button onClick={() => { setQuery(''); setCategory('All modules') }}>Clear filters</button></div>}</div>
          <div className={s.panelFoot}><Icon name="plus" size={14} /><span>Add inserts a block on this canvas.<br />Replace changes the selected section.</span></div></>}
        {leftTab === 'layers' && <div className={s.layersPanel}><div className={s.panelHeading}><b>Page layers</b><span>{allItems(doc.nodes).length}</span></div>{doc.nodes.length ? <LayerTree nodes={doc.nodes} selectedId={selectedId} onSelect={select} collapsed={collapsed} onCollapse={(id) => setCollapsed({ ...collapsed, [id]: !collapsed[id] })} /> : <div className={s.panelEmpty}><Icon name="layers" /><p>Your layers will appear here.</p><button onClick={() => setLeftTab('insert')}>Browse modules</button></div>}</div>}
        {leftTab === 'motion' && <div className={s.scrollStack}><div className={s.panelHeading}><b>Motion presets</b></div><p className={s.muted}>{selected ? `Apply to “${selected.name}”. This changes only the selected layer.` : 'Select a layer on your canvas to apply motion.'}</p><MotionList selected={selected} onApply={applyMotion} />{selected && <button className={s.wideButton} onClick={replay}><Icon name="play" size={16} />Replay selected motion</button>}</div>}
      </aside>}
      <section ref={viewport} className={s.viewport} aria-label="Canvas workspace" onClick={(event) => { if (event.target === event.currentTarget) select(null) }}>
        <div className={s.canvasLabel}><span><Icon name="layout" size={14} />{doc.name || 'Untitled project'}</span><span>{width} px · {doc.nodes.length} sections</span></div>
        <div className={s.canvasStage} style={{ width: width * scale, height: canvasHeight * scale }}><div ref={canvas} className={s.canvas} data-testid="canvas" style={{ width, transform: `scale(${scale})`, ...paletteVars(doc.palette) }} onClick={() => select(null)}>
          {!ready ? <div className={s.blankCanvas}>Opening your workspace…</div> : doc.nodes.length ? doc.nodes.map((node) => <CanvasItem key={node.id} node={node} selectedId={selectedId} preview={preview} playing={playing} replay={motionReplay} onSelect={select} onPatch={patch} onEnd={endEdit} onImage={chooseImage} onPreviewAction={(label) => setNotice(`${label} is a design preview. Add a destination link in the inspector.`)} />) : <div className={s.blankCanvas} data-testid="blank-canvas">{!preview && <div className={s.emptyHint}><span className={s.emptyPlus}><Icon name="plus" size={26} /></span><p>Your canvas is ready</p><span>Add a block from Insert.<br />Or start with your own words.</span><button onClick={(event) => { event.stopPropagation(); insert('text') }}>Add text<Icon name="arrow" size={16} /></button></div>}</div>}
        </div></div><div className={s.canvasFooter}>{preview ? 'Presentation mode · Escape to return' : 'Click to select · Type to edit text · Escape to deselect'}</div>
      </section>
      {!preview && <Inspector {...{ doc, selected, section, patch, dispatch, endEdit, applyMotion, replay, chooseImage, duplicate, remove }} tab={rightTab} setTab={setRightTab} deselect={() => select(null)} panelOpen={mobilePanel === 'inspector'} />}
    </div>
    <footer className={s.statusbar}><span><span className={s.statusDot} />{preview ? 'Presenting' : selected ? `${selected.kind} selected` : 'Ready to create'}</span><span>{selected?.name || 'One canvas. Your ideas.'}</span><button onClick={() => { setTourStep(0); setModal('intro') }}>Quick guide <Icon name="help" size={13} /></button></footer>
    <input className={s.hiddenInput} ref={importInput} type="file" accept=".json,application/json" onChange={importProject} aria-label="Import project file" /><input className={s.hiddenInput} ref={imageInput} type="file" accept="image/png,image/jpeg,image/webp,image/gif" onChange={uploadImage} aria-label="Upload canvas image" />
    {notice && <div className={s.toast} role="status">{notice}<IconButton icon="close" label="Dismiss notification" onClick={() => setNotice('')} /></div>}
    {modal === 'intro' && <Modal title="A quick look around" onClose={finishIntro}><div className={s.introVisual} data-step={tourStep}><div><i /><i /><i /></div><div>{tourStep === 0 ? <Icon name="plus" size={32} /> : tourStep === 1 ? <span>Your idea<span className={s.editCaret}>|</span></span> : <Icon name="check" size={38} />}</div><div><i /><i /><i /></div></div><span className={s.eyebrow}>QUICK GUIDE · {tourStep + 1} OF 3</span><h2>{['Start with an empty canvas', 'Select it. Make it yours.', 'Your work stays with you'][tourStep]}</h2><p>{['Choose a block in Insert, or add a simple heading, image or shape. Add puts it on your existing canvas. New project starts a separate blank canvas.', 'Click any text to type. Click an image, button or container to edit it in the right panel. Motion and color presets change the selected item. Replace changes a whole section.', 'Edits save as you make them in this browser, including when you go back. Gallery holds your projects. Export a backup to move work between browsers. Present plays your motion.'][tourStep]}</p><div className={s.modalActions}><button onClick={finishIntro}>Skip guide</button><div className={s.steps}>{[0, 1, 2].map((n) => <button key={n} aria-label={`Guide step ${n + 1}`} aria-current={tourStep === n ? 'step' : undefined} onClick={() => setTourStep(n)} />)}</div><button className={s.primary} onClick={() => tourStep < 2 ? setTourStep(tourStep + 1) : finishIntro()}>{tourStep < 2 ? 'Next' : 'Start creating'}<Icon name="arrow" size={16} /></button></div></Modal>}
    {modal === 'gallery' && <Modal title="Your gallery" onClose={() => setModal(null)} wide><span className={s.eyebrow}>YOUR WORKSPACE</span><h2>Your gallery</h2><p>Projects saved in this browser. Export a project to keep a portable backup or share the editable file.</p><div className={s.galleryActions}><button className={s.primary} onClick={newProject}><Icon name="plus" />New project</button><button onClick={() => importInput.current?.click()}><Icon name="upload" />Import project</button></div><div className={s.galleryGrid}>{workspace.projects.map((project) => <button key={project.id} className={s.projectCard} onClick={() => openProject(project)}><div className={s.projectThumb} style={{ background: project.palette.bg, color: project.palette.ink }}><span style={{ background: project.palette.accent }} /><strong>{allItems(project.nodes).find((item) => item.kind === 'text')?.text || 'Blank canvas'}</strong><div>{project.nodes.slice(0, 4).map((node) => <i key={node.id} style={{ background: project.palette.line }} />)}</div></div><b>{project.name || 'Untitled project'}</b><small>{project.nodes.length} sections {project.id === doc.id ? '· Current project' : ''}</small></button>)}</div></Modal>}
  </main>
}
