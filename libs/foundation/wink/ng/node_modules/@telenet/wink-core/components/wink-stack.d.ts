import type { Components, JSX } from "../dist/types/components";

interface WinkStack extends Components.WinkStack, HTMLElement {}
export const WinkStack: {
    prototype: WinkStack;
    new (): WinkStack;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
