export declare const UButton: import('../../utils').SFCWithInstall<{
    new (...args: any[]): import('vue').CreateComponentPublicInstance<Readonly<import('vue').ExtractPropTypes<{
        link: {
            type: import('vue').PropType<boolean>;
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
        type: {
            type: import('vue').PropType<import('./types/const').ButtonType>;
        };
        size: {
            type: import('vue').PropType<import('./types/const').ButtonSize>;
            default: string;
        };
        iconPosition: {
            type: import('vue').PropType<import('./types/const').ButtonIconPosition>;
        };
        disabled: {
            type: import('vue').PropType<boolean>;
        };
        loading: {
            type: import('vue').PropType<boolean>;
        };
        loadingIcon: {
            type: import('vue').PropType<string>;
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
        color: {
            type: import('vue').PropType<string>;
        };
        dark: {
            type: import('vue').PropType<boolean>;
        };
        icon: {
            type: import('vue').PropType<string>;
        };
        iconStyle: {
            type: import('vue').PropType<Partial<import('vue').CSSProperties>>;
        };
        iconProps: {
            type: import('vue').PropType<Partial<import('../icon/types').UIconProps>>;
            default: undefined;
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
        type: {
            type: import('vue').PropType<import('./types/const').ButtonType>;
        };
        size: {
            type: import('vue').PropType<import('./types/const').ButtonSize>;
            default: string;
        };
        iconPosition: {
            type: import('vue').PropType<import('./types/const').ButtonIconPosition>;
        };
        disabled: {
            type: import('vue').PropType<boolean>;
        };
        loading: {
            type: import('vue').PropType<boolean>;
        };
        loadingIcon: {
            type: import('vue').PropType<string>;
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
        color: {
            type: import('vue').PropType<string>;
        };
        dark: {
            type: import('vue').PropType<boolean>;
        };
        icon: {
            type: import('vue').PropType<string>;
        };
        iconStyle: {
            type: import('vue').PropType<Partial<import('vue').CSSProperties>>;
        };
        iconProps: {
            type: import('vue').PropType<Partial<import('../icon/types').UIconProps>>;
            default: undefined;
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
        tag: string;
        size: import('./types/const').ButtonSize;
        autofocus: boolean;
        nativeType: string;
        iconProps: Partial<import('../icon/types').UIconProps>;
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
        type: {
            type: import('vue').PropType<import('./types/const').ButtonType>;
        };
        size: {
            type: import('vue').PropType<import('./types/const').ButtonSize>;
            default: string;
        };
        iconPosition: {
            type: import('vue').PropType<import('./types/const').ButtonIconPosition>;
        };
        disabled: {
            type: import('vue').PropType<boolean>;
        };
        loading: {
            type: import('vue').PropType<boolean>;
        };
        loadingIcon: {
            type: import('vue').PropType<string>;
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
        color: {
            type: import('vue').PropType<string>;
        };
        dark: {
            type: import('vue').PropType<boolean>;
        };
        icon: {
            type: import('vue').PropType<string>;
        };
        iconStyle: {
            type: import('vue').PropType<Partial<import('vue').CSSProperties>>;
        };
        iconProps: {
            type: import('vue').PropType<Partial<import('../icon/types').UIconProps>>;
            default: undefined;
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
        tag: string;
        size: import('./types/const').ButtonSize;
        autofocus: boolean;
        nativeType: string;
        iconProps: Partial<import('../icon/types').UIconProps>;
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
    type: {
        type: import('vue').PropType<import('./types/const').ButtonType>;
    };
    size: {
        type: import('vue').PropType<import('./types/const').ButtonSize>;
        default: string;
    };
    iconPosition: {
        type: import('vue').PropType<import('./types/const').ButtonIconPosition>;
    };
    disabled: {
        type: import('vue').PropType<boolean>;
    };
    loading: {
        type: import('vue').PropType<boolean>;
    };
    loadingIcon: {
        type: import('vue').PropType<string>;
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
    color: {
        type: import('vue').PropType<string>;
    };
    dark: {
        type: import('vue').PropType<boolean>;
    };
    icon: {
        type: import('vue').PropType<string>;
    };
    iconStyle: {
        type: import('vue').PropType<Partial<import('vue').CSSProperties>>;
    };
    iconProps: {
        type: import('vue').PropType<Partial<import('../icon/types').UIconProps>>;
        default: undefined;
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
    tag: string;
    size: import('./types/const').ButtonSize;
    autofocus: boolean;
    nativeType: string;
    iconProps: Partial<import('../icon/types').UIconProps>;
    useThrottle: boolean;
    throttleTime: number;
    useDebounce: boolean;
    debounceTime: number;
}, {}, string, {}> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
    $slots: Readonly<Record<string, any>> & Record<string, any>;
})>;
