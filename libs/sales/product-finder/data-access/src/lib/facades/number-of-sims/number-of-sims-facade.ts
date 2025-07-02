import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectNumberOfSims } from '../../+state/product-finder.selectors';
import { ProductFinderSlice } from '../../+state/product-finder.reducers';
import { updateNumberOfSims } from '../../+state/product-finder.actions';
import { filter } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class NumberOfSimsFacade {
  numberOfSims$: Observable<number> = this.store
    .select(selectNumberOfSims)
    .pipe(filter((numberOfSims: number | null): numberOfSims is number => numberOfSims !== null));

  constructor(private readonly store: Store<ProductFinderSlice>) {}

  updateNumberOfSims(numberOfSims: number): void {
    this.store.dispatch(updateNumberOfSims({ numberOfSims }));
  }
}
