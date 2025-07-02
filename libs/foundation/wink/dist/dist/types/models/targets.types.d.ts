export declare const TARGETS: {
    self: string;
    blank: string;
    parent: string;
    top: string;
    unfencedTop: string;
};
export type Target = (typeof TARGETS)[keyof typeof TARGETS];
