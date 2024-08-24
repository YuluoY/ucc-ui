export declare const ULayout: import('@ucc-ui/utils/core').SFCWithInstall<import('vue').DefineComponent<{
    gap: {
        type: import('vue').PropType<number>;
        default: number;
    };
    padding: {
        type: import('vue').PropType<number>;
        default: number;
    };
    col: {
        type: import('vue').PropType<number>;
        default: number;
    };
    mode: {
        type: import('vue').PropType<import('./types/const').LayoutMode>;
        default: string;
    };
    fit: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
}, {}, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    gap: {
        type: import('vue').PropType<number>;
        default: number;
    };
    padding: {
        type: import('vue').PropType<number>;
        default: number;
    };
    col: {
        type: import('vue').PropType<number>;
        default: number;
    };
    mode: {
        type: import('vue').PropType<import('./types/const').LayoutMode>;
        default: string;
    };
    fit: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
}>>, {
    gap: number;
    padding: number;
    col: number;
    mode: import('./types/const').LayoutMode;
    fit: boolean;
}, {}>>;
export declare const URegion: import('@ucc-ui/utils/core').SFCWithInstall<{
    new (...args: any[]): import('vue').CreateComponentPublicInstance<Readonly<import('vue').ExtractPropTypes<{
        width: {
            type: import('vue').PropType<string | number>;
        };
        region: {
            type: import('vue').PropType<import('./types/const').RegionType>;
            required: true;
        };
        mode: {
            type: import('vue').PropType<import('./types/const').LayoutMode>;
        };
    }>>, {}, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & Readonly<import('vue').ExtractPropTypes<{
        width: {
            type: import('vue').PropType<string | number>;
        };
        region: {
            type: import('vue').PropType<import('./types/const').RegionType>;
            required: true;
        };
        mode: {
            type: import('vue').PropType<import('./types/const').LayoutMode>;
        };
    }>>, {}, true, {}, {}, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import('vue').ExtractPropTypes<{
        width: {
            type: import('vue').PropType<string | number>;
        };
        region: {
            type: import('vue').PropType<import('./types/const').RegionType>;
            required: true;
        };
        mode: {
            type: import('vue').PropType<import('./types/const').LayoutMode>;
        };
    }>>, {}, {}, {}, {}, {}>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import('vue').ComponentOptionsBase<Readonly<import('vue').ExtractPropTypes<{
    width: {
        type: import('vue').PropType<string | number>;
    };
    region: {
        type: import('vue').PropType<import('./types/const').RegionType>;
        required: true;
    };
    mode: {
        type: import('vue').PropType<import('./types/const').LayoutMode>;
    };
}>>, {}, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, {}, {}, string, {}> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
    $slots: {
        default?(_: {}): any;
    };
})>;
