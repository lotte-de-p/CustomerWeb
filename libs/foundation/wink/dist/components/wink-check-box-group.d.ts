import type { Components, JSX } from "../dist/types/components";

interface WinkCheckBoxGroup extends Components.WinkCheckBoxGroup, HTMLElement {}
export const WinkCheckBoxGroup: {
    prototype: WinkCheckBoxGroup;
    new (): WinkCheckBoxGroup;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
