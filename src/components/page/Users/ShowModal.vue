<template>
  <modal
    :value="modal.visible && modal.type === 'show'"
    @input="$emit('close')"
    loading="show"
  >
    <!-- heading -->
    <template #heading>کاربر: {{ getItem && getItem.name }}</template>
    <!-- /heading -->

    <!-- content -->
    <v-simple-table v-if="getItem">
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">نام</th>
            <th class="text-left">سن</th>
            <th class="text-left">استان / شهرستان</th>
            <th class="text-left">سرگرمی ها</th>
            <th class="text-left">تاریخ تولد</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{{ getItem.name }}</td>
            <td>{{ getItem.age }}</td>
            <td>{{ getItem.state }} / {{ getItem.city }}</td>
            <td>{{ getItem.hubbies }}</td>
            <td>{{ getItem.birthdate | dateTime }}</td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
    <!-- /content -->
  </modal>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
import Modal from "./Modal";

const { mapActions, mapGetters } = createNamespacedHelpers("users");

export default {
  name: "UserShowModal",
  components: {
    Modal,
  },
  props: {
    modal: {
      required: true,
      type: Object,
    },
  },
  computed: {
    ...mapGetters(["getItem"]),
  },
  watch: {
    "modal.visible"(val) {
      val && this.modal.type === "show" && this.fetchItem(this.modal.id);
    },
  },
  methods: {
    ...mapActions(["fetchItem"]),
  },
};
</script>
