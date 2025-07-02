import { cleanStylesFromDom } from '@telenet/ng-lib-shared';
import { TestBed } from '@angular/core/testing';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { InputOption } from '@telenet/ng-lib-form';
import { LanguageInputOptionService } from './language-input-option.service';
import { FleetProfileFormConstants } from '../constants/fleet-profile-form-constants';
import { expect, jest } from '@jest/globals';

describe('LanguageInputOptionService', () => {
  let languageInputOptionService: LanguageInputOptionService;
  let translateService: TranslateService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TranslateModule.forRoot()],
      providers: [TranslateService],
    });
    languageInputOptionService = TestBed.inject(LanguageInputOptionService);
    translateService = TestBed.inject(TranslateService);
  });

  describe('getLanguageOptions', () => {
    it('should get language input options', () => {
      const translatedValue1 = 'translated-text-1';
      const translatedValue2 = 'translated-text-2';
      const translatedValue3 = 'translated-text-3';
      jest.spyOn(translateService, 'instant').mockImplementation((param) => {
        if (param === FleetProfileFormConstants.LANGUAGE_TYPES[0].translationKey) {
          return translatedValue1;
        }
        if (param === FleetProfileFormConstants.LANGUAGE_TYPES[1].translationKey) {
          return translatedValue2;
        }
        if (param === FleetProfileFormConstants.LANGUAGE_TYPES[2].translationKey) {
          return translatedValue3;
        }
        return undefined;
      });

      const expectedResult = [
        new InputOption(translatedValue1, FleetProfileFormConstants.LANGUAGE_TYPES[0].key),
        new InputOption(translatedValue2, FleetProfileFormConstants.LANGUAGE_TYPES[1].key),
        new InputOption(translatedValue3, FleetProfileFormConstants.LANGUAGE_TYPES[2].key),
      ];

      const result = languageInputOptionService.getLanguageOptions();

      expect(result).toEqual(expectedResult);
    });
  });

  describe('given LanguageOptions', () => {
    beforeEach(() => {
      jest
        .spyOn(languageInputOptionService, 'getLanguageOptions')
        .mockReturnValue([
          { value: 'value1', label: 'label1' } as InputOption,
          { value: 'value2', label: 'label2' } as InputOption,
          { value: 'value3', label: 'label3' } as InputOption,
        ]);
    });
    it('getTranslatedLanguage should get translated language', () => {
      const result = languageInputOptionService.getTranslatedLanguage('label2');

      expect(result).toEqual('value2');
    });

    it('getTranslatedLanguage should get undefined for non existent language value', () => {
      const result = languageInputOptionService.getTranslatedLanguage('label4');

      expect(result).toBeUndefined();
    });

    it('getLanguageValue should the right key for translated value', () => {
      const result = languageInputOptionService.getLanguageValue('value2');

      expect(result).toEqual('label2');
    });

    it('getLanguageValue should get undefined for non existent translated language', () => {
      const result = languageInputOptionService.getLanguageValue('label4');

      expect(result).toBeUndefined();
    });
  });

  afterEach(() => {
    cleanStylesFromDom();
  });
});
