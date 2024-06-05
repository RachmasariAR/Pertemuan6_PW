import { createApp } from 'vue'
import router from '#router/index.js'
import App from './App.vue'
import Navbar from '#components/partials/Navbar.vue'


createApp(App)
  .component('Navbar', Navbar)
  .use(router)
  .mount('#app')