import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './assets/main.css'

const app = createApp(App)
import { createI18n } from 'vue-i18n'

app.use(router)
const i18n = createI18n({
    legacy:false,
    locale:'zh-CN',
    fallbackLocale:'en-US'
})

app.use(router).use(i18n).mount('#app')
