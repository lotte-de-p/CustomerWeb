import { ElementRef, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { FormErrorService } from '../../errors';
import * as i0 from "@angular/core";
export declare class ScrollToErrorDirective implements OnDestroy {
    private readonly elmRef;
    private readonly formErrorService;
    formSubscription: Subscription;
    constructor(elmRef: ElementRef, formErrorService: FormErrorService);
    private scrollToFirstInvalidControl;
    private static getTopOffset;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ScrollToErrorDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<ScrollToErrorDirective, "[scrollToError]", never, {}, {}, never, never, false, never>;
}
//# sourceMappingURL=scroll-to-error.directive.d.ts.map