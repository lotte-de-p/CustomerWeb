import { TestBed } from '@angular/core/testing';
import { InstallationAddressFacade } from './installation-address.facade';
import { of } from 'rxjs';
import {
  antwerpAddressTestFactory,
  InstallationAddress,
  InstallationAddressService,
  OrderResultInterface,
  orderResultInterfaceTestFactory,
} from '@sales/order-configurator/domain-installation-address';

describe('InstallationAddressFacade', () => {
  let facade: InstallationAddressFacade;
  let service: jest.Mocked<InstallationAddressService>;

  beforeEach(() => {
    const spy = {
      getInstallationAddresses: jest.fn(),
      orderOnGeographicalAddress: jest.fn(),
    };

    TestBed.configureTestingModule({
      providers: [InstallationAddressFacade, { provide: InstallationAddressService, useValue: spy }],
    });

    facade = TestBed.inject(InstallationAddressFacade);
    service = TestBed.inject(InstallationAddressService) as jest.Mocked<InstallationAddressService>;
  });

  it('should return a list of installation addresses', (done) => {
    const mockAddresses: InstallationAddress[] = [antwerpAddressTestFactory.build()];
    service.getInstallationAddresses.mockReturnValue(of(mockAddresses));

    facade.updateAvailableInstallationAddresses().subscribe((addresses: InstallationAddress[]) => {
      expect(addresses).toEqual(mockAddresses);
      done();
    });
  });

  it('should return an order result with success status', (done) => {
    const addressId = '123';
    const mockResult: OrderResultInterface = orderResultInterfaceTestFactory.build({ addressId: addressId });
    service.orderOnGeographicalAddress.mockReturnValue(of(mockResult));

    facade.prepareOrderOnAddress(addressId).subscribe((result: OrderResultInterface) => {
      expect(result).toEqual(mockResult);
      done();
    });
  });

  it('should handle empty addressId for orderOnGeographicalAddress', (done) => {
    const mockResult: OrderResultInterface = orderResultInterfaceTestFactory.build({ addressId: '' });
    service.orderOnGeographicalAddress.mockReturnValue(of(mockResult));

    facade.prepareOrderOnAddress('').subscribe((result: OrderResultInterface) => {
      expect(result).toEqual(mockResult);
      done();
    });
  });

  it('should return an error if address ID is not found in local storage', (done) => {
    jest.spyOn(Object.getPrototypeOf(window.localStorage), 'getItem').mockReturnValue(null);

    facade.prepareOrderForNewCustomer().subscribe({
      error: (err) => {
        expect(err).toEqual(
          new Error('Location ID of new customer (set in customer registration) not found in local storage')
        );
        done();
      },
    });
  });

  it('should return an order result for new customer if address ID is found in local storage', (done) => {
    const addressId = '123';
    const mockResult: OrderResultInterface = { addressId, status: 'success' };
    jest.spyOn(Object.getPrototypeOf(window.localStorage), 'getItem').mockReturnValue(addressId);
    service.orderOnGeographicalAddress.mockReturnValue(of(mockResult));

    facade.prepareOrderForNewCustomer().subscribe((result: OrderResultInterface) => {
      expect(result).toEqual(mockResult);
      expect(window.localStorage.getItem).toHaveBeenCalledWith('customerInstallationLocationId');
      done();
    });
  });
});
