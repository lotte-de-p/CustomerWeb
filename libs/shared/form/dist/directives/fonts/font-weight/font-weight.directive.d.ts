import { ElementRef, OnInit, Renderer2 } from '@angular/core';
import * as i0 from "@angular/core";
export declare enum FontWeight {
    'regular' = "r",
    'medium' = "m",
    'large' = "l",
    'giant' = "g",
    'xxl' = "xxl"
}
type fontWeightType = 'r' | 'm' | 'g' | 'l' | 'xl' | 'xxl';
export declare class FontWeightDirective implements OnInit {
    renderer: Renderer2;
    el: ElementRef;
    fontWeight: fontWeightType;
    constructor(renderer: Renderer2, el: ElementRef);
    ngOnInit(): void;
    private addClasses;
    static ɵfac: i0.ɵɵFactoryDeclaration<FontWeightDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<FontWeightDirective, "[tgFontWeight]", never, { "fontWeight": { "alias": "tgFontWeight"; "required": false; }; }, {}, never, never, false, never>;
}
export {};
//# sourceMappingURL=font-weight.directive.d.ts.map