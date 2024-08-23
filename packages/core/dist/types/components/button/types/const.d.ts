export declare const TYPE: {
    readonly PRIMARY: "primary";
    readonly SUCCESS: "success";
    readonly WARNING: "warning";
    readonly DANGER: "danger";
    readonly INFO: "info";
    readonly LINK: "link";
};
export declare const SIZE: {
    readonly SMALL: "small";
    readonly DEFAULT: "default";
    readonly LARGE: "large";
};
export declare const ICON_POSITION: {
    readonly LEFT: "left";
    readonly RIGHT: "right";
};
export type ButtonSize = typeof SIZE[keyof typeof SIZE];
export type ButtonType = typeof TYPE[keyof typeof TYPE];
export type ButtonIconPosition = typeof ICON_POSITION[keyof typeof ICON_POSITION];
