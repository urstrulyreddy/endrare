// The document is the single source of truth for rendering, history and storage.
export const WORKSPACE_KEY = 'endrare-workspace-v2'
export const LEGACY_KEY = 'endrare-playground-draft'
export const MAX_ITEMS = 1500
export const clone = (value) => JSON.parse(JSON.stringify(value))
export const uid = () => globalThis.crypto?.randomUUID?.() || `item-${Date.now()}-${Math.random().toString(36).slice(2)}`
export const palettes = [
  ['paper', 'Paper', '#fafaf8', '#252b38', '#e4e8f4', '#daddE5'],
  ['sky', 'Sky', '#eef5fd', '#20354b', '#c1ddff', '#cbdcec'],
  ['orchard', 'Orchard', '#f1f7ed', '#283d2c', '#c6deb8', '#d6e2cd'],
  ['peach', 'Peach', '#fff4eb', '#4b3024', '#f2c4a5', '#ead5c5'],
  ['lilac', 'Lilac', '#f6f2ff', '#362c4b', '#dcd0f4', '#e1d8eb'],
  ['sand', 'Sand', '#f8f3e9', '#443b2c', '#e1d2ab', '#e1d9c7'],
  ['rose', 'Rose', '#fff2f2', '#4b2e36', '#efc8d1', '#ecd9dc'],
  ['mint', 'Mint', '#eff8f5', '#234039', '#b8ddd0', '#d2e3dc'],
  ['clay', 'Clay', '#f5eee9', '#45362e', '#d8b7a5', '#dfd1c7'],
  ['ice', 'Ice', '#f0f7f8', '#233d43', '#bcdbe3', '#d2e2e5'],
  ['lemon', 'Lemon', '#faf9ed', '#41412a', '#e8e4b4', '#e2e1cc'],
  ['night', 'Night', '#252b38', '#f6f7fb', '#53607c', '#5c687d'],
].map(([id, name, bg, ink, accent, line]) => ({ id, name, bg, ink, accent, line }))

export const motions = [
  ['none', 'None', 'Keep it still'], ['rise', 'Rise', 'Move gently into view'],
  ['fade', 'Fade', 'Ease into focus'], ['slide', 'Slide', 'Enter from the side'],
  ['zoom', 'Scale', 'Grow into place'], ['float', 'Float', 'A slow, continuous drift'],
  ['pulse', 'Breathe', 'A subtle scale loop'], ['spin', 'Rotate', 'A steady full rotation'],
].map(([id, name, description]) => ({ id, name, description }))

export const modules = [
  ['heading', 'Heading', 'Basics', 'A heading you can type into', 'text'],
  ['text', 'Paragraph', 'Basics', 'Add your own words', 'text'],
  ['button', 'Button', 'Basics', 'An editable call to action', 'button'],
  ['image', 'Image', 'Basics', 'Upload an image or use a URL', 'image'],
  ['shape', 'Shape', 'Basics', 'Color, size and round any shape', 'shape'],
  ['divider', 'Divider', 'Basics', 'Give content a little separation', 'line'],
  ['nav', 'Navigation', 'Navigation', 'Brand and navigation links', 'layout'],
  ['announcement', 'Announcement', 'Navigation', 'A short message and a link', 'layout'],
  ['breadcrumbs', 'Breadcrumbs', 'Navigation', 'A simple path through a site', 'layout'],
  ['sidebar', 'Sidebar', 'Navigation', 'A menu for a workspace', 'layout'],
  ['hero', 'Hero', 'Sections', 'A headline and clear next step', 'layout'],
  ['editorial', 'Editorial split', 'Sections', 'Pair an image with a story', 'layout'],
  ['feature-grid', 'Feature cards', 'Sections', 'Three editable feature cards', 'grid'],
  ['logo-cloud', 'Logo strip', 'Sections', 'A row of editable brand names', 'layout'],
  ['quote', 'Quote', 'Sections', 'A thought worth remembering', 'text'],
  ['metrics', 'Statistics', 'Sections', 'Three numbers with context', 'grid'],
  ['pricing', 'Pricing', 'Commerce', 'Three plans with editable prices', 'grid'],
  ['product', 'Product card', 'Commerce', 'Image, price and purchase action', 'image'],
  ['testimonial', 'Testimonial', 'Commerce', 'A quote and its author', 'text'],
  ['dashboard', 'Dashboard', 'Product UI', 'An overview with data cards', 'grid'],
  ['inbox', 'Inbox', 'Product UI', 'Editable message rows', 'layout'],
  ['form', 'Contact form', 'Product UI', 'Input labels and action', 'layout'],
  ['timeline', 'Timeline', 'Product UI', 'A sequence of milestones', 'layout'],
  ['steps', 'Process steps', 'Sections', 'Explain an idea in three steps', 'grid'],
  ['marquee', 'Statement strip', 'Sections', 'Large type across a section', 'text'],
  ['cursor', 'Interactive card', 'Sections', 'An invitation with a hover state', 'button'],
  ['footer', 'Footer', 'Navigation', 'A final invitation and links', 'layout'],
].map(([id, name, category, description, icon]) => ({ id, name, category, description, icon }))

