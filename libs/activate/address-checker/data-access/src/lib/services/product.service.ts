import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductSubscriptionsInterface } from '../interfaces/product-subscriptions.interface';
import { FiberAddressCheckerEnum } from '../models/fiber-address-checker.enum';
import { HttpParams } from '@angular/common/http';
import { ProductSubscriptionsMapper } from '../mappers/product-subscriptions.mapper';
import { OcapiCallConfig, OcapiService, CacheService } from '@telenet/ng-lib-ocapi';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(
    private readonly ocapiService: OcapiService,
    private readonly cacheService: CacheService,
    private readonly productSubscriptionsMapper: ProductSubscriptionsMapper
  ) {}

  getProductLinesByType(
    messageGroup: string,
    type: string,
    status: string
  ): Observable<ProductSubscriptionsInterface[]> {
    const endpointSuffix: string = this.createEndpointWithQueryParams('/product-subscriptions', {
      producttypes: type,
      status: status,
    });
    const endpoint = FiberAddressCheckerEnum.PRODUCT_SERVICE_PREFIX.concat(FiberAddressCheckerEnum.VERSION_1).concat(
      endpointSuffix
    );
    if (!this.cacheService.get(endpoint)) {
      this.cacheService.add(
        endpoint,
        this.ocapiService.doGet(new OcapiCallConfig(messageGroup, endpoint, this.productSubscriptionsMapper))
      );
    }
    // @ts-ignore
    return this.cacheService.get(endpoint);
  }

  private createEndpointWithQueryParams(endpoint: string, params: Record<string, string>): string {
    const httpParams: HttpParams = this.ignoreUndefinedParams(params);

    if (httpParams.keys().length > 0) {
      endpoint = `${endpoint}?`;
    }

    return `${endpoint}${httpParams.toString()}`;
  }

  private ignoreUndefinedParams(params: Record<string, string>): HttpParams {
    let httpParams: HttpParams = new HttpParams();
    Object.keys(params).forEach((element: string) => {
      if (params[element]) {
        httpParams = httpParams.set(element, params[element]);
      }
    });

    return httpParams;
  }
}
