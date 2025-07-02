import { ElementRef, OnInit, Renderer2 } from '@angular/core';
import * as i0 from "@angular/core";
export declare class IconDirective implements OnInit {
    renderer: Renderer2;
    el: ElementRef;
    iconType: string;
    iconSize: string;
    constructor(renderer: Renderer2, el: ElementRef);
    ngOnInit(): void;
    private addClasses;
    static ɵfac: i0.ɵɵFactoryDeclaration<IconDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<IconDirective, "i[tgIcon]", never, { "iconType": { "alias": "iconType"; "required": false; }; "iconSize": { "alias": "iconSize"; "required": false; }; }, {}, never, never, false, never>;
}
//# sourceMappingURL=icon.directive.d.ts.map