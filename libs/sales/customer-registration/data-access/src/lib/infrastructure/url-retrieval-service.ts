import { Injectable } from '@angular/core';
import { JsonUrlService, UrlService } from '@telenet/ng-lib-page';
import { catchError, Observable, throwError } from 'rxjs';
import { Offer } from '../entities/interfaces/raw-sales-order-request.interface';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class UrlRetrievalService {
  constructor(
    private readonly urlService: UrlService,
    private readonly jsonUrlService: JsonUrlService
  ) {}

  getOffersFromUrl(paramKey: string): Observable<Offer[]> {
    const encodedString = this.urlService.getRequestParamValue(paramKey, '');
    if (!encodedString) return throwError(() => new Error(`No ${paramKey} parameter in URL.`));

    return this.decompressData(encodedString);
  }

  private decompressData(encodedString: string): Observable<Offer[]> {
    return this.jsonUrlService.decompress(encodedString).pipe(
      map((response) => response?.['offers'] ?? []),
      catchError((error) => throwError(() => new Error(`Error decompressing data: ${error.message}`)))
    );
  }
}
