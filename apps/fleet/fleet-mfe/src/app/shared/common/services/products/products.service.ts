import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { CustomerProductHolding } from '../../models/customer-product-holding.model';
import { OcapiCallConfig, OcapiService } from '@telenet/ng-lib-ocapi';
import { isEmpty } from 'lodash-es';
import { CustomerProductHoldingMapper } from '../../mappers/customer-product-holding/customer-product-holding.mapper';
import { catchError, map, take } from 'rxjs/operators';
import { FleetProductsServiceConstants } from '../../constants/fleet-products-service.constants';
import { ProductLineMapper } from '../../mappers/products/product-line.mapper';
import { ProductLine } from '../../models/sim-card/line-overview/product-line.model';
import { ProductConstants } from '../../constants/products/product.constant';
import { ProductTypeMapper } from '../../mappers/products/product-type.mapper';
import { ProductTypeInterface } from '../../interfaces/products/product-type-interface';
import { AccountMasterAgreementInterface } from '../../interfaces/account/account-bundle-agreement.interface';
import { AccountMasterAgreementMapper } from '../../mappers/account/account-master-agreement.mapper';
import { FleetProfileMapper } from '../../mappers/profile/fleet-profile-mapper';
import { CreateFleetProfileConstants } from '../../constants/profile/create-fleet-profile-constants';
import { HttpErrorResponse } from '@angular/common/http';
import { FleetProfile } from '../../interfaces/profile/fleet-profile.interface';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private customerProductHoldingCache?: CustomerProductHolding;

  constructor(
    private readonly ocapiService: OcapiService,
    private readonly customerProductHoldingMapper: CustomerProductHoldingMapper,
    private readonly productLineMapper: ProductLineMapper,
    private readonly productTypeMapper: ProductTypeMapper,
    private readonly accountMasterAgreementMapper: AccountMasterAgreementMapper
  ) {}

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

  getServiceURI(endpoint: string, context: string, version: string) {
    return FleetProductsServiceConstants.FLEET_PRODUCT_SERVICE_PREFIX.concat(version).concat(context).concat(endpoint);
  }

  getProductServiceURI(version: string, context: string, suffix: string, endpoint: string, parameters: string) {
    return FleetProductsServiceConstants.FLEET_PRODUCT_SERVICE_PREFIX.concat(version)
      .concat(context)
      .concat(suffix)
      .concat(endpoint)
      .concat(parameters);
  }

  getFilteredLines(messageGroup: string, requestBody: object): Observable<ProductLine> {
    const url = this.getServiceURI('/search', ProductConstants.CONTEXT_PRODUCTS, ProductConstants.API_VERSION_V1);

    const ocapiConfig = new OcapiCallConfig(messageGroup, url, this.productLineMapper, requestBody);
    ocapiConfig.observeAsResponse = true;

    return this.ocapiService.doPost(ocapiConfig);
  }

  getProductType(messageGroup: string, phoneNumber: string): Observable<ProductTypeInterface> {
    const endPoint = `/${phoneNumber}${ProductConstants.PRODUCT_TYPE}`;
    const url = this.getServiceURI(endPoint, ProductConstants.PRODUCTS, ProductConstants.API_VERSION_V1);
    return this.ocapiService.doGet(new OcapiCallConfig(messageGroup, url, this.productTypeMapper));
  }

  getGroupBundles(messageGroup: string, billingAccountNumber: string): Observable<AccountMasterAgreementInterface> {
    const url = this.getServiceURI(
      billingAccountNumber,
      ProductConstants.CONTEXT_GROUP_BUNDLES,
      ProductConstants.API_VERSION_V1
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
      ProductConstants.CONTEXT_PRODUCTS,
      ProductConstants.API_VERSION_V1
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
