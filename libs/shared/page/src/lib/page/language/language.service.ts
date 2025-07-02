import { Inject, Injectable } from '@angular/core';
import localeNL from '@angular/common/locales/nl-BE';
import localeFR from '@angular/common/locales/fr-BE';
import localeEN from '@angular/common/locales/en-BE';
import { LanguageEnum } from '../../i18n/language.enum';

@Injectable({ providedIn: 'root' })
export class LanguageService {
  constructor(@Inject('Window') private readonly window: Window) {}

  language?: LanguageEnum;

  getLanguage(): LanguageEnum {
    let lang = this.window.document.documentElement.lang;
    lang = lang && lang.toLowerCase();
    if (!this.language && lang) {
      switch (true) {
        case lang.includes(LanguageEnum.FR):
          return LanguageEnum.FR;
        case lang.includes(LanguageEnum.EN):
          return LanguageEnum.EN;
        case lang.includes(LanguageEnum.NL):
        default:
          return LanguageEnum.NL;
      }
    } else {
      return LanguageEnum.NL;
    }
  }

  getLocale(): unknown {
    switch (this.getLanguage()) {
      case LanguageEnum.FR:
        return localeFR;
      case LanguageEnum.EN:
        return localeEN;
      case LanguageEnum.NL:
      default:
        return localeNL;
    }
  }

  getLocaleString(): string {
    switch (this.getLanguage()) {
      case LanguageEnum.FR:
        return 'fr-BE';
      case LanguageEnum.EN:
        return 'en-BE';
      case LanguageEnum.NL:
      default:
        return 'nl-BE';
    }
  }
}
