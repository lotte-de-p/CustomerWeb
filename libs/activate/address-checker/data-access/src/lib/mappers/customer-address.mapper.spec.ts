import { TestBed } from '@angular/core/testing';
import { CustomerAddressMapper } from './customer-address.mapper';
import { RawCustomerAddressInterface } from '../interfaces/raw-customer-address.interface';
import { CustomerAddressInterface } from '../interfaces/customer-address.interface';

describe('CustomerAddressMapper', () => {
  let customerAddressMapper: CustomerAddressMapper;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CustomerAddressMapper, { provide: 'Window', useValue: {} }],
    });
    customerAddressMapper = TestBed.inject(CustomerAddressMapper);
  });

  describe('toModel', () => {
    it('should map customer address data', () => {
      const rawCustomerAddress: RawCustomerAddressInterface = {
        id: '1935890475690435',
        street: 'Avenue Houba de Strooper',
        postalCode: '1020',
        municipality: 'Brussels',
        houseNumber: '25',
      };

      const customerAddress: CustomerAddressInterface = customerAddressMapper.toModel(rawCustomerAddress);

      expect(rawCustomerAddress).toEqual(customerAddress);
    });
  });
});
