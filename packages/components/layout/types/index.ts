import type { Region, LayoutMode } from "./const";

export interface UlayoutProps {
  mode?: LayoutMode;  // 布局模式
  padding?: number;   // 内边距
  gap?: number;       // 间距
  col?: number;       // 列数
  fit?: boolean;      // 是否自适应
}

export interface URegionProps {
  mode?: LayoutMode;
  region: Region;
  width?: number | string;
}