import { TestBed } from '@angular/core/testing';
import { expect } from '@jest/globals';
import { ApiResponseMapper } from './api-response-mapper';

describe('ApiResponseMapper', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApiResponseMapper],
    });
  });

  describe('toModel', () => {
    it('should correctly return status', () => {
      const postRequestSuccess = ApiResponseMapper.toModel({ status: 200 });
      expect(postRequestSuccess.status).toBe(200);
    });
  });
});
