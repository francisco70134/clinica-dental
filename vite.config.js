import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/clinica-dental/', // Reemplaza "nombre-del-repo" con el nombre de tu repositorio
  plugins: [react()], 
})
