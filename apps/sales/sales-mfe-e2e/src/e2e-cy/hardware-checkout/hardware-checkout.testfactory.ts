import { faker } from '@faker-js/faker';
import { customerDiscountFactory, UsedSlot, usedSlotStateFactory } from '@sales/etf/data-access';
import { addressUnitTestfactory, parentAddressUnitTestfactory } from '@sales/shared/address/data-access';
import {
  billingAccountTestfactory,
  customerAccountDetailsFactory,
  defaultBillingAccountFactory,
  deliveryMethodsFactory,
  DiscountItem,
  discountItemFactory,
  hardwareOrderChildItem,
  hardwareOrderItem,
  hardwareOrderTLOItem,
  ncErrorTestfactory,
  offerTestFactory,
  OrderItem,
  orderItemTestFactory,
  PaymentResponseDataInterface,
  personalIdentityResponseTestFactory,
  Rule,
  ruleFactory,
  salesOrderFactoryWithHardwareTlo,
  StandaloneDeliveryItem,
  standaloneDeliveryItemFactory,
  validationElementsFactory,
} from '@sales/hardware-checkout/data-access';
import { OrderItemActionEnum } from '@sales-mfe/app/hardware-checkout/enums/order-item-action.enum';
import { BusinessDomainsEnum } from '@sales-mfe/app/hardware-checkout/enums/business-domains.enum';
import {
  RawImagesInterfaceFactory,
  RawOmapiQueryProductInterfaceData,
  rawOmapiQueryProductInterfaceDataFactory,
  rawOmapiQueryProductTestfactory,
  rawVariantsInterfaceFactory,
} from '@telenet/ng-lib-omapi-query';
import { rawLoginDetailsInterfaceFactory } from '@telenet/ng-lib-ocapi';

interface Discount {
  id: string;
}

interface CharsInterface {
  Street: string;
  'Postal Code': string;
  'House Number': string;
  'Box Number': string;
  'First Name': string;
  'Last Name': string;
}

interface Product {
  id: string;
  itemCode?: string;
  name: string;
  customerProductItemId: string;
  discount?: Discount;
  chars?: CharsInterface;
  isBigItem?: boolean;
}

interface SalesOrderStub {
  existingProducts?: Product[];
  newProducts?: Product[];
  deliveryOrderItem?: Product;
  status?: string;
}

export const createExistingProducts = (data: SalesOrderStub) => {
  let existingProducts: OrderItem[] = [];
  if (data.existingProducts) {
    existingProducts = data.existingProducts.map((existingProduct) => {
      return hardwareOrderItem.build({
        action: OrderItemActionEnum.NONE,
        id: existingProduct.id,
        name: existingProduct.name,
        customerProductId: existingProduct.customerProductItemId,
        orderItems: [
          hardwareOrderChildItem.build({
            id: existingProduct.id,
          }),
        ],
      });
    });
  }
  return existingProducts;
};

export const createNewProducts = (data: SalesOrderStub) => {
  let newProducts: OrderItem[] = [];
  if (data.newProducts) {
    // For each new product, create a child order item with action ADD
    newProducts = data.newProducts.map((newProduct) => {
      return hardwareOrderItem.build({
        action: OrderItemActionEnum.ADD,
        id: newProduct.id,
        name: newProduct.name,
        customerProductId: newProduct.customerProductItemId,
        chars: {
          'Item Code': newProduct.itemCode || '',
        },
        orderItems: [
          hardwareOrderChildItem.build({
            id: newProduct.id,
            chars: {
              'Item Code': newProduct.itemCode || '',
            },
          }),
        ],
      });
    });
  }
  return newProducts;
};

export const createDeliveryOrderItems = (data: SalesOrderStub) => {
  let deliveryOrderItems: OrderItem[] = [];
  if (data.deliveryOrderItem) {
    deliveryOrderItems = [
      hardwareOrderItem.build({
        action: OrderItemActionEnum.ADD,
        id: data.deliveryOrderItem.id,
        name: data.deliveryOrderItem.name,
        customerProductId: data.deliveryOrderItem.customerProductItemId,
        offer: offerTestFactory.build({
          id: '88888888',
          businessDomains: [BusinessDomainsEnum.DELIVERY_METHOD],
        }),
        chars: {
          Street: '9148294798613629990',
          'Postal Code': '9148294798613629994',
          'Delivery Address': 'test delivery address',
          'Delivery Type': '12345',
          'Municipality/Sub-municipality': '12345',
          'House Number': '1',
        },
      }),
    ];
  }
  return deliveryOrderItems;
};

export const createSalesOrderStub = (
  data: SalesOrderStub,
  isSalesOrderCreation = false,
  productsToDiscount: string[] = []
) => {
  // If the customer has existing products, create a hardware TLO with Action none
  // If the customer does not have existing products, create a hardware TLO with action ADD
  let salesOrderAction = OrderItemActionEnum.NONE;
  if (data.newProducts && !data.existingProducts) {
    salesOrderAction = OrderItemActionEnum.ADD;
  }

  const existingProducts = createExistingProducts(data);
  const newProducts = createNewProducts(data);
  const deliveryOrderItems = createDeliveryOrderItems(data);

  let rules: Rule[] = [];
  const discounts: DiscountItem[] = discountItemFactory.buildList(5);

  if (data.newProducts) {
    rules = data.newProducts
      .filter((newProduct) => {
        return newProduct.discount;
      })
      .map((newProduct) => {
        if (newProduct.discount) {
          return ruleFactory.build({
            id: newProduct.discount.id,
            targetOrderItemIds: [newProduct.id],
          });
        }
        return ruleFactory.build({
          id: '',
          targetOrderItemIds: [newProduct.id],
        });
      });

    productsToDiscount.forEach((productId) => {
      discounts.push(
        discountItemFactory.build({
          name: 'Telenet klantenprijs',
          discountId: productId,
          targetOrderItems: [
            orderItemTestFactory.build({
              id: productId,
            }),
          ],
        })
      );
    });
  }

  let hardwareTLOItem: OrderItem[] = [
    hardwareOrderTLOItem.build({
      action: salesOrderAction,
      orderItems: [...existingProducts, ...newProducts],
    }),
  ];

  if (!data.existingProducts && isSalesOrderCreation) {
    hardwareTLOItem = [];
  }

  return salesOrderFactoryWithHardwareTlo.build({
    discountItems: discounts,
    rules: rules,
    validationElements: [validationElementsFactory.build()],
    orderItems: [...hardwareTLOItem, ...deliveryOrderItems],
    status: data.status,
  });
};

