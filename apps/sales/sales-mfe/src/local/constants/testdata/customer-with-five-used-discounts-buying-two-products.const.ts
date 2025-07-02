import { SalesOrderTestdata } from '../../interfaces/testdata/sales-order-testdata.interface';

export const customerWithFiveUsedDiscountsBuyingTwoNewProducts: SalesOrderTestdata = {
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
      name: 'Apple Iphone 15X',
      itemCode: '1000',
      customerProductItemId: '1000',
      discount: {
        id: '9155501914465272430',
      },
    },
    {
      id: '1001',
      name: 'Apple Iphone 15',
      itemCode: '1001',
      customerProductItemId: '1001',
      discount: {
        id: '1001',
      },
    },
    {
      id: '1002',
      name: 'Apple Iphone 15 Pro',
      itemCode: '1002',
      customerProductItemId: '1002',
      discount: {
        id: '1002',
      },
    },
  ],
  deliveryOrderItem: {
    id: '5000',
    name: 'Apple Iphone 15',
    customerProductItemId: '5000',
  },
};
