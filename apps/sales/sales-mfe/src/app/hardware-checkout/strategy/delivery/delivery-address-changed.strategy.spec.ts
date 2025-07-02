import { of } from 'rxjs';
import { HardwareCheckoutFacade } from '../../facades/hardware-checkout.facade';
import { EventFacade } from '@sales/events/data-access';
import {
  DeliveryStateChangeInterface,
  deliveryStateChangeInterfaceFactory,
  PersonalInfo,
} from '@sales/delivery/data-access';
import { salesOrderFactory } from '@sales/hardware-checkout/data-access';
import { AddressUtil } from '../../utils/address.util';
import { jest } from '@jest/globals';
import { DeliveryAddressChangedStrategy } from './delivery-address-changed.strategy';
import { addressUnitTestfactory } from '@sales/shared/address/data-access';

describe('DeliveryAddressChangedStrategy', () => {
  let strategy: DeliveryAddressChangedStrategy;
  let hardwareCheckoutFacade: jest.Mocked<HardwareCheckoutFacade>;
  let eventFacade: jest.Mocked<EventFacade>;
  const personalInfoChanges: DeliveryStateChangeInterface = deliveryStateChangeInterfaceFactory.build();

  beforeEach(() => {
    hardwareCheckoutFacade = {
      salesOrderFromState$: of(salesOrderFactory.build()),
      setDeliveryPersonalInfo: jest.fn(),
      setSummaryDeliveryPersonalInfo: jest.fn(),
      setDeliveryAddress: jest.fn(),
      setSummaryDeliveryAddress: jest.fn(),
      deliveryPersonalInfo$: of(personalInfoChanges.personalInfo.personalInfo),
    } as unknown as jest.Mocked<HardwareCheckoutFacade>;

    eventFacade = {
      triggerAnalyticsClickEvent: jest.fn(),
    } as unknown as jest.Mocked<EventFacade>;

    strategy = new DeliveryAddressChangedStrategy(hardwareCheckoutFacade, eventFacade, personalInfoChanges);
  });

  it('should show loader', () => {
    expect(strategy.showLoader()).toBe(true);
  });

  it('should execute and handle delivery info change', (done) => {
    jest.spyOn(AddressUtil, 'convertFieldValueToDeliveryAddress').mockReturnValue({
      addressUnit: addressUnitTestfactory.build(),
      country: 'Belgium',
      houseNumber: '10',
      municipality: 'testMunicipality',
      postalCode: '2800',
      street: 'teststreet',
    });

    strategy.execute().subscribe((result) => {
      expect(result).toBe(true);
      expect(hardwareCheckoutFacade.setDeliveryPersonalInfo).toHaveBeenCalledWith(
        personalInfoChanges.personalInfo.personalInfo
      );
      expect(hardwareCheckoutFacade.setSummaryDeliveryPersonalInfo).toHaveBeenCalledWith(
        personalInfoChanges.personalInfo.personalInfo
      );
      expect(hardwareCheckoutFacade.setDeliveryAddress).toHaveBeenCalled();
      expect(hardwareCheckoutFacade.setSummaryDeliveryAddress).toHaveBeenCalled();
      done();
    });
  });

  it('should trigger mobile changed event', () => {
    const newPersonalInfo: PersonalInfo = {
      mobile: '987654321',
      firstname: 'Jane',
      lastname: 'Smith',
      email: 'jane.smith@example.com',
    };

    strategy['triggerMobileChangedEvent'](newPersonalInfo);

    expect(eventFacade.triggerAnalyticsClickEvent).toHaveBeenCalledWith({ name: 'phone number updated' });
  });
});
