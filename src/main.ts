import './index.scss'
import { createApp } from 'vue'
import AppVue from './App.vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faFutbolBall } from '@fortawesome/free-solid-svg-icons'

library.add(faFutbolBall)

createApp(AppVue).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
