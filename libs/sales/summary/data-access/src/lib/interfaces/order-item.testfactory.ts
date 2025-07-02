import { Sync } from 'factory.ts';
import {
  EtfPrice,
  Price,
  summaryDiscount,
  SummaryOrderItem,
  SummaryOrderItemPrice,
  SummaryPrices,
} from './order-item.interface';

export const priceTestFactory = Sync.makeFactory<Price>({
  currency: {
    name: 'Euro',
    code: 'EUR',
  },
  value: '100',
});
export const etfPriceTestFactory = Sync.makeFactory<EtfPrice>({
  labelKey: 'Apple',
  productName: 'Iphone',
  price: priceTestFactory.build(),
  isMonthly: true,
});
export const pricesTestFactory = Sync.makeFactory<SummaryOrderItemPrice>({
  total: priceTestFactory.build(),
  discount: priceTestFactory.build(),
  discounted: priceTestFactory.build(),
});
export const orderItemTestFactory = Sync.makeFactory<SummaryOrderItem>({
  id: '1',
  name: 'Testphone',
  prices: pricesTestFactory.build({
    discount: priceTestFactory.build({
      value: '0.00',
      currency: {
        name: 'Euro',
        code: 'EUR',
      },
    }),
  }),
});
export const summaryDiscountFactory = Sync.makeFactory<summaryDiscount>({
  price: priceTestFactory.build(),
  label: 'testlabel',
});
export const summaryPricesTestFactory = Sync.makeFactory<SummaryPrices>({
  totals: {
    deliveryCost: priceTestFactory.build(),
    upfrontCost: priceTestFactory.build(),
    etfTotal: priceTestFactory.build(),
    etfPrices: [etfPriceTestFactory.build()],
  },
  subTotals: {
    deliveryCost: priceTestFactory.build(),
    upfrontCost: priceTestFactory.build(),
    etfTotal: priceTestFactory.build(),
    etfPrices: [etfPriceTestFactory.build()],
  },
  vatInclusive: false,
});
