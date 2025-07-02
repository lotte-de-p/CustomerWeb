import { inject, Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { ServiceCaseSlice } from './+state/service-case.reducers';
import {
  selectClosedServiceCases,
  selectLoadError,
  selectLoading,
  selectOpenServiceCases,
  selectSelectedServiceCase,
  selectServiceCases,
} from './+state/service-case.selectors';
import {
  loadServiceCases,
  selectServiceCase,
  serviceCasesPageView,
  toggleHistoryAction,
} from './+state/service-case.actions';
import { ServiceCase } from './entitities/service-case.interface';

@Injectable({ providedIn: 'root' })
export class ServiceCaseFacade {
  private readonly store = inject(Store<ServiceCaseSlice>);
  loading$ = this.store.select(selectLoading);
  loadError$ = this.store.select(selectLoadError);
  serviceCases$ = this.store.select(selectServiceCases);
  selectedServiceCase$ = this.store.select(selectSelectedServiceCase);
  openServiceCases$ = this.store.select(selectOpenServiceCases);
  closedServiceCases$ = this.store.select(selectClosedServiceCases);

  loadServiceCases(): void {
    this.store.dispatch(loadServiceCases());
  }

  serviceCasesPageView(): void {
    this.store.dispatch(serviceCasesPageView());
  }

  selectServiceCase(selectedServiceCase: ServiceCase): void {
    this.store.dispatch(selectServiceCase({ selectedServiceCase }));
  }

  toggleHistory(isToggleHistory: boolean): void {
    this.store.dispatch(toggleHistoryAction({ isToggleHistory }));
  }
}
