import { Component, EventEmitter, forwardRef, Injector, Input, Optional, Output } from '@angular/core';
import { LanguageService } from '@telenet/ng-lib-page';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { InputAbstractComponent } from '../input-abstract.component';
import { FormErrorService, MessageGroupDirective } from '../../errors';
import { InputOptionWithImage } from '../radio';
import { LabelUtil } from '../../utils';

@Component({
  selector: 'tg-form-radio-group-card',
  templateUrl: './input-radio-group-card.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputRadioGroupCardComponent),
      multi: true,
    },
  ],
})
export class InputRadioGroupCardComponent extends InputAbstractComponent {
  constructor(
    public languageService: LanguageService,
    public formService: FormErrorService,
    @Optional() public messageGroupDirective: MessageGroupDirective,
    public injector: Injector
  ) {
    super(languageService, formService, messageGroupDirective, injector);
  }

  @Input() optionList: InputOptionWithImage[] = [];
  @Input() customLabel = false;
  @Input() hideError = false;
  @Input() customOptionLabel = false;
  @Input() multipleSelectable = false;
  @Input() isModemInstallType = false;
  @Input() isBusiness = false;
  @Output() selectEvent: EventEmitter<unknown> = new EventEmitter<unknown>();

  selectedOption?: InputOptionWithImage;

  onChange = (_value: string) => {
    // empty implementation
  };
  onTouch = (_touched: string) => {
    // empty implementation
  };

  toHideError() {
    return this.hideError;
  }

  getOptionLabel(option: InputOptionWithImage): string {
    if (this.customOptionLabel) {
      return option.label;
    }
    return LabelUtil.getLabelKeyWithTypeLabel(this.getKey(option.label));
  }

  getLabelValue(option: string): string {
    if (this.customOptionLabel) {
      return option;
    }
    return LabelUtil.getLabelKeyWithTypeLabel(this.getKey(option));
  }

  registerOnChange(fn: VoidFunction): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: VoidFunction): void {
    this.onTouch = fn;
  }

  setDisabledState(_isDisabled: boolean): void {
    // empty implementation
  }

  getLabel(): string {
    if (this.customLabel) {
      return super.getLabel();
    }
    return 'controls.input-radio-image.choose';
  }

  writeValue(optionValue: string): void {
    if (optionValue) {
      this.selectedOption = this.optionList.find((optionOfList) => {
        return optionOfList.value === optionValue;
      });
    } else {
      this.selectedOption = undefined;
    }
  }

  selectOption(option: InputOptionWithImage): void {
    this.selectedOption = option;
    this.onTouch(option.value);
    this.onChange(option.value);
    this.selectEvent.emit();
  }

  private getKey(key: string): string {
    if (this.messageGroup) {
      key = this.messageGroup + '.' + key;
    }
    return key;
  }
}
