import { CustomerCategoryUtil } from './customer-category.util';
import { ContactDetailsCustomerCategoryEnum } from '@sales/hardware-checkout/data-access';
import { HardwareCheckoutError } from '../classes/hardware-checkout-error.class';
import { GetCustomerDataError } from '../constants/errors.constants';

describe('CustomerCategoryUtil', () => {
  describe('GetCustomerCategory', () => {
    it('should pass when customer category is residential', () => {
      const name = 'Production Test';
      const result = CustomerCategoryUtil.getCustomerCategory(name);
      expect(result).toEqual(ContactDetailsCustomerCategoryEnum.RESIDENTIAL);
    });

    it('should pass when customer category is business', () => {
      const name = 'Production Test Business';
      const result = CustomerCategoryUtil.getCustomerCategory(name);
      expect(result).toEqual(ContactDetailsCustomerCategoryEnum.SOHO);
    });

    it('should pass when customer category is prd business', () => {
      const name = 'Production test Business';
      const result = CustomerCategoryUtil.getCustomerCategory(name);
      expect(result).toEqual(ContactDetailsCustomerCategoryEnum.SOHO);
    });

    it('should pass when customer category is event/demo', () => {
      const name = 'Event/Demo';
      const result = CustomerCategoryUtil.getCustomerCategory(name);
      expect(result).toEqual(ContactDetailsCustomerCategoryEnum.RESIDENTIAL);
    });

    it('should fail when customer category is abc', () => {
      const name = 'abc';
      expect(function () {
        CustomerCategoryUtil.getCustomerCategory(name);
      }).toThrow(new HardwareCheckoutError(GetCustomerDataError));
    });
  });
});
