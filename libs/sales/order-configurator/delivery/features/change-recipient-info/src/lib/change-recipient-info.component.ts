import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { first, map } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { CommonModule } from '@angular/common';
import { InlineSVGModule } from 'ng-inline-svg-2';

import { AddressFormFieldComponent } from '@sales/address-form-field/feat-address-form-field';
import { AnalyticsClickEventDirective } from '@sales/events/feat-analytics';
import { StepFacade } from '@sales/shared/data-access';
import { AddressFieldValue, AddressFormFieldFacade, GeographicalAddress } from '@sales/address-form-field/data-access';
import {
  DeliveryNgrxModule,
  recipientAddress,
  recipientDetails,
  setRecipientAddress,
  setRecipientDetails,
} from '@sales/order-configurator/delivery/state';
import {
  AddressUnit,
  RecipientAddress,
  RecipientDetails,
  RecipientInfo,
} from '@sales/order-configurator/delivery/domain';

@Component({
  standalone: true,
  imports: [
    TranslateModule,
    ReactiveFormsModule,
    AddressFormFieldComponent,
    AnalyticsClickEventDirective,
    DeliveryNgrxModule,
    CommonModule,
    InlineSVGModule,
  ],
  selector: 'tg-order-configurator-delivery-feat-change-recipient-info',
  templateUrl: './change-recipient-info.component.html',
})
@UntilDestroy()
export class ChangeRecipientInfoComponent implements OnInit {
  @Input() isFormVisible = false;
  @Output() isFormVisibleChange: EventEmitter<boolean> = new EventEmitter();

  recipientDetails$: Observable<RecipientDetails> = this.store.select(recipientDetails);
  recipientAddress$: Observable<RecipientAddress> = this.store.select(recipientAddress);

  validatePersonalInfoOnInit = false;
  form: FormGroup = this.formBuilder.group({});

  constructor(
    private readonly store: Store,
    private readonly stepFacade: StepFacade,
    private readonly formBuilder: FormBuilder,
    private readonly addressFormFieldFacade: AddressFormFieldFacade
  ) {}

  ngOnInit(): void {
    this.initForm();
    this.checkRequiredDeliveryInfo();
    if (this.validatePersonalInfoOnInit) {
      this.updateFormValidity();
    }
  }

  private initForm(): void {
    this.form = this.formBuilder.group({
      recipientInfo: new FormControl(this.recipientDetails$),
      recipientAddress: new FormControl(),
    });
  }

  onSubmit(): void {
    if (!this.form.valid) {
      this.updateFormValidity();
      return;
    }

    const formAddress: AddressFieldValue = this.form.get('recipientInfo')?.value;
    if (!formAddress) return;

    this.addressFormFieldFacade.availableHouseNumbers$
      .pipe(
        first(),
        map((availableHouseNumbers) => this.prepareAddressFieldValue(formAddress, availableHouseNumbers))
      )
      .subscribe((addressFieldValue) => this.submitForm(addressFieldValue));
  }

  private updateFormValidity(): void {
    this.form.markAllAsTouched();
    this.form.updateValueAndValidity();
  }

  private prepareAddressFieldValue(
    formAddress: AddressFieldValue,
    availableHouseNumbers: AddressUnit[]
  ): AddressFieldValue | null {
    const geographicalAddress = formAddress.geographical_address ?? this.getDefaultGeographicalAddress();
    const matchingAddressUnit = this.findMatchingAddressUnit(availableHouseNumbers, geographicalAddress);

    if (matchingAddressUnit) {
      geographicalAddress.addressUnit = matchingAddressUnit;
      geographicalAddress.isManualAddress = false;
    }

    return {
      municipality: formAddress.municipality,
      street: formAddress.street,
      geographical_address: geographicalAddress,
    };
  }

  private findMatchingAddressUnit(
    availableHouseNumbers: AddressUnit[],
    geographicalAddress: GeographicalAddress
  ): AddressUnit | undefined {
    return availableHouseNumbers.find((addressUnit) => this.isMatchingAddressUnit(addressUnit, geographicalAddress));
  }

  private isMatchingAddressUnit(addressUnit: AddressUnit, geographicalAddress: GeographicalAddress): boolean {
    const matchesHouseNumber = addressUnit.name === geographicalAddress.housenumber;
    const matchesSubHouseNumber = geographicalAddress.subhousenumber
      ? addressUnit.subHouseNumber === geographicalAddress.subhousenumber
      : true;
    const matchesBox = geographicalAddress.box?.boxNumber
      ? addressUnit.boxNumber === geographicalAddress.box.boxNumber
      : true;

    return matchesHouseNumber && matchesSubHouseNumber && matchesBox;
  }

  private getDefaultGeographicalAddress(): GeographicalAddress {
    return {
      housenumber: undefined,
      subhousenumber: undefined,
      box: undefined,
      isManualAddress: true,
    };
  }

  private submitForm(addressFieldValue: AddressFieldValue | null): void {
    const recipientInfo = this.form.get('recipientInfo');
    const recipientAddress = this.form.get('recipientAddress');

    const submissionData: RecipientInfo = {
      recipientDetails: recipientInfo?.pristine ? null : recipientInfo?.value,
      recipientAddress: recipientAddress?.pristine ? null : addressFieldValue,
    };

    this.saveNewPersonalInfo(submissionData);
  }

  private checkRequiredDeliveryInfo(): void {
    this.store
      .select(recipientDetails)
      .pipe(untilDestroyed(this))
      .subscribe((recipientDetails) => {
        if (!recipientDetails || !recipientDetails.email || !recipientDetails.mobile) {
          this.validatePersonalInfoOnInit = true;
          this.openRecipientDetailsForm();
        }
      });
  }

  private openRecipientDetailsForm(): void {
    this.stepFacade.hideNavigationBar();
    this.isFormVisible = true;
  }

  closeRecipientDetailsForm(): void {
    this.isFormVisible = false;
    this.isFormVisibleChange.emit(this.isFormVisible);
  }

  private saveNewPersonalInfo(recipientInfo: RecipientInfo): void {
    this.store.dispatch(setRecipientDetails({ recipientDetails: recipientInfo.recipientDetails }));
    const deliveryAddress = this.convertFieldValueToDeliveryAddress(recipientInfo.recipientAddress);
    if (deliveryAddress) {
      this.store.dispatch(setRecipientAddress({ recipientAddress: deliveryAddress }));
    }
    this.stepFacade.displayNavigationBar();
    this.closeRecipientDetailsForm();
    this.validatePersonalInfoOnInit = false;
  }

  private convertFieldValueToDeliveryAddress(
    addressFieldValue: AddressFieldValue | null
  ): RecipientAddress | undefined {
    if (!addressFieldValue?.geographical_address || !addressFieldValue.municipality || !addressFieldValue.street) {
      return undefined;
    }

    const { geographical_address, street, municipality } = addressFieldValue;
    const { boxNumber = '', floor } = geographical_address.box || {};
    const floorString = floor ? ` (${floor})` : '';
    const boxString = boxNumber + floorString;

    return {
      countryCode: 'BE',
      country: 'België',
      addressUnit: {
        addressUnitTypeId: '',
        externalId: '',
        href: '',
        id: '',
        name: '',
        type: '',
      },
      postalCode: municipality.postalCode,
      municipality: municipality.location,
      street: street as unknown as string,
      houseNumber: geographical_address.housenumber || '',
      subHouseNumber: geographical_address.subhousenumber,
      box: boxString,
    };
  }
}
