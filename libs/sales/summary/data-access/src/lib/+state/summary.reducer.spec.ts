import {
  deliveryInfoAddressFactory,
  deliveryInfoStateFactory,
  depreciationItemFactory,
  ingenicoFormTestFactory,
  invoiceInfoStateFactory,
  summaryPersonalInfoStateFactory,
  summaryStateTestfactory,
} from './summary-state.testfactory';
import {
  addSummaryDeliveryNotification,
  addSummaryGeneralNotification,
  setIngenicoFormUrl,
  setSummaryContractSummaryRequired,
  setSummaryDeliveryAddress,
  setSummaryDeliveryInfo,
  setSummaryDepreciationItems,
  setSummaryIngenicoForm,
  setSummaryIngenicoFormReady,
  setSummaryInvoiceInfo,
  setSummaryOrderItems,
  setSummaryPersonalInfo,
  setSummaryPrices,
  setTermsAndConditionsUrl,
} from './summary.actions';
import { summaryReducer } from './summary.reducer';
import {
  etfPriceTestFactory,
  orderItemTestFactory,
  summaryPricesTestFactory,
} from '../interfaces/order-item.testfactory';
import { priceTestFactory } from '@sales/hardware-checkout/data-access';
import { summaryNotificationFactory } from '../interfaces/notification.interface.testfactory';

