import { ElementRef } from '@angular/core';
import * as i0 from "@angular/core";
export declare class ScrollFocusInvalidInputDirective {
    private readonly el;
    submitButtonClassName: string;
    constructor(el: ElementRef);
    onFormSubmit(): void;
    onClick(targetElement: HTMLElement): void;
    private focusElement;
    private getTopOffset;
    static ɵfac: i0.ɵɵFactoryDeclaration<ScrollFocusInvalidInputDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<ScrollFocusInvalidInputDirective, "[appScrollFocusInvalidInput]", never, { "submitButtonClassName": { "alias": "submitButtonClassName"; "required": false; }; }, {}, never, never, false, never>;
}
//# sourceMappingURL=scroll-focus-invalid-input.directive.d.ts.map