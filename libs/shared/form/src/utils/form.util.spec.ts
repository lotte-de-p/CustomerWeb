import { FormControl, FormGroup } from '@angular/forms';
import { extractFormDetails } from './form.util';

describe('extractFormDetails', () => {
  it('should return details for a FormControl', () => {
    const control = new FormControl('value');
    const result = extractFormDetails(control);
    expect(result).toEqual({
      _value: 'value',
      _touched: false,
      _valid: true,
      _dirty: false,
      _errors: null,
      _enabled: true,
    });
  });

  it('should return details for a FormGroup', () => {
    const group = new FormGroup({
      control1: new FormControl('value1'),
      control2: new FormControl('value2'),
    });
    const result = extractFormDetails(group);
    expect(result).toEqual({
      control1: {
        _value: 'value1',
        _touched: false,
        _valid: true,
        _dirty: false,
        _errors: null,
        _enabled: true,
      },
      control2: {
        _value: 'value2',
        _touched: false,
        _valid: true,
        _dirty: false,
        _errors: null,
        _enabled: true,
      },
    });
  });

  it('should handle nested FormGroups', () => {
    const nestedGroup = new FormGroup({
      nestedControl: new FormControl('nestedValue'),
    });
    const group = new FormGroup({
      control: new FormControl('value'),
      nestedGroup,
    });
    const result = extractFormDetails(group);
    expect(result).toEqual({
      control: {
        _value: 'value',
        _touched: false,
        _valid: true,
        _dirty: false,
        _errors: null,
        _enabled: true,
      },
      nestedGroup: {
        nestedControl: {
          _value: 'nestedValue',
          _touched: false,
          _valid: true,
          _dirty: false,
          _errors: null,
          _enabled: true,
        },
      },
    });
  });

  it('should handle undefined control', () => {
    const result = extractFormDetails(undefined);
    expect(result).toEqual({
      _value: undefined,
      _touched: undefined,
      _valid: undefined,
      _dirty: undefined,
      _errors: undefined,
      _enabled: undefined,
    });
  });
});
