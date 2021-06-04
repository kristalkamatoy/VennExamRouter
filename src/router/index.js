import Vue from "vue";
import VueRouter from "vue-router";
import Dashboard from "../pages/Dashboard/index";
import Female from "../pages/Female/Female";
import Male from "../pages/Male/Male";
import NotFound from "../components/NotFound";
Vue.use(VueRouter);
const routes = [
  { path: "", component: Dashboard },
  { path: "/female", component: Female },
  { path: "/male", component: Male },
  { path: "*", component: NotFound },
];

export default new VueRouter({
  routes,
  mode: "history",
});
