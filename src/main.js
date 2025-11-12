import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';

const app = createApp(App);
app.use(createPinia()); // 注册 Pinia
app.config.globalProperties.$apiUrl = import.meta.env.VITE_API_URL;
app.mount('#app');
