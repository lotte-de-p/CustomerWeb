import { AbstractControl } from '@angular/forms';
import { cleanStylesFromDom } from '@telenet/ng-lib-shared';
import { EmailValidator } from './email.validator';

describe('EmailValidator', () => {
  describe('validEmail', () => {
    it('should return an error when the email is not a correct format', () => {
      let control = { value: '3589978' };
      expect(EmailValidator.validEmail(control as AbstractControl)).toEqual({ format: false });

      control = { value: 'test' };
      expect(EmailValidator.validEmail(control as AbstractControl)).toEqual({ format: false });

      control = { value: 'test@test' };
      expect(EmailValidator.validEmail(control as AbstractControl)).toEqual({ format: false });

      control = { value: 'test.com' };
      expect(EmailValidator.validEmail(control as AbstractControl)).toEqual({ format: false });
    });

    it('should return null when the email is a valid format', () => {
      const control = { value: 'test@test.com' };
      expect(EmailValidator.validEmail(control as AbstractControl)).toEqual(null);
    });
  });

  afterEach(() => {
    cleanStylesFromDom();
  });
});
