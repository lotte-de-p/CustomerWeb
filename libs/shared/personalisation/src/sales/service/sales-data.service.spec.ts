import { fakeAsync, TestBed, waitForAsync } from '@angular/core/testing';
import { JsonUrlService } from '@telenet/ng-lib-page';
import { cleanStylesFromDom } from '@telenet/ng-lib-shared';
import { throwError, of } from 'rxjs';
import { SalesDataService } from './sales-data.service';
import { SalesDataMapper } from '../mappers/sales-data.mapper';
import { SalesData } from '../models/sales-data.model';
import { SalesDataType } from '../models/sales-data.type';
import { salesDataFactory } from '../models/sales-data.model.testfactory';

const spyOn = jest.spyOn;

describe('SalesDataService', () => {
  let service: SalesDataService,
    salesDataMapper: SalesDataMapper,
    jsonUrlService: JsonUrlService,
    newSalesData: SalesData;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [],
      providers: [{ provide: 'Window', useValue: {} }, SalesDataMapper],
    });

    service = TestBed.inject(SalesDataService);
    salesDataMapper = TestBed.inject(SalesDataMapper);
    jsonUrlService = TestBed.inject(JsonUrlService);
    newSalesData = new SalesData();
  });

  describe('getCompressedSalesData', () => {
    it('should call the mapper and return a mapped SalesData model', fakeAsync(() => {
      const salesData = salesDataFactory.build();
      const encodedString = 'XQAAAAIjAAAAAAAAAABAqYnmbFEIbVbO7gEot3B4b5SZE4CcYhLtXznaU-11lNN2skEPH_5a__-ONgAA';

      spyOn(salesDataMapper, 'mapSalesData').mockReturnValue(salesData);
      spyOn(jsonUrlService, 'compress').mockReturnValue(of(encodedString));

      service.getCompressedSalesData(salesData).subscribe((actual) => {
        expect(actual).toEqual(encodedString);
      });
    }));
  });

  describe('getDecompressedSalesData', () => {
    it('should return an observable with an empty SalesData when compressed shopping basket is empty', waitForAsync(() => {
      service.getDecompressedSalesData('').subscribe((actual) => {
        expect(actual).toBeDefined();
        expect(actual.hasOffers()).toEqual(false);
      });
    }));

    it('should return an observable of an salesData', () => {
      const encodedString = 'XQAAAAIjAAAAAAAAAABAqYnmbFEIbVbO7gEot3B4b5SZE4CcYhLtXznaU-11lNN2skEPH_5a__-ONgAA';
      newSalesData.setOffers([
        {
          id: 'BOYO0015',
          type: SalesDataType.TYPE_PRODUCT,
        },
      ]);

      jsonUrlService.decompress = jest.fn().mockReturnValue(of(newSalesData));

      service.getDecompressedSalesData(encodedString).subscribe((actual) => {
        expect(actual).toEqual(newSalesData);
      });
    });

    it('should return an observable with an empty SalesData when the compressed shoppingbasket is not formatted correctly', fakeAsync(() => {
      const encodedString = '-11lNN2skEPH_5a__-ONgAA';

      spyOn(jsonUrlService, 'decompress').mockReturnValue(throwError(() => ({ status: 404 })));

      service.getDecompressedSalesData(encodedString).subscribe((actual) => {
        expect(actual).toEqual(new SalesData());
      });
    }));
  });

  afterEach(() => {
    cleanStylesFromDom();
  });
});
