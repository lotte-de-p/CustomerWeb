import { TestBed } from '@angular/core/testing';
import { LanguageService } from './language.service';
import localeNL from '@angular/common/locales/nl-BE';
import localeFR from '@angular/common/locales/fr-BE';
import localeEN from '@angular/common/locales/en-BE';
import { cleanStylesFromDom } from '@telenet/ng-lib-shared';
import { LanguageEnum } from '../../i18n/language.enum';

describe('LanguageService', () => {
  let languageService: LanguageService;
  const setLang = (type: string) => {
    return {
      document: {
        documentElement: {
          lang: type,
        },
      },
    };
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{ provide: 'Window', useValue: {} }],
    });
  });

  describe('getLanguage', () => {
    it('should return language as FR', () => {
      TestBed.overrideProvider('Window', {
        useValue: setLang(LanguageEnum.FR),
      });
      languageService = TestBed.inject(LanguageService);
      const actual = languageService.getLanguage();
      expect(actual).toBe(LanguageEnum.FR);
    });

    it('should return language as EN', () => {
      TestBed.overrideProvider('Window', {
        useValue: setLang(LanguageEnum.EN),
      });
      languageService = TestBed.inject(LanguageService);
      const actual = languageService.getLanguage();
      expect(actual).toBe(LanguageEnum.EN);
    });

    it('should return language as NL', () => {
      TestBed.overrideProvider('Window', {
        useValue: setLang(LanguageEnum.NL),
      });
      languageService = TestBed.inject(LanguageService);
      const actual = languageService.getLanguage();
      expect(actual).toBe(LanguageEnum.NL);
    });

    it('should return default language as NL', () => {
      TestBed.overrideProvider('Window', {
        useValue: setLang(''),
      });
      languageService = TestBed.inject(LanguageService);
      const actual = languageService.getLanguage();
      expect(actual).toBe(LanguageEnum.NL);
    });

    it('should return language as NL', () => {
      TestBed.overrideProvider('Window', {
        useValue: setLang('nl-BE'),
      });
      languageService = TestBed.inject(LanguageService);
      const actual = languageService.getLanguage();
      expect(actual).toBe(LanguageEnum.NL);
    });
  });

  describe('getLocale', () => {
    it('should return locale as FR', () => {
      TestBed.overrideProvider('Window', {
        useValue: setLang(LanguageEnum.FR),
      });
      languageService = TestBed.inject(LanguageService);
      const actual = languageService.getLocale();
      expect(actual).toBe(localeFR);
    });

    it('should return locale as EN', () => {
      TestBed.overrideProvider('Window', {
        useValue: setLang(LanguageEnum.EN),
      });
      languageService = TestBed.inject(LanguageService);
      const actual = languageService.getLocale();
      expect(actual).toBe(localeEN);
    });

    it('should return locale as NL', () => {
      TestBed.overrideProvider('Window', {
        useValue: setLang(LanguageEnum.NL),
      });
      languageService = TestBed.inject(LanguageService);
      const actual = languageService.getLocale();
      expect(actual).toBe(localeNL);
    });

    it('should return default locale as NL', () => {
      TestBed.overrideProvider('Window', {
        useValue: setLang(''),
      });
      languageService = TestBed.inject(LanguageService);
      const actual = languageService.getLocale();
      expect(actual).toBe(localeNL);
    });
  });

  describe('getLocaleString', () => {
    it('should return locale string as fr-BE', () => {
      TestBed.overrideProvider('Window', {
        useValue: setLang(LanguageEnum.FR),
      });
      languageService = TestBed.inject(LanguageService);
      const actual = languageService.getLocaleString();
      expect(actual).toBe('fr-BE');
    });

    it('should return locale string as en-BE', () => {
      TestBed.overrideProvider('Window', {
        useValue: setLang(LanguageEnum.EN),
      });
      languageService = TestBed.inject(LanguageService);
      const actual = languageService.getLocaleString();
      expect(actual).toBe('en-BE');
    });

    it('should return locale string as nl-BE', () => {
      TestBed.overrideProvider('Window', {
        useValue: setLang(LanguageEnum.NL),
      });
      languageService = TestBed.inject(LanguageService);
      const actual = languageService.getLocaleString();
      expect(actual).toBe('nl-BE');
    });

    it('should return default locale as nl-BE', () => {
      TestBed.overrideProvider('Window', {
        useValue: setLang(''),
      });
      languageService = TestBed.inject(LanguageService);
      const actual = languageService.getLocaleString();
      expect(actual).toBe('nl-BE');
    });
  });

  afterEach(() => {
    cleanStylesFromDom();
  });
});
