import { PricedCphDatalayerService } from './priced-cph-datalayer.service';
import { TestBed } from '@angular/core/testing';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { Category, EventInfo } from 'udl';
import { cleanStylesFromDom } from '@telenet/ng-lib-shared';
import { DataLayerAttributes, DataLayerService } from '@telenet/ng-lib-datalayer';

describe('PricedCphDatalayerService', function () {
  let dataLayerService: DataLayerService, pricedCphDatalayerService: PricedCphDatalayerService;
  let actualEventInfo: EventInfo, actualCategory: Category, actualAttributes: DataLayerAttributes;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{ provide: 'Window', useValue: window }, HttpClient, HttpHandler],
    });

    dataLayerService = TestBed.inject(DataLayerService);
    pricedCphDatalayerService = TestBed.inject(PricedCphDatalayerService);
  });

  beforeEach(() => {
    dataLayerService.sendEvent = jest.fn().mockImplementation((eventPropeties) => {
      actualAttributes = eventPropeties.attributes;
      actualCategory = eventPropeties.category;
      actualEventInfo = eventPropeties.eventInfo;
      return new Promise(() => true);
    });
  });

  describe('pushComponentViewed', function () {
    it('should add an event to the datalayer with the correct params', () => {
      pricedCphDatalayerService.pushComponentViewed();

      expectEvent('Priced product holding banner viewed', 'impression');
    });
  });

  describe('pushComponentOpened', function () {
    it('should add an event to the datalayer with the correct params', () => {
      pricedCphDatalayerService.pushComponentOpened();

      expectEvent('Priced product holding banner opened', 'click');
    });
  });

  function expectEvent(name: string, type: string): void {
    expect(actualEventInfo.getEventName()).toEqual(name);
    expect(actualEventInfo.getType()).toEqual(type);
    expect(actualEventInfo.getEventStatus()).toEqual('success');
    expect(actualEventInfo.getEventStatusMessage()).toEqual('');
    expect(actualCategory.getPrimaryCategory()).toEqual('general');
    expect(actualCategory.getSubCategory1()).toBeUndefined();
    expect(actualAttributes).toEqual({});
  }

  afterEach(() => {
    cleanStylesFromDom();
  });
});
