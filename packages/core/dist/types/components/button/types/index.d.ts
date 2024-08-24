import { CSSProperties, Ref } from 'vue';
import { ButtonIconPosition, ButtonSize, ButtonType } from './const';
import { UIconProps } from '../../icon/types';
export interface UButtonProps {
    tag?: string;
    round?: boolean | number;
    circle?: boolean;
    plain?: boolean;
    link?: boolean;
    bg?: boolean;
    type?: ButtonType;
    size?: ButtonSize;
    disabled?: boolean;
    loading?: boolean;
    loadingIcon?: string;
    autofocus?: boolean;
    nativeType?: string;
    autoInsertSpace?: boolean;
    color?: string;
    dark?: boolean;
    icon?: UIconProps['icon'];
    iconStyle?: Partial<CSSProperties>;
    iconProps?: UIconProps;
    iconPosition?: ButtonIconPosition;
    useThrottle?: boolean;
    throttleTime?: number;
    useDebounce?: boolean;
    debounceTime?: number;
    onClick?: (e: MouseEvent) => void;
}
export interface UButtonEmits {
    (e: 'click', val: MouseEvent): void;
}
export interface UButtonInstance {
    ref: Ref<HTMLButtonElement | void>;
}