const item = (kind, name, props = {}) => ({ id: uid(), kind, name, style: {}, motion: 'none', duration: 800, delay: 0, ...props })
const text = (value, size = 16, extra = {}) => item('text', value.slice(0, 32), { text: value, style: { fontSize: size, lineHeight: size > 30 ? 1.1 : 1.6, ...extra } })
const button = (value) => item('button', value, { text: value, href: '', style: { padding: 14, radius: 8, fontSize: 14, background: 'ink', color: 'bg', width: 'fit' } })
const group = (name, children, style = {}) => item('group', name, { children, style: { layout: 'stack', gap: 16, ...style } })
const row = (name, children, style = {}) => group(name, children, { layout: 'row', ...style })
const picture = () => item('image', 'Image', { src: '', alt: 'Describe your image', style: { height: 240, radius: 16, objectFit: 'cover', background: 'accent', brightness: 100, contrast: 100, saturation: 100 } })
const cards = (name, children) => group(name, children, { layout: 'grid', columns: 3, gap: 20 })
const card = (title, copy) => group(title, [text(title, 24), text(copy)], { padding: 24, radius: 12, background: 'accent' })

export function createModule(type) {
  const definition = modules.find((entry) => entry.id === type)
  if (!definition) throw new Error('Choose an available module.')
  const builders = {
    heading: () => [text('Your next big idea', 48, { fontWeight: 500 })],
    text: () => [text('Write something worth sharing.')],
    button: () => [button('Explore the idea')], image: () => [picture()],
    shape: () => [item('shape', 'Shape', { style: { width: 160, height: 160, radius: 24, background: 'accent' } })],
    divider: () => [item('shape', 'Divider', { style: { height: 2, background: 'line' } })],
    nav: () => [row('Navigation items', [text('your studio.', 24, { fontWeight: 500 }), text('Work'), text('About'), button('Let’s talk')], { justify: 'between' })],
    announcement: () => [row('Announcement', [text('A new idea is taking shape.'), button('Take a look')], { justify: 'between' })],
    breadcrumbs: () => [row('Breadcrumb links', [text('Home'), text('/'), text('Projects'), text('/'), text('Your idea')])],
    sidebar: () => [group('Workspace menu', [text('Workspace', 24), text('Overview'), text('Projects'), text('Activity'), button('New project')])],
    hero: () => [text('A NEW PERSPECTIVE', 12, { letterSpacing: 2 }), text('Good ideas start with a blank canvas.', 64, { fontWeight: 500, letterSpacing: -2 }), text('Give your idea a home. Shape the words, find the colors, and make the experience your own.'), button('Explore the idea')],
    editorial: () => [group('Story and image', [group('Story', [text('Behind the idea', 44), text('Tell the story behind your work. Start with the detail that made you see things differently.'), button('Read the story')]), picture()], { layout: 'grid', columns: 2, gap: 40 })],
    'feature-grid': () => [text('Made for what matters', 36), cards('Features', [card('Keep it clear', 'Put the useful things within reach.'), card('Make it yours', 'Thoughtful details make a difference.'), card('Move forward', 'Turn a small idea into the next step.')])],
    'logo-cloud': () => [text('IN GOOD COMPANY', 12, { letterSpacing: 2 }), row('Brands', ['northstar', 'kindred', 'COMMONS', 'field notes'].map((name) => text(name, 24)), { justify: 'between' })],
    quote: () => [text('“Great things begin with a little curiosity.”', 44, { fontFamily: 'serif' }), text('Your name · Your studio')],
    metrics: () => [cards('Statistics', [['24', 'New ideas'], ['8.4k', 'People reached'], ['96%', 'Felt clear']].map(([value, label]) => group(label, [text(value, 48), text(label)])))],
    pricing: () => [text('Choose your pace', 40), cards('Plans', [['Starter', 'Free', 'A place to begin'], ['Studio', '€24', 'Room to grow'], ['Team', 'Let’s talk', 'Build together']].map(([title, price, copy]) => group(title, [text(title, 20), text(price, 36), text(copy), button('Choose this plan')], { padding: 24, borderWidth: 1, radius: 12 })))],
    product: () => [picture(), text('Everyday essentials', 32), text('Thoughtfully designed. Made to last.'), text('€48', 24), button('Shop now')],
    testimonial: () => [text('“It made the next step obvious.”', 36), row('Author', [item('shape', 'Avatar', { style: { background: 'accent', radius: 50, width: 48, height: 48 } }), group('Author details', [text('Alex Morgan', 16, { fontWeight: 600 }), text('Founder, Northstar', 14)])])],
    dashboard: () => [text('Today, in view', 36), cards('Overview', [card('12 projects', 'Three ready for review'), card('248 hours', 'A productive month'), card('98% on track', 'Moving in a good direction')]), row('Project status', [text('Website redesign'), text('In progress'), button('Open project')], { justify: 'between' })],
    inbox: () => [text('Your inbox', 36), ...['A new beginning', 'A thought to share', 'Ready for your review'].map((subject) => row(subject, [group('Message', [text(subject, 20), text('A short preview of your message.', 14)]), button('Read')], { justify: 'between', padding: 16, borderWidth: 1, radius: 8 }))],
    form: () => [text('Tell us about your idea', 36), ...['Your name', 'Email address', 'Your message'].map((label) => item('input', label, { text: label, placeholder: `Enter ${label.toLowerCase()}`, style: { padding: 16, radius: 8, borderWidth: 1 } })), button('Send message')],
    timeline: () => [text('From idea to reality', 36), ...['Find the question', 'Explore the possibilities', 'Bring it to life'].map((step, i) => row(step, [text(`0${i + 1}`, 32), group(step, [text(step, 24), text('Add a little context to this moment.')])], { padding: 16, borderWidth: 1, radius: 8 }))],
    steps: () => [text('One step at a time', 36), cards('Process', ['Understand', 'Explore', 'Create'].map((step, i) => card(`0${i + 1} · ${step}`, 'Add the detail that helps people move forward.')))],
    marquee: () => [text('Make room for better ideas.', 64, { fontFamily: 'serif' })],
    cursor: () => [group('Interactive card', [text('A little curiosity goes a long way.', 36), button('Take a closer look')], { padding: 40, background: 'accent', radius: 24 })],
    footer: () => [text('Keep the good idea moving.', 40), button('Let’s build something'), row('Footer links', [text('your studio.'), text('About'), text('Contact'), text('© Your studio')], { justify: 'between' })],
  }
  return { ...group(definition.name, builders[type](), { padding: ['nav', 'announcement', 'breadcrumbs'].includes(type) ? 24 : 48, gap: 24 }), kind: 'section', type }
}

