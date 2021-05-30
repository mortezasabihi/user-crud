<template>
  <v-breadcrumbs
    v-if="$route.meta.breadcrumbs"
    :items="$route.meta.breadcrumbs"
    divider="\"
  >
    <template v-slot:item="{ item }">
      <v-breadcrumbs-item :to="item.href" :disabled="item.disabled">
        {{ item.text }}
      </v-breadcrumbs-item>
    </template>
  </v-breadcrumbs>
</template>

<script>
export default {
  name: "Breadcrumb",
};
</script>
