import { TestBed } from '@angular/core/testing';
import { cleanStylesFromDom } from '@telenet/ng-lib-shared';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TelenetMissingTranslationHandler } from './missing-translation.handler';
import { MissingTranslationHandlerParams } from '@ngx-translate/core';

describe('TelenetMissingTranslationHandler', () => {
  let missingTranslationHandler: TelenetMissingTranslationHandler;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TelenetMissingTranslationHandler, { provide: 'Window', useValue: {} }],
      imports: [],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
    missingTranslationHandler = TestBed.inject(TelenetMissingTranslationHandler);
  });
  describe('handle', function () {
    it('should return empty when key has undefined token', function () {
      const missingTranslationHandlerParams = {
        key: 'ng.installation.steps.title',
      } as MissingTranslationHandlerParams;
      const actual = missingTranslationHandler.handle(missingTranslationHandlerParams);
      expect(actual).toBe('ng.installation.steps.title');
    });

    it('should return empty when key has undefined token', function () {
      const missingTranslationHandlerParams = {
        key: 'ng.undefined.steps.title',
      } as MissingTranslationHandlerParams;
      const actual = missingTranslationHandler.handle(missingTranslationHandlerParams);
      expect(actual).toBe('');
    });
  });

  afterEach(() => {
    cleanStylesFromDom();
  });
});
