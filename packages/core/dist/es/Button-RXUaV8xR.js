import { defineComponent as c, openBlock as s, createElementBlock as u } from "vue";
const r = { class: "u-button" }, p = /* @__PURE__ */ c({
  name: "UButton",
  __name: "Button",
  props: {
    type: { default: "primary" },
    size: { default: "medium" },
    round: { type: [Boolean, Number], default: 5 },
    iconPosition: {},
    disabled: { type: Boolean, default: !1 },
    loading: { type: Boolean },
    icon: {},
    useDebounce: { type: Boolean },
    debounceTime: {},
    onClick: {}
  },
  setup(e) {
    return (t, o) => (s(), u("button", r, "测试"));
  }
}), l = (e, t) => {
  const o = e.__vccOpts || e;
  for (const [n, a] of t)
    o[n] = a;
  return o;
}, i = /* @__PURE__ */ l(p, [["__scopeId", "data-v-f0b81aef"]]);
export {
  i as B
};
