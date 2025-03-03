import { g as V, _ as F, a as j, U as q } from "./Dialog-B76M3cxQ.js";
import { _ as W } from "./Layout-h4mr0kSD.js";
import { _ as Z } from "./Region-Dq45I-VW.js";
import { w as n, p as H, a as v, m as Y } from "./utils-BdnNggyD.js";
import { defineComponent as B, computed as D, ref as g, watch as J, onMounted as K, onBeforeUnmount as Q, openBlock as h, createBlock as M, Teleport as X, createVNode as I, Transition as ee, unref as p, withCtx as oe, withDirectives as ne, createElementVNode as C, normalizeClass as se, normalizeStyle as te, renderSlot as ae, createCommentVNode as b, createElementBlock as ie, withModifiers as re, vShow as ce, shallowReactive as me, isVNode as le, h as S, render as d } from "vue";
import { U as R } from "./Button-DGh_y5oG.js";
import { _ as fe } from "./Card-CEVw-0G6.js";
import { _ as ue } from "./Input-Bx6km1RG.js";
import { _ as x, U as de } from "./ReadProgress-tWlA_gVL.js";
import { _ as _e } from "./Tag-BJdyQItN.js";
import { _ as pe } from "./Dropdown-BIfNrQDA.js";
import { _ as ge } from "./DropdownMenu-BN1zKfi1.js";
import { _ as Ue } from "./DropdownItem-C_v9i48h.js";
import { _ as ve } from "./Collapse-RsZZjbKX.js";
import { _ as ye } from "./CollapseItem-CEi-tBh1.js";
import { _ as $e, U as he } from "./CodeEditor-BP8WzJ7I.js";
import { _ as Ie } from "./Popconfirm-S604FZdo.js";
import { _ as Ce } from "./ConfigProvider-C-6nRyrn.js";
import { h as Re, a as Se, i as Oe, u as Ne } from "./hooks-BcZT0kT_.js";
import { r as Te, w as we, x as De, j as O, v as k, y as Me, h as A, z, p as be, d as E, A as Ee, B as Fe } from "./vendors-PY6Ic9FA.js";
import { _ as Be } from "./Slider-CKQv422f.js";
import { _ as xe } from "./Top-Dq24uWdi.js";
import { _ as ke } from "./Badge-C2s1MfLj.js";
import { _ as Ae } from "./Form-BvTofAL7.js";
import { _ as ze } from "./FormItem-DO5oPgB8.js";
import { _ as Ge } from "./Table-DLZDlr5s.js";
import { _ as Le } from "./Menu-DRUEaD78.js";
import { _ as Pe } from "./MenuItem-DeysfK_0.js";
import { _ as Ve } from "./SubMenu-cOA-n3pH.js";
/* empty css               */
import { library as je } from "@fortawesome/fontawesome-svg-core";
import { fas as qe } from "@fortawesome/free-solid-svg-icons";
import { E as $n, D as hn } from "./locale-BeqhBZQs.js";
const We = n(W), Ze = n(Z), He = n(fe), Ye = n(ue), Je = n(_e), Ke = n(pe), Qe = n(ge), Xe = n(Ue), eo = n(ve), oo = n(ye), no = n(Ie), so = n($e), to = {
  info: ["fas", "circle-info"],
  success: ["fas", "circle-check"],
  warning: ["fas", "circle-exclamation"],
  error: ["fas", "circle-xmark"],
  primary: ["fas", "circle-question"]
}, ao = {
  INFO: "info",
  SUCCESS: "success",
  WARNING: "warning",
  ERROR: "error",
  PRIMARY: "primary"
}, io = { class: "u-message-icon" }, ro = { class: "u-message-content" }, co = {
  key: 0,
  class: "u-message-close"
}, mo = /* @__PURE__ */ B({
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
    const s = e, f = D(() => s.icon ?? to[s.type]), a = g(!0), i = g(null), r = g(0), {
      topOffset: m,
      bottomOffset: c
    } = Re({
      boxHeight: r,
      offset: s.offset,
      getLastBottomOffset: Te(_o, s)
    }), u = D(() => ({
      top: H(m.value),
      zIndex: s.zIndex
    })), L = J(a, (t) => {
      t || (r.value = -s.offset);
    });
    Se(document, "keydown", (t) => {
      t.key === "Escape" && a.value && _();
    }), we(i, () => {
      r.value = i.value.getBoundingClientRect().height ?? 0;
    }), K(() => {
      P(), N();
    }), Q(() => {
      T(), L();
    });
    function _() {
      a.value = !1;
    }
    function P() {
      a.value = !0;
    }
    let $ = null;
    function N() {
      s.duration > 0 && ($ = De(_, s.duration));
    }
    function T() {
      $ && clearTimeout($);
    }
    return o({
      close: _,
      bottomOffset: c
    }), (t, w) => (h(), M(X, { to: "body" }, [
      I(ee, {
        appear: "",
        name: t.transitionName,
        onAfterLeave: w[0] || (w[0] = (ko) => !a.value && p(O)(t.onDestory) && t.onDestory())
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
            onMouseenter: T,
            onMouseleave: N
          }, [
            C("div", io, [
              I(p(R), { icon: f.value }, null, 8, ["icon"])
            ]),
            C("div", ro, [
              ae(t.$slots, "default", {}, () => [
                t.message ? (h(), M(p(go), {
                  key: 0,
                  vnode: t.message
                }, null, 8, ["vnode"])) : b("", !0)
              ])
            ]),
            t.showClose ? (h(), ie("div", co, [
              I(p(R), {
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
}), { nextZIndex: lo } = Oe(), l = me([]), fo = {
  type: "info",
  duration: 3e3,
  offset: 10,
  transitionName: "fade-up"
}, G = (e) => {
  const o = !e || le(e) || A(e) ? { message: e } : e;
  return { ...fo, ...o };
}, uo = (e) => {
  const o = Ne().value, s = document.createElement("div"), f = () => {
    const u = z(l, { id: o });
    u !== -1 && (l.splice(u, 1), d(null, s));
  }, a = {
    ...e,
    id: o,
    zIndex: lo(),
    onDestory: f
  }, i = S(mo, a);
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
  const o = uo(e);
  return l.push(o), o.handler;
};
function _o() {
  const e = z(l, { id: this.id });
  return e <= 0 ? 0 : be(l, [e - 1, "vm", "exposed", "bottomOffset", "value"]);
}
k(ao, (e) => Me(U, e, (o = {}) => U({ ...G(o), type: e })));
function po(e) {
  k(l, (o) => {
    if (o.props.type === e) {
      o.handler.close();
      return;
    }
    o.handler.close();
  });
}
U.closeAll = po;
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
}, go = B({
  props: {
    vnode: {
      type: [String, Object, Function],
      required: !0
    }
  },
  setup(e) {
    return () => O(e.vnode) ? e.vnode() : e.vnode;
  }
}), Uo = v(U, y.MESSAGE), vo = n(Be), yo = (e = {}) => {
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
}, $o = n(F), ho = v(yo, y.DIALOG), Io = n(xe), Co = n(ke), Ro = (e) => {
  const o = g(null);
  return d(S(x, {
    ...e,
    ref: (s) => o.value = s
  }), document.body), o;
}, So = n(x), Oo = v(Ro, y.PROGRESS), No = (e) => {
}, To = v(No, y.NOTIFICATION), wo = n(Ce), Do = n(Ae), Mo = n(ze), bo = n(Ge), Eo = n(Le), Fo = n(Pe), Bo = n(Ve), xo = [
  j,
  q,
  We,
  Ze,
  R,
  He,
  Ye,
  de,
  Je,
  Ke,
  Qe,
  Xe,
  eo,
  oo,
  he,
  no,
  so,
  vo,
  $o,
  Io,
  Co,
  So,
  wo,
  Do,
  Mo,
  bo,
  Eo,
  Fo,
  Bo,
  Uo,
  ho,
  Oo,
  To
];
je.add(qe, Ee, Fe);
const Un = Y(xo.map((e) => {
  var o;
  return { ...e, name: (o = e.name) != null && o.startsWith("U") ? e.name : `U${e.name}` };
}));
export {
  go as RenderVNode,
  Co as UBadge,
  j as UButton,
  q as UButtonGroup,
  He as UCard,
  so as UCodeEditor,
  eo as UCollapse,
  oo as UCollapseItem,
  wo as UConfigProvider,
  $o as UDialog,
  ho as UDialogFn,
  Ke as UDropdown,
  Xe as UDropdownItem,
  Qe as UDropdownMenu,
  Do as UForm,
  Mo as UFormItem,
  R as UIcon,
  Ye as UInput,
  We as ULayout,
  Eo as UMenu,
  Fo as UMenuItem,
  Uo as UMessageFn,
  To as UNotificationFn,
  no as UPopconfirm,
  So as UReadProgress,
  Oo as UReadProgressFn,
  Ze as URegion,
  vo as USlider,
  Bo as USubMenu,
  bo as UTable,
  Je as UTag,
  de as UText,
  he as UTooltip,
  Io as UTop,
  Un as default,
  $n as en,
  hn as zhCn
};
