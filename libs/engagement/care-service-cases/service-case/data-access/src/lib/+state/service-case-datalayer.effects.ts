import { Injectable } from '@angular/core';
import { ServiceCasesDatalayerService } from '../services/service-cases-datalayer.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  loadServiceCasesSuccess,
  selectServiceCase,
  serviceCasesPageView,
  toggleHistoryAction,
} from './service-case.actions';
import { combineLatestWith, tap } from 'rxjs/operators';
import { ServiceCasesConstants } from '../constants/service-cases.constants';
import { Status } from '../entitities/service-case.interface';

@Injectable({
  providedIn: 'root',
})
export class ServiceCaseDatalayerEffects {
  serviceCasesLoaded$;
  serviceCaseSelected$;
  toggleHistory$;

  constructor(
    private readonly actions$: Actions,
    private readonly serviceCasesDatalayerService: ServiceCasesDatalayerService
  ) {
    this.serviceCasesLoaded$ = createEffect(
      () =>
        this.actions$.pipe(
          ofType(loadServiceCasesSuccess),
          combineLatestWith([this.actions$.pipe(ofType(serviceCasesPageView))]),
          tap(([{ serviceCases }]) => {
            if (serviceCases.length === 0) {
              this.serviceCasesDatalayerService.addPageEvent();
              this.serviceCasesDatalayerService.sendDataLayerEventWithAttributes(
                ServiceCasesConstants.NO_SERVICE_CASES_EVENT_NAME,
                ServiceCasesConstants.EVENT_INFO_TYPE_IMPRESSION
              );
            } else {
              const openCase = serviceCases.find((serviceCase) => serviceCase.status === Status.OPEN);
              if (openCase !== undefined) {
                this.serviceCasesDatalayerService.sendDataLayerEventWithAttributes(
                  ServiceCasesConstants.SERVICE_CASE_NAVIGATION_VIEWED_EVENT_NAME,
                  ServiceCasesConstants.EVENT_INFO_TYPE_IMPRESSION,
                  openCase.status,
                  openCase.type
                );
              }
            }
          })
        ),
      { dispatch: false }
    );

    this.serviceCaseSelected$ = createEffect(
      () =>
        this.actions$.pipe(
          ofType(selectServiceCase),
          tap(({ selectedServiceCase }) => {
            this.serviceCasesDatalayerService.sendDataLayerEventWithAttributes(
              ServiceCasesConstants.SERVICE_CASE_NAVIGATION_VIEWED_EVENT_NAME,
              ServiceCasesConstants.EVENT_INFO_TYPE_IMPRESSION,
              selectedServiceCase.status,
              selectedServiceCase.type
            );
          })
        ),
      { dispatch: false }
    );

    this.toggleHistory$ = createEffect(
      () =>
        this.actions$.pipe(
          ofType(toggleHistoryAction),
          tap(() => {
            this.serviceCasesDatalayerService.sendDataLayerEventWithAttributes(
              ServiceCasesConstants.SERVICE_CASE_NAVIGATION_CLICK_EVENT_NAME,
              ServiceCasesConstants.EVENT_INFO_TYPE_CLICK,
              ServiceCasesConstants.SERVICE_CASE_SHOW_HISTORY,
              ''
            );
          })
        ),
      { dispatch: false }
    );
  }
}
