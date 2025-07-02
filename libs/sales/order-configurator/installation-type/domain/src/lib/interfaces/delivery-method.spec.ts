import { createDeliveryMethod, DeliveryMethodTypeEnum } from './delivery-method.interface';

describe('createDeliveryMethod', () => {
  it('should create a delivery method with no discount', () => {
    const installationTypeOption = {
      type: DeliveryMethodTypeEnum.HOME,
      value: 'Home Delivery',
      price: 100,
    };

    const result = createDeliveryMethod(installationTypeOption);

    expect(result).toEqual({
      type: DeliveryMethodTypeEnum.HOME,
      value: 'Home Delivery',
      priceAndDiscount: {
        amount: 100,
        discount: undefined,
        isFree: false,
        discountedAmount: 100,
      },
    });
  });

  it('should create a delivery method with a discount', () => {
    const installationTypeOption = {
      type: DeliveryMethodTypeEnum.COMFORT,
      value: 'Comfort Install',
      price: 200,
      discount: { names: ['Promo'], amount: 50 },
    };

    const result = createDeliveryMethod(installationTypeOption);

    expect(result).toEqual({
      type: DeliveryMethodTypeEnum.COMFORT,
      value: 'Comfort Install',
      priceAndDiscount: {
        amount: 200,
        discount: { names: ['Promo'], amount: 50 },
        isFree: false,
        discountedAmount: 150,
      },
    });
  });

  it('should create a free delivery method', () => {
    const installationTypeOption = {
      type: DeliveryMethodTypeEnum.SELF_INSTALL_AT_HOME,
      value: 'Self Install',
      price: 0,
    };

    const result = createDeliveryMethod(installationTypeOption);

    expect(result).toEqual({
      type: DeliveryMethodTypeEnum.SELF_INSTALL_AT_HOME,
      value: 'Self Install',
      priceAndDiscount: {
        amount: 0,
        discount: undefined,
        isFree: true,
        discountedAmount: 0,
      },
    });
  });

  it('should handle undefined discount gracefully', () => {
    const installationTypeOption = {
      type: DeliveryMethodTypeEnum.BUSINESS,
      value: 'Business Install',
      price: 300,
      discount: undefined,
    };

    const result = createDeliveryMethod(installationTypeOption);

    expect(result).toEqual({
      type: DeliveryMethodTypeEnum.BUSINESS,
      value: 'Business Install',
      priceAndDiscount: {
        amount: 300,
        discount: undefined,
        isFree: false,
        discountedAmount: 300,
      },
    });
  });
});
