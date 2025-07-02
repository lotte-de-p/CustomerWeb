import { RawProductRecommendationResult } from './raw-product-recommendation-result.interface';
import { ProductRecommendationResult } from '../../entities/results-screen/product-recommendation-result.interface';
import { RawProductRecommendation } from './raw-product-recommendation.interface';
import { ProductRecommendation } from '../../entities/results-screen/product-recommendation.interface';
import { RawOffer } from './raw-offer.interface';
import { Injectable } from '@angular/core';
import { forkJoin, Observable } from 'rxjs';
import { Offer, Product, ProductService, Promo, RawPromo, RawSalesOffer, SalesOffer } from '@sales/shared/data-access';
import { defaultIfEmpty, map, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ProductRecommendationMapper {
  constructor(private readonly productService: ProductService) {}

  toModel(rawProductRecommendationResult: RawProductRecommendationResult): Observable<ProductRecommendationResult> {
    return this.mapToProductRecommendationResult(rawProductRecommendationResult);
  }

  private mapToProductRecommendationResult(
    rawProductRecommendationResult: RawProductRecommendationResult
  ): Observable<ProductRecommendationResult> {
    const productRecommendationObservables: Observable<ProductRecommendation>[] =
      rawProductRecommendationResult.productRecommendations.map((rawProductRecommendation: RawProductRecommendation) =>
        this.mapToProductRecommendation(rawProductRecommendation)
      );

    return forkJoin(productRecommendationObservables).pipe(
      defaultIfEmpty([]),
      map(
        (productRecommendations: ProductRecommendation[]): ProductRecommendationResult => ({
          productRecommendations,
          mostRecommendedIndex: rawProductRecommendationResult.mostRecommendedIndex,
        })
      )
    );
  }

  private mapToProductRecommendation(
    rawProductRecommendation: RawProductRecommendation
  ): Observable<ProductRecommendation> {
    const offers: Offer[] = rawProductRecommendation.offers.map((rawOffer: RawOffer) => this.mapToOffer(rawOffer));

    return this.productService.getProducts({ offers }).pipe(
      take(1),
      map(
        (products: Product[]): ProductRecommendation => ({
          offers,
          salesOffer: this.mapToSalesOffer(rawProductRecommendation.salesOffer),
          products,
        })
      )
    );
  }

  private mapToOffer(rawOffer: RawOffer): Offer {
    return {
      id: rawOffer.id,
      type: rawOffer.type,
      offers: rawOffer.offers.map((offer: RawOffer) => this.mapToOffer(offer)),
      amountOfLimitedSims: rawOffer.amountOfLimitedSims,
    };
  }

  private mapToSalesOffer(rawSalesOffer: RawSalesOffer): SalesOffer {
    return {
      price: rawSalesOffer.price,
      promo: rawSalesOffer.promo === null ? null : this.mapToPromo(rawSalesOffer.promo),
    };
  }

  private mapToPromo(rawPromo: RawPromo): Promo {
    return {
      price: rawPromo.price,
      durationInMonths: rawPromo.durationInMonths,
    };
  }
}
