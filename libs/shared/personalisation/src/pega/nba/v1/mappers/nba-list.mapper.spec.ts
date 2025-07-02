import { cleanStylesFromDom } from '@telenet/ng-lib-shared';
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NBAListMapper } from './nba-list.mapper';
import { NBAList } from '../models/nba-list.model';
import { RawNBAResponseInterface } from '../interfaces/raw-nba-list.interface';

const mockNBAResponse = require('../../../../../fixtures/next-best-action-response.json');

describe('NbaListMapper', () => {
  let nbaListMapper: NBAListMapper;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{ provide: 'Window', useValue: {} }],
      imports: [HttpClientTestingModule],
    });
    nbaListMapper = TestBed.inject(NBAListMapper);
  });

  describe('toModel', function () {
    let nbaList: NBAList;
    beforeEach(() => {
      nbaList = nbaListMapper.toModel(mockNBAResponse);
    });

    it('should return object nbaListResponse fields populated', () => {
      expect(nbaList.customerNumber).toEqual('123456789');
      expect(nbaList.interactionId).toEqual('123456789');
      expect(nbaList.channel).toEqual('WEB');
      expect(nbaList.containerName).toEqual('NextBestAction');
    });

    it('should return an NBA populated', () => {
      expect(nbaList.getNBA().name).toBeDefined();
      expect(nbaList.getNBA().isSalesDataEmpty()).toBeFalsy();
    });

    it('should return an empty nbaList', () => {
      nbaList = nbaListMapper.toModel({ nextBestActions: {} } as RawNBAResponseInterface);
      expect(nbaList.getNBA().name).toBeUndefined();
      expect(nbaList.customerNumber).toBeUndefined();
    });
  });

  afterEach(() => {
    cleanStylesFromDom();
  });
});
