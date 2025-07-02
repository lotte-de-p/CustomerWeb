import { InjectionToken, ModuleWithProviders } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import * as i0 from "@angular/core";
import * as i1 from "@ngx-translate/core";
export declare const TESTING_TRANSLATION_CONFIG: InjectionToken<TestingTranslateConfig>;
interface TestingTranslateConfig {
    language?: 'fr' | 'nl' | 'en';
    translations?: Record<string, string | unknown>;
}
export declare class TgTranslateTestingModule {
    constructor(config: TestingTranslateConfig, translateService: TranslateService);
    static forRoot(config?: TestingTranslateConfig): ModuleWithProviders<TgTranslateTestingModule>;
    static ɵfac: i0.ɵɵFactoryDeclaration<TgTranslateTestingModule, [{ optional: true; }, null]>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<TgTranslateTestingModule, never, [typeof i1.TranslateModule], [typeof i1.TranslateModule]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<TgTranslateTestingModule>;
}
export {};
//# sourceMappingURL=translate-testing.module.d.ts.map