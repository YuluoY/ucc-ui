export declare const REGION: {
    readonly LEFT: "left";
    readonly RIGHT: "right";
    readonly TOP: "top";
    readonly CENTER: "center";
    readonly BOTTOM: "bottom";
};
export declare const LAYOUT_MODE: {
    readonly HORIZONTAL: "horizontal";
    readonly VERTICAL: "vertical";
};
export type Region = typeof REGION[keyof typeof REGION];
export type LayoutMode = typeof LAYOUT_MODE[keyof typeof LAYOUT_MODE];
