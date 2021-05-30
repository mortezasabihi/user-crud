import Vue from "vue";
import Vuex from "vuex";
import uiStore from "./ui";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    ui: uiStore,
  },
});
