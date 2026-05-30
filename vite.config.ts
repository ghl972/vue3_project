import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import { fileURLToPath } from 'url'
import { dirname, resolve } from 'path'
import path from 'path'
// 视频里的核心插件导入
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
    // 视频里的插件配置，直接抄过来就行
    createSvgIconsPlugin({
      // 指定你的svg图标目录（和视频一致）
      iconDirs: [resolve(__dirname, 'src/assets/icons')],
      // 生成的ID格式：icon-[文件夹]-[文件名]，视频里用的是这个格式
      symbolId: 'icon-[dir]-[name]'
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  // 重点：配置 SCSS 全局变量
  css: {
    preprocessorOptions: {
      scss: {
        // 自动引入 variable.scss，所有组件都能直接用里面的变量
        additionalData: `@use "@/styles/variable.scss" as *;`
      }
    }
  },
  server: {
    proxy: {
      // 所有以 /api 开头的请求，都代理到你的后端服务
      '/api': {
        target: 'http://localhost:10086', // 你的真实后端地址
        changeOrigin: true, // 允许跨域
        rewrite: (path) => path.replace(/^\/api/, '') // 如果后端接口没有 /api 前缀，可以用这个去掉
      }
    }
  }
})