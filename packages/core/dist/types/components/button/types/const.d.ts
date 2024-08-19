export declare const TYPE: {
    readonly PRIMARY: "primary";
    readonly SUCCESS: "success";
    readonly WARNING: "warning";
    readonly DANGER: "danger";
    readonly INFO: "info";
    readonly TEXT: "text";
    readonly LINK: "link";
};
export declare const SIZE: {
    SMALL: string;
    MEDIUM: string;
    LARGE: string;
};
export declare const ICON_POSITION: {
    LEFT: string;
    RIGHT: string;
};
export type ButtonSize = typeof SIZE[keyof typeof SIZE];
export type ButtonType = typeof TYPE[keyof typeof TYPE];
export type ButtonIconPosition = typeof ICON_POSITION[keyof typeof ICON_POSITION];
