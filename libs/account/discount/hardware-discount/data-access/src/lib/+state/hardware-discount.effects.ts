import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, startWith, switchMap } from 'rxjs/operators';
import { HardwareDiscountService } from '../services/hardware-discount.service';
import {
  loadHardwareDiscount,
  loadHardwareDiscountFailure,
  loadHardwareDiscountSuccess,
} from './hardware-discount.actions';

@Injectable({
  providedIn: 'root',
})
export class HardwareDiscountEffects {
  loadHardwareDiscount$;

  constructor(
    private readonly actions$: Actions,
    private readonly hardwareDiscountService: HardwareDiscountService
  ) {
    this.loadHardwareDiscount$ = createEffect(() =>
      this.actions$.pipe(
        ofType(loadHardwareDiscount),
        switchMap(() => this.hardwareDiscountService.loadHardwareDiscount()),
        map((hardwareDiscountObject) => loadHardwareDiscountSuccess({ hardwareDiscountObject })),
        catchError((error, source) => source.pipe(startWith(loadHardwareDiscountFailure({ error }))))
      )
    );
  }
}
