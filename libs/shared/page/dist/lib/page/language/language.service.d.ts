import { LanguageEnum } from '../../i18n/language.enum';
import * as i0 from "@angular/core";
export declare class LanguageService {
    private readonly window;
    constructor(window: Window);
    language?: LanguageEnum;
    getLanguage(): LanguageEnum;
    getLocale(): unknown;
    getLocaleString(): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<LanguageService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<LanguageService>;
}
//# sourceMappingURL=language.service.d.ts.map