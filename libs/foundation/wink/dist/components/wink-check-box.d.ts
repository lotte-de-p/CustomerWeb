import type { Components, JSX } from "../dist/types/components";

interface WinkCheckBox extends Components.WinkCheckBox, HTMLElement {}
export const WinkCheckBox: {
    prototype: WinkCheckBox;
    new (): WinkCheckBox;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
