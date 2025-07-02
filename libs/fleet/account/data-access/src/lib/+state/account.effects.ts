import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map } from 'rxjs/operators';
import { setNextPage, setPhoneNumber } from './account.actions';

@Injectable({
  providedIn: 'root',
})
export class AccountEffects {
  setNextPage$;
  constructor(private readonly actions$: Actions) {
    this.setNextPage$ = createEffect(() =>
      this.actions$.pipe(
        ofType(setPhoneNumber),
        map(() => setNextPage({ page: '' }))
      )
    );
  }
}
