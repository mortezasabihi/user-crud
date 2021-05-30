<template>
  <v-data-table
    :headers="headers"
    :items="getList"
    :loading="getLoading.type === 'index' && getLoading.value"
    :search="search"
    :expanded.sync="expanded"
    :page.sync="page"
    hide-default-footer
    @page-count="pageCount = $event"
  >
    <template v-slot:top>
      <v-card-title>
        <v-row>
          <v-col cols="12" md="7">
            <v-text-field
              v-model="search"
              append-icon="search"
              label="جستجو"
              single-line
              hide-details
            />
          </v-col>

          <v-col cols="12" md="5" class="d-flex align-end justify-end">
            <v-btn color="success" @click="openModal('create')">
              <v-icon left>add</v-icon> جدید
            </v-btn>
          </v-col>
        </v-row>
      </v-card-title>

      <!-- show modal -->
      <show-modal :modal="modal" @close="closeModal" />
      <!-- /show modal -->

      <!-- create modal -->
      <create-modal :modal="modal" @close="closeModal" />
      <!-- /create modal -->

      <!-- edit modal -->
      <edit-modal :modal="modal" @close="closeModal" />
      <!-- /edit modal -->

      <!-- delete modal -->
      <delete-modal :modal="modal" @close="closeModal" />
      <!-- /delete modal -->
    </template>

    <template v-slot:[`item.birthdate`]="{ item }">
      {{ item.birthdate | dateTime }}
    </template>

    <template v-slot:[`item.actions`]="{ item }">
      <v-tooltip top>
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            icon
            v-bind="attrs"
            v-on="on"
            @click="openModal('show', item.id)"
          >
            <v-icon small>visibility</v-icon>
          </v-btn>
        </template>
        <span>مشاهده</span>
      </v-tooltip>

      <v-tooltip top>
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            icon
            v-bind="attrs"
            v-on="on"
            @click="openModal('edit', item.id)"
          >
            <v-icon small>edit</v-icon>
          </v-btn>
        </template>
        <span>ویرایش</span>
      </v-tooltip>

      <v-tooltip top>
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            icon
            v-bind="attrs"
            v-on="on"
            @click="openModal('delete', item.id)"
          >
            <v-icon small>delete</v-icon>
          </v-btn>
        </template>
        <span>حذف</span>
      </v-tooltip>
    </template>

    <template v-slot:footer>
      <div class="text-center py-2">
        <v-pagination v-model="page" :length="pageCount" />
      </div>
    </template>
  </v-data-table>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
import ShowModal from "./ShowModal";
import CreateModal from "./CreateModal";
import EditModal from "./EditModal";
import DeleteModal from "./DeleteModal";

const { mapGetters } = createNamespacedHelpers("users");

export default {
  name: "UsersTable",
  components: {
    ShowModal,
    CreateModal,
    EditModal,
    DeleteModal,
  },
  data() {
    return {
      headers: [
        { text: "ID", value: "id" },
        { text: "نام", value: "name" },
        { text: "سن", value: "age" },
        { text: "تاریخ تولد", value: "birthdate" },
        { text: "سرگرمی ها", value: "hubbies" },
        { text: "استان", value: "state" },
        { text: "شهر / شهرستان", value: "city" },
        { text: "عملیات", value: "actions", sortable: false },
      ],
      search: "",
      expanded: [],
      page: 1,
      pageCount: 0,
      modal: {
        visible: false,
        type: null,
        id: null,
      },
    };
  },
  computed: {
    ...mapGetters(["getLoading", "getList"]),
  },
  methods: {
    openModal(type, id = 0) {
      this.modal = {
        visible: true,
        type,
        id,
      };
    },
    closeModal() {
      this.modal = { visible: false, type: null, id: null };
    },
  },
};
</script>
