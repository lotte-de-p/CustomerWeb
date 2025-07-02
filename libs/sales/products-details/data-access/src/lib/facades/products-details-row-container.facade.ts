import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { ProductsDetailsSlice } from '../+state/products-details.reducers';
import {
  selectIsFixedTelephoneRowVisible,
  selectIsInternetRowVisible,
  selectIsMobileRowVisible,
  selectIsTvFlowRowVisible,
  selectIsTvIconicRowVisible,
} from '../+state/products-details.selectors';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsDetailsRowContainerFacade {
  isInternetRowVisible$: Observable<boolean> = this.store.select(selectIsInternetRowVisible);
  isTvIconicRowVisible$: Observable<boolean> = this.store.select(selectIsTvIconicRowVisible);
  isTvFlowRowVisible$: Observable<boolean> = this.store.select(selectIsTvFlowRowVisible);
  isMobileRowVisible$: Observable<boolean> = this.store.select(selectIsMobileRowVisible);
  isFixedTelephoneRowVisible$: Observable<boolean> = this.store.select(selectIsFixedTelephoneRowVisible);

  constructor(private readonly store: Store<ProductsDetailsSlice>) {}
}
