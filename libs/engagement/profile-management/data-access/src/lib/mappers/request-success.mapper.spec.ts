import { TestBed } from '@angular/core/testing';
import { RequestSuccessMapper } from './request-success.mapper';
import { expect } from '@jest/globals';
import { cleanStylesFromDom } from '@telenet/ng-lib-shared';

describe('RequestSuccessMapper', () => {
  let requestSuccessMapper: RequestSuccessMapper;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RequestSuccessMapper, { provide: 'Window', useValue: {} }],
    });
    requestSuccessMapper = TestBed.inject(RequestSuccessMapper);
  });

  describe('toModel', () => {
    it('should return true when status equals 204', () => {
      const rawRequestSuccessInterface = {
        status: 204,
      };
      const actual = requestSuccessMapper.toModel(rawRequestSuccessInterface);

      expect(actual).toEqual(true);
    });

    it('should return false when status does not equals 204', () => {
      const rawRequestSuccessInterface = {
        status: 400,
      };
      const actual = requestSuccessMapper.toModel(rawRequestSuccessInterface);

      expect(actual).toEqual(false);
    });
  });

  afterEach(() => {
    cleanStylesFromDom();
  });
});
