import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import { registerApplication, start } from 'single-spa'

// Vue.config.productionTip = false

// 远程加载子应用
function createScript(url) {
    return new Promise((resolve, reject) => {
        const script = document.createElement('script')
        script.src = url
        script.onload = resolve
        script.onerror = reject
        const firstScript = document.getElementsByTagName('script')[0]
        firstScript.parentNode.insertBefore(script, firstScript)
    })
}

// 记载函数，返回一个 promise
function loadApp(url, globalVar) {
    // 支持远程加载子应用
    return async () => {
        await createScript(url + '/js/chunk-vendors.js')
        await createScript(url + '/js/app.js')
        // 这里的return很重要，需要从这个全局对象中拿到子应用暴露出来的生命周期函数
        return window[globalVar]
    }
}

const apps = [
    {
        name: 'app1',
        app: loadApp('http://localhost:8081', 'app1'),
        activeWhen: location => location.pathname.startsWith('/app1'),
        customProps: {}
    }
]

// 注册子应用
for (let i = apps.length - 1; i >= 0; i--) {
    registerApplication(apps[i])
}

createApp(App).use(router).mount('#app')
start()
