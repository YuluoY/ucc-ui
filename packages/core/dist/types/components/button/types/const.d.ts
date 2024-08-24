export declare const CButtonType: {
    readonly PRIMARY: "primary";
    readonly SUCCESS: "success";
    readonly WARNING: "warning";
    readonly DANGER: "danger";
    readonly INFO: "info";
    readonly LINK: "link";
};
export declare const CButtonSize: {
    readonly SMALL: "small";
    readonly DEFAULT: "default";
    readonly LARGE: "large";
};
export declare const CIconPosition: {
    readonly LEFT: "left";
    readonly RIGHT: "right";
    readonly DEFAULT: "default";
};
export type ButtonSize = typeof CButtonSize[keyof typeof CButtonSize];
export type ButtonType = typeof CButtonType[keyof typeof CButtonType];
export type ButtonIconPosition = typeof CIconPosition[keyof typeof CIconPosition];
