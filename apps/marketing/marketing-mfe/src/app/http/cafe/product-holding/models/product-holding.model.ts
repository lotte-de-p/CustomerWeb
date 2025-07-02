import { LineEnum } from '@telenet/ng-lib-form';
import { uniq } from 'factory.ts/lib/shared';
import { Predicate } from '@angular/core';
import { Product } from './product.model';
import { Address } from '../../../common/address/models/address.model';
import { AddressUtil } from '../../../common/address/utils/address.util';

export class ProductHolding {
  products: Product[] = [];

  private _installationAddresses: Address[];

  containsFMC(): boolean {
    return this.products.some((product) => {
      return product.isFmc();
    });
  }

  containsWigoHomeS(): boolean {
    return this.products.some((product) => {
      return product.isFmc() && product.isMidTier() && product.is3P();
    });
  }

  containsWhoppa(): boolean {
    return this.products.some((product) => {
      return product.isWhoppa();
    });
  }

  containsInternetProduct(): boolean {
    return this.getFlattenedProducts(this.products).some((product: Product) => {
      return product.isInternet();
    });
  }

  containsOnlyGivenProductsAndOptions(omapiIds: string[]): boolean {
    const holdingOmapiIds: string[] = uniq(this.getProductsAndOptionsOmapiIds());
    return (
      holdingOmapiIds.length === omapiIds.length &&
      this.products.every((product: Product) => {
        return omapiIds.indexOf(product.getOmapiId() ?? '') >= 0;
      })
    );
  }

  containsFixedLine(): boolean {
    return this.getLines().indexOf(LineEnum.PHONE) >= 0;
  }

  containsDtv(): boolean {
    return this.getLines().indexOf(LineEnum.IDTV) >= 0;
  }

  getFixedLine(): string {
    const product = this.getFlattenedProducts(this.products).find((currentProduct: Product) => {
      return currentProduct.isFixedCalling();
    });

    return product ? product.identifier : '';
  }

  getLines(): LineEnum[] {
    const flattenedProducts = this.getFlattenedProducts(this.products);
    return this.getProductLines(flattenedProducts);
  }

  getLinesForAddress(address: Address): LineEnum[] {
    let flattenedProducts = this.getFlattenedProducts(this.products);
    flattenedProducts = this.getProductsForAddress(flattenedProducts, address);
    return this.getProductLines(flattenedProducts);
  }

  getMaxMobileLines(): string {
    if (
      typeof this.products[0]?.productInfo?.characteristics === 'object' &&
      this.products[0]?.productInfo?.characteristics &&
      typeof this.products[0]?.productInfo?.characteristics['maxMobileLines'] === 'string'
    )
      return this.products[0]?.productInfo?.characteristics['maxMobileLines'];
    return '';
  }

  getBundleMaxMobileLines(): number {
    return Number(
      this.products
        .find((product) => product.productInfo && product.productInfo.isBundle())
        ?.productInfo?.getMaxMobileLines()
    );
  }

  getBundleDtvIdentifier(): string | undefined {
    const bundle = this.products.find((product) => product.productInfo && product.productInfo.isBundle());
    return bundle ? bundle.getDtvIdentifier() : undefined;
  }

  getProductsForAddress(flattenedProducts: Product[], address: Address): Product[] {
    return flattenedProducts.filter((product) => {
      return product.address ? AddressUtil.compareAddresses(product.address, address) : false;
    });
  }

  getProductIds(): string[] {
    return this.products.flatMap((product) =>
      product.productInfo?.productId !== undefined ? [product.productInfo?.productId] : []
    );
  }

  get installationAddresses(): Address[] {
    if (this._installationAddresses) {
      return this._installationAddresses;
    }
    this._installationAddresses = this.getInstallationAddressesForProduct(() => {
      return true;
    });
    return this._installationAddresses;
  }

  getInstallationAddressesForProduct(predicate: Predicate<Product>) {
    return this.getFlattenedProducts(this.products)
      .filter(predicate)
      .filter((product) => {
        return !!product.address?.addressId;
      })
      .reduce((addresses: Address[], product) => {
        if (
          !addresses.find((needle: Address) => {
            return needle.addressId === product.address?.addressId;
          })
        ) {
          const productAdress = product.address;
          if (productAdress) addresses.push(productAdress);
        }
        return addresses;
      }, []);
  }

  private getFlattenedProducts(products: Product[], returnProductList: Product[] = []): Product[] {
    products.forEach((product) => {
      if (product.products && product.products.length > 0) {
        returnProductList.push(product);
        returnProductList = this.getFlattenedProducts(product.products, returnProductList);
      } else {
        returnProductList.push(product);
      }
    });
    return returnProductList;
  }

  getProductsAndOptionsOmapiIds(): string[] {
    const omapiIds: string[] = [];

    this.getFlattenedProducts(this.products).forEach((product) => {
      const productId = product.getOmapiId();
      if (productId) omapiIds.push(productId);
      product.options.forEach((option) => {
        const optionOmapiId = option.getOmapiId();
        if (optionOmapiId) {
          omapiIds.push(optionOmapiId);
        }
      });
    });
    return omapiIds;
  }

  private getProductLines(products: Product[]): LineEnum[] {
    const serviceTypes: LineEnum[] = [];
    products.forEach((product) => {
      product?.productInfo?.services?.forEach((service) => {
        switch (service.serviceType) {
          case 'DTV':
            serviceTypes.push(LineEnum.IDTV);
            break;
          case 'FIXED_INTERNET':
            serviceTypes.push(LineEnum.INTERNET);
            break;
          case 'FIXED_CALLING':
            serviceTypes.push(LineEnum.PHONE);
            break;
          case 'ATV':
            serviceTypes.push(LineEnum.ANALOGTV);
            break;
        }
      });
    });
    return serviceTypes;
  }
}
