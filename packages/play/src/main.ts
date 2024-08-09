import { createApp } from 'vue'
import App from './App.vue'
import UccUI from 'ucc-ui'

const app = createApp(App)

app.use(UccUI)

app.mount('#app')
