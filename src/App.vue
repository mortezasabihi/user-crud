<template>
  <v-app>
    <!-- app bar -->
    <app-bar />
    <!-- /app bar -->

    <!-- sidebar -->
    <sidebar />
    <!-- /sidebar -->

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import AppBar from "@/components/layout/AppBar";
import Sidebar from "@/components/layout/Sidebar";

export default {
  name: "App",
  components: {
    AppBar,
    Sidebar,
  },
  created() {
    this.$store.commit(
      "ui/setSidebarDrawer",
      !!this.$vuetify.breakpoint.mdAndUp
    );
  },
};
</script>
