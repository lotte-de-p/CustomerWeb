import { PromoMapper } from './promo.mapper';
import { TestBed } from '@angular/core/testing';
import { InstallTypeMapper } from './install-type.mapper';

describe('InstallTypeMapper', (): void => {
  let installTypeMapper: InstallTypeMapper;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InstallTypeMapper, PromoMapper],
    }).compileComponents();
    installTypeMapper = TestBed.inject(InstallTypeMapper);
  });
  describe('map', (): void => {
    it('should map the rawInstallType', (): void => {
      const actualInstallType = installTypeMapper.map({
        description: 'this is an option',
        mutuallyexclusive: 'sup',
        price: 80,
        priceexclvat: 60,
        promos: [],
        options: [],
        selected: true,
      });

      expect({ ...actualInstallType }).toEqual({
        description: 'this is an option',
        price: 80,
        priceexclvat: 60,
        mutuallyexclusive: 'sup',
        selected: true,
        promos: [],
      });
    });
  });
});
