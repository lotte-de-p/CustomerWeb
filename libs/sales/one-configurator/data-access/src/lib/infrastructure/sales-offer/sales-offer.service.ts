import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { concatMap, Observable, of } from 'rxjs';
import {
  SalesOfferProductOptinResponse,
  SalesOfferProductOptionResponse,
  SalesOfferProductResponse,
  SalesOfferProductStreamingServiceResponse,
  SalesOfferResponse,
} from './sales-offer-response.interface';
import { ConfigConstants, ConfigService } from '@telenet/ng-lib-config';
import {
  CustomerProductHoldingAddressRequest,
  CustomerProductHoldingOptionRequest,
  CustomerProductHoldingProductRequest,
  RawAddressRequest,
  RawCustomerProductHoldingRequest,
  RawProductRequest,
  RawSalesOfferRequest,
  RawStreamingServiceRequest,
} from './sales-offer-request.interface';
import { CacheService, UrlService } from '@telenet/ng-lib-page';
import {
  SalesOffer,
  SalesOfferProduct,
  SalesOfferProductOptin,
  SalesOfferProductOption,
  SalesOfferProductStreamingService,
} from '../../entities/sales-offer/sales-offer';
import {
  AddressRequest,
  ProductRequest,
  SalesOfferRequest,
  StreamingServiceRequest,
} from '../../entities/sales-offer/sales-offer-request';
import { map } from 'rxjs/operators';
import {
  CustomerProductHolding,
  CustomerProductHoldingAddress,
  CustomerProductHoldingOption,
  CustomerProductHoldingProduct,
  Promotion,
  PromotionRequest,
} from '@sales/shared/data-access';

@Injectable({
  providedIn: 'root',
})
export class SalesOfferService {
  constructor(
    private readonly http: HttpClient,
    private readonly configService: ConfigService,
    private readonly urlService: UrlService,
    private readonly cacheService: CacheService
  ) {}

  public fetchSalesOffer(salesOfferRequest: SalesOfferRequest): Observable<SalesOffer> {
    return of(salesOfferRequest).pipe(
      map((salesOfferRequest: SalesOfferRequest) => this.mapSalesOfferRequest(salesOfferRequest)),
      concatMap((rawSalesOfferRequest: RawSalesOfferRequest) => this.fetchSalesOfferInternal(rawSalesOfferRequest)),
      map((salesOfferResponse: SalesOfferResponse) => this.mapSalesOfferResponse(salesOfferResponse))
    );
  }

  private mapSalesOfferRequest(salesOfferRequest: SalesOfferRequest): RawSalesOfferRequest {
    return {
      products: salesOfferRequest.products.map((productRequest: ProductRequest) =>
        this.mapProductRequest(productRequest)
      ),
      promotions: salesOfferRequest.promotions.map((promotion: Promotion) => this.mapPromotion(promotion)),
      customerproductholding: salesOfferRequest.customerProductHolding.map(
        (customerProductHolding: CustomerProductHolding) => this.mapCustomerProductHolding(customerProductHolding)
      ),
      campaigncode: salesOfferRequest.campaignCode,
      voucherpromo: '',
    };
  }

  private mapProductRequest(productRequest: ProductRequest): RawProductRequest {
    return {
      omapiid: productRequest.omapiId,
      options: productRequest.options,
      optinproducts: productRequest.optins,
      streamingservices: productRequest.streamingServices.map((streamingServiceRequest: StreamingServiceRequest) =>
        this.mapStreamingServiceRequest(streamingServiceRequest)
      ),
      ...(productRequest.amountOfLimitedSims && {
        amountoflimitedsims: productRequest.amountOfLimitedSims,
      }),
      ...(productRequest.installationAddress && {
        installationaddress: this.mapAddressRequest(productRequest.installationAddress),
      }),
    };
  }

  private mapStreamingServiceRequest(streamingServiceRequest: StreamingServiceRequest): RawStreamingServiceRequest {
    return {
      omapiid: streamingServiceRequest.omapiId,
      options: streamingServiceRequest.options,
    };
  }

  private mapAddressRequest(addressRequest: AddressRequest): RawAddressRequest {
    return {
      addressid: addressRequest.addressId,
      municipality: addressRequest.municipality,
      postalcode: addressRequest.postalCode,
      street: addressRequest.street,
      housenr: addressRequest.houseNr,
      country: addressRequest.country,
    };
  }

  private mapPromotion(promotion: Promotion): PromotionRequest {
    return {
      description: promotion.description,
    };
  }

  private mapCustomerProductHolding(customerProductHolding: CustomerProductHolding): RawCustomerProductHoldingRequest {
    return {
      identifier: customerProductHolding.identifier,
      specurl: customerProductHolding.specUrl,
      products: customerProductHolding.products.map((product: CustomerProductHoldingProduct) =>
        this.mapCustomerProductHoldingProduct(product)
      ),
      options: customerProductHolding.options.map((customerProductHoldingOption: CustomerProductHoldingOption) =>
        this.mapCustomerProductHoldingOption(customerProductHoldingOption)
      ),
      address: this.mapCustomerProductHoldingAddress(customerProductHolding.address),
    };
  }

