import type { Components, JSX } from "../dist/types/components";

interface WinkImg extends Components.WinkImg, HTMLElement {}
export const WinkImg: {
    prototype: WinkImg;
    new (): WinkImg;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
