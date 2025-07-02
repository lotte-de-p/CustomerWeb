import { Injectable } from '@angular/core';
import { OcapiService } from '@telenet/ng-lib-ocapi';
import { ProductHoldingMapper } from '../mappers/product-holding.mapper';
import { ProductConstants } from '../constants/product.constants';
import { BaseProductHoldingService } from './base-product-holding.service';

@Injectable({
  providedIn: 'root',
})
export class ProductHoldingAdaptorService extends BaseProductHoldingService {
  constructor(
    public ocapiService: OcapiService,
    public productHoldingMapper: ProductHoldingMapper
  ) {
    super(ocapiService, productHoldingMapper);
    this.PROPERTY_URL = '-adaptor/public/?p=' + ProductConstants.CUSTOMER_PRODUCT_HOLDING;
  }
}
