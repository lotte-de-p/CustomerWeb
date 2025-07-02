import { cleanStylesFromDom } from '@telenet/ng-lib-shared';
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { PegaStoreService } from './pega-store.service';
import { NBAList } from '../nba/v1/models/nba-list.model';
import { PegaService } from '../nba/v1/services/pega.service';
import { of } from 'rxjs';

const spyOn = jest.spyOn;

describe('PegaStoreService', () => {
  let storeService: PegaStoreService, pegaService: PegaService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: 'Window',
          useValue: {
            ContextHub: {
              getStore: function () {
                return {
                  eventing: {
                    once: jest.fn(),
                  },
                };
              },
            },
          },
        },
      ],
      imports: [HttpClientTestingModule],
    });

    storeService = TestBed.inject(PegaStoreService);
    pegaService = TestBed.inject(PegaService);
  });

  describe('onLoadData', () => {
    test('should return the nba from the pega service', (done) => {
      const nbaList = {} as NBAList;
      spyOn(pegaService, 'getNBAList').mockReturnValue(of(nbaList));

      storeService.onLoadData().subscribe((actual) => {
        expect(actual).toBe(nbaList);
        expect(pegaService.getNBAList).toHaveBeenCalledWith();
        done();
      });
    });
  });

  afterEach(() => {
    cleanStylesFromDom();
  });
});
