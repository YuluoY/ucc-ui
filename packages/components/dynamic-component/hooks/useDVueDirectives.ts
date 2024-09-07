import { isEffectObject, isFunction } from '@ucc-ui/utils';
import { reactive, type ComponentCustomProperties, type ComponentInternalInstance, type Reactive } from 'vue';
import type { UDVueDirectivesType } from '../types/const';
import type { UDynamicComponentProps } from '../types';


export interface UseDVueDirectivesOptions {
  key?: UDynamicComponentProps['__D_V_KEY__']
  instance?: ComponentInternalInstance | null
  directives?: UDynamicComponentProps['directives']
}

export type UDVueDirectivesMap = {
  [K in UDVueDirectivesType]: Reactive<any>
} & { [key: string]: any }

export interface UseDvueDirectivesResult  {
  extraProps?: Record<string, any>
  directiveMap?: Partial<UDVueDirectivesMap>
}

export interface UDVueDirectives {
  [key: UDynamicComponentProps['__D_V_KEY__'] & number]: Partial<UDVueDirectivesMap> 
}

export interface UGlobalProperties extends ComponentCustomProperties {
  $dVueDirectives?: UDVueDirectives
}

export default function useDVueDirectives({
  key,
  instance,
  directives
}: UseDVueDirectivesOptions): UseDvueDirectivesResult {

  if (!isEffectObject(directives) || !instance?.appContext) 
    return {}

  const directiveMap = reactive({}) as Partial<UDVueDirectivesMap>
  Object.keys(directives).forEach((k: string) => {
    directiveMap[k] = isFunction(directives[k]) ? (directives[k] as Function).call(instance) : directives[k]
  })

  const glob = instance.appContext.config.globalProperties as UGlobalProperties
  if (!glob.$dVueDirectives)
    glob.$dVueDirectives = { [key as any]: directiveMap } as UDVueDirectives
  else 
    glob.$dVueDirectives[key as any] = directiveMap

  const extraProps: Record<string, any> = {
    'd-v-key': key
  }
  
  /**
   * 改变组件存在状态
   * @param {boolean} exist 存在状态
   * @param {number}  delay 延迟时间
   */
  const changeExist = (exist?: boolean, delay: number = 0) => {
    setTimeout(() => directiveMap.isExist = exist ?? !directiveMap.isExist , delay)
  }

  /**
   * 改变组件显示状态
   */
  const changeShow = (show?: boolean) => {
    directiveMap.isShow = show ?? !directiveMap.isShow
  }

  Object.assign(directiveMap, {
    changeExist,
    changeShow
  })

  return {
    extraProps,
    directiveMap
  }
}