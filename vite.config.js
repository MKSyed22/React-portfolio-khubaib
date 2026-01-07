import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from '@svgr/rollup'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/React-portfolio-khubaib/',   // your GitHub repo name
  plugins: [react(), svgr()],
  server: {
    port: 3000,
  },
  build: {
    outDir: 'docs',                     // <-- add this line
  },
})

