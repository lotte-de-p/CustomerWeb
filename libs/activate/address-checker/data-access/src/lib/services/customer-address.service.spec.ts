import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { OcapiService } from '@telenet/ng-lib-ocapi';
import { of } from 'rxjs';
import { expect } from '@jest/globals';
import { CustomerAddressService } from './customer-address.service';
import { CustomerAddressMapper } from '../mappers/customer-address.mapper';

describe('CustomerAddressService', () => {
  let customerAddressService: CustomerAddressService;
  let ocapiService: OcapiService;
  let customerAddressMapper: CustomerAddressMapper;
  const messageGroup = 'messageGroup';
  const defaultUrl = '/public/api/contact-service/v1/contact/addresses';
  const addressId = '1234';

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CustomerAddressService, { provide: 'Window', useValue: {} }],
      imports: [HttpClientTestingModule],
    });
    customerAddressService = TestBed.inject(CustomerAddressService);
    ocapiService = TestBed.inject(OcapiService);
    customerAddressMapper = TestBed.inject(CustomerAddressMapper);
  });

  describe('getCustomerAddress', () => {
    it('should get customer address based on address id', () => {
      jest.spyOn(ocapiService, 'doGet').mockReturnValue(of({}));
      customerAddressService.getCustomerAddress(messageGroup, addressId);
      expect(ocapiService.doGet).toHaveBeenCalledWith(
        expect.objectContaining({
          messageGroupName: messageGroup,
          endpoint: `${defaultUrl}/${addressId}`,
          mapper: customerAddressMapper,
        })
      );
    });
  });
});
