import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { BusinessIdentityDetails, LegalEntityDetails } from '../+state/customer-registration.state';
import {
  loginAction,
  preformBusinessSearchCustomerAction,
  resetSearchCustomerSuccessAction,
  saveBusinessIdentityDetailsAction,
  performLegalEntityAction,
  getBoxNoAction,
  getSubHouseNoAction,
  SetAddressStoreAction,
  getAddressAction,
} from '../+state/customer-registration.actions';
import {
  selectAddressData,
  selectBoxNumbers,
  selectBusinessIdentityDetails,
  selectError,
  selectLegalEntityDetails,
  selectOmapiProduct,
  selectSearchCustomerResultExists,
  selectSubHouseNumbers,
} from '../+state/customer-registration.selectors';
import { Observable } from 'rxjs';
import { Address } from '../entities/models/address.model';
import { AddressRequestInterface } from '../entities/interfaces/address-request.interface';
import { AddressStoreInterface } from '../entities/interfaces/address-store.interface';
import { Municipality } from '../entities/interfaces/municipality.interface';
import { AddressService } from '../infrastructure/address.service';
import { OmapiProductCategoryUtil } from '../util/omapi-product-category.util';

@Injectable({ providedIn: 'root' })
export class BusinessIdentityDetailsFacade {
  addresses$ = this.store.select(selectAddressData);
  boxNumbers$ = this.store.select(selectBoxNumbers);
  subHouseNumbers$ = this.store.select(selectSubHouseNumbers);
  error$ = this.store.select(selectError);
  businessIdentityDetails$: Observable<BusinessIdentityDetails> = this.store.select(selectBusinessIdentityDetails);
  searchCustomerResultExists$ = this.store.select(selectSearchCustomerResultExists);
  legalEntityDetails$: Observable<LegalEntityDetails> = this.store.select(selectLegalEntityDetails);
  omapiProducts$ = this.store.select(selectOmapiProduct);
  isInstallableProductExists$ = OmapiProductCategoryUtil.isFixedProduct(this.omapiProducts$);

  constructor(
    private readonly store: Store,
    private readonly addressService: AddressService
  ) {}

  saveBusinessIdentityDetails(identityDetails: BusinessIdentityDetails) {
    this.store.dispatch(saveBusinessIdentityDetailsAction(identityDetails));
  }

  searchCustomer() {
    this.store.dispatch(preformBusinessSearchCustomerAction());
  }

  resetSearchCustomer() {
    this.store.dispatch(resetSearchCustomerSuccessAction());
  }

  login() {
    this.store.dispatch(loginAction());
  }

  getLegalEntityDetails() {
    this.store.dispatch(performLegalEntityAction());
  }
  getMunicipalities(): Observable<Municipality[]> {
    return this.addressService.getMunicipalities();
  }

  getStreets(postalCode: string): Observable<string[]> {
    return this.addressService.getStreets(postalCode);
  }

  loadAddress(address: AddressRequestInterface) {
    this.store.dispatch(getAddressAction({ payload: address }));
  }

  getBoxNumbers(address: Address[]) {
    this.store.dispatch(getBoxNoAction({ address: address }));
  }

  getSubHouseNumbers(address: Address[]) {
    this.store.dispatch(getSubHouseNoAction({ address: address }));
  }

  saveMatchedAddress(addresses: Address[], enteredAddress: AddressRequestInterface) {
    const matchedAddress = addresses.filter((address) => {
      return (
        address.houseNumber === enteredAddress.houseNumber &&
        address.subHouseNumber === enteredAddress.subHouseNumber &&
        address.boxNumber === enteredAddress.boxNumber &&
        address.addressType === enteredAddress.type
      );
    });
    const addressStore: AddressStoreInterface = {
      addressType: undefined,
    };
    if (matchedAddress && matchedAddress[0]) {
      addressStore.addressId = matchedAddress[0].addressId;
      addressStore.tinaLocationId = matchedAddress[0].tinaLocationId;
      addressStore.postalCode = matchedAddress[0].postalCode;
      addressStore.municipality = matchedAddress[0].municipality;
      addressStore.houseNumber = matchedAddress[0].houseNumber;
      addressStore.subHouseNumber = matchedAddress[0].subHouseNumber;
      addressStore.boxNumber = matchedAddress[0].boxNumber;
      addressStore.street = matchedAddress[0].street;
    }
    addressStore.streetId = addresses[0].streetId;
    addressStore.country = addresses[0].country;
    addressStore.addressType = addresses[0].addressType;
    addressStore.size = addresses.length;
    this.store.dispatch(SetAddressStoreAction({ address: addressStore }));
  }
}
