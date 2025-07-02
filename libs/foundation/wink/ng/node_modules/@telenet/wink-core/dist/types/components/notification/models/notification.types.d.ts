export declare const NOTIFICATION_TYPES: {
    readonly information: "information";
    readonly success: "success";
    readonly error: "error";
    readonly warning: "warning";
};
export type NotificationType = (typeof NOTIFICATION_TYPES)[keyof typeof NOTIFICATION_TYPES];
