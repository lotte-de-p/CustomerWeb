import { TestBed } from '@angular/core/testing';
import { CustomerProductHoldingMapper } from './customer-product-holding.mapper';
import { CustomerProductHolding } from '../../../entities/product-finder/customerproductholding/customer-product-holding.interface';
import { RawCustomerProductHoldingResult } from './raw-customer-product-holding-result.interface';

describe('CustomerProductHoldingMapper', () => {
  let customerProductHoldingMapper: CustomerProductHoldingMapper;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    customerProductHoldingMapper = TestBed.inject(CustomerProductHoldingMapper);
  });

  describe('toModel', () => {
    it('should map RawCustomerProductHoldingResult to CustomerProductHolding[]', () => {
      const rawCustomerProductHoldingResult: RawCustomerProductHoldingResult = {
        customerproductholding: [
          {
            identifier: '1',
            specurl: 'specUrl/1',
            products: [
              {
                identifier: '2',
                specurl: 'specUrl/2',
                products: [],
                options: [],
              },
            ],
            options: [
              {
                specurl: 'specUrl/3',
              },
            ],
            address: {
              addressid: 'addressId',
              municipality: 'municipality',
              postalcode: 'postalCode',
              street: 'street',
              housenr: 'houseNr',
              country: 'country',
            },
          },
        ],
      };
      const expected: CustomerProductHolding[] = [
        {
          identifier: '1',
          specUrl: 'specUrl/1',
          products: [
            {
              identifier: '2',
              specUrl: 'specUrl/2',
              products: [],
              options: [],
            },
          ],
          options: [
            {
              specUrl: 'specUrl/3',
            },
          ],
          address: {
            addressId: 'addressId',
            municipality: 'municipality',
            postalCode: 'postalCode',
            street: 'street',
            houseNr: 'houseNr',
            country: 'country',
          },
        },
      ];

      const result: CustomerProductHolding[] = customerProductHoldingMapper.toModel(rawCustomerProductHoldingResult);

      expect(result).toEqual(expected);
    });
  });
});
