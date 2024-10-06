import { createApp } from 'vue'
import App from './App.vue'
// import UccUI from 'ucc-ui'
import UccUI from '../../core/index'
import 'normalize.css'
import useRootFontSize from '../../hooks/useRootFontSize'
// import 'ucc-ui/dist/index.css'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

const app = createApp(App)
// app.use(ElementPlus)
app.use(UccUI)

useRootFontSize({ isAuto: true })

app.mount('#app')
