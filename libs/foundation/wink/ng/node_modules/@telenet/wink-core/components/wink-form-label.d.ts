import type { Components, JSX } from "../dist/types/components";

interface WinkFormLabel extends Components.WinkFormLabel, HTMLElement {}
export const WinkFormLabel: {
    prototype: WinkFormLabel;
    new (): WinkFormLabel;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
