import { Observable, throwError } from 'rxjs';
import { Injectable } from '@angular/core';
import {
  InstallationAddress,
  InstallationAddressService,
  OrderResultInterface,
} from '@sales/order-configurator/domain-installation-address';

@Injectable({
  providedIn: 'root',
})
export class InstallationAddressFacade {
  constructor(private readonly installationAddressService: InstallationAddressService) {}

  updateAvailableInstallationAddresses(): Observable<InstallationAddress[]> {
    return this.installationAddressService.getInstallationAddresses();
  }

  pickExistingInstallationAddress(installationAddress: InstallationAddress): void {
    // call API to prepare order on existing installation address
    console.log('Order prepared on existing installation address', installationAddress);
  }

  prepareOrderOnAddress(addressId: string): Observable<OrderResultInterface> {
    console.log('Order prepared on geographical address', addressId);
    return this.installationAddressService.orderOnGeographicalAddress(addressId);
  }

  prepareOrderForNewCustomer(): Observable<OrderResultInterface> {
    const installationAddressId = this.installationAddressIdFromLocalStorage();
    if (installationAddressId) {
      console.log('Order prepared on geographical address', installationAddressId);
      return this.installationAddressService.orderOnGeographicalAddress(installationAddressId);
    }

    return throwError(
      () => new Error('Location ID of new customer (set in customer registration) not found in local storage')
    );
  }

  private installationAddressIdFromLocalStorage(): string | null {
    return window.localStorage.getItem('customerInstallationLocationId');
  }
}
