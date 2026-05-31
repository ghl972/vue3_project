import { createApp } from 'vue'
import App from './App.vue'
//安装element-plus插件
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
//svg插件需要配置代码
import 'virtual:svg-icons-register'
//引入自定义插件对象：注册整个项目全局组件
import globalComponent from '@/components'
//引入路由
import router from './router/index.ts'
//引入仓库
import pinia from './store/index.ts'
// 引入 Element Plus 中文语言包
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
//获取应用实例对象
const app = createApp(App)
//安装仓库
app.use(pinia)
//安装自定义插件
app.use(globalComponent)
// 注册 Element Plus 并设置中文
app.use(ElementPlus, {
  locale: zhCn, // 关键配置：全局中文
})
//注册模板路由
app.use(router)
//引入路由鉴权文件
import './permission.ts'
//引入模板的全局的样式
import '@/styles/index.scss'

app.mount('#app')
