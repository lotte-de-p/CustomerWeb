import { TranslateModule } from '@ngx-translate/core';
import { TestBed } from '@angular/core/testing';
import { SuccessMapper } from './success-mapper';

describe('SuccessMapper', () => {
  let successMapper: SuccessMapper;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TranslateModule.forRoot()],
      providers: [SuccessMapper],
    });

    successMapper = TestBed.inject(SuccessMapper);
  });

  it('should map correctly', () => {
    const success = successMapper.toModel({ status: 200 });
    expect(success.status).toBe(200);
  });
});
