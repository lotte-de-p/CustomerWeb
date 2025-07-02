import { ElementRef, OnInit, Renderer2 } from '@angular/core';
import * as i0 from "@angular/core";
export declare enum FontColor {
    'brand-2e' = "brand-2e",
    'brand-1e' = "brand-1e"
}
export declare class FontColorDirective implements OnInit {
    renderer: Renderer2;
    el: ElementRef;
    fontColor: string;
    constructor(renderer: Renderer2, el: ElementRef);
    ngOnInit(): void;
    private addClasses;
    static ɵfac: i0.ɵɵFactoryDeclaration<FontColorDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<FontColorDirective, "[tgFontColor]", never, { "fontColor": { "alias": "tgFontColor"; "required": false; }; }, {}, never, never, false, never>;
}
//# sourceMappingURL=font-color.directive.d.ts.map