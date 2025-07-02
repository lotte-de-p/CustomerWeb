import { Component, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { AbstractInputRadioWithInputComponent } from '../abstract-with-input.component';

@Component({
  selector: 'tg-form-radio-with-input-vertical',
  templateUrl: './with-input-vertical.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputRadioWithInputVerticalComponent),
      multi: true,
    },
  ],
})
export class InputRadioWithInputVerticalComponent extends AbstractInputRadioWithInputComponent {
  onBlur() {
    this.trackingEvent.emit({ label: this.getLabel(), value: this.inputValue });
  }
}
