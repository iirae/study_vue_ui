import { createApp } from 'vue'
import router from './router/index';

import App from './App.vue'

import '@/assets/resources/scss/common.scss'

createApp(App).use(router).mount('#app')
