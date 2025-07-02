import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import {
  AbstractControl,
  ControlValueAccessor,
  FormControl,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  ReactiveFormsModule,
  ValidationErrors,
  Validator,
} from '@angular/forms';
import { Component, forwardRef, OnInit, ViewChild } from '@angular/core';
import { AsyncPipe, CommonModule, NgFor } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule, MatAutocompleteTrigger } from '@angular/material/autocomplete';
import { TranslateModule } from '@ngx-translate/core';
import { Municipality } from '@sales/shared/address/data-access';
import { debounceTime, distinctUntilChanged, EMPTY, iif, Observable, startWith, switchMap, tap } from 'rxjs';
import { AddressFormFieldFacade } from '@sales/address-form-field/data-access';
import { AddressUtil } from '../utils/address.util';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    MatInputModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    NgFor,
    AsyncPipe,
    TranslateModule,
  ],
  selector: 'tg-sales-address-municipality',
  templateUrl: './municipality.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => MunicipalityComponent),
      multi: true,
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => MunicipalityComponent),
      multi: true,
    },
  ],
})
@UntilDestroy()
export class MunicipalityComponent implements ControlValueAccessor, OnInit, Validator {
  control = new FormControl();
  filteredOptions!: Observable<Municipality[]>;
  selectedOption: Municipality | null = null;

  @ViewChild('input', { read: MatAutocompleteTrigger }) autoCompleteTrigger: MatAutocompleteTrigger | undefined;

  onChange: ((value: Municipality | null) => void) | undefined;
  onTouch: (() => void) | undefined;

  constructor(private readonly addressFormFieldFacade: AddressFormFieldFacade) {}

  ngOnInit(): void {
    this.filteredOptions = this.control.valueChanges.pipe(
      tap(() => {
        this.selectedOption = null; // Reset selectedOption when user types
      }),
      startWith(''),
      debounceTime(200),
      distinctUntilChanged(),
      switchMap((val) => iif(() => val && val.length > 1, this._filterOptions(val || ''), EMPTY)),
      untilDestroyed(this)
    );
  }

  private _filterOptions(value: string): Observable<Municipality[]> {
    return AddressUtil.getFilteredMunicipalities(value, this.addressFormFieldFacade);
  }

  validate(_control: AbstractControl<unknown, unknown>): ValidationErrors | null {
    // Check if the control value matches the selected option
    if (
      this.selectedOption &&
      this.control.value &&
      this.display(this.selectedOption) === this.display(this.control.value)
    ) {
      return null;
    }

    return { invalidMunicipality: true };
  }

  registerOnChange(fn: (value: Municipality | null) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouch = fn;
  }

  writeValue(_location: Municipality | null): void {
    // No-op: method required by ControlValueAccessor, but no action needed.
  }

  optionSelected(municipality: Municipality): void {
    if (municipality) {
      this.selectedOption = municipality;
      this.control.setValue(municipality, { emitEvent: false }); // Set without emitting event
      if (this.onChange) {
        this.onChange(municipality); // Trigger onChange with the selected Municipality
      }
    }
  }

  onBlur(): void {
    this.validate(this.control);

    if (!this.selectedOption || this.selectedOption !== this.control.value) {
      this.control.setValue(null);
      this.selectedOption = null;
      if (this.onChange) {
        this.onChange(null);
      }
    }
  }

  display(municipality: Municipality | undefined): string {
    return municipality ? `${municipality.postalCode} - ${municipality.location}` : '';
  }
}
