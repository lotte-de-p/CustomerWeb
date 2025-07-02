import { ElementRef, EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
export declare class ClickOutsideDirective {
    private readonly elementRef;
    appClickOutside: EventEmitter<MouseEvent>;
    constructor(elementRef: ElementRef);
    onClick(event: MouseEvent, targetElement?: HTMLElement): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ClickOutsideDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<ClickOutsideDirective, "[appClickOutside]", never, {}, { "appClickOutside": "appClickOutside"; }, never, never, true, never>;
}
//# sourceMappingURL=click-outside.directive.d.ts.map