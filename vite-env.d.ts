// / <reference types="vite/client" />

// 解决 svg-icons 插件的类型问题
declare module 'virtual:svg-icons-register' {
    const register: () => void
    export default register
}