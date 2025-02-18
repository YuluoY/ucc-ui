import type { ShallowRef, VNode } from "vue";
import type { URegionType, ULayoutMode, ULayoutExtend } from "./const";

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
   * @default 0
   */
  padding?: number;

  /**
   * @description 间距
   * @default 10
   */
  gutter?: number;
}

export interface URegionProps {
  /**
   * @description 区域
   * @default 'center'
   */
  region?: URegionType;

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
   * @default 0
   */
  padding?: number;
}

export interface ULayoutContext {
  mode: ULayoutMode;
  extend?: ULayoutExtend;
  topRegions?: ShallowRef<VNode[]>;
  leftRegions?: ShallowRef<VNode[]>;
  centerRegions?: ShallowRef<VNode[]>;
  rightRegions?: ShallowRef<VNode[]>;
  bottomRegions?: ShallowRef<VNode[]>;
  regions?: ShallowRef<VNode[]>;
}