export const createDiscountStub = (data: SalesOrderStub) => {
  // For each existing item with a discount, generate an usedslot where the id matches the customerproductid
  let numberOfExistingDiscounts = 0;
  let usedSlots: UsedSlot[] = [];

  if (data.existingProducts) {
    numberOfExistingDiscounts = data.existingProducts.filter((existingProduct) => existingProduct.discount).length;
    const test = data.existingProducts.filter((existingProduct) => existingProduct.discount);
    if (test) {
      usedSlots = test.map((existingProduct) => {
        if (existingProduct.discount) {
          return usedSlotStateFactory.build({
            name: existingProduct.name,
            id: existingProduct.discount.id,
          });
        }
        return usedSlotStateFactory.build({
          name: existingProduct.name,
          id: '',
        });
      });
    }
  }

  return customerDiscountFactory.build({
    basicDiscountSlots: {
      availableSlots: (5 - numberOfExistingDiscounts).toString(10),
      startDateOfElegibility: faker.date.recent().toString(),
      totalAvailableSlotsBCA: numberOfExistingDiscounts.toString(10),
      totalAvailableSlotsRCA: numberOfExistingDiscounts.toString(10),
    },
    availableOnTopDisountSlots: [],
    usedSlots: usedSlots,
    historicalRecords: [],
  });
};

export const createDeliveryMethodsStub = (data: SalesOrderStub) => {
  let deliveryMethods: StandaloneDeliveryItem[] = [];
  if (data.newProducts) {
    // For each new product, create a child order item with action ADD
    deliveryMethods = data.newProducts.map((newProduct) => {
      return standaloneDeliveryItemFactory.build({
        deliveryOrderItem: {
          id: newProduct.id,
        },
      });
    });
  }

  return deliveryMethodsFactory.build({
    standaloneDeliveryItems: deliveryMethods,
  });
};

export const createOmapiProductStub = (data: SalesOrderStub) => {
  let omapiProducts: RawOmapiQueryProductInterfaceData[] = [];
  if (data.newProducts) {
    // For each new product, create a child order item with action ADD
    omapiProducts = data.newProducts.map((newProduct) => {
      return rawOmapiQueryProductInterfaceDataFactory.build({
        variants: [
          rawVariantsInterfaceFactory.build({
            productId: newProduct.itemCode,
            images: [RawImagesInterfaceFactory.build()],
            extraAtHomeDelivery: newProduct.isBigItem || false,
            tag: {
              telenet: {
                options: [
                  {
                    attributeKey: 'back_order_label',
                    backOrderDescription: {
                      localizedContent: [
                        {
                          key: '',
                          locale: 'nl',
                          value: ['Back order'],
                        },
                      ],
                    },
                  },
                ],
              },
            },
          }),
        ],
      });
    });
  }

  return rawOmapiQueryProductTestfactory.build({
    products: omapiProducts,
  });
};

export const customerWithFiveUsedDiscountsBuyingTwoNewProducts: SalesOrderStub = {
  existingProducts: [
    {
      id: '1',
      name: 'Apple Iphone 9',
      customerProductItemId: '1',
      itemCode: '1',
      discount: {
        id: '1',
      },
    },
    {
      id: '2',
      name: 'Apple Iphone X',
      itemCode: '2',
      customerProductItemId: '2',
      discount: {
        id: '2',
      },
    },
    {
      id: '3',
      name: 'Apple Iphone 11',
      itemCode: '3',

      customerProductItemId: '3',
      discount: {
        id: '3',
      },
    },
    {
      id: '4',
      name: 'Apple Iphone 12',
      itemCode: '4',

      customerProductItemId: '4',
      discount: {
        id: '4',
      },
    },
    {
      id: '5',
      name: 'Apple Iphone 13 (mini)',
      itemCode: '5',

      customerProductItemId: '5',
      discount: {
        id: '5',
      },
    },
  ],
  newProducts: [
    {
      id: '1000',
      name: 'Apple Iphone 15',
      itemCode: '3300309',
      customerProductItemId: '1000',
      discount: {
        id: '9155501914465272430',
      },
    },
    {
      id: '1001',
      name: 'Apple Iphone 15',
      itemCode: '2119684',
      customerProductItemId: '1001',
      discount: {
        id: '1001',
      },
    },
  ],
  deliveryOrderItem: {
    id: '5000',
    name: 'Apple Iphone 15',
    customerProductItemId: '5000',
  },
};

export const customerWithThreeUsedDiscountsBuyingTwoNewProducts: SalesOrderStub = {
  existingProducts: [
    {
      id: '1',
      name: 'Apple Iphone 9',
      customerProductItemId: '1',
      discount: {
        id: '1',
      },
    },
    {
      id: '2',
      name: 'Apple Iphone X',
      customerProductItemId: '2',
      discount: {
        id: '2',
      },
    },
    {
      id: '3',
      name: 'Apple Iphone 11',
      customerProductItemId: '3',
      discount: {
        id: '3',
      },
    },
  ],
  newProducts: [
    {
      id: '1000',
      name: 'Apple Iphone 15',
      customerProductItemId: '1000',
      discount: {
        id: '1000',
      },
    },
    {
      id: '1001',
      name: 'Apple Iphone 15 MAX',
      customerProductItemId: '1001',
      discount: {
        id: '1001',
      },
    },
  ],
  deliveryOrderItem: {
    id: '5000',
    name: 'Apple Iphone 15',
    customerProductItemId: '5000',
  },
};

