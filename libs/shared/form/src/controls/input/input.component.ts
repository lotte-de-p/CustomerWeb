import { Component, EventEmitter, forwardRef, Injector, Input, Optional, Output } from '@angular/core';
import { LanguageService } from '@telenet/ng-lib-page';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { InputAbstractComponent } from '../input-abstract.component';
import { FormErrorService, MessageGroupDirective } from '../../errors';

@Component({
  selector: 'tg-form-input',
  templateUrl: 'input.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true,
    },
  ],
})
export class InputComponent extends InputAbstractComponent {
  @Input() showPlaceHolder = true;
  @Input() labelStyle: string;
  @Input() customLabel: string;
  @Input() hideLabel = false;
  @Input() prefix?: string;
  @Input() mask: { maskValue: string; dropSpecialCharacters: boolean };
  @Input() disabled = false;
  @Input() required = true;
  @Input() maxLength?: number;
  @Input() showError = true;
  @Output() changeInput = new EventEmitter<string>();
  value: string;

  constructor(
    public languageService: LanguageService,
    public formService: FormErrorService,
    @Optional() public messageGroupDirective: MessageGroupDirective,
    public injector: Injector
  ) {
    super(languageService, formService, messageGroupDirective, injector);
  }

  getLabel(): string {
    return super.getLabel(this.customLabel);
  }

  getPlaceholder(): string {
    return super.getPlaceholder(this.customLabel);
  }

  onChange = (_: string) => {
    // empty implementation
  };

  onTouched = (): void => {
    // empty implementation
  };

  registerOnChange(fn: VoidFunction): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: VoidFunction): void {
    this.onTouched = fn;
  }

  setDisabledState(_isDisabled: boolean): void {
    this.disabled = _isDisabled;
  }

  writeValue(value: string): void {
    this.value = value;
  }

  updateValue(value: string): void {
    this.onChange(value);
    this.changeInput.emit(value);
  }

  onBlur() {
    this.trackingEvent.emit({ label: this.getLabel(), value: this.value });
    this.onTouched();
  }
}
