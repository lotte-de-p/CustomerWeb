import { OrderItem, OrderItemDeliveryChars, orderItemTestFactory } from '@sales/hardware-checkout/data-access';
import { OrderItemUtil } from './order-item.util';

const deliveryAddress = 'Elektriciteitstraat, h. 27, sub h. a, b. 1, 2800, Mechelen, België';
const deliveryType = '9158239724013806199';
const municipality = 'Mechelen';
const postalCode = '2800';
const street = 'Elektriciteitstraat';
const houseNumber = '27';
const subHouseNumber = 'a';
const boxNumber = '1';
const firstName = 'John';
const lastName = 'Doe';
const mobileNumber = '123456789';
const email = 'john.doe@example.com';

describe('OrderItemUtil', () => {
  describe('getDeliveryChars', () => {
    it('should return all delivery chars when all fields are present', () => {
      const orderItem: OrderItem = orderItemTestFactory.build({
        chars: {
          'Delivery Address': deliveryAddress,
          'Delivery Type': deliveryType,
          'Municipality/Sub-municipality': municipality,
          'Postal Code': postalCode,
          Street: street,
          'House Number': houseNumber,
          'Sub-house Number': subHouseNumber,
          'Box Number': boxNumber,
          'First Name': firstName,
          'Last Name': lastName,
          'Mobile Number': mobileNumber,
          'E-Mail': email,
        },
      });

      const expected: OrderItemDeliveryChars = {
        address: deliveryAddress,
        deliveryType,
        municipality,
        postalCode,
        street,
        houseNumber,
        subHouseNumber,
        box: boxNumber,
        firstName,
        lastName,
        mobileNumber,
        email,
      };

      const result = OrderItemUtil.getDeliveryChars(orderItem);
      expect(result).toEqual(expected);
    });

    it('should return partial delivery chars when some fields are missing', () => {
      const orderItem: OrderItem = orderItemTestFactory.build({
        chars: {
          'Delivery Address': deliveryAddress,
          'Postal Code': postalCode,
          Street: street,
        },
      });

      const expected: OrderItemDeliveryChars = {
        address: deliveryAddress,
        postalCode,
        street,
      };

      const result = OrderItemUtil.getDeliveryChars(orderItem);
      expect(result).toEqual(expected);
    });

    it('should return minimal delivery chars when only required fields are present', () => {
      const orderItem: OrderItem = orderItemTestFactory.build({
        chars: {
          'Delivery Address': deliveryAddress,
        },
      });

      const expected: OrderItemDeliveryChars = {
        address: deliveryAddress,
      };

      const result = OrderItemUtil.getDeliveryChars(orderItem);
      expect(result).toEqual(expected);
    });

    it('should return additional delivery chars when optional fields are present', () => {
      const orderItem: OrderItem = orderItemTestFactory.build({
        chars: {
          'First Name': firstName,
          'Last Name': lastName,
          'Mobile Number': mobileNumber,
          'E-Mail': email,
        },
      });

      const expected: OrderItemDeliveryChars = {
        firstName,
        lastName,
        mobileNumber,
        email,
      };

      const result = OrderItemUtil.getDeliveryChars(orderItem);
      expect(result).toEqual(expected);
    });

    it('should return an empty object when none of the fields are present', () => {
      const orderItem: OrderItem = orderItemTestFactory.build({
        chars: {},
      });

      const expected: OrderItemDeliveryChars = {};

      const result = OrderItemUtil.getDeliveryChars(orderItem);
      expect(result).toEqual(expected);
    });
  });
});
