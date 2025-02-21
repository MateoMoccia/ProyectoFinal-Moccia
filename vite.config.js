import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/ProyectoFinal-Moccia/',  // Esto asegura que las rutas sean correctas para GitHub Pages
});
