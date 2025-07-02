import type { Components, JSX } from "../dist/types/components";

interface WinkLink extends Components.WinkLink, HTMLElement {}
export const WinkLink: {
    prototype: WinkLink;
    new (): WinkLink;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
