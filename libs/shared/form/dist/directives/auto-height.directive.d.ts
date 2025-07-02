import { AfterViewChecked, ElementRef } from '@angular/core';
import * as i0 from "@angular/core";
export declare class AutoHeightDirective implements AfterViewChecked {
    private readonly el;
    private readonly document;
    matchWithClass: string;
    constructor(el: ElementRef, document: Document);
    ngAfterViewChecked(): void;
    setHeight(element: HTMLElement): void;
    getHeight(): number | undefined;
    static ɵfac: i0.ɵɵFactoryDeclaration<AutoHeightDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<AutoHeightDirective, "[autoHeight]", never, { "matchWithClass": { "alias": "matchWithClass"; "required": false; }; }, {}, never, never, false, never>;
}
//# sourceMappingURL=auto-height.directive.d.ts.map