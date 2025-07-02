import { Component, forwardRef, OnInit } from '@angular/core';
import {
  ControlValueAccessor,
  FormControl,
  FormGroup,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  ReactiveFormsModule,
  ValidationErrors,
  Validator,
  Validators,
} from '@angular/forms';
import { AsyncPipe, CommonModule, NgFor } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { TranslateModule } from '@ngx-translate/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import {
  AddressFormFieldFacade,
  boxPattern,
  fieldConstant,
  GeographicalAddress,
} from '@sales/address-form-field/data-access';
import { HouseNumberComponent } from './house-number.component';
import { SubHouseNumberComponent } from './sub-house-number.component';
import { BoxComponent } from './box.component';
import { distinctUntilChanged, first, switchMap, tap } from 'rxjs';
import { AddressUnit } from '@sales/shared/address/data-access';
import { validateHouseNumber } from '../validators/house-number-patter.validator';
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
    HouseNumberComponent,
    SubHouseNumberComponent,
    BoxComponent,
  ],
  selector: 'tg-sales-address-geographical-address',
  templateUrl: './geographical-address.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => GeographicalAddressComponent),
      multi: true,
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => GeographicalAddressComponent),
      multi: true,
    },
  ],
})
@UntilDestroy()
export class GeographicalAddressComponent implements ControlValueAccessor, Validator, OnInit {
  geographicalAddressForm: FormGroup = new FormGroup({});

  onChange: ((value: GeographicalAddress) => void) | undefined;
  onTouch: (() => void) | undefined;

  constructor(private readonly addressFormFieldFacade: AddressFormFieldFacade) {
    this.geographicalAddressForm = new FormGroup({
      [fieldConstant.HOUSE_NUMBER]: new FormControl('', [
        Validators.required,
        Validators.maxLength(6),
        validateHouseNumber(),
      ]),
      [fieldConstant.SUB_HOUSE_NUMBER]: new FormControl('', [Validators.pattern('[A-Za-z0-9]{0,6}')]),
      [fieldConstant.BOX]: new FormControl('', [conditionalPatternValidator(boxPattern)]),
    });
  }

  ngOnInit(): void {
    // Handle changes to the house number field
    this.geographicalAddressForm
      .get(fieldConstant.HOUSE_NUMBER)
      ?.valueChanges.pipe(
        distinctUntilChanged(),
        tap((houseNumber: string) => {
          this.addressFormFieldFacade.setSelectedHouseNumber(houseNumber);
          this.updateGeographicalAddress({ housenumber: houseNumber });
        }),
        switchMap((houseNumber: string) =>
          this.addressFormFieldFacade.availableHouseNumbers$.pipe(
            first(),
            tap((availableHouseNumbers: AddressUnit[]) => {
              this.filterAndSetSubHouseNumbersAndBoxes(availableHouseNumbers, houseNumber);
            })
          )
        ),
        untilDestroyed(this)
      )
      .subscribe();

    // Handle changes to the sub-house number field
    this.geographicalAddressForm
      .get(fieldConstant.SUB_HOUSE_NUMBER)
      ?.valueChanges.pipe(
        distinctUntilChanged(),
        tap((subHouseNumber: string) => {
          this.addressFormFieldFacade.setSelectedSubHouseNumber(subHouseNumber);
          this.updateGeographicalAddress({ subhousenumber: subHouseNumber });
        }),
        switchMap((subHouseNumber: string) =>
          this.addressFormFieldFacade.availableSubHouseNumbers$.pipe(
            first(),
            tap((availableSubHouseNumbers: AddressUnit[]) => {
              this.filterAndSetBoxes(availableSubHouseNumbers, subHouseNumber);
            })
          )
        ),
        untilDestroyed(this)
      )
      .subscribe();

    // Handle changes to the box field
    this.geographicalAddressForm
      .get(fieldConstant.BOX)
      ?.valueChanges.pipe(
        distinctUntilChanged(),
        tap((box: string) => {
          this.updateGeographicalAddress({ box: { boxNumber: box } });
          this.addressFormFieldFacade.setSelectedBoxNumber(box);
        }),
        untilDestroyed(this)
      )
      .subscribe();
  }

  // Helper method to update the geographical address and trigger onChange
  private updateGeographicalAddress(changes: Partial<GeographicalAddress>): void {
    if (this.onChange) {
      const currentValue: GeographicalAddress = {
        ...this.geographicalAddressForm.value,
        ...changes,
        isManualAddress: true,
      };
      this.onChange(currentValue);
    }
  }

  // Helper method to filter and set sub-house numbers and boxes
  private filterAndSetSubHouseNumbersAndBoxes(availableHouseNumbers: AddressUnit[], houseNumber: string): void {
    const filteredSubHouseNumbers = availableHouseNumbers.filter(
      (addressUnit) => addressUnit.name === houseNumber && addressUnit.subHouseNumber
    );
    this.addressFormFieldFacade.setAvailableSubHouseNumbers(filteredSubHouseNumbers);

    const filteredBoxNumbers = availableHouseNumbers.filter(
      (addressUnit) => addressUnit.name === houseNumber && addressUnit.boxNumber
    );
    this.addressFormFieldFacade.setAvailableBoxes(filteredBoxNumbers);
  }

  // Helper method to filter and set boxes
  private filterAndSetBoxes(availableSubHouseNumbers: AddressUnit[], subHouseNumber: string): void {
    const filteredBoxNumbers = availableSubHouseNumbers.filter(
      (addressUnit) => addressUnit.subHouseNumber === subHouseNumber && addressUnit.boxNumber
    );
    this.addressFormFieldFacade.setAvailableBoxes(filteredBoxNumbers);
  }

  writeValue(_value: GeographicalAddress | null): void {
    // No-op: method required by ControlValueAccessor, but no action needed.
  }

  registerOnChange(fn: (value: GeographicalAddress) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouch = fn;
  }

  validate(): ValidationErrors | null {
    const houseNumberControl = this.geographicalAddressForm.get(fieldConstant.HOUSE_NUMBER);
    const subHouseNumberControl = this.geographicalAddressForm.get(fieldConstant.SUB_HOUSE_NUMBER);
    const boxControl = this.geographicalAddressForm.get(fieldConstant.BOX);

    if (houseNumberControl?.valid && subHouseNumberControl?.valid && boxControl?.valid) {
      return null;
    }

    return { invalidForm: true };
  }
}
