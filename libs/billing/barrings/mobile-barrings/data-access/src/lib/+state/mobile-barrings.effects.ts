import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { MobileBarringsFacade } from './mobile-barrings.facade';
import { MobileBarringsService } from '../services/mobile-barrings.service';
import {
  fetchMobileBarringsFailure,
  fetchMobileBarringsSuccess,
  setSelectedMobileLine,
} from './mobile-barrings.actions';
import { catchError, concatMap, map, of, startWith } from 'rxjs';
import { MobileBarringStatus, MobileBarrings } from '../entities/mobile-barrings.interface';

@Injectable({ providedIn: 'root' })
export class MobileBarringsEffects {
  loadMobileBarrings$;
  defaultMobileBarrings: MobileBarrings = {
    productName: '',
    updatable: true,
    productStatus: '',
    barringGroups: [],
  };

  constructor(
    private readonly actions$: Actions,
    private readonly facade: MobileBarringsFacade,
    private readonly mobileBarringsService: MobileBarringsService
  ) {
    this.loadMobileBarrings$ = createEffect(() =>
      this.actions$.pipe(
        ofType(setSelectedMobileLine),
        concatMap(() => this.facade.selectMobileBarringSelectedMobileLine$),
        concatMap((mobileLine) => {
          if (mobileLine.status === MobileBarringStatus.ACTIVATION_IN_PROGRESS_STATUS) {
            // we need to do this or the skeleton will keep flashing
            this.facade.triggerLoading(false);
            return of(this.defaultMobileBarrings);
          } else {
            return this.mobileBarringsService.getMobileBarrings(mobileLine.msisdn);
          }
        }),
        map((mobileBarringObject) => fetchMobileBarringsSuccess({ mobileBarringObject })),
        catchError((error, source) => source.pipe(startWith(fetchMobileBarringsFailure({ error }))))
      )
    );
  }
}
