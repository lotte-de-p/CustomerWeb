import { Injectable } from '@angular/core';
import { map, mergeMap, take, toArray } from 'rxjs/operators';
import { concat, Observable } from 'rxjs';
import { OmapiProduct } from '@telenet/ng-lib-omapi';
import { UrlRetrievalService } from './url-retrieval-service';
import { OfferIdUtil } from '../util/offer-id.util';
import { ProductService } from './product.service';

@Injectable({
  providedIn: 'root',
})
export class ExtractOmapiProductService {
  constructor(
    private readonly urlRetrievalService: UrlRetrievalService,
    private readonly productService: ProductService
  ) {}

  extractOmapiProduct(): Observable<OmapiProduct[]> {
    return this.urlRetrievalService.getOffersFromUrl('sdata').pipe(
      take(1),
      map((offers) => OfferIdUtil.extractOfferIds(offers)),
      mergeMap((offerIds) => concat(...this.productService.getOmapiProducts(offerIds))),
      toArray()
    );
  }
}
