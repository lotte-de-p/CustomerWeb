import type { Components, JSX } from "../dist/types/components";

interface WinkLogo extends Components.WinkLogo, HTMLElement {}
export const WinkLogo: {
    prototype: WinkLogo;
    new (): WinkLogo;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
