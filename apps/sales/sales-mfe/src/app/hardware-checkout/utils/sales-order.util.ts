import { BusinessDomainsEnum } from '../enums/business-domains.enum';
import { GenericError, NcErrors, NoDeliveryOrderItemFound, NoHardwareItemsFound } from '../constants/errors.constants';
import { OrderItemActionEnum } from '../enums/order-item-action.enum';
import {
  DiscountItem,
  NcError,
  OrderItem,
  OrderItemDeliveryChars,
  Rule,
  SalesOrder,
  SdataSalesOfferItem,
  ValidationElementEnum,
} from '@sales/hardware-checkout/data-access';
import { HardwareCheckoutError } from '../classes/hardware-checkout-error.class';
import {
  DepreciationItem,
  EtfPrice,
  Price,
  summaryDiscount,
  SummaryOrderItem,
  SummaryOrderItemPrice,
  SummaryPrices,
} from '@sales/summary/data-access';
import { OmapiUtil } from './omapi.util';
import { RawOmapiQueryProductInterfaceData } from '@telenet/ng-lib-omapi-query';
import { OmapiProduct } from '@telenet/ng-lib-omapi';
import { Observable, pipe, UnaryFunction } from 'rxjs';
import { map } from 'rxjs/operators';
import { OrderItemWithMatchingDiscount } from '../interfaces/order-item-with-matching-discount.interface';
import { OrderItemUtil } from './order-item.util';

const duration = 12;

export class SalesOrderUtil {
  static getDiscountsThatAreUsedByOrderItems(salesOrder: SalesOrder): DiscountItem[] {
    const discounts: DiscountItem[] = [];
    const hardwareOrderItem = this.getHardwareOrderItem(salesOrder);
    const discountItems = salesOrder.discountItems;

    if (discountItems) {
      discountItems.forEach((discountItem) => {
        hardwareOrderItem.orderItems?.find((orderItem) => {
          return orderItem.orderItems?.find((childOrderItem) => {
            if (discountItem.targetOrderItems.map((orderItem) => orderItem.id).includes(childOrderItem.id)) {
              discounts.push(discountItem);
            }
          });
        });
      });
    }
    return discounts;
  }

  static getHardwareOrderItem(salesOrder: SalesOrder, action?: OrderItemActionEnum) {
    let orderItems = salesOrder.orderItems;
    if (action) {
      orderItems = orderItems.filter((orderItem) => orderItem.action === action);
    }
    const hardwareOrderItem = orderItems.find((orderItem) => {
      return orderItem.offer.businessDomains.includes(BusinessDomainsEnum.HARDWARE_TLO);
    });

    if (!hardwareOrderItem) {
      throw new HardwareCheckoutError(NoHardwareItemsFound);
    }
    return hardwareOrderItem;
  }

  static getHardwareItemList(salesOrder: SalesOrder) {
    const hardwareOrderItem = this.getHardwareOrderItem(salesOrder);
    return hardwareOrderItem.orderItems?.filter((orderItem) => orderItem.action === OrderItemActionEnum.ADD) || [];
  }

  static feasibilityCheckRequired(salesOrder: SalesOrder): boolean {
    return !!salesOrder.validationElements.find(
      (element) => element.typeOfProblem === ValidationElementEnum.FEASIBILITY_CHECK_REQUIRED
    );
  }

  static getDeliveryOrderItem(salesOrder: SalesOrder, action?: OrderItemActionEnum) {
    return this.getDeliveryOrderItemFor(salesOrder, BusinessDomainsEnum.DELIVERY_METHOD, action);
  }

  static getDeliveryOrderItemFor(
    salesOrder: SalesOrder,
    deliveryMethod: BusinessDomainsEnum,
    action?: OrderItemActionEnum
  ) {
    let orderItems = salesOrder.orderItems;
    if (action) {
      orderItems = orderItems.filter((orderItem) => orderItem.action === action);
    }

    const deliveryOrderItem = orderItems.find((orderItem) => {
      return orderItem.offer.businessDomains.includes(deliveryMethod);
    });

    if (!deliveryOrderItem) {
      throw new HardwareCheckoutError(NoDeliveryOrderItemFound);
    }

    return deliveryOrderItem;
  }

