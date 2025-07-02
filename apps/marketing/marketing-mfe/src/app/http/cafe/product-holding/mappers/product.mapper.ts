import { Injectable } from '@angular/core';
import { MapperInterface } from '@telenet/ng-lib-shared';
import { AddressMapper } from '../../../common/address/mappers/address.mapper';
import { Product } from '../models/product.model';
import { Address } from '../../../common/address/models/address.model';
import { OmapiProduct, OmapiProductMapper, RawOmapiProductInterface } from '@telenet/ng-lib-omapi';
import { RawOptionInterface, RawProductInterface } from '../interfaces/raw-product-holding.interface';
import { RawAddressInterface } from '../../../common/address/interfaces/raw-address.interface';
import { first } from 'lodash-es';
import { Option } from '../models/option.model';
import { OptionMapper } from './option.mapper';

@Injectable({
  providedIn: 'root',
})
export class ProductMapper implements MapperInterface<RawProductInterface, Product> {
  constructor(
    private readonly addressMapper: AddressMapper,
    private readonly omapiMapper: OmapiProductMapper,
    private readonly optionMapper: OptionMapper
  ) {}

  toModel(product: RawProductInterface): Product {
    return this.createProduct(product);
  }

  private createProduct(rawProduct: RawProductInterface): Product {
    const product = new Product();
    product.accountNumber = Number(rawProduct.accountnumber);
    if (rawProduct.address) {
      product.address = first(this.createAddress(rawProduct.address));
    }
    product.customerProductId = Number(rawProduct.customerproductid);
    product.identifier = rawProduct.identifier;
    product.lineIdentifier = rawProduct.lineIdentifier;
    product.label = rawProduct.label;
    product.specUrl = rawProduct.specurl;
    product.products = this.createProducts(rawProduct.products, rawProduct?.address);
    if (rawProduct.rawOmapi) product.productInfo = this.createProductInfo(rawProduct.rawOmapi);
    product.options = this.createOptions(rawProduct.options);
    return product;
  }

  private createProductInfo(rawOmapi: RawOmapiProductInterface): OmapiProduct {
    if (rawOmapi) {
      return this.omapiMapper.toModel(rawOmapi);
    }

    return {} as OmapiProduct;
  }

  private createAddress(rawAddresses: RawAddressInterface): Address[] | undefined {
    if (rawAddresses) {
      return this.addressMapper.toModel([rawAddresses]);
    }
    return undefined;
  }

  private createProducts(products: RawProductInterface[], address?: RawAddressInterface): Product[] {
    if (products) {
      return products.map((product: RawProductInterface) => {
        product.address = address;
        return this.toModel(product);
      });
    }

    return [];
  }

  private createOptions(options: RawOptionInterface[]): Option[] {
    return options.map((option: RawOptionInterface) => {
      return this.optionMapper.toModel(option);
    });
  }
}
