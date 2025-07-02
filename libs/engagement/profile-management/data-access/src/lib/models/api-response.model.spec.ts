import { cleanStylesFromDom } from '@telenet/ng-lib-shared';
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ApiResponse } from './api-response.model';

describe('ApiResponse', () => {
  let apiResponse: ApiResponse;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [],
      imports: [HttpClientTestingModule],
    });

    apiResponse = new ApiResponse();
  });

  describe('getStatus', () => {
    it('should return the response status', () => {
      apiResponse.status = 200;
      const actual = apiResponse.status;
      expect(actual).toBe(200);
    });
  });

  afterEach(() => {
    cleanStylesFromDom();
  });
});
