import { Directive } from '@angular/core';
import { Validator, AbstractControl, NG_VALIDATORS, ValidationErrors } from '@angular/forms';

@Directive({
  standalone: true,
  selector: 'input[tgDemoUtilAppCity]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: CityValidator,
      multi: true,
    },
  ],
})
export class CityValidator implements Validator {
  public validate(c: AbstractControl): ValidationErrors {
    const allowedCities = ['Graz', 'Hamburg', 'Frankfurt', 'Wien', 'Mallorca'];
    if (allowedCities.includes(c.value)) {
      return {};
    }

    return { appCity: true };
  }
}
