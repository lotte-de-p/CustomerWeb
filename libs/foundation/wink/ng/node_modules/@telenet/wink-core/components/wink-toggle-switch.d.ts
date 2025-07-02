import type { Components, JSX } from "../dist/types/components";

interface WinkToggleSwitch extends Components.WinkToggleSwitch, HTMLElement {}
export const WinkToggleSwitch: {
    prototype: WinkToggleSwitch;
    new (): WinkToggleSwitch;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
