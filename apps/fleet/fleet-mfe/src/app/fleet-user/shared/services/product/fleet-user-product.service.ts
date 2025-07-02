import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { catchError, Observable, of, take, throwError } from 'rxjs';
import isEmpty from 'lodash-es/isEmpty';
import { OcapiCallConfig, OcapiService } from '@telenet/ng-lib-ocapi';
import { ProductSubscriptionsInterface } from '../../interfaces/product/product-subscriptions.interface';
import { ProductPendingOperationsInterface } from '../../interfaces/product/product-pending-operations.interface';
import { AbstractProductService } from '../abstract/abstract-product-service';
import { CustomerProductHolding } from '../../models/customer-product-holding.model';
import { CustomerProductHoldingsMapper } from '../../mappers/customer/customer-product-holdings.mapper';
import { ProductSubscriptionsMapper } from '../../mappers/product/product-subscriptions.mapper';
import { ProductPendingOperationsCatalogMapper } from '../../mappers/product/product-pending-operations.mapper';
import { CacheService } from '@telenet/ng-lib-page';
import { HttpParamsUtil } from '../../utils/http-params.util';
import { FleetProductsServiceConstants } from '../../constants/product/fleet-products-service.constants';
import { CustomerProductHoldingMapper } from '../../mappers/customer/customer-product-holding.mapper';
import { Product } from '../../models/product.model';
import { SingleProductMapper } from '../../mappers/product/single-product.mapper';
import { ProductLine } from '../../../../shared/common/models/sim-card/line-overview/product-line.model';
import { ProductTypeInterface } from '../../../../shared/common/interfaces/products/product-type-interface';
import { AccountMasterAgreementInterface } from '../../../../shared/common/interfaces/account/account-bundle-agreement.interface';
import { FleetProfileMapper } from '../../../../shared/common/mappers/profile/fleet-profile-mapper';
import { FleetProfile } from '../../../../shared/common/interfaces/profile/fleet-profile.interface';
import { CreateFleetProfileConstants } from '../../../../shared/common/constants/profile/create-fleet-profile-constants';
import { HttpErrorResponse } from '@angular/common/http';
import { ProductLineMapper } from '../../mappers/product/product-line.mapper';
import { ProductTypeMapper } from '../../mappers/product/product-type.mapper';
import { AccountMasterAgreementMapper } from '../../mappers/account/account-master-agreement.mapper';

@Injectable({
  providedIn: 'root',
})
export class FleetUserProductService extends AbstractProductService {
  private allProductsCache: CustomerProductHolding[];
  private readonly queryParamList = ['producttypes', 'status'];
  private customerProductHoldingCache?: CustomerProductHolding;

  constructor(
    private readonly ocapiService: OcapiService,
    private readonly customerProductHoldingsMapper: CustomerProductHoldingsMapper,
    private readonly customerProductHoldingMapper: CustomerProductHoldingMapper,
    private readonly productSubscriptionsMapper: ProductSubscriptionsMapper,
    private readonly productPendingOpearionsCatalogMapper: ProductPendingOperationsCatalogMapper,
    private readonly cacheService: CacheService,
    private readonly singleProductMapper: SingleProductMapper,
    private readonly productLineMapper: ProductLineMapper,
    private readonly productTypeMapper: ProductTypeMapper,
    private readonly accountMasterAgreementMapper: AccountMasterAgreementMapper
  ) {
    super();
  }

  getAllProducts(
    messageGroup: string,
    status?: string,
    force?: boolean,
    productType?: string
  ): Observable<CustomerProductHolding[]> {
    if (this.allProductsCache && !force) {
      return of(this.allProductsCache);
    }
    let endpoint = FleetProductsServiceConstants.EMPTY;
    const payload = {
      status: status,
      producttypes: productType,
    };
    endpoint = this.getServiceURI(
      this.computeEndpointFromPayload(endpoint, this.queryParamList, payload),
      FleetProductsServiceConstants.CONTEXT_PRODUCTS,
      FleetProductsServiceConstants.API_VERSION_V1
    );
    return this.ocapiService
      .doGet(new OcapiCallConfig(messageGroup, endpoint, this.customerProductHoldingsMapper))
      .pipe(
        map((response: CustomerProductHolding[]) => {
          if (!isEmpty(response)) {
            this.allProductsCache = response;
          }
          return response;
        })
      );
  }

  getProductLinesByType(
    messageGroup: string,
    type?: string,
    customerCategory?: string,
    status?: string,
    flow?: string
  ): Observable<ProductSubscriptionsInterface[]> {
    let endpoint = HttpParamsUtil.createEndpointWithQueryParams('/product-subscriptions', {
      producttypes: type,
      customerCategory: customerCategory,
      status: status,
      flow: flow,
    });

    endpoint = this.getServiceURI(endpoint, '', FleetProductsServiceConstants.API_VERSION_V1);
    if (!this.cacheService.get(endpoint)) {
      this.cacheService.add(
        endpoint,
        this.ocapiService.doGet(new OcapiCallConfig(messageGroup, endpoint, this.productSubscriptionsMapper))
      );
    }
    return this.cacheService.get(endpoint);
  }

