import { TestBed } from '@angular/core/testing';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { InputOption } from '@telenet/ng-lib-form';
import { SalutationInputOptionService } from './salutation-input-option.service';
import { FleetProfileFormConstants } from '../constants/fleet-profile-form-constants';
import { expect, jest } from '@jest/globals';
import { LineIdentificationDetailsConstants } from '../constants/line-identification-details.constants';

const TRANSLATED_MR = 'translated-mr';
const TRANSLATED_MRS = 'translated-mrs';
describe('SalutationInputOptionService', () => {
  let salutationInputOptionService: SalutationInputOptionService;
  let translateService: TranslateService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TranslateModule.forRoot()],
      providers: [TranslateService],
    });
    salutationInputOptionService = TestBed.inject(SalutationInputOptionService);
    translateService = TestBed.inject(TranslateService);
  });

  describe('getSalutationOptions', () => {
    it('should get salutation input options', () => {
      const translatedText1 = 'translated-text-1';
      const translatedText2 = 'translated-text-2';

      jest.spyOn(translateService, 'instant').mockImplementation((param) => {
        if (param === FleetProfileFormConstants.GENDER_LIST[0].translation) {
          return translatedText1;
        }
        if (param === FleetProfileFormConstants.GENDER_LIST[1].translation) {
          return translatedText2;
        }
        return null;
      });

      const expectedResult = [
        new InputOption(translatedText1, FleetProfileFormConstants.GENDER_LIST[0].key),
        new InputOption(translatedText2, FleetProfileFormConstants.GENDER_LIST[1].key),
      ];

      const result = salutationInputOptionService.getSalutationOptions();

      expect(result).toEqual(expectedResult);
    });
  });
  describe('getSalutationOptions methods', () => {
    beforeEach(() => {
      jest
        .spyOn(salutationInputOptionService, 'getSalutationOptions')
        .mockReturnValue([
          { value: TRANSLATED_MR, label: 'mr' } as InputOption,
          { value: TRANSLATED_MRS, label: 'mrs' } as InputOption,
        ]);
    });
    describe('getGender', () => {
      it('should get male gender for mr epithet', () => {
        const result = salutationInputOptionService.getGender(TRANSLATED_MR);
        expect(result).toEqual('Male');
      });
      it('should get female gender for mrs epithet', () => {
        const result = salutationInputOptionService.getGender(TRANSLATED_MRS);
        expect(result).toEqual('Female');
      });
      it('should return undefined for wrong gender', () => {
        const result = salutationInputOptionService.getGender('translated');
        expect(result).toBeUndefined();
      });
    });

    describe('getEpithet', () => {
      it('should get Mr. gender for epithet', () => {
        const result = salutationInputOptionService.getEpithet(TRANSLATED_MR);
        expect(result).toEqual(FleetProfileFormConstants.GENDER_LIST[0].epithet);
      });
      it('should get Mrs. gender for epithet', () => {
        const result = salutationInputOptionService.getEpithet(TRANSLATED_MRS);
        expect(result).toEqual(FleetProfileFormConstants.GENDER_LIST[1].epithet);
      });
      it('should return undefined for wrong epithet', () => {
        const result = salutationInputOptionService.getEpithet('translated');
        expect(result).toBeUndefined();
      });
    });

    describe('getSalutation', () => {
      it('should get mr gender for Mr.', () => {
        const result = salutationInputOptionService.getSalutation(FleetProfileFormConstants.GENDER_LIST[0].epithet);
        expect(result).toEqual(FleetProfileFormConstants.GENDER_LIST[0].translation);
      });
      it('should get mrs gender for Mrs.', () => {
        const result = salutationInputOptionService.getSalutation(FleetProfileFormConstants.GENDER_LIST[1].epithet);
        expect(result).toEqual(FleetProfileFormConstants.GENDER_LIST[1].translation);
      });
      it('should get empty gender for no epithet', () => {
        const result = salutationInputOptionService.getSalutation(LineIdentificationDetailsConstants.EMPTY);
        expect(result).toEqual(FleetProfileFormConstants.EMPTY);
      });
    });
  });
});
