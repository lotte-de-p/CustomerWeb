import { cleanStylesFromDom } from '@telenet/ng-lib-shared';
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CreateInviteMapper } from './create-invite-success.mapper';

describe('CreateInviteMapper', () => {
  let createInviteMapper: CreateInviteMapper;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CreateInviteMapper],
      imports: [HttpClientTestingModule],
    });

    createInviteMapper = TestBed.inject(CreateInviteMapper);
  });

  describe('toModel', () => {
    it('should return null', () => {
      const mapper = createInviteMapper.toModel();
      expect(mapper).toBe(null);
    });
  });

  afterEach(() => {
    cleanStylesFromDom();
  });
});
