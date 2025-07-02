import { LanguageService } from '@telenet/ng-lib-page';
import { Component, EventEmitter, Injector, Input, Optional, Output } from '@angular/core';
import { InputAbstractComponent } from '../input-abstract.component';
import { InputOption } from '../radio';
import { FormErrorService, MessageGroupDirective } from '../../errors';
import { LabelUtil } from '../../utils';

@Component({
  selector: 'abstract-radio-checkbox',
  template: '',
})
export class AbstractRadioCheckboxComponent extends InputAbstractComponent {
  @Input() optionList: InputOption[] = [];
  @Input() customLabel = false;
  @Input() hideError = false;
  @Input() customOptionLabel = false;
  @Input() multipleSelectable = false;
  @Output() selectEvent: EventEmitter<unknown> = new EventEmitter<unknown>();
  selectedOption?: InputOption;

  constructor(
    public languageService: LanguageService,
    public formService: FormErrorService,
    @Optional() public messageGroupDirective: MessageGroupDirective,
    public injector: Injector
  ) {
    super(languageService, formService, messageGroupDirective, injector);
  }

  onChange = (_value: string | string[]) => {
    // empty implementation
  };
  onTouch = (_touched: string | boolean) => {
    // empty implementation
  };

  toHideError() {
    return this.hideError;
  }

  getOptionLabel(option: InputOption): string {
    if (this.customOptionLabel) {
      return option.label;
    }
    return LabelUtil.getLabelKeyWithTypeLabel(this.getKey(option.label));
  }

  getOptionText(option: InputOption): string {
    return LabelUtil.getLabelKeyWithTypeText(this.getKey(option.label));
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

  protected getKey(key: string): string {
    if (this.messageGroup) {
      key = this.messageGroup + '.' + key;
    }
    return key;
  }
}
