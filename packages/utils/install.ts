import { each } from "lodash-es";
import type { App, Plugin } from "vue";
import type { UConfigProviderProps } from "../components/config-provider/types";
import { provideGlobalConfig } from "../components/config-provider/hooks";

export type SFCWithInstall<T> = T & Plugin;

export function makeInstaller(components: Plugin[], opts?: UConfigProviderProps): Plugin {
  return ((app: App) => {
    each(components, component => app.use(component))
    if (opts)
      provideGlobalConfig(opts, app, true)
  }) as Plugin
}

/**
 * 添加vue install方法
 * @param   component         组件
 * @param   onBeforeInstall   install前回调
 */
export function withInstall<T>(component: T, onBeforeInstall?: (app: App) => void) {
  (component as SFCWithInstall<T>).install = (app: App) => {
    if (onBeforeInstall) {
      onBeforeInstall(app)
    }
    return app.component((component as any).name, component as Plugin)
  }
  return component as SFCWithInstall<T>
}

/**
 * 添加vue的全局函数
 * @param fn   函数
 * @param name 名称
 */
export function withInstallFunc<T>(fn: T, name: string) {
  (fn as SFCWithInstall<T>).install = (app: App) => {
    return app.config.globalProperties[name] = fn
  }
  return fn as SFCWithInstall<T>
}