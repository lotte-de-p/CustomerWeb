import { PlannedMaintenanceModel } from './planned-maintenance.model';
import { DisplayAddressInterface } from '../interfaces/display-address.interface';

export class Address {
  addressId: string;
  type: string;
  houseNumber: string;
  boxNumber: string;
  subHouseNumber: string;
  street: string;
  streetId: string;
  postalCode: string;
  municipality: string;
  country?: string;
  countryCode?: string;
  floorNumber?: string;
  addressType?: string;
  tinaLocationId?: string;
  plannedMaintenance?: PlannedMaintenanceModel[];

  getDisplayAddress(getFullAddress = false, singleLine = false): DisplayAddressInterface {
    const displayAddress = {} as DisplayAddressInterface;
    if (this.street) {
      displayAddress.address = this.street.concat(' ').concat(this.houseNumber);
    }
    if (this.subHouseNumber) {
      displayAddress.address = displayAddress.address.concat('/').concat(this.subHouseNumber);
    }
    if (this.boxNumber) {
      displayAddress.address = displayAddress.address.concat('/').concat(this.boxNumber);
    }
    if (this.postalCode && getFullAddress) {
      displayAddress.address = this.getPostalCode(displayAddress, singleLine);
    }
    displayAddress.zipMunicipality = this.getDisplayAddressValue(this.postalCode);
    displayAddress.addressId = this.getDisplayAddressValue(this.addressId);
    if (this.municipality) {
      displayAddress.zipMunicipality = displayAddress.zipMunicipality.concat(' ').concat(this.municipality);
      if (getFullAddress) {
        displayAddress.address = displayAddress.address.concat(' ').concat(this.municipality);
      }
    }
    displayAddress.houseNrSubHouseNr = this.houseNumber;
    if (this.subHouseNumber) {
      displayAddress.houseNrSubHouseNr = displayAddress.houseNrSubHouseNr.concat('/').concat(this.subHouseNumber);
    }
    displayAddress.country = this.country;

    return displayAddress;
  }

  getDisplayAddressValue(value: string): string {
    return value ? value : '';
  }

  private getPostalCode(displayAddress: DisplayAddressInterface, singleLine: boolean) {
    return displayAddress.address
      .concat(', ')
      .concat(singleLine ? '' : '\n')
      .concat(this.postalCode);
  }
}
