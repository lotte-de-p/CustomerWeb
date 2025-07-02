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
import { AfterViewInit, ChangeDetectorRef, Component, forwardRef, OnInit, ViewChild } from '@angular/core';

import { AsyncPipe, CommonModule, NgFor } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule, MatAutocompleteTrigger } from '@angular/material/autocomplete';
import { TranslateModule } from '@ngx-translate/core';

import { AddressFormFieldFacade, BoxFloor, boxPattern } from '@sales/address-form-field/data-access';
import { debounceTime, distinctUntilChanged, filter, Observable, startWith, switchMap, tap } from 'rxjs';
import { AddressUnit } from '@sales/shared/address/data-access';
import { map } from 'rxjs/operators';
import { conditionalPatternValidator } from '../validators/conditional.validator';

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
  selector: 'tg-sales-address-box',
  templateUrl: './box.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => BoxComponent),
      multi: true,
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => BoxComponent),
      multi: true,
    },
  ],
})
@UntilDestroy()
export class BoxComponent implements ControlValueAccessor, AfterViewInit, OnInit, Validator {
  @ViewChild('input', { read: MatAutocompleteTrigger }) autoCompleteTrigger: MatAutocompleteTrigger | undefined;
  control = new FormControl();
  filteredOptions!: Observable<AddressUnit[]>;
  selectedOption: string | null = null;
  disabledState = true;

  onChange: ((value: BoxFloor | undefined) => void) | undefined;
  onTouch: (() => void) | undefined;

  constructor(
    private readonly addressFormFieldFacade: AddressFormFieldFacade,
    private readonly cdr: ChangeDetectorRef
  ) {
    this.control.addValidators([conditionalPatternValidator(boxPattern)]);
  }

  ngAfterViewInit(): void {
    this.setDisabledState(true);
    this.cdr.detectChanges(); // Trigger change detection only once, after all updates
  }

  ngOnInit(): void {
    this.addressFormFieldFacade.selectedHouseNumber$
      .pipe(distinctUntilChanged(), untilDestroyed(this))
      .subscribe((houseNumber: string | undefined) => {
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
      map((val) => (typeof val === 'object' && val !== null ? val.boxNumber : val)), // Use the name if the value is an object
      filter((val) => typeof val === 'string'), // Ensure that the value is a string after transformation
      startWith(''),
      debounceTime(200),
      distinctUntilChanged(),
      switchMap((val) => this._filterOptions(val || '')),
      untilDestroyed(this)
    );
  }

  private _filterOptions(value: string): Observable<AddressUnit[]> {
    return this.addressFormFieldFacade.availableBoxes$.pipe(
      map((boxNumberAddressUnits: AddressUnit[]) => this._filterBoxNumberList(boxNumberAddressUnits, value))
    );
  }

  private _filterBoxNumberList(boxNumberAddressUnits: AddressUnit[], value: string | AddressUnit): AddressUnit[] {
    const filterValue = typeof value === 'string' ? value.toLowerCase() : value.boxNumber?.toLowerCase() || '';

    return boxNumberAddressUnits.filter((boxNumberAddressUnit) => {
      const nameMatch = boxNumberAddressUnit.name.toLowerCase().startsWith(filterValue);
      const boxNumberMatch = boxNumberAddressUnit.boxNumber
        ? boxNumberAddressUnit.boxNumber.toLowerCase().startsWith(filterValue)
        : true; // Match if boxNumber is empty or undefined
      return nameMatch && boxNumberMatch;
    });
  }

  registerOnChange(fn: (value: BoxFloor | undefined) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouch = fn;
  }

  writeValue(_value: BoxFloor | null): void {
    // No-op: method required by ControlValueAccessor, but no action needed.
  }

  display(boxFloor: BoxFloor | undefined): string {
    const displayString = boxFloor?.boxNumber ? boxFloor.boxNumber : '';
    if (boxFloor?.floor) {
      displayString.concat(` (${boxFloor.floor})`);
    }
    return displayString;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabledState = isDisabled;
    if (isDisabled) {
      this.control.disable({ emitEvent: false });
    } else {
      this.control.enable({ emitEvent: false });
    }
  }

  validate(control: AbstractControl<unknown, unknown>): ValidationErrors | null {
    return control.valid ? null : { invalid: true };
  }

  onBlur(): void {
    this.validate(this.control);
    const valueToUse = typeof this.control.value === 'string' ? this.control.value : this.control.value?.boxNumber;

    if ((!this.selectedOption || this.selectedOption !== valueToUse) && this.onChange) {
      this.onChange(valueToUse);
    }
  }

  optionSelected(boxNumber: AddressUnit | string): void {
    const valueToUse = typeof boxNumber === 'string' ? boxNumber : boxNumber.boxNumber;

    if (valueToUse && this.onChange) {
      this.onChange({ boxNumber: valueToUse });
    }
  }
}
