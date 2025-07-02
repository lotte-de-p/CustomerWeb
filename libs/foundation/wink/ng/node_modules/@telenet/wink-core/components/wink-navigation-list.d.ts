import type { Components, JSX } from "../dist/types/components";

interface WinkNavigationList extends Components.WinkNavigationList, HTMLElement {}
export const WinkNavigationList: {
    prototype: WinkNavigationList;
    new (): WinkNavigationList;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
