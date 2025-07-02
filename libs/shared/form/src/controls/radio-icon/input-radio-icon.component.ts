import { Component, forwardRef, Injector, Input, Optional } from '@angular/core';
import { LanguageService } from '@telenet/ng-lib-page';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { InputAbstractComponent } from '../input-abstract.component';
import { InputOptionWithIcon } from '../radio';
import { FormErrorService, MessageGroupDirective } from '../../errors';
import { LabelUtil } from '../../utils';

@Component({
  selector: 'tg-form-radio-icon',
  templateUrl: './input-radio-icon.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputRadioIconComponent),
      multi: true,
    },
  ],
})
export class InputRadioIconComponent extends InputAbstractComponent {
  @Input() optionList: InputOptionWithIcon[] = [];
  @Input() customLabel = false;
  @Input() customOptionLabel = false;
  @Input() multipleSelectable = false;

  constructor(
    public languageService: LanguageService,
    public formService: FormErrorService,
    @Optional() public messageGroupDirective: MessageGroupDirective,
    public injector: Injector
  ) {
    super(languageService, formService, messageGroupDirective, injector);
  }

  selectedOption?: InputOptionWithIcon;

  onChange = (_: string) => {
    // empty implementation
  };
  onTouch = (_: string) => {
    // empty implementation
  };

  getOptionLabel(option: InputOptionWithIcon): string {
    if (this.customOptionLabel) {
      return option.label;
    }
    return LabelUtil.getLabelKeyWithTypeLabel(this.getKey(option.label));
  }

  registerOnChange(fn: VoidFunction): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: VoidFunction): void {
    this.onTouch = fn;
  }

  getLabel(): string {
    if (this.customLabel) {
      return super.getLabel();
    }
    return 'controls.input-radio-icon.choose';
  }

  writeValue(optionValue: string): void {
    if (optionValue) {
      this.selectedOption = this.optionList.find((optionOfList) => {
        return optionOfList.value === optionValue;
      });
    }
  }

  selectOption(option: InputOptionWithIcon): void {
    this.selectedOption = option;
    this.onTouch(option.value);
    this.onChange(option.value);
  }

  private getKey(key: string): string {
    const keyList = [];
    if (this.messageGroup) {
      keyList.push(this.messageGroup);
    }
    if (this.labelPrefix) {
      keyList.push(this.labelPrefix);
    }
    keyList.push(key);
    return keyList.join('.');
  }
}