  getPendingOperations(messageGroup: string): Observable<ProductPendingOperationsInterface[]> {
    const endpoint = this.getServiceURI(
      FleetProductsServiceConstants.PENDING_OPERARIONS,
      FleetProductsServiceConstants.CONTEXT_PRODUCTS,
      FleetProductsServiceConstants.API_VERSION_V1
    );
    return this.ocapiService.doGet(
      new OcapiCallConfig(messageGroup, endpoint, this.productPendingOpearionsCatalogMapper)
    );
  }

  getProductByIdentifier(
    messageGroup: string,
    productIdentifier: string,
    force?: boolean,
    productType?: string
  ): Observable<CustomerProductHolding> {
    if (this.customerProductHoldingCache && !force) {
      return of(this.customerProductHoldingCache);
    }
    let endpoint = `/${productIdentifier}`;
    if (productType) {
      endpoint = `/${productIdentifier}?producttype=${productType}`;
    }
    endpoint = this.getServiceURI(
      endpoint,
      FleetProductsServiceConstants.CONTEXT_PRODUCTS,
      FleetProductsServiceConstants.API_VERSION_V1
    );
    return this.ocapiService.doGet(new OcapiCallConfig(messageGroup, endpoint, this.customerProductHoldingMapper)).pipe(
      take(1),
      map((response: CustomerProductHolding) => {
        if (!isEmpty(response)) {
          this.customerProductHoldingCache = response;
        }
        return response;
      }),
      catchError((error) => {
        console.error('An error occurred:', error);
        return throwError(() => error);
      })
    );
  }

  getUserProductByIdentifier(
    messageGroup: string,
    productIdentifier: string,
    force?: boolean,
    productType?: string
  ): Observable<Product> {
    let endpoint = `/${productIdentifier}`;
    if (productType) {
      endpoint = `/${productIdentifier}?producttype=${productType}`;
    }
    endpoint = this.getServiceURI(
      endpoint,
      FleetProductsServiceConstants.CONTEXT_PRODUCTS,
      FleetProductsServiceConstants.API_VERSION_V1
    );
    return this.ocapiService.doGet(new OcapiCallConfig(messageGroup, endpoint, this.singleProductMapper)).pipe(
      take(1),
      map((response: Product) => {
        return response;
      }),
      catchError((error) => {
        console.error('An error occurred:', error);
        return throwError(() => error);
      })
    );
  }

  getServiceURI(endpoint: string, context: string, version: string) {
    return FleetProductsServiceConstants.FLEET_PRODUCT_SERVICE_PREFIX.concat(version).concat(context).concat(endpoint);
  }

  getFilteredLines(messageGroup: string, requestBody: object): Observable<ProductLine> {
    const url = this.getServiceURI(
      '/search',
      FleetProductsServiceConstants.CONTEXT_PRODUCTS,
      FleetProductsServiceConstants.API_VERSION_V1
    );

    const ocapiConfig = new OcapiCallConfig(messageGroup, url, this.productLineMapper, requestBody);
    ocapiConfig.observeAsResponse = true;

    return this.ocapiService.doPost(ocapiConfig);
  }

  getProductType(messageGroup: string, phoneNumber: string): Observable<ProductTypeInterface> {
    const endPoint = `/${phoneNumber}${FleetProductsServiceConstants.PRODUCT_TYPE}`;
    const url = this.getServiceURI(
      endPoint,
      FleetProductsServiceConstants.CONTEXT_PRODUCTS,
      FleetProductsServiceConstants.API_VERSION_V1
    );
    return this.ocapiService.doGet(new OcapiCallConfig(messageGroup, url, this.productTypeMapper));
  }

  getGroupBundles(messageGroup: string, billingAccountNumber: string): Observable<AccountMasterAgreementInterface> {
    const url = this.getServiceURI(
      billingAccountNumber,
      FleetProductsServiceConstants.CONTEXT_GROUP_BUNDLES,
      FleetProductsServiceConstants.API_VERSION_V1
    );

    return this.ocapiService.doGet(new OcapiCallConfig(messageGroup, url, this.accountMasterAgreementMapper));
  }

  validateFleetProfileIdentifier(
    msisdn: string,
    messageGroup: string,
    mapper: FleetProfileMapper
  ): Observable<FleetProfile> {
    const endpoint: string = '/'.concat(
      msisdn,
      CreateFleetProfileConstants.ENDPOINT_FLEET_IDENTITY_STATUS_BY_IDENTIFIER
    );
    const url: string = this.getServiceURI(
      endpoint,
      FleetProductsServiceConstants.CONTEXT_PRODUCTS,
      FleetProductsServiceConstants.API_VERSION_V1
    );
    const config = new OcapiCallConfig(messageGroup, url, mapper);
    config.errorHandler = this.handleFleetIdentityErrorResponse.bind(this);

    return this.ocapiService.doGet(config);
  }

  private handleFleetIdentityErrorResponse(httpErrorResponse: HttpErrorResponse) {
    if (httpErrorResponse.error.code === CreateFleetProfileConstants.PROFILE_NOT_FOUND_ERROR_CODE) {
      return of({ status: httpErrorResponse.error.code, identityid: ' ' });
    }
    return throwError(() => httpErrorResponse);
  }
}
