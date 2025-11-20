import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Vercel serves the app from the root, so assets should also be rooted at '/'.
// If you later deploy to a subfolder (e.g. GitHub Pages repo site),
// you can adjust this base there (or use a separate config).
export default defineConfig({
  base: '/',
  plugins: [react()],
})

