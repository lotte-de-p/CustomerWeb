import { Component, forwardRef, OnInit } from '@angular/core';
import {
  ControlValueAccessor,
  FormBuilder,
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
import { MunicipalityComponent } from './components/municipality.component';
import { StreetComponent } from './components/street.component';
import { HouseNumberComponent } from './components/house-number.component';
import { SubHouseNumberComponent } from './components/sub-house-number.component';
import { BoxComponent } from './components/box.component';
import { AddressFieldValue, AddressFormFieldFacade, fieldConstant } from '@sales/address-form-field/data-access';
import { GeographicalAddressComponent } from './components/geographical-address.component';
import { Municipality } from './interfaces/municipality.interface';
import { distinctUntilChanged, filter, Observable, OperatorFunction, pipe, switchMap, tap } from 'rxjs';
import { map } from 'rxjs/operators';

@UntilDestroy()
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
    MunicipalityComponent,
    StreetComponent,
    HouseNumberComponent,
    SubHouseNumberComponent,
    BoxComponent,
    GeographicalAddressComponent,
  ],
  selector: 'tg-sales-address-form-field',
  templateUrl: './address-form-field.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => AddressFormFieldComponent),
      multi: true,
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => AddressFormFieldComponent),
      multi: true,
    },
  ],
})
export class AddressFormFieldComponent implements OnInit, ControlValueAccessor, Validator {
  addressForm: FormGroup;

  onChange: ((value: AddressFieldValue) => void) | undefined;
  onTouch: (() => void) | undefined;

  constructor(
    private readonly fb: FormBuilder,
    private readonly addressFormFieldFacade: AddressFormFieldFacade
  ) {
    this.addressForm = this.fb.group({
      [fieldConstant.MUNICIPALITY]: [null, Validators.required],
      [fieldConstant.STREET]: [{ value: null, disabled: true }, Validators.required],
      [fieldConstant.GEOGRAPHICAL_ADDRESS]: [null, Validators.required],
    });
  }

  ngOnInit(): void {
    this.loadMunicipalities();

    this.addressForm
      .get(fieldConstant.MUNICIPALITY)
      ?.valueChanges.pipe(untilDestroyed(this))
      .subscribe((municipality) => this.handleMunicipalityChanges(municipality));

    this.addressForm
      .get(fieldConstant.STREET)
      ?.valueChanges.pipe(this.handleStreetChanges(), untilDestroyed(this))
      .subscribe();

    this.addressForm
      .get(fieldConstant.GEOGRAPHICAL_ADDRESS)
      ?.valueChanges.pipe(this.handleGeographicalAddressChanges(), untilDestroyed(this))
      .subscribe();

    this.subscribeToFieldChanges(); // Subscribe to field changes to trigger onChange
  }

  private subscribeToFieldChanges(): void {
    this.addressForm.valueChanges.pipe(untilDestroyed(this)).subscribe(() => {
      this.updateAddressFieldValue();
    });
  }

  private updateAddressFieldValue(): void {
    const addressFieldValue: AddressFieldValue = {
      municipality: this.addressForm.get(fieldConstant.MUNICIPALITY)?.value,
      street: this.addressForm.get(fieldConstant.STREET)?.value,
      geographical_address: this.addressForm.get(fieldConstant.GEOGRAPHICAL_ADDRESS)?.value,
    };

    if (this.onChange) {
      this.onChange(addressFieldValue);
    }
  }

  private handleMunicipalityChanges(municipality: Municipality): void {
    if (this.onTouch) {
      this.onTouch();
    }
    this.addressFormFieldFacade.setSelectedMunicipality(municipality);

    if (!this.isMunicipalityValid(municipality)) {
      this.addressFormFieldFacade.clearAvailableStreets();
      return;
    }

    this.addressFormFieldFacade
      .getStreets(municipality.postalCode)
      .pipe(untilDestroyed(this))
      .subscribe((streets) => {
        this.addressFormFieldFacade.setAvailableStreets(streets);
      });
  }

  /**
   * Handler for the changes in the 'street' input.
   * It will update the street and its associated address unit in the facade.
   */
  private handleStreetChanges(): OperatorFunction<string, string> {
    return pipe(
      distinctUntilChanged(),
      tap((street) => {
        this.addressFormFieldFacade.setSelectedStreet(street);
      }),
      filter((street) => street !== null),
      switchMap((street) => {
        return this.fetchStreetAddressUnitAndUpdate(street);
      })
    );
  }

  fetchStreetAddressUnitAndUpdate(street: string): Observable<string> {
    return this.addressFormFieldFacade
      .getStreetAddressUnit(street, this.addressForm.get('municipality')?.value.postalCode)
      .pipe(
        tap((streetAddressUnit) => {
          if (streetAddressUnit) {
            this.addressFormFieldFacade.setSelectedStreetAddressUnit(streetAddressUnit);
            this.addressForm.get(fieldConstant.STREET)?.setValue(
              {
                value: street,
                addressUnit: streetAddressUnit,
              },
              { emitEvent: false }
            );
          }
        }),
        map(() => street)
      );
  }

  private handleGeographicalAddressChanges(): OperatorFunction<string, string> {
    return pipe(
      distinctUntilChanged(),
      tap((_geographicalAddress) => {
        if (this.onChange) {
          this.updateAddressFieldValue(); // Trigger onChange with the updated value
        }
      })
    );
  }

  writeValue(_value: AddressFieldValue): void {
    // No-op: method required by ControlValueAccessor, but no action needed.
  }

  registerOnChange(fn: (value: AddressFieldValue) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouch = fn;
  }

  validate(): ValidationErrors | null {
    const geographicalAddress = this.addressForm.get(fieldConstant.GEOGRAPHICAL_ADDRESS);
    if (!geographicalAddress || !geographicalAddress.valid) {
      return { invalidForm: true };
    }
    return null;
  }

  setDisabledState(isDisabled: boolean): void {
    if (isDisabled) {
      this.addressForm.disable();
    } else {
      this.addressForm.enable();
    }
  }

  private isMunicipalityValid(municipality: Municipality | null): boolean {
    return !!municipality && !!municipality.postalCode;
  }

  private loadMunicipalities(): void {
    this.addressFormFieldFacade
      .getMunicipalities()
      .pipe(untilDestroyed(this))
      .subscribe((municipalities: Municipality[]) => {
        this.addressFormFieldFacade.setAvailableMunicipalities(municipalities);
      });
  }
}
