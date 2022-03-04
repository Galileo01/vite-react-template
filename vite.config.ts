import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const { resolve } = require('path')

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    // 配置路径 别名
    alias: [
      {
        find: '@',
        replacement: resolve(__dirname, 'src'),
      },
    ],
  },
  css: {
    modules: {
      // 类名 前缀
      generateScopedName: 'vite_demo__[folder]__[local]___[hash:base64:5]',
    },
  },
})
