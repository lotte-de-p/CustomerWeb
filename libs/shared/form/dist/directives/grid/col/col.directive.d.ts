import { ElementRef, OnInit, Renderer2 } from '@angular/core';
import * as i0 from "@angular/core";
export declare class ColDirective implements OnInit {
    renderer: Renderer2;
    el: ElementRef;
    columns: number;
    breakpoint: string;
    constructor(renderer: Renderer2, el: ElementRef);
    ngOnInit(): void;
    private addClasses;
    static ɵfac: i0.ɵɵFactoryDeclaration<ColDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<ColDirective, "div[tgGridCol]", never, { "columns": { "alias": "columns"; "required": false; }; "breakpoint": { "alias": "breakpoint"; "required": false; }; }, {}, never, never, false, never>;
}
//# sourceMappingURL=col.directive.d.ts.map