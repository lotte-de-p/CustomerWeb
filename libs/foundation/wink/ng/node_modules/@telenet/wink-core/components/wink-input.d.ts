import type { Components, JSX } from "../dist/types/components";

interface WinkInput extends Components.WinkInput, HTMLElement {}
export const WinkInput: {
    prototype: WinkInput;
    new (): WinkInput;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
