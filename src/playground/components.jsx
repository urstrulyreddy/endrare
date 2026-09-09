import React, { useEffect, useId, useRef, useState } from 'react'
import { clone, palettes, motions, safeHref, safeImage } from './model'
import s from '../sections/Playground.module.css'

const paths = {
  cursor: 'M5 3l14 9-7 1-3 7-4-17z', plus: 'M12 5v14M5 12h14',
  layout: 'M3 3h18v18H3zM3 9h18M9 9v12', grid: 'M3 3h7v7H3zM14 3h7v7h-7zM3 14h7v7H3zM14 14h7v7h-7z',
  text: 'M4 5h16M12 5v15M8 20h8', button: 'M4 7h16v10H4zM10 10l4 2-4 2',
  image: 'M3 3h18v18H3zM3 17l6-7 5 5 3-3 4 5M15 7h.01', shape: 'M4 4h16v16H4z',
  line: 'M3 12h18', layers: 'M12 3L2 8l10 5 10-5-10-5zM2 12l10 5 10-5M2 16l10 5 10-5',
  motion: 'M13 2L4 14h7l-1 8 10-13h-7V2z', search: 'M10 3a7 7 0 1 0 0 14 7 7 0 0 0 0-14M15 15l6 6',
  undo: 'M4 8h10a6 6 0 0 1 0 12M4 8l5-5M4 8l5 5', redo: 'M20 8H10a6 6 0 0 0 0 12M20 8l-5-5M20 8l-5 5',
  desktop: 'M3 3h18v13H3zM12 16v5M8 21h8', tablet: 'M5 2h14v20H5zM11 18h2', mobile: 'M7 2h10v20H7zM11 18h2',
  play: 'M7 3l14 9-14 9V3z', close: 'M5 5l14 14M19 5L5 19', check: 'M4 12l5 5L20 6',
  help: 'M9 8a3 3 0 1 1 5 2c-2 1-2 2-2 4M12 18h.01M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20',
  back: 'M20 12H4M4 12l6-6M4 12l6 6', up: 'M12 20V4M12 4l-6 6M12 4l6 6', down: 'M12 4v16M12 20l-6-6M12 20l6-6',
  copy: 'M8 8h13v13H8zM16 8V3H3v13h5', trash: 'M3 6h18M9 6V3h6v3M6 6l1 15h10l1-15M10 10v7M14 10v7',
  download: 'M12 3v12M7 10l5 5 5-5M4 15v6h16v-6', upload: 'M12 16V3M7 8l5-5 5 5M4 15v6h16v-6',
  settings: 'M3 7h18M7 3v8M3 17h18M16 13v8', arrow: 'M5 12h14M14 7l5 5-5 5', folder: 'M3 5h7l2 3h9v12H3z',
}
export function Icon({ name, size = 18 }) { return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d={paths[name] || paths.shape} /></svg> }
export function IconButton({ icon, label, ...props }) { return <button type="button" className={s.iconButton} title={label} aria-label={label} {...props}><Icon name={icon} /></button> }
export const isTyping = (element) => element?.isContentEditable || /^(INPUT|TEXTAREA|SELECT)$/.test(element?.tagName)
export function Field({ label, children }) {
  const id = useId()
  const controls = React.Children.toArray(children)
  const inputIndex = controls.findIndex((child) => React.isValidElement(child) && ['input', 'select', 'textarea'].includes(child.type))
  return <div className={s.field} role={inputIndex === -1 ? 'group' : undefined} aria-label={inputIndex === -1 ? label : undefined}><label htmlFor={inputIndex !== -1 ? id : undefined}>{label}</label>{controls.map((child, index) => index === inputIndex ? React.cloneElement(child, { id }) : child)}</div>
}
export function NumberField({ label, value, onChange, min = 0, max = 1200, step = 1, onEnd }) { return <Field label={label}><input type="number" value={value} min={min} max={max} step={step} onChange={(event) => { if (event.target.value !== '') onChange(Math.max(min, Math.min(max, Number(event.target.value)))) }} onBlur={onEnd} /></Field> }
export function Segment({ options, value, onChange }) { return <span className={s.segment}>{options.map((option) => <button type="button" key={option} aria-pressed={value === option} onClick={() => onChange(option)}>{option}</button>)}</span> }
export function ColorField({ label, value, onChange, onEnd }) {
  const valid = /^#[a-f0-9]{6}$/i.test(value) ? value : '#fafaf8'
  return <div className={s.colorField}><span>{label}</span><label><span className={s.srOnly}>{label}</span><input type="color" aria-label={label} value={valid} onChange={(event) => onChange(event.target.value)} onBlur={onEnd} /><span>{value === 'transparent' ? 'No fill' : valid.toUpperCase()}</span></label></div>
}
export function PalettePicker({ title, current, onChange }) { return <div className={s.palettePicker}><h3>{title}</h3><div>{palettes.map((palette) => <button key={palette.id} aria-label={`Apply ${palette.name} palette`} aria-pressed={current.id === palette.id} onClick={() => onChange(clone(palette))}><span>{[palette.bg, palette.accent, palette.ink].map((color) => <i key={color} style={{ background: color }} />)}</span><small>{palette.name}</small></button>)}</div></div> }
export function MotionList({ selected, onApply }) { return <div className={s.motionList}>{motions.map((motion) => <button key={motion.id} disabled={!selected} aria-label={`Apply ${motion.name} motion`} aria-pressed={selected?.motion === motion.id} onClick={() => onApply(motion.id)}><span className={s.motionGlyph} data-motion={motion.id}><i /></span><span><b>{motion.name}</b><small>{motion.description}</small></span>{selected?.motion === motion.id && <Icon name="check" size={14} />}</button>)}</div> }
export function LayerTree({ nodes, selectedId, onSelect, collapsed, onCollapse, depth = 0 }) { return <ul className={s.layerTree}>{nodes.map((node) => <li key={node.id}><div className={s.layerRow} style={{ paddingLeft: 12 + depth * 12 }} data-selected={selectedId === node.id}>{node.children ? <button className={s.disclosure} aria-label={`${collapsed[node.id] ? 'Expand' : 'Collapse'} ${node.name}`} aria-expanded={!collapsed[node.id]} onClick={() => onCollapse(node.id)}>{collapsed[node.id] ? '›' : '⌄'}</button> : <span className={s.disclosureSpace} />}<button className={s.layerSelect} onClick={() => { onSelect(node.id); document.getElementById(`layer-${node.id}`)?.scrollIntoView({ block: 'nearest', inline: 'nearest' }) }} aria-pressed={selectedId === node.id}><Icon name={node.kind === 'section' || node.kind === 'group' ? 'layout' : node.kind} size={14} /><span>{node.name}</span></button></div>{node.children && !collapsed[node.id] && <LayerTree nodes={node.children} selectedId={selectedId} onSelect={onSelect} collapsed={collapsed} onCollapse={onCollapse} depth={depth + 1} />}</li>)}</ul> }

