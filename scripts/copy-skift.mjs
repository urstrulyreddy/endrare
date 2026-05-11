import { copyFileSync, existsSync, mkdirSync } from 'node:fs'
import { resolve } from 'node:path'

const root = process.cwd()
const dist = resolve(root, 'dist')
const skiftDir = resolve(dist, 'skift')

const pages = [
  {
    source: resolve(root, 'skiftpresentation.html'),
    targets: [
      resolve(dist, 'skiftpresentation.html'),
      resolve(skiftDir, 'index.html'),
    ],
  },
  {
    source: resolve(root, 'skiftcasestudy.html'),
    targets: [
      resolve(dist, 'skiftcasestudy.html'),
      resolve(dist, 'skift-case-study', 'index.html'),
    ],
  },
]

for (const page of pages) {
  if (!existsSync(page.source)) {
    throw new Error(`Skift page file not found: ${page.source}`)
  }
}

mkdirSync(skiftDir, { recursive: true })

for (const page of pages) {
  for (const target of page.targets) {
    mkdirSync(resolve(target, '..'), { recursive: true })
    copyFileSync(page.source, target)
  }
}

console.log('Copied Skift pages into dist')
