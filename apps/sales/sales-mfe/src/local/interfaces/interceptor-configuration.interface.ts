import { rawLoginDetailsInterfaceFactory } from '@telenet/ng-lib-ocapi';
import {
  billingAccountTestfactory,
  customerAccountDetailsFactory,
  CustomerAccountTypeEnum,
  defaultBillingAccountFactory,
} from '@sales/hardware-checkout/data-access';
import { MockDataTestfactory } from '../factories/mock-data.testfactory';
import { customerWithFiveUsedDiscountsBuyingTwoNewProducts } from '../constants/testdata/customer-with-five-used-discounts-buying-two-products.const';
import { addressUnitTestfactory } from '@sales/shared/address/data-access';

export interface EndPointConfiguration {
  path: string;
  callback: () => unknown;
  enabled: boolean;
}

export interface InterceptorClientServiceConfiguration {
  name: string;
  endpoints: EndPointConfiguration[];
  enabled: boolean;
}

export const userDetails: EndPointConfiguration = {
  path: 'ocapi/oauth/userdetails',
  enabled: true,
  callback: () => {
    return rawLoginDetailsInterfaceFactory.build();
  },
};

export const discountSlots: EndPointConfiguration = {
  path: 'ocapi/public/api/mytelenet-web-sales-checkout-rp/v1/customerManagement/discountSlots',
  enabled: true,
  callback: () => {
    return MockDataTestfactory.createDiscountStub(customerWithFiveUsedDiscountsBuyingTwoNewProducts);
  },
};

export const customerAccount: EndPointConfiguration = {
  path: 'ocapi/public/api/mytelenet-web-sales-checkout-rp/v1/customerManagement/customerAccount',
  enabled: true,
  callback: () => {
    return customerAccountDetailsFactory.build();
  },
};

export const address1: EndPointConfiguration = {
  path: 'ocapi/public/api/mytelenet-web-sales-checkout-rp/v1/addressManagement/address/9165656989113844238',
  enabled: true,
  callback: () => {
    return addressUnitTestfactory.build();
  },
};

export const address2: EndPointConfiguration = {
  path: 'ocapi/public/api/mytelenet-web-sales-checkout-rp/v1/addressManagement/address/9150757958213958076',
  enabled: true,
  callback: () => {
    return addressUnitTestfactory.build();
  },
};

export const billingAccount: EndPointConfiguration = {
  path: 'ocapi/public/api/mytelenet-web-sales-checkout-rp/v1/billingManagement/customerAccount/billingAccount',
  enabled: true,
  callback: () => {
    return [defaultBillingAccountFactory.build(), billingAccountTestfactory.build()];
  },
};

export const createHardwareTLO: EndPointConfiguration = {
  path: 'ocapi/public/api/mytelenet-web-sales-checkout-rp/v1/orderManagement/salesOrder/9168485854013261194/orderItem',
  enabled: true,
  callback: () => {
    return MockDataTestfactory.createSalesOrderStub({}, true);
  },
};

export const deleteOrderItem1: EndPointConfiguration = {
  path: 'ocapi/public/api/mytelenet-web-sales-checkout-rp/v1/orderManagement/salesOrder/9168485854013261194/orderItem/1',
  enabled: true,
  callback: () => {
    return MockDataTestfactory.createSalesOrderStub(customerWithFiveUsedDiscountsBuyingTwoNewProducts);
  },
};

export const deleteOrderItem2: EndPointConfiguration = {
  path: 'ocapi/public/api/mytelenet-web-sales-checkout-rp/v1/orderManagement/salesOrder/9168485854013261194/orderItem/2',
  enabled: true,
  callback: () => {
    return MockDataTestfactory.createSalesOrderStub(customerWithFiveUsedDiscountsBuyingTwoNewProducts);
  },
};

export const deleteOrderItem3: EndPointConfiguration = {
  path: 'ocapi/public/api/mytelenet-web-sales-checkout-rp/v1/orderManagement/salesOrder/9168485854013261194/orderItem/3',
  enabled: true,
  callback: () => {
    return MockDataTestfactory.createSalesOrderStub(customerWithFiveUsedDiscountsBuyingTwoNewProducts);
  },
};

