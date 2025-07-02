import { AbstractControl, ValidatorFn } from '@angular/forms';
import { NetworkNameValidator } from './network-name.validator';
import { cleanStylesFromDom } from '@telenet/ng-lib-shared';

describe('NetworkNameValidator', () => {
  let validatorFn: ValidatorFn;

  describe('validNetworkName', () => {
    beforeEach(() => {
      validatorFn = NetworkNameValidator.validNetworkName(['telenet'], ['secure']);
    });

    it('should return an error when start with characters like `",', () => {
      const control = { value: '"222444' };
      expect(validatorFn(control as AbstractControl)).toEqual({
        pattern: true,
        notStartingWithSpace: false,
        hasForbiiddenSSIDs: false,
      });
    });

    it('should return an error when start with space', () => {
      const control = { value: ' 1a' };
      expect(validatorFn(control as AbstractControl)).toEqual({
        pattern: false,
        notStartingWithSpace: true,
        hasForbiiddenSSIDs: false,
      });
    });

    it('should return an error when exact combination found', () => {
      const control = { value: 'telenet' };
      expect(validatorFn(control as AbstractControl)).toEqual({
        pattern: false,
        notStartingWithSpace: false,
        hasForbiiddenSSIDs: true,
      });
    });

    it('should return null when if no exact combination found', () => {
      const control = { value: 'Telenet12' };
      expect(validatorFn(control as AbstractControl)).toEqual(null);
    });
  });

  afterEach(() => {
    cleanStylesFromDom();
  });
});
