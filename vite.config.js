import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

/**
 * We deploy the same codebase to two environments:
 *  - Vercel: app is hosted at the root (/) -> base '/'
 *  - GitHub Pages (repo site): hosted at /portfolio-/ -> base '/portfolio-/'
 *
 * Vercel automatically sets process.env.VERCEL === '1' inside the build.
 * When building locally for GitHub pages we can set DEPLOY_TARGET=gh-pages.
 */
const isVercel = process.env.VERCEL === '1'
const isGhPages =
  process.env.DEPLOY_TARGET === 'gh-pages' ||
  process.env.GITHUB_ACTIONS === 'true'

const base = isVercel ? '/' : isGhPages ? '/portfolio-/' : '/'

export default defineConfig({
  base,
  plugins: [react()],
})

