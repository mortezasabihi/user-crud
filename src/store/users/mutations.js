export default {
  setLoading(state, payload) {
    state.loading = {
      type: payload[0],
      value: payload[1],
    };
  },
  setList(state, payload) {
    state.list = payload;
  },
  setItem(state, payload) {
    state.item = payload;
  },
};
