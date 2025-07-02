export declare const TOAST_TYPES: {
    readonly negative: "negative";
    readonly positive: "positive";
    readonly actionable: "actionable";
    readonly feedback: "feedback";
};
export type ToastType = (typeof TOAST_TYPES)[keyof typeof TOAST_TYPES];
