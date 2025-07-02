import { TestBed } from '@angular/core/testing';
import { ProductSubscriptionsMapper } from './product-subscriptions.mapper';
import { RawProductSubscriptionsInterface } from '../interfaces/raw-product-subscriptions.interface';
import { ProductSubscriptionsInterface } from '../interfaces/product-subscriptions.interface';

describe('ProductSubscriptionsMapper', () => {
  let productSubscriptionsMapper: ProductSubscriptionsMapper;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductSubscriptionsMapper, { provide: 'Window', useValue: {} }],
    });
    productSubscriptionsMapper = TestBed.inject(ProductSubscriptionsMapper);
  });

  describe('toModel', () => {
    it('should map product subscriptions data', () => {
      const rawProductSubscriptions: RawProductSubscriptionsInterface[] = [
        {
          addressId: '1234',
          locationId: undefined,
        },
        {
          addressId: '5678',
          locationId: '11111',
        },
      ];

      const productSubscriptions: ProductSubscriptionsInterface[] =
        productSubscriptionsMapper.toModel(rawProductSubscriptions);

      expect(rawProductSubscriptions).toEqual(productSubscriptions);
    });
  });
});
