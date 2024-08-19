export declare const ULayout: import('../../utils/core').SFCWithInstall<import('vue').DefineComponent<{
    col: {
        type: import('vue').PropType<number>;
        default: number;
    };
    mode: {
        type: import('vue').PropType<import('./types/const').LayoutMode>;
        default: string;
    };
    padding: {
        type: import('vue').PropType<number>;
        default: number;
    };
    gap: {
        type: import('vue').PropType<number>;
        default: number;
    };
}, {}, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    col: {
        type: import('vue').PropType<number>;
        default: number;
    };
    mode: {
        type: import('vue').PropType<import('./types/const').LayoutMode>;
        default: string;
    };
    padding: {
        type: import('vue').PropType<number>;
        default: number;
    };
    gap: {
        type: import('vue').PropType<number>;
        default: number;
    };
}>>, {
    col: number;
    mode: import('./types/const').LayoutMode;
    padding: number;
    gap: number;
}, {}>>;
export declare const URegion: import('../../utils/core').SFCWithInstall<{
    new (...args: any[]): import('vue').CreateComponentPublicInstance<Readonly<import('vue').ExtractPropTypes<{
        col: {
            type: import('vue').PropType<number>;
        };
        mode: {
            type: import('vue').PropType<import('./types/const').LayoutMode>;
        };
        region: {
            type: import('vue').PropType<import('./types/const').Region>;
            required: true;
        };
        width: {
            type: import('vue').PropType<number>;
        };
    }>>, {}, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & Readonly<import('vue').ExtractPropTypes<{
        col: {
            type: import('vue').PropType<number>;
        };
        mode: {
            type: import('vue').PropType<import('./types/const').LayoutMode>;
        };
        region: {
            type: import('vue').PropType<import('./types/const').Region>;
            required: true;
        };
        width: {
            type: import('vue').PropType<number>;
        };
    }>>, {}, true, {}, {}, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import('vue').ExtractPropTypes<{
        col: {
            type: import('vue').PropType<number>;
        };
        mode: {
            type: import('vue').PropType<import('./types/const').LayoutMode>;
        };
        region: {
            type: import('vue').PropType<import('./types/const').Region>;
            required: true;
        };
        width: {
            type: import('vue').PropType<number>;
        };
    }>>, {}, {}, {}, {}, {}>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import('vue').ComponentOptionsBase<Readonly<import('vue').ExtractPropTypes<{
    col: {
        type: import('vue').PropType<number>;
    };
    mode: {
        type: import('vue').PropType<import('./types/const').LayoutMode>;
    };
    region: {
        type: import('vue').PropType<import('./types/const').Region>;
        required: true;
    };
    width: {
        type: import('vue').PropType<number>;
    };
}>>, {}, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, {}, {}, string, {}> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
    $slots: {
        default?(_: {}): any;
    };
})>;
