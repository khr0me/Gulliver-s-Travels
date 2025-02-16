import './assets/main.css'
import './assets/base.css'

import { createApp } from 'vue'
import App from './App.vue'
import Forum from './Forum.vue'

createApp(App).mount('#app')
createApp(Forum).mount('#forum')