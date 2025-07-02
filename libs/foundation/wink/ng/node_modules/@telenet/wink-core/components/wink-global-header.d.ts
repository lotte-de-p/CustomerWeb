import type { Components, JSX } from "../dist/types/components";

interface WinkGlobalHeader extends Components.WinkGlobalHeader, HTMLElement {}
export const WinkGlobalHeader: {
    prototype: WinkGlobalHeader;
    new (): WinkGlobalHeader;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
