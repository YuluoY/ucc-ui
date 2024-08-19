import { ButtonIconPosition, ButtonSize, ButtonType } from './const';
export interface UButtonProps {
    type?: ButtonType;
    size?: ButtonSize;
    round?: boolean | number;
    iconPosition?: ButtonIconPosition;
    disabled?: boolean;
    loading?: boolean;
    icon?: string;
    useDebounce?: boolean;
    debounceTime?: number;
    onClick?: (e: MouseEvent) => void;
}
