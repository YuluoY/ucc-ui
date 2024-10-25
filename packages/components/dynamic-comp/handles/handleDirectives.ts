import { reactive, withDirectives, type ComponentInternalInstance, type Directive, type DirectiveArguments, type DirectiveHook, type Reactive } from "vue";
import type { Directives, DynamicCompCtxFn, DynamicCompDirectives, UDynamicCompProps } from "../types";
import { CDirectives } from "../types/const";
import { has, isArray, isBoolean, isFunction, isPlainObject } from "lodash-es";
import { nextTick } from "process";

interface HandleDirectivesOts {
  uid: string
  instance: ComponentInternalInstance | null
}

export default function handleDirectives(
  this: UDynamicCompProps,
  opts: HandleDirectivesOts
) {
  const {
    uid,
    instance
  } = opts

  const directives: Reactive<Partial<UDynamicCompProps['directives']> & {
    [key: string]: any
  }> = reactive({
    [CDirectives.V_IF]: true,
    [CDirectives.V_SHOW]: true
  })

  Object.keys(this.directives).forEach(key => {
    if (has(CDirectives, key)) {
      directives[key] = transDirective(key, (this.directives as any)[key])
    }
  })

  const transDirective = (
    directive: string,
    value: DynamicCompDirectives | DynamicCompCtxFn<DynamicCompDirectives>
  ): DynamicCompDirectives | null => {
    let newValue: DynamicCompDirectives | null = null
    if (isFunction(value)) {
      newValue = transDirective(directive, value.call(instance))
    } else if (isBoolean(value)) {
      newValue = value
    }
    return newValue
  }

  const setDirective = (
    directive: string,
    value: DynamicCompDirectives | DynamicCompCtxFn<DynamicCompDirectives>
  ) => {
    directives[directive] = transDirective(directive, value)
  }

  const onShow = (val?: boolean) => {
    directives[CDirectives.V_SHOW] = val ?? !directives[CDirectives.V_SHOW]
  }

  const onRefresh = (val?: boolean, time: number = 0) => {
    directives[CDirectives.V_IF] = val ?? !directives[CDirectives.V_IF]
    
    nextTick(() => {
      if (time) {
        setTimeout(() => directives[CDirectives.V_IF] = !directives[CDirectives.V_IF], time)
      } else {
        directives[CDirectives.V_IF] = !directives[CDirectives.V_IF]
      }
    })
  }

  return {
    directives,
    setDirective,
    onShow,
    onRefresh
  }
}