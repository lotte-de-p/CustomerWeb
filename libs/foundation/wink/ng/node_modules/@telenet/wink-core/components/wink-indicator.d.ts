import type { Components, JSX } from "../dist/types/components";

interface WinkIndicator extends Components.WinkIndicator, HTMLElement {}
export const WinkIndicator: {
    prototype: WinkIndicator;
    new (): WinkIndicator;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
