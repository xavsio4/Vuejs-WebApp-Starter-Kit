import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Dashboard from "./components/Dashboard";
import TableList from "./components/TableList";
//import JournalView from "./components/journalview";
//import JournalForm from "./components/journalform";

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
];

export default routes;