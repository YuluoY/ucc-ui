import { UButtonProps } from '../types';
declare const _default: import('vue').DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToOption<UButtonProps>, {
    type: string;
    size: string;
    disabled: boolean;
    round: number;
}>, {}, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToOption<UButtonProps>, {
    type: string;
    size: string;
    disabled: boolean;
    round: number;
}>>>, {
    type: import('../types/const').ButtonType;
    size: import('../types/const').ButtonSize;
    round: boolean | number;
    disabled: boolean;
}, {}>;
export default _default;

type __VLS_WithDefaults<P, D> = {
    [K in keyof Pick<P, keyof P>]: K extends keyof D ? __VLS_Prettify<P[K] & {
        default: D[K];
    }> : P[K];
};
type __VLS_Prettify<T> = {
    [K in keyof T]: T[K];
} & {};
type __VLS_NonUndefinedable<T> = T extends undefined ? never : T;
type __VLS_TypePropsToOption<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: import('vue').PropType<__VLS_NonUndefinedable<T[K]>>;
    } : {
        type: import('vue').PropType<T[K]>;
        required: true;
    };
};
