import { ChangeDetectionStrategy, Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';
import { NgForOf } from '@angular/common';
import { CheckboxComponent } from '../checkbox/checkbox.component';
import { ImageSrcInterceptorDirective } from '@sales/shared/util';
import { TranslateModule } from '@ngx-translate/core';

export interface CheckboxWithImage {
  key: string;
  label: string;
  imgSrc: string;
}

@Component({
  selector: 'tg-sales-multi-select-checkbox-with-image',
  standalone: true,
  templateUrl: './multi-select-checkbox-with-image.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => MultiSelectCheckboxWithImageComponent),
      multi: true,
    },
  ],
  imports: [NgForOf, FormsModule, CheckboxComponent, ImageSrcInterceptorDirective, TranslateModule],
})
export class MultiSelectCheckboxWithImageComponent implements ControlValueAccessor {
  @Input() checkboxes: CheckboxWithImage[] = [];
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

  toggleCheckbox(checkbox: CheckboxWithImage): void {
    this.selectedCheckboxes = this.selectedCheckboxes.includes(checkbox.key)
      ? this.selectedCheckboxes.filter((k: string) => k !== checkbox.key)
      : this.selectedCheckboxes.concat([checkbox.key]);
    this._onChange(this.selectedCheckboxes);
  }

  isChecked(checkbox: CheckboxWithImage): boolean {
    return this.selectedCheckboxes.includes(checkbox.key);
  }
}
