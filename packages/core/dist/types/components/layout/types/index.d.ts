import { RegionType, LayoutMode } from './const';
export interface ULayoutProps {
    mode?: LayoutMode;
    padding?: number;
    gap?: number;
    col?: number;
    fit?: boolean;
}
export interface URegionProps {
    region?: RegionType;
    width?: number | string;
}
export interface ULayoutContext {
    mode: LayoutMode;
}
