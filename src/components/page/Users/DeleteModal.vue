<template>
  <modal
    :value="modal.visible && modal.type === 'delete'"
    @input="$emit('close')"
    loading="show"
  >
    <!-- heading -->
    <template #heading>حذف کاربر</template>
    <!-- /heading -->

    <!-- content -->
    <p>آیا از حذف کاربر"{{ getItem && getItem.name }}" مطمئن هستید؟</p>

    <div>
      <v-btn
        color="error"
        @click="onSubmit"
        :loading="getLoading.type === 'delete' && getLoading.value"
      >
        حذف
      </v-btn>
      <v-btn class="mr-2" @click="close">انصراف</v-btn>
    </div>
    <!-- /content -->
  </modal>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
import Modal from "./Modal";

const { mapActions, mapGetters } = createNamespacedHelpers("users");

export default {
  name: "UserDeleteModal",
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
    ...mapGetters(["getItem", "getLoading"]),
  },
  watch: {
    "modal.visible"(val) {
      val && this.modal.type === "delete" && this.fetchItem(this.modal.id);
    },
  },
  methods: {
    ...mapActions(["deleteItem", "fetchList", "fetchItem"]),
    onSubmit() {
      this.deleteItem(this.modal.id).then(() => {
        this.close();
        this.fetchList();
      });
    },
    close() {
      this.$emit("close");
    },
  },
};
</script>
