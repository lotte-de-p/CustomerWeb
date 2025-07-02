import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NBARequestParameters } from './nba-request-parameters';
import { of } from 'rxjs';
import { SellingArgument } from './selling-argument.model';
import { JsonUrlService } from '@telenet/ng-lib-page';
import { cleanStylesFromDom } from '@telenet/ng-lib-shared';
import { SalesData } from '../../../../sales/models/sales-data.model';
import { SalesDataService } from '../../../../sales/service/sales-data.service';
import { SalesDataType } from '../../../../sales/models/sales-data.type';
import { when } from 'jest-when';

describe('NBARequestParameters', () => {
  let salesDataService: SalesDataService;
  let jsonUrlService: JsonUrlService;
  let salesData: SalesData;
  const pushStateString =
    '?sdata=XQAAAAJRAAAAAAAAAABAqYnmbFEIbVbO-Byot3CFBcBLaWkKgROKiK6Gpamddy1XCH9WxuTkX7d2BWjYxeyQP4zY44vsDvIlgjFelArRPtgP___7XEAA' +
    '&cid=campaign123&did=decision123&src=EM&v=1&sa=sa123&t=nbo&tid=XQAAAAISAAAAAAAAAABAqMqGk0bYtJy4ZEcR7Sqf3Bw6d1rcdf_6UUAA' +
    '&aid=XQAAAAIaAAAAAAAAAABAqMgmk0b7Y4DI-TRXEIlSnPt_if_BaCwg80Lw9CVc___wp0AA&pt=XQAAAAISAAAAAAAAAABAqMqGk0bYtJy4ZE';

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{ provide: 'Window', useValue: {} }, NBARequestParameters, SalesDataService],
      imports: [HttpClientTestingModule],
    });
    salesDataService = TestBed.inject(SalesDataService);
    jsonUrlService = TestBed.inject(JsonUrlService);
    salesData = new SalesData();
    jsonUrlService.decompress = jest.fn();
    when(jsonUrlService.decompress)
      .calledWith('XQAAAAISAAAAAAAAAABAqMqGk0bYtJy4ZEcR7Sqf3Bw6d1rcdf_6UUAA')
      .mockReturnValue(of({ tid: 'treatment123' }));
    when(jsonUrlService.decompress)
      .calledWith('XQAAAAISAAAAAAAAAABAqMqGk0bYtJy4ZE')
      .mockReturnValue(of({ pt: 'oneapp' }));
    when(jsonUrlService.decompress)
      .calledWith('XQAAAAIaAAAAAAAAAABAqMgmk0b7Y4DI-TRXEIlSnPt_if_BaCwg80Lw9CVc___wp0AA')
      .mockReturnValue(of({ aid: 'SASE_ONEfor1_AP3m10e' }));
  });

  describe('toNBAList', () => {
    beforeEach(function () {
      window.history.pushState({}, '', pushStateString);
    });
    it('should return an nbaList from url params when url params are set', function () {
      salesData.setOffers([
        {
          id: 'WIGO0015',
          type: SalesDataType.TYPE_PRODUCT,
          offers: [
            { id: '75', type: SalesDataType.TYPE_OPTION },
            { id: '633', type: SalesDataType.TYPE_OPTIN },
          ],
        },
      ]);
      salesDataService.getDecompressedSalesData = jest.fn();
      when(salesDataService.getDecompressedSalesData)
        .calledWith(
          'XQAAAAJRAAAAAAAAAABAqYnmbFEIbVbO-Byot3CFBcBLaWkKgROKiK6Gpamddy1XCH9WxuTkX7d2BWjYxeyQP4zY44vsDvIlgjFelArRPtgP___7XEAA'
        )
        .mockReturnValue(of(salesData));

      new NBARequestParameters(salesDataService, jsonUrlService).toNBAList().subscribe((nbaList) => {
        const nbaSalesData = nbaList.getNBA().sdata;
        const actual = nbaSalesData.getOffers();
        expect(nbaSalesData).toBeDefined();
        expect(actual[0]).toBeDefined();
        expect(actual[0].id).toEqual('WIGO0015');
        expect(actual[0].type).toEqual(SalesDataType.TYPE_PRODUCT);
        expect(actual[0].offers).toBeDefined();
        // @ts-ignore
        expect(actual[0].offers[0].id).toEqual('75');
        // @ts-ignore
        expect(actual[0].offers[0].type).toEqual('Option');
        // @ts-ignore
        expect(actual[0].offers[1].id).toEqual('633');
        // @ts-ignore
        expect(actual[0].offers[1].type).toEqual('Optin');
        expect(nbaList.getNBA().campaignId).toEqual('campaign123');
        expect(nbaList.getNBA().treatment).toEqual('treatment123');
        expect(nbaList.getNBA().productType).toEqual('oneapp');
        expect(nbaList.v).toEqual('1');
        const sellingArguments = [];
        sellingArguments.push(new SellingArgument('sa123', 1));
        expect(nbaList.getNBA().sellingArguments).toEqual(sellingArguments);
        expect(nbaList.getNBA().name).toEqual('SASE_ONEfor1_AP3m10e');
        expect(nbaList.channel).toEqual('EM');
        expect(nbaList.interactionId).toEqual('decision123');
      });
    });
  });

  describe('toNBAList', () => {
    beforeEach(function () {
      window.history.pushState(
        {},
        '',
        '?t=nbo&cid=campaign123&tid=XQAAAAISAAAAAAAAAABAqMqGk0bYtJy4ZEcR7Sqf3Bw6d1rcdf_6UUAA'
      );
    });
    it('should return a valid nbaList from url params when t is set', function () {
      salesDataService.getDecompressedSalesData = jest.fn();
      when(salesDataService.getDecompressedSalesData).calledWith('').mockReturnValue(of(salesData));

      new NBARequestParameters(salesDataService, jsonUrlService).toNBAList().subscribe((nbaList) => {
        expect(nbaList.isSuccess).toBe(true);
      });
    });
  });

  describe('toNBAList', () => {
    beforeEach(function () {
      window.history.pushState({}, '', '');
    });

    it('should return an invalid nbaList from url params when t is not set', function () {
      salesDataService.getDecompressedSalesData = jest.fn();
      when(salesDataService.getDecompressedSalesData).calledWith('').mockReturnValue(of(salesData));
      new NBARequestParameters(salesDataService, jsonUrlService).toNBAList().subscribe((nbaList) => {
        expect(nbaList.isSuccess).toBe(false);
      });
    });
  });
  afterEach(() => {
    cleanStylesFromDom();
  });
});
