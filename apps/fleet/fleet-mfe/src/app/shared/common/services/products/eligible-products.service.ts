import { Observable } from 'rxjs';
import { EligibleProductInterface } from '../../interfaces/products/eligible-product.interface';
import { ProductConstants } from '../../constants/products/product.constant';
import { OcapiCallConfig, OcapiService } from '@telenet/ng-lib-ocapi';
import { map } from 'rxjs/operators';
import { EligibleProductsMapper } from '../../mappers/products/eligible-products.mapper';
import { ProductsService } from './products.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EligibleProductsService {
  constructor(
    private readonly ocapiService: OcapiService,
    private readonly eligibleProductsMapper: EligibleProductsMapper,
    private readonly productsService: ProductsService
  ) {}

  getEligibleProducts(messageGroup: string): Observable<EligibleProductInterface[]> {
    let endpoint = '/eligibleproducts';
    endpoint = this.productsService.getServiceURI(
      endpoint,
      ProductConstants.CONTEXT_PRODUCTS,
      ProductConstants.API_VERSION_V1
    );
    return this.callEligibleProducts(messageGroup, endpoint);
  }

  getEligibleProductsByIdentifier(
    messageGroup: string,
    identifier: string,
    productType?: string
  ): Observable<EligibleProductInterface[]> {
    let endpoint = `/eligibleproducts?identifier=${identifier}`;
    if (productType) {
      endpoint = `${endpoint}&producttype=${productType}`;
    }

    endpoint = this.productsService.getServiceURI(
      endpoint,
      ProductConstants.CONTEXT_PRODUCTS,
      ProductConstants.API_VERSION_V1
    );
    return this.callEligibleProducts(messageGroup, endpoint);
  }

  private callEligibleProducts(messageGroup: string, endpoint: string): Observable<EligibleProductInterface[]> {
    const ocapiCallConfig = new OcapiCallConfig(messageGroup, endpoint, this.eligibleProductsMapper);
    ocapiCallConfig.silentlyHandleError = true;
    return this.ocapiService.doGet(ocapiCallConfig).pipe(
      map((response: EligibleProductInterface[]) => {
        return response;
      })
    );
  }
}
