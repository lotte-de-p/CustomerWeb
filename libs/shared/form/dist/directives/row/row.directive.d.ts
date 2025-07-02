import { ElementRef, OnInit, Renderer2 } from '@angular/core';
import * as i0 from "@angular/core";
export declare class RowDirective implements OnInit {
    renderer: Renderer2;
    el: ElementRef;
    fullGutters: boolean;
    constructor(renderer: Renderer2, el: ElementRef);
    ngOnInit(): void;
    private addClasses;
    private checkGutter;
    static ɵfac: i0.ɵɵFactoryDeclaration<RowDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<RowDirective, "div[tgGridRow]", never, { "fullGutters": { "alias": "fullGutters"; "required": false; }; }, {}, never, never, false, never>;
}
//# sourceMappingURL=row.directive.d.ts.map