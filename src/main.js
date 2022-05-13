import { createApp } from 'vue'
import App from './App.vue'
import packages from './packages/index'

createApp(App).use(packages).mount('#app')