export const customerWithNoHardwareItemsBuyingTwoNewProducts = (status?: string) => {
  return {
    newProducts: [
      {
        id: '1000',
        itemCode: '1000',
        name: 'Apple Iphone 15',
        customerProductItemId: '1000',
        discount: {
          id: '1000',
        },
      },
      {
        id: '1001',
        itemCode: '1001',
        name: 'Apple Iphone 15 MAX',
        customerProductItemId: '1001',
        discount: {
          id: '1001',
        },
      },
    ],
    deliveryOrderItem: {
      id: 'test',
      name: '',
      customerProductItemId: '',
      chars: {
        Street: '111111',
        'Postal Code': '222222',
        'House Number': '29',
        'Box Number': '1202',
        'First Name': 'Alexandre',
        'Last Name': 'Bunschoten',
      },
    },
    status: status,
    hasBigItem: true,
  };
};

export const customerWithNoHardwareItemsBuyingTwoNewProductsOfWhichOneBigItem: SalesOrderStub = {
  newProducts: [
    {
      id: '1000',
      name: 'Apple Iphone 15',
      itemCode: '3300309',
      customerProductItemId: '1000',
      discount: {
        id: '9155501914465272430',
      },
    },
    {
      id: '1001',
      name: 'Apple Iphone 15',
      itemCode: '2119684',
      customerProductItemId: '1001',
      discount: {
        id: '1001',
      },
      isBigItem: true,
    },
  ],
};

export const ingenicoRequest: PaymentResponseDataInterface = {
  signature: 'signature',
  payment: {
    template: 'template',
    language: 'NL',
    device: 'computer',
    email: 'test@test.com',
    amount: '10000',
    currency: 'EUR',
    ownerAddress: 'Liersesteenweg 4',
    ownerZip: '2800',
    ownerTown: 'Mechelen',
    ownerCountry: 'BE',
    ownerContactNumber: '0472404040',
    transactionId: '1234567',
    paymentServiceProviderId: 'NCeShopTelenet',
    acceptURL: 'https://www.local.telenet.be',
    cancelURL: 'https://www.local.telenet.be',
    declineURL: 'https://www.local.telenet.be',
    exceptionURL: 'https://www.local.telenet.be',
    paramPlus: '',
    paramVar: '',
    contactName: 'Tony Stark',
  },
};

