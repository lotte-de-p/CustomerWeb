import { Component, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { InputComponent } from './input.component';

@Component({
  selector: 'tg-form-input-atomic',
  templateUrl: 'input-atomic.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputAtomicComponent),
      multi: true,
    },
  ],
})
export class InputAtomicComponent extends InputComponent {}
