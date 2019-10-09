import Vue from 'vue'
import path from 'path';
const __dirname = path.resolve();
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Dashboard from "./components/Dashboard";
import TableList from "./components/TableList";
import TableList2 from "./components/TableList2";
import TableList3 from "./components/TableList3";
import infinity from "./components/infinity";
import formadd from "./components/FormAdd";

/* Auth */
import login from "./components/auth/login";
import register from "./components/auth/register";
import profile from "./components/auth/profile";
import forgotPass from "./components/auth/forgotPass";

const scrollBehavior = function (to, from, savedPosition) {
  if (savedPosition) {
    // savedPosition is only available for popstate navigations.
    return savedPosition
  } else {
    const position = {}

    // scroll to anchor by returning the selector
    if (to.hash) {
      position.selector = to.hash

      // specify offset of the element
      if (to.hash === '#anchor2') {
        position.offset = { y: 100 }
      }

      // bypass #1number check
      if (/^#\d/.test(to.hash) || document.querySelector(to.hash)) {
        return position
      }

      // if the returned position is falsy or an empty object,
      // will retain current scroll position.
      return false
    }

    return new Promise(resolve => {
      // check if any matched route config has meta that requires scrolling to top
      if (to.matched.some(m => m.meta.scrollToTop)) {
        // coords will be used if no selector is provided,
        // or if the selector didn't match any element.
        position.x = 0
        position.y = 0
      }

      // wait for the out transition to complete (if necessary)
      this.app.$root.$once('triggerScroll', () => {
        // if the resolved position is falsy or an empty object,
        // will retain current scroll position.
        resolve(position)
      })
    })
  }
} //scrollBehavior

const routes = [
  { path: "/", component: Home, meta: {title: 'MyApp'} },
  { path: "/dashboard", component: Dashboard, name: 'Dashboard' ,meta: {title: 'Dashboard'} },
  {
    path: "/about", component: About, meta: {
      title: 'About',
      metaTags: [
        {
          name: 'description',
          content: 'The about page'
        },
        { property: 'og:description', content: 'About' }
      ]// /metatag about
    }
  }, //about
  { path: "/tablelist", component: TableList, meta: {title: 'Table List'} },
  { path: "/tablelist2", component: TableList2, meta: {title: 'Table List2'} },
  { path: "/tablelist3", component: TableList3, meta: {title: 'Table List3'} },
  { path: "/infinity", component: infinity, meta: {title: 'infinity'} },
  { path: "/formadd", component: formadd, meta: {title: 'formadd'} },
  { path: "/auth/login", component: login, meta: {title: 'Login'} },
  { path: "/auth/register", component: register, meta: {title: 'Register'} },
  { path: "/auth/profile", component: profile, meta: {title: 'Profile'} },
  { path: "/auth/forgotpass", component: forgotPass, meta: {title: 'Forgot Password'} },
]; //routes

/**
 * Initiate vue-router
 */
const router = new VueRouter({ 
  routes, 
  mode: 'history',
  base: __dirname,
  scrollBehavior, 
});

router.replace('/');



export default router;