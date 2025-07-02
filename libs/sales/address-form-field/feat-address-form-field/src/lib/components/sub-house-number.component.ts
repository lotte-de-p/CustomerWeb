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
import { debounceTime, distinctUntilChanged, filter, Observable, startWith, switchMap, tap } from 'rxjs';
import { AddressUnit } from '@sales/shared/address/data-access';
import { AddressFormFieldFacade } from '@sales/address-form-field/data-access';
import { map } from 'rxjs/operators';

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
  selector: 'tg-sales-address-sub-house-number',
  templateUrl: './sub-house-number.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SubHouseNumberComponent),
      multi: true,
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => SubHouseNumberComponent),
      multi: true,
    },
  ],
})
@UntilDestroy()
export class SubHouseNumberComponent implements ControlValueAccessor, AfterViewInit, OnInit, Validator {
  @ViewChild('input', { read: MatAutocompleteTrigger }) autoCompleteTrigger: MatAutocompleteTrigger | undefined;
  control = new FormControl();
  filteredOptions!: Observable<AddressUnit[]>;
  selectedOption: string | null = null;
  disabledState = true;

  onChange: ((value: string | undefined) => void) | undefined;
  onTouch: (() => void) | undefined;

  constructor(
    private readonly addressFormFieldFacade: AddressFormFieldFacade,
    private readonly cdr: ChangeDetectorRef
  ) {
    this.control.addValidators([Validators.pattern('[A-Za-z0-9]{0,6}')]);
  }

  ngAfterViewInit(): void {
    this.setDisabledState(true);
    this.cdr.detectChanges(); // Trigger change detection only once, after all updates
  }

  ngOnInit(): void {
    this.addressFormFieldFacade.selectedHouseNumber$
      .pipe(distinctUntilChanged(), untilDestroyed(this))
      .subscribe((houseNumber: AddressUnit | string | undefined) => {
        if (houseNumber) {
          this.setDisabledState(false);
          this.control.setValue(null);
        } else {
          this.control.setValue(null);
          this.setDisabledState(true);
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
    return this.addressFormFieldFacade.availableSubHouseNumbers$.pipe(
      map((subHouseNumberAddressUnits: AddressUnit[]) => this._filterHouseNumberList(subHouseNumberAddressUnits, value))
    );
  }

  private _filterHouseNumberList(
    subHouseNumberAddressUnits: AddressUnit[],
    value: string | AddressUnit
  ): AddressUnit[] {
    const filterValue = typeof value === 'string' ? value.toLowerCase() : value.subHouseNumber?.toLowerCase() || '';

    return subHouseNumberAddressUnits.filter((subHouseNumberAddressUnit) => {
      const nameMatch = subHouseNumberAddressUnit.name.toLowerCase().startsWith(filterValue);
      const subHouseNumberMatch = subHouseNumberAddressUnit.subHouseNumber
        ? subHouseNumberAddressUnit.subHouseNumber.toLowerCase().startsWith(filterValue)
        : true; // Match if subHouseNumber is empty or undefined
      return nameMatch && subHouseNumberMatch;
    });
  }

  registerOnChange(fn: (value: string | undefined) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouch = fn;
  }

  writeValue(_value: string | null): void {
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
    const valueToUse = typeof this.control.value === 'string' ? this.control.value : this.control.value?.subHouseNumber;

    if ((!this.selectedOption || this.selectedOption !== valueToUse) && this.onChange) {
      this.onChange(valueToUse);
    }
  }

  optionSelected(subHouseNumber: AddressUnit | string): void {
    const valueToUse = typeof subHouseNumber === 'string' ? subHouseNumber : subHouseNumber.subHouseNumber;

    if (valueToUse && this.onChange) {
      this.onChange(valueToUse);
    }
  }

  validate(control: AbstractControl<unknown, unknown>): ValidationErrors | null {
    const value = control.value;

    if (value === '') {
      return null;
    }

    return control.valid ? null : { invalid: true };
  }

  display(addressUnit: AddressUnit | undefined): string {
    return addressUnit && addressUnit.subHouseNumber ? addressUnit.subHouseNumber : '';
  }
}
