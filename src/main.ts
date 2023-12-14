import '@/index.scss'
import AppVue from '@/App.vue'
import { createApp } from 'vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
  faFutbolBall,
  faArrowCircleRight,
  faArrowCircleLeft
} from '@fortawesome/free-solid-svg-icons'
import { key, store } from './vuex/store'

library.add(faFutbolBall, faArrowCircleLeft, faArrowCircleRight)

const app = createApp(AppVue)

app.component('font-awesome-icon', FontAwesomeIcon)
app.use(store, key)

app.mount('#app')
