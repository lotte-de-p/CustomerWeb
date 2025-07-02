import { Inject, Injectable } from '@angular/core';
import {
  CustomerBrandEnum,
  CustomerStatusEnum,
  PathCategorisationService,
  QueryParamEnum,
  UrlService,
} from '@telenet/ng-lib-page';
import first from 'lodash-es/first';
import isEmpty from 'lodash-es/isEmpty';
import { Store } from '@ngxs/store';
import { CookieService } from 'ngx-cookie-service';
import { SalesOrder } from '../../../models/sales-order/sales-order.model';
import { IntentEnum } from '../../../enums/intent.enum';
import { ProductTypeEnum } from '../../../enums/product-type.enum';
import { SalesFlowEnum } from '../../../enums/sales-flow.enum';
import { ProductCategoryEnum } from '../../../enums/product-category.enum';
import { ShoppingCartConstants } from '../../../constants/shopping-cart.constant';
import { SalesFacade } from '../state/sales/sales.facade';
import { ValidateOptionsCheckoutResponseInterface } from '../../../interfaces/validate-options-checkout.interface';
import { OrderItem } from '../../../models/sales-order/order-item.model';
import { SalesCheckoutFacade } from '../state/sales-checkout/sales-checkout.facade';

@Injectable({
  providedIn: 'root',
})
export class IntentService {
  constructor(
    private readonly urlService: UrlService,
    private readonly store: Store,
    private readonly pathCategorisationService: PathCategorisationService,
    private readonly cookieService: CookieService,
    private readonly salesFacade: SalesFacade,
    private readonly salesCheckoutFacade: SalesCheckoutFacade,
    @Inject('Window') private readonly window: Window
  ) {}

  getIntent(salesOrder: SalesOrder, status?: string, generateAnalyticsIntent?: boolean): string {
    return this.getIntentFromUrl(salesOrder)
      ? this.getIntentFromUrl(salesOrder)
      : this.getCalculatedIntent(salesOrder, status, generateAnalyticsIntent);
  }

  private getIntentFromUrl(salesOrder: SalesOrder): string {
    const intentFromUrl = this.urlService.getRequestParamValue(QueryParamEnum.INTENT, '');
    const flow = this.urlService.getRequestParamValue(QueryParamEnum.FLOW, SalesFlowEnum.MARKETING);
    if (flow && flow.toUpperCase() === SalesFlowEnum.PRODUCT_OPTIONS) {
      return IntentEnum.PRODUCT_OPTIONS;
    } else {
      if (intentFromUrl) {
        return intentFromUrl;
      } else {
        return this.calculateIntentForHardware(salesOrder);
      }
    }
  }

  private calculateIntentForHardware(salesOrder: SalesOrder): string {
    return !!salesOrder.hasHardwareCVPProduct() ||
      !!this.cookieService.get(ShoppingCartConstants.ANALYTICS_INTENT) ||
      !!this.window.sessionStorage.getItem(ShoppingCartConstants.INTENT_ON_ORDER_SUBMIT)
      ? IntentEnum.HARDWARE
      : '';
  }

  private getCalculatedIntent(salesOrder: SalesOrder, status: string, generateAnalyticsIntent?: boolean): string {
    const brand = this.pathCategorisationService.getCustomerBrand();
    const requiresInstallation = this.salesCheckoutFacade.gerCurrentRequiresInstallation();
    if (this.isMoveIntent(salesOrder)) {
      return IntentEnum.MOVE;
    } else if (salesOrder.isManualFlow() && !generateAnalyticsIntent) {
      return IntentEnum.MANUAL_ADDRESS;
    } else if (requiresInstallation && brand === CustomerBrandEnum.BRAND_BASE) {
      return salesOrder.hasNoCoaxCableConnectionForVOOCustomer()
        ? IntentEnum.BASE_DROP_CABLE_MISSING
        : IntentEnum.BASE_FIXED_PRODUCT;
    } else {
      return this.getIntentBasedOnStatusAndSalesOrder(status, salesOrder);
    }
  }

  private getIntentBasedOnStatusAndSalesOrder(status: string, salesOrder: SalesOrder) {
    const validateOptionsCheckout = this.salesFacade.getCurrentValidateOptionsCheckout();
    const streamingServiceSelected = !isEmpty(this.salesCheckoutFacade.getCurrentStreamingServiceOffer());
    const intent = this.getIntentFromPurchasingItemsInSO(salesOrder, streamingServiceSelected);
    return this.isIntentCalculated(validateOptionsCheckout, status, streamingServiceSelected)
      ? intent
      : IntentEnum.PROSPECT.concat('-').concat(intent);
  }

  private isMoveIntent(salesOrder: SalesOrder): boolean {
    return (
      salesOrder.isMoveInitiated() ||
      (this.salesCheckoutFacade.getCurrentMoveInfo() && this.salesCheckoutFacade.getCurrentMoveInfo().isInitiated)
    );
  }

