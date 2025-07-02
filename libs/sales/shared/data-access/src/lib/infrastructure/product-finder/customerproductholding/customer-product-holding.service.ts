import { Injectable } from '@angular/core';
import { OcapiCallConfig, OcapiService } from '@telenet/ng-lib-ocapi';
import { CustomerProductHoldingMapper } from './customer-product-holding.mapper';
import { Observable } from 'rxjs';
import { CustomerProductHolding } from '../../../entities/product-finder/customerproductholding/customer-product-holding.interface';

@Injectable({
  providedIn: 'root',
})
export class CustomerProductHoldingService {
  constructor(
    private readonly customerProductHoldingMapper: CustomerProductHoldingMapper,
    private readonly ocapiService: OcapiService
  ) {}

  getCustomerProductHolding(): Observable<CustomerProductHolding[]> {
    return this.ocapiService.doGet(
      new OcapiCallConfig(
        'product-finder',
        '/public/?p=customerproductholding',
        this.customerProductHoldingMapper,
        undefined,
        undefined,
        undefined,
        undefined,
        true
      )
    );
  }
}
