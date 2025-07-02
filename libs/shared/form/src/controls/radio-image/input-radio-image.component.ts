import { Component, forwardRef, Injector, Input, Optional } from '@angular/core';
import { LanguageService } from '@telenet/ng-lib-page';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { InputAbstractComponent } from '../input-abstract.component';
import { InputOptionWithImage } from '../radio';
import { FormErrorService, MessageGroupDirective } from '../../errors';
import { LabelUtil } from '../../utils';

@Component({
  selector: 'tg-form-radio-image',
  templateUrl: './input-radio-image.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputRadioImageComponent),
      multi: true,
    },
  ],
})
export class InputRadioImageComponent extends InputAbstractComponent {
  @Input() optionList: InputOptionWithImage[] = [];
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

  selectedOption?: InputOptionWithImage;

  onChange = (_: string) => {
    // empty implementation
  };
  onTouch = (_: string) => {
    // empty implementation
  };

  getOptionLabel(option: InputOptionWithImage): string {
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
    return 'controls.input-radio-image.choose';
  }

  writeValue(optionValue: string): void {
    if (optionValue) {
      this.selectedOption = this.optionList.find((optionOfList) => {
        return optionOfList.value === optionValue;
      });
    }
  }

  selectOption(option: InputOptionWithImage): void {
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
