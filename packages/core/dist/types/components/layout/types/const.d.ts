import { InjectionKey } from 'vue';
import { ULayoutContext } from '.';
/**
 * 最大span
 */
export declare const CMaxSpan: 24;
export declare const CRegion: {
    readonly LEFT: "left";
    readonly RIGHT: "right";
    readonly TOP: "top";
    readonly CENTER: "center";
    readonly BOTTOM: "bottom";
};
export declare const CLayoutMode: {
    readonly ROW: "row";
    readonly COLUMN: "column";
    readonly DEFAULT: "default";
};
export declare const CLayoutExtend: {
    readonly LEFT_TOP: "left-top";
    readonly RIGHT_TOP: "right-top";
    readonly LEFT_BOTTOM: "left-bottom";
    readonly RIGHT_BOTTOM: "right-bottom";
    readonly LEFT: "left";
    readonly RIGHT: "right";
    readonly BOTH: "both";
};
export declare const CComponentName: {
    readonly LAYOUT: "ULayout";
    readonly REGION: "URegion";
    readonly LAYOUT_MODE: "ULayoutMode";
};
export declare const CLayoutContext: InjectionKey<ULayoutContext>;
export type URegionType = typeof CRegion[keyof typeof CRegion];
export type ULayoutMode = typeof CLayoutMode[keyof typeof CLayoutMode];
export type ULayoutExtend = typeof CLayoutExtend[keyof typeof CLayoutExtend];
