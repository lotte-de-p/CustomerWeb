import { ElementRef, OnInit, Renderer2 } from '@angular/core';
import * as i0 from "@angular/core";
export declare enum FontSize {
    'xxs' = "xs",
    'xs' = "xs",
    's' = "s",
    'm' = "m",
    'xm' = "xm",
    'r' = "r"
}
type FontSizeType = 'xxs' | 'xs' | 's' | 'm' | 'xm' | 'r';
export declare class FontSizeDirective implements OnInit {
    renderer: Renderer2;
    el: ElementRef;
    fontSize: FontSizeType;
    constructor(renderer: Renderer2, el: ElementRef);
    ngOnInit(): void;
    private addClasses;
    static ɵfac: i0.ɵɵFactoryDeclaration<FontSizeDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<FontSizeDirective, "[tgFontSize]", never, { "fontSize": { "alias": "tgFontSize"; "required": false; }; }, {}, never, never, false, never>;
}
export {};
//# sourceMappingURL=font-size.directive.d.ts.map