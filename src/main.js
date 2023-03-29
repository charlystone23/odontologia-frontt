import { createApp } from 'vue';
import App from './App.vue';
import ToastPlugin from 'vue-toast-notification';
import router from './router';
import 'jquery';
import 'popper.js';
import 'bootstrap';
import '@/styles/styles.css';
import 'vue-toast-notification/dist/theme-default.css';


createApp(App).use(router).use(ToastPlugin, {position: 'top-right'}).mount('#app');