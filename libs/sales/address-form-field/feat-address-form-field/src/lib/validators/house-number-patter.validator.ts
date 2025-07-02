import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

// Custom validator function to handle both string and AddressUnit object
export function validateHouseNumber(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;
    const pattern = /^\d*$/; // Adjust pattern as needed for your requirements

    if (typeof value === 'string') {
      return pattern.test(value) ? null : { pattern: true };
    } else if (typeof value === 'object' && value !== null && 'name' in value) {
      return pattern.test(value.name) ? null : { pattern: true };
    }

    return { invalidType: true }; // Return an error if it's neither a string nor an AddressUnit
  };
}
