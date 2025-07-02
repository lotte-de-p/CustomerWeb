import { firstValueFrom, Observable, throwError } from 'rxjs';
import {
  OmapiFamily,
  OmapiFamilyOptin,
  OmapiFamilyOption,
  OmapiFamilyTier,
  OmapiMobileData,
  OmapiProductInfo,
  RawMobileData,
  RawOmapiFamily,
  RawOmapiFamilyOptIn,
  RawOmapiFamilyOption,
  RawOmapiFamilyProduct,
  RawOmapiFamilyTier,
  RawOmapiProduct,
  RawOmapiProductTier,
} from '../interfaces';
import { catchError, map, mergeMap, take } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ErrorMessage, MessageService } from '@telenet/ng-lib-message';
import { UrlService } from '@telenet/ng-lib-page';
import { flatMap, isEmpty } from 'lodash-es';
import { ConfigConstants, ConfigService } from '@telenet/ng-lib-config';
import { OmapiProductService } from './omapi-product.service';
import { OmapiProduct } from '../models';
import { Injectable } from '@angular/core';
import { OmapiFamilyConstants, OmapiFamilyProductType } from '../constants';
import { OmapiCacheService } from './cache/omapi-cache.service';
import { OmapiUtils } from '../utils';
import {
  KlikMobileData,
  KlikOmapiFamily,
  KlikOmapiFamilyOptIn,
  KlikOmapiFamilyOption,
  KlikOmapiFamilyProduct,
  KlikOmapiFamilyTier,
  KlikOmapiProduct,
  KlikOmapiProductTier,
  KlikOptinPax,
  KlikOptinTier,
} from '../interfaces/klik-omapi-family.interface';

@Injectable({
  providedIn: 'root',
})
export class OmapiFamilyService {
  // FIXME this service has to be refactored - its full of promises being created out of an observable
  constructor(
    private readonly http: HttpClient,
    private readonly urlService: UrlService,
    private readonly messageService: MessageService,
    private readonly configService: ConfigService,
    private readonly cacheService: OmapiCacheService<RawOmapiFamily>,
    private readonly omapiProductService: OmapiProductService
  ) {}

  getFamily(messageGroup: string, family: string): Observable<OmapiFamily> {
    return this.getFamilyByEndpoint(messageGroup, this.getOmapiFamilyUrl(family));
  }

  getKlikFamily(messageGroup: string, family: string): Observable<KlikOmapiFamily> {
    return this.getKlikFamilyByEndpoint(messageGroup, this.getOmapiFamilyUrl(family));
  }

  private getOmapiFamilyUrl(family: string): string {
    return this.configService.getConfig(ConfigConstants.OMAPI_URL) + '/public/family/' + family;
  }

  private getFamilyByEndpoint(messageGroup: string, endpoint: string): Observable<OmapiFamily> {
    if (!this.cacheService.get(endpoint)) {
      this.cacheService.add(endpoint, this.http.get<RawOmapiFamily>(endpoint, this.getHttpConfig()));
    }
    const productInfoPromises: Promise<OmapiProduct>[] = [];

    return this.cacheService.get(endpoint).pipe(
      take(1),
      map((rawOmapiFamily: RawOmapiFamily) => {
        return this.parseFamily(messageGroup, rawOmapiFamily, productInfoPromises);
      }),
      mergeMap(async (omapiFamily: OmapiFamily) => {
        await Promise.all(productInfoPromises);
        return omapiFamily;
      }),
      catchError((error: HttpErrorResponse) => this.handleError(error, messageGroup))
    );
  }

