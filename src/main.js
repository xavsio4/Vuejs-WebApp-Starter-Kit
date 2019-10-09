import Vue from 'vue'
import toast from 'vue-izitoast'
import router from "./routes"
import Vuelidate from 'vuelidate'
import VueI18n from 'vue-i18n'
import axios from 'axios'
import App from './App.vue'

/**
 * Import plugins
 */
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import moment from "vue-moment"
import VuePageTransition from 'vue-page-transition'
import modal from 'vue-js-modal'
import 'izitoast/dist/css/iziToast.min.css'
import ckeditor from '@ckeditor/ckeditor5-vue'


/**
* alternate buefy 
*/
/*import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
Vue.use(Buefy)*/


/*** 
* Add here additional css/skins that you have to put in the assets folder
*/
import './assets/css/bundle.css'
import './assets/css/style.css'
import './assets/css/animate.css'
import './assets/vendor/font-awesome/css/font-awesome.min.css'
import './assets/css/custom.css' //additional file for project wide css rules


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
Vue.use(toast)
Vue.use(VueI18n)
Vue.use(router)
Vue.use(BootstrapVue)
Vue.use(VuePageTransition)
Vue.use(moment)
Vue.use(axios)
Vue.use(modal, {
  //componentName: "vsk-modal"}
  dialog: true,
  dynamic: true,
  dynamicDefaults: {
    foo: 'foo'
  }
})
Vue.use(ckeditor)
Vue.use(Vuelidate)


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
 * Instantiate the Vue App
 */
new Vue({
  i18n,
  router,
  render: h => h(App),
}).$mount('#app')
