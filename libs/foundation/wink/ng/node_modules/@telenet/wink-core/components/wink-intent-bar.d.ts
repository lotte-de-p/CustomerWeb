import type { Components, JSX } from "../dist/types/components";

interface WinkIntentBar extends Components.WinkIntentBar, HTMLElement {}
export const WinkIntentBar: {
    prototype: WinkIntentBar;
    new (): WinkIntentBar;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
