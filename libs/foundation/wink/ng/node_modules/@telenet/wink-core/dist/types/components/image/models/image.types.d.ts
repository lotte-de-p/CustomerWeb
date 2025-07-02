export declare const LOADING_TYPES: {
    readonly lazy: "lazy";
    readonly eager: "eager";
};
export type LoadingType = (typeof LOADING_TYPES)[keyof typeof LOADING_TYPES];
