import { defineComponent as R, provide as C, useSlots as h, openBlock as t, createElementBlock as r, normalizeClass as k, Fragment as a, renderList as p, createBlock as y, resolveDynamicComponent as O, unref as I } from "vue";
import { _ as z } from "./Region-B-_xxSgl.js";
const n = {
  LEFT: "left",
  RIGHT: "right",
  TOP: "top",
  CENTER: "center",
  BOTTOM: "bottom"
}, v = {
  HORIZONTAL: "horizontal",
  VERTICAL: "vertical"
}, M = /* @__PURE__ */ R({
  name: "ULayout",
  __name: "Layout",
  props: {
    mode: { default: "horizontal" },
    padding: { default: 14 },
    gap: { default: 10 },
    col: { default: 1 }
  },
  setup(_) {
    var f, T;
    const e = _, u = parseInt(document.documentElement.style.fontSize);
    C("rootFontSize", u);
    const i = h(), E = i.default && i.default() || [];
    let d = [];
    const $ = Object.values(n), m = {
      [n.TOP]: [],
      [n.LEFT]: [],
      [n.CENTER]: [],
      [n.RIGHT]: [],
      [n.BOTTOM]: []
    };
    for (let o of E)
      o.type.name === z.name && $.includes((f = o.props) == null ? void 0 : f.region) ? (T = o.props) != null && T.region && m[o.props.region].push(o) : d.push(o);
    const c = {
      padding: `${e.padding / u}rem`
    };
    return e.mode === v.VERTICAL && (c.gridTemplateColumns = `repeat(${e.col}, 1fr)`, c.gap = `${e.gap / u}rem`), (o, A) => (t(), r("div", {
      class: k(["u-layout", `u-layout__${e.mode}`, "u-container"]),
      style: c
    }, [
      (t(!0), r(a, null, p(Object.keys(m), (l, s) => (t(), r(a, {
        key: `${l}-${s}`
      }, [
        (t(!0), r(a, null, p(m[l], (g, L) => (t(), y(O(g), {
          key: `${g}-${s}-${L}`,
          mode: e.mode
        }, null, 8, ["mode"]))), 128))
      ], 64))), 128)),
      (t(!0), r(a, null, p(I(d), (l, s) => (t(), y(O(l), {
        key: s,
        mode: e.mode
      }, null, 8, ["mode"]))), 128))
    ], 2));
  }
});
export {
  M as _
};
