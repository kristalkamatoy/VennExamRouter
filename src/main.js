import Vue from "vue";
import App from "./App.vue";
import router from "./router/index.js";
import Vuex from "vuex";
import VueSimpleAlert from "vue-simple-alert";
import store from "./store";
Vue.use(Vuex);
Vue.use(VueSimpleAlert);
Vue.config.productionTip = false;
// const store = new Vuex.Store({
//   state: {
//     femalebmi: [],
//     malebmi: [],
//     loadBMI: [],
//   },
//   mutations: {
//     submit(state, payload) {
//       state.femalebmi.push(payload);
//     },
//     submitMale(state, payload) {
//       state.malebmi.push(payload);
//     },
//     clearFemale(state) {
//       state.femalebmi = [];
//     },
//     clearMale(state) {
//       state.malebmi = [];
//     },
//   },
//   actions: {
//     submit(context, array) {
//       context.commit("submit", array);
//     },
//     submitMale(context, array) {
//       context.commit("submitMale", array);
//     },
//     clearMale(context) {
//       context.commit("clearMale");
//     },
//     clearFemale(context) {
//       context.commit("clearFemale");
//     },
//   },
// });
new Vue({
  render: (h) => h(App),
  router,
  store,
}).$mount("#app");
