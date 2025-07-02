import { CustomerAccountDetailsUtil } from './customer-account-details.util';
import { customerAccountDetailsFactory, customerLocationFactory } from '@sales/hardware-checkout/data-access';

describe('CustomerAccountDetailsUtil', () => {
  describe('getCustomerLocationId', () => {
    it('should return undefined if customer account details is undefined', () => {
      const customerAccountDetails = undefined;
      const underTest = CustomerAccountDetailsUtil.getCustomerLocationId(customerAccountDetails);
      expect(underTest).toBeUndefined();
    });

    describe('return undefined', () => {
      it('should return undefined if customer locations is undefined', () => {
        const customerAccountDetails = customerAccountDetailsFactory.build();
        delete customerAccountDetails.customerLocations;
        const underTest = CustomerAccountDetailsUtil.getCustomerLocationId(customerAccountDetails);
        expect(underTest).toBeUndefined();
      });

      it('should return undefined if customer locations is empty', () => {
        const customerAccountDetails = customerAccountDetailsFactory.build({ customerLocations: [] });
        delete customerAccountDetails.customerLocations;
        const underTest = CustomerAccountDetailsUtil.getCustomerLocationId(customerAccountDetails);
        expect(underTest).toBeUndefined();
      });

      it('should return undefined if customer locations only contains pseudo location', () => {
        const customerAccountDetails = customerAccountDetailsFactory.build({
          customerLocations: [customerLocationFactory.build({ isPseudoLocation: true })],
        });
        const underTest = CustomerAccountDetailsUtil.getCustomerLocationId(customerAccountDetails);
        expect(underTest).toBeUndefined();
      });
    });

    it('should return the correct address id', () => {
      const customerAccountDetails = customerAccountDetailsFactory.build();
      const underTest = CustomerAccountDetailsUtil.getCustomerLocationId(customerAccountDetails);
      expect(underTest).toBe('123456789');
    });

    it('should return the correct address id for a Soho customer', () => {
      const customerAccountDetails = customerAccountDetailsFactory.build({
        legalAddress: {
          name: 'test',
          id: '84654654654651321',
        },
      });
      const underTest = CustomerAccountDetailsUtil.getCustomerLocationId(customerAccountDetails, true);
      expect(underTest).toBe('987654321');
    });

    it('should return default address id if the customerlocation doesnt include the address id', () => {
      const customerAccountDetails = customerAccountDetailsFactory.build({
        customerAddress: {
          id: '123456789',
          name: '17767',
        },
      });
      const underTest = CustomerAccountDetailsUtil.getCustomerLocationId(customerAccountDetails);
      expect(underTest).toBe('123456789');
    });

    it('should return default first address id if customer address is undefined', () => {
      const customerAccountDetails = customerAccountDetailsFactory.build();
      delete customerAccountDetails.customerAddress;
      const underTest = CustomerAccountDetailsUtil.getCustomerLocationId(customerAccountDetails);
      expect(underTest).toBe('123456789');
    });
  });
});
