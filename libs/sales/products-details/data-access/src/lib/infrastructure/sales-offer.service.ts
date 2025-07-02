import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfigConstants, ConfigService } from '@telenet/ng-lib-config';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { SalesOfferRequest } from './sales-offer-request.interface';
import { RawSalesOffer, SalesOffer } from '@sales/shared/data-access';
import { SalesOfferMapper } from './sales-offer.mapper';

@Injectable({
  providedIn: 'root',
})
export class SalesOfferService {
  constructor(
    private readonly http: HttpClient,
    private readonly salesOfferMapper: SalesOfferMapper,
    private readonly configService: ConfigService
  ) {}

  getSalesOffer(salesOfferRequest: SalesOfferRequest): Observable<SalesOffer> {
    return this.http
      .post<RawSalesOffer>(this.getSalesOfferUrl(), salesOfferRequest)
      .pipe(map((rawSalesOffer: RawSalesOffer) => this.salesOfferMapper.toModel(rawSalesOffer)));
  }

  private getSalesOfferUrl(): string {
    return this.configService
      .getConfig(ConfigConstants.PRODUCT_FINDER_URL)
      .concat('/product-finder/api/v1/sales-offer');
  }
}
