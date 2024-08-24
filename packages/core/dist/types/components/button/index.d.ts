export declare const UButton: import('../../utils').SFCWithInstall<{
    new (...args: any[]): import('vue').CreateComponentPublicInstance<Readonly<import('vue').ExtractPropTypes<{
        link: {
            type: import('vue').PropType<boolean>;
        };
        icon: {
            type: import('vue').PropType<string>;
        };
        size: {
            type: import('vue').PropType<import('./types/const').ButtonSize>;
            default: string;
        };
        type: {
            type: import('vue').PropType<import('./types/const').ButtonType>;
        };
        color: {
            type: import('vue').PropType<string>;
        };
        tag: {
            type: import('vue').PropType<string>;
            default: string;
        };
        round: {
            type: import('vue').PropType<number | boolean>;
        };
        circle: {
            type: import('vue').PropType<boolean>;
        };
        plain: {
            type: import('vue').PropType<boolean>;
        };
        bg: {
            type: import('vue').PropType<boolean>;
        };
        disabled: {
            type: import('vue').PropType<boolean>;
        };
        loading: {
            type: import('vue').PropType<boolean>;
            default: boolean;
        };
        loadingIcon: {
            type: import('vue').PropType<string>;
            default: string;
        };
        autofocus: {
            type: import('vue').PropType<boolean>;
            default: boolean;
        };
        nativeType: {
            type: import('vue').PropType<string>;
            default: string;
        };
        autoInsertSpace: {
            type: import('vue').PropType<boolean>;
        };
        dark: {
            type: import('vue').PropType<boolean>;
        };
        iconStyle: {
            type: import('vue').PropType<Partial<import('vue').CSSProperties>>;
        };
        iconProps: {
            type: import('vue').PropType<import('../icon/types').UIconProps | Omit<import('../icon/types').UIconProps, "icon">>;
            default: () => {
                icon: string;
            };
        };
        iconPosition: {
            type: import('vue').PropType<import('./types/const').ButtonIconPosition>;
            default: string;
        };
        useThrottle: {
            type: import('vue').PropType<boolean>;
            default: boolean;
        };
        throttleTime: {
            type: import('vue').PropType<number>;
            default: number;
        };
        useDebounce: {
            type: import('vue').PropType<boolean>;
            default: boolean;
        };
        debounceTime: {
            type: import('vue').PropType<number>;
            default: number;
        };
        onClick: {
            type: import('vue').PropType<(e: MouseEvent) => void>;
        };
    }>> & {
        onClick?: ((val: MouseEvent) => any) | undefined;
    }, {
        ref: import('vue').Ref<HTMLButtonElement | void>;
    }, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
        click: (val: MouseEvent) => void;
    }, import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & Readonly<import('vue').ExtractPropTypes<{
        link: {
            type: import('vue').PropType<boolean>;
        };
        icon: {
            type: import('vue').PropType<string>;
        };
        size: {
            type: import('vue').PropType<import('./types/const').ButtonSize>;
            default: string;
        };
        type: {
            type: import('vue').PropType<import('./types/const').ButtonType>;
        };
        color: {
            type: import('vue').PropType<string>;
        };
        tag: {
            type: import('vue').PropType<string>;
            default: string;
        };
        round: {
            type: import('vue').PropType<number | boolean>;
        };
        circle: {
            type: import('vue').PropType<boolean>;
        };
        plain: {
            type: import('vue').PropType<boolean>;
        };
        bg: {
            type: import('vue').PropType<boolean>;
        };
        disabled: {
            type: import('vue').PropType<boolean>;
        };
        loading: {
            type: import('vue').PropType<boolean>;
            default: boolean;
        };
        loadingIcon: {
            type: import('vue').PropType<string>;
            default: string;
        };
        autofocus: {
            type: import('vue').PropType<boolean>;
            default: boolean;
        };
        nativeType: {
            type: import('vue').PropType<string>;
            default: string;
        };
        autoInsertSpace: {
            type: import('vue').PropType<boolean>;
        };
        dark: {
            type: import('vue').PropType<boolean>;
        };
        iconStyle: {
            type: import('vue').PropType<Partial<import('vue').CSSProperties>>;
        };
        iconProps: {
            type: import('vue').PropType<import('../icon/types').UIconProps | Omit<import('../icon/types').UIconProps, "icon">>;
            default: () => {
                icon: string;
            };
        };
        iconPosition: {
            type: import('vue').PropType<import('./types/const').ButtonIconPosition>;
            default: string;
        };
        useThrottle: {
            type: import('vue').PropType<boolean>;
            default: boolean;
        };
        throttleTime: {
            type: import('vue').PropType<number>;
            default: number;
        };
        useDebounce: {
            type: import('vue').PropType<boolean>;
            default: boolean;
        };
        debounceTime: {
            type: import('vue').PropType<number>;
            default: number;
        };
        onClick: {
            type: import('vue').PropType<(e: MouseEvent) => void>;
        };
    }>> & {
        onClick?: ((val: MouseEvent) => any) | undefined;
    }, {
        size: import('./types/const').ButtonSize;
        tag: string;
        loading: boolean;
        loadingIcon: string;
        autofocus: boolean;
        nativeType: string;
        iconProps: import('../icon/types').UIconProps | Omit<import('../icon/types').UIconProps, "icon">;
        iconPosition: import('./types/const').ButtonIconPosition;
        useThrottle: boolean;
        throttleTime: number;
        useDebounce: boolean;
        debounceTime: number;
    }, true, {}, {}, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import('vue').ExtractPropTypes<{
        link: {
            type: import('vue').PropType<boolean>;
        };
        icon: {
            type: import('vue').PropType<string>;
        };
        size: {
            type: import('vue').PropType<import('./types/const').ButtonSize>;
            default: string;
        };
        type: {
            type: import('vue').PropType<import('./types/const').ButtonType>;
        };
        color: {
            type: import('vue').PropType<string>;
        };
        tag: {
            type: import('vue').PropType<string>;
            default: string;
        };
        round: {
            type: import('vue').PropType<number | boolean>;
        };
        circle: {
            type: import('vue').PropType<boolean>;
        };
        plain: {
            type: import('vue').PropType<boolean>;
        };
        bg: {
            type: import('vue').PropType<boolean>;
        };
        disabled: {
            type: import('vue').PropType<boolean>;
        };
        loading: {
            type: import('vue').PropType<boolean>;
            default: boolean;
        };
        loadingIcon: {
            type: import('vue').PropType<string>;
            default: string;
        };
        autofocus: {
            type: import('vue').PropType<boolean>;
            default: boolean;
        };
        nativeType: {
            type: import('vue').PropType<string>;
            default: string;
        };
        autoInsertSpace: {
            type: import('vue').PropType<boolean>;
        };
        dark: {
            type: import('vue').PropType<boolean>;
        };
        iconStyle: {
            type: import('vue').PropType<Partial<import('vue').CSSProperties>>;
        };
        iconProps: {
            type: import('vue').PropType<import('../icon/types').UIconProps | Omit<import('../icon/types').UIconProps, "icon">>;
            default: () => {
                icon: string;
            };
        };
        iconPosition: {
            type: import('vue').PropType<import('./types/const').ButtonIconPosition>;
            default: string;
        };
        useThrottle: {
            type: import('vue').PropType<boolean>;
            default: boolean;
        };
        throttleTime: {
            type: import('vue').PropType<number>;
            default: number;
        };
        useDebounce: {
            type: import('vue').PropType<boolean>;
            default: boolean;
        };
        debounceTime: {
            type: import('vue').PropType<number>;
            default: number;
        };
        onClick: {
            type: import('vue').PropType<(e: MouseEvent) => void>;
        };
    }>> & {
        onClick?: ((val: MouseEvent) => any) | undefined;
    }, {
        ref: import('vue').Ref<HTMLButtonElement | void>;
    }, {}, {}, {}, {
        size: import('./types/const').ButtonSize;
        tag: string;
        loading: boolean;
        loadingIcon: string;
        autofocus: boolean;
        nativeType: string;
        iconProps: import('../icon/types').UIconProps | Omit<import('../icon/types').UIconProps, "icon">;
        iconPosition: import('./types/const').ButtonIconPosition;
        useThrottle: boolean;
        throttleTime: number;
        useDebounce: boolean;
        debounceTime: number;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import('vue').ComponentOptionsBase<Readonly<import('vue').ExtractPropTypes<{
    link: {
        type: import('vue').PropType<boolean>;
    };
    icon: {
        type: import('vue').PropType<string>;
    };
    size: {
        type: import('vue').PropType<import('./types/const').ButtonSize>;
        default: string;
    };
    type: {
        type: import('vue').PropType<import('./types/const').ButtonType>;
    };
    color: {
        type: import('vue').PropType<string>;
    };
    tag: {
        type: import('vue').PropType<string>;
        default: string;
    };
    round: {
        type: import('vue').PropType<number | boolean>;
    };
    circle: {
        type: import('vue').PropType<boolean>;
    };
    plain: {
        type: import('vue').PropType<boolean>;
    };
    bg: {
        type: import('vue').PropType<boolean>;
    };
    disabled: {
        type: import('vue').PropType<boolean>;
    };
    loading: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    loadingIcon: {
        type: import('vue').PropType<string>;
        default: string;
    };
    autofocus: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    nativeType: {
        type: import('vue').PropType<string>;
        default: string;
    };
    autoInsertSpace: {
        type: import('vue').PropType<boolean>;
    };
    dark: {
        type: import('vue').PropType<boolean>;
    };
    iconStyle: {
        type: import('vue').PropType<Partial<import('vue').CSSProperties>>;
    };
    iconProps: {
        type: import('vue').PropType<import('../icon/types').UIconProps | Omit<import('../icon/types').UIconProps, "icon">>;
        default: () => {
            icon: string;
        };
    };
    iconPosition: {
        type: import('vue').PropType<import('./types/const').ButtonIconPosition>;
        default: string;
    };
    useThrottle: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    throttleTime: {
        type: import('vue').PropType<number>;
        default: number;
    };
    useDebounce: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    debounceTime: {
        type: import('vue').PropType<number>;
        default: number;
    };
    onClick: {
        type: import('vue').PropType<(e: MouseEvent) => void>;
    };
}>> & {
    onClick?: ((val: MouseEvent) => any) | undefined;
}, {
    ref: import('vue').Ref<HTMLButtonElement | void>;
}, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    click: (val: MouseEvent) => void;
}, string, {
    size: import('./types/const').ButtonSize;
    tag: string;
    loading: boolean;
    loadingIcon: string;
    autofocus: boolean;
    nativeType: string;
    iconProps: import('../icon/types').UIconProps | Omit<import('../icon/types').UIconProps, "icon">;
    iconPosition: import('./types/const').ButtonIconPosition;
    useThrottle: boolean;
    throttleTime: number;
    useDebounce: boolean;
    debounceTime: number;
}, {}, string, {}> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
    $slots: Readonly<Record<string, any>> & Record<string, any>;
})>;
export declare const UButtonGroup: import('../../utils').SFCWithInstall<{
    new (...args: any[]): import('vue').CreateComponentPublicInstance<Readonly<import('vue').ExtractPropTypes<{}>>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & Readonly<import('vue').ExtractPropTypes<{}>>, {}, true, {}, {}, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import('vue').ExtractPropTypes<{}>>, {}, {}, {}, {}, {}>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import('vue').ComponentOptionsBase<Readonly<import('vue').ExtractPropTypes<{}>>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, {}, {}, string, {}> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
    $slots: {
        default?(_: {}): any;
    };
})>;
