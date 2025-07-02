export declare const AVATAR_SIZES: {
    readonly sm: string;
    readonly md: string;
    readonly lg: string;
    readonly xl: string;
};
export type AvatarSize = (typeof AVATAR_SIZES)[keyof typeof AVATAR_SIZES];
