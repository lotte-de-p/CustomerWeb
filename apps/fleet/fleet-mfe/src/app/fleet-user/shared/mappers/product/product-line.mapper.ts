import { MapperInterface } from '@telenet/ng-lib-shared';
import { Injectable } from '@angular/core';
import { isEmpty } from 'lodash-es';
import { RawCustomerProductHoldingInterface } from '../../interfaces/raw/raw-customer-product-holding.interface';
import { CustomerProductHoldingMapper } from '../customer/customer-product-holding.mapper';
import { ProductLine } from '../../models/product-line.model';
import { RawProductLineInterfaceResponse } from '../../interfaces/raw/raw-product-line.interface';

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
