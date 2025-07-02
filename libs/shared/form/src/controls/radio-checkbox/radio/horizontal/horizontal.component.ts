import { Component, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { AbstractRadioComponent } from '../abstract-radio.component';

@Component({
  selector: 'tg-form-radio-horizontal',
  templateUrl: './horizontal.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputRadioHorizontalComponent),
      multi: true,
    },
  ],
})
export class InputRadioHorizontalComponent extends AbstractRadioComponent {}
