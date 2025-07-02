import { AbstractControl } from '@angular/forms';
import { validateHouseNumber } from './house-number-patter.validator';

describe('validateHouseNumber', () => {
  let validator: ReturnType<typeof validateHouseNumber>;

  beforeEach(() => {
    validator = validateHouseNumber();
  });

  it('should return null for a valid string house number', () => {
    const mockControl: AbstractControl = { value: '123' } as AbstractControl;
    const result = validator(mockControl);
    expect(result).toBeNull();
  });

  it('should return a pattern error for an invalid string house number', () => {
    const mockControl: AbstractControl = { value: '123a' } as AbstractControl;
    const result = validator(mockControl);
    expect(result).toEqual({ pattern: true });
  });

  it('should return null for a valid AddressUnit object', () => {
    const mockControl: AbstractControl = { value: { name: '456' } } as AbstractControl;
    const result = validator(mockControl);
    expect(result).toBeNull();
  });

  it('should return a pattern error for an invalid AddressUnit object', () => {
    const mockControl: AbstractControl = { value: { name: '456b' } } as AbstractControl;
    const result = validator(mockControl);
    expect(result).toEqual({ pattern: true });
  });

  it('should return an invalidType error for a non-string, non-object value', () => {
    const mockControl: AbstractControl = { value: 123 } as AbstractControl;
    const result = validator(mockControl);
    expect(result).toEqual({ invalidType: true });
  });

  it('should return an invalidType error for an object without a name property', () => {
    const mockControl: AbstractControl = { value: { id: '1' } } as AbstractControl;
    const result = validator(mockControl);
    expect(result).toEqual({ invalidType: true });
  });

  it('should return null for an empty string', () => {
    const mockControl: AbstractControl = { value: '' } as AbstractControl;
    const result = validator(mockControl);
    expect(result).toBeNull();
  });

  it('should return null for null value', () => {
    const mockControl: AbstractControl = { value: null } as AbstractControl;
    const result = validator(mockControl);
    expect(result).toEqual({ invalidType: true });
  });

  it('should return null for undefined value', () => {
    const mockControl: AbstractControl = { value: undefined } as AbstractControl;
    const result = validator(mockControl);
    expect(result).toEqual({ invalidType: true });
  });
});
