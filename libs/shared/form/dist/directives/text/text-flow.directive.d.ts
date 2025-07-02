import { ElementRef, OnInit, Renderer2 } from '@angular/core';
import * as i0 from "@angular/core";
export declare enum TextFlowType {
    'body' = "body",
    'h1' = "h1",
    'h3' = "h3",
    'h4' = "h4",
    'legal' = "legal",
    'label' = "label",
    'detail' = "detail",
    'details' = "details",
    'button' = "button"
}
type textFlowType = 'body' | 'h1' | 'h3' | 'h4' | 'legal' | 'label' | 'detail' | 'details' | 'button';
export declare class TextFlowDirective implements OnInit {
    renderer: Renderer2;
    el: ElementRef;
    textFlow?: textFlowType;
    constructor(renderer: Renderer2, el: ElementRef);
    ngOnInit(): void;
    private addClasses;
    static ɵfac: i0.ɵɵFactoryDeclaration<TextFlowDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<TextFlowDirective, "[tgTextFlow]", never, { "textFlow": { "alias": "tgTextFlow"; "required": false; }; }, {}, never, never, false, never>;
}
export {};
//# sourceMappingURL=text-flow.directive.d.ts.map