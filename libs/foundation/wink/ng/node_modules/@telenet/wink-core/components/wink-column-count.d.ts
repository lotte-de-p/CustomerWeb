import type { Components, JSX } from "../dist/types/components";

interface WinkColumnCount extends Components.WinkColumnCount, HTMLElement {}
export const WinkColumnCount: {
    prototype: WinkColumnCount;
    new (): WinkColumnCount;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
