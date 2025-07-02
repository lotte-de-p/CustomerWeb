import { Component, Input, Optional, Self } from '@angular/core';
import { ControlValueAccessor, FormControl, NgControl, ReactiveFormsModule } from '@angular/forms';
import { UntilDestroy } from '@ngneat/until-destroy';
import { HttpClientModule } from '@angular/common/http';
import { MatSelectModule } from '@angular/material/select';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatDialogModule } from '@angular/material/dialog';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';

@UntilDestroy()
@Component({
  selector: 'tg-box-number-input-field',
  templateUrl: './box-number-input-field.component.html',
  standalone: true,
  providers: [],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatAutocompleteModule,
    MatSelectModule,
    HttpClientModule,
    TranslateModule,
  ],
})
export class BoxNumberInputFieldComponent implements ControlValueAccessor {
  @Input() messageGroup: string;

  constructor(@Self() @Optional() public controls?: NgControl) {
    if (this.controls) {
      this.controls.valueAccessor = this;
    }
  }

  get formControl(): FormControl {
    return this.controls?.control as FormControl;
  }

  registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  onChange: (value: string) => void = (value) => {
    this.controls?.control?.setValue(value);
  };

  writeValue(_obj: unknown): void {
    // empty implementation
  }

  onTouched: () => void = () => {
    // empty implementation
  };
}
