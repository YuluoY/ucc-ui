import { computed, getCurrentInstance, inject, provide, ref, unref, type App, type MaybeRef, type Ref } from "vue";
import { configProviderContextKey, type ConfigProviderContext } from "../constants";
import { merge } from "lodash-es";
import type { TranslatePair } from "@ucc-ui/locale";
import { createI18n, i18nSymbol } from "vue3-i18n";
import DefLang from '@ucc-ui/locale/lang/zh-cn'

const DEFAULT_LANG = 'zh-cn'

const globalConfig = ref<ConfigProviderContext>()

export function useGlobalConfig<
  K extends keyof ConfigProviderContext,
  D extends ConfigProviderContext[K]
>(key: K, defaultValue: D): Ref<Exclude<ConfigProviderContext[K], void>>

export function useGlobalConfig(): Ref<ConfigProviderContext>;

export function useGlobalConfig(
  key?: keyof ConfigProviderContext,
  defaultValue = void 0
) {
  const config = getCurrentInstance() ? inject(configProviderContextKey, globalConfig) : globalConfig

  return key ? computed(() => config.value?.[key] ?? defaultValue) : config
}

const _createI18n = (opts?: ConfigProviderContext) => {
  const mergeMsg = (msg: TranslatePair) => merge(msg, opts?.extendsI18nMsg ?? {})

  if (!opts?.locale)
  {
    return createI18n({
      locale: DEFAULT_LANG,
      messages: mergeMsg({
        DEFAULT_LANG: DefLang.el
      })
    })
  }

  return createI18n({
    locale: opts.locale?.name || DEFAULT_LANG,
    messages: mergeMsg({
      [DEFAULT_LANG]: DefLang.el,
      [opts.locale?.name]: opts.locale?.el ?? {}
    })
  })
}

export function provideGlobalConfig(
  config: MaybeRef<ConfigProviderContext> = { locale: DefLang },
  app?: App,
  global = false
) {
  const instance = getCurrentInstance()
  const oldCfg = instance ? useGlobalConfig() : void 0
  const provideFn = app?.provide ?? (instance ? provide : void 0)

  if (!provideFn)
    throw new Error('ucc-ui: provideGlobalConfig must be called in setup or app.use')

  const context = computed(() => {
    const cfg = unref(config)
    if (!oldCfg?.value)
      return cfg
    return merge(oldCfg.value, cfg)
  })

  const i18n = computed(() => _createI18n(context.value))

  provideFn(configProviderContextKey, context)
  provideFn(i18nSymbol, i18n.value)

  if (app)
    app.use(i18n.value)
  if (global || !globalConfig.value)
    globalConfig.value = context.value
  return context
}