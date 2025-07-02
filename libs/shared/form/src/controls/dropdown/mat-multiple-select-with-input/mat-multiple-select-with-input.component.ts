import { Component, forwardRef, HostListener, Input, OnChanges, ViewChild } from '@angular/core';
import { AbstractDropdownComponent } from '../abstract-dropdown.component';
import { MatSelect } from '@angular/material/select';
import { InputOption } from '../../radio';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { MatOption } from '@angular/material/core';
import { isEmpty } from 'lodash-es';

@Component({
  selector: 'tg-form-dropdown-with-multiple-select',
  templateUrl: 'mat-multiple-select-with-input.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => MatMultipleSelectWithInputComponent),
      multi: true,
    },
  ],
})
export class MatMultipleSelectWithInputComponent extends AbstractDropdownComponent implements OnChanges {
  @ViewChild('selectDropdown') multiSelect: MatSelect;
  @ViewChild('allSelected') allSelectedOption: MatOption;
  @Input() selectedOptions: InputOption[] = [];
  @Input() toolTipRequired = false;
  @Input() required = true;
  selectedOptionsCount: number;

  ngOnChanges(): void {
    this.writeValues();
  }

  updateValueAndPreventClosing(event: Event) {
    this.preventClosing(event);
    this.writeValues();
    if (this.allSelectedOption.selected) {
      this.multiSelect.options.first.deselect();
    }
  }

  toggleAllSelection(event: Event) {
    this.preventClosing(event);
    if (this.allSelectedOption.selected) {
      this.multiSelect.options.forEach((item: MatOption) => item.select());
    } else {
      this.multiSelect.options.forEach((item: MatOption) => item.deselect());
    }
    this.writeValues();
  }

  @HostListener('document:click', ['$event'])
  @HostListener('document:touchstart', ['$event'])
  handleOutsideClick(event: Event) {
    if (this.multiSelect && !this.multiSelect._elementRef.nativeElement.contains(event.target)) {
      this.multiSelect.close();
    }
  }

  private preventClosing(event: Event) {
    event.stopPropagation();
  }

  private writeValues(): void {
    const selectedValues: string[] = [];
    this.selectedOptions?.forEach((option) => {
      if (!isEmpty(option)) {
        selectedValues.push(option.value);
      }
    });
    this.selectedOptionsCount = selectedValues.length;
    this.control?.control?.setValue(selectedValues);
  }
}
