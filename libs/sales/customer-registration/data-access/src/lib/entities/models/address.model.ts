import { DisplayAddressInterface } from '../interfaces/display-address.interface';

export class Address {
  addressId: string | undefined;
  type: string | undefined;
  houseNumber: string | undefined;
  boxNumber: string | undefined;
  subHouseNumber: string | undefined;
  street: string | undefined;
  streetId: string | undefined;
  postalCode: string | undefined;
  municipality: string | undefined;
  country?: string;
  countryCode?: string;
  floorNumber?: string;
  addressType?: string;
  tinaLocationId?: string;

  getDisplayAddress(getFullAddress = false, singleLine = false): DisplayAddressInterface {
    const displayAddress = {} as DisplayAddressInterface;
    if (this.street) {
      displayAddress.address = this.street.concat(' ').concat(this.houseNumber + '');
    }
    if (this.subHouseNumber) {
      displayAddress.address = displayAddress.address.concat('/').concat(this.subHouseNumber);
    }
    if (this.boxNumber) {
      displayAddress.address = displayAddress.address.concat('/').concat(this.boxNumber);
    }
    if (this.postalCode && getFullAddress) {
      displayAddress.address = this.formatPostalCode(displayAddress, singleLine);
    }
    displayAddress.zipMunicipality = this.postalCode + '';
    displayAddress.addressId = this.addressId + '';
    if (this.municipality) {
      displayAddress.zipMunicipality = displayAddress.zipMunicipality.concat(' ').concat(this.municipality);
      if (getFullAddress) {
        displayAddress.address = displayAddress.address.concat(' ').concat(this.municipality);
      }
    }
    displayAddress.houseNrSubHouseNr = this.houseNumber + '';
    if (this.subHouseNumber) {
      displayAddress.houseNrSubHouseNr = displayAddress.houseNrSubHouseNr.concat('/').concat(this.subHouseNumber);
    }
    displayAddress.country = this.country ?? '';

    return displayAddress;
  }
  formatPostalCode(displayAddress: DisplayAddressInterface, singleLine: boolean) {
    return displayAddress.address
      .concat(', ')
      .concat(singleLine ? '' : '\n')
      .concat(this.postalCode + '');
  }
}
