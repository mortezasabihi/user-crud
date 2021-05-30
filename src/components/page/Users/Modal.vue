<template>
  <v-dialog :value="value" @input="$emit('input', $event)" width="700">
    <!-- loading -->
    <v-card
      v-if="loading && getLoading.type === loading && getLoading.value"
      color="deep-purple accent-3"
      dark
    >
      <v-card-text class="pt-5">
        <v-progress-linear indeterminate color="white" class="mb-0" />
      </v-card-text>
    </v-card>
    <!-- /loading -->

    <v-card v-else>
      <!-- heading -->
      <v-card-title class="headline grey lighten-2">
        <slot name="heading" />
      </v-card-title>
      <!-- /heading -->

      <!-- content -->
      <v-card-text class="mt-5">
        <slot />
      </v-card-text>
      <!-- /content -->

      <v-divider />
    </v-card>
  </v-dialog>
</template>

<script>
import { createNamespacedHelpers } from "vuex";

const { mapGetters } = createNamespacedHelpers("users");

export default {
  name: "UserModal",
  props: {
    value: Boolean,
    loading: {
      required: false,
      type: String,
      default: "",
    },
  },
  computed: {
    ...mapGetters(["getLoading"]),
  },
};
</script>
