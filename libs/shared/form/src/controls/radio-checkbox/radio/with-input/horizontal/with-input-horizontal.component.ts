import { Component, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { AbstractInputRadioWithInputComponent } from '../abstract-with-input.component';

@Component({
  selector: 'tg-form-radio-with-input-horizontal',
  templateUrl: './with-input-horizontal.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputRadioWithInputHorizontalComponent),
      multi: true,
    },
  ],
})
export class InputRadioWithInputHorizontalComponent extends AbstractInputRadioWithInputComponent {
  onBlur() {
    this.trackingEvent.emit({ label: this.getLabel(), value: this.inputValue });
  }
}
