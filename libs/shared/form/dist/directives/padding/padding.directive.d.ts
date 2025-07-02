import { ElementRef, OnInit, Renderer2 } from '@angular/core';
import * as i0 from "@angular/core";
export declare enum PaddingSize {
    'xxxSmall' = "xxxs",
    'xSmall' = "xxs",
    'small' = "s",
    'medium' = "m",
    'large' = "l",
    'xLarge' = "xl",
    'xxLarge' = "xxl"
}
export declare enum PaddingPositions {
    '' = "",
    'top' = "t",
    'bottom' = "b",
    'left' = "l",
    'right' = "r"
}
export interface PaddingOptions {
    position?: '' | 't' | 'b' | 'l' | 'r';
    size: 'xxxs' | 'xxs' | 's' | 'm' | 'l' | 'xl' | 'xxl';
}
export declare class PaddingDirective implements OnInit {
    renderer: Renderer2;
    el: ElementRef;
    padding: PaddingOptions | PaddingOptions[];
    constructor(renderer: Renderer2, el: ElementRef);
    ngOnInit(): void;
    private addClasses;
    static ɵfac: i0.ɵɵFactoryDeclaration<PaddingDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<PaddingDirective, "[tgPadding]", never, { "padding": { "alias": "tgPadding"; "required": false; }; }, {}, never, never, false, never>;
}
//# sourceMappingURL=padding.directive.d.ts.map