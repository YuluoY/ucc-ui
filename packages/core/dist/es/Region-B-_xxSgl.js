import { defineComponent as i, inject as s, openBlock as c, createElementBlock as l, normalizeClass as a, renderSlot as m } from "vue";
const g = /* @__PURE__ */ i({
  name: "URegion",
  __name: "Region",
  props: {
    mode: {},
    region: {},
    width: {},
    col: {}
  },
  setup(t) {
    const e = t, r = s("rootFontSize"), o = {};
    return e.width && (o.width = `${e.width / r}rem`), (n, d) => (c(), l("div", {
      class: a(["u-region", `u-region__${n.region}`, "u-region-container"]),
      style: o
    }, [
      m(n.$slots, "default")
    ], 2));
  }
});
export {
  g as _
};
