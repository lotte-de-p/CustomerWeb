import { Injectable } from '@angular/core';
import { MapperInterface } from '@telenet/ng-lib-shared';
import { isEmpty } from 'lodash-es';
import { OmapiProductMapper } from '@telenet/ng-lib-omapi';
import { EligibleProductsMapper } from './eligible-products.mapper';
import { RawGroupBundleInterface } from '../interfaces/raw-group-bundle.interface';
import { GroupBundleInterface } from '../interfaces/group-bundle.interface';

@Injectable({
  providedIn: 'root',
})
export class GroupBundleMapper implements MapperInterface<RawGroupBundleInterface[], GroupBundleInterface[]> {
  constructor(
    private readonly elegibleProductsMapper: EligibleProductsMapper,
    private readonly omapiProductMapper: OmapiProductMapper
  ) {}

  toModel(data: RawGroupBundleInterface[], _httpStatus?: number): GroupBundleInterface[] {
    return this.createBundleInterface(data);
  }

  private createBundleInterface(rawGroupBundleInterfaces: RawGroupBundleInterface[]): GroupBundleInterface[] {
    return (
      rawGroupBundleInterfaces &&
      rawGroupBundleInterfaces.map((rawProductCatalogs) => {
        return this.createBundles(rawProductCatalogs);
      })
    );
  }

  private createBundles(rawGroupBundle: RawGroupBundleInterface): GroupBundleInterface {
    const groupBundle = {} as GroupBundleInterface;

    if (!isEmpty(rawGroupBundle)) {
      groupBundle.productInfo = this.omapiProductMapper.toModel(rawGroupBundle.rawOmapi);
      groupBundle.label = rawGroupBundle.label;
      groupBundle.specUrl = rawGroupBundle.specUrl;
      groupBundle.price = this.elegibleProductsMapper.createPrice(rawGroupBundle.price);
    }
    return groupBundle;
  }
}
