import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Dashboard from "./components/Dashboard";
import TableList from "./components/TableList";
import TableList2 from "./components/TableList2";

/* Auth */
import login from "./components/auth/login";
import register from "./components/auth/register";
import profile from "./components/auth/profile";
import forgotPass from "./components/auth/forgotPass";

const routes = [
  { path: "/", component: Home, meta: {title: 'MyApp'} },
  { path: "/dashboard", component: Dashboard, meta: {title: 'Dashboard'} },
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
  { path: "/tablelist2", component: TableList2, meta: {title: 'Table List'} },

  { path: "/auth/login", component: login, meta: {title: 'Login'} },
  { path: "/auth/register", component: register, meta: {title: 'Register'} },
  { path: "/auth/profile", component: profile, meta: {title: 'Profile'} },
  { path: "/auth/forgotpass", component: forgotPass, meta: {title: 'Forgot Password'} },
];

export default routes;