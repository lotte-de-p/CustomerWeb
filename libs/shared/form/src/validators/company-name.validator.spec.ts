import { AbstractControl } from '@angular/forms';
import { cleanStylesFromDom } from '@telenet/ng-lib-shared';
import { CompanyNameValidator } from './company-name.validator';
describe('CompanyNameValidator', () => {
  describe('validCompanyName', () => {
    it('should return an error when the company name is not a correct invalid', () => {
      let control = { value: 'company*&^^name' };
      expect(CompanyNameValidator.validCompanyName(control as AbstractControl)).toEqual({ invalidCompanyName: true });

      control = { value: 'Telenet"""""s' };
      expect(CompanyNameValidator.validCompanyName(control as AbstractControl)).toEqual({ invalidCompanyName: true });

      control = { value: 'Telenet_Base' };
      expect(CompanyNameValidator.validCompanyName(control as AbstractControl)).toEqual({ invalidCompanyName: true });

      control = { value: '^%&**((((' };
      expect(CompanyNameValidator.validCompanyName(control as AbstractControl)).toEqual({ invalidCompanyName: true });
    });

    it('should return null when the company name is a valid invalid', () => {
      const control = { value: 'Telenet-Base' };
      expect(CompanyNameValidator.validCompanyName(control as AbstractControl)).toEqual(null);
    });
  });

  afterEach(() => {
    cleanStylesFromDom();
  });
});
