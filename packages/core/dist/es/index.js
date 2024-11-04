import { _ as L, U as A, a as V } from "./Dropdown-D53d46xx.js";
import { _ as F } from "./Layout-CbYA7gB6.js";
import { _ as q } from "./Region-Bdgn49Q_.js";
import { w as t, p as j, a as b, m as G } from "./utils-CFhk3g2K.js";
import { U as h } from "./Button-DrRdvqwy.js";
import { _ as H } from "./Card-BhwzkYAd.js";
import { _ as P } from "./Input-BaI5ex4E.js";
import { _ as W } from "./Text-DecIS8op.js";
import { _ as Z } from "./Tag-BoEOycFs.js";
import { _ as Y } from "./DropdownMenu-CHycqHx6.js";
import { _ as J } from "./DropdownItem-Cl4VMrUS.js";
import { _ as K } from "./Collapse-RsZZjbKX.js";
import { _ as Q } from "./CollapseItem-1T_YX1jK.js";
import { _ as X, U as ee } from "./CodeEditor-DH09GeWV.js";
import { _ as oe } from "./Popconfirm-BfbKLJd_.js";
import { defineComponent as N, computed as B, ref as _, watch as se, onMounted as te, onBeforeUnmount as ne, openBlock as g, createBlock as M, Teleport as ae, createVNode as v, Transition as re, unref as f, withCtx as ie, withDirectives as ce, createElementVNode as y, normalizeClass as le, normalizeStyle as me, renderSlot as fe, createCommentVNode as R, createElementBlock as ue, withModifiers as de, vShow as pe, shallowReactive as _e, isVNode as ge, h as ve, render as k } from "vue";
import { b as ye, c as he, d as Ue, u as $e } from "./hooks-BwG80JHT.js";
import { g as Ie, u as we, j as Ce, k as O, h as S, s as Be, n as Me, p as T, q as Re, r as ke, v as be } from "./vendors-DyaD4XE9.js";
import { _ as Ne } from "./Slider-Bg6K17lN.js";
import { _ as D } from "./Dialog-D8Nl4fC3.js";
import { library as Oe } from "@fortawesome/fontawesome-svg-core";
import { fas as Se } from "@fortawesome/free-solid-svg-icons";
const Te = t(F), De = t(q), xe = t(H), Ee = t(P), ze = t(W), Le = t(Z), Ae = t(L), Ve = t(Y), Fe = t(J), qe = t(K), je = t(Q), Ge = t(oe), He = t(X), Pe = {
  info: ["fas", "circle-info"],
  success: ["fas", "circle-check"],
  warning: ["fas", "circle-exclamation"],
  error: ["fas", "circle-xmark"],
  primary: ["fas", "circle-question"]
}, We = {
  INFO: "info",
  SUCCESS: "success",
  WARNING: "warning",
  ERROR: "error",
  PRIMARY: "primary"
}, Ze = { class: "u-message-icon" }, Ye = { class: "u-message-content" }, Je = {
  key: 0,
  class: "u-message-close"
}, Ke = /* @__PURE__ */ N({
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
    const n = e, d = B(() => n.icon ?? Pe[n.type]), a = _(!0), r = _(null), i = _(0), {
      topOffset: U,
      bottomOffset: $
    } = ye({
      boxHeight: i,
      offset: n.offset,
      getLastBottomOffset: Ie(oo, n)
    }), l = B(() => ({
      top: j(U.value),
      zIndex: n.zIndex
    })), E = se(a, (s) => {
      s || (i.value = -n.offset);
    });
    he(document, "keydown", (s) => {
      s.key === "Escape" && a.value && m();
    }), we(r, () => {
      i.value = r.value.getBoundingClientRect().height ?? 0;
    }), te(() => {
      z(), I();
    }), ne(() => {
      w(), E();
    });
    function m() {
      a.value = !1;
    }
    function z() {
      a.value = !0;
    }
    let p = null;
    function I() {
      n.duration > 0 && (p = Ce(m, n.duration));
    }
    function w() {
      p && clearTimeout(p);
    }
    return o({
      close: m,
      bottomOffset: $
    }), (s, C) => (g(), M(ae, { to: "body" }, [
      v(re, {
        appear: "",
        name: s.transitionName,
        onAfterLeave: C[0] || (C[0] = (co) => !a.value && f(O)(s.onDestory) && s.onDestory())
      }, {
        default: ie(() => [
          ce(y("div", {
            ref_key: "messageRef",
            ref: r,
            role: "alert",
            class: le(["u-message", [
              `u-message--${s.type}`,
              { "is-plain": s.plain },
              { "is-center": s.center },
              s.customClass
            ]]),
            style: me(l.value),
            onMouseenter: w,
            onMouseleave: I
          }, [
            y("div", Ze, [
              v(f(h), { icon: d.value }, null, 8, ["icon"])
            ]),
            y("div", Ye, [
              fe(s.$slots, "default", {}, () => [
                s.message ? (g(), M(f(to), {
                  key: 0,
                  vnode: s.message
                }, null, 8, ["vnode"])) : R("", !0)
              ])
            ]),
            s.showClose ? (g(), ue("div", Je, [
              v(f(h), {
                icon: "close",
                onClick: de(m, ["stop"])
              })
            ])) : R("", !0)
          ], 38), [
            [pe, a.value]
          ])
        ]),
        _: 3
      }, 8, ["name"])
    ]));
  }
}), { nextZIndex: Qe } = Ue(), c = _e([]), Xe = {
  type: "info",
  duration: 3e3,
  offset: 10,
  transitionName: "fade-up"
}, x = (e) => {
  const o = !e || ge(e) || Me(e) ? { message: e } : e;
  return { ...Xe, ...o };
}, eo = (e) => {
  const o = $e().value, n = document.createElement("div"), d = () => {
    const l = T(c, { id: o });
    l !== -1 && (c.splice(l, 1), k(null, n));
  }, a = {
    ...e,
    id: o,
    zIndex: Qe(),
    onDestory: d
  }, r = ve(Ke, a);
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
  e = x(e);
  const o = eo(e);
  return c.push(o), o.handler;
};
function oo() {
  const e = T(c, { id: this.id });
  return e <= 0 ? 0 : Re(c, [e - 1, "vm", "exposed", "bottomOffset", "value"]);
}
S(We, (e) => Be(u, e, (o = {}) => u({ ...x(o), type: e })));
function so(e) {
  S(c, (o) => {
    if (o.props.type === e) {
      o.handler.close();
      return;
    }
    o.handler.close();
  });
}
u.closeAll = so;
const to = N({
  props: {
    vnode: {
      type: [String, Object, Function],
      required: !0
    }
  },
  setup(e) {
    return () => O(e.vnode) ? e.vnode() : e.vnode;
  }
}), no = b(u, "$message"), ao = t(Ne), So = b(D, "$dialog"), ro = t(D), io = [
  A,
  V,
  Te,
  De,
  h,
  xe,
  Ee,
  ze,
  Le,
  Ae,
  Ve,
  Fe,
  qe,
  je,
  ee,
  Ge,
  He,
  no,
  ao,
  ro
];
Oe.add(Se, ke, be);
const To = G(io);
export {
  to as RenderVNode,
  A as UButton,
  V as UButtonGroup,
  xe as UCard,
  He as UCodeEditor,
  qe as UCollapse,
  je as UCollapseItem,
  ro as UDialog,
  So as UDialog2,
  Ae as UDropdown,
  Fe as UDropdownItem,
  Ve as UDropdownMenu,
  h as UIcon,
  Ee as UInput,
  Te as ULayout,
  no as UMessage,
  Ge as UPopconfirm,
  De as URegion,
  ao as USlider,
  Le as UTag,
  ze as UText,
  ee as UTooltip,
  To as default
};
