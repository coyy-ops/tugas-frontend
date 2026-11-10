import react from '@vitejs/plugin-react'
// Menambahkan import tailwindcss untuk akses tailwind css
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  // Menambahkan plugin tailwindcss()
  plugins: [react(), tailwindcss()],
})
