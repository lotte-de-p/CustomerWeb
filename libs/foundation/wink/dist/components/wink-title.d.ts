import type { Components, JSX } from "../dist/types/components";

interface WinkTitle extends Components.WinkTitle, HTMLElement {}
export const WinkTitle: {
    prototype: WinkTitle;
    new (): WinkTitle;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
