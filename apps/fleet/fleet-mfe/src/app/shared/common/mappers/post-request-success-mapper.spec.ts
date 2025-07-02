import { cleanStylesFromDom } from '@telenet/ng-lib-shared';
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { PostRequestSuccessMapper } from './post-request-success-mapper';
import { expect } from '@jest/globals';

describe('PostRequestSuccessMapper', () => {
  let postRequestSuccessMapper: PostRequestSuccessMapper;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{ provide: 'Window', useValue: {} }],
      imports: [HttpClientTestingModule],
    });

    postRequestSuccessMapper = TestBed.inject(PostRequestSuccessMapper);
  });

  describe('toModel', () => {
    it('should correctly return status', () => {
      const postRequestSuccess = postRequestSuccessMapper.toModel({ status: 200 });
      expect(postRequestSuccess.status).toBe(200);
    });
  });

  afterEach(() => {
    cleanStylesFromDom();
  });
});
