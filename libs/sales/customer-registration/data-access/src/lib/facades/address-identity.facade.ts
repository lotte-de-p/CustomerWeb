import { Store } from '@ngrx/store';
import { Injectable } from '@angular/core';
import {
  SetAddressStoreAction,
  finalizeFlowAction,
  getAddressAction,
  getBoxNoAction,
  getSubHouseNoAction,
  performResidentialNavsCheckAction,
  preformResidentialSearchCustomerAction,
  resetSearchCustomerSuccessAction,
} from '../+state/customer-registration.actions';
import { Observable } from 'rxjs';
import { Municipality } from '../entities/interfaces/municipality.interface';
import { AddressService } from '../infrastructure/address.service';
import { AddressRequestInterface } from '../entities/interfaces/address-request.interface';
import {
  selectAddressData,
  selectItsMeResponse,
  selectBoxNumbers,
  selectSearchCustomerResultExists,
  selectSearchCustomerResultSoftMatchExists,
  selectSubHouseNumbers,
  selectOmapiProduct,
  selectNavsCheckResult,
  selectPointOfSalesUrl,
  selectRequestHelpUrl,
  selectError,
} from '../+state/customer-registration.selectors';
import { Address } from '../entities/models/address.model';
import { AddressStoreInterface } from '../entities/interfaces/address-store.interface';
import { OmapiProductCategoryUtil } from '../util/omapi-product-category.util';

@Injectable({
  providedIn: 'root',
})
export class AddressIdentityFacade {
  addresses$ = this.store.select(selectAddressData);
  searchCustomerResultExists$ = this.store.select(selectSearchCustomerResultExists);
  selectSearchCustomerResultSoftMatchExists$ = this.store.select(selectSearchCustomerResultSoftMatchExists);
  boxNumbers$ = this.store.select(selectBoxNumbers);
  subHouseNumbers$ = this.store.select(selectSubHouseNumbers);
  itsMeResponse$ = this.store.select(selectItsMeResponse);
  omapiProducts$ = this.store.select(selectOmapiProduct);
  isInstallableProductExists$ = OmapiProductCategoryUtil.isFixedProduct(this.omapiProducts$);
  navsResult$ = this.store.select(selectNavsCheckResult);
  pointOfSalesUrl$ = this.store.select(selectPointOfSalesUrl);
  requestHelpUrl$ = this.store.select(selectRequestHelpUrl);
  error$ = this.store.select(selectError);

  constructor(
    private readonly store: Store,
    private readonly addressService: AddressService
  ) {}

  performResidentialNavsCheck() {
    this.store.dispatch(performResidentialNavsCheckAction());
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

  searchCustomer() {
    this.store.dispatch(preformResidentialSearchCustomerAction());
  }

  resetSearchCustomer() {
    this.store.dispatch(resetSearchCustomerSuccessAction());
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
    addressStore.streetId = addresses[0]?.streetId;
    addressStore.country = addresses[0]?.country;
    addressStore.addressType = addresses[0].addressType;

    addressStore.size = addresses.length;
    this.store.dispatch(SetAddressStoreAction({ address: addressStore }));
  }

  finalizeFlow() {
    this.store.dispatch(finalizeFlowAction());
  }
}
