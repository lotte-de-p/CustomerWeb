import { ElementRef, OnInit, Renderer2 } from '@angular/core';
import * as i0 from "@angular/core";
export declare class ContainerDirective implements OnInit {
    renderer: Renderer2;
    el: ElementRef;
    partitioned: boolean;
    shadow: boolean;
    bordered: boolean;
    cursor: boolean;
    constructor(renderer: Renderer2, el: ElementRef);
    ngOnInit(): void;
    private addClasses;
    private addContainerClass;
    static ɵfac: i0.ɵɵFactoryDeclaration<ContainerDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<ContainerDirective, "div[tgContainer]", never, { "partitioned": { "alias": "partitioned"; "required": false; }; "shadow": { "alias": "shadow"; "required": false; }; "bordered": { "alias": "bordered"; "required": false; }; "cursor": { "alias": "cursor"; "required": false; }; }, {}, never, never, false, never>;
}
//# sourceMappingURL=container.directive.d.ts.map