import { Injectable } from '@angular/core';
import { AddressReverseProxyService } from '../services/address-reverse-proxy.service';
import { AddressUnit } from '../interfaces/address-unit.interface';
import { Observable } from 'rxjs';
import { Municipality } from '../interfaces/municipality.interface';

@Injectable({ providedIn: 'root' })
export class AddressFacade {
  constructor(private readonly addressReverseProxyService: AddressReverseProxyService) {}

  getMunicipalities(): Observable<Municipality[]> {
    return this.addressReverseProxyService.getMunicipalities();
  }

  getStreets(postalCodeQuery: string): Observable<string[]> {
    return this.addressReverseProxyService.getStreets(postalCodeQuery);
  }

  getStreetAddressUnit(streetValue: string, postalCodeValue: string): Observable<AddressUnit | null> {
    return this.addressReverseProxyService.getStreetAddressUnit(streetValue, postalCodeValue);
  }

  getGeographicalAddresses(query: string, streetAddressUnitId: string): Observable<AddressUnit[]> {
    return this.addressReverseProxyService.getGeographicalAddresses(query, streetAddressUnitId);
  }

  public getAddressById(addressId: string): Observable<AddressUnit> {
    return this.addressReverseProxyService.getAddressById(addressId);
  }
}
