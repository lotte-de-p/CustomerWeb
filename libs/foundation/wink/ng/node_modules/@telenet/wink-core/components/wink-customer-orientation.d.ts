import type { Components, JSX } from "../dist/types/components";

interface WinkCustomerOrientation extends Components.WinkCustomerOrientation, HTMLElement {}
export const WinkCustomerOrientation: {
    prototype: WinkCustomerOrientation;
    new (): WinkCustomerOrientation;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