export const Having5UsedDiscountsBuying2NewItems = () => {
  cy.intercept(
    {
      url: /ocapi\/public\/api\/mytelenet-web-sales-checkout-rp\/v1\/orderManagement\/salesOrder\/.*\?isAbandonable=true/,
      method: 'PUT',
    },
    {
      body: createSalesOrderStub(customerWithFiveUsedDiscountsBuyingTwoNewProducts),
    }
  );
  cy.intercept('ocapi/oauth/userdetails', {
    body: rawLoginDetailsInterfaceFactory.build(),
  });
  cy.intercept('ocapi/public/api/mytelenet-web-sales-checkout-rp/v1/customerManagement/discountSlots', {
    body: createDiscountStub(customerWithFiveUsedDiscountsBuyingTwoNewProducts),
  });
  cy.intercept('omapi-query/public/hc-products/v1/products?itemcodes=*', {
    body: createOmapiProductStub(customerWithFiveUsedDiscountsBuyingTwoNewProducts),
  });
  cy.intercept('telenet/data/municipalities?*', {
    body: [{ postalCode: '2800', location: 'Mechelen' }],
  });
  cy.intercept('ocapi/public/api/mytelenet-web-sales-checkout-rp/v1/customerManagement/customerAccount', {
    body: customerAccountDetailsFactory.build(),
  });
  cy.intercept('ocapi/public/api/mytelenet-web-sales-checkout-rp/v1/addressManagement/address/9165656989113844238', {
    body: addressUnitTestfactory.build(),
  });
  cy.intercept('ocapi/public/api/mytelenet-web-sales-checkout-rp/v1/addressManagement/address/9150757958213958076', {
    body: addressUnitTestfactory.build(),
  });
  cy.intercept('ocapi/public/api/mytelenet-web-sales-checkout-rp/v1/billingManagement/customerAccount/billingAccount', {
    body: [defaultBillingAccountFactory.build(), billingAccountTestfactory.build()],
  });
  cy.intercept(
    'ocapi/public/api/mytelenet-web-sales-checkout-rp/v1/orderManagement/salesOrder/9168485854013261194/orderItem/1',
    {
      body: createSalesOrderStub(customerWithFiveUsedDiscountsBuyingTwoNewProducts),
    }
  );
  cy.intercept(
    'ocapi/public/api/mytelenet-web-sales-checkout-rp/v1/orderManagement/salesOrder/9168485854013261194/discount',
    {
      body: createSalesOrderStub(customerWithFiveUsedDiscountsBuyingTwoNewProducts),
    }
  );
  cy.intercept(
    'ocapi/public/api/mytelenet-web-sales-checkout-rp/v1/orderManagement/salesOrder/9168485854013261194/orderItem/123456789/hwcvpOrderItem',
    (req) => {
      req.reply({
        body: createSalesOrderStub(customerWithFiveUsedDiscountsBuyingTwoNewProducts),
      });
    }
  );
  cy.intercept(
    'ocapi/public/api/mytelenet-web-sales-checkout-rp/v1/orderManagement/salesOrder/9168485854013261194',
    (req) => {
      req.reply({
        body: createSalesOrderStub(customerWithFiveUsedDiscountsBuyingTwoNewProducts),
      });
    }
  );
  cy.intercept(
    'ocapi/public/api/mytelenet-web-sales-checkout-rp/v1/orderManagement/salesOrder/9168485854013261194/checkoutDelivery',
    {
      body: createSalesOrderStub(customerWithFiveUsedDiscountsBuyingTwoNewProducts),
    }
  );
  cy.intercept(
    'ocapi/public/api/mytelenet-web-sales-checkout-rp/v1/orderManagement/customerAccount/location/123456789/salesOrder',
    {
      body: createSalesOrderStub(customerWithFiveUsedDiscountsBuyingTwoNewProducts),
    }
  );
  cy.intercept(
    'ocapi/public/api/mytelenet-web-sales-checkout-rp/v1/orderManagement/salesOrder/9168485854013261194/deliveryMethods',
    {
      body: createDeliveryMethodsStub(customerWithFiveUsedDiscountsBuyingTwoNewProducts),
    }
  );
  cy.intercept(
    'ocapi/public/api/mytelenet-web-sales-checkout-rp/v1/orderManagement/salesOrder/9168485854013261194/calculateDelivery',
    {
      body: createSalesOrderStub(customerWithFiveUsedDiscountsBuyingTwoNewProducts),
    }
  );
  cy.intercept(
    'ocapi/public/api/mytelenet-web-sales-checkout-rp/v1/orderManagement/salesOrder/9168485854013261194/eligibilityCheck',
    {
      body: [],
    }
  );
  cy.intercept(
    'ocapi/public/api/mytelenet-web-sales-checkout-rp/v1/orderManagement/salesOrder/9168485854013261194/document/cs/generationRequired',
    {
      body: { requiredFromOE: false, isRequired: true },
    }
  );
  cy.intercept(
    'ocapi/public/api/mytelenet-web-sales-checkout-rp/v1/orderManagement/salesOrder/9168485854013261194/document/cs/generation',
    {
      body: { uuid: '624c5754-a414-497e-8895-182a3eb134ba' },
    }
  );
  cy.intercept(
    'ocapi/public/api/mytelenet-web-sales-checkout-rp/v1/orderManagement/salesOrder/9168485854013261194/submit',
    {
      body: createSalesOrderStub(customerWithNoHardwareItemsBuyingTwoNewProducts()),
    }
  );
  cy.intercept('ocapi/public/api/mytelenet-web-sales-checkout-rp/v1/customerManagement/customerAccount/transactions', {
    body: createSalesOrderStub(customerWithNoHardwareItemsBuyingTwoNewProducts()),
  });

  cy.intercept(
    'ocapi/public/api/mytelenet-web-sales-checkout-rp/v1/addressManagement/address?addressUnitTypeId=9148294798613629978&name=*&parentAddressUnit.id=9165656195913790999',
    {
      body: addressUnitTestfactory.buildList(2),
    }
  );
  cy.intercept(
    'ocapi/public/api/mytelenet-web-sales-checkout-rp/v1/addressManagement/address?addressUnitTypeId=9148294798613629990&name.c=*&postalcode=2800',
    {
      body: [
        addressUnitTestfactory.build({
          id: '9150757941913951029',
          name: 'Begijnenweide',
          nameDU: 'Begijnenweide',
        }),
        addressUnitTestfactory.build({
          id: '9150757942813011604',
          name: 'Begijnenkerkhof',
          nameDU: 'Begijnenkerkhof',
        }),
        addressUnitTestfactory.build({
          id: '9150757943113033212',
          name: 'Begijnenstraat',
          nameDU: 'Begijnenstraat',
        }),
      ],
    }
  );
  cy.intercept(
    'ocapi/public/api/mytelenet-web-sales-checkout-rp/v1/addressManagement/address?postalCode=2800&=parentAddressUnit.id=9145466696013668158',
    {
      body: [
        addressUnitTestfactory.build({
          id: '9150757941913951029',
          name: 'Begijnenweide',
          nameDU: 'Begijnenweide',
        }),
        addressUnitTestfactory.build({
          id: '9150757942813011604',
          name: 'Begijnenkerkhof',
          nameDU: 'Begijnenkerkhof',
        }),
        addressUnitTestfactory.build({
          id: '9150757943113033212',
          name: 'Begijnenstraat',
          nameDU: 'Begijnenstraat',
        }),
      ],
    }
  );
  cy.intercept(
    'ocapi/public/api/mytelenet-web-sales-checkout-rp/v1/addressManagement/address?addressUnitTypeId=9148294798613629978&name.s=17767&parentAddressUnit.id=9165656195913790999',
    {
      body: [
        addressUnitTestfactory.build({
          id: '9150757958413977478',
          subHouseNumber: 'A',
          name: '50',
        }),
        addressUnitTestfactory.build({
          id: '9150757958213958076',
          subHouseNumber: 'A',
          boxNumber: '103',
          floor: '1',
          name: '50',
        }),
        addressUnitTestfactory.build({
          id: '9150757957613922561',
          subHouseNumber: '102',
          name: '50',
        }),
      ],
    }
  );
  cy.intercept(
    'ocapi/public/api/mytelenet-web-sales-checkout-rp/v1/addressManagement/address?parentAddressUnit.id=9150757941913951029&name=Begijnenstraat&addressUnitTypeId=9148294798613629990',
    {
      body: [
        addressUnitTestfactory.build({
          id: '9150757958413977478',
          subHouseNumber: 'A',
          name: '50',
        }),
        addressUnitTestfactory.build({
          id: '9150757958213958076',
          subHouseNumber: 'A',
          boxNumber: '103',
          floor: '1',
          name: '50',
        }),
        addressUnitTestfactory.build({
          id: '9150757957613922561',
          subHouseNumber: '102',
          name: '50',
        }),
      ],
    }
  );
  cy.intercept(
    'ocapi/public/api/mytelenet-web-sales-checkout-rp/v1/addressManagement/address?addressUnitTypeId=9148294798613629978&name.s=&parentAddressUnit.id=9150757958413977478',
    {
      body: [
        addressUnitTestfactory.build({
          id: '9150757958413977478',
          subHouseNumber: 'A',
          name: '50',
        }),
        addressUnitTestfactory.build({
          id: '9150757958213958076',
          subHouseNumber: 'A',
          boxNumber: '103',
          floor: '1',
          name: '50',
        }),
        addressUnitTestfactory.build({
          id: '9150757957613922561',
          subHouseNumber: '102',
          name: '50',
        }),
      ],
    }
  );
  cy.intercept(
    'ocapi/public/api/mytelenet-web-sales-checkout-rp/v1/addressManagement/address?addressUnitTypeId=9148294798613629978&name.s=50&parentAddressUnit.id=9150757943113033212',
    {
      body: [
        addressUnitTestfactory.build({
          id: '9150757958413977478',
          subHouseNumber: 'A',
          name: '50',
        }),
        addressUnitTestfactory.build({
          id: '9150757958213958076',
          subHouseNumber: 'A',
          boxNumber: '103',
          floor: '1',
          name: '50',
        }),
        addressUnitTestfactory.build({
          id: '9150757957613922561',
          subHouseNumber: '102',
          name: '50',
        }),
      ],
    }
  );
  cy.intercept(
    'ocapi/public/api/mytelenet-web-sales-checkout-rp/v1/orderManagement/salesOrder/9168485854013261194/orderItem/*',
    {
      body: createSalesOrderStub(customerWithNoHardwareItemsBuyingTwoNewProducts()),
    }
  );
  cy.intercept('ocapi/public/api/sales-service/v2/pid', {
    body: personalIdentityResponseTestFactory.build(),
  });
  cy.intercept(
    'ocapi/public/api/mytelenet-web-sales-checkout-rp/v1/orderManagement/salesOrder/9168485854013261194/feasibilityCheck',
    {
      body: createSalesOrderStub(customerWithNoHardwareItemsBuyingTwoNewProducts()),
    }
  );
};

