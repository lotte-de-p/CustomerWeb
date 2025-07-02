import { TestBed } from '@angular/core/testing';

import { EngagementService } from './engagement.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Engagement } from './engagement.model';

describe('EngagementService', () => {
  let service: EngagementService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EngagementService],
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(EngagementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe(`When calling getEngagement`, () => {
    it(`should return a list of engagement`, (done) => {
      service.getEngagementList().subscribe((engagementList: Engagement[]) => {
        expect(engagementList).toEqual([
          {
            id: '1',
            name: 'Test1',
          },
          {
            id: '2',
            name: 'Test2',
          },
          {
            id: '3',
            name: 'Test3',
          },
        ]);
        done();
      });
    });
  });
});
