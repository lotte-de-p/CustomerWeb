import { TranslateLoader } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import * as i0 from "@angular/core";
export declare class TelenetTranslateLoader implements TranslateLoader {
    window: Window;
    private readonly pathCategorisationService;
    private readonly postfixes;
    constructor(window: Window);
    private initializeBrandAndCategoryLabels;
    private overwriteOriginalLabelWithBrandOrCategorySpecificLabel;
    private getPostfix;
    getTranslation(_lang: string): Observable<unknown>;
    private getTranslationData;
    static ɵfac: i0.ɵɵFactoryDeclaration<TelenetTranslateLoader, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<TelenetTranslateLoader>;
}
//# sourceMappingURL=main-translate-loader.d.ts.map