import type { Components, JSX } from "../dist/types/components";

interface WinkPricing extends Components.WinkPricing, HTMLElement {}
export const WinkPricing: {
    prototype: WinkPricing;
    new (): WinkPricing;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
