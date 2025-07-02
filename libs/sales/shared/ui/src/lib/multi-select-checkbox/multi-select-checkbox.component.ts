import { ChangeDetectionStrategy, Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';
import { NgForOf } from '@angular/common';
import { CheckboxComponent } from '../checkbox/checkbox.component';

export interface Checkbox {
  key: string;
  label: string;
  iconClass: string;
}

@Component({
  selector: 'tg-sales-multi-select-checkbox',
  standalone: true,
  templateUrl: './multi-select-checkbox.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => MultiSelectCheckboxComponent),
      multi: true,
    },
  ],
  imports: [NgForOf, FormsModule, CheckboxComponent],
})
export class MultiSelectCheckboxComponent implements ControlValueAccessor {
  @Input() checkboxes: Checkbox[] = [];
  selectedCheckboxes: string[] = [];

  private _onChange!: (val: string[]) => void;

  registerOnChange(fn: (val: string[]) => void): void {
    this._onChange = fn;
  }

  registerOnTouched(): void {
    // not implemented
  }

  writeValue(obj: string[] | null): void {
    // https://github.com/angular/angular/issues/14988
    this.selectedCheckboxes = obj ?? [];
  }

  toggleCheckbox(checkbox: Checkbox): void {
    this.selectedCheckboxes = this.selectedCheckboxes.includes(checkbox.key)
      ? this.selectedCheckboxes.filter((k: string) => k !== checkbox.key)
      : this.selectedCheckboxes.concat([checkbox.key]);
    this._onChange(this.selectedCheckboxes);
  }

  isChecked(checkbox: Checkbox): boolean {
    return this.selectedCheckboxes.includes(checkbox.key);
  }
}
