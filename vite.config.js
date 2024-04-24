import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import alias from '@rollup/plugin-alias'
// https://vitejs.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      plugins: [
        react(),
        alias({
          entries: [
            { find: '../assets/images', replacement: './src/assets/images' }
          ]
        })
      ]
    },
  },
});