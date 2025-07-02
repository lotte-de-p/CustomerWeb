import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductRecommendationResult } from '../../entities/results-screen/product-recommendation-result.interface';
import { HttpClient } from '@angular/common/http';
import { ProductRecommendationsRequest } from './product-recommendations-request.interface';
import { ProductRecommendationMapper } from './product-recommendation.mapper';
import { RawProductRecommendationResult } from './raw-product-recommendation-result.interface';
import { switchMap } from 'rxjs/operators';
import { ConfigConstants, ConfigService } from '@telenet/ng-lib-config';

@Injectable({
  providedIn: 'root',
})
export class ProductRecommendationService {
  constructor(
    private readonly http: HttpClient,
    private readonly productRecommendationMapper: ProductRecommendationMapper,
    private readonly configService: ConfigService
  ) {}

  getProductRecommendations(
    productRecommendationsRequest: ProductRecommendationsRequest
  ): Observable<ProductRecommendationResult> {
    return this.http
      .post<RawProductRecommendationResult>(this.getProductRecommendationsUrl(), productRecommendationsRequest)
      .pipe(
        switchMap((rawProductRecommendationResult: RawProductRecommendationResult) =>
          this.productRecommendationMapper.toModel(rawProductRecommendationResult)
        )
      );
  }

  private getProductRecommendationsUrl(): string {
    return this.configService
      .getConfig(ConfigConstants.PRODUCT_FINDER_URL)
      .concat('/product-finder/api/v1/product-finder');
  }
}
