import type { Components, JSX } from "../dist/types/components";

interface WinkButton extends Components.WinkButton, HTMLElement {}
export const WinkButton: {
    prototype: WinkButton;
    new (): WinkButton;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
