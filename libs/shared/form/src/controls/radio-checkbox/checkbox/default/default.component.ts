import { Component, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { AbstractCheckboxComponent } from '../abstract-checkbox.component';

@Component({
  selector: 'tg-form-checkbox',
  templateUrl: './default.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputCheckboxDefaultComponent),
      multi: true,
    },
  ],
})
export class InputCheckboxDefaultComponent extends AbstractCheckboxComponent {}
