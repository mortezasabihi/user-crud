export default {
  setSidebarDrawer(state, payload) {
    state.sidebar.drawer = payload;
  },
  toggleSidebarDrawer(state) {
    state.sidebar.drawer = !state.sidebar.drawer;
  },
  toggleSidebarMini(state) {
    state.sidebar.mini = !state.sidebar.mini;
  },
};
