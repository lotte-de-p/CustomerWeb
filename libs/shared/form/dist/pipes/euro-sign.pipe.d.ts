import { PipeTransform } from '@angular/core';
import { LanguageService } from '@telenet/ng-lib-page';
import * as i0 from "@angular/core";
export declare class EuroSignPipe implements PipeTransform {
    private readonly languageService;
    constructor(languageService: LanguageService);
    transform(value: string): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<EuroSignPipe, never>;
    static ɵpipe: i0.ɵɵPipeDeclaration<EuroSignPipe, "euroSign", true>;
}
//# sourceMappingURL=euro-sign.pipe.d.ts.map