import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule, NgClass, NgIf } from '@angular/common';
import { ChangePersonalInfoInterface, DeliveryAddress, PersonalInfo } from '@sales/delivery/data-access';
import { AddressFormFieldComponent } from '@sales/address-form-field/feat-address-form-field';
import { ChangeDeliveryPersonalInfoComponent } from './change-personal-info/change-delivery-personal-info.component';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { InlineSVGModule } from 'ng-inline-svg-2';
import { AssetService } from '@telenet/ng-lib-page';
import { stepImage } from './constants/change-delivery.const';
import { AnalyticsClickEventDirective } from '@sales/events/feat-analytics';
import { first } from 'rxjs';
import { AddressUnit } from '@sales/shared/address/data-access';
import { AddressFieldValue, AddressFormFieldFacade, GeographicalAddress } from '@sales/address-form-field/data-access';

@Component({
  standalone: true,
  imports: [
    NgIf,
    NgClass,
    CommonModule,
    ReactiveFormsModule,
    AddressFormFieldComponent,
    ChangeDeliveryPersonalInfoComponent,
    TranslateModule,
    InlineSVGModule,
    AnalyticsClickEventDirective,
  ],
  selector: 'tg-sales-change-delivery-info',
  templateUrl: './change-delivery-info.component.html',
})
export class ChangeDeliveryInfoComponent implements OnInit {
  @Input() personalInfo: PersonalInfo | null | undefined;
  @Input() deliveryAddress: DeliveryAddress | null | undefined;
  @Input() validatePersonalInfoOnInit = false;
  @Output() closeOverlay = new EventEmitter();
  @Output() saveNewPersonalInfo = new EventEmitter<ChangePersonalInfoInterface>();

  stepImage: string | undefined;
  form: FormGroup = new FormGroup({});

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly addressFormFieldFacade: AddressFormFieldFacade
  ) {
    this.stepImage = AssetService.getImagePath('HARDWARE_CHECKOUT', stepImage);
  }

  ngOnInit(): void {
    this.initForm();
  }

  onSubmit() {
    if (!this.form.valid) {
      this.updateFormValidity();
      return;
    }

    const formAddress: AddressFieldValue = this.form.get('address')?.value;

    this.addressFormFieldFacade.availableHouseNumbers$
      .pipe(first())
      .subscribe((availableHouseNumbers: AddressUnit[]) => {
        const addressFieldValue = this.prepareAddressFieldValue(formAddress, availableHouseNumbers);

        this.submitForm(addressFieldValue);
      });
  }

  private updateFormValidity(): void {
    const personalInfo = this.form.get('personalinfo');
    const deliveryAddress = this.form.get('address');
    personalInfo?.updateValueAndValidity();
    deliveryAddress?.updateValueAndValidity();
  }

  private prepareAddressFieldValue(
    formAddress: AddressFieldValue,
    availableHouseNumbers: AddressUnit[]
  ): AddressFieldValue | null {
    if (!formAddress) {
      return null;
    }

    const matchingAddressUnit = availableHouseNumbers.find((addressUnit) =>
      this.isMatchingAddressUnit(addressUnit, formAddress.geographical_address)
    );
    const geographical_address = formAddress.geographical_address || {
      housenumber: undefined,
      subhousenumber: undefined,
      box: undefined,
      isManualAddress: true,
    };

    if (matchingAddressUnit) {
      geographical_address.addressUnit = matchingAddressUnit;
      geographical_address.isManualAddress = false;
    }

    return {
      municipality: formAddress.municipality,
      street: formAddress.street,
      geographical_address,
    };
  }

  private isMatchingAddressUnit(
    addressUnit: AddressUnit,
    geographicalAddress: GeographicalAddress | undefined
  ): boolean {
    const matchesHouseNumber = addressUnit.name === geographicalAddress?.housenumber;
    const matchesSubHouseNumber = geographicalAddress?.subhousenumber
      ? addressUnit.subHouseNumber === geographicalAddress.subhousenumber
      : true;
    const matchesBox = geographicalAddress?.box?.boxNumber
      ? addressUnit.boxNumber === geographicalAddress.box.boxNumber
      : true;

    return matchesHouseNumber && matchesSubHouseNumber && matchesBox;
  }

  private submitForm(addressFieldValue: AddressFieldValue | null): void {
    const personalInfo = this.form.get('personalinfo');
    const deliveryAddress = this.form.get('address');

    const submissionData = {
      personalInfo: !personalInfo?.pristine ? personalInfo?.value : null,
      deliveryAddress: !deliveryAddress?.pristine ? addressFieldValue : null,
    };

    this.saveNewPersonalInfo.next(submissionData);
  }

  private initForm() {
    this.form = this.formBuilder.group({});
    this.form.addControl('personalinfo', new FormControl(this.personalInfo));
    this.form.addControl('address', new FormControl());
  }
}
