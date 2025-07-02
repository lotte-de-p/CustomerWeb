import { AlignItems, FlexDirection, JustifyContent, Wrap } from '../../../models/flex.types';
export type CssClass = {
    [className: string]: boolean;
};
export declare const STACK_SIZES: {
    readonly '3xs': string;
    readonly '2xs': string;
    readonly xs: string;
    readonly sm: string;
    readonly md: string;
    readonly lg: string;
    readonly none: string;
};
export type StackSize = (typeof STACK_SIZES)[keyof typeof STACK_SIZES];
export type Size = {
    default?: StackSize | FlexDirection | JustifyContent | AlignItems | Wrap | number;
    sm?: StackSize | FlexDirection | JustifyContent | AlignItems | Wrap | number;
    md?: StackSize | FlexDirection | JustifyContent | AlignItems | Wrap | number;
};
