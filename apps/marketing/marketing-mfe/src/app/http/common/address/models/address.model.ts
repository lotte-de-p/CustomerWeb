import { DisplayAddressInterface } from '../interfaces/display-address.interface';
import { Location } from '../../geolocation/models/location.model';
import { ConnectFiveAddressDetailsInterface } from '../../connect-five/interfaces/connect-five-order.interface';
import { PlannedMaintenanceModel } from './planned-maintenance.model';

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

    displayAddress.country = this.country || '';

    return displayAddress;
  }

  getDisplayAddressValue(value: string): string {
    return value ? value : '';
  }

  isAppartment(): boolean {
    return !!this.floorNumber;
  }

  getLocation(): Location {
    const location = new Location();
    location.location = this.municipality;
    location.postalCode = this.postalCode;
    return location;
  }

  doesContainAllDataNeededForConnectFiveCheckout(): boolean {
    return !!this.postalCode && !!this.municipality && !!this.street && !!this.houseNumber;
  }

  connectFiveAddressFormat(): ConnectFiveAddressDetailsInterface {
    const connectFiveAddress: ConnectFiveAddressDetailsInterface = {
      city: this.municipality,
      zip: this.postalCode,
      street: this.street,
      nr: this.houseNumber,
      floor: '',
    };
    if (this.boxNumber) {
      connectFiveAddress.box = this.boxNumber;
    }
    return connectFiveAddress;
  }

  private getPostalCode(displayAddress: DisplayAddressInterface, singleLine: boolean) {
    return displayAddress.address
      .concat(', ')
      .concat(singleLine ? '' : '\n')
      .concat(this.postalCode);
  }
}
