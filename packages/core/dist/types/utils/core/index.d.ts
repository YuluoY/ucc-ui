import { App, Plugin } from 'vue';
export type SFCWithInstall<T> = T & Plugin;
export declare function makeInstaller(components: Plugin[]): Plugin;
export declare function withInstall<T>(component: T, onBeforeInstall?: (app: App) => void): SFCWithInstall<T>;
