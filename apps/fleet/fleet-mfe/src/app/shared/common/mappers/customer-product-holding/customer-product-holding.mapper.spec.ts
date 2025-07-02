import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CustomerProductHoldingMapper } from './customer-product-holding.mapper';
import { cleanStylesFromDom } from '@telenet/ng-lib-shared';
import { RawCustomerProductHoldingInterface } from '../../interfaces/raw-customer-product-holding.interface';
import { expect } from '@jest/globals';

const mockCustomerProductHolding = require('../../../../../../../../../fixtures/http/fleet/products/customer-product-holding-split-bill-profile.json');

describe('CustomerProductHoldingMapper', () => {
  let customerProductHoldingMapper: CustomerProductHoldingMapper;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{ provide: 'Window', useValue: {} }],
      imports: [HttpClientTestingModule],
    });
    customerProductHoldingMapper = TestBed.inject(CustomerProductHoldingMapper);
  });

  describe('toModel', () => {
    it('should map split bill profile in case of split bill customer', () => {
      const actual = customerProductHoldingMapper.toModel(
        mockCustomerProductHolding as RawCustomerProductHoldingInterface
      );
      expect(actual?.splitBillProfile?.id).toBe('21345');
      expect(actual?.splitBillProfile?.name).toBe('sampleProfile1');
    });

    it('should map refereneInformation', () => {
      const actual = customerProductHoldingMapper.toModel(
        mockCustomerProductHolding as RawCustomerProductHoldingInterface
      );
      expect(actual?.referenceInformation).toBe('referenceInformation');
    });
  });

  afterEach(() => {
    cleanStylesFromDom();
  });
});
