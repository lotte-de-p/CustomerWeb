import type { Components, JSX } from "../dist/types/components";

interface WinkMainNavigation extends Components.WinkMainNavigation, HTMLElement {}
export const WinkMainNavigation: {
    prototype: WinkMainNavigation;
    new (): WinkMainNavigation;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
