import { createInstallationTypes, InstallationTypeEnum, RawInstallationType } from './installation-type.interface';
import {
  rawInstallationTypeSelfInstallTestFactory,
  rawInstallationTypeTechnicalInstallTestFactory,
} from './installation-type.testfactory';
import { DeliveryMethodTypeEnum } from './delivery-method.interface';

describe('createInstallationTypes', () => {
  it('should create installation types with correct total amount of options', () => {
    const rawInstallationTypes = [
      rawInstallationTypeSelfInstallTestFactory.build(),
      rawInstallationTypeTechnicalInstallTestFactory.build(),
    ];

    const result = createInstallationTypes(rawInstallationTypes);

    expect(result.totalAmountOfOptions).toBe(3);
  });

  it('should handle empty installation types list', () => {
    const rawInstallationTypes: RawInstallationType[] = [];

    const result = createInstallationTypes(rawInstallationTypes);

    expect(result.list).toEqual([]);
    expect(result.totalAmountOfOptions).toBe(0);
  });

  it('should create installation types with correct structure', () => {
    const rawInstallationTypes = [rawInstallationTypeSelfInstallTestFactory.build()];

    const result = createInstallationTypes(rawInstallationTypes);

    expect(result.list).toEqual([
      {
        deliveryMethods: [
          {
            priceAndDiscount: {
              amount: 0,
              discount: undefined,
              isFree: true,
              discountedAmount: 0,
            },
            type: DeliveryMethodTypeEnum.PICKUP_DELIVERY,
            value: 'Pickup',
          },
          {
            priceAndDiscount: {
              amount: 50,
              discountedAmount: 50,
              isFree: false,
            },
            type: DeliveryMethodTypeEnum.HOME,
            value: 'Home',
          },
        ],
        type: InstallationTypeEnum.SELF_INSTALLATION,
      },
    ]);
  });
});
