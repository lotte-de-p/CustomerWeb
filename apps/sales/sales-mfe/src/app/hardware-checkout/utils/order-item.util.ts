import { OrderItem, OrderItemDeliveryChars } from '@sales/hardware-checkout/data-access';

export class OrderItemUtil {
  private static readonly charMapping = {
    'Delivery Address': 'address',
    'Delivery Type': 'deliveryType',
    'Municipality/Sub-municipality': 'municipality',
    'Postal Code': 'postalCode',
    Street: 'street',
    'House Number': 'houseNumber',
    'Sub-house Number': 'subHouseNumber',
    'Box Number': 'box',
    'First Name': 'firstName',
    'Last Name': 'lastName',
    'Mobile Number': 'mobileNumber',
    'E-Mail': 'email',
  };

  public static getDeliveryChars(orderItem: OrderItem): OrderItemDeliveryChars {
    const result: OrderItemDeliveryChars = {};
    const data = orderItem.chars;

    for (const [key, value] of Object.entries(OrderItemUtil.charMapping)) {
      if (data[key]) {
        result[value] = data[key];
      }
    }

    return result;
  }
}
