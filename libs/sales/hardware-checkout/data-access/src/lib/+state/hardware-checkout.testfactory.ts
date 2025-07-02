import { each, makeFactory, Sync } from 'factory.ts';

import { OrderItemActionEnum } from '../enums/order-item-action.enum';
import {
  CustomerLocation,
  DeliveryMethod,
  DeliveryMethods,
  DeliveryOrderItem,
  DiscountItem,
  OrderItem,
  OrderItemOffer,
  Price,
  Prices,
  Rule,
  SalesOrder,
  StandaloneDeliveryItem,
  ValidationElement,
} from '../interfaces/sales-order.interface';
import { ValidationElementEnum } from '../enums/validation-element.enum';

export const ruleFactory = Sync.makeFactory<Rule>({
  targetOrderItemIds: ['9168485989613270995'],
  discountAmount: {
    currency: {
      name: 'Euro',
      code: 'EUR',
    },
    value: '90',
  },
  discount: {
    name: 'Discount Telenet Customer Price',
    id: '9155501914465272430',
  },
  slotName: 'Basic Discount Slots',
  id: '-27280',
});

export const validationElementsFactory = Sync.makeFactory<ValidationElement>({
  targetOrderItemId: '9168485984313270983',
  typeOfProblem: ValidationElementEnum.FEASIBILITY_CHECK_REQUIRED,
});

export const offerTestFactory = Sync.makeFactoryWithRequired<OrderItemOffer, 'id'>({
  code: 'code',
  businessDomains: [],
});

export const priceTestFactory = Sync.makeFactory<Price>({
  currency: {
    name: 'Euro',
    code: 'EUR',
  },
  value: '100',
});

export const pricesTestFactory = Sync.makeFactory<Prices>({
  recurrentTax: priceTestFactory.build(),
  oneTimeDiscountedWithoutTaxes: priceTestFactory.build(),
  oneTimeDiscounted: priceTestFactory.build(),
  recurrentDiscount: priceTestFactory.build(),
  oneTimeDiscount: priceTestFactory.build(),
  recurrentTotal: priceTestFactory.build(),
  upfrontPaymentTotalForHomeDeliveryWithoutTaxes: priceTestFactory.build(),
  upfrontPaymentTotalForSecuredHomeDeliveryEquipment: priceTestFactory.build(),
  recurrentDiscountedWithoutTaxes: priceTestFactory.build(),
  oneTimeDiscountedWithoutUpfrontWithoutTaxes: priceTestFactory.build(),
  recurrentDiscounted: priceTestFactory.build(),
  upfrontPaymentTotal: priceTestFactory.build(),
  oneTimeInitialWithoutUpfront: priceTestFactory.build(),
  upfrontPaymentTotalWithoutTaxes: priceTestFactory.build(),
  oneTimeDiscountWithoutTaxes: priceTestFactory.build(),
  oneTimeTax: priceTestFactory.build(),
  oneTimeDiscountedWithoutUpfront: priceTestFactory.build(),
  recurrentDiscountWithoutTaxes: priceTestFactory.build(),
  upfrontPaymentDiscountedWithoutTaxes: priceTestFactory.build(),
  upfrontPaymentInitial: priceTestFactory.build(),
  oneTimeTotal: priceTestFactory.build(),
  upfrontPaymentDiscounted: priceTestFactory.build(),
  oneTimeTotalWithoutTaxes: priceTestFactory.build(),
  recurrentTotalWithoutTaxes: priceTestFactory.build(),
});

export const discountItemFactory = Sync.makeFactory<DiscountItem>({
  id: each((i) => i.toString(2)),
  discountId: each((i) => i.toString(2)),
  name: 'Discount Telenet Customer Price',
  targetOrderItems: [],
});

