import { Component, forwardRef, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { AbstractRadioComponent } from '../radio-checkbox';
import { InputOptionWithCard } from '../radio';
import { LabelUtil } from '../../utils';

@Component({
  selector: 'tg-form-radio-card-radio-right',
  templateUrl: './input-radio-card-radio-right.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputRadioCardRadioRightComponent),
      multi: true,
    },
  ],
})
export class InputRadioCardRadioRightComponent extends AbstractRadioComponent {
  @Input() optionList: InputOptionWithCard[] = [];

  getOptionSubLabel(option: InputOptionWithCard): string {
    return LabelUtil.getLabelKeyWithTypeText(this.getKey(option.text));
  }
}
