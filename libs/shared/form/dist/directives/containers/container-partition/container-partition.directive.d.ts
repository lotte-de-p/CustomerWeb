import { ElementRef, OnInit, Renderer2 } from '@angular/core';
import * as i0 from "@angular/core";
export declare class ContainerPartitionDirective implements OnInit {
    renderer: Renderer2;
    el: ElementRef;
    firstItem: boolean;
    lastItem: boolean;
    inverted: boolean;
    dashed: boolean;
    noBorders: boolean;
    noPadding: boolean;
    constructor(renderer: Renderer2, el: ElementRef);
    ngOnInit(): void;
    private addClasses;
    private addContainerClass;
    static ɵfac: i0.ɵɵFactoryDeclaration<ContainerPartitionDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<ContainerPartitionDirective, "div[tgContainerPartition]", never, { "firstItem": { "alias": "firstItem"; "required": false; }; "lastItem": { "alias": "lastItem"; "required": false; }; "inverted": { "alias": "inverted"; "required": false; }; "dashed": { "alias": "dashed"; "required": false; }; "noBorders": { "alias": "noBorders"; "required": false; }; "noPadding": { "alias": "noPadding"; "required": false; }; }, {}, never, never, false, never>;
}
//# sourceMappingURL=container-partition.directive.d.ts.map