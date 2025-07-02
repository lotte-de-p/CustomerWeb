import {
  availableAddresses,
  contactAddress,
  deliveryAddress,
  deliveryItems,
  notifications,
  personalInfo,
} from './delivery.selectors';
import { deliveryStateTestfactory } from './delivery-state.testfactory';

describe('delivery selectors', () => {
  const initialState = deliveryStateTestfactory.build();

  describe('availableAddresses', () => {
    it('should select availableAddresses', () => {
      const result = availableAddresses.projector(initialState);

      expect(result).toEqual(initialState.availableAddresses);
    });
  });

  describe('contactAddress', () => {
    it('should select contactAddress', () => {
      const result = contactAddress.projector(initialState);
      const availableAddresses1 = initialState.availableAddresses;
      if (availableAddresses1) {
        expect(result).toEqual(availableAddresses1[0]);
      } else {
        fail('available address is undefined or null');
      }
    });
  });
  describe('deliveryAddress', () => {
    it('should select deliveryAddress', () => {
      const result = deliveryAddress.projector(initialState);

      expect(result).toEqual(initialState.deliveryAddress);
    });
  });
  describe('personalInfo', () => {
    it('should select personalInfo', () => {
      const result = personalInfo.projector(initialState);

      expect(result).toEqual(initialState.personalInfo);
    });
  });
  describe('deliveryItems', () => {
    it('should select deliveryItems', () => {
      const result = deliveryItems.projector(initialState);

      expect(result).toEqual(initialState.deliveryItems);
    });
  });
  describe('notifications', () => {
    it('should select notifications', () => {
      const result = notifications.projector(initialState);

      expect(result).toEqual(initialState.notifications);
    });
  });
  describe('availableAddresses', () => {
    it('should select availableAddresses', () => {
      const result = availableAddresses.projector(initialState);

      expect(result).toEqual(initialState.availableAddresses);
    });
  });
});
