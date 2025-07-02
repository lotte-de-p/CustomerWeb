import { Component, Injector, Input, Optional } from '@angular/core';
import { LanguageService } from '@telenet/ng-lib-page';
import { DatalayerEventNames } from '@telenet/ng-lib-datalayer';
import { AbstractRadioCheckboxComponent } from '../abstract-radio-checkbox.component';
import { InputOption, InputOptionWithSubscript } from '../../radio';
import { FormErrorService, MessageGroupDirective } from '../../../errors';

@Component({
  selector: 'tg-form-abstract-checkbox',
  templateUrl: './abstract-checkbox.component.html',
})
export class AbstractCheckboxComponent extends AbstractRadioCheckboxComponent {
  selectedOptions: InputOption[] = [];
  @Input() maxOptions: number;

  constructor(
    public override languageService: LanguageService,
    public override formService: FormErrorService,
    @Optional() public override messageGroupDirective: MessageGroupDirective,
    public override injector: Injector
  ) {
    super(languageService, formService, messageGroupDirective, injector);
  }

  getLabel(): string {
    if (this.customLabel) {
      return super.getLabel();
    }
    return 'controls.input-radio-image.choose';
  }

  writeValue(optionValues: string[]): void {
    if (optionValues) {
      this.optionList.forEach((option) => {
        if (optionValues.includes(option.value)) {
          this.selectedOptions.push(option);
        }
      });
      this.handleMaxOptions();
    } else {
      this.selectedOptions = [];
    }
  }

  selectOption(option: InputOption): void {
    if (this.selectedOptions.includes(option)) {
      this.selectedOptions = this.selectedOptions.filter((selectedOption) => selectedOption !== option);
    } else {
      this.handleToggle();
      this.selectedOptions.push(option);
      this.trackingEvent.emit({
        label: option.label,
        value: option.value,
        type: DatalayerEventNames.OPTION_SELECTED,
      });
    }
    this.onTouch(true);
    this.onChange(this.selectedOptions.map((selectedOption) => selectedOption.value));
    this.handleMaxOptions();
    this.selectEvent.emit();
  }

  hasSubscript(option: InputOption): boolean {
    return option instanceof InputOptionWithSubscript;
  }

  private handleMaxOptions() {
    if (!this.maxOptions || this.maxOptions === 1) {
      return;
    }
    if (this.selectedOptions.length >= this.maxOptions) {
      this.optionList.forEach((option) => {
        if (!this.selectedOptions.includes(option)) {
          option.disabled = true;
        }
      });
    } else {
      this.optionList.forEach((option) => {
        option.disabled = false;
      });
    }
  }

  private handleToggle() {
    if (this.maxOptions === 1) {
      this.selectedOptions = [];
    }
  }
}
