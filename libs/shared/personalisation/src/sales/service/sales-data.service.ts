import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { JsonUrlService } from '@telenet/ng-lib-page';
import { RawSalesData, SalesData } from '../models/sales-data.model';
import { SalesDataMapper } from '../mappers/sales-data.mapper';

@Injectable({ providedIn: 'root' })
export class SalesDataService {
  constructor(
    private readonly jsonUrlService: JsonUrlService,
    private readonly salesDataMapper: SalesDataMapper
  ) {}

  public getCompressedSalesData(salesData: SalesData): Observable<string> {
    return this.jsonUrlService.compress(salesData);
  }

  public getDecompressedSalesData(compressedSalesData: string): Observable<SalesData> {
    if (compressedSalesData) {
      return this.jsonUrlService.decompress(compressedSalesData).pipe(
        // @ts-ignore
        catchError(() => of(new SalesData())),
        map((salesData: SalesData) => {
          return new SalesData(salesData);
        })
      );
    }
    return of(new SalesData());
  }

  public mapSalesData(rawSalesData: RawSalesData): SalesData {
    return this.salesDataMapper.mapSalesData(rawSalesData);
  }
}
