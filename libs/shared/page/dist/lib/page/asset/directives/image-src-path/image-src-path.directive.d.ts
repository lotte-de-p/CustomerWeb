import { ElementRef, OnChanges, SimpleChanges } from '@angular/core';
import * as i0 from "@angular/core";
export declare class ImageSrcPathDirective implements OnChanges {
    private readonly el;
    private readonly imageBasePath;
    override: boolean;
    src: string;
    constructor(el: ElementRef, imageBasePath: string);
    ngOnChanges(changes: SimpleChanges): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ImageSrcPathDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<ImageSrcPathDirective, "[src]", never, { "override": { "alias": "override"; "required": false; }; "src": { "alias": "src"; "required": false; }; }, {}, never, never, false, never>;
}
//# sourceMappingURL=image-src-path.directive.d.ts.map