  private parseFamily(
    messageGroup: string,
    rawOmapiFamily: RawOmapiFamily,
    productInfoPromises: Promise<OmapiProduct>[]
  ): OmapiFamily {
    const omapiFamily: OmapiFamily = { tiers: [] };

    this.parseTiers(messageGroup, rawOmapiFamily, omapiFamily, productInfoPromises);
    this.parseProductsByType(messageGroup, rawOmapiFamily, omapiFamily, productInfoPromises);
    this.parseOptins(messageGroup, rawOmapiFamily, omapiFamily, productInfoPromises);
    if (rawOmapiFamily.options) {
      this.parseOptions(messageGroup, rawOmapiFamily, omapiFamily, productInfoPromises);
    }

    return omapiFamily;
  }

  private parseTiers(
    messageGroup: string,
    rawOmapiFamily: RawOmapiFamily,
    omapiFamily: OmapiFamily,
    productInfoPromises: Promise<OmapiProduct>[]
  ) {
    rawOmapiFamily.tiers.forEach((tier: RawOmapiFamilyTier) => {
      omapiFamily.tiers.push(this.createTier(messageGroup, tier, productInfoPromises));
    });
  }

  private parseProductsByType(
    messageGroup: string,
    rawOmapiFamily: RawOmapiFamily,
    omapiFamily: OmapiFamily,
    productInfoPromises: Promise<OmapiProduct>[]
  ): void {
    OmapiFamilyConstants.FAMILY_PRODUCT_TYPES.forEach((productType: OmapiFamilyProductType) => {
      const product = rawOmapiFamily.products.find(
        (rawOmapiFamilyProduct: RawOmapiFamilyProduct) => rawOmapiFamilyProduct.type === productType
      );

      if (product) {
        this.addOmapiProductToTier(messageGroup, product, omapiFamily, productInfoPromises);
      }
    });
  }

  private parseOptins(
    messageGroup: string,
    rawOmapiFamily: RawOmapiFamily,
    omapiFamily: OmapiFamily,
    productInfoPromises: Promise<OmapiProduct | undefined>[]
  ): void {
    omapiFamily.tiers.forEach((omapiFamilyTier: OmapiFamilyTier) => {
      if (omapiFamilyTier) {
        omapiFamilyTier.optins = flatMap(
          rawOmapiFamily.optins.map((rawOptin) => {
            const key = rawOptin.key;
            const currentTier = rawOptin.tiers.find((tier) => tier.key === omapiFamilyTier.key);

            return (
              currentTier?.pax?.map((pax) => {
                const optin = {} as OmapiFamilyOptin;
                optin.key = key;
                optin.mobileId = pax.omapiId;
                optin.omapiId = pax.optinId;

                const promise = firstValueFrom(this.omapiProductService.getProductById(messageGroup, pax.optinId));

                productInfoPromises.push(promise);

                promise.then((omapiProduct?: OmapiProduct | undefined) => {
                  optin.productInfo = omapiProduct;
                });

                return optin;
              }) ?? []
            );
          })
        );
      }
    });
  }

  private parseOptions(
    messageGroup: string,
    rawOmapiFamily: RawOmapiFamily,
    omapiFamily: OmapiFamily,
    productInfoPromises: Promise<OmapiProduct | undefined>[]
  ): void {
    omapiFamily.tiers.forEach((omapiFamilyTier: OmapiFamilyTier) => {
      omapiFamilyTier.options = flatMap(
        rawOmapiFamily.options.map((rawOption) => {
          const option = {} as OmapiFamilyOption;
          option.key = rawOption.key;
          option.type = rawOption.type;
          option.omapiId = rawOption.omapiId;
          option.parents = rawOption.parents;

          const promise = firstValueFrom(this.omapiProductService.getProductById(messageGroup, rawOption.omapiId));

          productInfoPromises.push(promise);

          promise.then((omapiProduct?: OmapiProduct) => {
            option.productInfo = omapiProduct;
          });

          return option;
        })
      );
    });
  }

