<template>
  <modal
    :value="modal.visible && modal.type === 'edit'"
    @input="$emit('close')"
    loading="show"
  >
    <!-- heading -->
    <template #heading>ویرایش کاربر: {{ getItem && getItem.name }}</template>
    <!-- /heading -->

    <!-- content -->
    <user-form :form="form" @submit="onSubmit" @cancel="close" />
    <!-- /content -->
  </modal>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
import Modal from "./Modal";
import UserForm from "./Form";

const { mapActions, mapGetters } = createNamespacedHelpers("users");

export default {
  name: "UserEditModal",
  components: {
    Modal,
    UserForm,
  },
  props: {
    modal: {
      required: true,
      type: Object,
    },
  },
  data() {
    return {
      form: {},
    };
  },
  computed: {
    ...mapGetters(["getItem"]),
  },
  watch: {
    "modal.visible"(val) {
      val && this.modal.type === "edit" && this.fetchItem(this.modal.id);
    },
    getItem(val) {
      this.form = val && val;
    },
  },
  methods: {
    ...mapActions(["fetchItem", "updateItem", "fetchList"]),
    onSubmit() {
      this.updateItem([this.modal.id, this.form]).then(() => {
        this.close();
        this.fetchList();
      });
    },
    close() {
      this.form = {};
      this.$emit("close");
    },
  },
};
</script>
