import { copyFileSync, existsSync, mkdirSync } from 'node:fs'
import { resolve } from 'node:path'

const root = process.cwd()
const source = resolve(root, 'skiftpresentation.html')
const dist = resolve(root, 'dist')
const skiftDir = resolve(dist, 'skift')
const pageTarget = resolve(dist, 'skiftpresentation.html')
const cleanPathTarget = resolve(skiftDir, 'index.html')

if (!existsSync(source)) {
  throw new Error(`Skift presentation file not found: ${source}`)
}

mkdirSync(skiftDir, { recursive: true })
copyFileSync(source, pageTarget)
copyFileSync(source, cleanPathTarget)

console.log('Copied skiftpresentation.html to dist/skiftpresentation.html and dist/skift/index.html')
