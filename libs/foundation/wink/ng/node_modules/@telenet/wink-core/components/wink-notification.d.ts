import type { Components, JSX } from "../dist/types/components";

interface WinkNotification extends Components.WinkNotification, HTMLElement {}
export const WinkNotification: {
    prototype: WinkNotification;
    new (): WinkNotification;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
