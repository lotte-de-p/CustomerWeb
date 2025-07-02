import { Injectable } from '@angular/core';
import { OmapiProduct } from '@telenet/ng-lib-omapi';
import { SofyProduct } from '../models/sofy-product';
import { SofyAddress } from '../models/sofy-address';
import { Address } from '../models/address.model';

@Injectable({
  providedIn: 'root',
})
export class SofyProductMapper {
  public mapSelectedProductToSofyProduct(omapiProduct: OmapiProduct, address: Address, installType: string) {
    const sofyProducts: SofyProduct[] = [];
    const sofyProduct = new SofyProduct();

    sofyProduct.omapiid = omapiProduct?.productId;
    sofyProduct.options = [];
    sofyProduct.needscableinstallation = !!installType;
    sofyProduct.installtype = installType;
    sofyProduct.installationaddress = this.mapAddress(address);
    sofyProduct.isnewline = false;
    sofyProduct.move = false;

    sofyProducts.push(sofyProduct);
    return sofyProducts;
  }

  private mapAddress(address: Address): SofyAddress {
    const sofyAddress = new SofyAddress();

    if (address) {
      sofyAddress.addressid = address.addressId;
      sofyAddress.municipality = address.municipality;
      sofyAddress.postalcode = address.postalCode;
      sofyAddress.street = address.street;
      sofyAddress.housenr = address.houseNumber;
    }

    return sofyAddress;
  }
}
