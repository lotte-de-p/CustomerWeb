import type { Components, JSX } from "../dist/types/components";

interface WinkToast extends Components.WinkToast, HTMLElement {}
export const WinkToast: {
    prototype: WinkToast;
    new (): WinkToast;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
