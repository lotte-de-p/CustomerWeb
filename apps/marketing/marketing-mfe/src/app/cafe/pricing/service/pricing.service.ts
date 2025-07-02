import { Injectable } from '@angular/core';
import { PricingData } from '../model/pricing-data.model';
import { Observable } from 'rxjs';
import { PricingConfig } from '../model/pricing-config.model';
import { CafeSofySalesOfferService } from '../../../http/cafe/sales-offer/service/cafe-sofy-sales-offer.service';
import { PricingUtil } from '../util/pricing.util';
import { map, mergeMap } from 'rxjs/operators';
import { SalesOffer, SofyRequestBasket } from '@telenet/ng-lib-sofy';
import { PricingSofyRequestBasketFactory } from './pricing-sofy-request-basket.factory';

@Injectable({
  providedIn: 'root',
})
export class PricingService {
  constructor(
    private readonly cafeSofySalesOfferService: CafeSofySalesOfferService,
    private readonly pricingSofyRequestBasketFactory: PricingSofyRequestBasketFactory
  ) {}

  public getPricing(messageGroup: string, pricingConfig: PricingConfig): Observable<PricingData> {
    return this.pricingSofyRequestBasketFactory.create(pricingConfig).pipe(
      mergeMap((basket: SofyRequestBasket) =>
        this.cafeSofySalesOfferService.getSalesOfferWithDefaultInstallAddress(messageGroup, basket)
      ),
      map((salesOffer: SalesOffer) => PricingUtil.getPricingData(salesOffer, pricingConfig.isBusiness))
    );
  }
}
