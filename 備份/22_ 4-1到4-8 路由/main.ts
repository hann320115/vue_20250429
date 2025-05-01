import {createApp} from 'vue';
import App from './App.vue';
import router from './router';


const app = createApp(App) // 創建應用
app.use(router)            // 使用路由器
app.mount('#app');         // 掛載所有應用到App容器