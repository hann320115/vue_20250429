import {createApp} from 'vue';
import App from './App.vue';
// 引入
import { createPinia } from 'pinia';

const app = createApp(App) // 創建應用
// 創建pinia
const pinia = createPinia();
// 安裝pinia
app.use(pinia);
app.mount('#app');         // 掛載所有應用到App容器