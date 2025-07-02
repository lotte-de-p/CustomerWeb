import { cleanStylesFromDom } from '@telenet/ng-lib-shared';
import { TestBed } from '@angular/core/testing';
import { ConstraintsService } from './constraints.service';
import { FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';

describe('ConstraintsService', () => {
  let constraintsService: ConstraintsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [],
    });

    constraintsService = TestBed.inject(ConstraintsService);
  });

  describe('getFormattedNRN', () => {
    it('should return the formatted NRN', () => {
      const actual = constraintsService.getFormattedNRN('83239987634');
      expect(actual).toBe('83.23.99-876.34');
    });

    it('should return the NRN with out format if length not 11', () => {
      const actual = constraintsService.getFormattedNRN('8323998763');
      expect(actual).toBe('8323998763');
    });
  });

  describe('isValidationError', () => {
    it('should return TRUE if there are errors', () => {
      const form = new FormGroup({
        fieldName: new FormControl(null, [Validators.required]),
      });
      const errors = {
        required: true,
      } as ValidationErrors;
      form.get('fieldName')?.markAsTouched();
      form.get('fieldName')?.markAsDirty();
      form.get('fieldName')?.setErrors(errors);
      const actual = constraintsService.isValidationError('fieldName', form, 'required');
      expect(actual).toBe(true);
    });

    it('should return FALSE if there is are no errors', () => {
      const form = new FormGroup({
        fieldName: new FormControl(null, []),
      });
      form.get('fieldName')?.markAsTouched();
      const actual = constraintsService.isValidationError('fieldName', form, 'required');
      expect(actual).toBe(false);
    });
  });

  describe('isValidationErrorWhenPristine', () => {
    it('should return true if there are errors', () => {
      const form = new FormGroup({
        fieldName: new FormControl(null, [Validators.required]),
      });
      const errors = {
        required: true,
      } as ValidationErrors;
      form.get('fieldName')?.setErrors(errors);

      const actual = constraintsService.isValidationErrorWhenPristine('fieldName', form, 'required');

      expect(actual).toBe(true);
    });

    it('should return false if there are no errors', () => {
      const form = new FormGroup({
        fieldName: new FormControl(null, []),
      });

      const actual = constraintsService.isValidationErrorWhenPristine('fieldName', form, 'required');

      expect(actual).toBe(false);
    });
  });

  describe('isValidAddressNumber', () => {
    it('should return TRUE if it is Valid Address Number', () => {
      const actual = constraintsService.isValidAddressNumber('123W');
      expect(actual).toBe(true);
    });
    it('should return FALSE if it is not valid address number', () => {
      const actual = constraintsService.isValidAddressNumber('$2');
      expect(actual).toBe(false);
    });
  });
  afterEach(() => {
    cleanStylesFromDom();
  });
});
