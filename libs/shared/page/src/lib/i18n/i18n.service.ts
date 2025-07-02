import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import localeFR from '@angular/common/locales/fr-BE';
import localeEN from '@angular/common/locales/en-BE';
import localeNL from '@angular/common/locales/nl-BE';
import { registerLocaleData } from '@angular/common';
import { LanguageEnum } from './language.enum';
import { UrlService } from '../page';

@Injectable({
  providedIn: 'root',
})
export class I18nService {
  private readonly LANGUAGES = Object.values(LanguageEnum);
  private readonly DEFAULT_LANGUAGE = LanguageEnum.EN;

  constructor(
    private readonly urlService: UrlService,
    private readonly translateService: TranslateService
  ) {}

  get languages(): LanguageEnum[] {
    return this.LANGUAGES;
  }

  setDefaultLanguageAndLocale(): void {
    this.translateService.addLangs(this.LANGUAGES);
    this.translateService.setDefaultLang(this.DEFAULT_LANGUAGE);
    registerLocaleData(this.getLocale(this.DEFAULT_LANGUAGE));
  }

  setLanguage(language?: LanguageEnum): void {
    const lang = language ? language : this.getLanguage();
    this.translateService.use(lang);
    registerLocaleData(this.getLocale(lang));
  }

  getLanguage(): LanguageEnum {
    return this.urlService.getRequestParamValue('lang', this.DEFAULT_LANGUAGE) as LanguageEnum;
  }

  getLocale(language: string): unknown {
    switch (language) {
      case LanguageEnum.FR:
        return localeFR;
      case LanguageEnum.NL:
        return localeNL;
      case LanguageEnum.EN:
      default:
        return localeEN;
    }
  }
}