  private addOmapiProductToTier(
    messageGroup: string,
    rawOmapiFamilyProduct: RawOmapiFamilyProduct,
    omapiFamily: OmapiFamily,
    productInfoPromises: Promise<OmapiProduct>[]
  ): void {
    rawOmapiFamilyProduct.tiers.forEach((rawOmapiProductTier: RawOmapiProductTier) => {
      this.addOmapiFamilyObjectToTier(
        messageGroup,
        omapiFamily,
        rawOmapiFamilyProduct.type,
        rawOmapiProductTier,
        productInfoPromises
      );
    });
  }

  private addOmapiFamilyObjectToTier(
    messageGroup: string,
    family: OmapiFamily,
    productType: string,
    rawOmapiProductTier: RawOmapiProductTier,
    productInfoPromises: Promise<OmapiProduct>[]
  ): void {
    const familyTier: OmapiFamilyTier | undefined = family.tiers.find(
      (tier: OmapiFamilyTier) => tier.key === rawOmapiProductTier.key
    );
    const omapiProductInfos: OmapiProductInfo[] = this.createOmapiProductInfos(
      messageGroup,
      rawOmapiProductTier,
      productInfoPromises
    );
    if (familyTier) {
      if (!familyTier[productType as keyof OmapiFamilyTier]) {
        familyTier[productType] = [];
      }
      familyTier[productType] = familyTier[productType].concat(omapiProductInfos);
    }
  }

  private createOmapiProductInfos(
    messageGroup: string,
    rawOmapiProductTier: RawOmapiProductTier,
    productInfoPromises: Promise<OmapiProduct | undefined>[]
  ): OmapiProductInfo[] {
    const products: OmapiProductInfo[] = [];
    let mobileData: OmapiMobileData[] = [];

    rawOmapiProductTier.products.forEach((rawOmapiProduct: RawOmapiProduct) => {
      const omapiProductInfo: OmapiProductInfo = {
        omapiId: rawOmapiProduct.omapiId,
      };
      if (rawOmapiProduct.mobileData) {
        rawOmapiProduct.mobileData.forEach((rawMobileData: RawMobileData) => {
          const omapiMobileData = {} as OmapiMobileData;

          omapiMobileData.omapiId = rawMobileData.omapiId;
          omapiMobileData.key = rawMobileData.key;
          const omapiMobileDataPromises = firstValueFrom(
            this.omapiProductService.getProductById(messageGroup, omapiMobileData.omapiId)
          );

          productInfoPromises.push(omapiMobileDataPromises);
          omapiMobileDataPromises.then((omapiProduct?: OmapiProduct) => {
            omapiMobileData.productInfo = omapiProduct;
          });
          mobileData.push(omapiMobileData);
        });
      }
      if (isEmpty(OmapiUtils.getComboProducts(rawOmapiProduct.omapiId))) {
        const promise: Promise<OmapiProduct | undefined> = firstValueFrom(
          this.omapiProductService.getProductById(messageGroup, rawOmapiProduct.omapiId)
        );

        productInfoPromises.push(promise);
        promise.then((omapiProduct?: OmapiProduct) => {
          omapiProductInfo.productInfo = omapiProduct;
        });
      }
      omapiProductInfo.mobileData = mobileData;

      products.push(omapiProductInfo);
      mobileData = [];
    });

    return products;
  }

  private createTier(
    messageGroup: string,
    rawOmapiTier: RawOmapiFamilyTier,
    productInfoPromises: Promise<OmapiProduct | undefined>[]
  ): OmapiFamilyTier {
    const tier: OmapiFamilyTier = {
      omapiId: rawOmapiTier.omapiId,
      key: rawOmapiTier.key,
    };
    const promise = firstValueFrom(this.omapiProductService.getProductById(messageGroup, rawOmapiTier.omapiId));

    productInfoPromises.push(promise);

    promise.then((omapiProduct?: OmapiProduct) => {
      tier.productInfo = omapiProduct;
    });

    return tier;
  }

  private getHttpConfig(): { headers: Record<string, string>; timeout: number; cache: boolean } {
    return {
      headers: {
        'x-alt-referer': this.urlService.getCurrentUrl(),
        'X-Requested-With': 'XMLHttpRequest',
      },
      timeout: 10000,
      cache: true,
    };
  }

