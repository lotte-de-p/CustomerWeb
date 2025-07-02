import { cleanStylesFromDom } from '@telenet/ng-lib-shared';
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { OmapiProductMapper, OmapiProductTestfactory } from '@telenet/ng-lib-omapi';
import { RawOptionInterface } from '../interfaces/raw-product-holding.interface';
import { OptionMapper } from './option.mapper';

const mockOptionJson: RawOptionInterface = require('../../../../../../../../../fixtures/http/cafe/product-holding/option.json');

describe('OptionMapper', () => {
  let optionMapper: OptionMapper, omapiProductMapper: OmapiProductMapper;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OmapiProductMapper, { provide: 'Window', useValue: {} }],
      imports: [HttpClientTestingModule],
    });
    optionMapper = TestBed.inject(OptionMapper);
    omapiProductMapper = TestBed.inject(OmapiProductMapper);
  });

  describe('toModel', () => {
    it('should return an option object', () => {
      const actual = optionMapper.toModel(mockOptionJson);
      const omapiProduct = OmapiProductTestfactory.build({ name: 'Chill', productType: 'OTHER' });
      omapiProductMapper.toModel = jest.fn().mockReturnValue(omapiProduct);

      expect(actual.label).toBe('internet.feature.mars.bundleoption');
      expect(actual.specUrl).toBe('https://api.int.telenet.be/omapi/public/product/633');
      expect(actual.productInfo).toBeDefined();
    });
  });

  afterEach(() => {
    cleanStylesFromDom();
  });
});
