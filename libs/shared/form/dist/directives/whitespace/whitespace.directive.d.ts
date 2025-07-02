import { ElementRef, OnInit, Renderer2 } from '@angular/core';
import * as i0 from "@angular/core";
export type whitespaceOptions = 'tiny' | 'small' | 'medium' | 'large' | 'extra-large';
export declare class WhitespaceDirective implements OnInit {
    renderer: Renderer2;
    el: ElementRef;
    whitespaceSize: whitespaceOptions;
    constructor(renderer: Renderer2, el: ElementRef);
    ngOnInit(): void;
    private addClasses;
    static ɵfac: i0.ɵɵFactoryDeclaration<WhitespaceDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<WhitespaceDirective, "[tgWhitespace]", never, { "whitespaceSize": { "alias": "tgWhitespace"; "required": false; }; }, {}, never, never, false, never>;
}
//# sourceMappingURL=whitespace.directive.d.ts.map