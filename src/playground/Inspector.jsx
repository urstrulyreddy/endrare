import React from 'react'
import { resolveColor, siblingsOf } from './model'
import { Icon, IconButton, Field, NumberField, Segment, ColorField, PalettePicker, MotionList } from './components'
import s from '../sections/Playground.module.css'

export default function Inspector({ doc, selected, section, tab, setTab, patch, dispatch, endEdit, deselect, applyMotion, replay, chooseImage, duplicate, remove, panelOpen }) {
  const palette = selected?.palette || section?.palette || doc.palette
  const st = selected?.style || {}
  const style = (key, value, group) => patch(selected.id, { style: { [key]: value } }, group)
  const number = (label, key, fallback, min, max) => <NumberField label={label} value={st[key] ?? fallback} min={min} max={max} onChange={(value) => style(key, value, key)} onEnd={endEdit} />
  const siblings = selected ? siblingsOf(doc.nodes, selected.id) : []
  const index = siblings?.findIndex((entry) => entry.id === selected?.id) ?? -1
  return <aside className={`${s.inspector} ${panelOpen ? s.panelOpen : ''}`} aria-label="Inspector">
    <div className={s.selectionHeading}><span className={s.selectionIcon}><Icon name={selected ? selected.kind === 'section' ? 'layout' : selected.kind : 'cursor'} /></span><div><small>{selected ? selected.kind : 'CANVAS'}</small><strong>{selected?.name || 'Page settings'}</strong></div>{selected && <IconButton icon="close" label="Deselect layer" onClick={deselect} />}</div>
    <div className={s.panelTabs}>{['design', 'color', 'motion'].map((id) => <button key={id} aria-pressed={tab === id} onClick={() => setTab(id)}>{id[0].toUpperCase() + id.slice(1)}</button>)}</div>
    <div className={s.inspectorScroll}>
      {!selected && <><div className={s.canvasTip}><Icon name="cursor" /><b>Select something to edit</b><p>Text, buttons, images and containers each have their own controls. You can also select them in Layers.</p></div><PalettePicker title="Canvas palette" current={doc.palette} onChange={(palette) => dispatch({ type: 'document', patch: { palette } })} /><ColorField label="Canvas background" value={doc.palette.bg} onChange={(value) => dispatch({ type: 'document', patch: { palette: { ...doc.palette, bg: value, id: 'custom' } }, group: 'canvas-color' })} onEnd={endEdit} /></>}
      {selected && tab === 'design' && <>
        <Field label="Layer name"><input value={selected.name} maxLength={120} onChange={(event) => patch(selected.id, { name: event.target.value }, `name-${selected.id}`)} onBlur={endEdit} /></Field>
        {['text', 'button', 'input'].includes(selected.kind) && <>
          <Field label={selected.kind === 'input' ? 'Field label' : 'Text content'}><textarea rows={3} value={selected.text} onChange={(event) => patch(selected.id, { text: event.target.value }, `text-${selected.id}`)} onBlur={endEdit} /></Field>
          {selected.kind === 'input' && <Field label="Placeholder"><input value={selected.placeholder} onChange={(event) => patch(selected.id, { placeholder: event.target.value }, `placeholder-${selected.id}`)} onBlur={endEdit} /></Field>}
          {selected.kind === 'button' && <Field label="Destination link"><input placeholder="https://… or #section" value={selected.href || ''} onChange={(event) => patch(selected.id, { href: event.target.value }, `link-${selected.id}`)} onBlur={endEdit} /><small>Links open in Present mode. Forms are a design preview.</small></Field>}
          <div className={s.controlPair}>{number('Font size', 'fontSize', 16, 8, 160)}<Field label="Weight"><select value={st.fontWeight || 400} onChange={(event) => style('fontWeight', +event.target.value)}>{[400, 500, 600, 700].map((weight) => <option key={weight}>{weight}</option>)}</select></Field></div>
          <Field label="Typeface"><select value={st.fontFamily || 'sans'} onChange={(event) => style('fontFamily', event.target.value)}><option value="sans">Sans serif</option><option value="serif">Editorial serif</option><option value="mono">Monospace</option></select></Field>
        </>}
        {selected.kind === 'image' && <><button className={s.wideButton} onClick={() => chooseImage(selected.id)}><Icon name="upload" />{selected.src ? 'Replace image' : 'Upload image'}</button><Field label="Image URL"><input value={selected.src?.startsWith('data:') ? '' : selected.src || ''} placeholder={selected.src?.startsWith('data:') ? 'Uploaded image' : 'https://…'} onChange={(event) => patch(selected.id, { src: event.target.value }, `image-${selected.id}`)} onBlur={endEdit} /></Field><Field label="Image description"><input value={selected.alt || ''} onChange={(event) => patch(selected.id, { alt: event.target.value }, `alt-${selected.id}`)} onBlur={endEdit} /></Field><Field label="Image fit"><select value={st.objectFit || 'cover'} onChange={(event) => style('objectFit', event.target.value)}><option value="cover">Fill frame</option><option value="contain">Fit inside</option></select></Field></>}
        {selected.children && <><Field label="Layout"><Segment options={['stack', 'row', 'grid']} value={st.layout || 'stack'} onChange={(value) => style('layout', value)} /></Field>{st.layout === 'grid' && number('Columns', 'columns', 2, 1, 6)}</>}
        <Field label="Alignment"><Segment options={['left', 'center', 'right']} value={st.align || 'left'} onChange={(value) => style('align', value)} /></Field>
        <div className={s.controlPair}>{number('Padding', 'padding', 0, 0, 200)}{number('Corner radius', 'radius', 0, 0, 300)}</div>
        {selected.children && number('Gap between items', 'gap', 0, 0, 120)}
        {['shape', 'image'].includes(selected.kind) && <div className={s.controlPair}><NumberField label="Width (0 = fill)" value={typeof st.width === 'number' ? st.width : 0} min={0} max={1200} onChange={(value) => style('width', value, 'width')} onEnd={endEdit} />{number('Height', 'height', 160, 2, 1000)}</div>}
        <div className={s.controlPair}>{number('Border width', 'borderWidth', 0, 0, 20)}{number('Rotation', 'rotation', 0, -180, 180)}</div>
        <Field label="Opacity"><input type="range" aria-label="Layer opacity" min="10" max="100" value={st.opacity ?? 100} onChange={(event) => style('opacity', +event.target.value, 'opacity')} onPointerUp={endEdit} onBlur={endEdit} /></Field>
      </>}
      {selected && tab === 'color' && <>
        <PalettePicker title={`Palette for ${selected.children ? 'selection' : 'this section'}`} current={palette} onChange={(palette) => patch(selected.children ? selected.id : section.id, { palette })} />
        <ColorField label="Fill color" value={resolveColor(st.background || (selected.kind === 'section' ? 'bg' : 'transparent'), palette)} onChange={(value) => style('background', value, 'fill')} onEnd={endEdit} />
        <button className={s.textButton} onClick={() => style('background', 'transparent')}>Remove fill</button>
        <ColorField label="Text color" value={resolveColor(st.color || 'ink', palette)} onChange={(value) => style('color', value, 'text-color')} onEnd={endEdit} />
        {selected.palette && <button className={s.textButton} onClick={() => patch(selected.id, { palette: undefined })}>Use canvas palette</button>}
        {selected.kind === 'image' && <><h3 className={s.subhead}>Image adjustments</h3>{[['brightness', 'Brightness'], ['contrast', 'Contrast'], ['saturation', 'Saturation']].map(([key, label]) => <Field label={`${label} · ${st[key] ?? 100}%`} key={key}><input type="range" aria-label={label} min="0" max="200" value={st[key] ?? 100} onChange={(event) => style(key, +event.target.value, key)} onPointerUp={endEdit} onBlur={endEdit} /></Field>)}<button className={s.textButton} onClick={() => patch(selected.id, { style: { brightness: 100, contrast: 100, saturation: 100 } })}>Reset image adjustments</button></>}
      </>}
      {selected && tab === 'motion' && <><p className={s.muted}>Applies to the selected {selected.kind}. Use Replay or Present to see motion.</p><MotionList selected={selected} onApply={applyMotion} /><div className={s.controlPair}><NumberField label="Duration (ms)" value={selected.duration} min={200} max={10000} step={100} onChange={(value) => patch(selected.id, { duration: value }, 'duration')} onEnd={endEdit} /><NumberField label="Delay (ms)" value={selected.delay} min={0} max={3000} step={100} onChange={(value) => patch(selected.id, { delay: value }, 'delay')} onEnd={endEdit} /></div><button className={s.wideButton} onClick={replay}><Icon name="play" />Replay motion</button></>}
    </div>
    {selected && <div className={s.layerActions}><IconButton icon="up" label="Move layer up" disabled={index <= 0} onClick={() => dispatch({ type: 'move', id: selected.id, direction: -1 })} /><IconButton icon="down" label="Move layer down" disabled={index >= siblings.length - 1} onClick={() => dispatch({ type: 'move', id: selected.id, direction: 1 })} /><IconButton icon="copy" label="Duplicate layer (⌘D)" onClick={duplicate} /><IconButton icon="trash" label="Delete layer" onClick={remove} /></div>}
  </aside>
}
