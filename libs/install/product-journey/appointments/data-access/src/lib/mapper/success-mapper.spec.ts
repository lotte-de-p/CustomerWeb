import { TestBed } from '@angular/core/testing';
import { expect } from '@jest/globals';
import { SuccessMapper } from './success-mapper';

describe('SuccessMapper', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SuccessMapper],
    });
  });

  describe('toModel', () => {
    it('should correctly return status', () => {
      const postRequestSuccess = SuccessMapper.toModel({ status: 200 });
      expect(postRequestSuccess.status).toBe(200);
    });
  });
});
