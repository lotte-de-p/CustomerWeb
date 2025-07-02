import type { Components, JSX } from "../dist/types/components";

interface WinkTextarea extends Components.WinkTextarea, HTMLElement {}
export const WinkTextarea: {
    prototype: WinkTextarea;
    new (): WinkTextarea;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
