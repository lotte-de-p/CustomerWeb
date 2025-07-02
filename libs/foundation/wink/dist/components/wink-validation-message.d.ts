import type { Components, JSX } from "../dist/types/components";

interface WinkValidationMessage extends Components.WinkValidationMessage, HTMLElement {}
export const WinkValidationMessage: {
    prototype: WinkValidationMessage;
    new (): WinkValidationMessage;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
