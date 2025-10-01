import type { InjectionKey, Ref } from 'vue'
import type { UConfigProviderProps } from './types'

export type ConfigProviderContext = Partial<UConfigProviderProps>

export const configProviderContextKey: InjectionKey<Ref<ConfigProviderContext>> = Symbol()