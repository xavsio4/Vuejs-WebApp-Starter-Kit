import Home from "./components/pages/Home";
import About from "./components/pages/About";
import TableList from "./components/TableList";
//import JournalView from "./components/journalview";
//import JournalForm from "./components/journalform";

const routes = [
  { path: "/", component: Home, meta: {title: 'MyApp'} },
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
  //{ path: "/journalview", component: JournalView, name: "View Journal" },
  //{ path: "/journalform", component: JournalForm, name: "Add Journal" }
];

export default routes;