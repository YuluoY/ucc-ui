import { withInstallFunc } from "@ucc-ui/utils";
import { defineComponent } from "vue";
import { isFunction } from "lodash-es";
import Message from "./methods";

export const RenderVNode = defineComponent({
  props: {
    vnode: {
      type: [String, Object, Function],
      required: true
    }
  },
  setup(props) {
    return () => isFunction(props.vnode) ? props.vnode() : props.vnode 
  }
})

export const UMessage = withInstallFunc(Message, '$message')

