import type { Components, JSX } from "../dist/types/components";

interface WinkTabs extends Components.WinkTabs, HTMLElement {}
export const WinkTabs: {
    prototype: WinkTabs;
    new (): WinkTabs;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