export const Having3UsedDiscountsBuying2NewItems = () => {
  cy.intercept('ocapi/oauth/userdetails', {
    body: rawLoginDetailsInterfaceFactory.build(),
  });
  cy.intercept('ocapi/public/api/mytelenet-web-sales-checkout-rp/v1/customerManagement/discountSlots', {
    body: createDiscountStub(customerWithThreeUsedDiscountsBuyingTwoNewProducts),
  });
  cy.intercept('telenet/data/municipalities?*', {
    body: [{ postalCode: '2800', location: 'Mechelen' }],
  });
  cy.intercept('omapi-query/public/hc-products/v1/products?itemcodes=*', {
    body: createOmapiProductStub(customerWithThreeUsedDiscountsBuyingTwoNewProducts),
  });
  cy.intercept(
    'ocapi/public/api/mytelenet-web-sales-checkout-rp/v1/orderManagement/salesOrder/9168485854013261194/discount',
    {
      body: createSalesOrderStub(customerWithThreeUsedDiscountsBuyingTwoNewProducts),
    }
  );
  cy.intercept('ocapi/public/api/mytelenet-web-sales-checkout-rp/v1/customerManagement/customerAccount', {
    body: customerAccountDetailsFactory.build(),
  });
  cy.intercept('ocapi/public/api/mytelenet-web-sales-checkout-rp/v1/addressManagement/address/9165656989113844238', {
    body: addressUnitTestfactory.build(),
  });
  cy.intercept('ocapi/public/api/mytelenet-web-sales-checkout-rp/v1/billingManagement/customerAccount/billingAccount', {
    body: [defaultBillingAccountFactory.build(), billingAccountTestfactory.build()],
  });
  cy.intercept(
    'ocapi/public/api/mytelenet-web-sales-checkout-rp/v1/orderManagement/salesOrder/9168485854013261194/orderItem/1',
    {
      body: [defaultBillingAccountFactory.build(), billingAccountTestfactory.build()],
    }
  );
  cy.intercept(
    'ocapi/public/api/mytelenet-web-sales-checkout-rp/v1/orderManagement/salesOrder/9168485854013261194/orderItem/123456789/hwcvpOrderItem',
    (req) => {
      req.reply({
        body: createSalesOrderStub(customerWithThreeUsedDiscountsBuyingTwoNewProducts),
      });
    }
  );
  cy.intercept(
    'ocapi/public/api/mytelenet-web-sales-checkout-rp/v1/orderManagement/salesOrder/9168485854013261194',
    (req) => {
      req.reply({
        body: createSalesOrderStub(customerWithThreeUsedDiscountsBuyingTwoNewProducts),
      });
    }
  );
  cy.intercept(
    'ocapi/public/api/mytelenet-web-sales-checkout-rp/v1/orderManagement/salesOrder/9168485854013261194/checkoutDelivery',
    {
      body: createSalesOrderStub(customerWithThreeUsedDiscountsBuyingTwoNewProducts),
    }
  );
  cy.intercept(
    'ocapi/public/api/mytelenet-web-sales-checkout-rp/v1/orderManagement/customerAccount/location/123456789/salesOrder',
    {
      body: createSalesOrderStub(customerWithThreeUsedDiscountsBuyingTwoNewProducts),
    }
  );
  cy.intercept(
    'ocapi/public/api/mytelenet-web-sales-checkout-rp/v1/orderManagement/salesOrder/9168485854013261194/deliveryMethods',
    {
      body: createDeliveryMethodsStub(customerWithThreeUsedDiscountsBuyingTwoNewProducts),
    }
  );
  cy.intercept(
    'ocapi/public/api/mytelenet-web-sales-checkout-rp/v1/orderManagement/salesOrder/9168485854013261194/calculateDelivery',
    {
      body: createSalesOrderStub(customerWithThreeUsedDiscountsBuyingTwoNewProducts),
    }
  );
  cy.intercept(
    'ocapi/public/api/mytelenet-web-sales-checkout-rp/v1/orderManagement/salesOrder/9168485854013261194/eligibilityCheck',
    {
      body: [],
    }
  );
  cy.intercept(
    'ocapi/public/api/mytelenet-web-sales-checkout-rp/v1/orderManagement/salesOrder/9168485854013261194/document/cs/generationRequired',
    {
      body: { requiredFromOE: false, isRequired: true },
    }
  );
  cy.intercept(
    'ocapi/public/api/mytelenet-web-sales-checkout-rp/v1/orderManagement/salesOrder/9168485854013261194/document/cs/generation',
    {
      body: { uuid: '624c5754-a414-497e-8895-182a3eb134ba' },
    }
  );
  cy.intercept(
    'ocapi/public/api/mytelenet-web-sales-checkout-rp/v1/orderManagement/salesOrder/9168485854013261194/submit',
    {
      body: createSalesOrderStub(customerWithNoHardwareItemsBuyingTwoNewProducts()),
    }
  );
  cy.intercept('ocapi/public/api/mytelenet-web-sales-checkout-rp/v1/customerManagement/customerAccount/transactions', {
    body: createSalesOrderStub(customerWithNoHardwareItemsBuyingTwoNewProducts()),
  });
  cy.intercept(
    'ocapi/public/api/mytelenet-web-sales-checkout-rp/v1/orderManagement/salesOrder/9168485854013261194/orderItem/*',
    {
      body: createSalesOrderStub(customerWithNoHardwareItemsBuyingTwoNewProducts()),
    }
  );
  cy.intercept(
    'ocapi/public/api/mytelenet-web-sales-checkout-rp/v1/orderManagement/salesOrder/9168485854013261194/feasibilityCheck',
    {
      body: createSalesOrderStub(customerWithNoHardwareItemsBuyingTwoNewProducts()),
    }
  );
  cy.intercept('ocapi/public/api/sales-service/v2/pid', {
    body: personalIdentityResponseTestFactory.build(),
  });
  cy.intercept(
    'ocapi/public/api/mytelenet-web-sales-checkout-rp/v1/addressManagement/address?addressUnitTypeId=9148294798613629978&name.s=17767&parentAddressUnit.id=9165656195913790999',
    {
      body: [
        addressUnitTestfactory.build({
          id: '9150757958413977478',
          subHouseNumber: 'A',
          name: '50',
        }),
        addressUnitTestfactory.build({
          id: '9150757958213958076',
          subHouseNumber: 'A',
          boxNumber: '103',
          floor: '1',
          name: '50',
        }),
        addressUnitTestfactory.build({
          id: '9150757957613922561',
          subHouseNumber: '102',
          name: '50',
        }),
      ],
    }
  );
};

