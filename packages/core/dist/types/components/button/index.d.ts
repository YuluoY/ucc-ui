export declare const UButton: import('../../utils').SFCWithInstall<import('vue').DefineComponent<{
    type: {
        type: import('vue').PropType<import('./types/const').ButtonType>;
        default: string;
    };
    size: {
        type: import('vue').PropType<string>;
        default: string;
    };
    round: {
        type: import('vue').PropType<number | boolean>;
        default: number;
    };
    iconPosition: {
        type: import('vue').PropType<string>;
    };
    disabled: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    loading: {
        type: import('vue').PropType<boolean>;
    };
    icon: {
        type: import('vue').PropType<string>;
    };
    useDebounce: {
        type: import('vue').PropType<boolean>;
    };
    debounceTime: {
        type: import('vue').PropType<number>;
    };
    onClick: {
        type: import('vue').PropType<(e: MouseEvent) => void>;
    };
}, {}, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    type: {
        type: import('vue').PropType<import('./types/const').ButtonType>;
        default: string;
    };
    size: {
        type: import('vue').PropType<string>;
        default: string;
    };
    round: {
        type: import('vue').PropType<number | boolean>;
        default: number;
    };
    iconPosition: {
        type: import('vue').PropType<string>;
    };
    disabled: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    loading: {
        type: import('vue').PropType<boolean>;
    };
    icon: {
        type: import('vue').PropType<string>;
    };
    useDebounce: {
        type: import('vue').PropType<boolean>;
    };
    debounceTime: {
        type: import('vue').PropType<number>;
    };
    onClick: {
        type: import('vue').PropType<(e: MouseEvent) => void>;
    };
}>>, {
    type: import('./types/const').ButtonType;
    size: import('./types/const').ButtonSize;
    round: boolean | number;
    disabled: boolean;
}, {}>>;