  private mapCustomerProductHoldingProduct(
    customerProductHoldingProduct: CustomerProductHoldingProduct
  ): CustomerProductHoldingProductRequest {
    return {
      identifier: customerProductHoldingProduct.identifier,
      specurl: customerProductHoldingProduct.specUrl,
      products: customerProductHoldingProduct.products.map((product: CustomerProductHoldingProduct) =>
        this.mapCustomerProductHoldingProduct(product)
      ),
      options: customerProductHoldingProduct.options.map((option: CustomerProductHoldingOption) =>
        this.mapCustomerProductHoldingOption(option)
      ),
      ...(customerProductHoldingProduct.address && {
        address: this.mapCustomerProductHoldingAddress(customerProductHoldingProduct.address),
      }),
    };
  }

  private mapCustomerProductHoldingOption(
    customerProductHoldingOption: CustomerProductHoldingOption
  ): CustomerProductHoldingOptionRequest {
    return {
      specurl: customerProductHoldingOption.specUrl,
    };
  }

  private mapCustomerProductHoldingAddress(
    customerProductHoldingAddress: CustomerProductHoldingAddress
  ): CustomerProductHoldingAddressRequest {
    return {
      addressid: customerProductHoldingAddress.addressId,
      municipality: customerProductHoldingAddress.municipality,
      postalcode: customerProductHoldingAddress.postalCode,
      street: customerProductHoldingAddress.street,
      housenr: customerProductHoldingAddress.houseNr,
      country: customerProductHoldingAddress.country,
    };
  }

  private mapSalesOfferResponse(salesOfferResponse: SalesOfferResponse): SalesOffer {
    return {
      products: salesOfferResponse.products.map((salesOfferProductResponse: SalesOfferProductResponse) =>
        this.mapSalesOfferProductResponse(salesOfferProductResponse)
      ),
    };
  }

  private mapSalesOfferProductResponse(salesOfferProductResponse: SalesOfferProductResponse): SalesOfferProduct {
    return {
      omapiId: salesOfferProductResponse.omapiid,
      price: salesOfferProductResponse.price,
      options: salesOfferProductResponse.options
        .filter((option: SalesOfferProductOptionResponse) => option.selected)
        .map((option: SalesOfferProductOptionResponse) => this.mapSalesOfferProductOptionResponse(option)),
      streamingServices: salesOfferProductResponse.streamingservices
        .filter((streamingService: SalesOfferProductStreamingServiceResponse) => streamingService.selected)
        .map((streamingService: SalesOfferProductStreamingServiceResponse) =>
          this.mapSalesOfferProductStreamingServiceResponse(streamingService)
        ),
      optins: salesOfferProductResponse.optinproducts
        .filter((optin: SalesOfferProductOptinResponse) => optin.selected)
        .map((optin: SalesOfferProductOptinResponse) => this.mapSalesOfferProductOptinResponse(optin)),
    };
  }

  private mapSalesOfferProductOptionResponse(
    salesOfferProductOptionResponse: SalesOfferProductOptionResponse
  ): SalesOfferProductOption {
    return {
      omapiId: salesOfferProductOptionResponse.omapiid,
      price: salesOfferProductOptionResponse.price,
    };
  }

  private mapSalesOfferProductStreamingServiceResponse(
    streamingService: SalesOfferProductStreamingServiceResponse
  ): SalesOfferProductStreamingService {
    return {
      omapiId: streamingService.omapiid,
      price: streamingService.price,
      options: streamingService.options
        .filter((option: SalesOfferProductOptionResponse) => option.selected)
        .map((option: SalesOfferProductOptionResponse) => this.mapSalesOfferProductOptionResponse(option)),
    };
  }

  private mapSalesOfferProductOptinResponse(optin: SalesOfferProductOptinResponse): SalesOfferProductOptin {
    return {
      omapiId: optin.omapiid,
      price: optin.price,
    };
  }

  private fetchSalesOfferInternal(rawSalesOfferRequest: RawSalesOfferRequest): Observable<SalesOfferResponse> {
    const cacheKey = JSON.stringify(rawSalesOfferRequest);

    if (!this.cacheService.get(cacheKey)) {
      const response$: Observable<SalesOfferResponse> = this.http.post<SalesOfferResponse>(
        this.configService.getConfig(ConfigConstants.SOFY_URL) + '/sofy/public/',
        rawSalesOfferRequest,
        {
          headers: {
            'x-alt-referer': this.urlService.getCurrentUrl(),
            'X-Requested-With': 'XMLHttpRequest',
          },
        }
      );

      this.cacheService.add(cacheKey, response$);
    }

    return this.cacheService.get(cacheKey);
  }
}
