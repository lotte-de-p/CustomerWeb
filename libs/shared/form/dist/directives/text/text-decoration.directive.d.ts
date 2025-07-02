import { ElementRef, OnInit, Renderer2 } from '@angular/core';
import * as i0 from "@angular/core";
export declare enum TextDecorationType {
    'line-through' = "line-through"
}
type textDecorationType = 'line-through';
export declare class TextDecorationDirective implements OnInit {
    renderer: Renderer2;
    el: ElementRef;
    textDecoration: textDecorationType;
    constructor(renderer: Renderer2, el: ElementRef);
    ngOnInit(): void;
    private addClasses;
    static ɵfac: i0.ɵɵFactoryDeclaration<TextDecorationDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<TextDecorationDirective, "[tgTextDecoration]", never, { "textDecoration": { "alias": "tgTextDecoration"; "required": false; }; }, {}, never, never, false, never>;
}
export {};
//# sourceMappingURL=text-decoration.directive.d.ts.map