import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatAutocomplete, MatAutocompleteTrigger, MatOption } from '@angular/material/autocomplete';
import {
  AddressForm,
  AddressRequestInterface,
  Municipality,
  ItsMeResponseInterface,
  AddressStoreInterface,
} from '@sales/customer-registration/data-access';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule, NgClass } from '@angular/common';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { debounceTime, distinctUntilChanged } from 'rxjs';
@Component({
  selector: 'tg-sales-customer-registration-address-form',
  templateUrl: './address-form.component.html',
  standalone: true,
  providers: [],
  imports: [
    CommonModule,
    MatAutocompleteTrigger,
    MatAutocomplete,
    MatOption,
    TranslateModule,
    ReactiveFormsModule,
    NgClass,
  ],
})
@UntilDestroy()
export class AddressFormComponent implements OnInit {
  @Input() isFormSubmit = false;
  @Input() addressType = 'default';
  @Input() isManualAddressAllowed = false;
  @Input({
    transform: (value: string[] | null) => {
      return value ? value : [];
    },
  })
  subHouseNoSuggestions: string[] = [];
  @Input({
    transform: (value: string[] | null) => {
      return value ? value : [];
    },
  })
  boxNoSuggestions: string[] = [];
  @Input() itsMeDetails: ItsMeResponseInterface | null | undefined;

  addressForm: AddressForm;
  readonly ZIP_CODE = 'zipCode';
  readonly STREET = 'street';

  private matchedMunicipality: Municipality | undefined;
  private matchedStreet: string | undefined;

  @Input() set locationSuggestions(value: Municipality[] | null) {
    this._locationSuggestions = value || [];
    this.populateMunicipalityFromItsMe();
  }

  _locationSuggestions: Municipality[] = [];
  filteredLocationSuggestions: Municipality[] = [];

  @Input() set streetSuggestions(value: string[] | null) {
    this._streetSuggestions = value || [];
    this.populateStreetFromItsMe();
  }

  @Input() set populateAddress(address: AddressStoreInterface | null | undefined) {
    this.populateAddressDetails(address);
  }

  _streetSuggestions: string[] = [];
  filteredStreetSuggestions: string[] = [];
  private itsMeFlow = false;
  isFormReady = false;

  @Output() updateStreetsEmitter: EventEmitter<string> = new EventEmitter();
  @Output() updateSubHouseEmitter: EventEmitter<string> = new EventEmitter();
  @Output() updateBoxEmitter: EventEmitter<string> = new EventEmitter();
  @Output() saveAddressEmitter: EventEmitter<AddressRequestInterface> = new EventEmitter();

  constructor() {
    this.addressForm = AddressForm.build();
  }

  private populateAddressDetails(address: AddressStoreInterface | null | undefined) {
    if (address) {
      this.addressForm.patchValue({
        zipCode: { postalCode: address?.postalCode, location: address?.municipality },
        street: address.street,
        houseNumber: address.houseNumber,
        subHouse: address.subHouseNumber,
        boxNumber: address.boxNumber,
      });
      [this.STREET, 'houseNumber', 'subHouse', 'boxNumber'].forEach((field) => this.enableFormField(field));
    }
  }

  ngOnInit(): void {
    this.addressForm.controls[this.ZIP_CODE].valueChanges
      .pipe(untilDestroyed(this))
      .subscribe((value: Municipality | string) => {
        if (typeof value === 'string') {
          this.filteredLocationSuggestions = this.filterMunicipality(value);
        } else {
          if (value.postalCode && this.hasValidPostalCode()) {
            this.updateStreets(value.postalCode);
            this.enableFormField(this.STREET);
          }
        }
      });

    this.addressForm.controls[this.STREET].valueChanges
      .pipe(debounceTime(300), distinctUntilChanged(), untilDestroyed(this))
      .subscribe((value: string) => {
        this.filteredStreetSuggestions = this.getFilteredStreetSuggestions(value);
        if (this.hasValidStreet()) {
          ['houseNumber', 'subHouse', 'boxNumber'].forEach((field) => this.enableFormField(field));
        }
      });

    this.addressForm.controls['subHouse'].valueChanges
      .pipe(debounceTime(300), distinctUntilChanged(), untilDestroyed(this))
      .subscribe(() => {
        this.updateSubHouseEmitter.emit();
      });

    this.addressForm.controls['boxNumber'].valueChanges
      .pipe(debounceTime(300), distinctUntilChanged(), untilDestroyed(this))
      .subscribe(() => {
        this.updateBoxEmitter.emit();
      });
  }

  private getFilteredStreetSuggestions(value: string, strict = false) {
    return this._streetSuggestions.filter((street) =>
      strict ? street.toLowerCase() === value.toLowerCase() : street.toLowerCase().includes(value.toLowerCase())
    );
  }

