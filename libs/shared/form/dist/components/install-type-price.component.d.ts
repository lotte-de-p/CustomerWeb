import { OnInit } from '@angular/core';
import { LanguageService } from '@telenet/ng-lib-page';
import { InstallTypePriceModel } from '../models';
import * as i0 from "@angular/core";
export declare class InstallTypePriceComponent implements OnInit {
    private readonly languageService;
    installTypePrice: InstallTypePriceModel;
    integer: string;
    decimal: string;
    strikeThroughPrice: string;
    isFrench: boolean;
    constructor(languageService: LanguageService);
    ngOnInit(): void;
    private splitPriceIntoIntegerAndDecimal;
    static ɵfac: i0.ɵɵFactoryDeclaration<InstallTypePriceComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<InstallTypePriceComponent, "app-install-type-price", never, { "installTypePrice": { "alias": "installTypePrice"; "required": false; }; }, {}, never, never, false, never>;
}
//# sourceMappingURL=install-type-price.component.d.ts.map