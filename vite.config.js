import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages project site: https://carlvic0101.github.io/Carl.github.io/
// Source: Settings → Pages → Deploy from a branch → /docs
export default defineConfig({
  plugins: [react()],
  base: '/Carl.github.io/',
  build: {
    outDir: 'docs',
    emptyOutDir: true,
  },
})
