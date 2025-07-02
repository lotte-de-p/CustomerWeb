import { TestBed } from '@angular/core/testing';
import { InstallationAddressService } from './installation-address.service';
import { InstallationAddress, OrderResultInterface } from '../interfaces';

describe('InstallationAddressService', () => {
  let service: InstallationAddressService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InstallationAddressService);
  });

  it('should return a list of installation addresses', (done) => {
    service.getInstallationAddresses().subscribe((addresses: InstallationAddress[]) => {
      expect(addresses.length).toBe(2);
      expect(addresses[0].street).toBe('Kerkstraat');
      expect(addresses[0].houseNumber).toBe('20');
      expect(addresses[1].street).toBe('Elektriciteitstraat');
      expect(addresses[1].houseNumber).toBe('1');
      done();
    });
  });

  it('should return an order result with success status', (done) => {
    const addressId = '123';
    service.orderOnGeographicalAddress(addressId).subscribe((result: OrderResultInterface) => {
      expect(result.addressId).toBe(addressId);
      expect(result.status).toBe('success');
      done();
    });
  });

  it('should handle empty addressId for orderOnGeographicalAddress', (done) => {
    service.orderOnGeographicalAddress('').subscribe((result: OrderResultInterface) => {
      expect(result.addressId).toBe('');
      expect(result.status).toBe('success');
      done();
    });
  });
});
