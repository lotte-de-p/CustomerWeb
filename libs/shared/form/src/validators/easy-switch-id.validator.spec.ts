import { FormControl } from '@angular/forms';
import { EasySwitchIdValidator } from './easy-switch-id.validator';

describe('EasySwitchIdValidator', () => {
  const formControl = new FormControl();

  describe('isValidEasySwitchId', () => {
    it('should return null if the input value is a vaild easy switch id', () => {
      const input = '958781746';
      formControl.reset(input);
      const result = EasySwitchIdValidator.isValidEasySwitchId(formControl);
      expect(result).toBe(null);
    });

    it('should return null if the input value is an telenet easy switch id', () => {
      const input = '1003583117';
      formControl.reset(input);
      const result = EasySwitchIdValidator.isValidEasySwitchId(formControl);
      expect(result).toBe(null);
    });

    it('should return invalidEid: true if the input value is not a vaild easy switch id', () => {
      const input = '121212';
      formControl.reset(input);
      const result = EasySwitchIdValidator.isValidEasySwitchId(formControl);
      expect(result).toEqual({ invalidEid: true });
    });

    it('should return null if the input value is null', () => {
      formControl.reset(null);

      const result = EasySwitchIdValidator.isValidEasySwitchId(formControl);

      expect(result).toBe(null);
    });
  });
});
