import Home from "@/views/Home.vue";

export default [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      title: "صفحه اصلی",
      breadcrumbs: [
        {
          text: "پنل مدیریت",
          disabled: false,
          href: "/",
        },
      ],
    },
  },
  {
    path: "/users",
    name: "Users",
    component: () =>
      import(/* webpackChunkName: "users" */ "@/views/Users/index.vue"),
    meta: {
      title: "کاربران",
      breadcrumbs: [
        {
          text: "پنل مدیریت",
          disabled: false,
          href: "/",
        },
        {
          text: "کاربران",
          disabled: false,
          href: "/users",
        },
      ],
    },
  },
];
