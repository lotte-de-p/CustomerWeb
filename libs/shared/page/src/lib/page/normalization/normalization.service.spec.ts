import { TestBed } from '@angular/core/testing';
import { NormalizationService } from './normalization.service';
import { cleanStylesFromDom } from '@telenet/ng-lib-shared';

const POST_PAID_MOBILE = 'post-paid-mobile';
const PREPAID_MOBILE = 'prepaid-mobile';
describe('NormalizationService', () => {
  let normalizationService: NormalizationService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [NormalizationService, { provide: 'Window', useValue: {} }],
    }).compileComponents();

    normalizationService = TestBed.inject(NormalizationService);
  });

  describe('normalizeKey', () => {
    it('should normalize the key', () => {
      const actual = normalizationService.normalizeKey('Telenet Walk & Talk iPhone 60');
      expect(actual).toBe('telenet-walk--talk-iphone-60');
    });
    it('should return empty string given key is undefined', () => {
      const actual = normalizationService.normalizeKey(undefined);
      expect(actual).toBe('');
    });
    it('should return empty string given key is null', () => {
      const actual = normalizationService.normalizeKey(null);
      expect(actual).toBe('');
    });
    it('should return empty string given key is empty string', () => {
      const actual = normalizationService.normalizeKey('');
      expect(actual).toBe('');
    });
  });

  describe('normalizeList', () => {
    it('should normalize the keys in the list', () => {
      const actual = normalizationService.normalizeList([
        'Telenet Walk & Talk iPhone 60',
        'Post Paid Mobile',
        'PrePaid Mobile',
        'POST-PAID-MOBILE',
        'POST-PAID MOBILE',
        'PREPAID MOBILE',
        'PrePaid Mobile',
      ]);
      expect(actual).toEqual([
        'telenet-walk--talk-iphone-60',
        POST_PAID_MOBILE,
        PREPAID_MOBILE,
        POST_PAID_MOBILE,
        POST_PAID_MOBILE,
        PREPAID_MOBILE,
        PREPAID_MOBILE,
      ]);
    });
    it('should return empty array given list is null', () => {
      const actual = normalizationService.normalizeList(null);
      expect(actual).toEqual([]);
    });
    it('should return empty array given list is undefined', () => {
      const actual = normalizationService.normalizeList(undefined);
      expect(actual).toEqual([]);
    });
  });

  afterEach(() => {
    cleanStylesFromDom();
  });
});
