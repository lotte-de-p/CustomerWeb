import { FormControl } from '@angular/forms';
import { conditionalPatternValidator } from './conditional.validator';

describe('conditionalPatternValidator', () => {
  const pattern = /^[A-Za-z0-9]+(\/?)+([A-Za-z0-9]{0,4}){0,6}$/;

  it('should return null if the input string matches the pattern', () => {
    const control = new FormControl('12345');
    expect(conditionalPatternValidator(pattern)(control)).toBeNull();
  });

  it('should return an error object if the input string does not match the pattern', () => {
    const control = new FormControl('abc/12345/678');
    expect(conditionalPatternValidator(pattern)(control)).toEqual({ pattern: true });
  });

  it('should return null if the input is an object (non-string)', () => {
    const control = new FormControl({ boxNumber: '123', floor: '2' });
    expect(conditionalPatternValidator(pattern)(control)).toBeNull();
  });

  it('should return null if the input is null', () => {
    const control = new FormControl(null);
    expect(conditionalPatternValidator(pattern)(control)).toBeNull();
  });

  it('should return an error if the input is an empty string', () => {
    const control = new FormControl('');
    expect(conditionalPatternValidator(pattern)(control)).toEqual({ pattern: true });
  });

  it('should return null if the input is a number', () => {
    const control = new FormControl(123456);
    expect(conditionalPatternValidator(pattern)(control)).toBeNull();
  });
});
