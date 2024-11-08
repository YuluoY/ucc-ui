import { _ as R, a as V, U as q } from "./Dialog-B5VI0sTu.js";
import { _ as j } from "./Layout-BQKgB6cp.js";
import { _ as G } from "./Region-CPoEiAs2.js";
import { w as t, p as H, a as S, m as P } from "./utils-D6lgkY3M.js";
import { defineComponent as x, computed as T, ref as y, watch as W, onMounted as Z, onBeforeUnmount as Y, openBlock as U, createBlock as b, Teleport as J, createVNode as h, Transition as K, unref as _, withCtx as Q, withDirectives as X, createElementVNode as $, normalizeClass as ee, normalizeStyle as oe, renderSlot as ne, createCommentVNode as B, createElementBlock as te, withModifiers as se, vShow as ae, shallowReactive as ie, isVNode as ce, h as k, render as g } from "vue";
import { U as I } from "./Button-BNe99Mfn.js";
import { _ as re } from "./Card-B8a0U4ih.js";
import { _ as le } from "./Input-BAF7_4p7.js";
import { _ as me } from "./Text-DecIS8op.js";
import { _ as fe } from "./Tag-B5Hqobo_.js";
import { _ as ue } from "./Dropdown-HcLbJlvh.js";
import { _ as de } from "./DropdownMenu-CHycqHx6.js";
import { _ as _e } from "./DropdownItem-BUQc0kP7.js";
import { _ as ge } from "./Collapse-RsZZjbKX.js";
import { _ as pe } from "./CollapseItem-Ckg1Te5b.js";
import { _ as ve, U as ye } from "./CodeEditor-gl6YEdGs.js";
import { _ as Ue } from "./Popconfirm-Cvue9lN8.js";
import { f as he, a as $e, g as Ie, u as we } from "./hooks-BUHPaJnD.js";
import { j as Ce, u as De, r as Te, g as N, q as O, s as be, i as z, v as E, w as Be, d as M, x as Me, y as Re } from "./vendors-DU5T3Hvp.js";
import { _ as Se } from "./Slider-D_b-71Ee.js";
import { _ as xe } from "./Top-C3ABI9KG.js";
import { library as ke } from "@fortawesome/fontawesome-svg-core";
import { fas as Ne } from "@fortawesome/free-solid-svg-icons";
const Oe = t(j), ze = t(G), Ee = t(re), Le = t(le), Ae = t(me), Fe = t(fe), Ve = t(ue), qe = t(de), je = t(_e), Ge = t(ge), He = t(pe), Pe = t(Ue), We = t(ve), Ze = {
  info: ["fas", "circle-info"],
  success: ["fas", "circle-check"],
  warning: ["fas", "circle-exclamation"],
  error: ["fas", "circle-xmark"],
  primary: ["fas", "circle-question"]
}, Ye = {
  INFO: "info",
  SUCCESS: "success",
  WARNING: "warning",
  ERROR: "error",
  PRIMARY: "primary"
}, Je = { class: "u-message-icon" }, Ke = { class: "u-message-content" }, Qe = {
  key: 0,
  class: "u-message-close"
}, Xe = /* @__PURE__ */ x({
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
    const n = e, m = T(() => n.icon ?? Ze[n.type]), a = y(!0), i = y(null), c = y(0), {
      topOffset: r,
      bottomOffset: f
    } = he({
      boxHeight: c,
      offset: n.offset,
      getLastBottomOffset: Ce(to, n)
    }), u = T(() => ({
      top: H(r.value),
      zIndex: n.zIndex
    })), A = W(a, (s) => {
      s || (c.value = -n.offset);
    });
    $e(document, "keydown", (s) => {
      s.key === "Escape" && a.value && d();
    }), De(i, () => {
      c.value = i.value.getBoundingClientRect().height ?? 0;
    }), Z(() => {
      F(), w();
    }), Y(() => {
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
      n.duration > 0 && (v = Te(d, n.duration));
    }
    function C() {
      v && clearTimeout(v);
    }
    return o({
      close: d,
      bottomOffset: f
    }), (s, D) => (U(), b(J, { to: "body" }, [
      h(K, {
        appear: "",
        name: s.transitionName,
        onAfterLeave: D[0] || (D[0] = (go) => !a.value && _(N)(s.onDestory) && s.onDestory())
      }, {
        default: Q(() => [
          X($("div", {
            ref_key: "messageRef",
            ref: i,
            role: "alert",
            class: ee(["u-message", [
              `u-message--${s.type}`,
              { "is-plain": s.plain },
              { "is-center": s.center },
              s.customClass
            ]]),
            style: oe(u.value),
            onMouseenter: C,
            onMouseleave: w
          }, [
            $("div", Je, [
              h(_(I), { icon: m.value }, null, 8, ["icon"])
            ]),
            $("div", Ke, [
              ne(s.$slots, "default", {}, () => [
                s.message ? (U(), b(_(ao), {
                  key: 0,
                  vnode: s.message
                }, null, 8, ["vnode"])) : B("", !0)
              ])
            ]),
            s.showClose ? (U(), te("div", Qe, [
              h(_(I), {
                icon: "close",
                onClick: se(d, ["stop"])
              })
            ])) : B("", !0)
          ], 38), [
            [ae, a.value]
          ])
        ]),
        _: 3
      }, 8, ["name"])
    ]));
  }
}), { nextZIndex: eo } = Ie(), l = ie([]), oo = {
  type: "info",
  duration: 3e3,
  offset: 10,
  transitionName: "fade-up"
}, L = (e) => {
  const o = !e || ce(e) || z(e) ? { message: e } : e;
  return { ...oo, ...o };
}, no = (e) => {
  const o = we().value, n = document.createElement("div"), m = () => {
    const u = E(l, { id: o });
    u !== -1 && (l.splice(u, 1), g(null, n));
  }, a = {
    ...e,
    id: o,
    zIndex: eo(),
    onDestory: m
  }, i = k(Xe, a);
  g(i, n);
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
  e = L(e);
  const o = no(e);
  return l.push(o), o.handler;
};
function to() {
  const e = E(l, { id: this.id });
  return e <= 0 ? 0 : Be(l, [e - 1, "vm", "exposed", "bottomOffset", "value"]);
}
O(Ye, (e) => be(p, e, (o = {}) => p({ ...L(o), type: e })));
function so(e) {
  O(l, (o) => {
    if (o.props.type === e) {
      o.handler.close();
      return;
    }
    o.handler.close();
  });
}
p.closeAll = so;
const ao = x({
  props: {
    vnode: {
      type: [String, Object, Function],
      required: !0
    }
  },
  setup(e) {
    return () => N(e.vnode) ? e.vnode() : e.vnode;
  }
}), io = S(p, "$message"), co = t(Se);
let ro = 2006;
const lo = (e = {}) => {
  const o = (e == null ? void 0 : e.single) ?? !0;
  let n = (z(e == null ? void 0 : e.appendTo) ? document.querySelector(e.appendTo) : e == null ? void 0 : e.appendTo) || document.body;
  if (!o) {
    const f = document.createElement("div");
    n.appendChild(f), n = f;
  }
  const m = M(c, (e == null ? void 0 : e.openDelay) || 100), a = M(r, (e == null ? void 0 : e.closeDelay) || 100), i = {
    ...e,
    zIndex: ro++,
    open: m,
    close: a
  };
  function c() {
    g(k(R, i), n), !o && n.remove();
  }
  function r() {
    g(null, n);
  }
  return o && r(), c(), {
    close: r
  };
}, mo = S(lo, "$dialog"), fo = t(R), uo = t(xe), _o = [
  V,
  q,
  Oe,
  ze,
  I,
  Ee,
  Le,
  Ae,
  Fe,
  Ve,
  qe,
  je,
  Ge,
  He,
  ye,
  Pe,
  We,
  io,
  co,
  fo,
  mo,
  uo
];
ke.add(Ne, Me, Re);
const Ao = P(_o);
export {
  ao as RenderVNode,
  V as UButton,
  q as UButtonGroup,
  Ee as UCard,
  We as UCodeEditor,
  Ge as UCollapse,
  He as UCollapseItem,
  fo as UDialog,
  mo as UDialogFn,
  Ve as UDropdown,
  je as UDropdownItem,
  qe as UDropdownMenu,
  I as UIcon,
  Le as UInput,
  Oe as ULayout,
  io as UMessage,
  Pe as UPopconfirm,
  ze as URegion,
  co as USlider,
  Fe as UTag,
  Ae as UText,
  ye as UTooltip,
  uo as UTop,
  Ao as default
};
