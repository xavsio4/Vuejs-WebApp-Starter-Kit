import Vue from 'vue'
import App from './App.vue'

/**
 * Import plugins
 */
import VueI18n from 'vue-i18n'
import VueRouter from 'vue-router'
import axios from 'axios'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import moment from 'vue-moment'

/*** 
* Add here additional css/skins that you have to put in the assets folder
*/
import './assets/css/themea/bundle.css'
import './assets/css/themea/style.css'

/**
 * Import routes difined in the route.js file
 */
import routes from "./routes"

/**
 * Import i18n.js parameters
 */
import { translations } from "./i18n" // import configuration part from i18n.js
import { defaultLocale } from "./i18n" // import configuration part from i18n.js

Vue.config.productionTip = false

/**
 * Declare plugin use.
 * Add here more plugins if you need
 */
Vue.use(VueI18n)
Vue.use(VueRouter)
Vue.use(BootstrapVue)
Vue.use(moment)
Vue.use(axios)


/**
 * Configuration of i18n 
 */ 
const messages = Object.assign(translations)

var i18n = new VueI18n({
  locale: defaultLocale,
  fallbackLocale: "en",
  messages
})

/**
 * Initiate vue-router
 */
const router = new VueRouter({ routes });

/**
 * Instantiate the Vue App
 */
new Vue({
  i18n,
  router,
  render: h => h(App),
}).$mount('#app')
