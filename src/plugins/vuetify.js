import Vue from "vue";
import Vuetify from "vuetify/lib/framework";
import fa from "vuetify/lib/locale/fa";
import "material-design-icons-iconfont/dist/material-design-icons.css";
import "vazir-font/dist/font-face.css";

Vue.use(Vuetify);

export default new Vuetify({
  rtl: true,
  theme: {
    options: {
      customProperties: true,
    },
  },
  lang: {
    locales: { fa },
    current: "fa",
  },
  icons: {
    iconfont: "md",
  },
});
