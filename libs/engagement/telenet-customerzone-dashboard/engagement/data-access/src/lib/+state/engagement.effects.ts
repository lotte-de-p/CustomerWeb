import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { mergeMap, map } from 'rxjs/operators';
import { of, catchError } from 'rxjs';
import * as fromActions from './engagement.actions';
import { EngagementService } from '../engagement.service';
import { Engagement } from '../engagement.model';

@Injectable({
  providedIn: 'root',
})
export class EngagementEffects {
  constructor(
    private readonly actions$: Actions,
    private readonly engagementService: EngagementService
  ) {}

  engagementList$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromActions.getEngagementList),
      mergeMap(() => {
        return this.engagementService.getEngagementList().pipe(
          map((engagementList: Engagement[]) =>
            fromActions.getEngagementListSuccessAction({ engagementList: engagementList })
          ),
          catchError((error) => of(fromActions.getErrorAction({ error: error })))
        );
      })
    )
  );
}
