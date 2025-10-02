import { _ as _sfc_main$f, g as getNextZIndex, a as UButton, U as UButtonGroup } from "./Dialog-BGkktoQ8.js";
import { _ as _sfc_main$2 } from "./Layout-jHm5r85Z.js";
import { _ as _sfc_main$3 } from "./Region-BXhuJyXx.js";
import { w as withInstall, p as pxToRem, a as withInstallFunc, m as makeInstaller } from "./utils-o_5vkwAI.js";
import { defineComponent, computed, ref, watch, onMounted, onBeforeUnmount, createBlock, openBlock, Teleport, createVNode, Transition, unref, withCtx, withDirectives, createElementVNode, normalizeStyle, normalizeClass, createElementBlock, createCommentVNode, renderSlot, withModifiers, vShow, shallowReactive, isVNode, h, render } from "vue";
import { U as UIcon } from "./Button-CXGPBo3t.js";
import { _ as _sfc_main$4 } from "./Card-DaKkifSM.js";
import { _ as _sfc_main$5 } from "./Input-DTHqMVay.js";
import { _ as _sfc_main$i, U as UText } from "./ReadProgress-D45u7lvA.js";
import { _ as _sfc_main$6 } from "./Tag-Bjq3NdiA.js";
import { _ as _sfc_main$7 } from "./Dropdown-ee5eMvt9.js";
import { _ as _sfc_main$8 } from "./DropdownMenu-BLbBw42A.js";
import { _ as _sfc_main$9 } from "./DropdownItem-BjJs__xc.js";
import { _ as _sfc_main$a } from "./Collapse-CWz9mut1.js";
import { _ as _sfc_main$b } from "./CollapseItem-BVjUQvsA.js";
import { _ as _sfc_main$d, U as UTooltip } from "./CodeEditor-6cCehOd1.js";
import { _ as _sfc_main$c } from "./Popconfirm-BepVJ_1-.js";
import { _ as _sfc_main$j } from "./ConfigProvider-o6rzy9jK.js";
import { h as useOffset, a as useEventListener, i as useZIndex, u as useId } from "./hooks-DOw2AyNa.js";
import { r as bind, w as useResizeObserver, x as delay, j as isFunction, v as forEach, h as isString, y as findIndex, p as get, z as set, d as debounce, A as icons, B as icons$1 } from "./vendors-jwCjkr2S.js";
import { _ as _sfc_main$e } from "./Slider-D89F7yYc.js";
import { _ as _sfc_main$g } from "./Top-CuFt_d2Y.js";
import { _ as _sfc_main$h } from "./Badge-C2Yor9PZ.js";
import { _ as _sfc_main$k } from "./Form-4JXjm3Tj.js";
import { _ as _sfc_main$l } from "./FormItem-CLGHK1L2.js";
import { _ as _sfc_main$m } from "./Table-CMlw7jQF.js";
import { _ as _sfc_main$n } from "./Menu-DiNaQKjW.js";
import { _ as _sfc_main$o } from "./MenuItem-CvZMY7ll.js";
import { _ as _sfc_main$p } from "./SubMenu-rLcIkIwv.js";
import { _ as _sfc_main$q } from "./Timeline-D7b-X_Tt.js";
import { _ as _sfc_main$r } from "./TimelineItem-D8Z45rft.js";
/* empty css               */
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { E, D } from "./locale-DVvWKJ3J.js";
const ULayout = withInstall(_sfc_main$2);
const URegion = withInstall(_sfc_main$3);
const UCard = withInstall(_sfc_main$4);
const UInput = withInstall(_sfc_main$5);
const UTag = withInstall(_sfc_main$6);
const UDropdown = withInstall(_sfc_main$7);
const UDropdownMenu = withInstall(_sfc_main$8);
const UDropdownItem = withInstall(_sfc_main$9);
const UCollapse = withInstall(_sfc_main$a);
const UCollapseItem = withInstall(_sfc_main$b);
const UPopconfirm = withInstall(_sfc_main$c);
const UCodeEditor = withInstall(_sfc_main$d);
const DefaultIconMap = {
  info: ["fas", "circle-info"],
  success: ["fas", "circle-check"],
  warning: ["fas", "circle-exclamation"],
  error: ["fas", "circle-xmark"],
  primary: ["fas", "circle-question"]
};
const CMessageType = {
  INFO: "info",
  SUCCESS: "success",
  WARNING: "warning",
  ERROR: "error",
  PRIMARY: "primary"
};
const _hoisted_1$1 = { class: "u-message-icon" };
const _hoisted_2 = { class: "u-message-content" };
const _hoisted_3 = {
  key: 0,
  class: "u-message-close"
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  ...{
    name: "UMessage"
  },
  __name: "Message",
  props: {
    id: {},
    message: {},
    type: { default: "info" },
    plain: { type: Boolean, default: false },
    icon: {},
    dangerouslyUseHTMLString: { type: Boolean },
    customClass: {},
    duration: { default: 3e3 },
    showClose: { type: Boolean, default: true },
    center: { type: Boolean, default: false },
    zIndex: {},
    onDestory: {},
    offset: { default: 10 },
    appendTo: {},
    grouping: { type: Boolean },
    repeatNum: {},
    transitionName: { default: "fade-up" }
  },
  setup(__props, { expose: __expose }) {
    const props = __props;
    const _icon = computed(() => props.icon ?? DefaultIconMap[props.type]);
    const visible = ref(true);
    const messageRef = ref(null);
    const boxHeight = ref(0);
    const {
      topOffset,
      bottomOffset
    } = useOffset({
      boxHeight,
      offset: props.offset,
      getLastBottomOffset: bind(getLastBottomOffset, props)
    });
    const messageStyle = computed(() => ({
      top: pxToRem(topOffset.value),
      zIndex: props.zIndex
    }));
    const visibleWatcher = watch(visible, (val) => {
      if (!val)
        boxHeight.value = -props.offset;
    });
    useEventListener(document, "keydown", (e) => {
      if (e.key === "Escape" && visible.value)
        onClose();
    });
    useResizeObserver(messageRef, () => {
      boxHeight.value = messageRef.value.getBoundingClientRect().height ?? 0;
    });
    onMounted(() => {
      onShow();
      startTimer();
    });
    onBeforeUnmount(() => {
      clearTimer();
      visibleWatcher();
    });
    function onClose() {
      visible.value = false;
    }
    function onShow() {
      visible.value = true;
    }
    let timer = null;
    function startTimer() {
      if (props.duration > 0)
        timer = delay(onClose, props.duration);
    }
    function clearTimer() {
      if (timer)
        clearTimeout(timer);
    }
    __expose({
      close: onClose,
      bottomOffset
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(Teleport, { to: "body" }, [
        createVNode(Transition, {
          appear: "",
          name: __props.transitionName,
          onAfterLeave: _cache[0] || (_cache[0] = ($event) => !visible.value && unref(isFunction)(__props.onDestory) && __props.onDestory())
        }, {
          default: withCtx(() => [
            withDirectives(createElementVNode("div", {
              ref_key: "messageRef",
              ref: messageRef,
              role: "alert",
              class: normalizeClass(["u-message", [
                `u-message--${__props.type}`,
                { "is-plain": __props.plain },
                { "is-center": __props.center },
                __props.customClass
              ]]),
              style: normalizeStyle(messageStyle.value),
              onMouseenter: clearTimer,
              onMouseleave: startTimer
            }, [
              createElementVNode("div", _hoisted_1$1, [
                createVNode(unref(UIcon), { icon: _icon.value }, null, 8, ["icon"])
              ]),
              createElementVNode("div", _hoisted_2, [
                renderSlot(_ctx.$slots, "default", {}, () => [
                  __props.message ? (openBlock(), createBlock(unref(RenderVNode), {
                    key: 0,
                    vnode: __props.message
                  }, null, 8, ["vnode"])) : createCommentVNode("", true)
                ])
              ]),
              __props.showClose ? (openBlock(), createElementBlock("div", _hoisted_3, [
                createVNode(unref(UIcon), {
                  icon: "close",
                  onClick: withModifiers(onClose, ["stop"])
                })
              ])) : createCommentVNode("", true)
            ], 38), [
              [vShow, visible.value]
            ])
          ]),
          _: 3
        }, 8, ["name"])
      ]);
    };
  }
});
const { nextZIndex } = useZIndex();
const instances = shallowReactive([]);
const defaultOptions = {
  type: "info",
  duration: 3e3,
  offset: 10,
  transitionName: "fade-up"
};
const normalizeOptions = (options) => {
  const res = !options || isVNode(options) || isString(options) ? { message: options } : options;
  return { ...defaultOptions, ...res };
};
const createMessage = (props) => {
  const id = useId().value;
  const container = document.createElement("div");
  const destory = () => {
    const idx = findIndex(instances, { id });
    if (idx === -1) return;
    instances.splice(idx, 1);
    render(null, container);
  };
  const _props = {
    ...props,
    id,
    zIndex: nextZIndex(),
    onDestory: destory
  };
  const vnode = h(_sfc_main$1, _props);
  render(vnode, container);
  const vm = vnode.component;
  const handler = {
    close: () => vm.exposed.close()
  };
  const instance = {
    id,
    props: _props,
    handler,
    vm,
    vnode
  };
  return instance;
};
const MessageFn = (options = {}) => {
  options = normalizeOptions(options);
  const instance = createMessage(options);
  instances.push(instance);
  return instance.handler;
};
function getLastBottomOffset() {
  const idx = findIndex(instances, { id: this.id });
  if (idx <= 0) return 0;
  return get(instances, [idx - 1, "vm", "exposed", "bottomOffset", "value"]);
}
forEach(CMessageType, (type) => set(MessageFn, type, (opts = {}) => MessageFn({ ...normalizeOptions(opts), type })));
function closeAll(type) {
  forEach(instances, (ins) => {
    if (ins.props.type === type) {
      ins.handler.close();
      return;
    }
    ins.handler.close();
  });
}
MessageFn.closeAll = closeAll;
const Global_Vars = {
  DIALOG: "$dialog",
  // finished
  MESSAGE: "$message",
  // undo
  NOTIFICATION: "$notify",
  // undo
  PROGRESS: "$progress"
  // finished
};
const RenderVNode = defineComponent({
  props: {
    vnode: {
      type: [String, Object, Function],
      required: true
    }
  },
  setup(props) {
    return () => isFunction(props.vnode) ? props.vnode() : props.vnode;
  }
});
const UMessageFn = withInstallFunc(MessageFn, Global_Vars.MESSAGE);
const USlider = withInstall(_sfc_main$e);
const DialogFn = (props = {}) => {
  const isSingle = (props == null ? void 0 : props.single) ?? true;
  let container = (isString(props == null ? void 0 : props.appendTo) ? document.querySelector(props.appendTo) : props == null ? void 0 : props.appendTo) || document.body;
  if (!isSingle) {
    const div = document.createElement("div");
    container.appendChild(div);
    container = div;
  }
  const openDebounce = debounce(open, (props == null ? void 0 : props.openDelay) || 100);
  const closeDebounce = debounce(close, (props == null ? void 0 : props.closeDelay) || 100);
  const _props = {
    ...props,
    zIndex: getNextZIndex(),
    open: openDebounce,
    close: closeDebounce,
    onConfirm: async (close2) => {
      if (isFunction(props.confirm)) {
        const res = await props.confirm();
        if (res) close2();
      } else
        close2();
    }
  };
  function open() {
    render(h(_sfc_main$f, _props), container);
    !isSingle && container.remove();
  }
  function close() {
    render(null, container);
  }
  isSingle && close();
  open();
  return {
    close
  };
};
const UDialog = withInstall(_sfc_main$f);
const UDialogFn = withInstallFunc(DialogFn, Global_Vars.DIALOG);
const UTop = withInstall(_sfc_main$g);
const UBadge = withInstall(_sfc_main$h);
const ReadProgressFn = (props) => {
  const progressRef = ref(null);
  render(h(_sfc_main$i, {
    ...props,
    ref: (e) => progressRef.value = e
  }), document.body);
  return progressRef;
};
const UReadProgress = withInstall(_sfc_main$i);
const UReadProgressFn = withInstallFunc(ReadProgressFn, Global_Vars.PROGRESS);
const _hoisted_1 = { class: "u-notification" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    name: "UNotification"
  },
  __name: "Notification",
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1);
    };
  }
});
const NotificationFn = () => {
  return _sfc_main;
};
const UNotificationFn = withInstallFunc(NotificationFn, Global_Vars.NOTIFICATION);
const UConfigProvider = withInstall(_sfc_main$j);
const UForm = withInstall(_sfc_main$k);
const UFormItem = withInstall(_sfc_main$l);
const UTable = withInstall(_sfc_main$m);
const UMenu = withInstall(_sfc_main$n);
const UMenuItem = withInstall(_sfc_main$o);
const USubMenu = withInstall(_sfc_main$p);
const UTimeline = withInstall(_sfc_main$q);
const UTimelineItem = withInstall(_sfc_main$r);
const components = [
  UButton,
  UButtonGroup,
  ULayout,
  URegion,
  UIcon,
  UCard,
  UInput,
  UText,
  UTag,
  UDropdown,
  UDropdownMenu,
  UDropdownItem,
  UCollapse,
  UCollapseItem,
  UTooltip,
  UPopconfirm,
  UCodeEditor,
  USlider,
  UDialog,
  UTop,
  UBadge,
  UReadProgress,
  UConfigProvider,
  UForm,
  UFormItem,
  UTable,
  UMenu,
  UMenuItem,
  USubMenu,
  UTimeline,
  UTimelineItem,
  UMessageFn,
  UDialogFn,
  UReadProgressFn,
  UNotificationFn
];
library.add(fas, icons, icons$1);
const install = makeInstaller(components.map((v) => {
  var _a;
  return { ...v, name: ((_a = v.name) == null ? void 0 : _a.startsWith("U")) ? v.name : `U${v.name}` };
}));
export {
  RenderVNode,
  UBadge,
  UButton,
  UButtonGroup,
  UCard,
  UCodeEditor,
  UCollapse,
  UCollapseItem,
  UConfigProvider,
  UDialog,
  UDialogFn,
  UDropdown,
  UDropdownItem,
  UDropdownMenu,
  UForm,
  UFormItem,
  UIcon,
  UInput,
  ULayout,
  UMenu,
  UMenuItem,
  UMessageFn,
  UNotificationFn,
  UPopconfirm,
  UReadProgress,
  UReadProgressFn,
  URegion,
  USlider,
  USubMenu,
  UTable,
  UTag,
  UText,
  UTimeline,
  UTimelineItem,
  UTooltip,
  UTop,
  install as default,
  E as en,
  D as zhCn
};
