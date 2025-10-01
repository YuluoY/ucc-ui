import { _ as B, g as q, a as j, U as W } from "./Dialog-ZqpXLq4x.js";
import { _ as Z } from "./Layout-cjKUze-J.js";
import { _ as H } from "./Region-oH3WGcp4.js";
import { w as o, p as Y, a as y, m as J } from "./utils-9trWAMuS.js";
import { defineComponent as S, computed as b, ref as U, watch as K, onMounted as Q, onBeforeUnmount as X, createBlock as D, openBlock as v, Teleport as ee, createVNode as I, Transition as ne, unref as g, withCtx as oe, withDirectives as te, createElementVNode as x, normalizeStyle as se, normalizeClass as ae, createElementBlock as F, createCommentVNode as M, renderSlot as ie, withModifiers as ce, vShow as re, shallowReactive as me, isVNode as fe, h as T, render as d } from "vue";
import { U as C } from "./Button-BBIsvXuF.js";
import { _ as le } from "./Card-DchGPxOa.js";
import { _ as ue } from "./Input-CggeqZhf.js";
import { _ as k, U as de } from "./ReadProgress-D90nk1tb.js";
import { _ as _e } from "./Tag-DBscnhof.js";
import { _ as ge } from "./Dropdown-DYs_2JH9.js";
import { _ as Ue } from "./DropdownMenu-WYbxGISa.js";
import { _ as ve } from "./DropdownItem-DuMaECWh.js";
import { _ as pe } from "./Collapse-CUgxKAn3.js";
import { _ as ye } from "./CollapseItem-Dy3Mf0YG.js";
import { _ as $e, U as he } from "./CodeEditor-D59JOQPr.js";
import { _ as Ie } from "./Popconfirm-C9RBWjK5.js";
import { _ as xe } from "./ConfigProvider-vgDXWmA4.js";
import { h as Ce, a as Se, i as Te, u as Re } from "./hooks-cKKswLjq.js";
import { r as Ne, w as we, x as Oe, j as R, v as A, h as z, y as G, p as be, z as De, d as E, A as Me, B as Ee } from "./vendors-D2NGRUOs.js";
import { _ as Be } from "./Slider-MXxVE45P.js";
import { _ as Fe } from "./Top-J7it1qXU.js";
import { _ as ke } from "./Badge-CZZ0s8gs.js";
import { _ as Ae } from "./Form-CbbIh2Zv.js";
import { _ as ze } from "./FormItem-CI4EUeUS.js";
import { _ as Ge } from "./Table-D9dobqKq.js";
import { _ as Le } from "./Menu-80bieNeJ.js";
import { _ as Pe } from "./MenuItem-B19qNgPf.js";
import { _ as Ve } from "./SubMenu-DEljJoYE.js";
import { _ as qe } from "./Timeline-COJ_VZCl.js";
import { _ as je } from "./TimelineItem-1aHP7ETO.js";
/* empty css               */
import { library as We } from "@fortawesome/fontawesome-svg-core";
import { fas as Ze } from "@fortawesome/free-solid-svg-icons";
import { E as No, D as wo } from "./locale-BeqhBZQs.js";
const He = o(Z), Ye = o(H), Je = o(le), Ke = o(ue), Qe = o(_e), Xe = o(ge), en = o(Ue), nn = o(ve), on = o(pe), tn = o(ye), sn = o(Ie), an = o($e), cn = {
  info: ["fas", "circle-info"],
  success: ["fas", "circle-check"],
  warning: ["fas", "circle-exclamation"],
  error: ["fas", "circle-xmark"],
  primary: ["fas", "circle-question"]
}, rn = {
  INFO: "info",
  SUCCESS: "success",
  WARNING: "warning",
  ERROR: "error",
  PRIMARY: "primary"
}, mn = { class: "u-message-icon" }, fn = { class: "u-message-content" }, ln = {
  key: 0,
  class: "u-message-close"
}, un = /* @__PURE__ */ S({
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
    const t = e, f = b(() => t.icon ?? cn[t.type]), s = U(!0), a = U(null), i = U(0), {
      topOffset: r,
      bottomOffset: c
    } = Ce({
      boxHeight: i,
      offset: t.offset,
      getLastBottomOffset: Ne(Un, t)
    }), l = b(() => ({
      top: Y(r.value),
      zIndex: t.zIndex
    })), P = K(s, (u) => {
      u || (i.value = -t.offset);
    });
    Se(document, "keydown", (u) => {
      u.key === "Escape" && s.value && _();
    }), we(a, () => {
      i.value = a.value.getBoundingClientRect().height ?? 0;
    }), Q(() => {
      V(), N();
    }), X(() => {
      w(), P();
    });
    function _() {
      s.value = !1;
    }
    function V() {
      s.value = !0;
    }
    let h = null;
    function N() {
      t.duration > 0 && (h = Oe(_, t.duration));
    }
    function w() {
      h && clearTimeout(h);
    }
    return n({
      close: _,
      bottomOffset: c
    }), (u, O) => (v(), D(ee, { to: "body" }, [
      I(ne, {
        appear: "",
        name: e.transitionName,
        onAfterLeave: O[0] || (O[0] = (Vn) => !s.value && g(R)(e.onDestory) && e.onDestory())
      }, {
        default: oe(() => [
          te(x("div", {
            ref_key: "messageRef",
            ref: a,
            role: "alert",
            class: ae(["u-message", [
              `u-message--${e.type}`,
              { "is-plain": e.plain },
              { "is-center": e.center },
              e.customClass
            ]]),
            style: se(l.value),
            onMouseenter: w,
            onMouseleave: N
          }, [
            x("div", mn, [
              I(g(C), { icon: f.value }, null, 8, ["icon"])
            ]),
            x("div", fn, [
              ie(u.$slots, "default", {}, () => [
                e.message ? (v(), D(g(pn), {
                  key: 0,
                  vnode: e.message
                }, null, 8, ["vnode"])) : M("", !0)
              ])
            ]),
            e.showClose ? (v(), F("div", ln, [
              I(g(C), {
                icon: "close",
                onClick: ce(_, ["stop"])
              })
            ])) : M("", !0)
          ], 38), [
            [re, s.value]
          ])
        ]),
        _: 3
      }, 8, ["name"])
    ]));
  }
}), { nextZIndex: dn } = Te(), m = me([]), _n = {
  type: "info",
  duration: 3e3,
  offset: 10,
  transitionName: "fade-up"
}, L = (e) => {
  const n = !e || fe(e) || z(e) ? { message: e } : e;
  return { ..._n, ...n };
}, gn = (e) => {
  const n = Re().value, t = document.createElement("div"), f = () => {
    const l = G(m, { id: n });
    l !== -1 && (m.splice(l, 1), d(null, t));
  }, s = {
    ...e,
    id: n,
    zIndex: dn(),
    onDestory: f
  }, a = T(un, s);
  d(a, t);
  const i = a.component;
  return {
    id: n,
    props: s,
    handler: {
      close: () => i.exposed.close()
    },
    vm: i,
    vnode: a
  };
}, p = (e = {}) => {
  e = L(e);
  const n = gn(e);
  return m.push(n), n.handler;
};
function Un() {
  const e = G(m, { id: this.id });
  return e <= 0 ? 0 : be(m, [e - 1, "vm", "exposed", "bottomOffset", "value"]);
}
A(rn, (e) => De(p, e, (n = {}) => p({ ...L(n), type: e })));
function vn(e) {
  A(m, (n) => {
    if (n.props.type === e) {
      n.handler.close();
      return;
    }
    n.handler.close();
  });
}
p.closeAll = vn;
const $ = {
  DIALOG: "$dialog",
  // finished
  MESSAGE: "$message",
  // undo
  NOTIFICATION: "$notify",
  // undo
  PROGRESS: "$progress"
  // finished
}, pn = S({
  props: {
    vnode: {
      type: [String, Object, Function],
      required: !0
    }
  },
  setup(e) {
    return () => R(e.vnode) ? e.vnode() : e.vnode;
  }
}), yn = y(p, $.MESSAGE), $n = o(Be), hn = (e = {}) => {
  const n = (e == null ? void 0 : e.single) ?? !0;
  let t = (z(e == null ? void 0 : e.appendTo) ? document.querySelector(e.appendTo) : e == null ? void 0 : e.appendTo) || document.body;
  if (!n) {
    const c = document.createElement("div");
    t.appendChild(c), t = c;
  }
  const f = E(i, (e == null ? void 0 : e.openDelay) || 100), s = E(r, (e == null ? void 0 : e.closeDelay) || 100), a = {
    ...e,
    zIndex: q(),
    open: f,
    close: s,
    onConfirm: async (c) => {
      R(e.confirm) ? await e.confirm() && c() : c();
    }
  };
  function i() {
    d(T(B, a), t), !n && t.remove();
  }
  function r() {
    d(null, t);
  }
  return n && r(), i(), {
    close: r
  };
}, In = o(B), xn = y(hn, $.DIALOG), Cn = o(Fe), Sn = o(ke), Tn = (e) => {
  const n = U(null);
  return d(T(k, {
    ...e,
    ref: (t) => n.value = t
  }), document.body), n;
}, Rn = o(k), Nn = y(Tn, $.PROGRESS), wn = { class: "u-notification" }, On = /* @__PURE__ */ S({
  name: "UNotification",
  __name: "Notification",
  setup(e) {
    return (n, t) => (v(), F("div", wn));
  }
}), bn = () => On, Dn = y(bn, $.NOTIFICATION), Mn = o(xe), En = o(Ae), Bn = o(ze), Fn = o(Ge), kn = o(Le), An = o(Pe), zn = o(Ve), Gn = o(qe), Ln = o(je), Pn = [
  j,
  W,
  He,
  Ye,
  C,
  Je,
  Ke,
  de,
  Qe,
  Xe,
  en,
  nn,
  on,
  tn,
  he,
  sn,
  an,
  $n,
  In,
  Cn,
  Sn,
  Rn,
  Mn,
  En,
  Bn,
  Fn,
  kn,
  An,
  zn,
  Gn,
  Ln,
  yn,
  xn,
  Nn,
  Dn
];
We.add(Ze, Me, Ee);
const So = J(Pn.map((e) => {
  var n;
  return { ...e, name: (n = e.name) != null && n.startsWith("U") ? e.name : `U${e.name}` };
}));
export {
  pn as RenderVNode,
  Sn as UBadge,
  j as UButton,
  W as UButtonGroup,
  Je as UCard,
  an as UCodeEditor,
  on as UCollapse,
  tn as UCollapseItem,
  Mn as UConfigProvider,
  In as UDialog,
  xn as UDialogFn,
  Xe as UDropdown,
  nn as UDropdownItem,
  en as UDropdownMenu,
  En as UForm,
  Bn as UFormItem,
  C as UIcon,
  Ke as UInput,
  He as ULayout,
  kn as UMenu,
  An as UMenuItem,
  yn as UMessageFn,
  Dn as UNotificationFn,
  sn as UPopconfirm,
  Rn as UReadProgress,
  Nn as UReadProgressFn,
  Ye as URegion,
  $n as USlider,
  zn as USubMenu,
  Fn as UTable,
  Qe as UTag,
  de as UText,
  Gn as UTimeline,
  Ln as UTimelineItem,
  he as UTooltip,
  Cn as UTop,
  So as default,
  No as en,
  wo as zhCn
};
