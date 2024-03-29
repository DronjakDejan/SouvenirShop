/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */
//style
import './assets/main.css'

// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'

// Plugins
import { registerPlugins } from '@/plugins'

const app = createApp(App)

registerPlugins(app)

app.mount('#app')
