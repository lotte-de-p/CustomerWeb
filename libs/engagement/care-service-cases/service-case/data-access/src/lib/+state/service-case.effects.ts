import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ServiceCaseService } from '../services/service-case.service';
import { catchError, map, startWith, switchMap } from 'rxjs/operators';
import { loadServiceCases, loadServiceCasesFailure, loadServiceCasesSuccess } from './service-case.actions';

@Injectable({
  providedIn: 'root',
})
export class ServiceCaseEffects {
  loadServiceCases$;

  constructor(
    private readonly actions$: Actions,
    private readonly serviceCaseService: ServiceCaseService
  ) {
    this.loadServiceCases$ = createEffect(() =>
      this.actions$.pipe(
        ofType(loadServiceCases),
        switchMap(() => this.serviceCaseService.load()),
        map((serviceCases) => loadServiceCasesSuccess({ serviceCases })),
        catchError((error, source) => source.pipe(startWith(loadServiceCasesFailure({ error }))))
      )
    );
  }
}
