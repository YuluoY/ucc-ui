import { g as P, _ as O, a as G, U as q } from "./Dialog-BASDQ63m.js";
import { _ as Z } from "./Layout-CuaEJf5F.js";
import { _ as j } from "./Region-CCunii-w.js";
import { w as n, p as H, a as v, m as W } from "./utils-Dud7RK9C.js";
import { defineComponent as x, computed as D, ref as U, watch as Y, onMounted as J, onBeforeUnmount as K, openBlock as h, createBlock as N, Teleport as Q, createVNode as $, Transition as X, unref as g, withCtx as ee, withDirectives as oe, createElementVNode as I, normalizeClass as ne, normalizeStyle as te, renderSlot as se, createCommentVNode as b, createElementBlock as ae, withModifiers as ie, vShow as ce, shallowReactive as re, isVNode as le, h as C, render as u } from "vue";
import { U as R } from "./Button-B4mtOv_x.js";
import { _ as me } from "./Card-BHxT1uUw.js";
import { _ as fe } from "./Input-3PFpNgWh.js";
import { _ as ue, U as de } from "./ReadProgress-DEkIo-ZP.js";
import { _ as _e } from "./Tag-AnhsBazc.js";
import { _ as ge } from "./Dropdown-BRLNbZ3-.js";
import { _ as pe } from "./DropdownMenu-CHycqHx6.js";
import { _ as ve } from "./DropdownItem-BWIBanN_.js";
import { _ as ye } from "./Collapse-RsZZjbKX.js";
import { _ as Ue } from "./CollapseItem-CiOxGO2j.js";
import { _ as he, U as $e } from "./CodeEditor-QnzpNeU8.js";
import { _ as Ie } from "./Popconfirm-C8pAgt9L.js";
import { _ as Re } from "./ConfigProvider-YWeUKTyw.js";
import { f as Ce, a as we, g as Se, u as Te } from "./hooks-BzQyN3FA.js";
import { q as De, v as Ne, w as be, j as M, u as E, x as Be, h as A, y as k, z as Oe, d as B, A as xe, B as Me } from "./vendors-C-cGMwAY.js";
import { _ as Ee } from "./Slider-DLNrGQNL.js";
import { _ as Ae } from "./Top-H_5_aIEJ.js";
import { _ as ke } from "./Badge-BlQz8oJS.js";
import { library as ze } from "@fortawesome/fontawesome-svg-core";
import { fas as Fe } from "@fortawesome/free-solid-svg-icons";
import { E as tn, z as sn } from "./locale-B_eHW43s.js";
const Ve = n(Z), Le = n(j), Pe = n(me), Ge = n(fe), qe = n(_e), Ze = n(ge), je = n(pe), He = n(ve), We = n(ye), Ye = n(Ue), Je = n(Ie), Ke = n(he), Qe = {
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
}, to = /* @__PURE__ */ x({
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
    const t = e, m = D(() => t.icon ?? Qe[t.type]), a = U(!0), i = U(null), c = U(0), {
      topOffset: r,
      bottomOffset: f
    } = Ce({
      boxHeight: c,
      offset: t.offset,
      getLastBottomOffset: De(co, t)
    }), d = D(() => ({
      top: H(r.value),
      zIndex: t.zIndex
    })), V = Y(a, (s) => {
      s || (c.value = -t.offset);
    });
    we(document, "keydown", (s) => {
      s.key === "Escape" && a.value && _();
    }), Ne(i, () => {
      c.value = i.value.getBoundingClientRect().height ?? 0;
    }), J(() => {
      L(), w();
    }), K(() => {
      S(), V();
    });
    function _() {
      a.value = !1;
    }
    function L() {
      a.value = !0;
    }
    let y = null;
    function w() {
      t.duration > 0 && (y = be(_, t.duration));
    }
    function S() {
      y && clearTimeout(y);
    }
    return o({
      close: _,
      bottomOffset: f
    }), (s, T) => (h(), N(Q, { to: "body" }, [
      $(X, {
        appear: "",
        name: s.transitionName,
        onAfterLeave: T[0] || (T[0] = (Do) => !a.value && g(M)(s.onDestory) && s.onDestory())
      }, {
        default: ee(() => [
          oe(I("div", {
            ref_key: "messageRef",
            ref: i,
            role: "alert",
            class: ne(["u-message", [
              `u-message--${s.type}`,
              { "is-plain": s.plain },
              { "is-center": s.center },
              s.customClass
            ]]),
            style: te(d.value),
            onMouseenter: S,
            onMouseleave: w
          }, [
            I("div", eo, [
              $(g(R), { icon: m.value }, null, 8, ["icon"])
            ]),
            I("div", oo, [
              se(s.$slots, "default", {}, () => [
                s.message ? (h(), N(g(_o), {
                  key: 0,
                  vnode: s.message
                }, null, 8, ["vnode"])) : b("", !0)
              ])
            ]),
            s.showClose ? (h(), ae("div", no, [
              $(g(R), {
                icon: "close",
                onClick: ie(_, ["stop"])
              })
            ])) : b("", !0)
          ], 38), [
            [ce, a.value]
          ])
        ]),
        _: 3
      }, 8, ["name"])
    ]));
  }
}), { nextZIndex: so } = Se(), l = re([]), ao = {
  type: "info",
  duration: 3e3,
  offset: 10,
  transitionName: "fade-up"
}, z = (e) => {
  const o = !e || le(e) || A(e) ? { message: e } : e;
  return { ...ao, ...o };
}, io = (e) => {
  const o = Te().value, t = document.createElement("div"), m = () => {
    const d = k(l, { id: o });
    d !== -1 && (l.splice(d, 1), u(null, t));
  }, a = {
    ...e,
    id: o,
    zIndex: so(),
    onDestory: m
  }, i = C(to, a);
  u(i, t);
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
}, p = (e = {}) => {
  e = z(e);
  const o = io(e);
  return l.push(o), o.handler;
};
function co() {
  const e = k(l, { id: this.id });
  return e <= 0 ? 0 : Oe(l, [e - 1, "vm", "exposed", "bottomOffset", "value"]);
}
E(Xe, (e) => Be(p, e, (o = {}) => p({ ...z(o), type: e })));
function ro(e) {
  E(l, (o) => {
    if (o.props.type === e) {
      o.handler.close();
      return;
    }
    o.handler.close();
  });
}
p.closeAll = ro;
const lo = "$dialog", mo = "$message", fo = "$notify", uo = "$progress", _o = x({
  props: {
    vnode: {
      type: [String, Object, Function],
      required: !0
    }
  },
  setup(e) {
    return () => M(e.vnode) ? e.vnode() : e.vnode;
  }
}), go = v(p, mo), po = n(Ee), vo = (e = {}) => {
  const o = (e == null ? void 0 : e.single) ?? !0;
  let t = (A(e == null ? void 0 : e.appendTo) ? document.querySelector(e.appendTo) : e == null ? void 0 : e.appendTo) || document.body;
  if (!o) {
    const f = document.createElement("div");
    t.appendChild(f), t = f;
  }
  const m = B(c, (e == null ? void 0 : e.openDelay) || 100), a = B(r, (e == null ? void 0 : e.closeDelay) || 100), i = {
    ...e,
    zIndex: P(),
    open: m,
    close: a
  };
  function c() {
    u(C(O, i), t), !o && t.remove();
  }
  function r() {
    u(null, t);
  }
  return o && r(), c(), {
    close: r
  };
}, yo = v(vo, lo), Uo = n(O), ho = n(Ae), $o = n(ke), Io = (e) => {
  u(C(F, e), document.body);
}, F = n(ue), Ro = v(Io, uo), Co = (e) => {
}, wo = v(Co, fo), So = n(Re), To = [
  G,
  q,
  Ve,
  Le,
  R,
  Pe,
  Ge,
  de,
  qe,
  Ze,
  je,
  He,
  We,
  Ye,
  $e,
  Je,
  Ke,
  go,
  po,
  Uo,
  yo,
  ho,
  $o,
  F,
  Ro,
  wo,
  So
];
ze.add(Fe, xe, Me);
const en = W(To);
export {
  _o as RenderVNode,
  $o as UBadge,
  G as UButton,
  q as UButtonGroup,
  Pe as UCard,
  Ke as UCodeEditor,
  We as UCollapse,
  Ye as UCollapseItem,
  So as UConfigProvider,
  Uo as UDialog,
  yo as UDialogFn,
  Ze as UDropdown,
  He as UDropdownItem,
  je as UDropdownMenu,
  R as UIcon,
  Ge as UInput,
  Ve as ULayout,
  go as UMessage,
  wo as UNotificationFn,
  Je as UPopconfirm,
  F as UReadProgress,
  Ro as UReadProgressFn,
  Le as URegion,
  po as USlider,
  qe as UTag,
  de as UText,
  $e as UTooltip,
  ho as UTop,
  en as default,
  tn as en,
  sn as zhCn
};
