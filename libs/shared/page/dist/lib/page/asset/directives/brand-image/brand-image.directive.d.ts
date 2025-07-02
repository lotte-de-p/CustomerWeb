import { ElementRef, OnChanges } from '@angular/core';
import * as i0 from "@angular/core";
type ImageSrcSet = {
    desktop: string;
    mobile: string;
    tablet: string;
};
export declare class BrandImageDirective implements OnChanges {
    private readonly el;
    isTelenet: boolean;
    img: ImageSrcSet | string;
    telenetImg: ImageSrcSet | string;
    baseImg: ImageSrcSet | string;
    constructor(el: ElementRef);
    ngOnChanges(): void;
    get image(): string | ImageSrcSet;
    private getImageSrcSet;
    static ɵfac: i0.ɵɵFactoryDeclaration<BrandImageDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<BrandImageDirective, "[brandImage]", never, { "isTelenet": { "alias": "isTelenet"; "required": false; }; "img": { "alias": "img"; "required": false; }; "telenetImg": { "alias": "telenetImg"; "required": false; }; "baseImg": { "alias": "baseImg"; "required": false; }; }, {}, never, never, true, never>;
}
export {};
//# sourceMappingURL=brand-image.directive.d.ts.map