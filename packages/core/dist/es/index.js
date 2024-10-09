import { _ as E, U as z, a as L } from "./Dropdown-BQCX51Xq.js";
import { _ as A } from "./Layout-BS4CNbAW.js";
import { _ as V } from "./Region-B6HgwxDw.js";
import { w as s, p as F, g as q, m as j } from "./utils-BcOmP8Pb.js";
import { U as h } from "./Button-DCp4he4T.js";
import { _ as G } from "./Card-Dz3sMtsY.js";
import { _ as H } from "./Input-CPI7Bij4.js";
import { _ as P } from "./Text-DecIS8op.js";
import { _ as W } from "./Tag-CqYhTKx9.js";
import { _ as Z } from "./DropdownMenu-CHycqHx6.js";
import { _ as Y } from "./DropdownItem-DIdoArRc.js";
import { _ as J } from "./Collapse-RsZZjbKX.js";
import { _ as K } from "./CollapseItem-ztaMfTep.js";
import { _ as Q, U as X } from "./CodeEditor-R3VoBNW0.js";
import { _ as ee } from "./Popconfirm-wfrIIvkT.js";
import { defineComponent as S, computed as M, ref as _, watch as oe, onMounted as se, onBeforeUnmount as te, openBlock as g, createBlock as B, Teleport as ne, createVNode as v, Transition as ae, unref as f, withCtx as re, withDirectives as ie, createElementVNode as y, normalizeClass as ce, normalizeStyle as le, renderSlot as me, createCommentVNode as R, createElementBlock as fe, withModifiers as ue, vShow as de, shallowReactive as pe, isVNode as _e, h as ge, render as k } from "vue";
import { b as ve, c as ye, d as he, u as Ue } from "./hooks-BwG80JHT.js";
import { g as $e, u as Ce, j as Ie, k as b, h as N, s as we, n as Me, p as O, q as Be, r as Re, v as ke } from "./vendors-DyaD4XE9.js";
import { _ as Se } from "./Slider-qm1yDqds.js";
import be from "./ModelComponent-CqiZ7xSf.js";
import Ne from "./StructComponent-Cl5cBU5P.js";
import { library as Oe } from "@fortawesome/fontawesome-svg-core";
import { fas as Te } from "@fortawesome/free-solid-svg-icons";
const xe = s(A), De = s(V), Ee = s(G), ze = s(H), Le = s(P), Ae = s(W), Ve = s(E), Fe = s(Z), qe = s(Y), je = s(J), Ge = s(K), He = s(ee), Pe = s(Q), We = {
  info: ["fas", "circle-info"],
  success: ["fas", "circle-check"],
  warning: ["fas", "circle-exclamation"],
  error: ["fas", "circle-xmark"],
  primary: ["fas", "circle-question"]
}, Ze = {
  INFO: "info",
  SUCCESS: "success",
  WARNING: "warning",
  ERROR: "error",
  PRIMARY: "primary"
}, Ye = { class: "u-message-icon" }, Je = { class: "u-message-content" }, Ke = {
  key: 0,
  class: "u-message-close"
}, Qe = /* @__PURE__ */ S({
  name: "UMessage",
  __name: "Message",
  props: {
    id: {},
    message: {},
    type: { default: "info" },
    plain: { type: Boolean, default: !1 },
    icon: {},
    dangerouslyUseHTMLString: { type: Boolean },
    customClass: {},
    duration: { default: 3e3 },
    showClose: { type: Boolean, default: !0 },
    center: { type: Boolean, default: !1 },
    zIndex: {},
    onDestory: {},
    offset: { default: 10 },
    appendTo: {},
    grouping: { type: Boolean },
    repeatNum: {},
    transitionName: { default: "fade-up" }
  },
  setup(e, { expose: o }) {
    const n = e, d = M(() => n.icon ?? We[n.type]), a = _(!0), r = _(null), i = _(0), {
      topOffset: U,
      bottomOffset: $
    } = ve({
      boxHeight: i,
      offset: n.offset,
      getLastBottomOffset: $e(so, n)
    }), l = M(() => ({
      top: F(U.value),
      zIndex: n.zIndex
    })), x = oe(a, (t) => {
      t || (i.value = -n.offset);
    });
    ye(document, "keydown", (t) => {
      t.key === "Escape" && a.value && m();
    }), Ce(r, () => {
      i.value = r.value.getBoundingClientRect().height ?? 0;
    }), se(() => {
      D(), C();
    }), te(() => {
      I(), x();
    });
    function m() {
      a.value = !1;
    }
    function D() {
      a.value = !0;
    }
    let p = null;
    function C() {
      n.duration > 0 && (p = Ie(m, n.duration));
    }
    function I() {
      p && clearTimeout(p);
    }
    return o({
      close: m,
      bottomOffset: $
    }), (t, w) => (g(), B(ne, { to: "body" }, [
      v(ae, {
        appear: "",
        name: t.transitionName,
        onAfterLeave: w[0] || (w[0] = (mo) => !a.value && f(b)(t.onDestory) && t.onDestory())
      }, {
        default: re(() => [
          ie(y("div", {
            ref_key: "messageRef",
            ref: r,
            role: "alert",
            class: ce(["u-message", [
              `u-message--${t.type}`,
              { "is-plain": t.plain },
              { "is-center": t.center },
              t.customClass
            ]]),
            style: le(l.value),
            onMouseenter: I,
            onMouseleave: C
          }, [
            y("div", Ye, [
              v(f(h), { icon: d.value }, null, 8, ["icon"])
            ]),
            y("div", Je, [
              me(t.$slots, "default", {}, () => [
                t.message ? (g(), B(f(no), {
                  key: 0,
                  vnode: t.message
                }, null, 8, ["vnode"])) : R("", !0)
              ])
            ]),
            t.showClose ? (g(), fe("div", Ke, [
              v(f(h), {
                icon: "close",
                onClick: ue(m, ["stop"])
              })
            ])) : R("", !0)
          ], 38), [
            [de, a.value]
          ])
        ]),
        _: 3
      }, 8, ["name"])
    ]));
  }
}), { nextZIndex: Xe } = he(), c = pe([]), eo = {
  type: "info",
  duration: 3e3,
  offset: 10,
  transitionName: "fade-up"
}, T = (e) => {
  const o = !e || _e(e) || Me(e) ? { message: e } : e;
  return { ...eo, ...o };
}, oo = (e) => {
  const o = Ue().value, n = document.createElement("div"), d = () => {
    const l = O(c, { id: o });
    l !== -1 && (c.splice(l, 1), k(null, n));
  }, a = {
    ...e,
    id: o,
    zIndex: Xe(),
    onDestory: d
  }, r = ge(Qe, a);
  k(r, n);
  const i = r.component;
  return {
    id: o,
    props: a,
    handler: {
      close: () => i.exposed.close()
    },
    vm: i,
    vnode: r
  };
}, u = (e = {}) => {
  e = T(e);
  const o = oo(e);
  return c.push(o), o.handler;
};
function so() {
  const e = O(c, { id: this.id });
  return e <= 0 ? 0 : Be(c, [e - 1, "vm", "exposed", "bottomOffset", "value"]);
}
N(Ze, (e) => we(u, e, (o = {}) => u({ ...T(o), type: e })));
function to(e) {
  N(c, (o) => {
    if (o.props.type === e) {
      o.handler.close();
      return;
    }
    o.handler.close();
  });
}
u.closeAll = to;
const no = S({
  props: {
    vnode: {
      type: [String, Object, Function],
      required: !0
    }
  },
  setup(e) {
    return () => b(e.vnode) ? e.vnode() : e.vnode;
  }
}), ao = q(u, "$message"), ro = s(Se), io = s(be), co = s(Ne), lo = [
  z,
  L,
  xe,
  De,
  h,
  Ee,
  ze,
  Le,
  Ae,
  Ve,
  Fe,
  qe,
  je,
  Ge,
  X,
  He,
  Pe,
  ao,
  ro,
  io,
  co
];
Oe.add(Te, Re, ke);
const Do = j(lo);
export {
  no as RenderVNode,
  z as UButton,
  L as UButtonGroup,
  Ee as UCard,
  Pe as UCodeEditor,
  je as UCollapse,
  Ge as UCollapseItem,
  Ve as UDropdown,
  qe as UDropdownItem,
  Fe as UDropdownMenu,
  h as UIcon,
  ze as UInput,
  xe as ULayout,
  ao as UMessage,
  io as UModelComponent,
  He as UPopconfirm,
  De as URegion,
  ro as USlider,
  co as UStructComponent,
  Ae as UTag,
  Le as UText,
  X as UTooltip,
  Do as default
};
