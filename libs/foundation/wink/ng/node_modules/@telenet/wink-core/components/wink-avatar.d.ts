import type { Components, JSX } from "../dist/types/components";

interface WinkAvatar extends Components.WinkAvatar, HTMLElement {}
export const WinkAvatar: {
    prototype: WinkAvatar;
    new (): WinkAvatar;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
