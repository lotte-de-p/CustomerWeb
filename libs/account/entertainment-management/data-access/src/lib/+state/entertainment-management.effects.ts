import { Injectable } from '@angular/core';
import { EntertainmentManagementService } from '../services/entertainment-management.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { switchMap, map, catchError, startWith } from 'rxjs';
import {
  loadEntertainmentManagementOptions,
  loadEntertainmentManagementSuccess,
  loadEntertainmentManagementFailure,
  loadEntertainmentOptionDetailsSuccess,
  loadEntertainmentOptionDetailsFailure,
  loadEntertainmentOptionDetails,
} from './entertainment-management.actions';

@Injectable({
  providedIn: 'root',
})
export class EntertainmentManagementEffects {
  loadEntertainmentManagementOptions$;
  loadEntertainmentOptionDetails$;

  constructor(
    private readonly actions$: Actions,
    private readonly entertainmentManagementService: EntertainmentManagementService
  ) {
    this.loadEntertainmentManagementOptions$ = createEffect(() =>
      this.actions$.pipe(
        ofType(loadEntertainmentManagementOptions),
        switchMap(() => this.entertainmentManagementService.loadEntertainmentManagementOptions()),
        map((entertainmentManagementObject) => loadEntertainmentManagementSuccess({ entertainmentManagementObject })),
        catchError((error, source) => source.pipe(startWith(loadEntertainmentManagementFailure({ error }))))
      )
    );

    this.loadEntertainmentOptionDetails$ = createEffect(() =>
      this.actions$.pipe(
        ofType(loadEntertainmentOptionDetails),
        switchMap(() => this.entertainmentManagementService.loadEntertainmentOptionDetails()),
        map((entertainmentManagementObject) =>
          loadEntertainmentOptionDetailsSuccess({ entertainmentManagementObject })
        ),
        catchError((error, source) => source.pipe(startWith(loadEntertainmentOptionDetailsFailure({ error }))))
      )
    );
  }
}
