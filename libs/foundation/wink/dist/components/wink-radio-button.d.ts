import type { Components, JSX } from "../dist/types/components";

interface WinkRadioButton extends Components.WinkRadioButton, HTMLElement {}
export const WinkRadioButton: {
    prototype: WinkRadioButton;
    new (): WinkRadioButton;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
