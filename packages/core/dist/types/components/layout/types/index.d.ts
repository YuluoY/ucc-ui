import { RegionType, LayoutMode } from './const';
export interface UlayoutProps {
    mode?: LayoutMode;
    padding?: number;
    gap?: number;
    col?: number;
    fit?: boolean;
}
export interface URegionProps {
    mode?: LayoutMode;
    region: RegionType;
    width?: number | string;
}
