import { _ as R, a as V, U as q } from "./Dialog--0Bt2YR6.js";
import { _ as j } from "./Layout-CjasGXdr.js";
import { _ as G } from "./Region-Dnc6n2Al.js";
import { w as s, p as H, a as S, m as P } from "./utils-CkIBsyjP.js";
import { U as I } from "./Button-BSnUPrjm.js";
import { _ as W } from "./Card-B8yf3pFu.js";
import { _ as Z } from "./Input-HialSdtn.js";
import { _ as Y } from "./Text-DecIS8op.js";
import { _ as J } from "./Tag-DY_pIkcU.js";
import { _ as K } from "./Dropdown-BeyHoRV4.js";
import { _ as Q } from "./DropdownMenu-CHycqHx6.js";
import { _ as X } from "./DropdownItem-CitTzYwq.js";
import { _ as ee } from "./Collapse-RsZZjbKX.js";
import { _ as ne } from "./CollapseItem-BTPAIfgB.js";
import { _ as oe, U as te } from "./CodeEditor-DFU6tUKF.js";
import { _ as se } from "./Popconfirm-ssxpl13d.js";
import { defineComponent as x, computed as b, ref as y, watch as ae, onMounted as ie, onBeforeUnmount as ce, openBlock as U, createBlock as T, Teleport as re, createVNode as h, Transition as le, unref as _, withCtx as me, withDirectives as fe, createElementVNode as $, normalizeClass as ue, normalizeStyle as de, renderSlot as _e, createCommentVNode as B, createElementBlock as ge, withModifiers as pe, vShow as ve, shallowReactive as ye, isVNode as Ue, h as k, render as g } from "vue";
import { e as he, a as $e, f as Ie, u as we } from "./hooks-BCC9GPvY.js";
import { j as Ce, u as De, r as be, g as N, q as O, s as Te, i as z, v as E, w as Be, d as M, x as Me, y as Re } from "./vendors-DU5T3Hvp.js";
import { _ as Se } from "./Slider-4cc4X7wD.js";
import { library as xe } from "@fortawesome/fontawesome-svg-core";
import { fas as ke } from "@fortawesome/free-solid-svg-icons";
const Ne = s(j), Oe = s(G), ze = s(W), Ee = s(Z), Le = s(Y), Ae = s(J), Fe = s(K), Ve = s(Q), qe = s(X), je = s(ee), Ge = s(ne), He = s(se), Pe = s(oe), We = {
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
}, Qe = /* @__PURE__ */ x({
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
  setup(e, { expose: n }) {
    const o = e, m = b(() => o.icon ?? We[o.type]), a = y(!0), i = y(null), c = y(0), {
      topOffset: r,
      bottomOffset: f
    } = he({
      boxHeight: c,
      offset: o.offset,
      getLastBottomOffset: Ce(on, o)
    }), u = b(() => ({
      top: H(r.value),
      zIndex: o.zIndex
    })), A = ae(a, (t) => {
      t || (c.value = -o.offset);
    });
    $e(document, "keydown", (t) => {
      t.key === "Escape" && a.value && d();
    }), De(i, () => {
      c.value = i.value.getBoundingClientRect().height ?? 0;
    }), ie(() => {
      F(), w();
    }), ce(() => {
      C(), A();
    });
    function d() {
      a.value = !1;
    }
    function F() {
      a.value = !0;
    }
    let v = null;
    function w() {
      o.duration > 0 && (v = be(d, o.duration));
    }
    function C() {
      v && clearTimeout(v);
    }
    return n({
      close: d,
      bottomOffset: f
    }), (t, D) => (U(), T(re, { to: "body" }, [
      h(le, {
        appear: "",
        name: t.transitionName,
        onAfterLeave: D[0] || (D[0] = (dn) => !a.value && _(N)(t.onDestory) && t.onDestory())
      }, {
        default: me(() => [
          fe($("div", {
            ref_key: "messageRef",
            ref: i,
            role: "alert",
            class: ue(["u-message", [
              `u-message--${t.type}`,
              { "is-plain": t.plain },
              { "is-center": t.center },
              t.customClass
            ]]),
            style: de(u.value),
            onMouseenter: C,
            onMouseleave: w
          }, [
            $("div", Ye, [
              h(_(I), { icon: m.value }, null, 8, ["icon"])
            ]),
            $("div", Je, [
              _e(t.$slots, "default", {}, () => [
                t.message ? (U(), T(_(sn), {
                  key: 0,
                  vnode: t.message
                }, null, 8, ["vnode"])) : B("", !0)
              ])
            ]),
            t.showClose ? (U(), ge("div", Ke, [
              h(_(I), {
                icon: "close",
                onClick: pe(d, ["stop"])
              })
            ])) : B("", !0)
          ], 38), [
            [ve, a.value]
          ])
        ]),
        _: 3
      }, 8, ["name"])
    ]));
  }
}), { nextZIndex: Xe } = Ie(), l = ye([]), en = {
  type: "info",
  duration: 3e3,
  offset: 10,
  transitionName: "fade-up"
}, L = (e) => {
  const n = !e || Ue(e) || z(e) ? { message: e } : e;
  return { ...en, ...n };
}, nn = (e) => {
  const n = we().value, o = document.createElement("div"), m = () => {
    const u = E(l, { id: n });
    u !== -1 && (l.splice(u, 1), g(null, o));
  }, a = {
    ...e,
    id: n,
    zIndex: Xe(),
    onDestory: m
  }, i = k(Qe, a);
  g(i, o);
  const c = i.component;
  return {
    id: n,
    props: a,
    handler: {
      close: () => c.exposed.close()
    },
    vm: c,
    vnode: i
  };
}, p = (e = {}) => {
  e = L(e);
  const n = nn(e);
  return l.push(n), n.handler;
};
function on() {
  const e = E(l, { id: this.id });
  return e <= 0 ? 0 : Be(l, [e - 1, "vm", "exposed", "bottomOffset", "value"]);
}
O(Ze, (e) => Te(p, e, (n = {}) => p({ ...L(n), type: e })));
function tn(e) {
  O(l, (n) => {
    if (n.props.type === e) {
      n.handler.close();
      return;
    }
    n.handler.close();
  });
}
p.closeAll = tn;
const sn = x({
  props: {
    vnode: {
      type: [String, Object, Function],
      required: !0
    }
  },
  setup(e) {
    return () => N(e.vnode) ? e.vnode() : e.vnode;
  }
}), an = S(p, "$message"), cn = s(Se);
let rn = 2006;
const ln = (e = {}) => {
  const n = (e == null ? void 0 : e.single) ?? !0;
  let o = (z(e == null ? void 0 : e.appendTo) ? document.querySelector(e.appendTo) : e == null ? void 0 : e.appendTo) || document.body;
  if (!n) {
    const f = document.createElement("div");
    o.appendChild(f), o = f;
  }
  const m = M(c, (e == null ? void 0 : e.openDelay) || 100), a = M(r, (e == null ? void 0 : e.closeDelay) || 100), i = {
    ...e,
    zIndex: rn++,
    open: m,
    close: a
  };
  function c() {
    g(k(R, i), o), !n && o.remove();
  }
  function r() {
    g(null, o);
  }
  return n && r(), c(), {
    close: r
  };
}, mn = S(ln, "$dialog"), fn = s(R), un = [
  V,
  q,
  Ne,
  Oe,
  I,
  ze,
  Ee,
  Le,
  Ae,
  Fe,
  Ve,
  qe,
  je,
  Ge,
  te,
  He,
  Pe,
  an,
  cn,
  fn,
  mn
];
xe.add(ke, Me, Re);
const zn = P(un);
export {
  sn as RenderVNode,
  V as UButton,
  q as UButtonGroup,
  ze as UCard,
  Pe as UCodeEditor,
  je as UCollapse,
  Ge as UCollapseItem,
  fn as UDialog,
  mn as UDialogFn,
  Fe as UDropdown,
  qe as UDropdownItem,
  Ve as UDropdownMenu,
  I as UIcon,
  Ee as UInput,
  Ne as ULayout,
  an as UMessage,
  He as UPopconfirm,
  Oe as URegion,
  cn as USlider,
  Ae as UTag,
  Le as UText,
  te as UTooltip,
  zn as default
};
