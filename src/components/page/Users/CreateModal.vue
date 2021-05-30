<template>
  <modal
    :value="modal.visible && modal.type === 'create'"
    @input="$emit('close')"
  >
    <!-- heading -->
    <template #heading>ایجاد کاربر</template>
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

const { mapActions } = createNamespacedHelpers("users");

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
  methods: {
    ...mapActions(["createItem", "fetchList"]),
    onSubmit() {
      this.createItem(this.form).then(() => {
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
