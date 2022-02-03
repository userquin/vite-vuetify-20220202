import 'uno.css'
import './styles/style.css'
import './styles/vuetify.scss'

import { createApp } from 'vue'
import { createVuetify } from 'vuetify'
import { Intersect } from 'vuetify/directives'
import App from './App.vue'

const app = createApp(App)

const vuetify = createVuetify({
    directives: { Intersect }
})

app.use(vuetify)

app.mount('#app')
