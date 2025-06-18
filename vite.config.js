import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/last-react-app/', // 這裡要填你的 repo 名稱
  plugins: [react()],
})
