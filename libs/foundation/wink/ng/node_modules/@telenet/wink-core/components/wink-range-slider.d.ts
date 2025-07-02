import type { Components, JSX } from "../dist/types/components";

interface WinkRangeSlider extends Components.WinkRangeSlider, HTMLElement {}
export const WinkRangeSlider: {
    prototype: WinkRangeSlider;
    new (): WinkRangeSlider;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
