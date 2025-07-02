import type { Components, JSX } from "../dist/types/components";

interface WinkParagraph extends Components.WinkParagraph, HTMLElement {}
export const WinkParagraph: {
    prototype: WinkParagraph;
    new (): WinkParagraph;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
