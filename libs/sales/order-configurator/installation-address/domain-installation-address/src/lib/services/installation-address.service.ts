import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { InstallationAddress, installationAddressTestfactory, OrderResultInterface } from '../interfaces';

@Injectable({
  providedIn: 'root',
})
export class InstallationAddressService {
  public getInstallationAddresses(): Observable<InstallationAddress[]> {
    return of([
      installationAddressTestfactory.build({
        street: 'Kerkstraat',
        houseNumber: '20',
      }),
      installationAddressTestfactory.build({
        street: 'Elektriciteitstraat',
        houseNumber: '1',
      }),
    ]);
  }

  public orderOnGeographicalAddress(addressId: string): Observable<OrderResultInterface> {
    return of({ addressId: addressId, status: 'success' });
  }
}
