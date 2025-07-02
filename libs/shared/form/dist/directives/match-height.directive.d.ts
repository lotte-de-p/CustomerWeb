import { ElementRef, AfterViewChecked } from '@angular/core';
import { ClientBrowserTypeService } from '@telenet/ng-lib-page';
import * as i0 from "@angular/core";
export declare class MatchHeightDirective implements AfterViewChecked {
    private readonly el;
    private readonly clientBrowserTypeService;
    private static readonly SAFARI_HEIGHT_CALCULATION_DIFFERENCE_COMPENSATOR;
    matchHeightClass: string;
    constructor(el: ElementRef, clientBrowserTypeService: ClientBrowserTypeService);
    ngAfterViewChecked(): void;
    matchHeight(parent: HTMLElement): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<MatchHeightDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<MatchHeightDirective, "[matchHeightClass]", never, { "matchHeightClass": { "alias": "matchHeightClass"; "required": false; }; }, {}, never, never, false, never>;
}
//# sourceMappingURL=match-height.directive.d.ts.map