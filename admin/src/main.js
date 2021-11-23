import { createApp } from 'vue';
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

var Vue = createApp(App);

import http from './http'
Vue.config.globalProperties.$http = http;

Vue.use(ElementPlus).use(router).mount('#app')
