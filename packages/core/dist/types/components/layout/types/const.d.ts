export declare const CRegion: {
    readonly LEFT: "left";
    readonly RIGHT: "right";
    readonly TOP: "top";
    readonly CENTER: "center";
    readonly BOTTOM: "bottom";
};
export declare const CLayoutMode: {
    readonly HORIZONTAL: "horizontal";
    readonly VERTICAL: "vertical";
    readonly DEFAULT: "default";
};
export type RegionType = typeof CRegion[keyof typeof CRegion];
export type LayoutMode = typeof CLayoutMode[keyof typeof CLayoutMode];
