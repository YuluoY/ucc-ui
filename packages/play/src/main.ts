import { createApp } from 'vue'
import App from './App.vue'
import 'normalize.css'
import useRootFontSize from '../../hooks/useRootFontSize'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import UccUI, { zhCn } from '../../core/index'

// import UccUI, { zhCn } from 'ucc-ui'
// import 'ucc-ui/dist/index.css'

const app = createApp(App)
app.use(ElementPlus)
app.use(UccUI, { locale: zhCn })

useRootFontSize({ isAuto: true })

app.mount('#app')
window._app = app