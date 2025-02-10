import { g as V, _ as E, a as j, U as q } from "./Dialog-CyJmfhTk.js";
import { _ as Z } from "./Layout-CTSjLTOA.js";
import { _ as H } from "./Region-CW_uwynj.js";
import { w as n, p as W, a as y, m as Y } from "./utils-BJKzxlGu.js";
import { defineComponent as F, computed as T, ref as g, watch as J, onMounted as K, onBeforeUnmount as Q, openBlock as I, createBlock as w, Teleport as X, createVNode as $, Transition as ee, unref as p, withCtx as oe, withDirectives as ne, createElementVNode as C, normalizeClass as se, normalizeStyle as te, renderSlot as ae, createCommentVNode as M, createElementBlock as ie, withModifiers as re, vShow as ce, shallowReactive as le, isVNode as me, h as O, render as u } from "vue";
import { U as R } from "./Button-BH_ZgInA.js";
import { _ as fe } from "./Card-Ds34WQm9.js";
import { _ as ue } from "./Input-CLmdkwtj.js";
import { _ as B, U as de } from "./ReadProgress-DbFAC_Z_.js";
import { _ as _e } from "./Tag-DpUdvRgd.js";
import { _ as pe } from "./Dropdown-D0R_ZtS0.js";
import { _ as ge } from "./DropdownMenu-CHycqHx6.js";
import { _ as ve } from "./DropDownItem-D7h_Wqih.js";
import { _ as ye } from "./Collapse-RsZZjbKX.js";
import { _ as Ue } from "./CollapseItem-Bzr6OPVy.js";
import { _ as he, U as Ie } from "./CodeEditor-CCL5-xpW.js";
import { _ as $e } from "./Popconfirm-HhGnMnsW.js";
import { _ as Ce } from "./ConfigProvider-kHh6XjUo.js";
import { g as Re, a as Oe, h as Se, u as Ne } from "./hooks-d5d18tzq.js";
import { r as De, w as Te, x as we, j as x, v as k, y as Me, h as A, z, p as be, d as b, A as Ee, B as Fe } from "./vendors-DfKQT88O.js";
import { _ as Be } from "./Slider-vip6GPL3.js";
import { _ as xe } from "./Top-DhKAPJkF.js";
import { _ as ke } from "./Badge-DplwoufA.js";
import { _ as Ae } from "./Form-BvTofAL7.js";
import { _ as ze } from "./FormItem-DT_AbodO.js";
import { _ as Ge } from "./MdEditor-huDBVeX1.js";
import { library as Le } from "@fortawesome/fontawesome-svg-core";
import { fas as Pe } from "@fortawesome/free-solid-svg-icons";
import { e as mn, D as fn } from "./locale-41GVkrrM.js";
const Ve = n(Z), je = n(H), qe = n(fe), Ze = n(ue), He = n(_e), We = n(pe), Ye = n(ge), Je = n(ve), Ke = n(ye), Qe = n(Ue), Xe = n($e), eo = n(he), oo = {
  info: ["fas", "circle-info"],
  success: ["fas", "circle-check"],
  warning: ["fas", "circle-exclamation"],
  error: ["fas", "circle-xmark"],
  primary: ["fas", "circle-question"]
}, no = {
  INFO: "info",
  SUCCESS: "success",
  WARNING: "warning",
  ERROR: "error",
  PRIMARY: "primary"
}, so = { class: "u-message-icon" }, to = { class: "u-message-content" }, ao = {
  key: 0,
  class: "u-message-close"
}, io = /* @__PURE__ */ F({
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
    const s = e, m = T(() => s.icon ?? oo[s.type]), a = g(!0), i = g(null), r = g(0), {
      topOffset: c,
      bottomOffset: f
    } = Re({
      boxHeight: r,
      offset: s.offset,
      getLastBottomOffset: De(mo, s)
    }), d = T(() => ({
      top: W(c.value),
      zIndex: s.zIndex
    })), L = J(a, (t) => {
      t || (r.value = -s.offset);
    });
    Oe(document, "keydown", (t) => {
      t.key === "Escape" && a.value && _();
    }), Te(i, () => {
      r.value = i.value.getBoundingClientRect().height ?? 0;
    }), K(() => {
      P(), S();
    }), Q(() => {
      N(), L();
    });
    function _() {
      a.value = !1;
    }
    function P() {
      a.value = !0;
    }
    let h = null;
    function S() {
      s.duration > 0 && (h = we(_, s.duration));
    }
    function N() {
      h && clearTimeout(h);
    }
    return o({
      close: _,
      bottomOffset: f
    }), (t, D) => (I(), w(X, { to: "body" }, [
      $(ee, {
        appear: "",
        name: t.transitionName,
        onAfterLeave: D[0] || (D[0] = (Mo) => !a.value && p(x)(t.onDestory) && t.onDestory())
      }, {
        default: oe(() => [
          ne(C("div", {
            ref_key: "messageRef",
            ref: i,
            role: "alert",
            class: se(["u-message", [
              `u-message--${t.type}`,
              { "is-plain": t.plain },
              { "is-center": t.center },
              t.customClass
            ]]),
            style: te(d.value),
            onMouseenter: N,
            onMouseleave: S
          }, [
            C("div", so, [
              $(p(R), { icon: m.value }, null, 8, ["icon"])
            ]),
            C("div", to, [
              ae(t.$slots, "default", {}, () => [
                t.message ? (I(), w(p(uo), {
                  key: 0,
                  vnode: t.message
                }, null, 8, ["vnode"])) : M("", !0)
              ])
            ]),
            t.showClose ? (I(), ie("div", ao, [
              $(p(R), {
                icon: "close",
                onClick: re(_, ["stop"])
              })
            ])) : M("", !0)
          ], 38), [
            [ce, a.value]
          ])
        ]),
        _: 3
      }, 8, ["name"])
    ]));
  }
}), { nextZIndex: ro } = Se(), l = le([]), co = {
  type: "info",
  duration: 3e3,
  offset: 10,
  transitionName: "fade-up"
}, G = (e) => {
  const o = !e || me(e) || A(e) ? { message: e } : e;
  return { ...co, ...o };
}, lo = (e) => {
  const o = Ne().value, s = document.createElement("div"), m = () => {
    const d = z(l, { id: o });
    d !== -1 && (l.splice(d, 1), u(null, s));
  }, a = {
    ...e,
    id: o,
    zIndex: ro(),
    onDestory: m
  }, i = O(io, a);
  u(i, s);
  const r = i.component;
  return {
    id: o,
    props: a,
    handler: {
      close: () => r.exposed.close()
    },
    vm: r,
    vnode: i
  };
}, v = (e = {}) => {
  e = G(e);
  const o = lo(e);
  return l.push(o), o.handler;
};
function mo() {
  const e = z(l, { id: this.id });
  return e <= 0 ? 0 : be(l, [e - 1, "vm", "exposed", "bottomOffset", "value"]);
}
k(no, (e) => Me(v, e, (o = {}) => v({ ...G(o), type: e })));
function fo(e) {
  k(l, (o) => {
    if (o.props.type === e) {
      o.handler.close();
      return;
    }
    o.handler.close();
  });
}
v.closeAll = fo;
const U = {
  DIALOG: "$dialog",
  // finished
  MESSAGE: "$message",
  // finished
  LOADING: "$loading",
  // undo
  NOTIFICATION: "$notify",
  // dev ing
  CONFIRM: "$confirm",
  // undo
  PROGRESS: "$progress"
  // finished
}, uo = F({
  props: {
    vnode: {
      type: [String, Object, Function],
      required: !0
    }
  },
  setup(e) {
    return () => x(e.vnode) ? e.vnode() : e.vnode;
  }
}), _o = y(v, U.MESSAGE), po = n(Be), go = (e = {}) => {
  const o = (e == null ? void 0 : e.single) ?? !0;
  let s = (A(e == null ? void 0 : e.appendTo) ? document.querySelector(e.appendTo) : e == null ? void 0 : e.appendTo) || document.body;
  if (!o) {
    const f = document.createElement("div");
    s.appendChild(f), s = f;
  }
  const m = b(r, (e == null ? void 0 : e.openDelay) || 100), a = b(c, (e == null ? void 0 : e.closeDelay) || 100), i = {
    ...e,
    zIndex: V(),
    open: m,
    close: a
  };
  function r() {
    u(O(E, i), s), !o && s.remove();
  }
  function c() {
    u(null, s);
  }
  return o && c(), r(), {
    close: c
  };
}, vo = n(E), yo = y(go, U.DIALOG), Uo = n(xe), ho = n(ke), Io = (e) => {
  const o = g(null);
  return u(O(B, {
    ...e,
    ref: (s) => o.value = s
  }), document.body), o;
}, $o = n(B), Co = y(Io, U.PROGRESS), Ro = (e) => {
}, Oo = y(Ro, U.NOTIFICATION), So = n(Ce), No = n(Ae), Do = n(ze), To = n(Ge), wo = [
  j,
  q,
  Ve,
  je,
  R,
  qe,
  Ze,
  de,
  He,
  We,
  Ye,
  Je,
  Ke,
  Qe,
  Ie,
  Xe,
  eo,
  po,
  vo,
  Uo,
  ho,
  $o,
  So,
  No,
  Do,
  To,
  _o,
  yo,
  Co,
  Oo
];
Le.add(Pe, Ee, Fe);
const rn = Y(wo);
export {
  uo as RenderVNode,
  ho as UBadge,
  j as UButton,
  q as UButtonGroup,
  qe as UCard,
  eo as UCodeEditor,
  Ke as UCollapse,
  Qe as UCollapseItem,
  So as UConfigProvider,
  vo as UDialog,
  yo as UDialogFn,
  We as UDropdown,
  Je as UDropdownItem,
  Ye as UDropdownMenu,
  No as UForm,
  Do as UFormItem,
  R as UIcon,
  Ze as UInput,
  Ve as ULayout,
  To as UMdEditor,
  _o as UMessageFn,
  Oo as UNotificationFn,
  Xe as UPopconfirm,
  $o as UReadProgress,
  Co as UReadProgressFn,
  je as URegion,
  po as USlider,
  He as UTag,
  de as UText,
  Ie as UTooltip,
  Uo as UTop,
  rn as default,
  mn as en,
  fn as zhCn
};