export const orderItemTestFactory = Sync.makeFactory<OrderItem>({
  action: OrderItemActionEnum.ADD,
  id: each((i) => i.toString(2)),
  customerProductId: '',
  offer: offerTestFactory.build({ id: '99999999' }),
  name: 'Testphone',
  orderItems: [],
  chars: {
    'Item Code': '',
    'Postal Code': '',
    Street: '',
  },
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

const orderItemWithDiscountTestFactory = orderItemTestFactory.extend({
  name: 'Discounted testphone',
  prices: pricesTestFactory.build({
    oneTimeDiscount: priceTestFactory.build({
      value: '25',
      currency: {
        name: 'Euro',
        code: 'EUR',
      },
    }),
  }),
});

export const hardwareOrderTLOItem = orderItemTestFactory.extend({
  id: '123456789',
  name: 'Hardware order item',
  orderItems: [],
  offer: offerTestFactory.build({
    id: '12345',
    businessDomains: [
      'Duo-Location',
      'Hardware TLO',
      'Skip for Takeover',
      'Retail BA',
      'OC: Skip Add OI from Business Case',
      'Skip CA Activation',
      'Supplementary Service',
    ],
  }),
});

export const hardwareOrderChildItem = orderItemTestFactory.extend({
  id: '987654321',
  name: 'Muvit homecharger pd 20w + qc 3.0 18w White',
  orderItems: [],
  offer: offerTestFactory.build({
    id: '12345',
    businessDomains: [],
  }),
  chars: {
    'Item Code': '',
  },
});

export const hardwareOrderItem = orderItemTestFactory.extend({
  id: '987654321',
  name: 'Muvit homecharger pd 20w + qc 3.0 18w White',
  orderItems: [hardwareOrderChildItem.build()],
  offer: offerTestFactory.build({
    id: '12345',
    businessDomains: [],
  }),
});

export const salesOrderFactory = makeFactory<SalesOrder>({
  id: '9168485854013261194',
  orderItems: [
    hardwareOrderTLOItem.build({
      orderItems: [
        orderItemTestFactory.build({
          orderItems: [
            orderItemTestFactory.build({
              name: 'Apple iphone 13',
              prices: pricesTestFactory.build({
                oneTimeDiscount: priceTestFactory.build({
                  value: '0.00',
                  currency: {
                    name: 'Euro',
                    code: 'EUR',
                  },
                }),
                oneTimeTotal: priceTestFactory.build({
                  value: '750',
                  currency: {
                    name: 'Euro',
                    code: 'EUR',
                  },
                }),
              }),
            }),
          ],
        }),
        orderItemTestFactory.build({
          orderItems: [
            orderItemWithDiscountTestFactory.build({
              name: 'Airpods',
              prices: pricesTestFactory.build({
                oneTimeTotal: priceTestFactory.build({
                  value: '125',
                  currency: {
                    name: 'Euro',
                    code: 'EUR',
                  },
                }),
                oneTimeDiscount: priceTestFactory.build({
                  value: '25',
                  currency: {
                    name: 'Euro',
                    code: 'EUR',
                  },
                }),
                oneTimeDiscounted: priceTestFactory.build({
                  value: '100',
                  currency: {
                    name: 'Euro',
                    code: 'EUR',
                  },
                }),
              }),
            }),
          ],
        }),
        orderItemTestFactory.build({
          orderItems: [
            orderItemWithDiscountTestFactory.build({
              name: 'Iphone cable',
              prices: pricesTestFactory.build({
                oneTimeTotal: priceTestFactory.build({
                  value: '50',
                  currency: {
                    name: 'Euro',
                    code: 'EUR',
                  },
                }),
                oneTimeDiscount: priceTestFactory.build({
                  value: '15',
                  currency: {
                    name: 'Euro',
                    code: 'EUR',
                  },
                }),
                oneTimeDiscounted: priceTestFactory.build({
                  value: '35',
                  currency: {
                    name: 'Euro',
                    code: 'EUR',
                  },
                }),
              }),
            }),
          ],
        }),
      ],
    }),
  ],
  rules: [],
  price: pricesTestFactory.build(),
  discountItems: discountItemFactory.buildList(5),
  validationElements: [],
});

export const salesOrderFactoryWithHardwareTlo = salesOrderFactory.extend({
  orderItems: [hardwareOrderTLOItem.build()],
});

export const customerLocationFactory = Sync.makeFactory<CustomerLocation>({
  id: '1',
  name: 'test',
  address: {
    name: 'test',
    id: '1',
  },
  easySwitchId: '123456791',
  isFleetLocation: false,
  isPseudoLocation: false,
  easySwitchInUse: false,
});

const deliveryOrderItemFactory = makeFactory<DeliveryOrderItem>({
  name: '',
  id: '',
});

const deliveryMethodFactory = makeFactory<DeliveryMethod>({
  name: 'Home delivery Telenet hardware (CVP)',
  id: '9158094744165997291',
});

export const standaloneDeliveryItemFactory = makeFactory<StandaloneDeliveryItem>({
  deliveryOrderItem: deliveryOrderItemFactory.build(),
  deliveryMethods: [deliveryMethodFactory.build()],
});
export const deliveryMethodsFactory = makeFactory<DeliveryMethods>({
  standaloneDeliveryItems: [standaloneDeliveryItemFactory.build()],
});