export const HavingNoHardwareItemsBuying2NewItems = () => {
  cy.intercept('ocapi/oauth/userdetails', {
    body: rawLoginDetailsInterfaceFactory.build(),
  });
  cy.intercept('ocapi/public/api/mytelenet-web-sales-checkout-rp/v1/customerManagement/discountSlots', {
    body: createDiscountStub(customerWithNoHardwareItemsBuyingTwoNewProducts()),
  });
  cy.intercept('telenet/data/municipalities?*', {
    body: [{ postalCode: '2800', location: 'Mechelen' }],
  });
  cy.intercept('omapi-query/public/hc-products/v1/products?itemcodes=*', {
    body: createOmapiProductStub(customerWithNoHardwareItemsBuyingTwoNewProducts()),
  });
  cy.intercept(
    'ocapi/public/api/mytelenet-web-sales-checkout-rp/v1/orderManagement/salesOrder/9168485854013261194/discount',
    {
      body: createSalesOrderStub(customerWithNoHardwareItemsBuyingTwoNewProducts()),
    }
  );
  cy.intercept('ocapi/public/api/mytelenet-web-sales-checkout-rp/v1/orderManagement/salesOrder/9168485854013261194', {
    body: createSalesOrderStub(customerWithNoHardwareItemsBuyingTwoNewProducts()),
  });
  cy.intercept('ocapi/public/api/mytelenet-web-sales-checkout-rp/v1/customerManagement/customerAccount', {
    body: customerAccountDetailsFactory.build(),
  });
  cy.intercept('ocapi/public/api/mytelenet-web-sales-checkout-rp/v1/addressManagement/address/9165656989113844238', {
    body: addressUnitTestfactory.build(),
  });
  cy.intercept('ocapi/public/api/mytelenet-web-sales-checkout-rp/v1/billingManagement/customerAccount/billingAccount', {
    body: [defaultBillingAccountFactory.build(), billingAccountTestfactory.build()],
  });
  cy.intercept(
    'ocapi/public/api/mytelenet-web-sales-checkout-rp/v1/orderManagement/salesOrder/9168485854013261194/orderItem/1',
    {
      body: [defaultBillingAccountFactory.build(), billingAccountTestfactory.build()],
    }
  );
  cy.intercept(
    'ocapi/public/api/mytelenet-web-sales-checkout-rp/v1/orderManagement/salesOrder/9168485854013261194/orderItem/123456789/hwcvpOrderItem',
    (req) => {
      req.reply({
        body: createSalesOrderStub(customerWithNoHardwareItemsBuyingTwoNewProducts()),
      });
    }
  );
  cy.intercept(
    'ocapi/public/api/mytelenet-web-sales-checkout-rp/v1/orderManagement/salesOrder/9168485854013261194',
    (req) => {
      req.reply({
        body: createSalesOrderStub(customerWithNoHardwareItemsBuyingTwoNewProducts()),
      });
    }
  );
  cy.intercept(
    'ocapi/public/api/mytelenet-web-sales-checkout-rp/v1/orderManagement/salesOrder/9168485854013261194/checkoutDelivery',
    {
      body: createSalesOrderStub(customerWithNoHardwareItemsBuyingTwoNewProducts()),
    }
  );
  cy.intercept(
    'ocapi/public/api/mytelenet-web-sales-checkout-rp/v1/orderManagement/customerAccount/location/123456789/salesOrder',
    {
      body: createSalesOrderStub({}, true),
    }
  );
  cy.intercept(
    'ocapi/public/api/mytelenet-web-sales-checkout-rp/v1/orderManagement/salesOrder/9168485854013261194/orderItem',
    {
      body: createSalesOrderStub({}),
    }
  );
  cy.intercept(
    'ocapi/public/api/mytelenet-web-sales-checkout-rp/v1/orderManagement/salesOrder/9168485854013261194/deliveryMethods',
    {
      body: createDeliveryMethodsStub(customerWithNoHardwareItemsBuyingTwoNewProducts()),
    }
  );
  cy.intercept(
    'ocapi/public/api/mytelenet-web-sales-checkout-rp/v1/orderManagement/salesOrder/9168485854013261194/calculateDelivery',
    {
      body: createSalesOrderStub(customerWithNoHardwareItemsBuyingTwoNewProducts()),
    }
  );
  cy.intercept(
    'ocapi/public/api/mytelenet-web-sales-checkout-rp/v1/orderManagement/salesOrder/9168485854013261194/eligibilityCheck',
    {
      body: [],
    }
  );
  cy.intercept(
    'ocapi/public/api/mytelenet-web-sales-checkout-rp/v1/orderManagement/salesOrder/9168485854013261194/document/cs/generationRequired',
    {
      body: { requiredFromOE: false, isRequired: true },
    }
  );
  cy.intercept(
    'ocapi/public/api/mytelenet-web-sales-checkout-rp/v1/orderManagement/salesOrder/9168485854013261194/document/cs/generation',
    {
      body: { uuid: '624c5754-a414-497e-8895-182a3eb134ba' },
    }
  );
  cy.intercept(
    'ocapi/public/api/mytelenet-web-sales-checkout-rp/v1/orderManagement/salesOrder/9168485854013261194/submit',
    {
      body: createSalesOrderStub(customerWithNoHardwareItemsBuyingTwoNewProducts()),
    }
  );
  cy.intercept('ocapi/public/api/mytelenet-web-sales-checkout-rp/v1/customerManagement/customerAccount/transactions', {
    body: createSalesOrderStub(customerWithNoHardwareItemsBuyingTwoNewProducts()),
  });
  cy.intercept('ocapi/public/api/mytelenet-web-sales-checkout/v1/payment', {
    body: ingenicoRequest,
  });
  cy.intercept('ocapi/public/api/mytelenet-web-sales-checkout-rp/v1/addressManagement/address/9148294798613629994', {
    body: {
      type: 'Geographical Address',
      addressUnitTypeId: '9148294798613629978',
      id: '9165656989113844238',
      externalId: '-xy22lf00at-my0riy021z',
      name: '2800',
      href: 'ocapi/public/api/mytelenet-web-sales-checkout-rp/v1/addressManagement/address/9165656989113844238',
      addressUnitChain: [
        addressUnitTestfactory.build({
          type: 'Country',
          id: '9150757941913951029',
          name: 'België',
          nameDU: 'België',
        }),
        addressUnitTestfactory.build({
          type: 'Municipality',
          id: '9150757941913951029',
          name: 'Mechelen',
          nameDU: 'Mechelen',
        }),
      ],
      parent: parentAddressUnitTestfactory.build(),
    },
  });
  cy.intercept('ocapi/public/api/mytelenet-web-sales-checkout-rp/v1/addressManagement/address/9148294798613629990', {
    body: {
      type: 'Geographical Address',
      addressUnitTypeId: '9148294798613629978',
      id: '9165656989113844238',
      externalId: '-xy22lf00at-my0riy021z',
      name: 'Electriciteitsstraat',
      href: 'ocapi/public/api/mytelenet-web-sales-checkout-rp/v1/addressManagement/address/9165656989113844238',
      addressUnitChain: [
        addressUnitTestfactory.build({
          type: 'Country',
          id: '9150757941913951029',
          name: 'België',
          nameDU: 'België',
        }),
        addressUnitTestfactory.build({
          type: 'Municipality',
          id: '9150757941913951029',
          name: 'Mechelen',
          nameDU: 'Mechelen',
        }),
      ],
      parent: parentAddressUnitTestfactory.build(),
    },
  });
  cy.intercept(
    'ocapi/public/api/mytelenet-web-sales-checkout-rp/v1/orderManagement/salesOrder/9168485854013261194/orderItem/*',
    {
      body: createSalesOrderStub(customerWithNoHardwareItemsBuyingTwoNewProducts()),
    }
  );
  cy.intercept(
    'ocapi/public/api/mytelenet-web-sales-checkout-rp/v1/orderManagement/salesOrder/9168485854013261194/feasibilityCheck',
    {
      body: createSalesOrderStub(customerWithNoHardwareItemsBuyingTwoNewProducts()),
    }
  );
  cy.intercept('ocapi/public/api/sales-service/v2/pid', {
    body: personalIdentityResponseTestFactory.build(),
  });
  cy.intercept(
    'ocapi/public/api/mytelenet-web-sales-checkout-rp/v1/addressManagement/address?addressUnitTypeId=9148294798613629978&name.s=17767&parentAddressUnit.id=9165656195913790999',
    {
      body: [
        addressUnitTestfactory.build({
          id: '9150757958413977478',
          subHouseNumber: 'A',
          name: '50',
        }),
        addressUnitTestfactory.build({
          id: '9150757958213958076',
          subHouseNumber: 'A',
          boxNumber: '103',
          floor: '1',
          name: '50',
        }),
        addressUnitTestfactory.build({
          id: '9150757957613922561',
          subHouseNumber: '102',
          name: '50',
        }),
      ],
    }
  );
};

