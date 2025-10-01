import { UButtonProps } from '../types';
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: Readonly<Record<string, any>> & Record<string, any>;
    refs: {
        _ref: unknown;
    };
    rootEl: any;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<UButtonProps, {
    ref: import('vue').Ref<HTMLButtonElement | void>;
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    click: (val: MouseEvent) => any;
}, string, import('vue').PublicProps, Readonly<UButtonProps> & Readonly<{
    onClick?: ((val: MouseEvent) => any) | undefined;
}>, {
    loading: boolean;
    size: import('../types/const').ButtonSize;
    tag: string;
    loadingIcon: string;
    autofocus: boolean;
    nativeType: string;
    iconProps: import('../..').UIconProps;
    iconPosition: import('../types/const').ButtonIconPosition;
    useThrottle: boolean;
    throttleTime: number;
    useDebounce: boolean;
    debounceTime: number;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {
    _ref: unknown;
}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
