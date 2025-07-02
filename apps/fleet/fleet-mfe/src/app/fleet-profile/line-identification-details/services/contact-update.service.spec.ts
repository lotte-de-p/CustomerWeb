import { TestBed } from '@angular/core/testing';

import { ContactUpdateService } from './contact-update.service';
import { OcapiService } from '@telenet/ng-lib-ocapi';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { expect } from '@jest/globals';
import { PostRequestSuccessMapper } from '../../../shared/common/mappers/post-request-success-mapper';

describe('ContactUpdateService', () => {
  let service: ContactUpdateService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OcapiService, PostRequestSuccessMapper, { provide: 'Window', useValue: {} }],
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(ContactUpdateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
