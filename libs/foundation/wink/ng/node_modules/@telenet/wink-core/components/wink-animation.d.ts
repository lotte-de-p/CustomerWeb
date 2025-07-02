import type { Components, JSX } from "../dist/types/components";

interface WinkAnimation extends Components.WinkAnimation, HTMLElement {}
export const WinkAnimation: {
    prototype: WinkAnimation;
    new (): WinkAnimation;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
