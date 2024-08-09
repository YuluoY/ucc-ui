import type { App, Plugin } from 'vue'
import { each } from 'lodash-es'

export type SFCWithInstall<T> = T & Plugin;

export function makeInstaller(components: Plugin[]): Plugin {
  return (app: App) => {
    each(components, component => app.use(component))
  }
}

export function withInstall<T>(component: T) {
  (component as SFCWithInstall<T>).install = (app: App) => app.component((component as any).name, component as Plugin)
  return component as SFCWithInstall<T>
}