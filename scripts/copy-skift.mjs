import { cpSync, existsSync, mkdirSync, rmSync } from 'node:fs'
import { resolve } from 'node:path'

const root = process.cwd()
const source = resolve(root, 'SkiftPresentation')
const target = resolve(root, 'dist', 'skift')

if (!existsSync(source)) {
  throw new Error(`Skift presentation source not found: ${source}`)
}

mkdirSync(resolve(root, 'dist'), { recursive: true })
rmSync(target, { recursive: true, force: true })
cpSync(source, target, { recursive: true })

console.log('Copied SkiftPresentation to dist/skift')