describe('SummaryReducer', () => {
  const initialState = summaryStateTestfactory.build();

  it('should return initial state given an unknown action', () => {
    const action = { type: 'unknown' };

    const summaryState = summaryReducer(initialState, action);

    expect(summaryState).toEqual(initialState);
  });

  describe('setSummaryPersonalInfo', () => {
    it('should set the summary personal info', () => {
      const action = setSummaryPersonalInfo({
        personalInfo: summaryPersonalInfoStateFactory.build({
          firstname: 'Thor',
          lastname: 'Odinson',
        }),
      });
      const summaryState = summaryReducer(initialState, action);

      expect(summaryState).not.toEqual(initialState);
      expect(summaryState.personalInfo?.firstname).toEqual('Thor');
      expect(summaryState.personalInfo?.lastname).toEqual('Odinson');
    });
  });

  describe('setSummaryDeliveryInfo', () => {
    it('should set the summary delivery info', () => {
      const action = setSummaryDeliveryInfo({
        deliveryInfo: deliveryInfoStateFactory.build({
          personalInfo: {
            firstname: 'Thor',
            lastname: 'Odinson',
          },
        }),
      });
      const summaryState = summaryReducer(initialState, action);

      expect(summaryState).not.toEqual(initialState);
      expect(summaryState.deliveryInfo?.personalInfo?.firstname).toEqual('Thor');
      expect(summaryState.deliveryInfo?.personalInfo?.lastname).toEqual('Odinson');
    });
  });

  describe('setSummaryDeliveryAddress', () => {
    it('should set the summary delivery address', () => {
      const action = setSummaryDeliveryAddress({
        deliveryAddress: deliveryInfoAddressFactory.build({
          country: 'United Kingdom',
        }),
      });
      const summaryState = summaryReducer(initialState, action);

      expect(summaryState).not.toEqual(initialState);
      expect(summaryState.deliveryInfo?.address?.country).toEqual('United Kingdom');
    });
  });

  describe('setSummaryInvoiceInfo', () => {
    it('should set the summary invoice info', () => {
      const action = setSummaryInvoiceInfo({
        billingAddress: invoiceInfoStateFactory.build({
          country: 'United Kingdom',
        }),
      });
      const summaryState = summaryReducer(initialState, action);

      expect(summaryState).not.toEqual(initialState);
      expect(summaryState.invoiceInfo?.country).toEqual('United Kingdom');
    });
  });

  describe('setSummaryOrderItems', () => {
    it('should set the summary order items', () => {
      const action = setSummaryOrderItems({
        orderItems: [
          orderItemTestFactory.build({
            name: 'testOrderItem',
          }),
        ],
      });
      const summaryState = summaryReducer(initialState, action);

      expect(summaryState).not.toEqual(initialState);
      const orderItems = summaryState.orderItems;
      if (orderItems) {
        expect(orderItems?.length).toEqual(1);
        expect(orderItems[0]?.name).toEqual('testOrderItem');
      } else {
        fail('OrderItems is undefined');
      }
    });
  });

  describe('setSummaryPrices', () => {
    it('should set the summary prices', () => {
      const action = setSummaryPrices({
        prices: summaryPricesTestFactory.build({
          totals: {
            deliveryCost: priceTestFactory.build({
              value: '200',
            }),
            upfrontCost: priceTestFactory.build(),
            etfPrices: [etfPriceTestFactory.build()],
          },
          subTotals: {
            deliveryCost: priceTestFactory.build(),
            upfrontCost: priceTestFactory.build(),
            etfPrices: [etfPriceTestFactory.build()],
          },
          vatInclusive: false,
        }),
      });
      const summaryState = summaryReducer(initialState, action);
      expect(summaryState).not.toEqual(initialState);
      expect(summaryState.prices?.totals.deliveryCost.value).toEqual('200');
    });
  });

  describe('setSummaryDepreciationItems', () => {
    it('should set the summary depreciation items', () => {
      const action = setSummaryDepreciationItems({
        depreciationItems: [depreciationItemFactory.build()],
      });
      const summaryState = summaryReducer(initialState, action);

      expect(summaryState).not.toEqual(initialState);
      expect(summaryState.depreciationItems?.length).toEqual(1);
    });
  });

  describe('setSummaryContractSummaryRequired', () => {
    it('should set the summary contract summary required', () => {
      const action = setSummaryContractSummaryRequired({
        contractSummaryRequired: true,
      });
      const summaryState = summaryReducer(initialState, action);
      expect(summaryState.contractSummaryRequired).toBe(true);
    });
  });

  describe('setSummaryIngenicoForm', () => {
    it('should set the summary ingenico form', () => {
      const ingenicoForm = ingenicoFormTestFactory.build();
      const action = setSummaryIngenicoForm({
        ingenicoForm: ingenicoForm,
      });
      const summaryState = summaryReducer(initialState, action);

      expect(summaryState).not.toEqual(initialState);
      expect(summaryState.ingenicoRequest).toEqual(ingenicoForm);
    });
  });

  describe('setSummaryIngenicoFormReady', () => {
    it('should set the ingenico form ready', () => {
      const action = setSummaryIngenicoFormReady({
        ingenicoFormReady: true,
      });
      const summaryState = summaryReducer(initialState, action);
      expect(summaryState.ingenicoFormReady).toBe(true);
    });
  });

  describe('addSummaryNotification', () => {
    it('should add a notification to the state', () => {
      const action = addSummaryDeliveryNotification({
        notification: {
          message: 'test 1',
          weight: 1,
          type: 'notification',
        },
      });
      let summaryState = summaryReducer(initialState, action);
      expect(summaryState.deliveryNotifications).toHaveLength(1);

      const action2 = addSummaryDeliveryNotification({
        notification: {
          message: 'test 2',
          weight: 1,
          type: 'notification',
        },
      });
      summaryState = summaryReducer(summaryState, action2);
      expect(summaryState.deliveryNotifications).toHaveLength(2);
    });
  });

  describe('setTermsAndConditionsUrl', () => {
    it('should set the terms and conditions url', () => {
      const action = setTermsAndConditionsUrl({
        termsAndConditionsUrl: '/test/url',
      });
      const summaryState = summaryReducer(initialState, action);

      expect(summaryState).not.toEqual(initialState);
      expect(summaryState.termsAndConditionsUrl).toEqual('/test/url');
    });
  });

  describe('setIngenicoFormUrl', () => {
    it('should set the ingenico form url', () => {
      const action = setIngenicoFormUrl({
        ingenicoFormUrl: '/ingenico/url',
      });
      const summaryState = summaryReducer(initialState, action);

      expect(summaryState).not.toEqual(initialState);
      expect(summaryState.ingenicoFormUrl).toEqual('/ingenico/url');
    });
  });

  describe('addSummaryGeneralNotification', () => {
    it('should add a new notification if it does not exist', () => {
      const initialState = summaryStateTestfactory.build({
        generalNotifications: [],
      });
      const action = addSummaryGeneralNotification({
        notification: summaryNotificationFactory.build({ message: 'New notification' }),
      });
      const summaryState = summaryReducer(initialState, action);

      expect(summaryState.generalNotifications).toHaveLength(1);
      expect(summaryState.generalNotifications[0].message).toEqual('New notification');
    });

    it('should not add a notification if it already exists', () => {
      const initialState = summaryStateTestfactory.build({
        generalNotifications: [summaryNotificationFactory.build({ message: 'Existing notification' })],
      });
      const action = addSummaryGeneralNotification({
        notification: summaryNotificationFactory.build({ message: 'Existing notification' }),
      });
      const summaryState = summaryReducer(initialState, action);

      expect(summaryState.generalNotifications).toHaveLength(1);
    });

    it('should add multiple unique notifications', () => {
      const initialState = summaryStateTestfactory.build({
        generalNotifications: [],
      });
      const action1 = addSummaryGeneralNotification({
        notification: summaryNotificationFactory.build({ message: 'First notification' }),
      });
      const action2 = addSummaryGeneralNotification({
        notification: summaryNotificationFactory.build({ message: 'Second notification' }),
      });
      let summaryState = summaryReducer(initialState, action1);
      summaryState = summaryReducer(summaryState, action2);

      expect(summaryState.generalNotifications).toHaveLength(2);
      expect(summaryState.generalNotifications[0].message).toEqual('First notification');
      expect(summaryState.generalNotifications[1].message).toEqual('Second notification');
    });
  });
});