  private handleError(error: HttpErrorResponse, messageGroup: string) {
    if (error.status !== 410) {
      this.messageService.addMessage(new ErrorMessage(messageGroup, 'omapi-' + error.status));
    }

    return throwError(() => 'An error occurred while trying to fetch ' + messageGroup);
  }

  private getKlikFamilyByEndpoint(messageGroup: string, endpoint: string): Observable<KlikOmapiFamily> {
    if (!this.cacheService.get(endpoint)) {
      this.cacheService.add(endpoint, this.http.get<RawOmapiFamily>(endpoint, this.getHttpConfig()));
    }
    const productInfoPromises: Promise<OmapiProduct>[] = [];
    return this.cacheService.get(endpoint).pipe(
      take(1),
      catchError((error: HttpErrorResponse) => this.handleError(error, messageGroup)),
      map((rawOmapiFamily: RawOmapiFamily) => {
        return this.createFamily(messageGroup, rawOmapiFamily, productInfoPromises);
      }),
      mergeMap(async (omapiFamily: KlikOmapiFamily) => {
        await Promise.all(productInfoPromises);
        return omapiFamily;
      })
    );
  }

  private createFamily(
    messageGroup: string,
    rawOmapiFamily: RawOmapiFamily,
    productInfoPromises: Promise<OmapiProduct>[]
  ): KlikOmapiFamily {
    const omapiFamily = {} as KlikOmapiFamily;
    omapiFamily.tiers = this.createKlikTier(rawOmapiFamily.tiers, messageGroup, productInfoPromises);
    omapiFamily.products = this.createKlikProduct(rawOmapiFamily.products, messageGroup, productInfoPromises);
    omapiFamily.optins = this.createKlikOptins(rawOmapiFamily.optins, messageGroup, productInfoPromises);
    omapiFamily.options = this.createKlikOptions(rawOmapiFamily.options, messageGroup, productInfoPromises);
    return omapiFamily;
  }

  private createKlikTier(
    rawOmapiFamilyTier: RawOmapiFamilyTier[],
    messageGroup: string,
    productInfoPromises: Promise<OmapiProduct>[]
  ): KlikOmapiFamilyTier[] {
    return rawOmapiFamilyTier.map((rawFamilyTier) => {
      const tier = {} as KlikOmapiFamilyTier;
      tier.key = rawFamilyTier.key;
      tier.omapiId = rawFamilyTier.omapiId;
      const promise = firstValueFrom(
        this.omapiProductService.getProductById(messageGroup, rawFamilyTier.omapiId)
      ) as Promise<OmapiProduct>;
      productInfoPromises.push(promise);
      promise.then((omapiProduct: OmapiProduct) => {
        tier.productInfo = omapiProduct;
      });
      return tier;
    });
  }

  private createKlikProduct(
    rawOmapiFamilyProduct: RawOmapiFamilyProduct[],
    messageGroup: string,
    productInfoPromises: Promise<OmapiProduct>[]
  ): KlikOmapiFamilyProduct[] {
    return rawOmapiFamilyProduct.map((rawFamilyProduct) => {
      const product = {} as KlikOmapiFamilyProduct;
      product.type = rawFamilyProduct.type;
      product.tiers = this.getProductTiers(rawFamilyProduct, messageGroup, productInfoPromises);
      return product;
    });
  }

