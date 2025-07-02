import type { Components, JSX } from "../dist/types/components";

interface WinkToaster extends Components.WinkToaster, HTMLElement {}
export const WinkToaster: {
    prototype: WinkToaster;
    new (): WinkToaster;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
