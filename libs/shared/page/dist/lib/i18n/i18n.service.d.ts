import { TranslateService } from '@ngx-translate/core';
import { LanguageEnum } from './language.enum';
import { UrlService } from '../page';
import * as i0 from "@angular/core";
export declare class I18nService {
    private readonly urlService;
    private readonly translateService;
    private readonly LANGUAGES;
    private readonly DEFAULT_LANGUAGE;
    constructor(urlService: UrlService, translateService: TranslateService);
    get languages(): LanguageEnum[];
    setDefaultLanguageAndLocale(): void;
    setLanguage(language?: LanguageEnum): void;
    getLanguage(): LanguageEnum;
    getLocale(language: string): unknown;
    static ɵfac: i0.ɵɵFactoryDeclaration<I18nService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<I18nService>;
}
//# sourceMappingURL=i18n.service.d.ts.map