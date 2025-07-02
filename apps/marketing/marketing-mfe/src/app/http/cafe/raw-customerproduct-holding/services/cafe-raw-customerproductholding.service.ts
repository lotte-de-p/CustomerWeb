import { Injectable } from '@angular/core';
import { OcapiCallConfig, OcapiService } from '@telenet/ng-lib-ocapi';
import { AbstractCafeService } from '../../abstract-cafe.service';
import { Observable } from 'rxjs';
import { CafeRawCustomerproductholdingMapper } from '../mappers/cafe-raw-customerproductholding.mapper';
import { CafeRawCustomerproductholdingModel } from '../models/cafe-raw-customerproductholding.model';
import { ProductConstants } from '../../product-holding/constants/product.constants';

@Injectable({
  providedIn: 'root',
})
export class CafeRawCustomerproductholdingService extends AbstractCafeService {
  constructor(
    private readonly ocapiService: OcapiService,
    private readonly rawCustomerproductholdingMapper: CafeRawCustomerproductholdingMapper
  ) {
    super();
    this.property = ProductConstants.CUSTOMER_PRODUCT_HOLDING;
  }

  public getRawCustomerProductHolding(messageGroup: string): Observable<CafeRawCustomerproductholdingModel[]> {
    return this.ocapiService.doGet(this.getOcapiCallConfig(messageGroup));
  }

  public getRawCustomerProductHoldingAdaptor(messageGroup: string): Observable<CafeRawCustomerproductholdingModel[]> {
    return this.ocapiService.doGet(this.getOcapiCallConfigAdaptor(messageGroup));
  }
  private getOcapiCallConfig(messageGroup: string): OcapiCallConfig<unknown, CafeRawCustomerproductholdingModel[]> {
    return new OcapiCallConfig(messageGroup, super.getPropertyEndPoint(), this.rawCustomerproductholdingMapper);
  }

  private getOcapiCallConfigAdaptor(
    messageGroup: string
  ): OcapiCallConfig<unknown, CafeRawCustomerproductholdingModel[]> {
    return new OcapiCallConfig(messageGroup, super.getPropertyAdaptorEndPoint(), this.rawCustomerproductholdingMapper);
  }
}
