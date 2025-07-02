import { Component, EventEmitter, forwardRef, Injector, Input, Optional, Output } from '@angular/core';
import { LanguageService } from '@telenet/ng-lib-page';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { InputAbstractComponent } from '../input-abstract.component';
import { InputOptionWithCard } from '../radio';
import { FormErrorService, MessageGroupDirective } from '../../errors';
import { LabelUtil } from '../../utils';

@Component({
  selector: 'tg-form-radio-card',
  templateUrl: './input-radio-card.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputRadioCardComponent),
      multi: true,
    },
  ],
})
export class InputRadioCardComponent extends InputAbstractComponent {
  @Input() optionList: InputOptionWithCard[] = [];
  @Input() customLabel = false;
  @Input() customOptionLabel = false;
  @Input() multipleSelectable = false;
  @Output() clearErrorMessagesFunction = new EventEmitter();
  @Output() inputChanged = new EventEmitter<string>();

  constructor(
    public languageService: LanguageService,
    public formService: FormErrorService,
    @Optional() public messageGroupDirective: MessageGroupDirective,
    public injector: Injector
  ) {
    super(languageService, formService, messageGroupDirective, injector);
  }

  selectedOption?: InputOptionWithCard;

  onChange(_: unknown): void {
    // empty implementation
  }

  onTouched(_: unknown): void {
    // empty implementation
  }

  getOptionLabel(option: InputOptionWithCard): string {
    if (this.customOptionLabel) {
      return option.label;
    }
    return LabelUtil.getLabelKeyWithTypeLabel(this.getKey(option.label));
  }

  getOptionSubLabel(option: InputOptionWithCard): string {
    return LabelUtil.getLabelKeyWithTypeText(this.getKey(option.text));
  }

  registerOnChange(fn: VoidFunction): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: VoidFunction): void {
    this.onTouched = fn;
  }

  setDisabledState(_: boolean): void {
    // empty implementation
  }

  getLabel(): string {
    if (this.customLabel) {
      return super.getLabel();
    }
    return 'controls.input-radio-card.choose';
  }

  writeValue(optionValue: string): void {
    if (optionValue) {
      this.selectedOption = this.optionList.find((optionOfList) => {
        return optionOfList.value === optionValue;
      });
    }
  }

  selectOption(option: InputOptionWithCard): void {
    this.clearErrorMessagesFunction.emit();
    this.selectedOption = option;

    this.onTouched(true);
    this.onChange(option.value);
    this.inputChanged.emit(option.value);
  }

  private getKey(key: string): string {
    if (this.messageGroup) {
      key = this.messageGroup + '.' + key;
    }
    return key;
  }
}
