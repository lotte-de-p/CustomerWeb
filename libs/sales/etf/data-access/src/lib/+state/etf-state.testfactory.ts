import { each, makeFactory, Sync } from 'factory.ts';
import { EtfState } from './etf.state';
import { CustomerDiscounts, UsedSlot } from '../interfaces/customer-discounts.interface';
import { OrderItemWithDiscount } from '../interfaces/order-item-with-discount.interface';
import { Price, pricesTestFactory, priceTestFactory, Rule, RuleDiscount } from '@sales/hardware-checkout/data-access';
import { faker } from '@faker-js/faker';

const currencyStateFactory = makeFactory<{
  name: string;
  code: string;
}>({
  name: 'Euro',
  code: 'EU',
});

const priceStateFactory = makeFactory<Price>({
  currency: currencyStateFactory.build(),
  value: '50',
});

const ruleDiscountStateFactory = Sync.makeFactory<RuleDiscount>({
  name: 'Discount Telenet Customer Price',
  id: '9155501914465272430',
});

const ruleStateFactory = Sync.makeFactory<Rule>({
  id: '-23264',
  targetOrderItemIds: [],
  slotName: 'Basic Discount Slots',
  discount: ruleDiscountStateFactory.build(),
  discountAmount: priceStateFactory.build(),
});

let id = '';

export const orderItemsWithDiscountStateFactory = Sync.makeFactory<OrderItemWithDiscount>({
  id: Sync.each(() => {
    id = faker.number.int({ min: 90000000, max: 99999999 }).toString(10);
    return id;
  }),
  name: 'TestPhone 15',
  rule: ruleStateFactory.build({ targetOrderItemIds: [id] }),
  showEtfOptions: false,
  hasMadeASelection: false,
  prices: pricesTestFactory.build({
    oneTimeDiscount: priceTestFactory.build({
      value: '0.00',
      currency: {
        name: 'Euro',
        code: 'EUR',
      },
    }),
    oneTimeDiscountWithoutTaxes: priceTestFactory.build({
      value: '0.00',
      currency: {
        name: 'Euro',
        code: 'EUR',
      },
    }),
  }),
});

export const usedSlotStateFactory = Sync.makeFactory<UsedSlot>({
  id: each((i) => i.toString(10)),
  name: 'Apple iPhone 14 Mini 128GB Pink',
  discountSlotType: 'Basic',
  obligationPeriod: '12',
  endDateOfContract: faker.date.soon({ refDate: '2023-01-01T00:00:00.000Z' }).toString(),
  initialPrice: {
    currency: currencyStateFactory.build(),
    value: '759.0000',
  },
  discountedPrice: {
    currency: currencyStateFactory.build(),
    value: '699.0000',
  },
  etf: {
    currency: currencyStateFactory.build(),
    value: '50.0000',
  },
  appliedDiscount: {
    name: 'Discount Telenet Customer Price',
    id: each<string>((i) => i.toString(10)).build(0),
  },
  shouldBeTerminated: undefined,
});

export const customerDiscountFactory = makeFactory<CustomerDiscounts>({
  basicDiscountSlots: {
    availableSlots: '0',
    startDateOfElegibility: faker.date.recent().toString(),
    totalAvailableSlotsBCA: '5',
    totalAvailableSlotsRCA: '5',
  },
  availableOnTopDisountSlots: [],
  usedSlots: usedSlotStateFactory.buildList(5),
  historicalRecords: [],
});

export const etfStateTestFactory = makeFactory<EtfState>({
  orderItemsWithDiscount: [
    orderItemsWithDiscountStateFactory.build({
      name: 'TestPhone 15 256gb Black',
    }),
    orderItemsWithDiscountStateFactory.build({
      name: 'TestPhone charger',
    }),
  ],
  usedSlots: usedSlotStateFactory.buildList(5),
});
