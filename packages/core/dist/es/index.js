import { g as V, _ as F, a as j, U as q } from "./Dialog-BT3U4Ot1.js";
import { _ as W } from "./Layout-CH0PFOrW.js";
import { _ as Z } from "./Region-B5T8Jjb7.js";
import { w as n, p as H, b as v, m as Y } from "./utils-B_WQOxeb.js";
import { defineComponent as B, computed as w, ref as g, watch as J, onMounted as K, onBeforeUnmount as Q, openBlock as h, createBlock as D, Teleport as X, createVNode as I, Transition as ee, unref as p, withCtx as oe, withDirectives as ne, createElementVNode as C, normalizeClass as se, normalizeStyle as te, renderSlot as ae, createCommentVNode as M, createElementBlock as ie, withModifiers as re, vShow as ce, shallowReactive as me, isVNode as le, h as S, render as d } from "vue";
import { U as R } from "./Button-B4XDm3yG.js";
import { _ as fe } from "./Card-Hj7XN8Ne.js";
import { _ as ue } from "./Input-yMqYdOiH.js";
import { _ as x, U as de } from "./ReadProgress-gcm__0No.js";
import { _ as _e } from "./Tag-Bw-7ABVt.js";
import { _ as pe } from "./Dropdown-C2027SAS.js";
import { _ as ge } from "./DropdownMenu-BN1zKfi1.js";
import { _ as Ue } from "./DropdownItem-CZ6A1odY.js";
import { _ as ve } from "./Collapse-RsZZjbKX.js";
import { _ as ye } from "./CollapseItem-awbBGx_h.js";
import { _ as $e, U as he } from "./CodeEditor-7TXNqlL8.js";
import { _ as Ie } from "./Popconfirm-DvljpBGH.js";
import { _ as Ce } from "./ConfigProvider-C-6nRyrn.js";
import { h as Re, a as Se, i as Oe, u as Te } from "./hooks-BmNqJ_Os.js";
import { r as Ne, w as be, x as we, j as O, v as k, y as De, h as A, z, p as Me, d as E, A as Ee, B as Fe } from "./vendors-PY6Ic9FA.js";
import { _ as Be } from "./Slider-CZc-M_2n.js";
import { _ as xe } from "./Top-wT39sGM0.js";
import { _ as ke } from "./Badge-C2s1MfLj.js";
import { _ as Ae } from "./Form-BvTofAL7.js";
import { _ as ze } from "./FormItem-DUaSmCZl.js";
import { _ as Ge } from "./Table-DJtXe6WW.js";
import { _ as Le } from "./Menu-DRUEaD78.js";
import { _ as Pe } from "./MenuItem-DeysfK_0.js";
import { _ as Ve } from "./SubMenu-cOA-n3pH.js";
import { _ as je } from "./Timeline-_51eyo2_.js";
/* empty css               */
import { library as qe } from "@fortawesome/fontawesome-svg-core";
import { fas as We } from "@fortawesome/free-solid-svg-icons";
import { E as Cn, D as Rn } from "./locale-BeqhBZQs.js";
const Ze = n(W), He = n(Z), Ye = n(fe), Je = n(ue), Ke = n(_e), Qe = n(pe), Xe = n(ge), eo = n(Ue), oo = n(ve), no = n(ye), so = n(Ie), to = n($e), ao = {
  info: ["fas", "circle-info"],
  success: ["fas", "circle-check"],
  warning: ["fas", "circle-exclamation"],
  error: ["fas", "circle-xmark"],
  primary: ["fas", "circle-question"]
}, io = {
  INFO: "info",
  SUCCESS: "success",
  WARNING: "warning",
  ERROR: "error",
  PRIMARY: "primary"
}, ro = { class: "u-message-icon" }, co = { class: "u-message-content" }, mo = {
  key: 0,
  class: "u-message-close"
}, lo = /* @__PURE__ */ B({
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
    const s = e, f = w(() => s.icon ?? ao[s.type]), a = g(!0), i = g(null), r = g(0), {
      topOffset: m,
      bottomOffset: c
    } = Re({
      boxHeight: r,
      offset: s.offset,
      getLastBottomOffset: Ne(po, s)
    }), u = w(() => ({
      top: H(m.value),
      zIndex: s.zIndex
    })), L = J(a, (t) => {
      t || (r.value = -s.offset);
    });
    Se(document, "keydown", (t) => {
      t.key === "Escape" && a.value && _();
    }), be(i, () => {
      r.value = i.value.getBoundingClientRect().height ?? 0;
    }), K(() => {
      P(), T();
    }), Q(() => {
      N(), L();
    });
    function _() {
      a.value = !1;
    }
    function P() {
      a.value = !0;
    }
    let $ = null;
    function T() {
      s.duration > 0 && ($ = we(_, s.duration));
    }
    function N() {
      $ && clearTimeout($);
    }
    return o({
      close: _,
      bottomOffset: c
    }), (t, b) => (h(), D(X, { to: "body" }, [
      I(ee, {
        appear: "",
        name: t.transitionName,
        onAfterLeave: b[0] || (b[0] = (zo) => !a.value && p(O)(t.onDestory) && t.onDestory())
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
            style: te(u.value),
            onMouseenter: N,
            onMouseleave: T
          }, [
            C("div", ro, [
              I(p(R), { icon: f.value }, null, 8, ["icon"])
            ]),
            C("div", co, [
              ae(t.$slots, "default", {}, () => [
                t.message ? (h(), D(p(Uo), {
                  key: 0,
                  vnode: t.message
                }, null, 8, ["vnode"])) : M("", !0)
              ])
            ]),
            t.showClose ? (h(), ie("div", mo, [
              I(p(R), {
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
}), { nextZIndex: fo } = Oe(), l = me([]), uo = {
  type: "info",
  duration: 3e3,
  offset: 10,
  transitionName: "fade-up"
}, G = (e) => {
  const o = !e || le(e) || A(e) ? { message: e } : e;
  return { ...uo, ...o };
}, _o = (e) => {
  const o = Te().value, s = document.createElement("div"), f = () => {
    const u = z(l, { id: o });
    u !== -1 && (l.splice(u, 1), d(null, s));
  }, a = {
    ...e,
    id: o,
    zIndex: fo(),
    onDestory: f
  }, i = S(lo, a);
  d(i, s);
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
}, U = (e = {}) => {
  e = G(e);
  const o = _o(e);
  return l.push(o), o.handler;
};
function po() {
  const e = z(l, { id: this.id });
  return e <= 0 ? 0 : Me(l, [e - 1, "vm", "exposed", "bottomOffset", "value"]);
}
k(io, (e) => De(U, e, (o = {}) => U({ ...G(o), type: e })));
function go(e) {
  k(l, (o) => {
    if (o.props.type === e) {
      o.handler.close();
      return;
    }
    o.handler.close();
  });
}
U.closeAll = go;
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
}, Uo = B({
  props: {
    vnode: {
      type: [String, Object, Function],
      required: !0
    }
  },
  setup(e) {
    return () => O(e.vnode) ? e.vnode() : e.vnode;
  }
}), vo = v(U, y.MESSAGE), yo = n(Be), $o = (e = {}) => {
  const o = (e == null ? void 0 : e.single) ?? !0;
  let s = (A(e == null ? void 0 : e.appendTo) ? document.querySelector(e.appendTo) : e == null ? void 0 : e.appendTo) || document.body;
  if (!o) {
    const c = document.createElement("div");
    s.appendChild(c), s = c;
  }
  const f = E(r, (e == null ? void 0 : e.openDelay) || 100), a = E(m, (e == null ? void 0 : e.closeDelay) || 100), i = {
    ...e,
    zIndex: V(),
    open: f,
    close: a,
    onConfirm: async (c) => {
      O(e.confirm) ? await e.confirm() && c() : c();
    }
  };
  function r() {
    d(S(F, i), s), !o && s.remove();
  }
  function m() {
    d(null, s);
  }
  return o && m(), r(), {
    close: m
  };
}, ho = n(F), Io = v($o, y.DIALOG), Co = n(xe), Ro = n(ke), So = (e) => {
  const o = g(null);
  return d(S(x, {
    ...e,
    ref: (s) => o.value = s
  }), document.body), o;
}, Oo = n(x), To = v(So, y.PROGRESS), No = (e) => {
}, bo = v(No, y.NOTIFICATION), wo = n(Ce), Do = n(Ae), Mo = n(ze), Eo = n(Ge), Fo = n(Le), Bo = n(Pe), xo = n(Ve), ko = n(je), Ao = [
  j,
  q,
  Ze,
  He,
  R,
  Ye,
  Je,
  de,
  Ke,
  Qe,
  Xe,
  eo,
  oo,
  no,
  he,
  so,
  to,
  yo,
  ho,
  Co,
  Ro,
  Oo,
  wo,
  Do,
  Mo,
  Eo,
  Fo,
  Bo,
  xo,
  ko,
  vo,
  Io,
  To,
  bo
];
qe.add(We, Ee, Fe);
const $n = Y(Ao.map((e) => {
  var o;
  return { ...e, name: (o = e.name) != null && o.startsWith("U") ? e.name : `U${e.name}` };
}));
export {
  Uo as RenderVNode,
  Ro as UBadge,
  j as UButton,
  q as UButtonGroup,
  Ye as UCard,
  to as UCodeEditor,
  oo as UCollapse,
  no as UCollapseItem,
  wo as UConfigProvider,
  ho as UDialog,
  Io as UDialogFn,
  Qe as UDropdown,
  eo as UDropdownItem,
  Xe as UDropdownMenu,
  Do as UForm,
  Mo as UFormItem,
  R as UIcon,
  Je as UInput,
  Ze as ULayout,
  Fo as UMenu,
  Bo as UMenuItem,
  vo as UMessageFn,
  bo as UNotificationFn,
  so as UPopconfirm,
  Oo as UReadProgress,
  To as UReadProgressFn,
  He as URegion,
  yo as USlider,
  xo as USubMenu,
  Eo as UTable,
  Ke as UTag,
  de as UText,
  ko as UTimeline,
  he as UTooltip,
  Co as UTop,
  $n as default,
  Cn as en,
  Rn as zhCn
};
