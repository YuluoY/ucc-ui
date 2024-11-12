import { g as P, _ as x, a as G, U as q } from "./Dialog-CaI_6_Zw.js";
import { _ as Z } from "./Layout-DkfFICXG.js";
import { _ as H } from "./Region-BhrLcpPz.js";
import { w as s, p as W, a as R, m as j } from "./utils-C5GgLhol.js";
import { defineComponent as O, computed as b, ref as y, watch as Y, onMounted as J, onBeforeUnmount as K, openBlock as U, createBlock as T, Teleport as Q, createVNode as h, Transition as X, unref as g, withCtx as ee, withDirectives as oe, createElementVNode as $, normalizeClass as ne, normalizeStyle as se, renderSlot as te, createCommentVNode as B, createElementBlock as ae, withModifiers as ce, vShow as ie, shallowReactive as re, isVNode as le, h as w, render as u } from "vue";
import { U as I } from "./Button-CpHZfDrA.js";
import { _ as me } from "./Card-DnKiA7uC.js";
import { _ as fe } from "./Input-3BU792YO.js";
import { _ as ue, U as de } from "./ReadProgress-BFRKSait.js";
import { _ as _e } from "./Tag-BovOJcYq.js";
import { _ as ge } from "./Dropdown-BiVnDu_L.js";
import { _ as pe } from "./DropdownMenu-CHycqHx6.js";
import { _ as ve } from "./DropdownItem-Br0aklVA.js";
import { _ as ye } from "./Collapse-RsZZjbKX.js";
import { _ as Ue } from "./CollapseItem-BCpjRDiA.js";
import { _ as he, U as $e } from "./CodeEditor-_QZwkD_1.js";
import { _ as Ie } from "./Popconfirm-BHHEbNiy.js";
import { f as Re, a as we, g as Ce, u as Se } from "./hooks-9KR2Pi-u.js";
import { k as De, u as be, s as Te, h as k, r as E, v as Be, g as N, w as z, x as Me, d as M, y as xe, z as Oe } from "./vendors-fWCrTzlN.js";
import { _ as ke } from "./Slider-BFBIEUxq.js";
import { _ as Ee } from "./Top-Bc1IobnM.js";
import { _ as Ne } from "./Badge-1LolU0wt.js";
import { library as ze } from "@fortawesome/fontawesome-svg-core";
import { fas as Ae } from "@fortawesome/free-solid-svg-icons";
const Ve = s(Z), Fe = s(H), Le = s(me), Pe = s(fe), Ge = s(_e), qe = s(ge), Ze = s(pe), He = s(ve), We = s(ye), je = s(Ue), Ye = s(Ie), Je = s(he), Ke = {
  info: ["fas", "circle-info"],
  success: ["fas", "circle-check"],
  warning: ["fas", "circle-exclamation"],
  error: ["fas", "circle-xmark"],
  primary: ["fas", "circle-question"]
}, Qe = {
  INFO: "info",
  SUCCESS: "success",
  WARNING: "warning",
  ERROR: "error",
  PRIMARY: "primary"
}, Xe = { class: "u-message-icon" }, eo = { class: "u-message-content" }, oo = {
  key: 0,
  class: "u-message-close"
}, no = /* @__PURE__ */ O({
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
    const n = e, m = b(() => n.icon ?? Ke[n.type]), a = y(!0), c = y(null), i = y(0), {
      topOffset: r,
      bottomOffset: f
    } = Re({
      boxHeight: i,
      offset: n.offset,
      getLastBottomOffset: De(co, n)
    }), d = b(() => ({
      top: W(r.value),
      zIndex: n.zIndex
    })), F = Y(a, (t) => {
      t || (i.value = -n.offset);
    });
    we(document, "keydown", (t) => {
      t.key === "Escape" && a.value && _();
    }), be(c, () => {
      i.value = c.value.getBoundingClientRect().height ?? 0;
    }), J(() => {
      L(), C();
    }), K(() => {
      S(), F();
    });
    function _() {
      a.value = !1;
    }
    function L() {
      a.value = !0;
    }
    let v = null;
    function C() {
      n.duration > 0 && (v = Te(_, n.duration));
    }
    function S() {
      v && clearTimeout(v);
    }
    return o({
      close: _,
      bottomOffset: f
    }), (t, D) => (U(), T(Q, { to: "body" }, [
      h(X, {
        appear: "",
        name: t.transitionName,
        onAfterLeave: D[0] || (D[0] = (Ro) => !a.value && g(k)(t.onDestory) && t.onDestory())
      }, {
        default: ee(() => [
          oe($("div", {
            ref_key: "messageRef",
            ref: c,
            role: "alert",
            class: ne(["u-message", [
              `u-message--${t.type}`,
              { "is-plain": t.plain },
              { "is-center": t.center },
              t.customClass
            ]]),
            style: se(d.value),
            onMouseenter: S,
            onMouseleave: C
          }, [
            $("div", Xe, [
              h(g(I), { icon: m.value }, null, 8, ["icon"])
            ]),
            $("div", eo, [
              te(t.$slots, "default", {}, () => [
                t.message ? (U(), T(g(fo), {
                  key: 0,
                  vnode: t.message
                }, null, 8, ["vnode"])) : B("", !0)
              ])
            ]),
            t.showClose ? (U(), ae("div", oo, [
              h(g(I), {
                icon: "close",
                onClick: ce(_, ["stop"])
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
}), { nextZIndex: so } = Ce(), l = re([]), to = {
  type: "info",
  duration: 3e3,
  offset: 10,
  transitionName: "fade-up"
}, A = (e) => {
  const o = !e || le(e) || N(e) ? { message: e } : e;
  return { ...to, ...o };
}, ao = (e) => {
  const o = Se().value, n = document.createElement("div"), m = () => {
    const d = z(l, { id: o });
    d !== -1 && (l.splice(d, 1), u(null, n));
  }, a = {
    ...e,
    id: o,
    zIndex: so(),
    onDestory: m
  }, c = w(no, a);
  u(c, n);
  const i = c.component;
  return {
    id: o,
    props: a,
    handler: {
      close: () => i.exposed.close()
    },
    vm: i,
    vnode: c
  };
}, p = (e = {}) => {
  e = A(e);
  const o = ao(e);
  return l.push(o), o.handler;
};
function co() {
  const e = z(l, { id: this.id });
  return e <= 0 ? 0 : Me(l, [e - 1, "vm", "exposed", "bottomOffset", "value"]);
}
E(Qe, (e) => Be(p, e, (o = {}) => p({ ...A(o), type: e })));
function io(e) {
  E(l, (o) => {
    if (o.props.type === e) {
      o.handler.close();
      return;
    }
    o.handler.close();
  });
}
p.closeAll = io;
const ro = "$dialog", lo = "$message", mo = "$progress", fo = O({
  props: {
    vnode: {
      type: [String, Object, Function],
      required: !0
    }
  },
  setup(e) {
    return () => k(e.vnode) ? e.vnode() : e.vnode;
  }
}), uo = R(p, lo), _o = s(ke), go = (e = {}) => {
  const o = (e == null ? void 0 : e.single) ?? !0;
  let n = (N(e == null ? void 0 : e.appendTo) ? document.querySelector(e.appendTo) : e == null ? void 0 : e.appendTo) || document.body;
  if (!o) {
    const f = document.createElement("div");
    n.appendChild(f), n = f;
  }
  const m = M(i, (e == null ? void 0 : e.openDelay) || 100), a = M(r, (e == null ? void 0 : e.closeDelay) || 100), c = {
    ...e,
    zIndex: P(),
    open: m,
    close: a
  };
  function i() {
    u(w(x, c), n), !o && n.remove();
  }
  function r() {
    u(null, n);
  }
  return o && r(), i(), {
    close: r
  };
}, po = R(go, ro), vo = s(x), yo = s(Ee), Uo = s(Ne), ho = (e) => {
  u(w(V, e), document.body);
}, V = s(ue), $o = R(ho, mo), Io = [
  G,
  q,
  Ve,
  Fe,
  I,
  Le,
  Pe,
  de,
  Ge,
  qe,
  Ze,
  He,
  We,
  je,
  $e,
  Ye,
  Je,
  uo,
  _o,
  vo,
  po,
  yo,
  Uo,
  V,
  $o
];
ze.add(Ae, xe, Oe);
const jo = j(Io);
export {
  fo as RenderVNode,
  Uo as UBadge,
  G as UButton,
  q as UButtonGroup,
  Le as UCard,
  Je as UCodeEditor,
  We as UCollapse,
  je as UCollapseItem,
  vo as UDialog,
  po as UDialogFn,
  qe as UDropdown,
  He as UDropdownItem,
  Ze as UDropdownMenu,
  I as UIcon,
  Pe as UInput,
  Ve as ULayout,
  uo as UMessage,
  Ye as UPopconfirm,
  V as UReadProgress,
  $o as UReadProgressFn,
  Fe as URegion,
  _o as USlider,
  Ge as UTag,
  de as UText,
  $e as UTooltip,
  yo as UTop,
  jo as default
};
