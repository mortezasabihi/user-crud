import usersService from "@/services/users";

export default {
  async fetchList({ commit }) {
    commit("setLoading", ["index", true]);

    const { data } = await usersService.fetchUsers();

    commit("setList", data);
    commit("setLoading", [null, false]);
  },
  async fetchItem({ commit }, payload) {
    commit("setItem", null);
    commit("setLoading", ["show", true]);

    const { data } = await usersService.fetchUser(payload);

    commit("setItem", data);
    commit("setLoading", [null, false]);
  },
  createItem({ commit }, payload) {
    return new Promise((resolve) => {
      commit("setLoading", ["form", true]);

      usersService
        .createUser(payload)
        .then(() => commit("setLoading", [null, false]))
        .then(() => resolve());
    });
  },
  updateItem({ commit }, payload) {
    return new Promise((resolve) => {
      commit("setLoading", ["form", true]);

      usersService
        .updateUser(payload[0], payload[1])
        .then(() => commit("setLoading", [null, false]))
        .then(() => resolve());
    });
  },
  deleteItem({ commit }, payload) {
    return new Promise((resolve) => {
      commit("setLoading", ["delete", true]);

      usersService
        .deleteUser(payload)
        .then(() => commit("setLoading", [null, false]))
        .then(() => resolve());
    });
  },
};
