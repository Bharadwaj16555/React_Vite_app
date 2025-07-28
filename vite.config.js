import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/React_Vite_app/',  // Replace with your actual repo name
  plugins: [react()],
})
