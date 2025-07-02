import {
  addDeliveryNotification,
  resetNotifications,
  setAvailableAddresses,
  setDeliveryAddress,
  setDeliveryItems,
  setDeliveryPersonalInfo,
} from './delivery.actions';
import { deliveryStateTestfactory } from './delivery-state.testfactory';
import { deliveryReducer } from '../+state/delivery.reducer';
import { DeliveryNotification } from '../interfaces/notification.interface';

describe('Delivery reducer', () => {
  const initialState = deliveryStateTestfactory.build();

  it('should return initial state given an unknown action', () => {
    const action = { type: 'unknown' };

    const deliveryState = deliveryReducer(initialState, action);

    expect(deliveryState).toEqual(initialState);
  });

  describe('setDeliveryPersonalInfo', () => {
    it('should set personal info', () => {
      const action = setDeliveryPersonalInfo({
        personalInfo: {
          firstname: 'Bruce',
          lastname: 'Wayne',
          mobile: 'mobile',
          email: 'batman2099@waynecorp.com',
        },
      });
      const deliveryState = deliveryReducer(initialState, action);

      const predictedState = deliveryStateTestfactory.build({
        personalInfo: {
          email: 'batman2099@waynecorp.com',
          mobile: 'mobile',
          firstname: 'Bruce',
          lastname: 'Wayne',
        },
      });

      expect(deliveryState).not.toBe(initialState);
      expect(deliveryState.personalInfo).toEqual(predictedState.personalInfo);
    });
  });

  describe('setDeliveryAddress', () => {
    it('should set delivery address', () => {
      const action = setDeliveryAddress({
        deliveryAddress: {
          addressUnit: {
            addressUnitChain: initialState.deliveryAddress?.addressUnit.addressUnitChain,
            addressUnitTypeId: 'addressUnitTypeId',
            externalId: 'externalId',
            href: 'href',
            id: 'id',
            name: 'name',
            parent: initialState.deliveryAddress?.addressUnit.parent,
            postalCode: '2800',
            type: 'type',
          },
          country: 'country',
          houseNumber: 'houseNumber',
          municipality: 'municipality',
          postalCode: 'postalCode',
          street: 'street',
        },
      });
      const deliveryState = deliveryReducer(initialState, action);

      const predictedState = deliveryStateTestfactory.build({
        deliveryAddress: {
          addressUnit: {
            type: 'type',
            addressUnitTypeId: 'addressUnitTypeId',
            externalId: 'externalId',
            href: 'href',
            id: 'id',
            name: 'name',
          },
          country: 'country',
          houseNumber: 'houseNumber',
          municipality: 'municipality',
          postalCode: 'postalCode',
          street: 'street',
        },
      });

      expect(deliveryState).not.toBe(initialState);
      expect(deliveryState.deliveryAddress).toEqual(predictedState.deliveryAddress);
    });
  });

  describe('setAvailableAddresses', () => {
    it('should set available addresses', () => {
      const action = setAvailableAddresses({
        availableAddresses: [
          {
            addressUnit: {
              addressUnitChain: initialState.deliveryAddress?.addressUnit.addressUnitChain,
              addressUnitTypeId: 'addressUnitTypeId',
              externalId: 'externalId',
              href: 'href',
              id: 'id',
              name: 'name',
              parent: initialState.deliveryAddress?.addressUnit.parent,
              postalCode: '2800',
              type: 'type',
            },
            country: 'country',
            houseNumber: 'houseNumber',
            municipality: 'municipality',
            postalCode: 'postalCode',
            street: 'street',
          },
        ],
      });
      const deliveryState = deliveryReducer(initialState, action);

      const predictedState = deliveryStateTestfactory.build({
        availableAddresses: [
          {
            addressUnit: {
              parent: initialState.deliveryAddress?.addressUnit.parent,
              addressUnitChain: initialState.deliveryAddress?.addressUnit.addressUnitChain,
              type: 'type',
              addressUnitTypeId: 'addressUnitTypeId',
              externalId: 'externalId',
              href: 'href',
              id: 'id',
              postalCode: '2800',
              name: 'name',
            },
            country: 'country',
            houseNumber: 'houseNumber',
            municipality: 'municipality',
            postalCode: 'postalCode',
            street: 'street',
          },
        ],
      });

      expect(deliveryState).not.toBe(initialState);
      expect(deliveryState.availableAddresses).toEqual(predictedState.availableAddresses);
    });
  });

  describe('setDeliveryItems', () => {
    it('should set delivery items', () => {
      const action = setDeliveryItems({
        deliveryItems: [],
      });
      const deliveryState = deliveryReducer(initialState, action);

      const predictedState = deliveryStateTestfactory.build({
        deliveryItems: [],
      });

      expect(deliveryState).not.toBe(initialState);
      expect(deliveryState.deliveryItems).toEqual(predictedState.deliveryItems);
    });
  });

  describe('resetNotifications', () => {
    it('should reset notifications', () => {
      const action = resetNotifications();
      const notificationState = deliveryStateTestfactory.build({
        notifications: [
          {
            weight: 1,
            title: 'notification-1',
            message: 'your noting has been noted',
          },
        ],
      });
      const deliveryState = deliveryReducer(notificationState, action);

      const predictedState = deliveryStateTestfactory.build({
        notifications: [],
      });

      expect(deliveryState).not.toBe(notificationState);
      expect(deliveryState.notifications).toEqual(predictedState.notifications);
    });
  });

  describe('addDeliveryNotification', () => {
    it('should add a notification to the notification array', () => {
      const notification: DeliveryNotification = {
        weight: 2,
        title: 'notification-2',
        message: 'your noting has been noted',
        type: 'notification',
      };
      const action = addDeliveryNotification({
        notification: notification,
      });

      const deliveryState = deliveryReducer(initialState, action);

      const predictedState = deliveryStateTestfactory.build({
        notifications: [notification],
      });

      expect(deliveryState).not.toBe(initialState);
      expect(deliveryState.notifications).toEqual(predictedState.notifications);
    });
  });
});
