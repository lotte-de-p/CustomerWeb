import { Component, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { AbstractCheckboxComponent } from '../abstract-checkbox.component';

@Component({
  selector: 'tg-form-checkbox-legal',
  templateUrl: './legal.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputCheckboxLegalComponent),
      multi: true,
    },
  ],
})
export class InputCheckboxLegalComponent extends AbstractCheckboxComponent {}
