import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { ProductRecommendationResult } from '../../entities/results-screen/product-recommendation-result.interface';
import { ProductFinderSlice } from '../../+state/product-finder.reducers';
import {
  selectEnableLoader,
  selectEnableLoaderMask,
  selectProductRecommendationResult,
} from '../../+state/product-finder.selectors';
import { filter } from 'rxjs/operators';
import { getProductRecommendations, order, resultDetails } from '../../+state/product-finder.actions';

@Injectable({ providedIn: 'root' })
export class ResultsScreenFacade {
  enableLoader$: Observable<boolean> = this.store.select(selectEnableLoader);
  enableLoaderMask$: Observable<boolean> = this.store.select(selectEnableLoaderMask);
  productRecommendationResult$: Observable<ProductRecommendationResult> = this.store
    .select(selectProductRecommendationResult)
    .pipe(
      filter(
        (
          productRecommendationResult: ProductRecommendationResult | null
        ): productRecommendationResult is ProductRecommendationResult => productRecommendationResult !== null
      )
    );

  constructor(private readonly store: Store<ProductFinderSlice>) {}

  getProductRecommendations(): void {
    this.store.dispatch(getProductRecommendations());
  }

  order(index: number): void {
    this.store.dispatch(order({ index }));
  }

  resultDetails(index: number): void {
    this.store.dispatch(resultDetails({ index }));
  }
}
