import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { SofyRequestAddress, SofyRequestBasket, SofyRequestProduct } from '@telenet/ng-lib-sofy';
import { mergeMap } from 'rxjs/operators';
import { map, isEmpty } from 'lodash-es';
import { NBA, NBAList, PegaStoreService } from '@telenet/ng-lib-personalisation';
import { PricingConfig } from '../model/pricing-config.model';
import { PricingConfigConstants } from '../model/pricing-config.constants';

@Injectable({ providedIn: 'root' })
export class PricingSofyRequestBasketFactory {
  constructor(private readonly pegaStoreService: PegaStoreService) {}

  public create(pricingConfig: PricingConfig): Observable<SofyRequestBasket> {
    if (pricingConfig.enableNbo) {
      return this.buildNboSofyRequestBasket(pricingConfig);
    }
    return this.buildSofyRequestBasket(pricingConfig);
  }

  private buildNboSofyRequestBasket(pricingConfig: PricingConfig): Observable<SofyRequestBasket> {
    return this.pegaStoreService.getStoreData().pipe(
      mergeMap((nbaList: NBAList) => {
        const nba = nbaList.getNBA();
        const config = nba && !nba.isSalesDataEmpty() ? this.mapNbaToPricingConfig(nba, pricingConfig) : pricingConfig;
        return this.buildSofyRequestBasket(config);
      })
    );
  }

  private buildSofyRequestBasket(pricingConfig: PricingConfig): Observable<SofyRequestBasket> {
    return of({
      products: this.mapSofyRequestProducts(pricingConfig),
      campaignCode: !isEmpty(pricingConfig.campaignId) ? pricingConfig.campaignId : '',
      standaloneOptions: this.mapSofyRequestStandaloneOptions(pricingConfig),
    } as SofyRequestBasket);
  }

  private mapSofyRequestProducts(pricingConfig: PricingConfig): SofyRequestProduct[] {
    return map(pricingConfig.productIds, (productId) => {
      const sofyRequestProduct: SofyRequestProduct = {
        omapiid: productId,
        installationaddress: { postalcode: pricingConfig.postalCode } as SofyRequestAddress,
        options: pricingConfig.optionIds,
        optinproducts: pricingConfig.optinIds,
      };
      if (pricingConfig.amountOfLimitedSims !== undefined && pricingConfig.amountOfLimitedSims !== null) {
        sofyRequestProduct.amountoflimitedsims = pricingConfig.amountOfLimitedSims;
      }
      return sofyRequestProduct;
    });
  }

  private mapSofyRequestStandaloneOptions(pricingConfig: PricingConfig): SofyRequestProduct[] {
    return map(pricingConfig.optionIds, (optionId) => {
      return {
        omapiid: optionId,
        installationaddress: { postalcode: pricingConfig.postalCode } as SofyRequestAddress,
        optinproducts: pricingConfig.optinIds,
      } as SofyRequestProduct;
    });
  }

  private mapNbaToPricingConfig(nba: NBA, pricingConfig: PricingConfig): PricingConfig {
    const rawSalesData = nba.getRawSalesData();
    const nbaPricingConfig: PricingConfig = {
      ...pricingConfig,
      productIds: rawSalesData.products,
      optionIds: rawSalesData.options,
      optinIds: rawSalesData.optins,
      campaignId: nba.campaignId,
    } as PricingConfig;

    if (!nba.isSalesDataEmpty()) {
      const amountOfLimitedSims = nba.sdata.getOffers()[0].amountOfLimitedSims || PricingConfigConstants.noLimitedSims;

      nbaPricingConfig.amountOfLimitedSims =
        amountOfLimitedSims > PricingConfigConstants.maxAmountOfLimitedSims ||
        PricingConfigConstants.minAmountOfLimitedSims > amountOfLimitedSims
          ? PricingConfigConstants.noLimitedSims
          : amountOfLimitedSims;
    }

    return nbaPricingConfig;
  }
}