export const CanceledPayment = () => {
  cy.intercept('ocapi/oauth/userdetails', {
    body: rawLoginDetailsInterfaceFactory.build(),
  });
  cy.intercept('ocapi/public/api/mytelenet-web-sales-checkout-rp/v1/orderManagement/salesOrder/9168485854013261194', {
    body: createSalesOrderStub(customerWithNoHardwareItemsBuyingTwoNewProducts('Waiting for payment')),
  });
  cy.intercept('ocapi/public/api/mytelenet-web-sales-checkout-rp/v1/customerManagement/customerAccount', {
    body: customerAccountDetailsFactory.build(),
  });
  cy.intercept('ocapi/public/api/mytelenet-web-sales-checkout-rp/v1/addressManagement/address/9165656989113844238', {
    body: addressUnitTestfactory.build(),
  });
  cy.intercept('ocapi/public/api/mytelenet-web-sales-checkout-rp/v1/billingManagement/customerAccount/billingAccount', {
    body: [defaultBillingAccountFactory.build(), billingAccountTestfactory.build()],
  });
  cy.intercept('ocapi/public/api/mytelenet-web-sales-checkout/v1/payment', {
    body: ingenicoRequest,
  });
  cy.intercept(
    'ocapi/public/api/mytelenet-web-sales-checkout-rp/v1/orderManagement/salesOrder/9168485854013261194/document/cs/generationRequired',
    {
      body: { requiredFromOE: false, isRequired: true },
    }
  );
  cy.intercept('ocapi/public/api/mytelenet-web-sales-checkout-rp/v1/addressManagement/address/9148294798613629994', {
    body: {
      type: 'Geographical Address',
      addressUnitTypeId: '9148294798613629978',
      id: '9165656989113844238',
      externalId: '-xy22lf00at-my0riy021z',
      name: '2800',
      href: 'ocapi/public/api/mytelenet-web-sales-checkout-rp/v1/addressManagement/address/9165656989113844238',
      addressUnitChain: [
        addressUnitTestfactory.build({
          type: 'Country',
          id: '9150757941913951029',
          name: 'België',
          nameDU: 'België',
        }),
        addressUnitTestfactory.build({
          type: 'Municipality',
          id: '9150757941913951029',
          name: 'Mechelen',
          nameDU: 'Mechelen',
        }),
      ],
      parent: parentAddressUnitTestfactory.build(),
    },
  });
  cy.intercept('ocapi/public/api/mytelenet-web-sales-checkout-rp/v1/addressManagement/address/9148294798613629990', {
    body: {
      type: 'Geographical Address',
      addressUnitTypeId: '9148294798613629978',
      id: '9165656989113844238',
      externalId: '-xy22lf00at-my0riy021z',
      name: 'Electriciteitsstraat',
      href: 'ocapi/public/api/mytelenet-web-sales-checkout-rp/v1/addressManagement/address/9165656989113844238',
      addressUnitChain: [
        addressUnitTestfactory.build({
          type: 'Country',
          id: '9150757941913951029',
          name: 'België',
          nameDU: 'België',
        }),
        addressUnitTestfactory.build({
          type: 'Municipality',
          id: '9150757941913951029',
          name: 'Mechelen',
          nameDU: 'Mechelen',
        }),
      ],
      parent: parentAddressUnitTestfactory.build(),
    },
  });
  cy.intercept(
    'ocapi/public/api/mytelenet-web-sales-checkout-rp/v1/orderManagement/salesOrder/9168485854013261194/orderItem/*',
    {
      body: createSalesOrderStub(customerWithNoHardwareItemsBuyingTwoNewProducts()),
    }
  );
  cy.intercept('ocapi/public/api/sales-service/v2/pid', {
    body: personalIdentityResponseTestFactory.build(),
  });
  cy.intercept('omapi-query/public/hc-products/v1/products?itemcodes=*', {
    body: createOmapiProductStub(customerWithFiveUsedDiscountsBuyingTwoNewProducts),
  });
};
export const CustomerOrderCorrections = () => {
  cy.intercept('ocapi/oauth/userdetails', {
    body: rawLoginDetailsInterfaceFactory.build(),
  });
  cy.intercept('ocapi/public/api/mytelenet-web-sales-checkout-rp/v1/customerManagement/discountSlots', {
    body: createDiscountStub(customerWithNoHardwareItemsBuyingTwoNewProducts()),
  });
  cy.intercept('ocapi/public/api/mytelenet-web-sales-checkout-rp/v1/addressManagement/address/9165656989113844238', {
    body: addressUnitTestfactory.build(),
  });
  cy.intercept('ocapi/public/api/mytelenet-web-sales-checkout-rp/v1/billingManagement/customerAccount/billingAccount', {
    body: [defaultBillingAccountFactory.build(), billingAccountTestfactory.build()],
  });
  cy.intercept(
    'ocapi/public/api/mytelenet-web-sales-checkout-rp/v1/orderManagement/customerAccount/location/123456789/salesOrder',
    (req) => {
      req.reply({
        body: ncErrorTestfactory.build(),
      });
    }
  );
  cy.intercept('ocapi/public/api/sales-service/v2/;', {
    body: personalIdentityResponseTestFactory.build(),
  });
  cy.intercept('ocapi/public/api/sales-service/v2/pid', {
    body: personalIdentityResponseTestFactory.build(),
  });
};
