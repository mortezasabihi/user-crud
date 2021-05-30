import Vue from "vue";
import Vuex from "vuex";
import uiStore from "./ui";
import usersStore from "./users";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    ui: uiStore,
    users: usersStore,
  },
});
