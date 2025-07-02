import type { Components, JSX } from "../dist/types/components";

interface WinkSpacer extends Components.WinkSpacer, HTMLElement {}
export const WinkSpacer: {
    prototype: WinkSpacer;
    new (): WinkSpacer;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