  private createKlikOptins(
    rawOmapiFamilyOptIn: RawOmapiFamilyOptIn[],
    messageGroup: string,
    productInfoPromises: Promise<OmapiProduct>[]
  ): KlikOmapiFamilyOptIn[] {
    return rawOmapiFamilyOptIn.map((rawOptins) => {
      const optin = {} as KlikOmapiFamilyOptIn;
      optin.key = rawOptins.key;
      optin.tiers = [];
      optin.tiers = rawOptins.tiers?.map((rawTier) => {
        const optinTier = {} as KlikOptinTier;
        optinTier.key = rawTier.key;
        optinTier.pax = [];
        optinTier.pax = rawTier.pax?.map((rawPax) => {
          const optinPax = {} as KlikOptinPax;
          optinPax.omapiId = rawPax.omapiId;
          optinPax.optinId = rawPax.optinId;
          const promise = firstValueFrom(
            this.omapiProductService.getProductById(messageGroup, rawPax.optinId)
          ) as Promise<OmapiProduct>;
          productInfoPromises.push(promise);
          promise.then((omapiProduct: OmapiProduct) => {
            optinPax.productInfo = omapiProduct;
          });
          return optinPax;
        });
        return optinTier;
      });
      return optin;
    });
  }

  private createKlikOptions(
    rawOmapiFamilyOptIn: RawOmapiFamilyOption[],
    messageGroup: string,
    productInfoPromises: Promise<OmapiProduct>[]
  ): KlikOmapiFamilyOption[] {
    return rawOmapiFamilyOptIn.map((rawOption) => {
      const option = {} as KlikOmapiFamilyOption;
      option.key = rawOption.key;
      option.omapiId = rawOption.omapiId;
      option.parents = rawOption.parents;
      option.type = rawOption.type;
      const promise = firstValueFrom(
        this.omapiProductService.getProductById(messageGroup, rawOption.omapiId)
      ) as Promise<OmapiProduct>;
      productInfoPromises.push(promise);
      promise.then((omapiProduct: OmapiProduct) => {
        option.productInfo = omapiProduct;
      });
      return option;
    });
  }

  private getProductTiers(
    rawFamilyProduct: RawOmapiFamilyProduct,
    messageGroup: string,
    productInfoPromises: Promise<OmapiProduct>[]
  ) {
    return rawFamilyProduct.tiers?.map((rawTier) => {
      const tier = {} as KlikOmapiProductTier;
      tier.key = rawTier.key;
      tier.products = this.getProductDetails(rawTier, messageGroup, productInfoPromises);
      return tier;
    });
  }

  private getProductDetails(
    rawTier: RawOmapiProductTier,
    messageGroup: string,
    productInfoPromises: Promise<OmapiProduct>[]
  ): KlikOmapiProduct[] {
    return rawTier.products?.map((rawTierProduct) => {
      const tierProduct = {} as KlikOmapiProduct;
      tierProduct.key = rawTierProduct.key;
      tierProduct.omapiId = rawTierProduct.omapiId;
      const promise = firstValueFrom(
        this.omapiProductService.getProductById(messageGroup, rawTierProduct.omapiId)
      ) as Promise<OmapiProduct>;
      productInfoPromises.push(promise);
      promise.then((omapiProduct: OmapiProduct) => {
        tierProduct.productInfo = omapiProduct;
      });
      tierProduct.mobileData = this.getMobileData(rawTierProduct, messageGroup, productInfoPromises);
      return tierProduct;
    });
  }

  private getMobileData(
    rawTierProduct: RawOmapiProduct,
    messageGroup: string,
    productInfoPromises: Promise<OmapiProduct>[]
  ): KlikMobileData[] | undefined {
    return rawTierProduct.mobileData?.map((rawTierProductMobile) => {
      const mobileData = {} as KlikMobileData;
      mobileData.key = rawTierProductMobile.key;
      mobileData.omapiId = rawTierProductMobile.omapiId;
      const mobileDataPromise = firstValueFrom(
        this.omapiProductService.getProductById(messageGroup, rawTierProductMobile.omapiId)
      ) as Promise<OmapiProduct>;
      productInfoPromises.push(mobileDataPromise);
      mobileDataPromise.then((omapiProduct: OmapiProduct) => {
        mobileData.productInfo = omapiProduct;
      });
      return mobileData;
    });
  }
}
