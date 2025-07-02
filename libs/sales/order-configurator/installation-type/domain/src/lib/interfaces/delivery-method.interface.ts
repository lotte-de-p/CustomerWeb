export enum DeliveryMethodTypeEnum {
  HOME = 'HOME-DELIVERY',
  PICKUP_DELIVERY = 'PICK-UP-DELIVERY',
  COMFORT = 'COMFORT-INSTALL',
  MODEM_COMPATIBILITY = 'MODEM-COMPATIBILITY',
  SELF_INSTALL_AT_HOME = 'SELF-INSTALL-AT-HOME',
  INSTALLATION_TYPE_MODEM_COMPATIBILITY = 'INSTALLATION-TYPE-MODEM-COMPATIBILITY',
  BUSINESS = 'BUSINESS-INSTALL',
}

export interface Discount {
  names: string[];
  amount: number;
}

export interface PriceAndDiscount {
  amount: number;
  discount?: Discount;

  isFree: boolean;
  discountedAmount: number;
}

export interface RawDeliveryMethod {
  type: DeliveryMethodTypeEnum;
  value: string;
  price: number;
  discount?: Discount;
}

export interface DeliveryMethod {
  type: DeliveryMethodTypeEnum;
  value: string;

  priceAndDiscount: PriceAndDiscount;
}

export function createDeliveryMethod(rawDeliveryMethod: RawDeliveryMethod): DeliveryMethod {
  return {
    type: rawDeliveryMethod.type,
    value: rawDeliveryMethod.value,

    priceAndDiscount: {
      amount: rawDeliveryMethod.price,
      discount: rawDeliveryMethod.discount,
      isFree: rawDeliveryMethod.price === 0,

      discountedAmount: rawDeliveryMethod.discount
        ? rawDeliveryMethod.price - rawDeliveryMethod.discount.amount
        : rawDeliveryMethod.price,
    },
  };
}
