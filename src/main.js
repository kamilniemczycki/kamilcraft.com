import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { store } from './store'
// import VueMeta from 'vue-meta'

import '../scss/default.scss'
import '../css/index.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(fas, fab, far)

const app = createApp(App)

app.config.productionTip = false

app.component('FontAwesomeIcon', FontAwesomeIcon)

app.use(router)
app.use(store)
// app.use(VueMeta)

app.mount('#app')
