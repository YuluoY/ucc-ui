import { inject, nextTick, onBeforeUnmount, provide, reactive, ref, watch, type ComponentInternalInstance, type Ref, type WatchStopHandle } from 'vue'
import type { UDynamicCompExposes, UDynamicCompProps, UDynamicCompRoot } from '../types'
import { DC_MODELVALUES_KEY, DC_RENDER_BACK_KEY } from '../types/const'
import { debounce, get, isEmpty, isEqual, isNil, isObject, isPlainObject, isString, set } from 'lodash-es'
import { restoreValue } from '../../../utils'

interface HandleModelValueOpts {
  ctx: any
  $root: UDynamicCompRoot | null
  namespace: string
}

export default function handleModelValue(
  this: UDynamicCompProps,
  opts: HandleModelValueOpts
): Pick<UDynamicCompExposes, 'modelValue' | 'modelValues' | 'setModelValue' | 'setModelValues' | 'updateModelValue'>
{

  const {
    ctx
  } = opts

  const { isRenderBack } = handleValueRenderBack.call(this)

  const {
    modelValues,
    _modelValues,
    modelValuesHandle,
    setModelValues
  } = handleValues.call(this, { isRenderBack, ...opts })

  const {
    modelValue,
    modelValueHandle,
    setModelValue,
    updateModelValue
  } = handleValue.call(this, { isRenderBack, modelValues, _modelValues, ctx })


  onBeforeUnmount(() =>
  {
    modelValueHandle && modelValueHandle()
    modelValuesHandle && modelValuesHandle()
  })

  return {
    modelValue,
    modelValues,
    setModelValue,
    setModelValues,
    updateModelValue
  }
}

function handleValues(
  this: UDynamicCompProps,
  opts: HandleModelValueOpts
): {
  modelValues: UDynamicCompExposes['modelValues']
  setModelValues:UDynamicCompExposes['setModelValues']
  _modelValues: Record<string, Ref<any>>
  modelValuesHandle: WatchStopHandle | null
}
{
  const {
    $root,
    namespace,
    ctx
  } = opts
  
  let modelValues: Record<string, any> | null = null
  let _modelValues: Record<string, Ref<any>> = {}
  let modelValuesHandle: WatchStopHandle | null = null

  if (this.modelValues)
  {
    if (isString(this.modelValues))
    {
      modelValues = reactive({})
      $root!.$modelValues[namespace as string] = modelValues
    }
    else if (isPlainObject(this.modelValues))
    {
      modelValues = reactive(this.modelValues)
      $root!.$modelValues[namespace as string] = modelValues
    }
    else
    
      throw new Error('modelValues must be a string or object')
    
    modelValuesHandle = watch(modelValues, val => ctx.emit('update:modelValues', val), { deep:true })
    provide(DC_MODELVALUES_KEY, [modelValues, _modelValues])
  }
  else
  
    [modelValues, _modelValues] = inject(DC_MODELVALUES_KEY, [null, {}]) as [Record<string, any>, Record<string, Ref<any>>]
  

  const setModelValues = (path: string, val: any) =>
  {
    set(_modelValues, path + '.value', val)
    set(modelValues, path, val)
  }

  return {
    modelValues,
    _modelValues,
    modelValuesHandle,
    setModelValues
  }
}

function handleValue(
  this: UDynamicCompProps,
  opts: {
    isRenderBack: boolean
    modelValues: Record<string, any> | null
    _modelValues: Record<string, Ref<any>>
    ctx: any
  }
): {
  modelValue: UDynamicCompExposes['modelValue']
  setModelValue: UDynamicCompExposes['setModelValue']
  updateModelValue: UDynamicCompExposes['updateModelValue']
  modelValueHandle: WatchStopHandle | null
}
{
  const {
    isRenderBack,
    modelValues,
    _modelValues,
    ctx
  } = opts

  const modelValue = ref('')
  let modelValueHandle: WatchStopHandle | null = null
  if (this.props.modelValue)
  {
    if (isPlainObject(this.props.modelValue))
      modelValue.value = restoreValue(this.props.modelValue.value)
  }

  if (isRenderBack)
  {
    const val = get(modelValues!, this.props.modelValue!.path)
    modelValue.value = isNil(val) ? modelValue.value : val
  }
  else
  {
    if (!this.props.isAsync)
    {
      set(modelValues!, this.props.modelValue!.path, this.props.modelValue?.value)
      modelValue.value = restoreValue(this.props.modelValue?.value)
    }
  }
  set(_modelValues!, this.props.modelValue!.path, modelValue)

  const updateModelValue = (val: any) =>
  {
    if (!this.props.modelValue?.path)
      return
    if (isNil(val))
      val = ''
    val = restoreValue(val)
    set(modelValues!, this.props.modelValue!.path, val)
    ctx.emit('update:modelValue', val)
    setTimeout(() => ctx.emit('change'), 0)

    console.table([{
      path: this.props.modelValue.path,
      value: val,
      type: typeof val
    }])
    console.log(modelValues)
  }

  nextTick(() =>
  {
    const debounceUpdateModelValue = debounce((val: any) => updateModelValue(val), 500)
    modelValueHandle = watch(modelValue, debounceUpdateModelValue, { deep:isObject(modelValue.value) })
  })

  const setModelValue = (val: any) =>
  {
    if (isEqual(modelValue.value, val))
      return
    modelValue.value = val
  }

  return {
    modelValue,
    modelValueHandle,
    updateModelValue,
    setModelValue
  }
}

function handleValueRenderBack(
  this: UDynamicCompProps
): {
  isRenderBack: boolean
}
{
  let isRenderBack = inject(DC_RENDER_BACK_KEY, null)
  if (isRenderBack === null)
  {
    isRenderBack = isPlainObject(this.modelValues) && !isEmpty(this.modelValues) ? true : false
    provide(DC_RENDER_BACK_KEY, isRenderBack)
  }
  return {
    isRenderBack
  }
}