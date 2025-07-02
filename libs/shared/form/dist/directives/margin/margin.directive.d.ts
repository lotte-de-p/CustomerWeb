import { ElementRef, OnInit, Renderer2 } from '@angular/core';
import * as i0 from "@angular/core";
export declare enum MarginSize {
    'xSmall' = "xxs",
    'xxSmall' = "xxxs",
    'small' = "s",
    'medium' = "m",
    'large' = "l",
    'xLarge' = "xl",
    'xxLarge' = "xxl"
}
export declare enum MarginPosition {
    'top' = "t",
    'bottom' = "b",
    'left' = "l",
    'right' = "r"
}
export interface MarginOptions {
    position: 't' | 'b' | 'l' | 'r';
    size: 'xxxs' | 'xxs' | 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl' | 'g' | 'auto';
}
export declare class MarginDirective implements OnInit {
    renderer: Renderer2;
    el: ElementRef;
    margin: MarginOptions | MarginOptions[];
    constructor(renderer: Renderer2, el: ElementRef);
    ngOnInit(): void;
    private addClasses;
    static ɵfac: i0.ɵɵFactoryDeclaration<MarginDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<MarginDirective, "[tgMargin]", never, { "margin": { "alias": "tgMargin"; "required": false; }; }, {}, never, never, false, never>;
}
//# sourceMappingURL=margin.directive.d.ts.map