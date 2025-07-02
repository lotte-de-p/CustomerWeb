import type { Components, JSX } from "../dist/types/components";

interface WinkNavigationListItem extends Components.WinkNavigationListItem, HTMLElement {}
export const WinkNavigationListItem: {
    prototype: WinkNavigationListItem;
    new (): WinkNavigationListItem;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
