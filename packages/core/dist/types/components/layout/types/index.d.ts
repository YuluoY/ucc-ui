import { Region, LayoutMode } from './const';
export interface UlayoutProps {
    mode?: LayoutMode;
    padding?: number;
    gap?: number;
    col?: number;
}
export interface URegionProps {
    mode?: LayoutMode;
    region: Region;
    width?: number;
    col?: number;
}
