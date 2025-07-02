import { DeliveryUtil } from './delivery.util';
import { AddressFieldValue, addressFieldValueTestFactory, ViewStateEnum } from '@sales/delivery/data-access';

describe('DeliveryUtil', () => {
  describe('createDeliveryStateEvent', () => {
    it('should create a delivery state event', () => {
      const deliveryAddress: AddressFieldValue = addressFieldValueTestFactory.build();
      const personalInfo = {
        firstname: 'firstname',
        lastname: 'lastname',
        mobile: 'mobile',
        email: 'email',
      };
      const eventInterface = DeliveryUtil.createDeliveryStateEvent(ViewStateEnum.OVERLAY_OPEN, {
        deliveryAddress: deliveryAddress,
        personalInfo: personalInfo,
      });
      expect(eventInterface.body?.state).toEqual(ViewStateEnum.OVERLAY_OPEN);
      expect(eventInterface.body?.personalInfo.personalInfo).toEqual(personalInfo);
      expect(eventInterface.body?.personalInfo.deliveryAddress).toEqual(deliveryAddress);
    });
  });
});
