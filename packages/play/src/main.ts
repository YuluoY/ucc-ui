import { createApp } from 'vue'
import App from './App.vue'
import UccUI from 'ucc-ui'
import 'ucc-ui/dist/index.css'

const app = createApp(App)

app.use(UccUI)

app.mount('#app')
