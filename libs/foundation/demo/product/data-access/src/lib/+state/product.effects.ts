import { Injectable } from '@angular/core';
import { createEffect, ofType, Actions } from '@ngrx/effects';
import * as fromActions from '../+state/product.actions';
import { mergeMap, map } from 'rxjs/operators';
import { catchError, of } from 'rxjs';
import { ProductService } from '../infrastructure/product.service';

@Injectable({
  providedIn: 'root',
})
export class ProductEffects {
  constructor(
    private readonly actions$: Actions,
    private readonly productService: ProductService
  ) {}

  products$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromActions.getProducts),
      mergeMap(() => {
        return this.productService.getProducts().pipe(
          map((products) => fromActions.getProductsSuccessAction({ products })),
          catchError((error) => of(fromActions.getErrorAction({ error: error })))
        );
      })
    )
  );
}
