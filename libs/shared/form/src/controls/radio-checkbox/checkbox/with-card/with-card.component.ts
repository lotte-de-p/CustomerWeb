import { Component, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { AbstractCheckboxComponent } from '../abstract-checkbox.component';
import { InputOption, InputOptionWithSubscript } from '../../../radio';

@Component({
  selector: 'tg-form-checkbox-with-card',
  templateUrl: './with-card.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputCheckboxWithCardComponent),
      multi: true,
    },
  ],
})
export class InputCheckboxWithCardComponent extends AbstractCheckboxComponent {
  getSubscript(option: InputOption): string {
    return (option as InputOptionWithSubscript).subScript || '';
  }
}
