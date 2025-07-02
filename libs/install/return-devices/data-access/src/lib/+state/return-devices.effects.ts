import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { combineLatest, of } from 'rxjs';
import {
  getReturnDevicesAndAddressLineDetails,
  getReturnDevicesAndAddressLineDetailsFailure,
  getReturnDevicesAndAddressLineDetailsSuccess,
  getReturnLabel,
  getReturnLabelFailure,
  getReturnLabelSuccess,
} from './return-devices.actions';
import { ReturnDevicesService } from '../services/return-devices.service';
import { ReturnLabel } from '../entities/return-label.model';

@Injectable({
  providedIn: 'root',
})
export class ReturnDevicesEffects {
  actions$ = inject(Actions);
  returnDevicesService = inject(ReturnDevicesService);

  returnLabel$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getReturnLabel),
      mergeMap((request) => {
        return this.returnDevicesService.getReturnLabel(request.addressId);
      }),
      map((returnLabel: ReturnLabel) => getReturnLabelSuccess({ returnLabel: returnLabel })),
      catchError((error) => of(getReturnLabelFailure({ error: error })))
    )
  );

  returnDevicesAndAddressLineDetails$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getReturnDevicesAndAddressLineDetails),
      mergeMap(() =>
        combineLatest([this.returnDevicesService.getAddressSelector(), this.returnDevicesService.getReturnDevices()])
      ),
      map((result) => getReturnDevicesAndAddressLineDetailsSuccess({ addressLines: result[0], devices: result[1] })),
      catchError((error) => of(getReturnDevicesAndAddressLineDetailsFailure({ error: error })))
    )
  );
}