  private isIntentCalculated(
    validateOptionsCheckout: ValidateOptionsCheckoutResponseInterface,
    status: string,
    streamingServiceSelected: boolean
  ): boolean {
    return (
      (status && status.toUpperCase() === CustomerStatusEnum.ACTIVE) ||
      (validateOptionsCheckout && validateOptionsCheckout.tvLinePresent) ||
      streamingServiceSelected
    );
  }

  private getIntentFromPurchasingItemsInSO(salesOrder: SalesOrder, streamingServiceSelected: boolean): string {
    let intent: string;
    const purchasingItems = this.getPurchasingItems(salesOrder);
    const validateOptionsCheckout = this.salesFacade.getCurrentValidateOptionsCheckout();
    const tvLinePresent = validateOptionsCheckout && validateOptionsCheckout.tvLinePresent;
    if (!isEmpty(purchasingItems)) {
      if (purchasingItems.length === 1 || tvLinePresent) {
        intent = this.constructIntentBasedOnPurchasingItems(purchasingItems, tvLinePresent, streamingServiceSelected);
      } else if (streamingServiceSelected) {
        const streamingTlo = purchasingItems.find((item) => item.productInfo.isStreamingServiceContainer());
        intent = this.constructIntent(streamingTlo, false, streamingServiceSelected);
      } else {
        intent = IntentEnum.PRODUCT_MULTIPLE;
      }
    }

    return isEmpty(this.getIntentSuffix()) ? intent : intent.concat(this.getIntentSuffix());
  }

  private constructIntentBasedOnPurchasingItems(
    purchasingItems: OrderItem[],
    tvLinePresent: boolean,
    streamingServiceSelected: boolean
  ): string {
    const purchasingItem = first(purchasingItems);
    const tLOIntent = this.constructIntent(purchasingItem, tvLinePresent, streamingServiceSelected);
    const smartPhoneQuantity = purchasingItem.getItemsByProductType([ProductTypeEnum.SMARTPHONE]).length;
    let smartphone;
    let smartphoneIntent;
    switch (smartPhoneQuantity) {
      case 1:
        smartphone = first(purchasingItem.getItemsByProductType([ProductTypeEnum.SMARTPHONE]));
        smartphoneIntent = this.constructIntent(smartphone, tvLinePresent, streamingServiceSelected);
        return tLOIntent.concat('-').concat(smartphoneIntent);
      case 2:
        return tLOIntent.concat('-').concat(IntentEnum.SMARTPHONE).concat('-').concat(IntentEnum.MODIFY);
      case 0:
      default:
        return tLOIntent;
    }
  }

  private getIntentSuffix(): string {
    let intentSuffix = '';
    if (!isEmpty(this.urlService.getRequestParamValue(QueryParamEnum.INTENT_SUFFIX, ''))) {
      const intentTadaamParameter = this.urlService.getRequestParamValue(QueryParamEnum.INTENT_SUFFIX, '');
      intentSuffix = intentSuffix.concat('-').concat(intentTadaamParameter);
    }
    return intentSuffix;
  }

  private getPurchasingItems(salesOrder: SalesOrder): OrderItem[] {
    return !isEmpty(salesOrder) && salesOrder.success && salesOrder.getPurchasingOrderItems('TLO');
  }

  private constructIntent(
    orderItem: OrderItem | undefined,
    tvLinePresent: boolean,
    streamingServiceSelected: boolean
  ): string {
    let intentCategory: IntentEnum;
    const status = orderItem?.status?.toLowerCase();
    const productInfo = orderItem?.productInfo;
    switch (true) {
      case streamingServiceSelected:
        return IntentEnum.STREAMING_SERVICE;
      case tvLinePresent:
        return IntentEnum.CONTENT_PACK;
      case productInfo?.productType === ProductTypeEnum.DOMAIN_NAME:
        return IntentEnum.INTENT_DOMAIN_NAME;
      case productInfo?.hasCategory(ProductCategoryEnum.PRE_PAID_MOBILE):
        intentCategory = IntentEnum.PREPAID;
        break;
      case productInfo?.productType === ProductTypeEnum.SMARTPHONE:
        intentCategory = IntentEnum.SMARTPHONE;
        break;
      case productInfo?.hasCategory(ProductCategoryEnum.BASE_PRO):
        intentCategory = IntentEnum.BASEPRO;
        break;
      case productInfo?.requiresInstallation:
        intentCategory = IntentEnum.INSTALLABLE_PRODUCT;
        break;
      case productInfo?.hasCategory(ProductCategoryEnum.POST_PAID_MOBILE):
        intentCategory = IntentEnum.POSTPAID;
        break;
      default:
        intentCategory = IntentEnum.DEFAULT;
    }
    return `${intentCategory}-${status}`;
  }
}
