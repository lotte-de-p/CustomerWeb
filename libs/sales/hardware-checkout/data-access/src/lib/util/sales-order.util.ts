import { OrderItem, SalesOrder } from '../interfaces/sales-order.interface';
import { OrderItemActionEnum } from '../enums/order-item-action.enum';
import { BusinessDomainsEnum } from '../enums/business-domains.enum';
import { Cart, CartBuilder, Item, ItemBuilder, Price, PriceBuilder, Product, ProductBuilder } from 'udl';
import { RawOmapiQueryProductInterfaceData } from '@telenet/ng-lib-omapi-query';
import { OmapiUtil } from './omapi.util';

export class SalesOrderUtil {
  static mapToUdlCart(
    salesOrder: SalesOrder,
    omapiQueryProducts: RawOmapiQueryProductInterfaceData[],
    isSoho: boolean
  ): Cart {
    const cart = new CartBuilder().withCartId(salesOrder.id).build();
    const salesItems = this.getHardwareItemList(salesOrder);

    if (salesItems.length > 0) {
      const cartItems = salesItems.map((salesItem) => this.mapToUdlItem(salesItem, omapiQueryProducts, isSoho));
      cart.setItems(cartItems);
      cart.setPrice(this.populateSummaryPrice(cartItems));
    }
    return cart;
  }

  private static getHardwareItemList(salesOrder: SalesOrder) {
    const hardwareOrderItem = this.getHardwareOrderItem(salesOrder);
    return hardwareOrderItem?.orderItems?.filter((orderItem) => orderItem.action === OrderItemActionEnum.ADD) || [];
  }

  private static getHardwareOrderItem(salesOrder: SalesOrder) {
    return salesOrder.orderItems.find((orderItem) => {
      return orderItem.offer.businessDomains.includes(BusinessDomainsEnum.HARDWARE_TLO);
    });
  }

  private static mapToUdlItem(
    orderItem: OrderItem,
    omapiQueryProducts: RawOmapiQueryProductInterfaceData[],
    isSoho: boolean
  ): Item {
    const item = new ItemBuilder()
      .withProductInfo(this.mapToProduct(orderItem, omapiQueryProducts))
      .withPrice(this.mapToPrice(orderItem, isSoho))
      .withQuantity(1)
      .build();
    item['_helpers'] = {};
    return item;
  }

  private static mapToProduct(orderItem: OrderItem, omapiQueryProducts: RawOmapiQueryProductInterfaceData[]): Product {
    return new ProductBuilder()
      .withProductId(orderItem.chars['Item Code'])
      .withProductType(OmapiUtil.getProductType(orderItem, omapiQueryProducts) || 'MISSING_OMAPI')
      .withProductStatus(orderItem.action.toUpperCase())
      .build();
  }

  private static populateSummaryPrice(items: Item[]): Price {
    const onetimeTotal = this.calculateBasePrice(items, 'getOnetimePrice');
    const recurringTotal = this.calculateBasePrice(items, 'getRecurringPrice');
    const onetimeDiscounted = this.calculateDiscountedPrice(items, 'getOnetimePrice');
    const recurringDiscounted = this.calculateDiscountedPrice(items, 'getRecurringPrice');

    return new PriceBuilder()
      .withBasePrice(new PriceBuilder().withOneTimePrice(onetimeTotal).withRecurringPrice(recurringTotal).build())
      .withTotalPrice(
        new PriceBuilder().withOneTimePrice(onetimeDiscounted).withRecurringPrice(recurringDiscounted).build()
      )
      .build();
  }

  private static calculateDiscountedPrice(items: Item[], priceType: string): number {
    return items.reduce((tot, item) => {
      return this.calculate(tot, item.getPrice().getDiscountedPrice()[priceType]());
    }, 0);
  }

  private static calculateBasePrice(items: Item[], priceType: string): number {
    return items.reduce((tot, item) => {
      return this.calculate(tot, item.getPrice().getBasePrice()[priceType]());
    }, 0);
  }

  private static calculate(total: number, price: number): number {
    return parseFloat((total + price).toFixed(2));
  }

  private static mapToPrice(orderItem: OrderItem, isSoho: boolean): Price {
    const priceBuilder = new PriceBuilder()
      .withBasePrice(new PriceBuilder().withOneTimePrice(0).withRecurringPrice(0).withSummaryPrice(0).build())
      .withDiscountedPrice(new PriceBuilder().withOneTimePrice(0).withRecurringPrice(0).build());

    const pricedOrderItem = orderItem.orderItems?.find((orderItem) => orderItem.action === OrderItemActionEnum.ADD);
    if (pricedOrderItem?.prices) {
      const oneTimePrice = this.getOneTimePrice(
        pricedOrderItem,
        isSoho,
        isSoho ? 'oneTimeTotalWithoutTaxes' : 'oneTimeTotal'
      );
      const discountedPrice = this.getOneTimePrice(
        pricedOrderItem,
        isSoho,
        isSoho ? 'oneTimeDiscountedWithoutTaxes' : 'oneTimeDiscounted'
      );

      const recurrentTotal = this.formatPrice(
        isSoho ? pricedOrderItem.prices.recurrentTotalWithoutTaxes.value : pricedOrderItem.prices.recurrentTotal.value
      );
      const recurrentDiscounted = this.formatPrice(
        isSoho
          ? pricedOrderItem.prices.recurrentDiscountedWithoutTaxes.value
          : pricedOrderItem.prices.recurrentDiscounted.value
      );
      priceBuilder
        .withBasePrice(
          new PriceBuilder()
            .withOneTimePrice(parseFloat(oneTimePrice))
            .withRecurringPrice(parseFloat(recurrentTotal))
            .withSummaryPrice(parseFloat(oneTimePrice) + parseFloat(recurrentTotal))
            .build()
        )
        .withDiscountedPrice(
          new PriceBuilder()
            .withOneTimePrice(parseFloat(discountedPrice))
            .withRecurringPrice(parseFloat(recurrentDiscounted))
            .build()
        );
    }
    return priceBuilder.build();
  }

  private static getOneTimePrice(orderItem: OrderItem, isSoho: boolean, defaultPriceField: string): string {
    let price;
    if (orderItem.prices) {
      const upfrontPaymentTotal = isSoho
        ? orderItem.prices.upfrontPaymentTotalWithoutTaxes?.value
        : orderItem.prices.upfrontPaymentTotal?.value;
      price =
        upfrontPaymentTotal && upfrontPaymentTotal !== '0.0000'
          ? upfrontPaymentTotal
          : orderItem.prices[defaultPriceField]?.value;
    }
    return this.formatPrice(price);
  }

  private static formatPrice(price: string | undefined): string {
    if (price === undefined) {
      return '0.00';
    }
    return price.indexOf(',') !== 0 ? price.replace(',', '.') : price;
  }
}
