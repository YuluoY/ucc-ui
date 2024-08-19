import type { ButtonIconPosition, ButtonSize, ButtonType } from "./const";

export interface UButtonProps {
  type?: ButtonType;  // 按钮类型
  size?: ButtonSize;  // 按钮大小
  round?: boolean | number; // 按钮圆角
  iconPosition?: ButtonIconPosition; // 按钮图标位置
  disabled?: boolean; // 按钮禁用
  loading?: boolean;  // 按钮加载
  icon?: string;      // 按钮图标
  useDebounce?: boolean; // 是否使用防抖
  debounceTime?: number; // 防抖时间
  onClick?: (e: MouseEvent) => void; // 点击事件
}