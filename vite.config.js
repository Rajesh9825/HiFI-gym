import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/HiFi-gym/',   // 👈 IMPORTANT (your repo name)
})