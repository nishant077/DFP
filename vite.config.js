import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss()
  ],

  assetsInclude: ['**/*.png', '**/*.PNG', '**/*.JPG', '**/*.HEIC', '**/*.heic'],

  server: {
    host: '0.0.0.0',
    allowedHosts: true   // ✅ IMPORTANT (fixes dev server issues too)
  },

  preview: {
    host: '0.0.0.0',
    port: 4091,
    allowedHosts: true   // ✅ THIS fixes your error in Docker production
  }
})