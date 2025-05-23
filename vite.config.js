import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/portfolio/',
  server: {
    host: true, // Habilita el acceso desde la red
    port: 5173 // Puerto por defecto
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: true,
    rollupOptions: {
      output: {
        manualChunks: undefined
      }
    },
    // Asegurarse de que los archivos estáticos se copien
    copyPublicDir: true
  },
  resolve: {
    alias: {
      '@': '/src',
      '@assets': '/src/assets'
    }
  },
  // Configuración para manejar archivos estáticos
  publicDir: 'public'
}) 