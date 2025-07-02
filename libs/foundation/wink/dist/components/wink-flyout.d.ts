import type { Components, JSX } from "../dist/types/components";

interface WinkFlyout extends Components.WinkFlyout, HTMLElement {}
export const WinkFlyout: {
    prototype: WinkFlyout;
    new (): WinkFlyout;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
