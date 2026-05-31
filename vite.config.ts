// 导入 Vite 核心方法
import { defineConfig, loadEnv } from 'vite'
// 导入 Vue 插件
import vue from '@vitejs/plugin-vue'
// 导入路径处理模块
import path from 'path'
// 导入 Element Plus 自动导入插件
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
// 导入 SVG 图标插件（视频里的核心图标插件）
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'

// 固定写法：解决 ES 模块下 __dirname 报错问题
import { fileURLToPath } from 'url'
import { dirname } from 'path'
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

export default defineConfig(({ mode }) => {
  // 加载环境变量文件 .env.development / .env.production
  const env = loadEnv(mode, process.cwd())
  return {
    // 插件配置（Vue、ElementPlus自动导入、SVG图标）
    plugins: [
      // 启用 Vue 3 支持
      vue(),
      // Element Plus 自动导入（免写 import）
      AutoImport({
        resolvers: [ElementPlusResolver()],
      }),
      // Element Plus 组件自动注册
      Components({
        resolvers: [ElementPlusResolver()],
      }),
      // SVG 图标插件配置（视频里一模一样）
      createSvgIconsPlugin({
        // 指定 SVG 图标存放的文件夹
        iconDirs: [path.resolve(__dirname, 'src/assets/icons')],
        // 图标 ID 生成规则：icon-文件夹名-文件名
        symbolId: 'icon-[dir]-[name]',
      }),
    ],

    // 路径别名配置
    resolve: {
      alias: {
        // 把 @ 指向 src 目录，方便导入文件
        '@': path.resolve(__dirname, './src'),
      },
    },

    // CSS 预处理器（全局 SCSS 变量）
    css: {
      preprocessorOptions: {
        scss: {
          // 全局自动引入变量文件，所有组件可直接使用 $变量
          additionalData: `@use "@/styles/variable.scss" as *;`,
        },
      },
    },

    // 开发服务器配置（跨域代理 → 对接真实后端）
    server: {
      // 代理配置（解决前端访问后端接口的跨域问题）
      proxy: {
        // 匹配 /api 开头的所有请求
        [env.VITE_APP_BASE_API]: {
          // 真实后端地址
          target: env.VITE_SERVE,
          // 允许跨域
          changeOrigin: true,
          // 路径重写：把 /api 去掉再转发给后端
          rewrite: (path) => path.replace(/^\/api/, ''),
        },
        // Swagger 代理：直接在前端打开 /swagger/index.html
        '/swagger': {
          target: env.VITE_SERVE,
          changeOrigin: true,
        },
      },
    },
  }
})
