import { _ as E, g as V, a as q, U as j } from "./Dialog-ZqpXLq4x.js";
import { _ as W } from "./Layout-cjKUze-J.js";
import { _ as Z } from "./Region-oH3WGcp4.js";
import { w as o, p as H, a as p, m as Y } from "./utils-9trWAMuS.js";
import { defineComponent as B, computed as b, ref as U, watch as J, onMounted as K, onBeforeUnmount as Q, createBlock as D, openBlock as h, Teleport as X, createVNode as I, Transition as ee, unref as g, withCtx as ne, withDirectives as oe, createElementVNode as x, normalizeStyle as te, normalizeClass as se, createElementBlock as ae, createCommentVNode as M, renderSlot as ie, withModifiers as ce, vShow as re, shallowReactive as me, isVNode as fe, h as S, render as d } from "vue";
import { U as C } from "./Button-BBIsvXuF.js";
import { _ as le } from "./Card-DchGPxOa.js";
import { _ as ue } from "./Input-CggeqZhf.js";
import { _ as F, U as de } from "./ReadProgress-D90nk1tb.js";
import { _ as _e } from "./Tag-DBscnhof.js";
import { _ as ge } from "./Dropdown-DeJbOKxv.js";
import { _ as Ue } from "./DropdownMenu-WYbxGISa.js";
import { _ as ve } from "./DropdownItem-BiQ7xqLx.js";
import { _ as pe } from "./Collapse-CUgxKAn3.js";
import { _ as ye } from "./CollapseItem-Dy3Mf0YG.js";
import { _ as $e, U as he } from "./CodeEditor-BQilQwhb.js";
import { _ as Ie } from "./Popconfirm-bj-w3AS-.js";
import { _ as xe } from "./ConfigProvider-vgDXWmA4.js";
import { h as Ce, a as Se, i as Te, u as Re } from "./hooks-cKKswLjq.js";
import { r as we, w as Oe, x as be, j as T, v as k, h as A, y as z, p as De, z as Me, d as N, A as Ne, B as Ee } from "./vendors-D2NGRUOs.js";
import { _ as Be } from "./Slider-XFo9Zfxy.js";
import { _ as Fe } from "./Top-J7it1qXU.js";
import { _ as ke } from "./Badge-CZZ0s8gs.js";
import { _ as Ae } from "./Form-CbbIh2Zv.js";
import { _ as ze } from "./FormItem-CB0-daat.js";
import { _ as Ge } from "./Table-Dyv60mks.js";
import { _ as Le } from "./Menu-80bieNeJ.js";
import { _ as Pe } from "./MenuItem-B19qNgPf.js";
import { _ as Ve } from "./SubMenu-DEljJoYE.js";
import { _ as qe } from "./Timeline-COJ_VZCl.js";
import { _ as je } from "./TimelineItem-1aHP7ETO.js";
/* empty css               */
import { library as We } from "@fortawesome/fontawesome-svg-core";
import { fas as Ze } from "@fortawesome/free-solid-svg-icons";
import { E as To, D as Ro } from "./locale-BeqhBZQs.js";
const He = o(W), Ye = o(Z), Je = o(le), Ke = o(ue), Qe = o(_e), Xe = o(ge), en = o(Ue), nn = o(ve), on = o(pe), tn = o(ye), sn = o(Ie), an = o($e), cn = {
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
}, un = /* @__PURE__ */ B({
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
      getLastBottomOffset: we(Un, t)
    }), l = b(() => ({
      top: H(r.value),
      zIndex: t.zIndex
    })), L = J(s, (u) => {
      u || (i.value = -t.offset);
    });
    Se(document, "keydown", (u) => {
      u.key === "Escape" && s.value && _();
    }), Oe(a, () => {
      i.value = a.value.getBoundingClientRect().height ?? 0;
    }), K(() => {
      P(), R();
    }), Q(() => {
      w(), L();
    });
    function _() {
      s.value = !1;
    }
    function P() {
      s.value = !0;
    }
    let $ = null;
    function R() {
      t.duration > 0 && ($ = be(_, t.duration));
    }
    function w() {
      $ && clearTimeout($);
    }
    return n({
      close: _,
      bottomOffset: c
    }), (u, O) => (h(), D(X, { to: "body" }, [
      I(ee, {
        appear: "",
        name: e.transitionName,
        onAfterLeave: O[0] || (O[0] = (Ln) => !s.value && g(T)(e.onDestory) && e.onDestory())
      }, {
        default: ne(() => [
          oe(x("div", {
            ref_key: "messageRef",
            ref: a,
            role: "alert",
            class: se(["u-message", [
              `u-message--${e.type}`,
              { "is-plain": e.plain },
              { "is-center": e.center },
              e.customClass
            ]]),
            style: te(l.value),
            onMouseenter: w,
            onMouseleave: R
          }, [
            x("div", mn, [
              I(g(C), { icon: f.value }, null, 8, ["icon"])
            ]),
            x("div", fn, [
              ie(u.$slots, "default", {}, () => [
                e.message ? (h(), D(g(pn), {
                  key: 0,
                  vnode: e.message
                }, null, 8, ["vnode"])) : M("", !0)
              ])
            ]),
            e.showClose ? (h(), ae("div", ln, [
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
}, G = (e) => {
  const n = !e || fe(e) || A(e) ? { message: e } : e;
  return { ..._n, ...n };
}, gn = (e) => {
  const n = Re().value, t = document.createElement("div"), f = () => {
    const l = z(m, { id: n });
    l !== -1 && (m.splice(l, 1), d(null, t));
  }, s = {
    ...e,
    id: n,
    zIndex: dn(),
    onDestory: f
  }, a = S(un, s);
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
}, v = (e = {}) => {
  e = G(e);
  const n = gn(e);
  return m.push(n), n.handler;
};
function Un() {
  const e = z(m, { id: this.id });
  return e <= 0 ? 0 : De(m, [e - 1, "vm", "exposed", "bottomOffset", "value"]);
}
k(rn, (e) => Me(v, e, (n = {}) => v({ ...G(n), type: e })));
function vn(e) {
  k(m, (n) => {
    if (n.props.type === e) {
      n.handler.close();
      return;
    }
    n.handler.close();
  });
}
v.closeAll = vn;
const y = {
  DIALOG: "$dialog",
  // finished
  MESSAGE: "$message",
  // undo
  NOTIFICATION: "$notify",
  // undo
  PROGRESS: "$progress"
  // finished
}, pn = B({
  props: {
    vnode: {
      type: [String, Object, Function],
      required: !0
    }
  },
  setup(e) {
    return () => T(e.vnode) ? e.vnode() : e.vnode;
  }
}), yn = p(v, y.MESSAGE), $n = o(Be), hn = (e = {}) => {
  const n = (e == null ? void 0 : e.single) ?? !0;
  let t = (A(e == null ? void 0 : e.appendTo) ? document.querySelector(e.appendTo) : e == null ? void 0 : e.appendTo) || document.body;
  if (!n) {
    const c = document.createElement("div");
    t.appendChild(c), t = c;
  }
  const f = N(i, (e == null ? void 0 : e.openDelay) || 100), s = N(r, (e == null ? void 0 : e.closeDelay) || 100), a = {
    ...e,
    zIndex: V(),
    open: f,
    close: s,
    onConfirm: async (c) => {
      T(e.confirm) ? await e.confirm() && c() : c();
    }
  };
  function i() {
    d(S(E, a), t), !n && t.remove();
  }
  function r() {
    d(null, t);
  }
  return n && r(), i(), {
    close: r
  };
}, In = o(E), xn = p(hn, y.DIALOG), Cn = o(Fe), Sn = o(ke), Tn = (e) => {
  const n = U(null);
  return d(S(F, {
    ...e,
    ref: (t) => n.value = t
  }), document.body), n;
}, Rn = o(F), wn = p(Tn, y.PROGRESS), On = (e) => {
}, bn = p(On, y.NOTIFICATION), Dn = o(xe), Mn = o(Ae), Nn = o(ze), En = o(Ge), Bn = o(Le), Fn = o(Pe), kn = o(Ve), An = o(qe), zn = o(je), Gn = [
  q,
  j,
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
  Dn,
  Mn,
  Nn,
  En,
  Bn,
  Fn,
  kn,
  An,
  zn,
  yn,
  xn,
  wn,
  bn
];
We.add(Ze, Ne, Ee);
const xo = Y(Gn.map((e) => {
  var n;
  return { ...e, name: (n = e.name) != null && n.startsWith("U") ? e.name : `U${e.name}` };
}));
export {
  pn as RenderVNode,
  Sn as UBadge,
  q as UButton,
  j as UButtonGroup,
  Je as UCard,
  an as UCodeEditor,
  on as UCollapse,
  tn as UCollapseItem,
  Dn as UConfigProvider,
  In as UDialog,
  xn as UDialogFn,
  Xe as UDropdown,
  nn as UDropdownItem,
  en as UDropdownMenu,
  Mn as UForm,
  Nn as UFormItem,
  C as UIcon,
  Ke as UInput,
  He as ULayout,
  Bn as UMenu,
  Fn as UMenuItem,
  yn as UMessageFn,
  bn as UNotificationFn,
  sn as UPopconfirm,
  Rn as UReadProgress,
  wn as UReadProgressFn,
  Ye as URegion,
  $n as USlider,
  kn as USubMenu,
  En as UTable,
  Qe as UTag,
  de as UText,
  An as UTimeline,
  zn as UTimelineItem,
  he as UTooltip,
  Cn as UTop,
  xo as default,
  To as en,
  Ro as zhCn
};
