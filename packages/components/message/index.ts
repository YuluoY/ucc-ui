import { withInstallFunc } from "../../utils";
import { defineComponent } from "vue";
import { isFunction } from "lodash-es";
import MessageFn from "./methods";
import { Global_Vars } from "../constants";

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

export const UMessageFn = withInstallFunc(MessageFn, Global_Vars.MESSAGE)

