import { SearchCustomerMapper } from './search-customer.mapper';
import { TestBed } from '@angular/core/testing';

describe('SearchCustomerMapper', () => {
  let mapper: SearchCustomerMapper;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SearchCustomerMapper],
    });
    mapper = TestBed.inject(SearchCustomerMapper);
  });

  describe('toModel', () => {
    it('should return data as CustomerResponseInterface if the httpStatus is present and below 400', () => {
      const result = mapper.toModel({ customerType: 'Residential', customerNumber: '123456' }, 200);

      expect(result).toEqual({ customerType: 'Residential', customerNumber: '123456' });
    });
    it('should throw an error if the httpStatus is present and above 400', () => {
      const error = () => {
        mapper.toModel({ customerType: 'Residential', customerNumber: '123456' }, 405);
      };

      expect(error).toThrow(new Error());
    });
    it('should return data as CustomerResponseInterface if the httpStatus is not present', () => {
      const result = mapper.toModel({ customerType: 'Residential', customerNumber: '123456' });

      expect(result).toEqual({ customerType: 'Residential', customerNumber: '123456' });
    });
  });
});
