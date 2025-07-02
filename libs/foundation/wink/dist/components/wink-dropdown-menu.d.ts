import type { Components, JSX } from "../dist/types/components";

interface WinkDropdownMenu extends Components.WinkDropdownMenu, HTMLElement {}
export const WinkDropdownMenu: {
    prototype: WinkDropdownMenu;
    new (): WinkDropdownMenu;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