export function blankDocument(id = uid()) { return { id, name: 'Untitled project', palette: clone(palettes[0]), device: 'desktop', nodes: [] } }
export function blankWorkspace() { const doc = blankDocument('initial'); return { version: 2, activeId: doc.id, projects: [doc], introSeen: false } }
export function allItems(nodes) { return nodes.flatMap((node) => [node, ...allItems(node.children || [])]) }
export function findItem(nodes, id) { return allItems(nodes).find((node) => node.id === id) }
export function mapItems(nodes, id, update) { return nodes.map((node) => node.id === id ? update(node) : node.children ? { ...node, children: mapItems(node.children, id, update) } : node) }
export function removeItem(nodes, id) { return nodes.filter((node) => node.id !== id).map((node) => node.children ? { ...node, children: removeItem(node.children, id) } : node) }
export function copyItem(node) { const copy = clone(node); copy.id = uid(); if (copy.children) copy.children = copy.children.map(copyItem); return copy }
export function insertSibling(nodes, id, inserted) { return nodes.flatMap((node) => node.id === id ? [node, inserted] : [{ ...node, ...(node.children ? { children: insertSibling(node.children, id, inserted) } : {}) }]) }
export function moveItem(nodes, id, direction) {
  const index = nodes.findIndex((node) => node.id === id)
  if (index !== -1) { const next = [...nodes]; const target = index + direction; if (target >= 0 && target < nodes.length) [next[index], next[target]] = [next[target], next[index]]; return next }
  return nodes.map((node) => node.children ? { ...node, children: moveItem(node.children, id, direction) } : node)
}
export function parentSection(nodes, id) { return nodes.find((node) => findItem([node], id)) }
export function siblingsOf(nodes, id) { if (nodes.some((node) => node.id === id)) return nodes; for (const node of nodes) { const found = siblingsOf(node.children || [], id); if (found) return found } return null }
export function applyPalette(node, palette) { return { ...node, palette: clone(palette) } }
export function resolveColor(value, palette) { return palette[value] || value || undefined }
export function safeHref(value) { return /^(https?:\/\/|mailto:|tel:|#|\/(?!\/))/i.test(value || '') ? value : '' }
export function safeImage(value) { return /^(https?:\/\/|\/(?!\/)|data:image\/(png|jpeg|webp|gif);base64,)/i.test(value || '') ? value : '' }

export function applyDocumentAction(doc, action) {
  const target = findItem(doc.nodes, action.id)
  switch (action.type) {
    case 'insert': return { ...doc, nodes: [...doc.nodes, action.node] }
    case 'patch': return target ? { ...doc, nodes: mapItems(doc.nodes, action.id, (node) => ({ ...node, ...action.patch, style: { ...node.style, ...action.patch.style } })) } : doc
    case 'replace': return target ? { ...doc, nodes: mapItems(doc.nodes, action.id, () => ({ ...action.node, id: action.id })) } : doc
    case 'remove': return { ...doc, nodes: removeItem(doc.nodes, action.id) }
    case 'duplicate': return target ? { ...doc, nodes: insertSibling(doc.nodes, action.id, action.copy) } : doc
    case 'move': return { ...doc, nodes: moveItem(doc.nodes, action.id, action.direction) }
    case 'document': return { ...doc, ...action.patch }
    default: return doc
  }
}

export function createHistory(doc) { return { doc, past: [], future: [], group: null } }
export function reduceHistory(state, action) {
  if (action.type === 'reset') return createHistory(action.doc)
  if (action.type === 'end') return { ...state, group: null }
  if (action.type === 'undo') { const previous = state.past.at(-1); return previous ? { doc: previous, past: state.past.slice(0, -1), future: [state.doc, ...state.future], group: null } : state }
  if (action.type === 'redo') { const next = state.future[0]; return next ? { doc: next, past: [...state.past, state.doc], future: state.future.slice(1), group: null } : state }
  const doc = applyDocumentAction(state.doc, action)
  if (JSON.stringify(doc) === JSON.stringify(state.doc)) return state
  if (allItems(doc.nodes).length > MAX_ITEMS) throw new Error('This project is full. Start another project to keep creating.')
  return { doc, past: action.group && state.group === action.group ? state.past : [...state.past.slice(-39), state.doc], future: [], group: action.group || null }
}

// Validate imported and stored data; rendering never trusts arbitrary tags or CSS.
export function normalizeDocument(input) {
  if (!input || !Array.isArray(input.nodes)) throw new Error('This file is not an Endrare project.')
  const ids = new Set(); let count = 0
  const cleanNodes = (nodes, depth = 0) => {
    if (depth > 10) throw new Error('This project has too many nested layers.')
    return nodes.map((node) => {
      if (++count > MAX_ITEMS || !node || !['section', 'group', 'text', 'button', 'image', 'shape', 'input'].includes(node.kind)) throw new Error('This project contains unsupported layers.')
      const id = typeof node.id === 'string' && !ids.has(node.id) ? node.id : uid(); ids.add(id)
      const style = {}
      for (const [key, value] of Object.entries(node.style || {})) {
        if (['padding', 'gap', 'radius', 'fontSize', 'letterSpacing', 'lineHeight', 'fontWeight', 'borderWidth', 'opacity', 'rotation', 'width', 'height', 'columns', 'brightness', 'contrast', 'saturation'].includes(key) && typeof value === 'number' && Number.isFinite(value)) style[key] = Math.max(key === 'letterSpacing' || key === 'rotation' ? -360 : 0, Math.min(2400, value))
        if (['color', 'background'].includes(key) && (['ink', 'accent', 'bg', 'line', 'transparent'].includes(value) || /^#[0-9a-f]{6}$/i.test(value))) style[key] = value
        if (['layout', 'align', 'justify', 'fontFamily', 'objectFit', 'width'].includes(key) && ['row', 'grid', 'stack', 'left', 'center', 'right', 'between', 'start', 'end', 'sans', 'serif', 'mono', 'cover', 'contain', 'fit'].includes(value)) style[key] = value
      }
      return { id, kind: node.kind, type: modules.some((m) => m.id === node.type) ? node.type : undefined, name: String(node.name || 'Layer').slice(0, 120), style, text: String(node.text ?? '').slice(0, 10000), href: safeHref(node.href), src: safeImage(node.src), alt: String(node.alt || '').slice(0, 300), placeholder: String(node.placeholder || '').slice(0, 300), motion: motions.some((m) => m.id === node.motion) ? node.motion : 'none', duration: Math.max(200, Math.min(10000, Number(node.duration) || 800)), delay: Math.max(0, Math.min(3000, Number(node.delay) || 0)), ...(node.palette ? { palette: cleanPalette(node.palette) } : {}), ...(node.children ? { children: cleanNodes(node.children, depth + 1) } : {}) }
    })
  }
  return { id: typeof input.id === 'string' ? input.id : uid(), name: String(input.name || 'Untitled project').slice(0, 120), palette: cleanPalette(input.palette), device: ['mobile', 'tablet', 'desktop'].includes(input.device) ? input.device : 'desktop', nodes: cleanNodes(input.nodes) }
}
function cleanPalette(input) { const p = { ...palettes[0] }; if (!input || typeof input !== 'object') return p; for (const key of ['bg', 'ink', 'accent', 'line']) if (/^#[a-f0-9]{6}$/i.test(input[key])) p[key] = input[key]; p.id = String(input.id || 'custom'); p.name = String(input.name || 'Custom'); return p }

export function migrateLegacy(nodes, palette) {
  const doc = blankDocument(); doc.palette = cleanPalette(palette)
  doc.nodes = nodes.filter((node) => modules.some((m) => m.id === node.type)).map((node) => {
    const section = createModule(node.type)
    const fields = allItems(section.children).filter((entry) => entry.kind === 'text')
    const title = fields.find((entry) => entry.style.fontSize >= 24) || fields[0]
    if (title && typeof node.title === 'string') title.text = node.title
    const body = fields.find((entry) => entry !== title && entry.style.fontSize === 16)
    if (body && typeof node.body === 'string') body.text = node.body
    section.style.align = node.align || 'left'; section.style.padding = { small: 24, medium: 48, large: 72 }[node.padding] || 48
    section.palette = { ...(palettes.find((p) => p.id === node.tone) || doc.palette) }
    if (/^#[a-f0-9]{6}$/i.test(node.accent)) section.palette.accent = node.accent
    section.motion = { still: 'none', focus: 'zoom', marquee: 'slide' }[node.motion] || (motions.some((m) => m.id === node.motion) ? node.motion : 'none')
    return section
  })
  return doc
}

export function loadWorkspace(storage) {
  const raw = storage.getItem(WORKSPACE_KEY)
  if (raw) {
    const stored = JSON.parse(raw)
    if (stored.version !== 2 || !Array.isArray(stored.projects) || !stored.projects.length) throw new Error('Your saved workspace could not be read. Your original data has been kept.')
    const projects = stored.projects.map(normalizeDocument)
    return { version: 2, activeId: projects.some((p) => p.id === stored.activeId) ? stored.activeId : projects[0].id, projects, introSeen: Boolean(stored.introSeen) }
  }
  const old = storage.getItem(LEGACY_KEY)
  const workspace = blankWorkspace()
  if (old) { const nodes = JSON.parse(old); if (!Array.isArray(nodes)) throw new Error('Your previous draft could not be read. It has been kept for recovery.'); const doc = migrateLegacy(nodes, JSON.parse(storage.getItem(`${LEGACY_KEY}-palette`) || 'null')); workspace.projects = [doc]; workspace.activeId = doc.id }
  const gallery = JSON.parse(storage.getItem('endrare-playground-gallery') || '[]')
  if (Array.isArray(gallery)) for (const entry of gallery.filter((e) => e.author === 'You' && Array.isArray(e.nodes))) { const doc = migrateLegacy(entry.nodes, palettes.find((p) => p.id === entry.palette)); doc.name = entry.title || 'Saved project'; workspace.projects.push(doc) }
  return workspace
}
