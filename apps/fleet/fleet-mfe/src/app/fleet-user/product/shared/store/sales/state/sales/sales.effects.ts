import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { calculateIntent, getSalesOrder, setCalculateIntent, setIntents, updateIntent } from './sales.actions';
import { IntentService } from '../../services/intent.service';
import { map, switchMap, tap } from 'rxjs/operators';
import { CoreService } from '../../../../../../shared/services/sales/core.service';
import { CustomerStoreService } from '../../../../../../shared/services/customer-store.service';

@Injectable({
  providedIn: 'root',
})
export class SalesEffects {
  calculateIntent$;
  salesOrder$;
  updateIntent$;

  constructor(
    private readonly actions$: Actions,
    private readonly customerStoreService: CustomerStoreService,
    private readonly intentService: IntentService,
    private readonly coreService: CoreService
  ) {
    this.calculateIntent$ = createEffect(() =>
      this.actions$.pipe(
        ofType(calculateIntent),
        switchMap(({ payload }) => {
          return this.customerStoreService.getStoreData().pipe(
            map((customerStore) => {
              const intent = this.intentService.getIntent(payload.salesOrder, customerStore.status);
              const analyticsIntent = this.intentService.getIntent(payload.salesOrder, customerStore.status, true);
              return setIntents({ payload: { intent, analyticsIntent } });
            })
          );
        }),
        map(() => {
          return setCalculateIntent({ payload: true });
        })
      )
    );

    this.salesOrder$ = createEffect(() =>
      this.actions$.pipe(
        ofType(getSalesOrder),
        tap(() => {
          return setCalculateIntent({ payload: false });
        }),
        tap(({ payload }) => {
          this.coreService.getSalesOrder(payload).pipe(
            tap((salesOrder) => {
              return updateIntent({
                payload: {
                  salesOrder: salesOrder,
                  messageGroupName: payload.messageGroupName,
                },
              });
            })
          );
        })
      )
    );

    this.updateIntent$ = createEffect(() =>
      this.actions$.pipe(
        ofType(updateIntent),
        tap(({ payload }) => {
          if (payload.salesOrder.success && payload.salesOrder.id) {
            return calculateIntent({
              payload: {
                salesOrder: payload.salesOrder,
                messageGroupName: payload.messageGroupName,
              },
            });
          }
        })
      )
    );
  }
}
