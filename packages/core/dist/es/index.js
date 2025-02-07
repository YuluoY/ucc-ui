import { g as V, _ as M, a as j, U as q } from "./Dialog-m5oRI0s0.js";
import { _ as Z } from "./Layout-D3Sqc1I4.js";
import { _ as H } from "./Region-DY78zvya.js";
import { w as n, p as W, a as y, m as Y } from "./utils-BZeavd0Q.js";
import { defineComponent as B, computed as T, ref as p, watch as J, onMounted as K, onBeforeUnmount as Q, openBlock as I, createBlock as w, Teleport as X, createVNode as $, Transition as ee, unref as g, withCtx as oe, withDirectives as ne, createElementVNode as C, normalizeClass as se, normalizeStyle as te, renderSlot as ae, createCommentVNode as b, createElementBlock as ie, withModifiers as re, vShow as ce, shallowReactive as le, isVNode as me, h as O, render as u } from "vue";
import { U as R } from "./Button-Dj7yN7vt.js";
import { _ as fe } from "./Card-B9Wkkfjt.js";
import { _ as ue } from "./Input-DAEcrhVk.js";
import { _ as E, U as de } from "./ReadProgress-BWkAviqd.js";
import { _ as _e } from "./Tag-DVNiUGJi.js";
import { _ as ge } from "./Dropdown-BEMZgPBr.js";
import { _ as pe } from "./DropdownMenu-CHycqHx6.js";
import { _ as ve } from "./DropDownItem-BQKDRyr6.js";
import { _ as ye } from "./Collapse-RsZZjbKX.js";
import { _ as Ue } from "./CollapseItem-DpfkkE8z.js";
import { _ as he, U as Ie } from "./CodeEditor-CbRk1zz2.js";
import { _ as $e } from "./Popconfirm-YE2i1dNr.js";
import { _ as Ce } from "./ConfigProvider-BvNaEvdz.js";
import { g as Re, a as Oe, h as Se, u as Ne } from "./hooks-DnD3yQBc.js";
import { r as De, w as Te, x as we, j as x, v as k, y as be, h as A, z, p as Fe, d as F, A as Me, B as Be } from "./vendors-PY6Ic9FA.js";
import { _ as Ee } from "./Slider-3Hbj1dOm.js";
import { _ as xe } from "./Top-BD_qXCTC.js";
import { _ as ke } from "./Badge-C2s1MfLj.js";
import { _ as Ae } from "./Form-BvTofAL7.js";
import { _ as ze } from "./FormItem-ivZd8ZF-.js";
import { library as Ge } from "@fortawesome/fontawesome-svg-core";
import { fas as Le } from "@fortawesome/free-solid-svg-icons";
import { e as rn, D as cn } from "./locale-41GVkrrM.js";
const Pe = n(Z), Ve = n(H), je = n(fe), qe = n(ue), Ze = n(_e), He = n(ge), We = n(pe), Ye = n(ve), Je = n(ye), Ke = n(Ue), Qe = n($e), Xe = n(he), eo = {
  info: ["fas", "circle-info"],
  success: ["fas", "circle-check"],
  warning: ["fas", "circle-exclamation"],
  error: ["fas", "circle-xmark"],
  primary: ["fas", "circle-question"]
}, oo = {
  INFO: "info",
  SUCCESS: "success",
  WARNING: "warning",
  ERROR: "error",
  PRIMARY: "primary"
}, no = { class: "u-message-icon" }, so = { class: "u-message-content" }, to = {
  key: 0,
  class: "u-message-close"
}, ao = /* @__PURE__ */ B({
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
    const s = e, m = T(() => s.icon ?? eo[s.type]), a = p(!0), i = p(null), r = p(0), {
      topOffset: c,
      bottomOffset: f
    } = Re({
      boxHeight: r,
      offset: s.offset,
      getLastBottomOffset: De(lo, s)
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
        onAfterLeave: D[0] || (D[0] = (To) => !a.value && g(x)(t.onDestory) && t.onDestory())
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
            C("div", no, [
              $(g(R), { icon: m.value }, null, 8, ["icon"])
            ]),
            C("div", so, [
              ae(t.$slots, "default", {}, () => [
                t.message ? (I(), w(g(fo), {
                  key: 0,
                  vnode: t.message
                }, null, 8, ["vnode"])) : b("", !0)
              ])
            ]),
            t.showClose ? (I(), ie("div", to, [
              $(g(R), {
                icon: "close",
                onClick: re(_, ["stop"])
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
}), { nextZIndex: io } = Se(), l = le([]), ro = {
  type: "info",
  duration: 3e3,
  offset: 10,
  transitionName: "fade-up"
}, G = (e) => {
  const o = !e || me(e) || A(e) ? { message: e } : e;
  return { ...ro, ...o };
}, co = (e) => {
  const o = Ne().value, s = document.createElement("div"), m = () => {
    const d = z(l, { id: o });
    d !== -1 && (l.splice(d, 1), u(null, s));
  }, a = {
    ...e,
    id: o,
    zIndex: io(),
    onDestory: m
  }, i = O(ao, a);
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
  const o = co(e);
  return l.push(o), o.handler;
};
function lo() {
  const e = z(l, { id: this.id });
  return e <= 0 ? 0 : Fe(l, [e - 1, "vm", "exposed", "bottomOffset", "value"]);
}
k(oo, (e) => be(v, e, (o = {}) => v({ ...G(o), type: e })));
function mo(e) {
  k(l, (o) => {
    if (o.props.type === e) {
      o.handler.close();
      return;
    }
    o.handler.close();
  });
}
v.closeAll = mo;
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
}, fo = B({
  props: {
    vnode: {
      type: [String, Object, Function],
      required: !0
    }
  },
  setup(e) {
    return () => x(e.vnode) ? e.vnode() : e.vnode;
  }
}), uo = y(v, U.MESSAGE), _o = n(Ee), go = (e = {}) => {
  const o = (e == null ? void 0 : e.single) ?? !0;
  let s = (A(e == null ? void 0 : e.appendTo) ? document.querySelector(e.appendTo) : e == null ? void 0 : e.appendTo) || document.body;
  if (!o) {
    const f = document.createElement("div");
    s.appendChild(f), s = f;
  }
  const m = F(r, (e == null ? void 0 : e.openDelay) || 100), a = F(c, (e == null ? void 0 : e.closeDelay) || 100), i = {
    ...e,
    zIndex: V(),
    open: m,
    close: a
  };
  function r() {
    u(O(M, i), s), !o && s.remove();
  }
  function c() {
    u(null, s);
  }
  return o && c(), r(), {
    close: c
  };
}, po = n(M), vo = y(go, U.DIALOG), yo = n(xe), Uo = n(ke), ho = (e) => {
  const o = p(null);
  return u(O(E, {
    ...e,
    ref: (s) => o.value = s
  }), document.body), o;
}, Io = n(E), $o = y(ho, U.PROGRESS), Co = (e) => {
}, Ro = y(Co, U.NOTIFICATION), Oo = n(Ce), So = n(Ae), No = n(ze), Do = [
  j,
  q,
  Pe,
  Ve,
  R,
  je,
  qe,
  de,
  Ze,
  He,
  We,
  Ye,
  Je,
  Ke,
  Ie,
  Qe,
  Xe,
  _o,
  po,
  yo,
  Uo,
  Io,
  Oo,
  So,
  No,
  uo,
  vo,
  $o,
  Ro
];
Ge.add(Le, Me, Be);
const sn = Y(Do);
export {
  fo as RenderVNode,
  Uo as UBadge,
  j as UButton,
  q as UButtonGroup,
  je as UCard,
  Xe as UCodeEditor,
  Je as UCollapse,
  Ke as UCollapseItem,
  Oo as UConfigProvider,
  po as UDialog,
  vo as UDialogFn,
  He as UDropdown,
  Ye as UDropdownItem,
  We as UDropdownMenu,
  So as UForm,
  No as UFormItem,
  R as UIcon,
  qe as UInput,
  Pe as ULayout,
  uo as UMessageFn,
  Ro as UNotificationFn,
  Qe as UPopconfirm,
  Io as UReadProgress,
  $o as UReadProgressFn,
  Ve as URegion,
  _o as USlider,
  Ze as UTag,
  de as UText,
  Ie as UTooltip,
  yo as UTop,
  sn as default,
  rn as en,
  cn as zhCn
};
