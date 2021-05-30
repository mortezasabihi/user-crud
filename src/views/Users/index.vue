<template>
  <v-card>
    <!-- table -->
    <users-table />
    <!-- /table -->
  </v-card>
</template>

<script>
import UsersTable from "@/components/page/Users/Table";

export default {
  name: "UsersPage",
  components: {
    UsersTable,
  },
  created() {
    this.$store.dispatch("users/fetchList");
  },
};
</script>
