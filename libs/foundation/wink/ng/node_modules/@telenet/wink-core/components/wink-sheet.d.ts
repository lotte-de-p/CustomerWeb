import type { Components, JSX } from "../dist/types/components";

interface WinkSheet extends Components.WinkSheet, HTMLElement {}
export const WinkSheet: {
    prototype: WinkSheet;
    new (): WinkSheet;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
