import { App, Plugin } from 'vue';
import { UConfigProviderProps } from '../components/config-provider/types';
export type SFCWithInstall<T> = T & Plugin;
export declare function makeInstaller(components: Plugin[], opts?: UConfigProviderProps): Plugin;
/**
 * 添加vue install方法
 * @param   component         组件
 * @param   onBeforeInstall   install前回调
 */
export declare function withInstall<T>(component: T, onBeforeInstall?: (app: App) => void): SFCWithInstall<T>;
/**
 * 添加vue的全局函数
 * @param fn   函数
 * @param name 名称
 */
export declare function withInstallFunc<T>(fn: T, name: string): SFCWithInstall<T>;
