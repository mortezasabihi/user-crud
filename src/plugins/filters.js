import Vue from "vue";

const dateTime = (value) => {
  if (!value) {
    return value;
  }
  const date = new Date(value);
  return `${date.toLocaleDateString("fa-IR", {
    hour12: true,
    // hour: "2-digit",
    // minute: "2-digit",
  })}`;
};

Vue.filter("dateTime", dateTime);
