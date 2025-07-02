import { AfterContentChecked, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { filter, switchMap } from 'rxjs/operators';

import { LoginDetails, UserDetailsService } from '@telenet/ng-lib-ocapi';
import {
  AddressFacade,
  AddressInterface,
  FiberAddressCheckerEnum,
  FiberAddressCheckerSectionEnum,
  FiberAddressCheckerService,
  FiberStatusEnum,
} from '@address-checker/data-access';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { FiberReadyComponent } from './fiber-ready/fiber-ready.component';
import { FiberNotReadyComponent } from './fiber-not-ready/fiber-not-ready.component';
import { AddressSelectorComponent } from './address-selector/address-selector.component';
import { AddressFormComponent } from './address-form/address-form.component';
import { LoaderModule, UrlService } from '@telenet/ng-lib-page';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { isEmpty } from 'lodash-es';
import { map } from 'rxjs';
import { DisclaimerComponent } from './disclaimer/disclaimer.component';
import { CustomerInputStoreService } from '@telenet/ng-lib-personalisation';
import { WinkButton, WinkIcon, WinkLink, WinkNotification, WinkParagraph, WinkTitle } from '@telenet/wink-ng';

@UntilDestroy()
@Component({
  standalone: true,
  selector: 'tg-fiber-address-checker',
  imports: [
    AddressFormComponent,
    ReactiveFormsModule,
    TranslateModule,
    CommonModule,
    AddressSelectorComponent,
    LoaderModule,
    DisclaimerComponent,
    FiberReadyComponent,
    FiberNotReadyComponent,
    WinkTitle,
    WinkIcon,
    WinkLink,
    WinkButton,
    WinkNotification,
    WinkParagraph,
  ],
  templateUrl: './fiber-address-checker.component.html',
})
export class FiberAddressCheckerComponent implements OnInit, AfterContentChecked {
  public readonly MESSAGE_GROUP_NAME = 'fiber-address-checker';
  protected readonly FiberAddressCheckerSectionEnum = FiberAddressCheckerSectionEnum;
  @Input() urlToProductPage: string;
  @Input() urlToInfoPage: string;
  @Input() urlRequestSubscription: string;
  addressForm: FormGroup;
  isAddressFormVisible = true;
  userAddresses: AddressInterface[];
  userSelectedAddress: AddressInterface;
  showAddressNotFound: boolean;
  isUserLoggedIn: boolean;
  firstName: string;
  sectionEnum = FiberAddressCheckerSectionEnum;
  currentSection: FiberAddressCheckerSectionEnum = FiberAddressCheckerSectionEnum.ADDRESS_FORM;
  fiberStatus?: FiberStatusEnum;

  constructor(
    private readonly fiberAddressCheckerService: FiberAddressCheckerService,
    private readonly userDetailsService: UserDetailsService,
    private readonly formBuilder: FormBuilder,
    private readonly addressFacade: AddressFacade,
    private readonly changeDetector: ChangeDetectorRef,
    private readonly urlService: UrlService,
    private readonly customerInputStoreService: CustomerInputStoreService
  ) {}

  ngOnInit(): void {
    this.initializeAddressForm();
    this.getLoginUserData();
    this.addressForm.valueChanges.pipe(untilDestroyed(this)).subscribe(() => (this.showAddressNotFound = false));
  }

  checkFiberEligibility(): void {
    if (this.isAddressInvalid()) {
      return;
    }

    const addressData: AddressInterface = this.getSelectedOrFormAddress();
    if (!addressData.addressGeoId) {
      this.showAddressNotFound = true;
      return;
    }
    this.checkAddressFiberStatus(addressData);
  }

  toggleAddressChecker(): void {
    this.showAddressNotFound = false;
    this.isAddressFormVisible = !this.isAddressFormVisible;
  }

  isAddressInvalid(): boolean {
    return this.isAddressFormVisible ? this.addressForm.invalid : false;
  }

  setSelectedAddress(address: AddressInterface): void {
    this.showAddressNotFound = false;
    this.userSelectedAddress = address;
  }

  getSelectedOrFormAddress(): AddressInterface {
    return this.isAddressFormVisible ? this.#getFormAddressData() : this.userSelectedAddress;
  }

  private checkAddressFiberStatus(addressData: AddressInterface): void {
    this.fiberAddressCheckerService
      .getFiberStatusForAddress(FiberAddressCheckerEnum.MESSAGE_GROUP, addressData.addressGeoId)
      .pipe(untilDestroyed(this))
      .subscribe({
        next: (fiberStatus: FiberStatusEnum) => {
          if (fiberStatus === FiberStatusEnum.DOES_NOT_EXIST) {
            this.showAddressNotFound = true;
          } else {
            this.getComponentToOpen(fiberStatus);
          }
        },
        error: (error) => (this.showAddressNotFound = error === FiberAddressCheckerEnum.ADDRESS_NOT_FOUND),
      });
  }

  private initializeAddressForm(): void {
    this.addressForm = this.formBuilder.group({});
  }

  #getFormAddressData(): AddressInterface {
    const { boxNumber, cityOrZipCode, houseNumber, street } = this.addressForm.value;

    return {
      zipcode: cityOrZipCode?.zipCode,
      subMunicipality: cityOrZipCode?.subMunicipality,
      street: street,
      houseNumber: houseNumber?.houseNumber,
      addressGeoId: houseNumber?.geoId,
      boxNumber: boxNumber,
    };
  }

  private getComponentToOpen(fiberStatus: FiberStatusEnum) {
    this.fiberStatus = fiberStatus;
    this.currentSection = this.isAddressInStatusReady(fiberStatus)
      ? this.sectionEnum.FIBER_READY
      : this.sectionEnum.FIBER_NOT_READY;
  }

  private isAddressInStatusReady(fiberStatus: FiberStatusEnum): boolean {
    return fiberStatus === FiberStatusEnum.READY;
  }

  private getLoginUserData(): void {
    this.userDetailsService
      .getUserDetails()
      .pipe(
        untilDestroyed(this),
        filter((loginDetails: LoginDetails) => !!loginDetails?.isLoggedIn()),
        switchMap((loginDetails) =>
          this.addressFacade
            .getUserAddresses(this.MESSAGE_GROUP_NAME)
            .pipe(map((addresses: AddressInterface[]) => ({ addresses, loginDetails })))
        )
      )
      .subscribe({
        next: ({ addresses, loginDetails }) => {
          this.userAddresses = addresses;
          this.isUserLoggedIn = true;
          this.isAddressFormVisible = isEmpty(addresses);
          this.firstName = loginDetails.firstName;
        },
      });
  }

  ngAfterContentChecked(): void {
    this.changeDetector.detectChanges();
  }

  backToAddressSelector() {
    this.showAddressNotFound = false;
    this.initializeAddressForm();
    this.currentSection = FiberAddressCheckerSectionEnum.ADDRESS_FORM;
  }

  toProductPage(): void {
    const selectedOrFormAddress = this.getSelectedOrFormAddress();
    selectedOrFormAddress.fiberConnectable = this.isAddressInStatusReady(
      this.fiberStatus ?? FiberStatusEnum.NOT_PLANNED
    );
    this.customerInputStoreService.enrichStoreData('fiberCheck', selectedOrFormAddress);
    this.urlService.redirectTo(this.urlToProductPage);
  }
}
