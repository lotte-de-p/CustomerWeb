import { TelenetMissingTranslationService } from './missing-translation.service';
import { cleanStylesFromDom } from '@telenet/ng-lib-shared';
import { TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('TelenetMissingTranslationService', () => {
  let missingTranslationService: TelenetMissingTranslationService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TelenetMissingTranslationService, { provide: 'Window', useValue: {} }],
      imports: [],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
    missingTranslationService = TestBed.inject(TelenetMissingTranslationService);
  });
  describe('notTranslated', function () {
    it('should return empty when key has undefined token', function () {
      const key = 'nc.undefined.step.title';
      const actual = missingTranslationService.notTranslated(key);
      expect(actual).toBe('');
    });

    it('should return hey when key does not have undefined token', function () {
      const key = 'nc.installation.step.title';
      const actual = missingTranslationService.notTranslated(key);
      expect(actual).toBe(key);
    });
  });

  afterEach(() => {
    cleanStylesFromDom();
  });
});
