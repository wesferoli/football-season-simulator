import './assets/base.css'
import { createApp } from 'vue'
import AppVue from './App.vue'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

//Font-Awesome
import { aliases, fa } from 'vuetify/iconsets/fa-svg'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'

const app = createApp(AppVue)

app.component('font-awesome-icon', FontAwesomeIcon) // Register component globally
library.add(fas) // Include needed solid icons
library.add(far) // Include needed regular icons

const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: 'fa',
    aliases,
    sets: {
      fa
    }
  }
})

app.use(vuetify)

app.mount('#app')
