import { TestBed } from '@angular/core/testing';

import { HomeNetworkService } from './home-network.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HomeNetwork } from './home-network.model';

describe('HomeNetworkService', () => {
  let service: HomeNetworkService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HomeNetworkService],
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(HomeNetworkService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe(`When calling getHomeNetwork`, () => {
    it(`should return a list of home-network`, (done) => {
      service.getHomeNetworkList().subscribe((homeNetworkList: HomeNetwork[]) => {
        expect(homeNetworkList).toEqual([
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
