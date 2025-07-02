import {
  deliveryMethodsFactory,
  DiscountItem,
  discountItemFactory,
  hardwareOrderChildItem,
  hardwareOrderItem,
  hardwareOrderTLOItem,
  offerTestFactory,
  OrderItem,
  orderItemTestFactory,
  Rule,
  ruleFactory,
  salesOrderFactoryWithHardwareTlo,
  StandaloneDeliveryItem,
  standaloneDeliveryItemFactory,
  validationElementsFactory,
} from '@sales/hardware-checkout/data-access';
import { OrderItemActionEnum } from '../../app/hardware-checkout/enums/order-item-action.enum';
import { SalesOrderTestdata } from '../interfaces/testdata/sales-order-testdata.interface';
import { BusinessDomainsEnum } from '../../app/hardware-checkout/enums/business-domains.enum';
import { customerDiscountFactory, UsedSlot, usedSlotStateFactory } from '@sales/etf/data-access';
import { faker } from '@faker-js/faker';
import {
  RawImagesInterfaceFactory,
  RawOmapiQueryProductInterfaceData,
  rawOmapiQueryProductInterfaceDataFactory,
  rawOmapiQueryProductTestfactory,
  rawVariantsInterfaceFactory,
} from '@telenet/ng-lib-omapi-query';
import { addressUnitTestfactory } from '@sales/shared/address/data-access';

export class MockDataTestfactory {
  static createExistingProducts(data: SalesOrderTestdata) {
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
  }

  static createNewProducts = (data: SalesOrderTestdata) => {
    let newProducts: OrderItem[] = [];
    if (data.newProducts) {
      // For each new product, create a child order item with action ADD
      newProducts = data.newProducts.map((newProduct) => {
        return hardwareOrderItem.build({
          action: OrderItemActionEnum.ADD,
          id: newProduct.id,
          name: newProduct.name,
          customerProductId: newProduct.customerProductItemId,
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

  static createDeliveryOrderItems = (data: SalesOrderTestdata) => {
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
          },
        }),
      ];
    }
    return deliveryOrderItems;
  };

  static createSalesOrderStub = (
    data: SalesOrderTestdata,
    isSalesOrderCreation = false,
    productsToDiscount: string[] = []
  ) => {
    // If the customer has existing products, create a hardware TLO with Action none
    // If the customer does not have existing products, create a hardware TLO with action ADD
    let salesOrderAction = OrderItemActionEnum.NONE;
    if (data.newProducts && !data.existingProducts) {
      salesOrderAction = OrderItemActionEnum.ADD;
    }

    const existingProducts = this.createExistingProducts(data);
    const newProducts = this.createNewProducts(data);
    const deliveryOrderItems = this.createDeliveryOrderItems(data);

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

    if (data.hasBigItem) {
      hardwareTLOItem = [
        hardwareOrderTLOItem.build({
          action: salesOrderAction,
          offer: offerTestFactory.build({
            code: 'Appointment delivery Telenet hardware (CVP 1)',
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
          orderItems: [...existingProducts, ...newProducts],
        }),
      ];
    }

    if (!data.existingProducts && isSalesOrderCreation) {
      hardwareTLOItem = [];
    }

    return salesOrderFactoryWithHardwareTlo.build({
      discountItems: discounts,
      rules: rules,
      validationElements: [validationElementsFactory.build()],
      orderItems: [...hardwareTLOItem, ...deliveryOrderItems],
    });
  };

  static createDiscountStub = (data: SalesOrderTestdata) => {
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

  static createDeliveryMethodsStub = (data: SalesOrderTestdata) => {
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

  static createOmapiProductStub = (data: SalesOrderTestdata) => {
    let omapiProducts: RawOmapiQueryProductInterfaceData[] = [];
    if (data.newProducts) {
      // For each new product, create a child order item with action ADD
      omapiProducts = data.newProducts.map((newProduct) => {
        return rawOmapiQueryProductInterfaceDataFactory.build({
          variants: [
            rawVariantsInterfaceFactory.build({
              productId: newProduct.itemCode,
              images: [RawImagesInterfaceFactory.build()],
            }),
          ],
        });
      });
    }

    return rawOmapiQueryProductTestfactory.build({
      products: omapiProducts,
    });
  };

  static createMunicipalitiesStub = () => {
    return addressUnitTestfactory.buildList(2);
  };

  static createStreetsStub = () => {
    return [
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
    ];
  };

  static createHouseNumbersStub = () => {
    return [
      addressUnitTestfactory.build({
        id: '9150757958413977478',
        subHouseNumber: 'C',
        name: '5025',
      }),
      addressUnitTestfactory.build({
        id: '9150757958413977478',
        subHouseNumber: 'AK',
        name: '51',
      }),
      addressUnitTestfactory.build({
        id: '9150757958413977478',
        subHouseNumber: 'A',
        name: '500',
      }),
      addressUnitTestfactory.build({
        id: '9150757958413977478',
        subHouseNumber: 'A',
        name: '50',
        boxNumber: '10',
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
    ];
  };
}
