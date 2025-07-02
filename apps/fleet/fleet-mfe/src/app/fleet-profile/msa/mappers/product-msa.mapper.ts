import { Injectable } from '@angular/core';
import { MapperInterface } from '@telenet/ng-lib-shared';
import { isEmpty } from 'lodash-es';
import { EligibleProductsMapper } from './eligible-products.mapper';
import { GroupBundleMapper } from './group-bundle.mapper';
import { RawProductMsaInterface } from '../interfaces/raw-product-msa.interface';
import { ProductMsaInterface } from '../interfaces/product-msa.interface';

@Injectable({
  providedIn: 'root',
})
export class ProductMsaMapper implements MapperInterface<RawProductMsaInterface[], ProductMsaInterface[]> {
  constructor(
    private readonly eligibleProductsMapper: EligibleProductsMapper,
    private readonly groupBundleMapper: GroupBundleMapper
  ) {}

  toModel(data: RawProductMsaInterface[], _httpStatus?: number): ProductMsaInterface[] {
    return this.createProductMsa(data);
  }

  private createProductMsa(rawProductCatalog: RawProductMsaInterface[]): ProductMsaInterface[] {
    return (
      rawProductCatalog &&
      rawProductCatalog.map((rawProductCatalogs) => {
        return this.createProductCatalogs(rawProductCatalogs);
      })
    );
  }

  private createProductCatalogs(rawProductMsaInterface: RawProductMsaInterface): ProductMsaInterface {
    const productMsa = {} as ProductMsaInterface;
    if (!isEmpty(rawProductMsaInterface)) {
      productMsa.masterAgreementName = rawProductMsaInterface.masterAgreementName;
      productMsa.eligibleOffers = this.eligibleProductsMapper.createEligibleOffers(
        rawProductMsaInterface.eligibleOffers
      );
      productMsa.groupBundles = this.groupBundleMapper.toModel(rawProductMsaInterface.groupBundles);
    }
    return productMsa;
  }
}
