import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// User site: https://carlvic0101.github.io/
// Source: Settings → Pages → Deploy from a branch → /docs
export default defineConfig({
  plugins: [react()],
  base: '/',
  build: {
    outDir: 'docs',
    emptyOutDir: true,
  },
})
