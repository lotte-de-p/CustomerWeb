import { TestBed } from '@angular/core/testing';
import { I18nService } from './i18n.service';
import { TranslateFakeLoader, TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { expect, jest } from '@jest/globals';
import { LanguageEnum } from './language.enum';
import { UrlService } from '../page';

describe('I18NService', () => {
  let i18NService: I18nService, translateService: TranslateService, urlService: UrlService;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useClass: TranslateFakeLoader },
        }),
      ],
      providers: [{ provide: 'Window', useValue: {} }, TranslateService],
      schemas: [],
    });

    i18NService = TestBed.inject(I18nService);
    translateService = TestBed.inject(TranslateService);
    urlService = TestBed.inject(UrlService);
  });

  it('should create', () => {
    expect(i18NService).toBeTruthy();
  });

  describe('setDefaultLanguageAndLocale', () => {
    it('should initialize the default language and locale', () => {
      jest.spyOn(translateService, 'addLangs');
      jest.spyOn(translateService, 'setDefaultLang');

      i18NService.setDefaultLanguageAndLocale();

      expect(translateService.addLangs).toHaveBeenCalledWith(['nl', 'fr', 'en']);
      expect(translateService.setDefaultLang).toHaveBeenCalledWith('en');
    });
  });

  describe('setLanguage', () => {
    it('should set the language when language is provided', () => {
      jest.spyOn(translateService, 'use');

      i18NService.setLanguage(LanguageEnum.NL);

      expect(translateService.use).toHaveBeenCalledWith('nl');
    });

    it('should set the language when no language is provided', () => {
      jest.spyOn(translateService, 'use');
      jest.spyOn(urlService, 'getRequestParamValue').mockReturnValue(LanguageEnum.FR);

      i18NService.setLanguage();

      expect(translateService.use).toHaveBeenCalledWith('fr');
    });
  });
});
