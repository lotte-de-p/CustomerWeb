import { Builder, cleanStylesFromDom } from '@telenet/ng-lib-shared';
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NBAList } from './nba-list.model';
import { NBA } from './nba.model';

describe('NBAList', () => {
  let nbaList: NBAList;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{ provide: 'Window', useValue: {} }],
      imports: [HttpClientTestingModule],
    });
    nbaList = Builder(NBAList)
      // @ts-ignore
      .actions([new NBA()])
      .customerNumber('cust123')
      .interactionId('did123')
      .channel('EM')
      .containerName('EM')
      .v('v123')
      .build();
  });

  describe('getCustomerNumber', () => {
    it('should return the customer number', () => {
      expect(nbaList.customerNumber).toBe('cust123');
    });
  });

  describe('getInteractionId', () => {
    it('should return the interaction id', () => {
      expect(nbaList.interactionId).toBe('did123');
    });
  });

  describe('getChannel', () => {
    it('should return the channel', () => {
      expect(nbaList.channel).toBe('EM');
    });
  });

  describe('getContainerName', () => {
    it('should return the container name', () => {
      expect(nbaList.containerName).toBe('EM');
    });
  });

  describe('getVersion', () => {
    it('should return the version', () => {
      expect(nbaList.v).toBe('v123');
    });
  });

  describe('enrich', () => {
    it('make an actual class object from a vanilla javascript object', () => {
      const contextHubData = {
        actions: [
          {
            rank: '1',
            group: 'Sales',
            issue: 'Xsell',
            name: 'ONE1',
            treatment: 'SASE_ONE1_PP3m11e',
            campaignId: 'pp.C5.3m.xA',
            sellingArguments: [
              { key: 'C5_VFM1', rank: 1 },
              {
                key: 'C5_VFM3',
                rank: 2,
              },
              { key: 'C5_VFM5', rank: 3 },
            ],
            sdata: { offers: [{ id: '42797', type: 'Product', offers: [] }] },
          },
        ],
        customerNumber: '123456789',
        interactionId: '123456789',
        channel: 'WEB',
        containerName: 'NextBestAction',
      };

      nbaList = nbaList.enrich(contextHubData);
      const actual = nbaList;
      expect(actual).toBeDefined();
      expect(actual.customerNumber).toEqual('123456789');
      expect(actual.getNBA()).toBeDefined();
      expect(actual.getNBA().campaignId).toBe('pp.C5.3m.xA');
      expect(actual.getNBA().hasTreatment()).toBe(true);
      expect(actual.getNBA().sdata.getOffers()).toBeDefined();
    });

    it('store the empty json response also in the pega store', () => {
      const contextHubData = { nextBestActions: {} };

      nbaList = nbaList.enrich(contextHubData);
      const actual = nbaList;
      expect(actual.isSuccess).toBeTruthy();
    });
  });

  describe('getNBA', () => {
    it('should return an nba from the list', () => {
      const actual = nbaList.getNBA();
      expect(actual).toBeDefined();
    });
  });

  afterEach(() => {
    cleanStylesFromDom();
  });
});
