import { Injectable } from '@angular/core';
import { OcapiService } from '@telenet/ng-lib-ocapi';
import { BaseProductHoldingService } from '../services/base-product-holding.service';
import { ProductHoldingMapper } from '../mappers/product-holding.mapper';

@Injectable({
  providedIn: 'root',
})
export class ProductHoldingService extends BaseProductHoldingService {
  constructor(
    public ocapiService: OcapiService,
    public productHoldingMapper: ProductHoldingMapper
  ) {
    super(ocapiService, productHoldingMapper);
  }
}
