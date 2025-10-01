import type { ComputedRef } from 'vue'
import type { URegionType, ULayoutMode, ULayoutExtend, ULayoutFlexAlign } from './const'

export interface ULayoutProps {
  /**
   * @description 布局模式
   * @default 'default'
   */
  mode?: ULayoutMode;

  /**
   * @description 区域延伸 - 仅在mode为default时有效
   * @values 'left-top' | 'right-top' | 'left-bottom' | 'right-bottom' | 'left' | 'right' | 'both'
   */
  extend?: ULayoutExtend;
 
  /**
   * @description 内边距
   */
  padding?: number | string;

  /**
   * @description 间距
   */
  gutter?: number;
  
  /**
   * @description 最大行块
   * @default 24
   */
  maxSpan?: number;
}

export interface URegionProps {
  /**
   * @description 区域
   * @default 'center'
   */
  region?: URegionType;

  /**
   * @description 样式
   * @default '{}'
   */
  style?: import('vue').CSSProperties;

  /**
   * @description 宽度
   * @default 'auto'
   */
  width?: number | string;

  /**
   * @description 列数
   */
  span?: number;

  /**
   * @description 内边距
   */
  padding?: number | string;

  /**
   * @description 水平对齐方式
   * @default 'start'
   */
  justify?: ULayoutFlexAlign;

  /**
   * @description 垂直对齐方式
   * @default 'start'
   */
  align?: ULayoutFlexAlign;
}

export interface ULayoutContext {
  /**
   * @description 布局模式
   */
  mode: ComputedRef<ULayoutMode>;
  /**
   * @description 最大列数
   */
  maxSpan?: ComputedRef<number>;
}