  static getDiscountedOrderItems(salesOrder: SalesOrder): OrderItem[] | undefined {
    const discountedOrderItems: OrderItem[] = [];
    const hardwareOrderItemIds = this.getHardwareOrderItem(salesOrder)?.orderItems?.flatMap((orderItem) => {
      if (orderItem.orderItems && orderItem.orderItems[0]) {
        return orderItem.orderItems[0].id;
      }
      return undefined;
    });

    salesOrder.discountItems.forEach((discountItem) => {
      discountedOrderItems.push(...discountItem.targetOrderItems);
    });

    return discountedOrderItems.filter((orderItem) => {
      return hardwareOrderItemIds?.includes(orderItem.id);
    });
  }

  static getDepreciationItems(salesOrder: SalesOrder, isSoho: boolean): DepreciationItem[] {
    const discountedItems = this.getDiscountedOrderItems(salesOrder);
    if (discountedItems) {
      return discountedItems.map((orderItem) => {
        let depreciationItem: DepreciationItem;
        if (isSoho) {
          depreciationItem = {
            name: orderItem.name,
            duration: duration,
            price: Number(orderItem.prices.oneTimeDiscountWithoutTaxes.value),
          };
        } else {
          depreciationItem = {
            name: orderItem.name,
            duration: duration,
            price: Number(orderItem.prices.oneTimeDiscount.value),
          };
        }
        return depreciationItem;
      });
    }
    return [];
  }

  static getSummaryPrices(salesOrder: SalesOrder, isSoho: boolean): SummaryPrices {
    const deliveryOrderItem = salesOrder.orderItems.find((orderItem) => {
      return orderItem.offer.businessDomains.some(
        (businessDomain) => businessDomain === BusinessDomainsEnum.HOME_DELIVERY
      );
    });

    const zeroPrice = {
      value: '0.00',
      currency: {
        name: 'Euro',
        code: 'EU',
      },
    };

    const findEtfItems = (salesOrder: SalesOrder, useTaxes: boolean): EtfPrice[] => {
      return salesOrder.orderItems
        .filter(
          (orderItem) =>
            orderItem.offer.businessDomains.includes(BusinessDomainsEnum.ETF) &&
            orderItem.action === OrderItemActionEnum.ADD
        )
        .map((orderItem) => ({
          labelKey: 'ng.sales-checkout.shopping-cart.lbl.cancellation-fee',
          price: useTaxes ? orderItem.prices.oneTimeTotal : orderItem.prices.oneTimeTotalWithoutTaxes,
          isMonthly: false,
          productName: orderItem.chars['Device Name'],
        }));
    };

    const calculateEtfTotal = (etfItems: EtfPrice[]): Price => {
      return etfItems
        .map((item) => item.price)
        .reduce(
          (total, price) => ({
            value: parseFloat(total.value) + parseFloat(price.value) + '',
            currency: price.currency,
          }),
          zeroPrice
        );
    };

    const etfItemsInclVat = findEtfItems(salesOrder, true);
    const summaryPrices: SummaryPrices = {
      totals: {
        deliveryCost: deliveryOrderItem?.prices.oneTimeDiscountedWithoutTaxes || zeroPrice,
        upfrontCost: salesOrder.price.upfrontPaymentTotalForSecuredHomeDeliveryEquipment,
        etfPrices: etfItemsInclVat,
        etfTotal: calculateEtfTotal(etfItemsInclVat),
      },
      vatInclusive: !isSoho,
    };
    if (isSoho) {
      const etfItemsSoho = findEtfItems(salesOrder, false);
      const etfTotalSoho = calculateEtfTotal(etfItemsSoho);
      summaryPrices.subTotals = {
        deliveryCost: deliveryOrderItem?.prices.oneTimeDiscounted || zeroPrice,
        upfrontCost: salesOrder.price.upfrontPaymentTotalForHomeDeliveryWithoutTaxes,
        etfPrices: etfItemsSoho,
        etfTotal: etfTotalSoho,
      };
    }
    return summaryPrices;
  }

  static getOrderItemDiscountRuleByTarget(orderItem: OrderItem, rules: Rule[]): Rule | undefined {
    return rules.find((rule) => {
      return orderItem.orderItems?.find((childOrderItem) => {
        return rule.targetOrderItemIds.includes(childOrderItem.id);
      });
    });
  }

