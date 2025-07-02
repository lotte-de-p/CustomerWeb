import { Component, EventEmitter, forwardRef, Injector, Input, Optional, Output } from '@angular/core';
import { LanguageService } from '@telenet/ng-lib-page';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { InputAbstractComponent } from '../input-abstract.component';
import { InputOption } from './model';
import { FormErrorService, MessageGroupDirective } from '../../errors';
import { LabelUtil } from '../../utils';

@Component({
  selector: 'tg-form-radio',
  templateUrl: './input-radio.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputRadioComponent),
      multi: true,
    },
  ],
})
export class InputRadioComponent extends InputAbstractComponent {
  @Input() messageGroup = '';
  @Input() optionList: InputOption[];
  @Input() customLabel = false;
  @Input() customOptionLabel = false;
  @Input() multipleSelectable = false;
  @Input() selectedOption?: InputOption;
  @Input() surroundingClass = '';
  @Input() horizontalStyle = '';
  @Input() useCustomLabel = false;
  @Input() id = 'choice';
  @Input() hideSpace = false;
  @Output() clearErrorMessagesFunction = new EventEmitter();
  declare error: string;

  constructor(
    public languageService: LanguageService,
    public formService: FormErrorService,
    @Optional() public messageGroupDirective: MessageGroupDirective,
    public injector: Injector
  ) {
    super(languageService, formService, messageGroupDirective, injector);
  }

  onChange(_value: string): void {
    // empty implementation
  }

  onTouch = (_touched: boolean): void => {
    // empty implementation
  };

  hasError(errorString: string): boolean {
    return this.error === errorString;
  }

  getOptionLabel(option: InputOption): string {
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
    this.selectedOption = new InputOption('', '', false);
    if (optionValue) {
      this.selectedOption = this.optionList.find((optionOfList) => {
        return optionOfList.value === optionValue;
      });
    }
  }

  public selectOption(option: InputOption): void {
    this.clearErrorMessagesFunction.emit();
    this.selectedOption = option;
    this.onTouch(!!option.value);
    this.onChange(option.value);
  }

  private getKey(key: string): string {
    if (this.messageGroup) {
      key = this.messageGroup + '.' + key;
    }
    return key;
  }
}
