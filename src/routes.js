import Home from "./components/Home";
import About from "./components/About";
//import JournalView from "./components/journalview";
//import JournalForm from "./components/journalform";

const routes = [
  { path: "/", component: Home },
  { path: "/about", component: About },
  //{ path: "/journalview", component: JournalView, name: "View Journal" },
  //{ path: "/journalform", component: JournalForm, name: "Add Journal" }
];

export default routes;