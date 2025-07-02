import { Component, forwardRef, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { InputOptionWithImage } from '../../../radio';
import { AbstractRadioComponent } from '../abstract-radio.component';

@Component({
  selector: 'tg-form-radio-with-card',
  templateUrl: './with-card.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputRadioWithCardComponent),
      multi: true,
    },
  ],
})
export class InputRadioWithCardComponent extends AbstractRadioComponent {
  @Input() optionList: InputOptionWithImage[] = [];
  @Input() multipleSelectable = false;
  @Input() small = false;
}
