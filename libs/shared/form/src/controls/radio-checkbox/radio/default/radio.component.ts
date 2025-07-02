import { Component, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { AbstractRadioComponent } from '../abstract-radio.component';

@Component({
  selector: 'tg-form-radio-default',
  templateUrl: './radio.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputRadioDefaultComponent),
      multi: true,
    },
  ],
})
export class InputRadioDefaultComponent extends AbstractRadioComponent {}
