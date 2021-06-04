import Vue from 'vue';
import VueRouter from 'vue-router';
import Dashboard from "../pages/Dashboard/index";
import Female from "../pages/Female/Female";
import Male from "../pages/Male/Male";
import BMIForm from "../components/BMIForm/BMIForm";
import UpdateTable from "../components/UpdateTable/UpdateTable";
import NotFound from "../components/NotFound";
Vue.use(VueRouter);
const routes = [
    { path: "/", component: Dashboard },
    { path: "/Female", component: Female },
    {
        path: "/Male",
        component: Male,
        children: [{
            path: "",
            component: BMIForm,
            children: [{
                path: "",
                component: UpdateTable,

            }]
        }],

    },
    { path: "*", component: NotFound },

];

export default new VueRouter({
    routes
});