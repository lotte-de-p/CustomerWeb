import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, concatMap, map, startWith, switchMap } from 'rxjs/operators';
import { MyBaseDashboardService } from '../services/mybase-dashboard.service';
import {
  loadDtvLines,
  loadDtvLinesFailure,
  loadDtvLinesSuccess,
  loadInternetLines,
  loadInternetLinesFailure,
  loadInternetLinesSuccess,
  loadServiceMomentsSuccess,
  loadMobileLines,
  loadMobileLinesFailure,
  loadMobileLinesSuccess,
  loadMyBaseDashboard,
  loadMyBaseDashboardFailure,
  loadMyBaseDashboardInternetFailure,
  loadMyBaseDashboardInternetSuccess,
  loadMyBaseDashboardMobileFailure,
  loadMyBaseDashboardMobileSuccess,
  loadMyBaseDashboardSuccess,
  loadServiceMomentsFailure,
  setInternetLine,
  setMobileMsisdn,
} from './mybase-dashboard.actions';
import { MyBaseDashboardFacade } from './mybase-dashboard.facade';

@Injectable({
  providedIn: 'root',
})
export class MyBaseDashboardEffects {
  loadMyBaseDashboard$;
  loadMyBaseDashboardMobile$;
  loadMyBaseDashboardInternet$;
  loadMobileLines$;
  loadInternetLines$;
  loadDtvLines$;
  loadServiceMoments$;

  constructor(
    private readonly actions$: Actions,
    private readonly facade: MyBaseDashboardFacade,
    private readonly myBaseDashboardService: MyBaseDashboardService
  ) {
    // Dashboard
    this.loadMyBaseDashboard$ = createEffect(() =>
      this.actions$.pipe(
        ofType(loadMyBaseDashboard),
        switchMap(() => this.myBaseDashboardService.loadMyBaseDashboard()),
        map((myBaseDashboardObject) => loadMyBaseDashboardSuccess({ myBaseDashboardObject })),
        catchError((error, source) => source.pipe(startWith(loadMyBaseDashboardFailure({ error }))))
      )
    );
    // Mobile
    this.loadMyBaseDashboardMobile$ = createEffect(() =>
      this.actions$.pipe(
        ofType(setMobileMsisdn),
        concatMap(() => this.facade.myBaseDashboardMobileSelectedMsisdn$),
        concatMap((selectedMsisdn) => this.myBaseDashboardService.loadMyBaseDashboardMobile(selectedMsisdn?.msisdn)),
        map((myBaseDashboardObject) => loadMyBaseDashboardMobileSuccess({ myBaseDashboardObject })),
        catchError((error, source) => source.pipe(startWith(loadMyBaseDashboardMobileFailure({ error }))))
      )
    );
    // Mobile lines
    this.loadMobileLines$ = createEffect(() =>
      this.actions$.pipe(
        ofType(loadMobileLines),
        switchMap(() => this.myBaseDashboardService.loadMobileLines()),
        map((mobileLines) => loadMobileLinesSuccess({ mobileLines })),
        catchError((error, source) => source.pipe(startWith(loadMobileLinesFailure({ error }))))
      )
    );
    // Internet lines
    this.loadInternetLines$ = createEffect(() =>
      this.actions$.pipe(
        ofType(loadInternetLines),
        switchMap(() => this.myBaseDashboardService.loadInternetLines()),
        map((internetLines) => loadInternetLinesSuccess({ internetLines })),
        catchError((error, source) => source.pipe(startWith(loadInternetLinesFailure({ error }))))
      )
    );
    // Internet
    this.loadMyBaseDashboardInternet$ = createEffect(() =>
      this.actions$.pipe(
        ofType(setInternetLine),
        concatMap(() => this.facade.myBaseDashboardInternetSelectedLine$),
        concatMap((selectedInternetLine) =>
          this.myBaseDashboardService.loadMyBaseDashboardInternet(selectedInternetLine?.productIdentifier)
        ),
        map((myBaseDashboardObject) => loadMyBaseDashboardInternetSuccess({ myBaseDashboardObject })),
        catchError((error, source) => source.pipe(startWith(loadMyBaseDashboardInternetFailure({ error }))))
      )
    );
    // DTV lines
    this.loadDtvLines$ = createEffect(() =>
      this.actions$.pipe(
        ofType(loadDtvLines),
        switchMap(() => this.myBaseDashboardService.loadDtvLines()),
        map((myBaseDashboardObject) => loadDtvLinesSuccess({ myBaseDashboardObject })),
        catchError((error, source) => source.pipe(startWith(loadDtvLinesFailure({ error }))))
      )
    );

    // Service Moments
    this.loadServiceMoments$ = createEffect(() =>
      this.actions$.pipe(
        ofType(loadMyBaseDashboard),
        switchMap(() => this.myBaseDashboardService.loadServiceMoments()),
        map((serviceMoments) => loadServiceMomentsSuccess({ serviceMoments })),
        catchError((error, source) => source.pipe(startWith(loadServiceMomentsFailure({ error }))))
      )
    );
  }
}
