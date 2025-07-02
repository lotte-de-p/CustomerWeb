import type { Components, JSX } from "../dist/types/components";

interface WinkBadge extends Components.WinkBadge, HTMLElement {}
export const WinkBadge: {
    prototype: WinkBadge;
    new (): WinkBadge;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
