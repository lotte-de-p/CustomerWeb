import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { mergeMap, map } from 'rxjs/operators';
import { of, catchError } from 'rxjs';
import * as fromActions from './home-network.actions';
import { HomeNetworkService } from '../home-network.service';
import { HomeNetwork } from '../home-network.model';

@Injectable({
  providedIn: 'root',
})
export class HomeNetworkEffects {
  constructor(
    private readonly actions$: Actions,
    private readonly homeNetworkService: HomeNetworkService
  ) {}

  homeNetworkList$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromActions.getHomeNetworkList),
      mergeMap(() => {
        return this.homeNetworkService.getHomeNetworkList().pipe(
          map((homeNetworkList: HomeNetwork[]) =>
            fromActions.getHomeNetworkListSuccessAction({ homeNetworkList: homeNetworkList })
          ),
          catchError((error) => of(fromActions.getErrorAction({ error: error })))
        );
      })
    )
  );
}
