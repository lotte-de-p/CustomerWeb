import { MapperInterface } from '@telenet/ng-lib-shared';
import { Injectable } from '@angular/core';
import isEmpty from 'lodash-es/isEmpty';
import {
  ProductPendingOperationsInterface,
  RawProductPendingOperationsInterface,
} from '../../interfaces/product/product-pending-operations.interface';

@Injectable({
  providedIn: 'root',
})
export class ProductPendingOperationsCatalogMapper
  implements MapperInterface<RawProductPendingOperationsInterface[], ProductPendingOperationsInterface[]>
{
  toModel(rawProductPendingCatalog: RawProductPendingOperationsInterface[]): ProductPendingOperationsInterface[] {
    return this.createProductCatalog(rawProductPendingCatalog);
  }

  private createProductCatalog(
    rawProductPendingCatalog: RawProductPendingOperationsInterface[]
  ): ProductPendingOperationsInterface[] {
    return (
      rawProductPendingCatalog &&
      rawProductPendingCatalog.map((rawProductPendingCatalogs) => {
        return this.createProductPendingOperationsCatalogs(rawProductPendingCatalogs);
      })
    );
  }

  private createProductPendingOperationsCatalogs(
    rawProductPendingCatalogs: RawProductPendingOperationsInterface
  ): ProductPendingOperationsInterface {
    const productPendingCatalog = {} as ProductPendingOperationsInterface;
    if (!isEmpty(rawProductPendingCatalogs)) {
      productPendingCatalog.pendingOperationType = rawProductPendingCatalogs.pendingOperationType;
      productPendingCatalog.productIdentifierType = rawProductPendingCatalogs.productIdentifierType;
      productPendingCatalog.productIdentifierValue = rawProductPendingCatalogs.productIdentifierValue;
    }
    return productPendingCatalog;
  }
}
