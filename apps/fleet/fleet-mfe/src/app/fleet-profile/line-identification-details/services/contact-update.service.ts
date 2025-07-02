import { Injectable } from '@angular/core';
import { ProductContactDescriptionInterface } from '../interfaces/product-contact-description.interface';
import { Observable } from 'rxjs';
import { OcapiCallConfig, OcapiService } from '@telenet/ng-lib-ocapi';
import { PostRequestSuccessMapper } from '../../../shared/common/mappers/post-request-success-mapper';
import { PostRequestSuccessInterface } from '../../../shared/common/interfaces/post-request-success.interface';
import { FleetProductsServiceConstants } from '../../../shared/common/constants/fleet-products-service.constants';

@Injectable({
  providedIn: 'root',
})
export class ContactUpdateService {
  constructor(
    private readonly postRequestSuccessMapper: PostRequestSuccessMapper,
    private readonly ocapiService: OcapiService
  ) {}

  updateContactReferenceInProduct(
    messageGroup: string,
    productIdentifier: string,
    postData: ProductContactDescriptionInterface
  ): Observable<PostRequestSuccessInterface> {
    const url = this.getProductServiceURI(
      FleetProductsServiceConstants.API_VERSION_V1,
      FleetProductsServiceConstants.EMPTY,
      FleetProductsServiceConstants.EMPTY,
      FleetProductsServiceConstants.CONTEXT_PRODUCTS,
      `/${productIdentifier}`
    );
    return this.ocapiService.doPut(new OcapiCallConfig(messageGroup, url, this.postRequestSuccessMapper, postData));
  }

  private getProductServiceURI(version: string, context: string, suffix: string, endpoint: string, parameters: string) {
    return FleetProductsServiceConstants.FLEET_PRODUCT_SERVICE_PREFIX.concat(version)
      .concat(context)
      .concat(suffix)
      .concat(endpoint)
      .concat(parameters);
  }
}
