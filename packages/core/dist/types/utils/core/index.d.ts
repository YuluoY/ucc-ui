import { App, Plugin } from 'vue';
export type SFCWithInstall<T> = T & Plugin;
export declare function makeInstaller(components: Plugin[]): Plugin;
/**
 * 添加vue install方法
 * @param   component         组件
 * @param   onBeforeInstall   install前回调
 */
export declare function withInstall<T>(component: T, onBeforeInstall?: (app: App) => void): SFCWithInstall<T>;
/**
 * 解析JSON
 * @param   str   字符串
 * @param   def   默认值
 */
export declare function parseJson(str: string, def?: any): any;
/**
 * 设置对象值 - 默认是新增属性，如果属性已存在则替换
 * @param   obj     对象
 * @param   path    属性路径
 * @param   val     值
 */
export declare function setObjByPath(obj: any, path: string | string[], val: any): any;
