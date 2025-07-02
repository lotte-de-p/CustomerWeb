import { Factory } from 'fishery';
import { DeliveryContentItem } from './delivery-content-item.interface';

export const deliveryContentItemTestFactory = Factory.define<DeliveryContentItem>(() => {
  return {
    productType: 'accessories',
    deliveryInfo: {
      name: 'accessories',
      iconType: 'accessories',
    },
    quantity: 1,
  };
});

export const deliveryContentSmartphoneItemTestFactory = Factory.define<DeliveryContentItem>(() => {
  return {
    productType: 'smartphone',
    deliveryInfo: {
      name: 'smartphone',
      iconType: 'mobile',
    },
    quantity: 2,
  };
});

export const deliveryContentTestFactory = Factory.define<DeliveryContentItem[]>(() => {
  return [
    deliveryContentItemTestFactory.build(), // Call .build() to generate the object
    deliveryContentSmartphoneItemTestFactory.build(), // Call .build() to generate the object
  ];
});
