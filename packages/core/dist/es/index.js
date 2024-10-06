import { _ as D, U as z, a as L } from "./Dropdown-FZae21rT.js";
import { _ as A } from "./Layout-BS4CNbAW.js";
import { _ as V } from "./Region-B6HgwxDw.js";
import { w as s, p as F, g as q, m as j } from "./utils-BcOmP8Pb.js";
import { U as y } from "./Button-DCp4he4T.js";
import { _ as G } from "./Card-Dz3sMtsY.js";
import { _ as H } from "./Input-CPI7Bij4.js";
import { _ as P } from "./Text-DecIS8op.js";
import { _ as W } from "./Tag-CqYhTKx9.js";
import { _ as Z } from "./DropdownMenu-CHycqHx6.js";
import { _ as Y } from "./DropdownItem-BaSaGpGe.js";
import { _ as J } from "./Collapse-RsZZjbKX.js";
import { _ as K } from "./CollapseItem-ztaMfTep.js";
import { _ as Q, U as X } from "./CodeEditor-B2-KYrAv.js";
import { _ as ee } from "./Popconfirm-Bvt_PrhY.js";
import { defineComponent as b, computed as I, ref as _, watch as oe, onMounted as se, onBeforeUnmount as te, openBlock as g, createBlock as M, Transition as ne, unref as f, withCtx as ae, withDirectives as re, createElementVNode as v, normalizeClass as ie, normalizeStyle as ce, createVNode as B, renderSlot as le, createCommentVNode as R, createElementBlock as me, withModifiers as fe, vShow as ue, shallowReactive as de, isVNode as pe, h as _e, render as k } from "vue";
import { b as ge, c as ve, d as ye, u as he } from "./hooks-BwG80JHT.js";
import { g as Ue, u as Ce, j as $e, k as N, h as O, s as we, n as Ie, p as S, q as Me, r as Be, v as Re } from "./vendors-DyaD4XE9.js";
import ke from "./ModelComponent-CqiZ7xSf.js";
import be from "./StructComponent-Cl5cBU5P.js";
import { library as Ne } from "@fortawesome/fontawesome-svg-core";
import { fas as Oe } from "@fortawesome/free-solid-svg-icons";
const Se = s(A), Te = s(V), Ee = s(G), xe = s(H), De = s(P), ze = s(W), Le = s(D), Ae = s(Z), Ve = s(Y), Fe = s(J), qe = s(K), je = s(ee), Ge = s(Q), He = {
  info: ["fas", "circle-info"],
  success: ["fas", "circle-check"],
  warning: ["fas", "circle-exclamation"],
  error: ["fas", "circle-xmark"],
  primary: ["fas", "circle-question"]
}, Pe = {
  INFO: "info",
  SUCCESS: "success",
  WARNING: "warning",
  ERROR: "error",
  PRIMARY: "primary"
}, We = { class: "u-message-icon" }, Ze = { class: "u-message-content" }, Ye = {
  key: 0,
  class: "u-message-close"
}, Je = /* @__PURE__ */ b({
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
    offset: { default: 16 },
    appendTo: {},
    grouping: { type: Boolean },
    repeatNum: {},
    transitionName: { default: "fade-up" }
  },
  setup(e, { expose: o }) {
    const n = e, d = I(() => n.icon ?? He[n.type]), a = _(!0), r = _(null), c = _(0), {
      topOffset: h,
      bottomOffset: U
    } = ge({
      boxHeight: c,
      offset: n.offset,
      getLastBottomOffset: Ue(eo, n)
    }), i = I(() => ({
      top: F(h.value)
    })), E = oe(a, (t) => {
      t || (c.value = -n.offset);
    });
    ve(document, "keydown", (t) => {
      t.key === "Escape" && a.value && m();
    }), Ce(r, () => {
      c.value = r.value.getBoundingClientRect().height ?? 0;
    }), se(() => {
      x(), C();
    }), te(() => {
      $(), E();
    });
    function m() {
      a.value = !1;
    }
    function x() {
      a.value = !0;
    }
    let p = null;
    function C() {
      n.duration > 0 && (p = $e(m, n.duration));
    }
    function $() {
      p && clearTimeout(p);
    }
    return o({
      close: m,
      bottomOffset: U
    }), (t, w) => (g(), M(ne, {
      name: t.transitionName,
      onAfterLeave: w[0] || (w[0] = (io) => !a.value && f(N)(t.onDestory) && t.onDestory())
    }, {
      default: ae(() => [
        re(v("div", {
          ref_key: "messageRef",
          ref: r,
          role: "alert",
          class: ie(["u-message", [
            `u-message--${t.type}`,
            { "is-plain": t.plain },
            { "is-center": t.center }
          ]]),
          style: ce(i.value),
          onMouseenter: $,
          onMouseleave: C
        }, [
          v("div", We, [
            B(f(y), { icon: d.value }, null, 8, ["icon"])
          ]),
          v("div", Ze, [
            le(t.$slots, "default", {}, () => [
              t.message ? (g(), M(f(so), {
                key: 0,
                vnode: t.message
              }, null, 8, ["vnode"])) : R("", !0)
            ])
          ]),
          t.showClose ? (g(), me("div", Ye, [
            B(f(y), {
              icon: "close",
              onClick: fe(m, ["stop"])
            })
          ])) : R("", !0)
        ], 38), [
          [ue, a.value]
        ])
      ]),
      _: 3
    }, 8, ["name"]));
  }
}), { nextZIndex: Ke } = ye(), l = de([]), Qe = {
  type: "info",
  duration: 3e3,
  offset: 16,
  transitionName: "fade-up"
}, T = (e) => {
  const o = !e || pe(e) || Ie(e) ? { message: e } : e;
  return { ...Qe, ...o };
}, Xe = (e) => {
  const o = he().value, n = document.createElement("div"), d = () => {
    const i = S(l, { id: o });
    i !== -1 && (l.splice(i, 1), k(null, n));
  }, a = {
    ...e,
    id: o,
    zIndex: Ke(),
    onDestory: d
  }, r = _e(Je, a);
  k(r, n), document.body.appendChild(n.firstElementChild);
  const c = r.component;
  return {
    id: o,
    props: a,
    handler: {
      close: () => {
        var i;
        return (i = c.exposed) == null ? void 0 : i.close();
      }
    },
    vm: c,
    vnode: r
  };
}, u = (e = {}) => {
  e = T(e);
  const o = Xe(e);
  return l.push(o), o.handler;
};
function eo() {
  const e = S(l, { id: this.id });
  return e <= 0 ? 0 : Me(l, [e - 1, "vm", "exposed", "bottomOffset", "value"]);
}
O(Pe, (e) => we(u, e, (o = {}) => u({ ...T(o), type: e })));
function oo(e) {
  O(l, (o) => {
    if (o.props.type === e) {
      o.handler.close();
      return;
    }
    o.handler.close();
  });
}
u.closeAll = oo;
const so = b({
  props: {
    vnode: {
      type: [String, Object, Function],
      required: !0
    }
  },
  setup(e) {
    return () => N(e.vnode) ? e.vnode() : e.vnode;
  }
}), to = q(u, "$message"), no = s(ke), ao = s(be), ro = [
  z,
  L,
  Se,
  Te,
  y,
  Ee,
  xe,
  De,
  ze,
  Le,
  Ae,
  Ve,
  Fe,
  qe,
  X,
  je,
  Ge,
  to,
  no,
  ao
];
Ne.add(Oe, Be, Re);
const Oo = j(ro);
export {
  so as RenderVNode,
  z as UButton,
  L as UButtonGroup,
  Ee as UCard,
  Ge as UCodeEditor,
  Fe as UCollapse,
  qe as UCollapseItem,
  Le as UDropdown,
  Ve as UDropdownItem,
  Ae as UDropdownMenu,
  y as UIcon,
  xe as UInput,
  Se as ULayout,
  to as UMessage,
  no as UModelComponent,
  je as UPopconfirm,
  Te as URegion,
  ao as UStructComponent,
  ze as UTag,
  De as UText,
  X as UTooltip,
  Oo as default
};
