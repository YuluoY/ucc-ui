import { UButtonProps } from '../types';
import { UIconProps } from '../../icon/types';
declare function __VLS_template(): Readonly<Record<string, any>> & Record<string, any>;
declare const __VLS_component: import('vue').DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToOption<UButtonProps>, {
    tag: string;
    size: string;
    nativeType: string;
    useThrottle: boolean;
    throttleTime: number;
    useDebounce: boolean;
    debounceTime: number;
    autofocus: boolean;
    loading: boolean;
    loadingIcon: string;
    iconPosition: string;
    iconProps: () => {
        icon: string;
    };
}>, {
    ref: import('vue').Ref<HTMLButtonElement | void>;
}, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    click: (val: MouseEvent) => void;
}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToOption<UButtonProps>, {
    tag: string;
    size: string;
    nativeType: string;
    useThrottle: boolean;
    throttleTime: number;
    useDebounce: boolean;
    debounceTime: number;
    autofocus: boolean;
    loading: boolean;
    loadingIcon: string;
    iconPosition: string;
    iconProps: () => {
        icon: string;
    };
}>>> & {
    onClick?: ((val: MouseEvent) => any) | undefined;
}, {
    size: import('../types/const').ButtonSize;
    tag: string;
    loading: boolean;
    loadingIcon: string;
    autofocus: boolean;
    nativeType: string;
    iconProps: UIconProps | Omit<UIconProps, "icon">;
    iconPosition: import('../types/const').ButtonIconPosition;
    useThrottle: boolean;
    throttleTime: number;
    useDebounce: boolean;
    debounceTime: number;
}, {}>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, ReturnType<typeof __VLS_template>>;
export default _default;

type __VLS_WithDefaults<P, D> = {
    [K in keyof Pick<P, keyof P>]: K extends keyof D ? __VLS_Prettify<P[K] & {
        default: D[K];
    }> : P[K];
};
type __VLS_Prettify<T> = {
    [K in keyof T]: T[K];
} & {};
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
type __VLS_NonUndefinedable<T> = T extends undefined ? never : T;
type __VLS_TypePropsToOption<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: import('vue').PropType<__VLS_NonUndefinedable<T[K]>>;
    } : {
        type: import('vue').PropType<T[K]>;
        required: true;
    };
};
