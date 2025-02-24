import type { ComputedRef, Ref, ShallowRef, VNode } from "vue";
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
  
  /**
   * @description 最大列数
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
  /**
   * @description 布局模式
   */
  mode: ComputedRef<ULayoutMode>;
  /**
   * @description 区域延伸 - 仅在mode为default时有效
   */
  extend?: ComputedRef<ULayoutExtend>;
  /**
   * @description 最大列数
   */
  maxSpan?: ComputedRef<number>;
  /**
   * @description 添加渲染后的区域节点
   */
  addRegionVNode: (vnode: VNode, updated?: boolean) => void;
  /**
   * @description 区域节点
   */
  regions?: ShallowRef<VNode[]> | undefined;
}