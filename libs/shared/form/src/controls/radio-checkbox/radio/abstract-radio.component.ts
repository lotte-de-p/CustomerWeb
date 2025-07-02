import { Component, Injector, Input, Optional } from '@angular/core';
import { LanguageService } from '@telenet/ng-lib-page';
import { DatalayerEventNames } from '@telenet/ng-lib-datalayer';
import { AbstractRadioCheckboxComponent } from '../abstract-radio-checkbox.component';
import { FormErrorService, MessageGroupDirective } from '../../../errors';
import { InputOption, InputOptionWithSubscript } from '../../radio';
import { LabelUtil } from '../../../utils';

@Component({
  selector: 'tg-form-abstract-radio',
  templateUrl: './abstract-radio.component.html',
})
export class AbstractRadioComponent extends AbstractRadioCheckboxComponent {
  @Input() customOptionExplanationText = false;

  constructor(
    public languageService: LanguageService,
    public formService: FormErrorService,
    @Optional() public messageGroupDirective: MessageGroupDirective,
    public injector: Injector
  ) {
    super(languageService, formService, messageGroupDirective, injector);
  }

  getOptionText(option: InputOption): string {
    return LabelUtil.getLabelKeyWithTypeText(super.getKey(option.label));
  }

  getLabel(): string {
    if (this.customLabel) {
      return super.getLabel();
    }
    return 'controls.input-radio-image.choose';
  }

  writeValue(optionValue: string = ''): void {
    if (optionValue) {
      this.selectedOption = this.optionList.find((optionOfList) => {
        return optionOfList.value === optionValue;
      });
    } else {
      this.selectedOption = undefined;
    }
  }

  selectOption(option: InputOption): void {
    this.selectedOption = option;
    this.onTouch(option.value);
    this.onChange(option.value);
    this.selectEvent.emit(option.value);
    this.trackingEvent.emit({
      label: this.getLabel(),
      value: option.value,
      type: DatalayerEventNames.OPTION_SELECTED,
    });
  }

  hasSubscript(option: InputOption): boolean {
    return option instanceof InputOptionWithSubscript;
  }

  getSubscript(option: InputOption): string {
    return (option as InputOptionWithSubscript).subScript || '';
  }
}
