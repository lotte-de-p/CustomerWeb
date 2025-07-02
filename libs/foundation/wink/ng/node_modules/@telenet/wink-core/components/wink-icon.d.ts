import type { Components, JSX } from "../dist/types/components";

interface WinkIcon extends Components.WinkIcon, HTMLElement {}
export const WinkIcon: {
    prototype: WinkIcon;
    new (): WinkIcon;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
