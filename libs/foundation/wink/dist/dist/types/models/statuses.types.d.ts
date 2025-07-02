export declare const STATUS_VARIANTS: {
    readonly information: "information";
    readonly success: "success";
    readonly error: "error";
    readonly warning: "warning";
};
export type StatusVariants = (typeof STATUS_VARIANTS)[keyof typeof STATUS_VARIANTS];
