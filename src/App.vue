<template>
  <v-app>
    <!-- app bar -->
    <app-bar />
    <!-- /app bar -->

    <!-- sidebar -->
    <sidebar />
    <!-- /sidebar -->

    <v-main>
      <v-container class="px-6 pt-8">
        <!-- title -->
        <h2 class="text-h6">{{ $route.meta.title }}</h2>
        <!-- /title -->

        <!-- breadcrumb -->
        <breadcrumb />
        <!-- /breadcrumb -->

        <keep-alive>
          <router-view />
        </keep-alive>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import AppBar from "@/components/layout/AppBar";
import Sidebar from "@/components/layout/Sidebar";
import Breadcrumb from "@/components/layout/Breadcrumb";

export default {
  name: "App",
  components: {
    AppBar,
    Sidebar,
    Breadcrumb,
  },
  created() {
    this.$store.commit(
      "ui/setSidebarDrawer",
      !!this.$vuetify.breakpoint.mdAndUp
    );
  },
};
</script>
