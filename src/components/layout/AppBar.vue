<template>
  <v-app-bar app dense fixed>
    <v-btn
      v-if="$vuetify.breakpoint.mdAndUp"
      icon
      small
      @click="toggleSidebarMini"
    >
      <v-icon>{{ getSidebar.mini ? "chevron_left" : "chevron_right" }}</v-icon>
    </v-btn>

    <v-btn v-else icon small @click="toggleSidebarDrawer">
      <v-icon>menu</v-icon>
    </v-btn>

    <v-spacer />
  </v-app-bar>
</template>

<script>
import { createNamespacedHelpers } from "vuex";

const { mapMutations, mapGetters } = createNamespacedHelpers("ui");

export default {
  name: "AppBar",
  data: () => ({
    items: [
      { title: "پروفایل", icon: "account_circle", to: "/profile" },
      { title: "تنظیمات", icon: "settings", to: "/settings" },
    ],
  }),
  computed: {
    ...mapGetters(["getSidebar"]),
  },
  methods: {
    ...mapMutations(["toggleSidebarDrawer", "toggleSidebarMini"]),
  },
};
</script>
