import { Injectable } from '@angular/core';
import { catchError, forkJoin, map, mergeMap, Observable, of, throwError } from 'rxjs';
import { JsonUrlService, UrlService } from '@telenet/ng-lib-page';
import { OmapiProduct, OmapiProductService } from '@telenet/ng-lib-omapi';
import { createOffer, Offer, OfferItem } from '../domain/interfaces/offer.interface';

@Injectable({
  providedIn: 'root',
})
export class OfferService {
  constructor(
    private readonly urlService: UrlService,
    private readonly jsonUrlService: JsonUrlService,
    private readonly omapiProductService: OmapiProductService
  ) {}

  getOfferFromEncodedUrlParameter(paramKey: string): Observable<Offer> {
    const encodedString = this.urlService.getRequestParamValue(paramKey, '');
    if (!encodedString) return throwError(() => new Error(`No ${paramKey} parameter in URL.`));

    return this.decompressData(encodedString).pipe(
      mergeMap((offers) => {
        return forkJoin({
          offerItems: of(offers),
          omapiProducts: this.extractOmapiProduct(offers),
        });
      }),
      map(({ offerItems, omapiProducts }) => {
        return createOffer(offerItems, omapiProducts);
      })
    );
  }

  private extractOmapiProduct(offers: OfferItem[]): Observable<OmapiProduct[]> {
    return forkJoin(this.flatMapOfferIds(offers).map((offerId) => this.getOmapiProduct(offerId)));
  }

  private flatMapOfferIds(offers: OfferItem[]): string[] {
    return offers.reduce((ids, offer) => {
      if (offer.id) ids.push(offer.id);
      if (offer.offers) ids.push(...this.flatMapOfferIds(offer.offers));
      return ids;
    }, [] as string[]);
  }

  private decompressData(encodedString: string): Observable<OfferItem[]> {
    return this.jsonUrlService.decompress(encodedString).pipe(
      map((response) => response?.['offers'] ?? []),
      catchError((error) => throwError(() => new Error(`Error decompressing data: ${error.message}`)))
    );
  }

  private getOmapiProduct(offerId: string): Observable<OmapiProduct> {
    return this.omapiProductService.getProductById('order-configurator', offerId);
  }
}
