import { cleanStylesFromDom } from '@telenet/ng-lib-shared';
import { PromotionsMapper } from './promotions.mapper';
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RawPromotionsInterface } from '../interfaces/promotions.interface';

const mockPromotionsJson: {
  promotions: RawPromotionsInterface[];
} = require('../../../../../../../../../fixtures/http/cafe/promotions/promotions.json');

describe('PromotionsMapper', function () {
  let promotionsMapper: PromotionsMapper;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PromotionsMapper, { provide: 'window', useValue: {} }],
      imports: [HttpClientTestingModule],
    });
    promotionsMapper = TestBed.inject(PromotionsMapper);
  });

  describe('toModel', function () {
    it('should return a valid promotions object array', function () {
      const promotions = promotionsMapper.toModel(mockPromotionsJson);
      expect(promotions[0].description).toBe('PPWIGO15GB');
      expect(promotions[0].startdate).toBe('2019-01-01T08:00:00.0+01:00');
      expect(promotions[0].enddate).toBe('2039-12-31T08:00:00.0+01:00');
      expect(promotions[1].description).toBe('insiders2018');
      expect(promotions[1].startdate).toBe('2019-10-01T08:00:00.0+01:00');
      expect(promotions[1].enddate).toBe('2039-11-31T08:00:00.0+01:00');
    });
  });

  afterEach(() => {
    cleanStylesFromDom();
  });
});
