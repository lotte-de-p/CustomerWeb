import { Factory } from 'fishery';
import {
  DeliveryMethod,
  DeliveryMethodTypeEnum,
  PriceAndDiscount,
  RawDeliveryMethod,
} from './delivery-method.interface';

export const rawInstallationTypeOptionHomeDeliveryTestFactory = Factory.define<RawDeliveryMethod>(() => {
  return {
    type: DeliveryMethodTypeEnum.HOME,
    value: 'Home',
    price: 50,
  };
});

export const rawInstallationTypeOptionPickupTestFactory = Factory.define<RawDeliveryMethod>(() => {
  return {
    type: DeliveryMethodTypeEnum.PICKUP_DELIVERY,
    value: 'Pickup',
    price: 0,
  };
});

export const rawInstallationTypeOptionComfortTestFactory = Factory.define<RawDeliveryMethod>(() => {
  return {
    type: DeliveryMethodTypeEnum.COMFORT,
    value: 'Comfort',
    price: 100,
    discount: { names: ['Comfort discount'], amount: 10 },
  };
});

export const deliveryMethodTestfactory = Factory.define<DeliveryMethod>(() => {
  return {
    type: DeliveryMethodTypeEnum.HOME,
    value: 'Home',

    priceAndDiscount: priceAndDiscountTestfactory.build(),
  };
});

export const priceAndDiscountTestfactory = Factory.define<PriceAndDiscount>(() => {
  return {
    amount: 50,
    discount: { names: ['Home discount'], amount: 4.5 },
    isFree: false,

    discountedAmount: 45.5,
  };
});
