import { Component, Input } from '@angular/core';
import { AbstractRadioComponent } from '../abstract-radio.component';
import { InputOption } from '../../../radio';

const EMPTY_INPUT_VALUE = 'EMPTY_INPUT';

@Component({
  selector: 'tg-form-abstract-radio-with-input',
  templateUrl: './abstract-with-input.component.html',
})
export class AbstractInputRadioWithInputComponent extends AbstractRadioComponent {
  @Input() optionList: InputOption[] = [];
  @Input() fieldLabel: string;
  @Input() inputPlaceholder: string;

  inputRadioSelected = false;
  inputValue: string;

  writeValue(optionValue: string): void {
    if (optionValue) {
      this.selectedOption = this.optionList.find((optionOfList) => {
        return optionOfList.value === optionValue;
      });
      if (!this.selectedOption) {
        this.inputValue = optionValue === EMPTY_INPUT_VALUE ? '' : optionValue;
        this.selectInput();
      }
    } else {
      this.selectedOption = undefined;
    }
  }

  selectOption(option: InputOption): void {
    this.inputRadioSelected = false;
    this.selectedOption = option;
    this.inputValue = '';
    this.onTouch(option.value);
    this.onChange(option.value);
    this.selectEvent.emit();
    this.trackingEvent.emit({ label: this.getOptionLabel(option), value: option.value });
  }

  selectInput() {
    this.selectedOption = undefined;
    this.inputRadioSelected = true;
    let value = this.inputValue;
    if (!value) {
      value = EMPTY_INPUT_VALUE;
    }
    this.onTouch(value);
    this.onChange(value);
    this.selectEvent.emit();
  }

  focusOtherSelected() {
    this.selectInput();
    this.trackingEvent.emit({ label: this.getOptionLabel(this.optionList[0]), value: 'other' });
  }
}
