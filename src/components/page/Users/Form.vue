<template>
  <validation-observer ref="form" slim v-slot="{ handleSubmit }">
    <v-form @submit.prevent="handleSubmit(onSubmit)">
      <v-row>
        <v-col cols="12" md="6">
          <validation-provider
            v-slot="{ errors }"
            vid="name"
            name="name"
            rules="required|min:2"
            slim
          >
            <v-text-field
              v-model="form.name"
              :error-messages="errors"
              label="نام"
            />
          </validation-provider>
        </v-col>

        <v-col cols="12" md="6">
          <validation-provider
            v-slot="{ errors }"
            vid="age"
            name="age"
            rules="required|min_value:10"
            slim
          >
            <v-text-field
              v-model="form.age"
              :error-messages="errors"
              label="سن"
              type="number"
            />
          </validation-provider>
        </v-col>

        <v-col cols="12">
          <validation-provider
            v-slot="{ errors }"
            vid="hibbies"
            name="hibbies"
            rules="required"
            slim
          >
            <v-combobox
              v-model="form.hubbies"
              :items="[]"
              :error-messages="errors"
              label="سرگرمی ها"
              multiple
              chips
            />
          </validation-provider>
        </v-col>

        <v-col cols="12" md="6">
          <validation-provider
            v-slot="{ errors }"
            vid="state"
            name="state"
            rules="required"
            slim
          >
            <v-autocomplete
              v-model="form.state"
              :error-messages="errors"
              label="استان"
              :items="['Tehran', 'Shiraz', 'Isfahan', 'Mashhad']"
            />
          </validation-provider>
        </v-col>

        <v-col cols="12" md="6">
          <validation-provider
            v-slot="{ errors }"
            vid="city"
            name="city"
            rules="required"
            slim
          >
            <v-autocomplete
              v-model="form.city"
              :error-messages="errors"
              label="شهر"
              :disabled="!form.state"
              :items="[
                'Robat Karim',
                'Islamshahr',
                'Parand',
                'Tehran',
                'Azadi',
              ]"
            />
          </validation-provider>
        </v-col>

        <v-col cols="12">
          <div>
            <v-menu
              ref="menu"
              v-model="menu"
              :close-on-content-click="false"
              transition="scale-transition"
              offset-y
              min-width="auto"
            >
              <template v-slot:activator="{ on, attrs }">
                <validation-provider
                  v-slot="{ errors }"
                  vid="birthdate"
                  name="birthdate"
                  rules="required"
                  slim
                >
                  <v-text-field
                    v-model="date"
                    label="تاریخ تولد"
                    :error-messages="errors"
                    readonly
                    v-bind="attrs"
                    v-on="on"
                  />
                </validation-provider>
              </template>
              <v-date-picker
                v-model="date"
                :active-picker.sync="activePicker"
                :max="new Date().toISOString().substr(0, 10)"
                min="1950-01-01"
                @change="save"
              />
            </v-menu>
          </div>
        </v-col>

        <v-col>
          <v-btn
            dark
            color="green"
            type="submit"
            :loading="getLoading.type === 'form' && getLoading.value"
          >
            ارسال
          </v-btn>
          <v-btn color="blue darken-1" text @click="onCancel"> انصراف </v-btn>
        </v-col>
      </v-row>
    </v-form>
  </validation-observer>
</template>

<script>
import { ValidationProvider, ValidationObserver } from "vee-validate";
import { createNamespacedHelpers } from "vuex";

const { mapGetters } = createNamespacedHelpers("users");

export default {
  name: "UserForm",
  components: {
    ValidationProvider,
    ValidationObserver,
  },
  props: {
    form: {
      required: false,
      type: Object,
    },
  },
  data() {
    return {
      activePicker: null,
      date: null,
      menu: false,
    };
  },
  watch: {
    menu(val) {
      val && setTimeout(() => (this.activePicker = "YEAR"));
    },
  },
  computed: {
    ...mapGetters(["getLoading"]),
  },
  created() {
    if (this.form.birthdate) {
      this.date = this.form.birthdate;
    }
  },
  methods: {
    save(date) {
      this.form.birthdate = date;
      this.$refs.menu.save(date);
    },
    onSubmit() {
      this.resetErrors();

      this.$emit("submit");
    },
    onCancel() {
      this.resetErrors();

      this.$emit("cancel");
    },
    resetErrors() {
      this.$nextTick(() => {
        this.$refs.form.reset();
      });
    },
  },
};
</script>
