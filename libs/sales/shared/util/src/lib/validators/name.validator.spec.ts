import { AbstractControl } from '@angular/forms';
import { NameValidator } from './name.validator';

describe('NameValidator', () => {
  describe('validNameText', () => {
    it('should return an error when text does not match the format', () => {
      const control = { value: 'test+user' };
      expect(NameValidator.validName(control as AbstractControl)).toEqual({ format: true });
    });

    it('should return null when text is in valid format', () => {
      const control = { value: 'Test-üsèr' };
      expect(NameValidator.validName(control as AbstractControl)).toEqual(null);
    });
  });
});
