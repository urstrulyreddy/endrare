import { copyFileSync, existsSync, mkdirSync } from 'node:fs'
import { dirname, resolve } from 'node:path'

const root = process.cwd()
const dist = resolve(root, 'dist')

const pages = [
  {
    label: 'Skift presentation',
    source: resolve(root, 'presentations', 'skiftpresentation.html'),
    targets: [
      resolve(dist, 'skiftpresentation.html'),
      resolve(dist, 'presentations', 'skiftpresentation.html'),
      resolve(dist, 'skift', 'index.html'),
    ],
  },
  {
    label: 'Skift case study',
    source: resolve(root, 'casestudy', 'skiftcasestudy.html'),
    targets: [
      resolve(dist, 'skiftcasestudy.html'),
      resolve(dist, 'casestudy', 'skiftcasestudy.html'),
      resolve(dist, 'skift-case-study', 'index.html'),
    ],
  },
  {
    label: 'Product clarity case study',
    source: resolve(root, 'casestudy', 'productclarity.html'),
    targets: [
      resolve(dist, 'casestudy', 'productclarity.html'),
      resolve(dist, 'productclarity.html'),
      resolve(dist, 'product-clarity', 'index.html'),
    ],
  },
]

for (const page of pages) {
  if (!existsSync(page.source)) {
    throw new Error(`${page.label} file not found: ${page.source}`)
  }
}

for (const page of pages) {
  for (const target of page.targets) {
    mkdirSync(dirname(target), { recursive: true })
    copyFileSync(page.source, target)
  }
}

console.log('Copied standalone pages into dist')
