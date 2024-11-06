import { _ as x, a as q, U as F } from "./Dialog-BH2x6DLk.js";
import { _ as j } from "./Layout-CjasGXdr.js";
import { _ as G } from "./Region-Dnc6n2Al.js";
import { w as s, p as H, a as S, m as P } from "./utils-CkIBsyjP.js";
import { U as w } from "./Button-BSnUPrjm.js";
import { _ as W } from "./Card-B8yf3pFu.js";
import { _ as Z } from "./Input-HialSdtn.js";
import { _ as Y } from "./Text-DecIS8op.js";
import { _ as J } from "./Tag-DY_pIkcU.js";
import { _ as K } from "./Dropdown-CL4YK6bS.js";
import { _ as Q } from "./DropdownMenu-CHycqHx6.js";
import { _ as X } from "./DropdownItem-E2onDVsQ.js";
import { _ as ee } from "./Collapse-RsZZjbKX.js";
import { _ as oe } from "./CollapseItem-BTPAIfgB.js";
import { _ as ne, U as te } from "./CodeEditor-CsPJWRBL.js";
import { _ as se } from "./Popconfirm-DvrsXAAK.js";
import { defineComponent as k, computed as D, ref as h, watch as ae, onMounted as ie, onBeforeUnmount as ce, openBlock as U, createBlock as T, Teleport as re, createVNode as $, Transition as le, unref as p, withCtx as me, withDirectives as fe, createElementVNode as I, normalizeClass as ue, normalizeStyle as de, renderSlot as _e, createCommentVNode as B, createElementBlock as pe, withModifiers as ge, vShow as ve, shallowReactive as ye, isVNode as he, h as N, render as g } from "vue";
import { d as Ue, e as $e, f as Ie, u as we } from "./hooks-CxCLWkqB.js";
import { j as Ce, u as Me, r as be, g as O, q as z, s as De, i as E, v as L, w as Te, d as R, x as Be, y as Re } from "./vendors-DU5T3Hvp.js";
import { _ as xe } from "./Slider-CdSkoLUg.js";
import { library as Se } from "@fortawesome/fontawesome-svg-core";
import { fas as ke } from "@fortawesome/free-solid-svg-icons";
const Ne = s(j), Oe = s(G), ze = s(W), Ee = s(Z), Le = s(Y), Ae = s(J), Ve = s(K), qe = s(Q), Fe = s(X), je = s(ee), Ge = s(oe), He = s(se), Pe = s(ne), We = {
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
}, Qe = /* @__PURE__ */ k({
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
    const a = e, l = D(() => a.icon ?? We[a.type]), n = h(!0), i = h(null), c = h(0), {
      topOffset: u,
      bottomOffset: m
    } = Ue({
      boxHeight: c,
      offset: a.offset,
      getLastBottomOffset: Ce(no, a)
    }), r = D(() => ({
      top: H(u.value),
      zIndex: a.zIndex
    })), d = ae(n, (t) => {
      t || (c.value = -a.offset);
    });
    $e(document, "keydown", (t) => {
      t.key === "Escape" && n.value && _();
    }), Me(i, () => {
      c.value = i.value.getBoundingClientRect().height ?? 0;
    }), ie(() => {
      V(), C();
    }), ce(() => {
      M(), d();
    });
    function _() {
      n.value = !1;
    }
    function V() {
      n.value = !0;
    }
    let y = null;
    function C() {
      a.duration > 0 && (y = be(_, a.duration));
    }
    function M() {
      y && clearTimeout(y);
    }
    return o({
      close: _,
      bottomOffset: m
    }), (t, b) => (U(), T(re, { to: "body" }, [
      $(le, {
        appear: "",
        name: t.transitionName,
        onAfterLeave: b[0] || (b[0] = (fo) => !n.value && p(O)(t.onDestory) && t.onDestory())
      }, {
        default: me(() => [
          fe(I("div", {
            ref_key: "messageRef",
            ref: i,
            role: "alert",
            class: ue(["u-message", [
              `u-message--${t.type}`,
              { "is-plain": t.plain },
              { "is-center": t.center },
              t.customClass
            ]]),
            style: de(r.value),
            onMouseenter: M,
            onMouseleave: C
          }, [
            I("div", Ye, [
              $(p(w), { icon: l.value }, null, 8, ["icon"])
            ]),
            I("div", Je, [
              _e(t.$slots, "default", {}, () => [
                t.message ? (U(), T(p(so), {
                  key: 0,
                  vnode: t.message
                }, null, 8, ["vnode"])) : B("", !0)
              ])
            ]),
            t.showClose ? (U(), pe("div", Ke, [
              $(p(w), {
                icon: "close",
                onClick: ge(_, ["stop"])
              })
            ])) : B("", !0)
          ], 38), [
            [ve, n.value]
          ])
        ]),
        _: 3
      }, 8, ["name"])
    ]));
  }
}), { nextZIndex: Xe } = Ie(), f = ye([]), eo = {
  type: "info",
  duration: 3e3,
  offset: 10,
  transitionName: "fade-up"
}, A = (e) => {
  const o = !e || he(e) || E(e) ? { message: e } : e;
  return { ...eo, ...o };
}, oo = (e) => {
  const o = we().value, a = document.createElement("div"), l = () => {
    const r = L(f, { id: o });
    r !== -1 && (f.splice(r, 1), g(null, a));
  }, n = {
    ...e,
    id: o,
    zIndex: Xe(),
    onDestory: l
  }, i = N(Qe, n);
  g(i, a);
  const c = i.component;
  return {
    id: o,
    props: n,
    handler: {
      close: () => c.exposed.close()
    },
    vm: c,
    vnode: i
  };
}, v = (e = {}) => {
  e = A(e);
  const o = oo(e);
  return f.push(o), o.handler;
};
function no() {
  const e = L(f, { id: this.id });
  return e <= 0 ? 0 : Te(f, [e - 1, "vm", "exposed", "bottomOffset", "value"]);
}
z(Ze, (e) => De(v, e, (o = {}) => v({ ...A(o), type: e })));
function to(e) {
  z(f, (o) => {
    if (o.props.type === e) {
      o.handler.close();
      return;
    }
    o.handler.close();
  });
}
v.closeAll = to;
const so = k({
  props: {
    vnode: {
      type: [String, Object, Function],
      required: !0
    }
  },
  setup(e) {
    return () => O(e.vnode) ? e.vnode() : e.vnode;
  }
}), ao = S(v, "$message"), io = s(xe);
let co = 2006;
const ro = (e) => {
  const o = Math.random() * 200 + 200, a = Math.random() * 200 + 200, l = (e == null ? void 0 : e.mode) === "multi";
  let n = (E(e == null ? void 0 : e.appendTo) ? document.querySelector(e.appendTo) : e == null ? void 0 : e.appendTo) || document.body;
  if (l) {
    const d = document.createElement("div");
    n.appendChild(d), n = d;
  }
  const i = R(m, (e == null ? void 0 : e.openDelay) || 100), c = R(r, (e == null ? void 0 : e.closeDelay) || 100), u = {
    ...e,
    zIndex: co++,
    open: i,
    close: c,
    width: o,
    height: a
  };
  function m() {
    g(N(x, u), n), l && n.remove();
  }
  function r() {
    g(null, n);
  }
  return !l && r(), m(), {
    open: m,
    close: r
  };
};
S(ro, "$dialog");
const lo = s(x), mo = [
  q,
  F,
  Ne,
  Oe,
  w,
  ze,
  Ee,
  Le,
  Ae,
  Ve,
  qe,
  Fe,
  je,
  Ge,
  te,
  He,
  Pe,
  ao,
  io,
  lo
];
Se.add(ke, Be, Re);
const Oo = P(mo);
export {
  so as RenderVNode,
  q as UButton,
  F as UButtonGroup,
  ze as UCard,
  Pe as UCodeEditor,
  je as UCollapse,
  Ge as UCollapseItem,
  lo as UDialog,
  Ve as UDropdown,
  Fe as UDropdownItem,
  qe as UDropdownMenu,
  w as UIcon,
  Ee as UInput,
  Ne as ULayout,
  ao as UMessage,
  He as UPopconfirm,
  Oe as URegion,
  io as USlider,
  Ae as UTag,
  Le as UText,
  te as UTooltip,
  Oo as default
};