export const deleteOrderItem4: EndPointConfiguration = {
  path: 'ocapi/public/api/mytelenet-web-sales-checkout-rp/v1/orderManagement/salesOrder/9168485854013261194/orderItem/4',
  enabled: true,
  callback: () => {
    return MockDataTestfactory.createSalesOrderStub(customerWithFiveUsedDiscountsBuyingTwoNewProducts);
  },
};

export const deleteOrderItem5: EndPointConfiguration = {
  path: 'ocapi/public/api/mytelenet-web-sales-checkout-rp/v1/orderManagement/salesOrder/9168485854013261194/orderItem/5',
  enabled: true,
  callback: () => {
    return MockDataTestfactory.createSalesOrderStub(customerWithFiveUsedDiscountsBuyingTwoNewProducts);
  },
};

export const addDiscount: EndPointConfiguration = {
  path: 'ocapi/public/api/mytelenet-web-sales-checkout-rp/v1/orderManagement/salesOrder/9168485854013261194/discount',
  enabled: true,
  callback: () => {
    return MockDataTestfactory.createSalesOrderStub(customerWithFiveUsedDiscountsBuyingTwoNewProducts);
  },
};

export const addHardwareOrderItem: EndPointConfiguration = {
  path: 'ocapi/public/api/mytelenet-web-sales-checkout-rp/v1/orderManagement/salesOrder/9168485854013261194/orderItem/123456789/hwcvpOrderItem',
  enabled: true,
  callback: () => {
    return MockDataTestfactory.createSalesOrderStub(customerWithFiveUsedDiscountsBuyingTwoNewProducts);
  },
};

export const updateOrderItem: EndPointConfiguration = {
  path: 'ocapi/public/api/mytelenet-web-sales-checkout-rp/v1/orderManagement/salesOrder/9168485854013261194',
  enabled: true,
  callback: () => {
    return MockDataTestfactory.createSalesOrderStub(customerWithFiveUsedDiscountsBuyingTwoNewProducts);
  },
};

export const checkoutDelivery: EndPointConfiguration = {
  path: 'ocapi/public/api/mytelenet-web-sales-checkout-rp/v1/orderManagement/salesOrder/9168485854013261194/checkoutDelivery',
  enabled: true,
  callback: () => {
    return MockDataTestfactory.createSalesOrderStub(customerWithFiveUsedDiscountsBuyingTwoNewProducts);
  },
};

export const createSalesOrder: EndPointConfiguration = {
  path: 'ocapi/public/api/mytelenet-web-sales-checkout-rp/v1/orderManagement/customerAccount/location/123456789/salesOrder',
  enabled: true,
  callback: () => {
    return MockDataTestfactory.createSalesOrderStub(customerWithFiveUsedDiscountsBuyingTwoNewProducts);
  },
};

export const customerAccountWithFormerStatus: EndPointConfiguration = {
  path: 'ocapi/public/api/mytelenet-web-sales-checkout-rp/v1/customerManagement/customerAccount',
  enabled: true,
  callback: () => {
    return customerAccountDetailsFactory.build({ status: CustomerAccountTypeEnum.FORMER });
  },
};

export const omapiItems: EndPointConfiguration = {
  path: 'omapi-query/public/hc-products/v1/products?itemcodes=*',
  enabled: true,
  callback: () => {
    return MockDataTestfactory.createOmapiProductStub(customerWithFiveUsedDiscountsBuyingTwoNewProducts);
  },
};

export const deliveryMethods: EndPointConfiguration = {
  path: 'ocapi/public/api/mytelenet-web-sales-checkout-rp/v1/orderManagement/salesOrder/9168485854013261194/deliveryMethods',
  enabled: true,
  callback: () => {
    return MockDataTestfactory.createDeliveryMethodsStub(customerWithFiveUsedDiscountsBuyingTwoNewProducts);
  },
};

export const calculateDelivery: EndPointConfiguration = {
  path: 'ocapi/public/api/mytelenet-web-sales-checkout-rp/v1/orderManagement/salesOrder/9168485854013261194/calculateDelivery',
  enabled: true,
  callback: () => {
    return MockDataTestfactory.createSalesOrderStub(customerWithFiveUsedDiscountsBuyingTwoNewProducts);
  },
};

