import { Injectable } from '@angular/core';
import { SofyModemDetails } from '../models/sofy-modem-details';
import { SofyAddress } from '../models/sofy-address';
import { CafeModemDetailsModel } from '../models/cafe-modem-details.model';
import { Address } from '../models/address.model';

@Injectable({
  providedIn: 'root',
})
export class SofyModemDetailsMapper {
  public mapSofyModemDetails(modemDetails: CafeModemDetailsModel): SofyModemDetails[] {
    const sofyModemDetails: SofyModemDetails[] = [];
    if (modemDetails) {
      modemDetails.modemDetails.forEach((modemDetail) => {
        const sofyModemDetail = new SofyModemDetails();

        sofyModemDetail.macaddress = modemDetail.macAddress;
        sofyModemDetail.cableroutername = modemDetail.cableRouterName;
        sofyModemDetail.hardware = modemDetail.hardwareType;
        sofyModemDetail.installationaddress = this.mapInstallationAddress(modemDetail.installationAddress);
        sofyModemDetail.internetlineidentifier = modemDetail.internetLineIdentifier;
        sofyModemDetail.modemtype = modemDetail.modemType;

        sofyModemDetails.push(sofyModemDetail);
      });
    }
    return sofyModemDetails;
  }

  private mapInstallationAddress(address: Address): SofyAddress {
    const sofyAddress = new SofyAddress();

    sofyAddress.housenr = address.houseNumber;
    sofyAddress.street = address.street;
    sofyAddress.postalcode = address.postalCode;
    sofyAddress.municipality = address.municipality;
    sofyAddress.addressid = address.addressId;
    sofyAddress.country = address.country;

    return sofyAddress;
  }
}