  static getOrderItemDiscountRule(
    orderItemWithMatchingDiscount: OrderItemWithMatchingDiscount,
    rules: Rule[]
  ): Rule | undefined {
    const { orderItem, customerChosenDiscount } = orderItemWithMatchingDiscount;
    return rules.find((rule) => {
      const isTargeted = orderItem.orderItems?.some((childOrderItem) =>
        rule.targetOrderItemIds.includes(childOrderItem.id)
      );

      const isDiscountMatch =
        rule.discount.id === customerChosenDiscount.id || rule.slotName === customerChosenDiscount.type;
      return isTargeted && isDiscountMatch;
    });
  }

  static getOrderItemItemCodes(orderItem: OrderItem): string[] | undefined {
    let orderItemCodes = undefined;
    if (orderItem) {
      orderItemCodes = orderItem.orderItems
        ?.filter((orderItem) => orderItem.action === OrderItemActionEnum.ADD)
        ?.map((orderItem) => {
          return SalesOrderUtil.getOrderItemItemCode(orderItem);
        })
        .filter((value: string | undefined): value is string => {
          return typeof value === 'string';
        });
    }
    return orderItemCodes;
  }

  static getOrderItemItemCode(orderItem: OrderItem): string {
    return orderItem.chars['Item Code'];
  }

  static getDiscountRuleByTargetOrderId(rules: Rule[], targetOrderItemId: string): Rule | undefined {
    return rules.find((rule) => {
      return rule.targetOrderItemIds.includes(targetOrderItemId);
    });
  }

  static isBigItemDeliveryOrder(salesOrder: SalesOrder, products?: RawOmapiQueryProductInterfaceData[]): boolean {
    return SalesOrderUtil.getHardwareItemList(salesOrder).some(
      (orderItem) => OmapiUtil.getProductVariant(orderItem, products || [])?.extraAtHomeDelivery || false
    );
  }

  static hasMultipleItems(salesOrder: SalesOrder): boolean {
    const orderItemsToBeAdded = this.getHardwareItemList(salesOrder);
    return orderItemsToBeAdded.length > 1;
  }

  static handleNcErrors<T extends object>(): UnaryFunction<Observable<T | NcError>, Observable<T>> {
    return pipe(
      map((result: T | NcError) => {
        if (this.isNcError(result)) {
          const errorObject = NcErrors.find((error) => error.key === result.errorCode);
          if (errorObject) {
            throw new HardwareCheckoutError(errorObject.error);
          }
          throw new HardwareCheckoutError(GenericError);
        }
        return result as T;
      })
    );
  }

  static isNcError(result: unknown): result is NcError {
    if (typeof result === 'object' && result !== null) {
      const error = result as Partial<NcError>;

      return (
        typeof error.errorCode === 'string' &&
        typeof error.errorType === 'string' &&
        typeof error.errorMessage === 'string'
      );
    }
    return false;
  }

  static createSummaryOrderItems(
    orderItems: OrderItem[],
    discountItems: DiscountItem[],
    omapiQueryProducts: RawOmapiQueryProductInterfaceData[],
    omapiProducts: OmapiProduct[],
    isSoho: boolean,
    locale: string
  ) {
    const summaryOrderItems: SummaryOrderItem[] = [];
    orderItems
      .filter((orderItem) => orderItem.action === OrderItemActionEnum.ADD)
      .forEach((orderItem: OrderItem) => {
        let summaryOrderItem: SummaryOrderItem;
        if (orderItem.orderItems) {
          const childOrderItem = orderItem.orderItems[0];

          const discountLabel = this.getOmapiDiscountLabelByTargetOrderId(
            discountItems,
            omapiProducts,
            orderItem,
            locale
          );

          const orderItemName = this.getLocalizedOmapiQueryProductName(
            orderItem,
            childOrderItem,
            omapiQueryProducts,
            locale
          );

          summaryOrderItem = {
            id: childOrderItem.id,
            name: orderItemName,
            prices: this.getSummaryOrderPrices(childOrderItem, isSoho),
          };

          if (discountLabel) {
            summaryOrderItem.discount = this.getSummaryOrderItemDiscount(discountLabel, childOrderItem, isSoho);
          }

          const orderItemMainImage = OmapiUtil.getProductMainImage(orderItem, omapiQueryProducts);

          if (orderItemMainImage && orderItem && orderItem.orderItems) {
            summaryOrderItem.mainImageUrl = orderItemMainImage.value;
          }

          summaryOrderItems.push(summaryOrderItem);
        }
      });
    return summaryOrderItems;
  }

