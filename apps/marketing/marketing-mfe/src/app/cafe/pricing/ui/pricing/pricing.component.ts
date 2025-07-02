import { Component, Input, OnInit } from '@angular/core';
import { AbstractBaseComponent } from '@telenet/ng-lib-page';
import { PricingData } from '../../model/pricing-data.model';
import { PricingService } from '../../service/pricing.service';
import { DateUtil } from '../../util/date.util';
import { PricingConfig } from '../../model/pricing-config.model';
import { CafeSofySalesOfferService } from '../../../../http/cafe/sales-offer/service/cafe-sofy-sales-offer.service';
import { PricingSofyRequestBasketFactory } from '../../service/pricing-sofy-request-basket.factory';
import { CafeRawCustomerproductholdingService } from '../../../../http/cafe/raw-customerproduct-holding/services/cafe-raw-customerproductholding.service';
import { CafeRawCustomerproductholdingMapper } from '../../../../http/cafe/raw-customerproduct-holding/mappers/cafe-raw-customerproductholding.mapper';
import { PromotionsService } from '../../../../http/cafe/promotions/services/promotions.service';
import { PromotionsMapper } from '../../../../http/cafe/promotions/mappers/promotions.mapper';
import { CafeModemDetailMapper } from '../../../../http/cafe/modem-details/mappers/cafe-modem-detail.mapper';
import { CafeModemDetailsMapper } from '../../../../http/cafe/modem-details/mappers/cafe-modem-details.mapper';
import { AddressMapper } from '../../../../http/common/address/mappers/address.mapper';
import { SingleAddressMapper } from '../../../../http/common/address/mappers/single-address.mapper';
import { catchError, take } from 'rxjs/operators';
import { of } from 'rxjs';
import { PricingSecondColumnModifierPipe } from '../../pipes/pricing-second-column-modifier.pipe';
import { PricingRenditionPipe } from '../../pipes/pricing-rendition.pipe';
import { TranslateModule } from '@ngx-translate/core';
import { PricingPriceComponent } from '../pricing-price/pricing-price.component';
import { NgClass, NgIf } from '@angular/common';
import { MessagesModule } from '@telenet/ng-lib-message';
import { MarketingCafeNgxsModule } from '../../../marketing-cafe-ngxs.module';

interface CustomProduct {
  price: string;
  promoPrice: string;
  duration: string;
  startDate: string;
  endDate: string;
}

@Component({
  selector: 'tg-marketing-cafe-pricing',
  templateUrl: './pricing.component.html',
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
    PricingPriceComponent,
    TranslateModule,
    PricingRenditionPipe,
    PricingSecondColumnModifierPipe,
    MarketingCafeNgxsModule,
  ],
})
export class PricingComponent extends AbstractBaseComponent implements OnInit {
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

  @Input() customProduct: CustomProduct;

  @Input() selectedRendition: string;
  @Input() applyBaseSingleDigitStyle: boolean;
  @Input() showCustomDurationMessage: boolean;
  @Input() customDurationMessage: string;
  @Input() isShoppingCart: boolean;
  @Input() promoMessage?: string;

  MESSAGE_GROUP = PricingComponent.PRICING_MESSAGE_GROUP;
  pricingData: PricingData | undefined;
  isLoaded = false;
  isPromoInRange = false;

  constructor(private readonly pricingService: PricingService) {
    super();
  }

  ngOnInit() {
    switch (this.productCategory) {
      case PricingComponent.PRODUCT_CATEGORY_SOFY_PRODUCTS:
        this.fetchSofyData();
        return;
      case PricingComponent.PRODUCT_CATEGORY_CUSTOM_PRODUCTS:
        this.fetchCustomData();
        return;
      default:
        this.pricingData = { duration: 0, discountedPrice: '0,00', normalPrice: '0,00' };
        this.isLoaded = true;
    }
  }

  public showNormalPrice(): boolean {
    return this.isProductCategorySofyProducts() ? this.isPromoActive() : this.isPromoInRange;
  }

  public showPromoDuration(): boolean {
    return this.isProductCategorySofyProducts()
      ? this.shortestDuration && this.isPromoActive()
      : this.isPromoActive() && this.isPromoInRange && parseInt(this.customProduct.duration, 10) > 0;
  }

  public getDynamicCSS(): string {
    let dynamicCss = '';
    switch (this.selectedRendition) {
      case 'graphical':
        dynamicCss = this.getGraphicalColorCSS();
        break;
      case 'informational':
        dynamicCss = `promo-highlight--informational flex-direction--column--md align-items--center--md flex-wrap--wrap flex-wrap--nowrap--md `;
        break;
      case 'textual':
      default:
        dynamicCss = `flex-wrap--wrap `;
    }
    return dynamicCss + this.getConfiguratorCSS();
  }

  public getConfiguratorSecondColumnModifier(): string {
    return this.isShoppingCart ? 'promo-highlight__configurator__second-column align-items--end text-align--right' : '';
  }

  public getConfiguratorSecondColumnModifierForLife(): string {
    return this.isShoppingCart && this.promoMessage
      ? 'promo-highlight__configurator__second-column align-items--end text-align--right promo-for-life'
      : '';
  }

  public getConfiguratorCSS(): string {
    return this.isShoppingCart ? 'promo-highlight__configurator flex-direction--column' : '';
  }

  public getGraphicalColorCSS(): string {
    if (this.isAlternativeColor) {
      return `promo-highlight--informational promo-highlight--graphical-alternative flex-direction--column--md align-items--center--md flex-wrap--wrap flex-wrap--nowrap--md `;
    }
    return `promo-highlight--informational promo-highlight--graphical flex-direction--column--md align-items--center--md flex-wrap--wrap flex-wrap--nowrap--md `;
  }

  private isPromoActive(): boolean {
    return (this.pricingData?.duration || 0) > 0;
  }

  private fetchSofyData(): void {
    this.pricingService
      .getPricing(this.MESSAGE_GROUP, this.getPricingConfig())
      .pipe(
        take(1),
        catchError(() => of(undefined))
      )
      .subscribe((pricingData: PricingData | undefined) => {
        this.pricingData = pricingData;
        this.isLoaded = true;
      });
  }

  private fetchCustomData(): void {
    const startDate = new Date(this.customProduct.startDate);
    const endDate = new Date(this.customProduct.endDate);
    const currentDate = new Date();
    const duration = parseInt(this.customProduct.duration, 10);

    this.isPromoInRange = DateUtil.inRange(currentDate, startDate, endDate);
    this.applyBaseSingleDigitStyle = this.applyBaseSingleDigitStyle && this.isPromoInRange;
    this.pricingData = {
      normalPrice: this.customProduct.price,
      discountedPrice: this.isPromoInRange ? this.customProduct.promoPrice : this.customProduct.price,
      duration,
    };
    this.isLoaded = true;
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
    return this.productCategory === PricingComponent.PRODUCT_CATEGORY_SOFY_PRODUCTS;
  }
}
