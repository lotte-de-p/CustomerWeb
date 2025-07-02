import { Component, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { AbstractRadioComponent } from '../abstract-radio.component';

@Component({
  selector: 'tg-form-radio-with-card-mini-no-select-box-labels',
  templateUrl: './with-card-mini-no-select-box-labels.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputRadioWithCardMiniNoSelectBoxLabelsComponent),
      multi: true,
    },
  ],
})
export class InputRadioWithCardMiniNoSelectBoxLabelsComponent extends AbstractRadioComponent {}
