import { Action, Selector, State, StateContext } from '@ngxs/store';
import { Injectable } from '@angular/core';
import { Initialize, SetLoginDetails, SetNotificationIfNotSet, SetOverview } from './priced-cph.actions';
import { defaultState, PricedCphStateModel } from './priced-cph-state.model';
import { PricedCphOverview } from '../model/priced-cph-data.model';
import { PricedCphService } from '../service/priced-cph.service';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { combineLatest, Observable, of } from 'rxjs';
import { produce } from 'immer';
import { PricedCphConstants } from '../util/priced-cph.constants';
import { CafeBill } from '../../../http/cafe/bills/interfaces/cafe-bill.interface';
import { BackendErrorNotification } from '../model/backend-error.notification';
import { LoginDetails, LoginService } from '@telenet/ng-lib-ocapi';
import { ProductHoldingAdaptorService } from '../../../http/cafe/product-holding/services/product-holding-adaptor.service';
import { CafeBillsService } from '../../../http/cafe/bills/services/cafe-bills.service';
import { ProductHolding } from '../../../http/cafe/product-holding/models/product-holding.model';

@State<PricedCphStateModel>({
  name: 'pricedcph',
  defaults: defaultState,
})
@Injectable()
export class PricedCphState {
  constructor(
    private readonly loginService: LoginService,
    private readonly productHoldingService: ProductHoldingAdaptorService,
    private readonly pricedCphService: PricedCphService,
    private readonly billService: CafeBillsService
  ) {}

  @Selector()
  public static loginDetails(state: PricedCphStateModel): LoginDetails | undefined {
    return state?.loginDetails;
  }

  @Selector()
  public static overview(state: PricedCphStateModel): PricedCphOverview[] | undefined {
    return state?.overview;
  }

  @Selector()
  public static notification(state: PricedCphStateModel) {
    return state.notification;
  }

  @Selector()
  public static isLoggedIn(state: PricedCphStateModel): boolean | undefined {
    return state?.loginDetails?.isLoggedIn();
  }

  @Action(Initialize)
  public initialize(ctx: StateContext<PricedCphStateModel>): Observable<PricedCphOverview[]> {
    return this.loginService.getLoginDetails().pipe(
      switchMap((loginDetails) =>
        combineLatest([
          this.loadCustomerProductHolding(loginDetails),
          this.loadBills(loginDetails),
          ctx.dispatch(new SetLoginDetails(loginDetails)),
        ])
      ),
      map((result) => this.pricedCphService.getOverview(result[0], result[1])),
      tap((pricedCphOverviews) => ctx.dispatch(new SetOverview(pricedCphOverviews || []))),
      catchError((err) => {
        ctx.dispatch(new SetNotificationIfNotSet(new BackendErrorNotification()));
        console.error('CPH: error in loading data ', err);
        return [];
      })
    );
  }

  @Action(SetOverview)
  public setOverview(ctx: StateContext<PricedCphStateModel>, action: SetOverview): void {
    ctx.setState(
      produce(ctx.getState(), (draft: PricedCphStateModel) => {
        draft.overview = action.overview;
      })
    );
  }

  @Action(SetNotificationIfNotSet)
  public setNotificationIfNotSet(ctx: StateContext<PricedCphStateModel>, action: SetNotificationIfNotSet): void {
    if (!ctx.getState().notification) {
      ctx.setState(
        produce(ctx.getState(), (draft: PricedCphStateModel) => {
          draft.notification = action.notification;
        })
      );
    }
  }

  @Action(SetLoginDetails)
  public setLoginDetails(ctx: StateContext<PricedCphStateModel>, action: SetLoginDetails): void {
    ctx.setState(
      produce(ctx.getState(), (draft: PricedCphStateModel) => {
        draft.loginDetails = action.loginDetails;
      })
    );
  }

  private loadCustomerProductHolding(loginDetails: LoginDetails): Observable<ProductHolding> {
    if (loginDetails.isLoggedIn()) {
      return this.productHoldingService.getCustomerProductHolding(PricedCphConstants.MESSAGE_GROUP);
    }
    return of(new ProductHolding());
  }

  private loadBills(loginDetails: LoginDetails): Observable<CafeBill[]> {
    if (loginDetails.isLoggedIn() && loginDetails.isManager()) {
      return this.billService.getBills(PricedCphConstants.MESSAGE_GROUP);
    }
    return of([]);
  }
}
