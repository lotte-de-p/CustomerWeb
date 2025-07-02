import { Injectable } from '@angular/core';
import { OcapiCallConfig, OcapiService } from '@telenet/ng-lib-ocapi';
import { Observable } from 'rxjs';
import { ProductMsaMapper } from '../mappers/product-msa.mapper';
import { ProductMsaInterface } from '../interfaces/product-msa.interface';
import { FleetCustomerConstants } from '../interfaces/fleet-customer.constant';

@Injectable({
  providedIn: 'root',
})
export class CustomerMsaService {
  constructor(
    private readonly ocapiService: OcapiService,
    private readonly productMsaMapper: ProductMsaMapper
  ) {}

  public getCustomerMsa(messageGroupName: string): Observable<ProductMsaInterface[]> {
    const endpoint = this.getServiceURI(FleetCustomerConstants.EMPTY, FleetCustomerConstants.ENDPOINT_MSA);

    return this.ocapiService.doGet(new OcapiCallConfig(messageGroupName, endpoint, this.productMsaMapper));
  }

  private getServiceURI(context: string, endpoint: string): string {
    return FleetCustomerConstants.FLEET_CUSTOMER_SERVICE_PREFIX.concat(FleetCustomerConstants.API_VERSION_V1)
      .concat(context)
      .concat(endpoint);
  }
}
