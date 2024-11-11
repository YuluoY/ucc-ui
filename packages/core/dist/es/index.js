import { g as V, _ as M, a as q, U as Z } from "./Dialog-CaI_6_Zw.js";
import { _ as G } from "./Layout-DkfFICXG.js";
import { _ as H } from "./Region-BhrLcpPz.js";
import { w as t, p as P, a as R, m as W } from "./utils-C5GgLhol.js";
import { defineComponent as S, computed as T, ref as y, watch as j, onMounted as Y, onBeforeUnmount as J, openBlock as U, createBlock as b, Teleport as K, createVNode as h, Transition as Q, unref as _, withCtx as X, withDirectives as ee, createElementVNode as $, normalizeClass as oe, normalizeStyle as ne, renderSlot as te, createCommentVNode as B, createElementBlock as se, withModifiers as ae, vShow as ie, shallowReactive as ce, isVNode as re, h as k, render as g } from "vue";
import { U as I } from "./Button-CpHZfDrA.js";
import { _ as le } from "./Card-DnKiA7uC.js";
import { _ as me } from "./Input-3BU792YO.js";
import { _ as fe } from "./Text-DecIS8op.js";
import { _ as ue } from "./Tag-BovOJcYq.js";
import { _ as de } from "./Dropdown-BiVnDu_L.js";
import { _ as _e } from "./DropdownMenu-CHycqHx6.js";
import { _ as ge } from "./DropdownItem-Br0aklVA.js";
import { _ as pe } from "./Collapse-RsZZjbKX.js";
import { _ as ve } from "./CollapseItem-BCpjRDiA.js";
import { _ as ye, U as Ue } from "./CodeEditor-_QZwkD_1.js";
import { _ as he } from "./Popconfirm-BHHEbNiy.js";
import { f as $e, a as Ie, g as we, u as Ce } from "./hooks-9KR2Pi-u.js";
import { k as De, u as Te, s as be, h as N, r as O, v as Be, g as z, w as E, x as xe, d as x, y as Me, z as Re } from "./vendors-fWCrTzlN.js";
import { _ as Se } from "./Slider-BFBIEUxq.js";
import { _ as ke } from "./Top-Bc1IobnM.js";
import { _ as Ne } from "./Badge-1LolU0wt.js";
import { library as Oe } from "@fortawesome/fontawesome-svg-core";
import { fas as ze } from "@fortawesome/free-solid-svg-icons";
const Ee = t(G), Le = t(H), Ae = t(le), Fe = t(me), Ve = t(fe), qe = t(ue), Ze = t(de), Ge = t(_e), He = t(ge), Pe = t(pe), We = t(ve), je = t(he), Ye = t(ye), Je = {
  info: ["fas", "circle-info"],
  success: ["fas", "circle-check"],
  warning: ["fas", "circle-exclamation"],
  error: ["fas", "circle-xmark"],
  primary: ["fas", "circle-question"]
}, Ke = {
  INFO: "info",
  SUCCESS: "success",
  WARNING: "warning",
  ERROR: "error",
  PRIMARY: "primary"
}, Qe = { class: "u-message-icon" }, Xe = { class: "u-message-content" }, eo = {
  key: 0,
  class: "u-message-close"
}, oo = /* @__PURE__ */ S({
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
    const n = e, m = T(() => n.icon ?? Je[n.type]), a = y(!0), i = y(null), c = y(0), {
      topOffset: r,
      bottomOffset: f
    } = $e({
      boxHeight: c,
      offset: n.offset,
      getLastBottomOffset: De(ao, n)
    }), u = T(() => ({
      top: P(r.value),
      zIndex: n.zIndex
    })), A = j(a, (s) => {
      s || (c.value = -n.offset);
    });
    Ie(document, "keydown", (s) => {
      s.key === "Escape" && a.value && d();
    }), Te(i, () => {
      c.value = i.value.getBoundingClientRect().height ?? 0;
    }), Y(() => {
      F(), w();
    }), J(() => {
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
      n.duration > 0 && (v = be(d, n.duration));
    }
    function C() {
      v && clearTimeout(v);
    }
    return o({
      close: d,
      bottomOffset: f
    }), (s, D) => (U(), b(K, { to: "body" }, [
      h(Q, {
        appear: "",
        name: s.transitionName,
        onAfterLeave: D[0] || (D[0] = (vo) => !a.value && _(N)(s.onDestory) && s.onDestory())
      }, {
        default: X(() => [
          ee($("div", {
            ref_key: "messageRef",
            ref: i,
            role: "alert",
            class: oe(["u-message", [
              `u-message--${s.type}`,
              { "is-plain": s.plain },
              { "is-center": s.center },
              s.customClass
            ]]),
            style: ne(u.value),
            onMouseenter: C,
            onMouseleave: w
          }, [
            $("div", Qe, [
              h(_(I), { icon: m.value }, null, 8, ["icon"])
            ]),
            $("div", Xe, [
              te(s.$slots, "default", {}, () => [
                s.message ? (U(), b(_(co), {
                  key: 0,
                  vnode: s.message
                }, null, 8, ["vnode"])) : B("", !0)
              ])
            ]),
            s.showClose ? (U(), se("div", eo, [
              h(_(I), {
                icon: "close",
                onClick: ae(d, ["stop"])
              })
            ])) : B("", !0)
          ], 38), [
            [ie, a.value]
          ])
        ]),
        _: 3
      }, 8, ["name"])
    ]));
  }
}), { nextZIndex: no } = we(), l = ce([]), to = {
  type: "info",
  duration: 3e3,
  offset: 10,
  transitionName: "fade-up"
}, L = (e) => {
  const o = !e || re(e) || z(e) ? { message: e } : e;
  return { ...to, ...o };
}, so = (e) => {
  const o = Ce().value, n = document.createElement("div"), m = () => {
    const u = E(l, { id: o });
    u !== -1 && (l.splice(u, 1), g(null, n));
  }, a = {
    ...e,
    id: o,
    zIndex: no(),
    onDestory: m
  }, i = k(oo, a);
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
  const o = so(e);
  return l.push(o), o.handler;
};
function ao() {
  const e = E(l, { id: this.id });
  return e <= 0 ? 0 : xe(l, [e - 1, "vm", "exposed", "bottomOffset", "value"]);
}
O(Ke, (e) => Be(p, e, (o = {}) => p({ ...L(o), type: e })));
function io(e) {
  O(l, (o) => {
    if (o.props.type === e) {
      o.handler.close();
      return;
    }
    o.handler.close();
  });
}
p.closeAll = io;
const co = S({
  props: {
    vnode: {
      type: [String, Object, Function],
      required: !0
    }
  },
  setup(e) {
    return () => N(e.vnode) ? e.vnode() : e.vnode;
  }
}), ro = R(p, "$message"), lo = t(Se), mo = (e = {}) => {
  const o = (e == null ? void 0 : e.single) ?? !0;
  let n = (z(e == null ? void 0 : e.appendTo) ? document.querySelector(e.appendTo) : e == null ? void 0 : e.appendTo) || document.body;
  if (!o) {
    const f = document.createElement("div");
    n.appendChild(f), n = f;
  }
  const m = x(c, (e == null ? void 0 : e.openDelay) || 100), a = x(r, (e == null ? void 0 : e.closeDelay) || 100), i = {
    ...e,
    zIndex: V(),
    open: m,
    close: a
  };
  function c() {
    g(k(M, i), n), !o && n.remove();
  }
  function r() {
    g(null, n);
  }
  return o && r(), c(), {
    close: r
  };
}, fo = R(mo, "$dialog"), uo = t(M), _o = t(ke), go = t(Ne), po = [
  q,
  Z,
  Ee,
  Le,
  I,
  Ae,
  Fe,
  Ve,
  qe,
  Ze,
  Ge,
  He,
  Pe,
  We,
  Ue,
  je,
  Ye,
  ro,
  lo,
  uo,
  fo,
  _o,
  go
];
Oe.add(ze, Me, Re);
const qo = W(po);
export {
  co as RenderVNode,
  go as UBadge,
  q as UButton,
  Z as UButtonGroup,
  Ae as UCard,
  Ye as UCodeEditor,
  Pe as UCollapse,
  We as UCollapseItem,
  uo as UDialog,
  fo as UDialogFn,
  Ze as UDropdown,
  He as UDropdownItem,
  Ge as UDropdownMenu,
  I as UIcon,
  Fe as UInput,
  Ee as ULayout,
  ro as UMessage,
  je as UPopconfirm,
  Le as URegion,
  lo as USlider,
  qe as UTag,
  Ve as UText,
  Ue as UTooltip,
  _o as UTop,
  qo as default
};
