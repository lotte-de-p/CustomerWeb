import type { Components, JSX } from "../dist/types/components";

interface WinkAccordion extends Components.WinkAccordion, HTMLElement {}
export const WinkAccordion: {
    prototype: WinkAccordion;
    new (): WinkAccordion;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
