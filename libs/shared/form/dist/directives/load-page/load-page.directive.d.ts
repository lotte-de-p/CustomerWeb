import { ElementRef, Renderer2 } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as i0 from "@angular/core";
export declare class LoadPageDirective {
    private readonly el;
    private readonly renderer;
    private readonly window;
    private http;
    private document;
    tgLoadPage: string;
    constructor(el: ElementRef, renderer: Renderer2, window: Window, http: HttpClient, document: Document);
    onClick($event: any): void;
    private showOverlayContent;
    private recompileAngularJS;
    protected isOverlay(url: any): boolean;
    protected storeUrlParamsInSessionStorage(urlString: string): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<LoadPageDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<LoadPageDirective, "[tgLoadPage]", never, { "tgLoadPage": { "alias": "tgLoadPage"; "required": false; }; }, {}, never, never, false, never>;
}
//# sourceMappingURL=load-page.directive.d.ts.map