import { g as V, _ as M, a as q, U as Z } from "./Dialog-C9VMbXom.js";
import { _ as j } from "./Layout-CuaEJf5F.js";
import { _ as H } from "./Region-CCunii-w.js";
import { w as s, p as W, a as y, m as Y } from "./utils-Dud7RK9C.js";
import { defineComponent as B, computed as w, ref as p, watch as J, onMounted as K, onBeforeUnmount as Q, openBlock as I, createBlock as D, Teleport as X, createVNode as $, Transition as ee, unref as g, withCtx as oe, withDirectives as ne, createElementVNode as C, normalizeClass as se, normalizeStyle as te, renderSlot as ae, createCommentVNode as b, createElementBlock as ie, withModifiers as ce, vShow as re, shallowReactive as le, isVNode as me, h as O, render as u } from "vue";
import { U as R } from "./Button-B4mtOv_x.js";
import { _ as fe } from "./Card-BHxT1uUw.js";
import { _ as ue } from "./Input-3PFpNgWh.js";
import { _ as x, U as de } from "./ReadProgress-D63QmiiD.js";
import { _ as _e } from "./Tag-AnhsBazc.js";
import { _ as ge } from "./Dropdown-nExK3XCI.js";
import { _ as pe } from "./DropdownMenu-CHycqHx6.js";
import { _ as ve } from "./DropDownItem-CX6P1Hqd.js";
import { _ as ye } from "./Collapse-RsZZjbKX.js";
import { _ as Ue } from "./CollapseItem-CiOxGO2j.js";
import { _ as he, U as Ie } from "./CodeEditor-n8uCyNhU.js";
import { _ as $e } from "./Popconfirm-NhnWXCXk.js";
import { _ as Ce } from "./ConfigProvider-YWeUKTyw.js";
import { g as Re, a as Oe, h as Se, u as Ne } from "./hooks-Cej1ZLXD.js";
import { q as Te, v as we, w as De, j as F, u as A, x as be, h as k, y as z, z as Ee, d as E, A as Me, B as Be } from "./vendors-C-cGMwAY.js";
import { _ as xe } from "./Slider-IKg3NSL9.js";
import { _ as Fe } from "./Top-CwvDDdFe.js";
import { _ as Ae } from "./Badge-BlQz8oJS.js";
import { library as ke } from "@fortawesome/fontawesome-svg-core";
import { fas as ze } from "@fortawesome/free-solid-svg-icons";
import { E as en, z as on } from "./locale-B_eHW43s.js";
const Ge = s(j), Le = s(H), Pe = s(fe), Ve = s(ue), qe = s(_e), Ze = s(ge), je = s(pe), He = s(ve), We = s(ye), Ye = s(Ue), Je = s($e), Ke = s(he), Qe = {
  info: ["fas", "circle-info"],
  success: ["fas", "circle-check"],
  warning: ["fas", "circle-exclamation"],
  error: ["fas", "circle-xmark"],
  primary: ["fas", "circle-question"]
}, Xe = {
  INFO: "info",
  SUCCESS: "success",
  WARNING: "warning",
  ERROR: "error",
  PRIMARY: "primary"
}, eo = { class: "u-message-icon" }, oo = { class: "u-message-content" }, no = {
  key: 0,
  class: "u-message-close"
}, so = /* @__PURE__ */ B({
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
    const n = e, m = w(() => n.icon ?? Qe[n.type]), a = p(!0), i = p(null), c = p(0), {
      topOffset: r,
      bottomOffset: f
    } = Re({
      boxHeight: c,
      offset: n.offset,
      getLastBottomOffset: Te(co, n)
    }), d = w(() => ({
      top: W(r.value),
      zIndex: n.zIndex
    })), L = J(a, (t) => {
      t || (c.value = -n.offset);
    });
    Oe(document, "keydown", (t) => {
      t.key === "Escape" && a.value && _();
    }), we(i, () => {
      c.value = i.value.getBoundingClientRect().height ?? 0;
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
      n.duration > 0 && (h = De(_, n.duration));
    }
    function N() {
      h && clearTimeout(h);
    }
    return o({
      close: _,
      bottomOffset: f
    }), (t, T) => (I(), D(X, { to: "body" }, [
      $(ee, {
        appear: "",
        name: t.transitionName,
        onAfterLeave: T[0] || (T[0] = (Oo) => !a.value && g(F)(t.onDestory) && t.onDestory())
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
            C("div", eo, [
              $(g(R), { icon: m.value }, null, 8, ["icon"])
            ]),
            C("div", oo, [
              ae(t.$slots, "default", {}, () => [
                t.message ? (I(), D(g(lo), {
                  key: 0,
                  vnode: t.message
                }, null, 8, ["vnode"])) : b("", !0)
              ])
            ]),
            t.showClose ? (I(), ie("div", no, [
              $(g(R), {
                icon: "close",
                onClick: ce(_, ["stop"])
              })
            ])) : b("", !0)
          ], 38), [
            [re, a.value]
          ])
        ]),
        _: 3
      }, 8, ["name"])
    ]));
  }
}), { nextZIndex: to } = Se(), l = le([]), ao = {
  type: "info",
  duration: 3e3,
  offset: 10,
  transitionName: "fade-up"
}, G = (e) => {
  const o = !e || me(e) || k(e) ? { message: e } : e;
  return { ...ao, ...o };
}, io = (e) => {
  const o = Ne().value, n = document.createElement("div"), m = () => {
    const d = z(l, { id: o });
    d !== -1 && (l.splice(d, 1), u(null, n));
  }, a = {
    ...e,
    id: o,
    zIndex: to(),
    onDestory: m
  }, i = O(so, a);
  u(i, n);
  const c = i.component;
  return {
    id: o,
    props: a,
    handler: {
      close: () => c.exposed.close()
    },
    vm: c,
    vnode: i
  };
}, v = (e = {}) => {
  e = G(e);
  const o = io(e);
  return l.push(o), o.handler;
};
function co() {
  const e = z(l, { id: this.id });
  return e <= 0 ? 0 : Ee(l, [e - 1, "vm", "exposed", "bottomOffset", "value"]);
}
A(Xe, (e) => be(v, e, (o = {}) => v({ ...G(o), type: e })));
function ro(e) {
  A(l, (o) => {
    if (o.props.type === e) {
      o.handler.close();
      return;
    }
    o.handler.close();
  });
}
v.closeAll = ro;
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
}, lo = B({
  props: {
    vnode: {
      type: [String, Object, Function],
      required: !0
    }
  },
  setup(e) {
    return () => F(e.vnode) ? e.vnode() : e.vnode;
  }
}), mo = y(v, U.MESSAGE), fo = s(xe), uo = (e = {}) => {
  const o = (e == null ? void 0 : e.single) ?? !0;
  let n = (k(e == null ? void 0 : e.appendTo) ? document.querySelector(e.appendTo) : e == null ? void 0 : e.appendTo) || document.body;
  if (!o) {
    const f = document.createElement("div");
    n.appendChild(f), n = f;
  }
  const m = E(c, (e == null ? void 0 : e.openDelay) || 100), a = E(r, (e == null ? void 0 : e.closeDelay) || 100), i = {
    ...e,
    zIndex: V(),
    open: m,
    close: a
  };
  function c() {
    u(O(M, i), n), !o && n.remove();
  }
  function r() {
    u(null, n);
  }
  return o && r(), c(), {
    close: r
  };
}, _o = s(M), go = y(uo, U.DIALOG), po = s(Fe), vo = s(Ae), yo = (e) => {
  const o = p(null);
  return u(O(x, {
    ...e,
    ref: (n) => o.value = n
  }), document.body), o;
}, Uo = s(x), ho = y(yo, U.PROGRESS), Io = (e) => {
}, $o = y(Io, U.NOTIFICATION), Co = s(Ce), Ro = [
  q,
  Z,
  Ge,
  Le,
  R,
  Pe,
  Ve,
  de,
  qe,
  Ze,
  je,
  He,
  We,
  Ye,
  Ie,
  Je,
  Ke,
  fo,
  _o,
  po,
  vo,
  Uo,
  Co,
  mo,
  go,
  ho,
  $o
];
ke.add(ze, Me, Be);
const Ko = Y(Ro);
export {
  lo as RenderVNode,
  vo as UBadge,
  q as UButton,
  Z as UButtonGroup,
  Pe as UCard,
  Ke as UCodeEditor,
  We as UCollapse,
  Ye as UCollapseItem,
  Co as UConfigProvider,
  _o as UDialog,
  go as UDialogFn,
  Ze as UDropdown,
  He as UDropdownItem,
  je as UDropdownMenu,
  R as UIcon,
  Ve as UInput,
  Ge as ULayout,
  mo as UMessageFn,
  $o as UNotificationFn,
  Je as UPopconfirm,
  Uo as UReadProgress,
  ho as UReadProgressFn,
  Le as URegion,
  fo as USlider,
  qe as UTag,
  de as UText,
  Ie as UTooltip,
  po as UTop,
  Ko as default,
  en,
  on as zhCn
};
