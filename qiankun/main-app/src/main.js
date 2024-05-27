import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import { registerMicroApps, start } from 'qiankun';

registerMicroApps([
    {
        name: 'react app',
        entry: '//localhost:3000',
        container: '#container',
        activeRule: '/sub-app'
    }
])

createApp(App).use(router).mount('#app')

start()
