import { _ as E, U as z, a as L } from "./Dropdown-D53d46xx.js";
import { _ as A } from "./Layout-CbYA7gB6.js";
import { _ as V } from "./Region-Bdgn49Q_.js";
import { w as t, p as F, a as q, m as j } from "./utils-CFhk3g2K.js";
import { U as h } from "./Button-DrRdvqwy.js";
import { _ as G } from "./Card-BhwzkYAd.js";
import { _ as H } from "./Input-BaI5ex4E.js";
import { _ as P } from "./Text-DecIS8op.js";
import { _ as W } from "./Tag-BoEOycFs.js";
import { _ as Z } from "./DropdownMenu-CHycqHx6.js";
import { _ as Y } from "./DropdownItem-Cl4VMrUS.js";
import { _ as J } from "./Collapse-RsZZjbKX.js";
import { _ as K } from "./CollapseItem-1T_YX1jK.js";
import { _ as Q, U as X } from "./CodeEditor-DH09GeWV.js";
import { _ as ee } from "./Popconfirm-BfbKLJd_.js";
import { defineComponent as b, computed as B, ref as _, watch as se, onMounted as oe, onBeforeUnmount as te, openBlock as v, createBlock as M, Teleport as ne, createVNode as g, Transition as ae, unref as f, withCtx as re, withDirectives as ie, createElementVNode as y, normalizeClass as ce, normalizeStyle as le, renderSlot as me, createCommentVNode as R, createElementBlock as fe, withModifiers as ue, vShow as de, shallowReactive as pe, isVNode as _e, h as ve, render as k } from "vue";
import { b as ge, c as ye, d as he, u as Ue } from "./hooks-BwG80JHT.js";
import { g as Ie, u as $e, j as we, k as N, h as O, s as Ce, n as Be, p as S, q as Me, r as Re, v as ke } from "./vendors-DyaD4XE9.js";
import { _ as be } from "./Slider-Bg6K17lN.js";
import { library as Ne } from "@fortawesome/fontawesome-svg-core";
import { fas as Oe } from "@fortawesome/free-solid-svg-icons";
const Se = t(A), Te = t(V), xe = t(G), De = t(H), Ee = t(P), ze = t(W), Le = t(E), Ae = t(Z), Ve = t(Y), Fe = t(J), qe = t(K), je = t(ee), Ge = t(Q), He = {
  info: ["fas", "circle-info"],
  success: ["fas", "circle-check"],
  warning: ["fas", "circle-exclamation"],
  error: ["fas", "circle-xmark"],
  primary: ["fas", "circle-question"]
}, Pe = {
  INFO: "info",
  SUCCESS: "success",
  WARNING: "warning",
  ERROR: "error",
  PRIMARY: "primary"
}, We = { class: "u-message-icon" }, Ze = { class: "u-message-content" }, Ye = {
  key: 0,
  class: "u-message-close"
}, Je = /* @__PURE__ */ b({
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
  setup(e, { expose: s }) {
    const n = e, d = B(() => n.icon ?? He[n.type]), a = _(!0), r = _(null), i = _(0), {
      topOffset: U,
      bottomOffset: I
    } = ge({
      boxHeight: i,
      offset: n.offset,
      getLastBottomOffset: Ie(es, n)
    }), l = B(() => ({
      top: F(U.value),
      zIndex: n.zIndex
    })), x = se(a, (o) => {
      o || (i.value = -n.offset);
    });
    ye(document, "keydown", (o) => {
      o.key === "Escape" && a.value && m();
    }), $e(r, () => {
      i.value = r.value.getBoundingClientRect().height ?? 0;
    }), oe(() => {
      D(), $();
    }), te(() => {
      w(), x();
    });
    function m() {
      a.value = !1;
    }
    function D() {
      a.value = !0;
    }
    let p = null;
    function $() {
      n.duration > 0 && (p = we(m, n.duration));
    }
    function w() {
      p && clearTimeout(p);
    }
    return s({
      close: m,
      bottomOffset: I
    }), (o, C) => (v(), M(ne, { to: "body" }, [
      g(ae, {
        appear: "",
        name: o.transitionName,
        onAfterLeave: C[0] || (C[0] = (rs) => !a.value && f(N)(o.onDestory) && o.onDestory())
      }, {
        default: re(() => [
          ie(y("div", {
            ref_key: "messageRef",
            ref: r,
            role: "alert",
            class: ce(["u-message", [
              `u-message--${o.type}`,
              { "is-plain": o.plain },
              { "is-center": o.center },
              o.customClass
            ]]),
            style: le(l.value),
            onMouseenter: w,
            onMouseleave: $
          }, [
            y("div", We, [
              g(f(h), { icon: d.value }, null, 8, ["icon"])
            ]),
            y("div", Ze, [
              me(o.$slots, "default", {}, () => [
                o.message ? (v(), M(f(os), {
                  key: 0,
                  vnode: o.message
                }, null, 8, ["vnode"])) : R("", !0)
              ])
            ]),
            o.showClose ? (v(), fe("div", Ye, [
              g(f(h), {
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
}), { nextZIndex: Ke } = he(), c = pe([]), Qe = {
  type: "info",
  duration: 3e3,
  offset: 10,
  transitionName: "fade-up"
}, T = (e) => {
  const s = !e || _e(e) || Be(e) ? { message: e } : e;
  return { ...Qe, ...s };
}, Xe = (e) => {
  const s = Ue().value, n = document.createElement("div"), d = () => {
    const l = S(c, { id: s });
    l !== -1 && (c.splice(l, 1), k(null, n));
  }, a = {
    ...e,
    id: s,
    zIndex: Ke(),
    onDestory: d
  }, r = ve(Je, a);
  k(r, n);
  const i = r.component;
  return {
    id: s,
    props: a,
    handler: {
      close: () => i.exposed.close()
    },
    vm: i,
    vnode: r
  };
}, u = (e = {}) => {
  e = T(e);
  const s = Xe(e);
  return c.push(s), s.handler;
};
function es() {
  const e = S(c, { id: this.id });
  return e <= 0 ? 0 : Me(c, [e - 1, "vm", "exposed", "bottomOffset", "value"]);
}
O(Pe, (e) => Ce(u, e, (s = {}) => u({ ...T(s), type: e })));
function ss(e) {
  O(c, (s) => {
    if (s.props.type === e) {
      s.handler.close();
      return;
    }
    s.handler.close();
  });
}
u.closeAll = ss;
const os = b({
  props: {
    vnode: {
      type: [String, Object, Function],
      required: !0
    }
  },
  setup(e) {
    return () => N(e.vnode) ? e.vnode() : e.vnode;
  }
}), ts = q(u, "$message"), ns = t(be), as = [
  z,
  L,
  Se,
  Te,
  h,
  xe,
  De,
  Ee,
  ze,
  Le,
  Ae,
  Ve,
  Fe,
  qe,
  X,
  je,
  Ge,
  ts,
  ns
];
Ne.add(Oe, Re, ke);
const ks = j(as);
export {
  os as RenderVNode,
  z as UButton,
  L as UButtonGroup,
  xe as UCard,
  Ge as UCodeEditor,
  Fe as UCollapse,
  qe as UCollapseItem,
  Le as UDropdown,
  Ve as UDropdownItem,
  Ae as UDropdownMenu,
  h as UIcon,
  De as UInput,
  Se as ULayout,
  ts as UMessage,
  je as UPopconfirm,
  Te as URegion,
  ns as USlider,
  ze as UTag,
  Ee as UText,
  X as UTooltip,
  ks as default
};
