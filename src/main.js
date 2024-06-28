
import './assets/main.css'
import App from './App.vue'
import router from './router/router';


import piniaPluginPersistedstate from "pinia-plugin-persistedstate";
import { createApp } from 'vue'
import { createPinia } from 'pinia'

const app = createApp(App)

const pinia = createPinia();
app.use(pinia)
pinia.use(piniaPluginPersistedstate);
app.use(router)

app.mount('#app')