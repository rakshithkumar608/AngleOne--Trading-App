import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
           'react-vendor': ['react', 'react-dom'],
            'router': ['react-router-dom'],
            'icons': ['react-icons'],
            'charts': ['recharts'],
        }
      }
    },
    chunkSizeWarningLimit: 1000, // Increase warning limit to 1000 kB
  }
})