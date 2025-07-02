import type { Components, JSX } from "../dist/types/components";

interface WinkRadioGroup extends Components.WinkRadioGroup, HTMLElement {}
export const WinkRadioGroup: {
    prototype: WinkRadioGroup;
    new (): WinkRadioGroup;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
