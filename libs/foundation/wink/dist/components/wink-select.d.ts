import type { Components, JSX } from "../dist/types/components";

interface WinkSelect extends Components.WinkSelect, HTMLElement {}
export const WinkSelect: {
    prototype: WinkSelect;
    new (): WinkSelect;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
