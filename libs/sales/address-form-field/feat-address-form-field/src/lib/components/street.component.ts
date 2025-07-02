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
  Validators,
} from '@angular/forms';
import { AfterViewInit, ChangeDetectorRef, Component, forwardRef, OnInit, ViewChild } from '@angular/core';
import { AsyncPipe, CommonModule, NgFor } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule, MatAutocompleteTrigger } from '@angular/material/autocomplete';
import { TranslateModule } from '@ngx-translate/core';
import { AddressFormFieldFacade, StreetValue } from '@sales/address-form-field/data-access';
import { Municipality } from '../interfaces/municipality.interface';
import { debounceTime, distinctUntilChanged, EMPTY, iif, Observable, of, startWith, switchMap, tap } from 'rxjs';

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
  selector: 'tg-sales-address-street',
  templateUrl: './street.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => StreetComponent),
      multi: true,
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => StreetComponent),
      multi: true,
    },
  ],
})
@UntilDestroy()
export class StreetComponent implements ControlValueAccessor, OnInit, Validator, AfterViewInit {
  @ViewChild('input', { read: MatAutocompleteTrigger }) autoCompleteTrigger: MatAutocompleteTrigger | undefined;
  control = new FormControl();
  filteredOptions!: Observable<string[]>;
  selectedOption: string | null = null;
  disabledState = true;

  onChange: ((value: string | null) => void) | undefined;
  onTouch: (() => void) | undefined;

  constructor(
    private readonly addressFormFieldFacade: AddressFormFieldFacade,
    private readonly cdr: ChangeDetectorRef
  ) {
    this.control.addValidators(Validators.required);
  }

  ngAfterViewInit(): void {
    this.setDisabledState(true);
    this.cdr.detectChanges(); // Trigger change detection only once, after all updates
  }

  ngOnInit(): void {
    this.addressFormFieldFacade.selectedMunicipality$
      .pipe(distinctUntilChanged(), untilDestroyed(this))
      .subscribe((municipality: Municipality | undefined) => {
        if (municipality) {
          this.setDisabledState(false);
          this.control.setValue(null);
          if (this.onChange) {
            this.onChange(null);
          }
        } else {
          if (this.onChange) {
            this.onChange(null);
          }
          this.control.setValue(null);
          this.setDisabledState(true);
        }
      });

    this.filteredOptions = this.control.valueChanges.pipe(
      tap(() => {
        this.selectedOption = null;
      }),
      startWith(''),
      debounceTime(200),
      distinctUntilChanged(),
      switchMap((val) => iif(() => val && val.length > 1, this._filterOptions(val || ''), EMPTY)),
      untilDestroyed(this)
    );
  }

  _filterOptions(value: string): Observable<string[]> {
    return this.addressFormFieldFacade.availableStreets$.pipe(
      switchMap((streets) => of(this._filterStreetList(streets, value)))
    );
  }

  _filterStreetList(streets: string[], value: string): string[] {
    const filterValue = value.toLowerCase();
    return streets.filter((street) => street.toLowerCase().includes(filterValue));
  }

  validate(control: AbstractControl<unknown, unknown>): ValidationErrors | null {
    return control.valid ? null : { invalid: true };
  }

  registerOnChange(fn: (value: string | null) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouch = fn;
  }

  writeValue(_value: StreetValue | null): void {
    // No-op: method required by ControlValueAccessor, but no action needed.
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabledState = isDisabled;
    if (isDisabled) {
      this.control.disable({ emitEvent: false });
    } else {
      this.control.enable({ emitEvent: false });
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

  optionSelected(street: string): void {
    if (street) {
      this.selectedOption = street;
      this.control.setValue(street, { emitEvent: false });
      if (this.onChange) {
        this.onChange(street);
      }
    }
  }
}
