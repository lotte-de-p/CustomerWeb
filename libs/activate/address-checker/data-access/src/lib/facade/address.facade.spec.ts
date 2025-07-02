import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Observable, of, throwError } from 'rxjs';
import { ProductService } from '../services/product.service';
import { CustomerAddressInterface } from '../interfaces/customer-address.interface';
import { CustomerAddressService } from '../services/customer-address.service';
import { AddressFacade } from './address.facade';
import { FiberAddressCheckerService } from '../services/fiber-address-checker.service';
import { AddressInterface } from '../interfaces/address.interface';
import { ProductSubscriptionsInterface } from '../interfaces/product-subscriptions.interface';

describe('AddressFacade', () => {
  let addressFacade: AddressFacade;
  let customerAddressService: CustomerAddressService;
  let productService: ProductService;
  let fiberAddressCheckerService: FiberAddressCheckerService;

  const messageGroup = 'messageGroup';
  const geoId1234 = 'geoId-1234';
  const geoId5678 = 'geoId-5678';
  const customerAddress5678: CustomerAddressInterface = {
    id: '5678',
    houseNumber: '3',
    postalCode: '2000',
    municipality: 'Mechelen',
    street: 'Street 2',
    subHouseNumber: '123',
  };
  const customerAddress1234: CustomerAddressInterface = {
    id: '1234',
    houseNumber: '2',
    postalCode: '1000',
    municipality: 'Brussels',
    street: 'Street 1',
    subHouseNumber: '123',
  };

  const address1234: AddressInterface = {
    addressGeoId: geoId1234,
    houseNumber: '2',
    zipcode: '1000',
    subMunicipality: 'Brussels',
    street: 'Street 1',
    subHouseNumber: '123',
  };

  const address5678: AddressInterface = {
    addressGeoId: geoId5678,
    houseNumber: '3',
    zipcode: '2000',
    subMunicipality: 'Mechelen',
    street: 'Street 2',
    subHouseNumber: '123',
  };

  const noGeoIdAddress5678: AddressInterface = {
    addressGeoId: '',
    houseNumber: '3',
    zipcode: '2000',
    subMunicipality: 'Mechelen',
    street: 'Street 2',
    subHouseNumber: '123',
  };
  const productSubscriptions: ProductSubscriptionsInterface[] = [
    {
      addressId: '1234',
    },
    {
      addressId: '1234',
    },
    {
      addressId: '5678',
    },
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AddressFacade, { provide: 'Window', useValue: {} }],
      imports: [HttpClientTestingModule],
    });
    addressFacade = TestBed.inject(AddressFacade);
    customerAddressService = TestBed.inject(CustomerAddressService);
    productService = TestBed.inject(ProductService);
    fiberAddressCheckerService = TestBed.inject(FiberAddressCheckerService);
  });

  describe('getUserAddresses', () => {
    beforeEach(() => {
      jest.spyOn(productService, 'getProductLinesByType').mockReturnValue(of(productSubscriptions));
      jest
        .spyOn(customerAddressService, 'getCustomerAddress')
        .mockImplementation((messageGroup: string, addressId: string): Observable<CustomerAddressInterface> => {
          expect(messageGroup).toEqual(messageGroup);
          return addressId === '1234' ? of(customerAddress1234) : of(customerAddress5678);
        });
    });
    it('should get addresses for logged in customer without duplicates', (done) => {
      jest
        .spyOn(fiberAddressCheckerService, 'getAddressGeoId')
        .mockImplementation((messageGroup: string, customerAddress: CustomerAddressInterface): Observable<string> => {
          expect(messageGroup).toEqual(messageGroup);
          return customerAddress === customerAddress1234 ? of(geoId1234) : of(geoId5678);
        });

      addressFacade.getUserAddresses(messageGroup).subscribe((addresses: AddressInterface[]) => {
        expect(addresses).toEqual([address1234, address5678]);
        done();
      });
    });

    it('should get addresses for logged in customer with empty geo id in case of geo id not found', (done) => {
      jest
        .spyOn(fiberAddressCheckerService, 'getAddressGeoId')
        .mockImplementation((messageGroup: string, customerAddress: CustomerAddressInterface): Observable<string> => {
          expect(messageGroup).toEqual(messageGroup);
          if (customerAddress === customerAddress1234) {
            return of(geoId1234);
          }
          if (customerAddress === customerAddress5678) {
            throwError(() => 'Address not found');
          }
          return of('');
        });

      addressFacade.getUserAddresses(messageGroup).subscribe((addresses: AddressInterface[]) => {
        expect(addresses).toEqual([address1234, noGeoIdAddress5678]);
        done();
      });
    });
  });
});
