import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/ProyectoFinal-Moccia/',  // Asegura que las rutas sean correctas
});
