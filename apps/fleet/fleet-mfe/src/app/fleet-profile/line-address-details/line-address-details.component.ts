import { Component } from '@angular/core';
import { filter, finalize, switchMap, takeUntil } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { AbstractBaseComponent, LoaderService, UrlService } from '@telenet/ng-lib-page';
import { LineAddressDetailsConstants } from '../../shared/common/constants/line-address-details.constants';
import { ProductsService } from '../../shared/common/services/products/products.service';
import { AddressService } from './services/address.service';
import { Address } from '../../shared/common/models/address.model';
import { TranslateModule } from '@ngx-translate/core';
import { NgIf } from '@angular/common';
import { LoginModule } from '@telenet/ng-lib-ocapi';

@Component({
  selector: 'tg-line-address-details',
  templateUrl: './line-address-details.component.html',
  standalone: true,
  imports: [LoginModule, NgIf, TranslateModule],
})
export class LineAddressDetailsComponent extends AbstractBaseComponent {
  messageGroupName = LineAddressDetailsConstants.MESSAGE_GROUP;
  scopes = LineAddressDetailsConstants.SCOPES;
  msisdn: string;
  address: Address;
  streetHouseNr: string;

  constructor(
    private readonly urlService: UrlService,
    private readonly productService: ProductsService,
    private readonly addressService: AddressService,
    private readonly loaderService: LoaderService
  ) {
    super();
  }

  initAfterLoggedIn(): void {
    this.msisdn = this.urlService.getParameterByName(LineAddressDetailsConstants.MSISDN)!;
    if (this.msisdn) {
      this.getAddressDetails();
    }
  }

  getAddressDetails(): void {
    this.loaderService.start();
    this.productService
      .getProductByIdentifier(this.messageGroupName, this.msisdn)
      .pipe(
        filter((productDetails) => !!productDetails && !!productDetails.secondaryBillingAddressId),
        switchMap((productDetails) => this.getAddressById(productDetails.secondaryBillingAddressId)),
        finalize(() => this.loaderService.stop())
      )
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((addresses) => this.populateAddressDetails(addresses[0]));
  }

  private getAddressById(secondaryBillingAddressId: string): Observable<Address[]> {
    return this.addressService.getAddressById(this.messageGroupName, secondaryBillingAddressId);
  }

  private populateAddressDetails(address: Address): void {
    this.address = address;
    this.streetHouseNr = this.address.street + ' ' + this.address.houseNumber;
  }
}