export function paletteVars(palette) { return { '--canvas-bg': palette.bg, '--canvas-ink': palette.ink, '--canvas-accent': palette.accent, '--canvas-line': palette.line } }
function cssColor(value) { return ['bg', 'ink', 'accent', 'line'].includes(value) ? `var(--canvas-${value})` : value || undefined }
function itemStyle(node) {
  const st = node.style || {}
  return {
    ...(node.palette ? paletteVars(node.palette) : {}),
    color: cssColor(st.color) || (node.palette ? 'var(--canvas-ink)' : undefined), background: cssColor(st.background) || (node.kind === 'section' || node.palette ? 'var(--canvas-bg)' : undefined),
    '--padding': `${st.padding || 0}px`, gap: st.gap, borderRadius: st.radius, fontSize: st.fontSize, fontWeight: st.fontWeight,
    lineHeight: st.lineHeight, letterSpacing: st.letterSpacing, fontFamily: st.fontFamily === 'serif' ? 'Georgia, serif' : st.fontFamily === 'mono' ? 'ui-monospace, monospace' : undefined,
    textAlign: st.align, '--align-items': { left: 'stretch', center: 'center', right: 'end' }[st.align || 'left'],
    '--columns': st.columns || 2, justifyContent: st.justify === 'between' ? 'space-between' : st.justify,
    border: st.borderWidth ? `${st.borderWidth}px solid var(--canvas-line)` : undefined,
    width: st.width === 'fit' ? 'fit-content' : st.width || undefined, height: st.height || undefined,
    opacity: (st.opacity ?? 100) / 100, rotate: st.rotation ? `${st.rotation}deg` : undefined,
  }
}
function EditableText({ node, editing, onPatch, onEnd, onSelect, className, placeholder }) {
  const ref = useRef(null)
  const value = placeholder ? node.placeholder : node.text
  // React never reconciles the children of an active text editor, preserving the caret.
  useEffect(() => { if (ref.current && ref.current.textContent !== value) ref.current.textContent = value || '' }, [value])
  return <span ref={ref} className={className} contentEditable={editing ? 'plaintext-only' : false} suppressContentEditableWarning role={editing ? 'textbox' : undefined} aria-label={editing ? `${placeholder ? 'Placeholder' : 'Edit'} ${node.name}` : undefined} tabIndex={editing ? 0 : undefined} onFocus={() => onSelect(node.id)} onInput={(event) => onPatch(node.id, { [placeholder ? 'placeholder' : 'text']: event.currentTarget.textContent }, `${placeholder ? 'placeholder' : 'text'}-${node.id}`)} onBlur={onEnd} onKeyDown={(event) => { event.stopPropagation(); if (event.key === 'Escape') event.currentTarget.blur() }} />
}
export function CanvasItem({ node, selectedId, preview, playing, replay, onSelect, onPatch, onEnd, onImage, onPreviewAction }) {
  const element = useRef(null)
  const selected = node.id === selectedId
  useEffect(() => {
    if (!element.current?.animate || (!preview && !(selected && playing)) || node.motion === 'none' || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const frames = {
      rise: [{ opacity: 0, transform: 'translateY(20px)' }, { opacity: 1, transform: 'translateY(0)' }],
      fade: [{ opacity: 0 }, { opacity: 1 }], slide: [{ opacity: 0, transform: 'translateX(-24px)' }, { opacity: 1, transform: 'translateX(0)' }],
      zoom: [{ opacity: 0, transform: 'scale(.94)' }, { opacity: 1, transform: 'scale(1)' }],
      float: [{ transform: 'translateY(0)' }, { transform: 'translateY(-6px)' }, { transform: 'translateY(0)' }],
      pulse: [{ transform: 'scale(1)' }, { transform: 'scale(1.015)' }, { transform: 'scale(1)' }],
      spin: [{ transform: 'rotate(0)' }, { transform: 'rotate(360deg)' }],
    }[node.motion]
    if (!frames) return
    const loop = ['float', 'pulse', 'spin'].includes(node.motion)
    const animation = element.current.animate(frames, { duration: Math.max(loop ? 1600 : 200, node.duration || 800), delay: node.delay || 0, easing: node.motion === 'spin' ? 'linear' : 'cubic-bezier(.2,.7,.3,1)', iterations: loop ? Infinity : 1 })
    return () => animation.cancel()
  }, [preview, playing, replay, selected, node.motion, node.duration, node.delay])
  const props = { ref: element, id: `layer-${node.id}`, 'data-layer-id': node.id, 'data-kind': node.kind, 'data-selected': !preview && selected, className: `${s.canvasItem} ${s[node.kind] || ''}`, style: itemStyle(node), onClick: (event) => { if (!preview) { event.stopPropagation(); onSelect(node.id) } }, onKeyDown: (event) => { if (!preview && !isTyping(event.target) && (event.key === 'Enter' || event.key === ' ')) { event.preventDefault(); event.stopPropagation(); onSelect(node.id) } }, tabIndex: preview || node.kind === 'text' ? undefined : 0, 'aria-label': preview ? undefined : `Select ${node.name}` }
  const textProps = { node, editing: !preview, onPatch, onEnd, onSelect }
  if (node.children) return <div {...props} data-layout={node.style.layout || 'stack'}>{node.children.map((child) => <CanvasItem key={child.id} {...{ node: child, selectedId, preview, playing, replay, onSelect, onPatch, onEnd, onImage, onPreviewAction }} />)}{!node.children.length && !preview && <span className={s.emptyGroup}>Empty container · add a module or undo deletion</span>}</div>
  if (node.kind === 'text') return <div {...props}><EditableText {...textProps} /></div>
  if (node.kind === 'button') return preview ? <a {...props} href={safeHref(node.href) || undefined} onClick={(event) => { if (!safeHref(node.href)) { event.preventDefault(); onPreviewAction(node.text) } }}>{node.text}</a> : <div {...props}><EditableText {...textProps} /></div>
  if (node.kind === 'image') return <div {...props} onDoubleClick={() => !preview && onImage(node.id)}>{safeImage(node.src) ? <CanvasImage src={safeImage(node.src)} alt={node.alt} fit={node.style.objectFit} brightness={node.style.brightness} contrast={node.style.contrast} saturation={node.style.saturation} /> : <div className={s.imagePlaceholder}><Icon name="image" size={40} />{!preview && <button onClick={(event) => { event.stopPropagation(); onSelect(node.id); onImage(node.id) }}>Choose image</button>}</div>}</div>
  if (node.kind === 'input') return <div {...props}>{preview ? <label className={s.previewInputLabel}>{node.text}<input placeholder={node.placeholder} /></label> : <><EditableText {...textProps} /><div className={s.inputPlaceholder}><EditableText {...textProps} placeholder /></div></>}</div>
  return <div {...props} />
}
function CanvasImage({ src, alt, fit, brightness = 100, contrast = 100, saturation = 100 }) {
  const [failed, setFailed] = useState(false)
  useEffect(() => setFailed(false), [src])
  return failed ? <div className={s.imagePlaceholder}><Icon name="image" /><span>Image unavailable · choose another image</span></div> : <img src={src} alt={alt || ''} width="800" height="600" draggable={false} onError={() => setFailed(true)} style={{ objectFit: fit || 'cover', filter: `brightness(${brightness}%) contrast(${contrast}%) saturate(${saturation}%)` }} />
}
export function Modal({ title, onClose, children, wide }) {
  const ref = useRef(null)
  const closeRef = useRef(onClose); closeRef.current = onClose
  useEffect(() => { const dialog = ref.current; const previous = document.activeElement; dialog.showModal(); return () => { dialog.close(); previous?.focus?.() } }, [])
  return <dialog ref={ref} className={`${s.modal} ${wide ? s.wideModal : ''}`} aria-label={title} onCancel={(event) => { event.preventDefault(); closeRef.current() }} onClick={(event) => { if (event.target === ref.current) { const bounds = ref.current.getBoundingClientRect(); if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) closeRef.current() } }}><div className={s.modalTop}><span>{title}</span><IconButton icon="close" label="Close dialog" onClick={onClose} /></div>{children}</dialog>
}
