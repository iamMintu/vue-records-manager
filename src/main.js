import { createApp } from 'vue'
import App from './App.vue'

if (!localStorage.getItem('records')) {
    localStorage.setItem('records', JSON.stringify([]))
}

createApp(App).mount('#app')