export const eligibilityCheck: EndPointConfiguration = {
  path: 'ocapi/public/api/mytelenet-web-sales-checkout-rp/v1/orderManagement/salesOrder/9168485854013261194/eligibilityCheck',
  enabled: true,
  callback: () => {
    return [];
  },
};

export const documentGenerationRequired: EndPointConfiguration = {
  path: 'ocapi/public/api/mytelenet-web-sales-checkout-rp/v1/orderManagement/salesOrder/9168485854013261194/document/cs/generationRequired',
  enabled: true,
  callback: () => {
    return { requiredFromOE: false, isRequired: true };
  },
};

export const generateDocument: EndPointConfiguration = {
  path: 'ocapi/public/api/mytelenet-web-sales-checkout-rp/v1/orderManagement/salesOrder/9168485854013261194/document/cs/generation',
  enabled: true,
  callback: () => {
    return { uuid: '624c5754-a414-497e-8895-182a3eb134ba' };
  },
};

export const submitSalesOrder: EndPointConfiguration = {
  path: 'ocapi/public/api/mytelenet-web-sales-checkout-rp/v1/orderManagement/salesOrder/9168485854013261194/submit',
  enabled: true,
  callback: () => {
    return MockDataTestfactory.createSalesOrderStub(customerWithFiveUsedDiscountsBuyingTwoNewProducts);
  },
};

export const transactions: EndPointConfiguration = {
  path: 'ocapi/public/api/mytelenet-web-sales-checkout-rp/v1/customerManagement/customerAccount/transactions',
  enabled: true,
  callback: () => {
    return MockDataTestfactory.createSalesOrderStub(customerWithFiveUsedDiscountsBuyingTwoNewProducts);
  },
};

export const municipalities: EndPointConfiguration = {
  path: 'ocapi/public/api/mytelenet-web-sales-checkout-rp/v1/addressManagement/address?addressUnitTypeId=9148294798613629978&name=17767&parentAddressUnit.id=9165656195913790999',
  enabled: true,
  callback: () => {
    return MockDataTestfactory.createMunicipalitiesStub();
  },
};

export const streetsContaining: EndPointConfiguration = {
  path: 'https://api.int.telenet.be/ocapi/public/api/mytelenet-web-sales-checkout-rp/v1/addressManagement/address?addressUnitTypeId=9148294798613629990&name.c=*&parentAddressUnit.name=*',
  enabled: true,
  callback: () => {
    return MockDataTestfactory.createStreetsStub();
  },
};

export const houseNumbers: EndPointConfiguration = {
  path: 'ocapi/public/api/mytelenet-web-sales-checkout-rp/v1/addressManagement/address?addressUnitTypeId=9148294798613629978&name.s=*&parentAddressUnit.id=*',
  enabled: true,
  callback: () => {
    return MockDataTestfactory.createHouseNumbersStub();
  },
};

export const orderItem: EndPointConfiguration = {
  path: 'ocapi/public/api/mytelenet-web-sales-checkout-rp/v1/orderManagement/salesOrder/9168485854013261194/orderItem/5000',
  enabled: true,
  callback: () => {
    return MockDataTestfactory.createSalesOrderStub(customerWithFiveUsedDiscountsBuyingTwoNewProducts);
  },
};

export const ocapiClientServiceConfiguration: InterceptorClientServiceConfiguration = {
  name: 'ocapi',
  endpoints: [userDetails],
  enabled: true,
};

export const SalesClientServiceConfiguration: InterceptorClientServiceConfiguration = {
  name: 'sales-service',
  endpoints: [
    customerAccount,
    discountSlots,
    address1,
    address2,
    billingAccount,
    createHardwareTLO,
    deleteOrderItem1,
    deleteOrderItem2,
    deleteOrderItem3,
    deleteOrderItem4,
    deleteOrderItem5,
    addDiscount,
    addHardwareOrderItem,
    updateOrderItem,
    checkoutDelivery,
    createSalesOrder,
    deliveryMethods,
    calculateDelivery,
    eligibilityCheck,
    documentGenerationRequired,
    generateDocument,
    submitSalesOrder,
    transactions,
    municipalities,
    streetsContaining,
    houseNumbers,
    orderItem,
  ],
  enabled: true,
};

export const OmapiClientServiceConfiguration: InterceptorClientServiceConfiguration = {
  name: 'omapi-service',
  endpoints: [omapiItems],
  enabled: true,
};
