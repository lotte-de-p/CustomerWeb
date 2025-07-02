import { Component, forwardRef, Injector, Input, Optional } from '@angular/core';
import { LanguageService } from '@telenet/ng-lib-page';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { InputAbstractComponent } from '../input-abstract.component';
import { CheckboxModifierEnum } from './const';
import { FormErrorService, MessageGroupDirective } from '../../errors';

@Component({
  selector: 'tg-form-input-checkbox',
  templateUrl: 'input-checkbox.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputCheckboxComponent),
      multi: true,
    },
  ],
})
export class InputCheckboxComponent extends InputAbstractComponent {
  @Input() checkBoxModifier: CheckboxModifierEnum;
  @Input() customLabel: string;
  value = '';

  constructor(
    public override languageService: LanguageService,
    public override formService: FormErrorService,
    @Optional() public override messageGroupDirective: MessageGroupDirective,
    public override injector: Injector
  ) {
    super(languageService, formService, messageGroupDirective, injector);
  }

  override getLabel(): string {
    return super.getLabel(this.customLabel);
  }

  onChange = (_: string) => {
    // empty implementation
  };
  onTouched = (_: boolean) => {
    // empty implementation
  };

  override registerOnChange(fn: VoidFunction): void {
    this.onChange = fn;
  }

  override registerOnTouched(fn: VoidFunction): void {
    this.onTouched = fn;
  }

  override setDisabledState(_isDisabled: boolean): void {
    // empty implementation
  }

  override writeValue(value: string): void {
    this.value = value;
  }

  updateValue(value: string): void {
    this.onTouched(true);
    this.onChange(value);
    this.trackingEvent.emit({ label: this.getLabel(), value: value.toString() });
  }
}
