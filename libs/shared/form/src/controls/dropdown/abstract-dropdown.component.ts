import { Component, Injector, Input, Optional } from '@angular/core';
import { LanguageService } from '@telenet/ng-lib-page';
import { DatalayerEventNames } from '@telenet/ng-lib-datalayer';
import { InputAbstractComponent } from '../input-abstract.component';
import { InputOption } from '../radio';
import { FormErrorService, MessageGroupDirective } from '../../errors';

@Component({
  selector: 'abstract-dropdown-component',
  templateUrl: './abstract-dropdown.component.html',
})
export class AbstractDropdownComponent extends InputAbstractComponent {
  @Input() showPlaceHolder = true;
  @Input() optionList: InputOption[] = [];
  @Input() customLabel = false;
  @Input() labelStyle = 'label-input-flow';
  value = '';

  constructor(
    public override languageService: LanguageService,
    public override formService: FormErrorService,
    @Optional() public override messageGroupDirective: MessageGroupDirective,
    public override injector: Injector
  ) {
    super(languageService, formService, messageGroupDirective, injector);
  }

  onChange = (_: unknown) => {
    // This is intentional
  };
  onTouched = (_: unknown) => {
    // This is intentional
  };

  override registerOnChange(fn: VoidFunction): void {
    this.onChange = fn;
  }

  override registerOnTouched(fn: VoidFunction): void {
    this.onTouched = fn;
  }

  override setDisabledState(_isDisabled: boolean): void {
    // This is intentional
  }

  override writeValue(value: string): void {
    if (value) {
      this.value = value;
    }
  }

  updateValue(value: unknown): void {
    this.trackingEvent.emit({
      label: this.getLabel(),
      value: value?.toString() || '',
      type: DatalayerEventNames.OPTION_SELECTED,
    });
    this.onTouched(true);
    this.onChange(value);
  }
}
