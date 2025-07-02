import { Component, forwardRef, Injector, Input, Optional } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { LanguageService } from '@telenet/ng-lib-page';
import { AbstractDropdownComponent } from '../abstract-dropdown.component';
import { InputOption } from '../../radio';
import { FormErrorService, MessageGroupDirective } from '../../../errors';

@Component({
  selector: 'tg-form-dropdown-with-chips',
  templateUrl: 'with-chips.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DropDownWithChipsComponent),
      multi: true,
    },
  ],
})
export class DropDownWithChipsComponent extends AbstractDropdownComponent {
  shouldShowDropdown = false;
  @Input() disabled = false;
  @Input() required: boolean;
  dropDownValues: InputOption[] = [];

  selectedOptions: InputOption[] = [];

  constructor(
    public languageService: LanguageService,
    public formService: FormErrorService,
    @Optional() public messageGroupDirective: MessageGroupDirective,
    public injector: Injector
  ) {
    super(languageService, formService, messageGroupDirective, injector);
    this.dropDownValues = this.sortBy('label');
  }

  reset(): void {
    this.optionList = [...this.optionList, ...this.selectedOptions];
    this.selectedOptions = [];
  }

  updateValue(option: InputOption): void {
    this.selectedOptions.push(option);
    this.writeValues();
    this.toggle();
    this.dropDownValues = this.sortBy('label');
  }

  writeValues(): void {
    const selectedValues: string[] = [];
    if (this.selectedOptions !== null) {
      this.selectedOptions.forEach((option) => {
        selectedValues.push(option.value);
        this.optionList.splice(this.optionList.indexOf(option), 1);
      });
    }
    this.control.control?.setValue(selectedValues);
  }

  writeValue(value: string | null): void {
    if (value === null) {
      this.reset();
    }
    this.value = value || '';
  }

  focusOut(): void {
    if (this.shouldShowDropdown) {
      if (this.control.control) {
        this.control.control.markAllAsTouched();
      }
      this.checkErrors();
      this.shouldShowDropdown = false;
    }
  }

  toggle(): void {
    this.shouldShowDropdown = !this.shouldShowDropdown;
  }

  private checkErrors(): void {
    if (this.control.control && this.control.control.errors) {
      this.error = Object.keys(this.control.control.errors)[0];
    }
  }

  removeOption(selectedOption: InputOption): void {
    this.optionList.push(selectedOption);
    const optionIndex = this.selectedOptions.indexOf(selectedOption);
    this.selectedOptions.splice(optionIndex, 1);
    this.writeValues();
  }

  sortBy(prop: string) {
    return this.optionList.sort((a, b) => this.compareObjectProperties(a, b, prop as keyof InputOption));
  }

  compareObjectProperties(objA: InputOption, objB: InputOption, prop: keyof InputOption) {
    if (objA[prop] > objB[prop]) {
      return 1;
    } else if (objA[prop] === objB[prop]) {
      return 0;
    } else {
      return -1;
    }
  }
}
