import { Component, Input, OnInit } from '@angular/core';
import { AbstractBaseComponent } from '@telenet/ng-lib-page';

import { CafeSofySalesOfferService } from '../../../../http/cafe/sales-offer/service/cafe-sofy-sales-offer.service';
import { CafeRawCustomerproductholdingService } from '../../../../http/cafe/raw-customerproduct-holding/services/cafe-raw-customerproductholding.service';
import { CafeRawCustomerproductholdingMapper } from '../../../../http/cafe/raw-customerproduct-holding/mappers/cafe-raw-customerproductholding.mapper';
import { PromotionsService } from '../../../../http/cafe/promotions/services/promotions.service';
import { PromotionsMapper } from '../../../../http/cafe/promotions/mappers/promotions.mapper';
import { CafeModemDetailMapper } from '../../../../http/cafe/modem-details/mappers/cafe-modem-detail.mapper';
import { CafeModemDetailsMapper } from '../../../../http/cafe/modem-details/mappers/cafe-modem-details.mapper';
import { AddressMapper } from '../../../../http/common/address/mappers/address.mapper';
import { SingleAddressMapper } from '../../../../http/common/address/mappers/single-address.mapper';
import { catchError, take, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { MessagesModule } from '@telenet/ng-lib-message';
import { NgClass, NgIf } from '@angular/common';
import { MarketingCafeNgxsModule } from '../../../marketing-cafe-ngxs.module';
import { PricingService } from '../../../pricing/service/pricing.service';
import { PricingSofyRequestBasketFactory } from '../../../pricing/service/pricing-sofy-request-basket.factory';
import { PricingRenditionPipe } from '../../../pricing/pipes/pricing-rendition.pipe';
import { PricingSecondColumnModifierPipe } from '../../../pricing/pipes/pricing-second-column-modifier.pipe';
import { PricingData } from '../../../pricing/model/pricing-data.model';
import { DateUtil } from '../../../pricing/util/date.util';
import { PricingConfig } from '../../../pricing/model/pricing-config.model';
import { WinkPricing } from '@telenet/wink-ng';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

interface CustomProduct {
  price: string;
  promoPrice: string;
  duration: string;
  startDate: string;
  endDate: string;
}

@UntilDestroy()
@Component({
  selector: 'tg-marketing-cafe-wink-pricing',
  templateUrl: './wink-pricing.component.html',
  providers: [
    PricingService,
    CafeSofySalesOfferService,
    PricingSofyRequestBasketFactory,
    CafeRawCustomerproductholdingService,
    CafeRawCustomerproductholdingMapper,
    PromotionsService,
    PromotionsMapper,
    CafeModemDetailMapper,
    CafeModemDetailsMapper,
    AddressMapper,
    SingleAddressMapper,
  ],
  standalone: true,
  imports: [
    MessagesModule,
    NgIf,
    NgClass,
    TranslateModule,
    PricingRenditionPipe,
    PricingSecondColumnModifierPipe,
    MarketingCafeNgxsModule,
    WinkPricing,
  ],
})
export class WinkPricingComponent extends AbstractBaseComponent implements OnInit {
  static readonly PRICING_MESSAGE_GROUP = 'pricing';
  static readonly PRODUCT_CATEGORY_SOFY_PRODUCTS = 'sofyProducts';
  static readonly PRODUCT_CATEGORY_CUSTOM_PRODUCTS = 'customProducts';
  @Input() productCategory: string;

  @Input() productIds: string[] = [];
  @Input() amountOfLimitedSims: string;
  @Input() optionIds: string[] = [];
  @Input() optinIds: string[] = [];
  @Input() postalCode: string;
  @Input() campaignCode: string;
  @Input() shortestDuration: boolean;
  @Input() hideFrequency: boolean;
  @Input() startingFrom: boolean;
  @Input() isBusiness: boolean;
  @Input() isAlternativeColor: boolean;
  @Input() enableNbo: boolean;
  @Input() theme: string;
  @Input() alignment: string;
  @Input() brand = 'telenet';

  @Input() customProduct: CustomProduct;

  @Input() selectedRendition: string;
  @Input() applyBaseSingleDigitStyle: boolean;
  @Input() showCustomDurationMessage: boolean;
  @Input() customDurationMessage: string;
  @Input() isShoppingCart: boolean;
  @Input() isPromoForLife: boolean;

  MESSAGE_GROUP = WinkPricingComponent.PRICING_MESSAGE_GROUP;
  pricingData: PricingData | undefined;
  isLoaded = false;
  isPromoInRange = false;

  appearance: string;
  duration = '';
  winkAlignment = '';
  frequency = '';
  annotation = 'NL';
  startingFromLbl = '';
  normalPrice: string | undefined = '';
  priceStrikethrough: string | undefined = '';

  constructor(
    private readonly pricingService: PricingService,
    private readonly translateService: TranslateService
  ) {
    super();
  }

  ngOnInit() {
    this.theme = this.theme === 'dark-ui' ? 'dark-theme' : 'light-theme';

    this.getData()
      .pipe(
        untilDestroyed(this),
        tap((pricingData) => {
          this.pricingData = pricingData;
          this.isLoaded = true;
          this.setAppearance();
          this.setDuration();
          this.setFrequency();
          this.setAnnotation();
          this.setStartingFrom();
          this.setPrices();
        })
      )
      .subscribe();
  }

  private getData(): Observable<PricingData | undefined> {
    switch (this.productCategory) {
      case WinkPricingComponent.PRODUCT_CATEGORY_SOFY_PRODUCTS:
        return this.fetchSofyData();
      case WinkPricingComponent.PRODUCT_CATEGORY_CUSTOM_PRODUCTS:
        return this.fetchCustomData();
      default:
        return of({ duration: 0, discountedPrice: '0,00', normalPrice: '0,00' });
    }
  }

  private fetchSofyData() {
    return this.pricingService.getPricing(this.MESSAGE_GROUP, this.getPricingConfig()).pipe(
      take(1),
      catchError(() => of(undefined))
    );
  }

  private fetchCustomData() {
    const startDate = new Date(this.customProduct.startDate);
    const endDate = new Date(this.customProduct.endDate);
    const currentDate = new Date();
    const duration = parseInt(this.customProduct.duration, 10);

    this.isPromoInRange = DateUtil.inRange(currentDate, startDate, endDate);
    this.applyBaseSingleDigitStyle = this.applyBaseSingleDigitStyle && this.isPromoInRange;
    return of({
      normalPrice: this.customProduct.price,
      discountedPrice: this.isPromoInRange ? this.customProduct.promoPrice : this.customProduct.price,
      duration,
    } as PricingData);
  }

  public showNormalPrice(): boolean {
    return this.isProductCategorySofyProducts() ? this.isPromoActive() : this.isPromoInRange;
  }

  public showPromoDuration(): boolean {
    return this.isProductCategorySofyProducts()
      ? this.shortestDuration && this.isPromoActive()
      : this.isPromoActive() && this.isPromoInRange && parseInt(this.customProduct.duration, 10) > 0;
  }

  private isPromoActive(): boolean {
    return (this.pricingData?.duration || 0) > 0;
  }

  private getPricingConfig(): PricingConfig {
    const pricingConfig: PricingConfig = {
      postalCode: this.postalCode,
      shortestDuration: this.shortestDuration,
      isBusiness: this.isBusiness,
      enableNbo: this.enableNbo,
      productIds: this.productIds,
      optionIds: this.optionIds,
      optinIds: this.optinIds,
      campaignId: this.campaignCode,
    } as PricingConfig;
    if (this.amountOfLimitedSims) {
      pricingConfig.amountOfLimitedSims = parseInt(this.amountOfLimitedSims, 10);
    }
    return pricingConfig;
  }

  private isProductCategorySofyProducts(): boolean {
    return this.productCategory === WinkPricingComponent.PRODUCT_CATEGORY_SOFY_PRODUCTS;
  }

  private setAppearance() {
    switch (this.selectedRendition) {
      case 'graphical':
        this.appearance = 'patch';
        break;
      case 'textual':
        this.appearance = this.isShoppingCart ? 'subtle' : 'right';
        this.winkAlignment = this.isShoppingCart ? 'right' : 'left';
        break;
      case 'informational':
      default:
        this.appearance = 'text';
        this.winkAlignment = 'center';
        break;
    }
  }

  private setDuration() {
    if (this.showPromoDuration()) {
      if (this.showCustomDurationMessage) {
        this.duration = this.customDurationMessage;
      }
      this.duration = this.translateService.instant('ng.pricing.lbl.duration', {
        value: this.pricingData?.duration,
      });
    }
  }

  private setFrequency() {
    if (!this.hideFrequency) {
      this.frequency = this.translateService.instant('ng.pricing.lbl.frequency');
    }
  }

  private setAnnotation() {
    const currentLang = this.translateService.currentLang.toUpperCase();
    if (['FR', 'EN'].includes(currentLang)) {
      this.annotation = currentLang;
    }
  }

  private setStartingFrom() {
    if (this.startingFrom) {
      this.startingFromLbl = this.translateService.instant('ng.pricing.lbl.from');
    }
  }

  private setPrices() {
    this.priceStrikethrough = this.showNormalPrice() ? this.pricingData?.normalPrice : '';
    this.normalPrice = this.showNormalPrice() ? this.pricingData?.discountedPrice : this.pricingData?.normalPrice;
  }
}
