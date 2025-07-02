import { PromoMapper } from './promo.mapper';
import { TestBed } from '@angular/core/testing';
import { OptionMapper } from './option.mapper';

describe('OptionMapper', (): void => {
  let optionMapper: OptionMapper;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OptionMapper, PromoMapper],
    }).compileComponents();
    optionMapper = TestBed.inject(OptionMapper);
  });
  describe('map', (): void => {
    it('should map the rawOption', (): void => {
      const actualOption = optionMapper.map({
        description: 'this is an option',
        mutuallyExclusive: 'sup',
        omapiId: 'fooo',
        originalprice: 50,
        price: 80,
        priceexclvat: 60,
        promos: [],
        selected: true,
        specUrl: 'someUrl',
      });

      expect({ ...actualOption }).toEqual({
        description: 'this is an option',
        mutuallyExclusive: 'sup',
        omapiId: 'fooo',
        originalprice: 50,
        price: 80,
        priceexclvat: 60,
        selected: true,
        specUrl: 'someUrl',
        promos: [],
      });
    });
  });
});