  private populateAddressFormFieldsFromItsMe() {
    const customerAddress = this.itsMeDetails?.customerAddress;
    if (!customerAddress) {
      this.isFormReady = true;
      return;
    }

    if (this.matchedMunicipality && this.matchedStreet) {
      this.addressForm.patchValue({
        zipCode: this.matchedMunicipality,
        street: this.matchedStreet,
        houseNumber: customerAddress.houseNumber,
        subHouse: customerAddress.subHouseNumber,
        boxNumber: customerAddress.boxNumber,
      });
      [this.STREET, 'houseNumber', 'subHouse', 'boxNumber'].forEach((field) => this.enableFormField(field));
    }
  }

  private enableFormField(controlName: string) {
    this.addressForm.controls[controlName].enable();
  }

  displayFunction(option: Municipality | null): string {
    return option ? option.postalCode + ' - ' + option.location : '';
  }

  private filterMunicipality(keyWord: string, strict = false): Municipality[] {
    keyWord = keyWord.toLowerCase();
    return this._locationSuggestions.filter((suggestion: Municipality) => {
      const { postalCode, location } = suggestion;
      return (
        postalCode &&
        location &&
        (strict
          ? postalCode + ' - ' + location.toLowerCase() === keyWord
          : postalCode.toLowerCase().includes(keyWord) || location.toLowerCase().includes(keyWord))
      );
    });
  }

  private updateStreets(postalCode: string): void {
    this.updateStreetsEmitter.emit(postalCode);
  }

  private hasValidPostalCode(): boolean {
    return this.addressForm.controls[this.ZIP_CODE].valid;
  }

  private hasValidStreet(): boolean {
    return this.addressForm.controls[this.STREET].valid;
  }

  updateAddress(formControlName: string) {
    if (this.addressForm.controls[formControlName].valid && !this.addressForm.controls[formControlName].disabled) {
      this.saveAddressEmitter.emit(this.getRequestData());
    }
  }

  private getRequestData(): AddressRequestInterface {
    const municipality = this.addressForm.controls[this.ZIP_CODE].value;
    return {
      houseNumber: this.addressForm.controls['houseNumber'].value,
      municipality: municipality.location,
      postalCode: municipality.postalCode,
      street: this.addressForm.controls[this.STREET].value,
      boxNumber: this.addressForm.controls['boxNumber'].value,
      subHouseNumber: this.addressForm.controls['subHouse'].value,
      type: this.addressType,
    };
  }

  validateForm(): boolean {
    const formGroup = this.addressForm;
    const valid = formGroup.valid;
    if (!valid) {
      [this.ZIP_CODE, this.STREET, 'houseNumber'].forEach((formControlName: string) => {
        this.enableFormField(formControlName);
        this.addressForm.controls[formControlName].markAsTouched();
        this.addressForm.controls[formControlName].markAsDirty();
      });
    }
    return valid;
  }

  private populateMunicipalityFromItsMe() {
    if (this.itsMeDetails) {
      const itsMePostalCode = this.itsMeDetails?.customerAddress?.postalCode?.trim();
      const itsMeMunicipality = this.itsMeDetails?.customerAddress?.municipality?.trim();
      if (this._locationSuggestions.length && itsMePostalCode) {
        this.itsMeFlow = true;
        this.updateStreets(itsMePostalCode);
        this.matchedMunicipality = this._locationSuggestions
          .filter((suggestedMunicipality) => suggestedMunicipality.postalCode === itsMePostalCode)
          .find(
            (filteredMunicipality) => filteredMunicipality.location?.toLowerCase() === itsMeMunicipality?.toLowerCase()
          );
      }
    }
  }

  private populateStreetFromItsMe() {
    if (this.itsMeDetails) {
      const street = this.itsMeDetails?.customerAddress?.street?.trim().toLowerCase();
      if (this._streetSuggestions.length && street && this.itsMeFlow) {
        this.matchedStreet = this._streetSuggestions.find(
          (suggestion) => suggestion.toLowerCase() === street.toLowerCase()
        );
        this.populateAddressFormFieldsFromItsMe();
        this.itsMeFlow = false;
        this.isFormReady = true;
      }
    }
  }

  isValidInput(formControlName: string, value: string) {
    if (formControlName === this.ZIP_CODE && this.filterMunicipality(value, true).length === 0)
      this.setError(formControlName);
    if (formControlName === this.STREET && this.getFilteredStreetSuggestions(value, true).length === 0)
      this.setError(formControlName);
  }

  private setError(formControlName: string) {
    this.addressForm.controls[formControlName].setErrors({ invalid: true });
  }
}
