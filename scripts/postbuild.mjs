import { copyFileSync, existsSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { resolve, dirname } from 'node:path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const rootDir = resolve(__dirname, '..')

const copyIfExists = (from, to) => {
  if (!existsSync(from)) {
    return
  }

  copyFileSync(from, to)
  console.log(`Copied ${from} -> ${to}`)
}

copyIfExists(
  resolve(rootDir, 'public/.nojekyll'),
  resolve(rootDir, 'dist/.nojekyll'),
)

copyIfExists(
  resolve(rootDir, 'public/404.html'),
  resolve(rootDir, 'dist/404.html'),
)

