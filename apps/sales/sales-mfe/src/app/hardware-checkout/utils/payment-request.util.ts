import { DeliveryAddress } from '@sales/delivery/data-access';
import {
  OrderItem,
  PaymentRequestDataInterface,
  PaymentRequestPersonalInfo,
  SalesOrder,
} from '@sales/hardware-checkout/data-access';
import { HardwareCheckoutError } from '../classes/hardware-checkout-error.class';
import { MandatoryFieldsAreMissing } from '../constants/errors.constants';

export class PaymentRequestUtil {
  static getPaymentRequestObject(
    salesOrder: SalesOrder,
    homeDeliveryOrderItem: OrderItem,
    urlWithoutParams: string,
    deliveryAddress: DeliveryAddress,
    language: string,
    device: string
  ): PaymentRequestDataInterface {
    let mobileNumber = '';
    if (homeDeliveryOrderItem?.chars['Mobile Number']) {
      mobileNumber = homeDeliveryOrderItem?.chars['Mobile Number'];
    } else {
      throw new HardwareCheckoutError(MandatoryFieldsAreMissing);
    }
    return {
      amount: Number(salesOrder.price.upfrontPaymentTotalForSecuredHomeDeliveryEquipment.value) + '',
      salesOrderId: salesOrder.id,
      personalInfo: PaymentRequestUtil.getPersonalInfoRequest(homeDeliveryOrderItem),
      address: {
        street: deliveryAddress?.street + '',
        municipality: deliveryAddress?.municipality + '',
        postalCode: deliveryAddress?.postalCode + '',
      },
      mobileNumber: mobileNumber,
      shopUrl: urlWithoutParams + '?orderid=' + salesOrder.id,
      language: language,
      deviceType: device,
    };
  }

  private static getPersonalInfoRequest(homeDeliveryOrderItem: OrderItem): PaymentRequestPersonalInfo {
    let firstName = '';
    let lastName = '';
    let email = '';

    if (
      homeDeliveryOrderItem?.chars['First Name'] &&
      homeDeliveryOrderItem?.chars['Last Name'] &&
      homeDeliveryOrderItem?.chars['E-Mail']
    ) {
      firstName = homeDeliveryOrderItem.chars['First Name'];
      lastName = homeDeliveryOrderItem.chars['Last Name'];
      email = homeDeliveryOrderItem.chars['E-Mail'];
    } else {
      throw new HardwareCheckoutError(MandatoryFieldsAreMissing);
    }

    return {
      firstName: firstName,
      lastName: lastName,
      email: email,
    };
  }
}
