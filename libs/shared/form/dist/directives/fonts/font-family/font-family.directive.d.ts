import { ElementRef, OnInit, Renderer2 } from '@angular/core';
import * as i0 from "@angular/core";
type fontFamilyType = 't1' | 't2' | 't3' | 't4' | 't5' | 't6' | 't7';
export declare class FontFamilyDirective implements OnInit {
    renderer: Renderer2;
    el: ElementRef;
    fontFamily: fontFamilyType;
    constructor(renderer: Renderer2, el: ElementRef);
    ngOnInit(): void;
    private addClasses;
    static ɵfac: i0.ɵɵFactoryDeclaration<FontFamilyDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<FontFamilyDirective, "[tgFontFamily]", never, { "fontFamily": { "alias": "tgFontFamily"; "required": false; }; }, {}, never, never, false, never>;
}
export {};
//# sourceMappingURL=font-family.directive.d.ts.map