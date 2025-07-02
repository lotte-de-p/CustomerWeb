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
import { AddressUnit } from '@sales/shared/address/data-access';
import { AddressFormFieldFacade } from '@sales/address-form-field/data-access';
import { debounceTime, distinctUntilChanged, filter, Observable, of, startWith, switchMap, tap } from 'rxjs';
import { map } from 'rxjs/operators';
import { validateHouseNumber } from '../validators/house-number-patter.validator';

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
  selector: 'tg-sales-address-house-number',
  templateUrl: './house-number.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => HouseNumberComponent),
      multi: true,
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => HouseNumberComponent),
      multi: true,
    },
  ],
})
@UntilDestroy()
export class HouseNumberComponent implements ControlValueAccessor, AfterViewInit, OnInit, Validator {
  @ViewChild('input', { read: MatAutocompleteTrigger }) autoCompleteTrigger: MatAutocompleteTrigger | undefined;
  control = new FormControl();
  filteredOptions!: Observable<AddressUnit[]>;
  selectedOption: string | null = null;
  disabledState = true;

  onChange: ((value: string | null) => void) | undefined;
  onTouch: (() => void) | undefined;

  constructor(
    private readonly addressFormFieldFacade: AddressFormFieldFacade,
    private readonly cdr: ChangeDetectorRef
  ) {
    this.control.addValidators([Validators.required, Validators.maxLength(6), validateHouseNumber()]);
  }

  ngAfterViewInit(): void {
    this.setDisabledState(true);
    this.cdr.detectChanges(); // Trigger change detection only once, after all updates
  }

  ngOnInit(): void {
    this.addressFormFieldFacade.selectedStreet$
      .pipe(distinctUntilChanged(), untilDestroyed(this))
      .subscribe((street: string | undefined) => {
        if (street) {
          this.setDisabledState(false);
          this.control.setValue(null);
          if (this.onChange) {
            this.onChange(null);
          }
        } else {
          this.control.setValue(null);
          this.setDisabledState(true);
          if (this.onChange) {
            this.onChange(null);
          }
        }
      });

    this.filteredOptions = this.control.valueChanges.pipe(
      tap(() => {
        this.selectedOption = null;
      }),
      map((val) => (typeof val === 'object' && val !== null ? val.name : val)), // Use the name if the value is an object
      filter((val) => typeof val === 'string'), // Ensure that the value is a string after transformation
      startWith(''),
      debounceTime(200),
      distinctUntilChanged(),
      switchMap((val) => this._filterOptions(val || '')),
      untilDestroyed(this)
    );
  }

  private _filterOptions(value: string): Observable<AddressUnit[]> {
    return this.addressFormFieldFacade.selectedStreetAddressUnit$.pipe(
      switchMap((streetAddressUnit) => {
        if (streetAddressUnit) {
          return this.addressFormFieldFacade
            .getGeographicalAddresses(value, streetAddressUnit.id)
            .pipe(switchMap((geographicalAddresses) => of(this._filterHouseNumberList(geographicalAddresses, value))));
        } else {
          return of([]);
        }
      })
    );
  }

  private _filterHouseNumberList(geographicalAddresses: AddressUnit[], value: string | AddressUnit): AddressUnit[] {
    const filterValue = typeof value === 'string' ? value.toLowerCase() : value.name.toLowerCase();

    const seenNames = new Set<string>();

    return geographicalAddresses.filter((geographicalAddress) => {
      const name = geographicalAddress.name.toLowerCase();
      if (name.startsWith(filterValue) && !seenNames.has(name)) {
        seenNames.add(name);
        return true;
      }
      return false;
    });
  }

  registerOnChange(fn: (value: AddressUnit | string | null) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouch = fn;
  }

  writeValue(_value: string | null): void {
    // No-op: method required by ControlValueAccessor, but no action needed.
  }

  display(addressUnit: AddressUnit | undefined): string {
    return addressUnit && addressUnit.name ? addressUnit.name : '';
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
    const valueToUse = typeof this.control.value === 'string' ? this.control.value : this.control.value?.name;

    if ((!this.selectedOption || this.selectedOption !== valueToUse) && this.onChange) {
      this.onChange(valueToUse);
    }
  }

  optionSelected(houseNumber: AddressUnit | string): void {
    const valueToUse = typeof houseNumber === 'string' ? houseNumber : houseNumber.name;

    if (valueToUse && this.onChange) {
      this.onChange(valueToUse);
    }
  }

  validate(control: AbstractControl<unknown, unknown>): ValidationErrors | null {
    return control.valid ? null : { invalid: true };
  }
}
