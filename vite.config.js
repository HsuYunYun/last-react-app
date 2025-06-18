import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/last-react-app/', // 例如 '/last-react-app/'
  plugins: [react()],
})
