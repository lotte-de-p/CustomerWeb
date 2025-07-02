import { CostMapper } from './cost.mapper';
import { PromoMapper } from './promo.mapper';
import { ProductMapper } from './product.mapper';
import { TestBed } from '@angular/core/testing';
import { InstallTypeMapper } from './install-type.mapper';
import { OptionMapper } from './option.mapper';

describe('ProductMapper', (): void => {
  let productMapper: ProductMapper;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductMapper, CostMapper, InstallTypeMapper, OptionMapper, PromoMapper],
    }).compileComponents();
    productMapper = TestBed.inject(ProductMapper);
  });
  describe('map', (): void => {
    it('should map the rawProduct', (): void => {
      const actualProduct = productMapper.map({
        correlationId: '123',
        omapiid: 'omapi123',
        price: 45,
        priceexclvat: 35,
        description: 'some description',
        specUrl: 'http_url',
        costs: [],
        options: [],
        promos: [],
        installtypes: [],
        getMonthlyTotalCost(): number {
          return 41;
        },
      });

      expect({ ...actualProduct }).toEqual({
        correlationId: '123',
        description: 'some description',
        omapiId: 'omapi123',
        price: 45,
        priceexclvat: 35,
        specUrl: 'http_url',
        costs: [],
        installtypes: [],
        options: [],
        promos: [],
      });
    });
  });
});
