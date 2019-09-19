import Vue from 'vue'
import App from './App.vue'
import VueI18n from 'vue-i18n'
import VueRouter from 'vue-router'
import axios from 'axios'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import moment from 'vue-moment'

import routes from "./routes" // import routes from routes.js file
import { translations } from "./i18n" // import configuration part from i18n.js
import { defaultLocale } from "./i18n" // import configuration part from i18n.js

Vue.config.productionTip = false

Vue.use(VueI18n)
Vue.use(VueRouter)
Vue.use(BootstrapVue)
Vue.use(moment)
Vue.use(axios)

/* Configuration of i18n */
const messages = Object.assign(translations)

var i18n = new VueI18n({
  locale: defaultLocale,
  fallbackLocale: "en",
  messages
})

/* Routing */
const router = new VueRouter({ routes });

new Vue({
  i18n,
  router,
  render: h => h(App),
}).$mount('#app')
