import { defineConfig } from 'vite'
import tsconfigPaths from "vite-tsconfig-paths"
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/Company-Site/react-website/',  // Important for GitHub Pages
  plugins: [react(), tsconfigPaths()],
})