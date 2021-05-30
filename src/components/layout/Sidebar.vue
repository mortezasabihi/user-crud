<template>
  <v-navigation-drawer
    :mini-variant.sync="getSidebar.mini"
    :permanent="$vuetify.breakpoint.mdAndUp"
    :temporary="$vuetify.breakpoint.mdAndDown"
    :value="getSidebar.drawer"
    @input="setSidebarDrawer($event)"
    class="deep-purple accent-4"
    app
    dense
    fixed
    dark
    right
  >
    <v-list>
      <v-list-item
        v-for="item in items"
        :key="item.title"
        link
        :to="item.to"
        dense
      >
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>

    <template v-if="!getSidebar.mini" v-slot:append>
      <div class="pa-2">
        <v-btn block> خروج </v-btn>
      </div>
    </template>
  </v-navigation-drawer>
</template>

<script>
import { createNamespacedHelpers } from "vuex";

const { mapMutations, mapGetters } = createNamespacedHelpers("ui");

export default {
  name: "Sidebar",
  data() {
    return {
      items: [
        { title: "داشبورد", icon: "dashboard", to: "/" },
        {
          title: "کاربران",
          icon: "people_alt",
          to: "/users",
        },
      ],
    };
  },
  computed: {
    ...mapGetters(["getSidebar"]),
  },
  methods: {
    ...mapMutations(["setSidebarDrawer"]),
  },
};
</script>
