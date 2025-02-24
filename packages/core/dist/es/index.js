import { g as V, _ as F, a as j, U as q } from "./Dialog-aN3zTTKb.js";
import { _ as W } from "./Layout-CZFRXX5y.js";
import { _ as Z } from "./Region-CH70f4QQ.js";
import { w as n, p as H, a as U, m as Y } from "./utils-BdnNggyD.js";
import { defineComponent as M, computed as T, ref as g, watch as J, onMounted as K, onBeforeUnmount as Q, openBlock as I, createBlock as w, Teleport as X, createVNode as $, Transition as ee, unref as p, withCtx as oe, withDirectives as ne, createElementVNode as C, normalizeClass as se, normalizeStyle as te, renderSlot as ae, createCommentVNode as b, createElementBlock as ie, withModifiers as re, vShow as ce, shallowReactive as me, isVNode as le, h as O, render as u } from "vue";
import { U as R } from "./Button-DGh_y5oG.js";
import { _ as fe } from "./Card-CEVw-0G6.js";
import { _ as ue } from "./Input-Bx6km1RG.js";
import { _ as B, U as de } from "./ReadProgress-DtAI_ImK.js";
import { _ as _e } from "./Tag-BJdyQItN.js";
import { _ as pe } from "./DropDown-BhRKU77y.js";
import { _ as ge } from "./DropdownMenu-BN1zKfi1.js";
import { _ as ve } from "./DropdownItem-Bgy3sguh.js";
import { _ as Ue } from "./Collapse-RsZZjbKX.js";
import { _ as ye } from "./CollapseItem-CEi-tBh1.js";
import { _ as he, U as Ie } from "./CodeEditor-Df9SjpGi.js";
import { _ as $e } from "./Popconfirm-DiuJNsX1.js";
import { _ as Ce } from "./ConfigProvider-C-6nRyrn.js";
import { g as Re, a as Oe, h as Se, u as Ne } from "./hooks-CJb3wr_w.js";
import { r as De, w as Te, x as we, j as x, v as k, y as be, h as A, z, p as Ee, d as E, A as Fe, B as Me } from "./vendors-PY6Ic9FA.js";
import { _ as Be } from "./Slider-DosEtqRm.js";
import { _ as xe } from "./Top-CqwVfcCG.js";
import { _ as ke } from "./Badge-C2s1MfLj.js";
import { _ as Ae } from "./Form-BvTofAL7.js";
import { _ as ze } from "./FormItem-DO5oPgB8.js";
/* empty css               */
import { library as Ge } from "@fortawesome/fontawesome-svg-core";
import { fas as Le } from "@fortawesome/free-solid-svg-icons";
import { E as cn, D as mn } from "./locale-BeqhBZQs.js";
const Pe = n(W), Ve = n(Z), je = n(fe), qe = n(ue), We = n(_e), Ze = n(pe), He = n(ge), Ye = n(ve), Je = n(Ue), Ke = n(ye), Qe = n($e), Xe = n(he), eo = {
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
}, ao = /* @__PURE__ */ M({
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
    const s = e, l = T(() => s.icon ?? eo[s.type]), a = g(!0), i = g(null), r = g(0), {
      topOffset: c,
      bottomOffset: f
    } = Re({
      boxHeight: r,
      offset: s.offset,
      getLastBottomOffset: De(mo, s)
    }), d = T(() => ({
      top: H(c.value),
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
        onAfterLeave: D[0] || (D[0] = (To) => !a.value && p(x)(t.onDestory) && t.onDestory())
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
              $(p(R), { icon: l.value }, null, 8, ["icon"])
            ]),
            C("div", so, [
              ae(t.$slots, "default", {}, () => [
                t.message ? (I(), w(p(fo), {
                  key: 0,
                  vnode: t.message
                }, null, 8, ["vnode"])) : b("", !0)
              ])
            ]),
            t.showClose ? (I(), ie("div", to, [
              $(p(R), {
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
}), { nextZIndex: io } = Se(), m = me([]), ro = {
  type: "info",
  duration: 3e3,
  offset: 10,
  transitionName: "fade-up"
}, G = (e) => {
  const o = !e || le(e) || A(e) ? { message: e } : e;
  return { ...ro, ...o };
}, co = (e) => {
  const o = Ne().value, s = document.createElement("div"), l = () => {
    const d = z(m, { id: o });
    d !== -1 && (m.splice(d, 1), u(null, s));
  }, a = {
    ...e,
    id: o,
    zIndex: io(),
    onDestory: l
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
  return m.push(o), o.handler;
};
function mo() {
  const e = z(m, { id: this.id });
  return e <= 0 ? 0 : Ee(m, [e - 1, "vm", "exposed", "bottomOffset", "value"]);
}
k(oo, (e) => be(v, e, (o = {}) => v({ ...G(o), type: e })));
function lo(e) {
  k(m, (o) => {
    if (o.props.type === e) {
      o.handler.close();
      return;
    }
    o.handler.close();
  });
}
v.closeAll = lo;
const y = {
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
}, fo = M({
  props: {
    vnode: {
      type: [String, Object, Function],
      required: !0
    }
  },
  setup(e) {
    return () => x(e.vnode) ? e.vnode() : e.vnode;
  }
}), uo = U(v, y.MESSAGE), _o = n(Be), po = (e = {}) => {
  const o = (e == null ? void 0 : e.single) ?? !0;
  let s = (A(e == null ? void 0 : e.appendTo) ? document.querySelector(e.appendTo) : e == null ? void 0 : e.appendTo) || document.body;
  if (!o) {
    const f = document.createElement("div");
    s.appendChild(f), s = f;
  }
  const l = E(r, (e == null ? void 0 : e.openDelay) || 100), a = E(c, (e == null ? void 0 : e.closeDelay) || 100), i = {
    ...e,
    zIndex: V(),
    open: l,
    close: a
  };
  function r() {
    u(O(F, i), s), !o && s.remove();
  }
  function c() {
    u(null, s);
  }
  return o && c(), r(), {
    close: c
  };
}, go = n(F), vo = U(po, y.DIALOG), Uo = n(xe), yo = n(ke), ho = (e) => {
  const o = g(null);
  return u(O(B, {
    ...e,
    ref: (s) => o.value = s
  }), document.body), o;
}, Io = n(B), $o = U(ho, y.PROGRESS), Co = (e) => {
}, Ro = U(Co, y.NOTIFICATION), Oo = n(Ce), So = n(Ae), No = n(ze), Do = [
  j,
  q,
  Pe,
  Ve,
  R,
  je,
  qe,
  de,
  We,
  Ze,
  He,
  Ye,
  Je,
  Ke,
  Ie,
  Qe,
  Xe,
  _o,
  go,
  Uo,
  yo,
  Io,
  Oo,
  So,
  No,
  uo,
  vo,
  $o,
  Ro
];
Ge.add(Le, Fe, Me);
const tn = Y(Do.map((e) => {
  var o;
  return { ...e, name: (o = e.name) != null && o.startsWith("U") ? e.name : `U${e.name}` };
}));
export {
  fo as RenderVNode,
  yo as UBadge,
  j as UButton,
  q as UButtonGroup,
  je as UCard,
  Xe as UCodeEditor,
  Je as UCollapse,
  Ke as UCollapseItem,
  Oo as UConfigProvider,
  go as UDialog,
  vo as UDialogFn,
  Ze as UDropdown,
  Ye as UDropdownItem,
  He as UDropdownMenu,
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
  We as UTag,
  de as UText,
  Ie as UTooltip,
  Uo as UTop,
  tn as default,
  cn as en,
  mn as zhCn
};
