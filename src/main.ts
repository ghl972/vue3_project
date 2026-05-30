import { createApp } from 'vue'
import App from './App.vue'
//安装element-plus插件
import 'element-plus/dist/index.css'
//svg插件需要配置代码
import 'virtual:svg-icons-register'
//引入自定义插件对象：注册整个项目全局组件
import globalComponent from '@/components'
//引入路由
import router from './router/index.ts'
//引入仓库
import pinia from './store/index.ts'
//获取应用实例对象
const app = createApp(App)
//安装仓库
app.use(pinia)
//安装自定义插件
app.use(globalComponent)
//注册模板路由
app.use(router)
//引入模板的全局的样式
import '@/styles/index.scss'

app.mount('#app')