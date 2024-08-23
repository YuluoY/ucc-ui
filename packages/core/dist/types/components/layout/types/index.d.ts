import { Region, LayoutMode } from './const';
export interface UlayoutProps {
    mode?: LayoutMode;
    padding?: number;
    gap?: number;
    col?: number;
    fit?: boolean;
}
export interface URegionProps {
    mode?: LayoutMode;
    region: Region;
    width?: number | string;
}
