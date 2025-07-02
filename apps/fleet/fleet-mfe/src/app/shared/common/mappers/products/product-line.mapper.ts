import { MapperInterface } from '@telenet/ng-lib-shared';
import { Injectable } from '@angular/core';
import { isEmpty } from 'lodash-es';
import { ProductLine } from '../../models/sim-card/line-overview/product-line.model';
import { CustomerProductHoldingMapper } from '../customer-product-holding/customer-product-holding.mapper';
import { RawCustomerProductHoldingInterface } from '../../interfaces/raw-customer-product-holding.interface';
import { RawProductLineInterfaceResponse } from '../../interfaces/products/raw-product-line.interface';

@Injectable({
  providedIn: 'root',
})
export class ProductLineMapper implements MapperInterface<RawProductLineInterfaceResponse, ProductLine> {
  constructor(private readonly customerProductHoldingMapper: CustomerProductHoldingMapper) {}

  toModel(rawProductCatalog: RawProductLineInterfaceResponse): ProductLine {
    return this.createProductCatalog(rawProductCatalog, rawProductCatalog.headers.get('content-range'));
  }

  private createProductCatalog(rawProductLines: RawProductLineInterfaceResponse, range: string): ProductLine {
    return rawProductLines && this.createProductCatalogs(rawProductLines.body, range);
  }

  private createProductCatalogs(
    rawProductLineInterface: RawCustomerProductHoldingInterface[],
    range: string
  ): ProductLine {
    const productLine = {} as ProductLine;
    if (!isEmpty(rawProductLineInterface)) {
      productLine.range = range;
      productLine.lines = rawProductLineInterface.map((rawLine) => {
        return this.customerProductHoldingMapper.toModel(rawLine);
      });
    }
    return productLine;
  }
}
