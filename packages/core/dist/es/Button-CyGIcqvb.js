import { defineComponent as t, openBlock as e, createElementBlock as o } from "vue";
const n = {
  class: "u-button",
  style: { "background-color": "red" }
}, u = /* @__PURE__ */ t({
  name: "UButton",
  __name: "Button",
  props: {
    type: {
      type: String,
      default: "default"
    }
  },
  setup(r) {
    return (c, p) => (e(), o("button", n, "666"));
  }
});
export {
  u as _
};