  static getDiscountByTargetOrderId(discountItems: DiscountItem[], orderItem: OrderItem): string | undefined {
    let foundDiscount: string | undefined = undefined;
    if (orderItem && orderItem.orderItems) {
      const orderIdemTargetId = orderItem.orderItems[0].id;

      foundDiscount = discountItems
        .flatMap((discountItem) => {
          return {
            discountId: discountItem.discountId,
            targetOrderItemIds: discountItem.targetOrderItems.flatMap((targetOrderItem) => targetOrderItem.id),
          };
        })
        .find((flattenedDiscount) => {
          return flattenedDiscount.targetOrderItemIds.includes(orderIdemTargetId);
        })?.discountId;
    }

    return foundDiscount;
  }

  static orderAwaitsPayment(salesOrder: SalesOrder | undefined): boolean {
    return salesOrder?.status === 'Waiting for payment';
  }

  static orderItemsWithMatchingDiscounts(
    orderItems: OrderItem[],
    salesOffers: SdataSalesOfferItem[]
  ): OrderItemWithMatchingDiscount[] {
    const offerMap = new Map(salesOffers.map((offer) => [offer.itemCode, offer.customerChosenDiscount]));

    return orderItems
      .map((item) => {
        const customerChosenDiscount = offerMap.get(item.chars['Item Code']);

        if (customerChosenDiscount) {
          return {
            orderItem: item,
            customerChosenDiscount: customerChosenDiscount,
          };
        }
        return null;
      })
      .filter((item) => item !== null) as OrderItemWithMatchingDiscount[]; // Filter out null values
  }

  private static getSummaryOrderItemDiscount(
    associatedDiscount: string,
    childOrderItem: OrderItem,
    isSoho: boolean
  ): summaryDiscount {
    if (isSoho) {
      return {
        label: associatedDiscount,
        price: childOrderItem.prices.oneTimeDiscountWithoutTaxes,
      };
    }
    return {
      label: associatedDiscount,
      price: childOrderItem.prices.oneTimeDiscount,
    };
  }

  private static getSummaryOrderPrices(childOrderItem: OrderItem, isSoho: boolean): SummaryOrderItemPrice {
    if (isSoho) {
      return {
        total: childOrderItem.prices.oneTimeTotalWithoutTaxes,
        discount: childOrderItem.prices.oneTimeDiscountWithoutTaxes,
        discounted: childOrderItem.prices.oneTimeDiscountedWithoutTaxes,
      };
    }
    return {
      total: childOrderItem.prices.oneTimeTotal,
      discount: childOrderItem.prices.oneTimeDiscount,
      discounted: childOrderItem.prices.oneTimeDiscounted,
    };
  }

  private static getOmapiDiscountLabelByTargetOrderId(
    discountItems: DiscountItem[],
    omapiProducts: OmapiProduct[],
    orderItem: OrderItem,
    locale: string
  ): string | undefined {
    const discountId = this.getDiscountByTargetOrderId(discountItems, orderItem);
    const discountOmapiProduct = omapiProducts.find((omapiProduct) => omapiProduct.productId === discountId);
    return discountOmapiProduct?.localizedContent?.find((content) => content.locale.toLocaleLowerCase() === locale)
      ?.name;
  }

  private static getLocalizedOmapiQueryProductName(
    parentOrderItem: OrderItem,
    childOrderItem: OrderItem,
    omapiQueryProducts: RawOmapiQueryProductInterfaceData[],
    locale: string
  ): string {
    const omapiQueryProductVariant = OmapiUtil.getProductVariant(parentOrderItem, omapiQueryProducts);
    const localizedContent = omapiQueryProductVariant?.shortDescription?.localizedContent.find(
      (shortDescriptionLocalized) => shortDescriptionLocalized.locale.toLocaleLowerCase() === locale
    );
    const productBrand = omapiQueryProductVariant?.manBrand.localizedContent.find(
      (languageOption) => languageOption.locale.toLocaleLowerCase() === locale
    )?.value?.[0];
    return `${productBrand ? productBrand + ' ' : ''}${localizedContent?.data || childOrderItem.name}`;
  }

  static getDeliveryChars(salesOrder: SalesOrder): OrderItemDeliveryChars {
    const orderItem = this.getDeliveryOrderItem(salesOrder);
    return OrderItemUtil.getDeliveryChars(orderItem);
  }

  static checkoutDeliveryRequired(salesOrder: SalesOrder): boolean {
    return salesOrder.validationElements.some(
      (element) => element.typeOfProblem === ValidationElementEnum.CHECKOUT_DELIVERY_REQUIRED
    );
  }
}
