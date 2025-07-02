import { inject, Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  loadDtvLines,
  loadInternetLines,
  loadMobileLines,
  loadMyBaseDashboard,
  setInternetLine,
  setMobileMsisdn,
} from './mybase-dashboard.actions';
import { MyBaseState } from './mybase-dashboard.reducer';
import {
  selectInternetLines,
  selectMobileLines,
  selectMyBaseDashboardBillingAccounts,
  selectMyBaseDashboardError,
  selectMyBaseDashboardInternetError,
  selectMyBaseDashboardInternetInternetUsage,
  selectMyBaseDashboardInternetLine,
  selectMyBaseDashboardInternetLoading,
  selectMyBaseDashboardInternetUsage,
  selectMyBaseDashboardLoading,
  selectMyBaseDashboardMobileError,
  selectMyBaseDashboardMobileLoading,
  selectMyBaseDashboardMobileMobileUsage,
  selectMyBaseDashboardMobileMsisdn,
  selectMyBaseDashboardMobileNavigationCards,
  selectMyBaseDashboardMobileServices,
  selectMyBaseDashboardMobileUsage,
  selectMyBaseDashboardProducts,
  selectMyBaseDashboardShowBilling,
  selectMyBaseDashboardShowHomeNetwork,
  selectMyBaseDashboardShowInternetUsage,
  selectMyBaseDashboardShowMobileUsage,
  selectMyBaseDashboardSupportAssistance,
  selectMyBaseDashboardInternetGeneralCards,
  selectMyBaseDashboardInternetServices,
  selectDtvLines,
  selectMyBaseDashboardDtvError,
  selectMyBaseDashboardDtvLoading,
  selectMyBaseDashboardDtvIdentifier,
  selectMyBaseDashboardDtvSimpleCards,
  selectMyBaseDashboardDtvServices,
  selectMyBaseDashboardInternetShowHomeNetwork,
  selectServiceMoments,
  selectMyBaseDashboardBillingPending,
  selectMyBaseDashboardMobileUsagePending,
  selectMyBaseDashboardInternetUsagePending,
  selectMyBaseDashboardHomeNetworkPending,
} from './mybase-dashboard.selectors';
import { InternetLine, MobileLine } from '../entities/mybase-dashboard.interface';

@Injectable({ providedIn: 'root' })
export class MyBaseDashboardFacade {
  private readonly store = inject(Store<MyBaseState>);

  // Dashboard Observables
  myBaseDashboardShowBilling$ = this.store.select(selectMyBaseDashboardShowBilling);
  myBaseDashboardBillingAccounts$ = this.store.select(selectMyBaseDashboardBillingAccounts);
  products$ = this.store.select(selectMyBaseDashboardProducts);
  supportAssistance$ = this.store.select(selectMyBaseDashboardSupportAssistance);
  myBaseDashboardLoading$ = this.store.select(selectMyBaseDashboardLoading);
  myBaseDashboardShowMobileUsage$ = this.store.select(selectMyBaseDashboardShowMobileUsage);
  myBaseDashboardMobileUsage$ = this.store.select(selectMyBaseDashboardMobileUsage);
  myBaseDashboardShowInternetUsage$ = this.store.select(selectMyBaseDashboardShowInternetUsage);
  myBaseDashboardInternetUsage$ = this.store.select(selectMyBaseDashboardInternetUsage);
  myBaseDashboardShowHomeNetwork$ = this.store.select(selectMyBaseDashboardShowHomeNetwork);
  myBaseDashboardBillingPending$ = this.store.select(selectMyBaseDashboardBillingPending);
  myBaseDashboardMobileUsagePending$ = this.store.select(selectMyBaseDashboardMobileUsagePending);
  myBaseDashboardInternetUsagePending$ = this.store.select(selectMyBaseDashboardInternetUsagePending);
  myBaseDashboardHomeNetworkPending$ = this.store.select(selectMyBaseDashboardHomeNetworkPending);

  myBaseDashboardError$ = this.store.select(selectMyBaseDashboardError);

  // Mobile Observables
  myBaseDashboardMobileMobileUsage$ = this.store.select(selectMyBaseDashboardMobileMobileUsage);
  myBaseDashboardMobileNavigationCards$ = this.store.select(selectMyBaseDashboardMobileNavigationCards);
  myBaseDashboardMobileServices$ = this.store.select(selectMyBaseDashboardMobileServices);
  myBaseDashboardMobileSelectedMsisdn$ = this.store.select(selectMyBaseDashboardMobileMsisdn);
  myBaseDashboardMobileError$ = this.store.select(selectMyBaseDashboardMobileError);
  myBaseDashboardMobileLoading$ = this.store.select(selectMyBaseDashboardMobileLoading);
  mobileLines$ = this.store.select(selectMobileLines);

  // Internet Observables
  myBaseDashboardInternetInternetUsage$ = this.store.select(selectMyBaseDashboardInternetInternetUsage);
  myBaseDashboardInternetError$ = this.store.select(selectMyBaseDashboardInternetError);
  myBaseDashboardInternetLoading$ = this.store.select(selectMyBaseDashboardInternetLoading);
  myBaseDashboardInternetSelectedLine$ = this.store.select(selectMyBaseDashboardInternetLine);
  myBaseDashboardInternetGeneralCards$ = this.store.select(selectMyBaseDashboardInternetGeneralCards);
  myBaseDashboardInternetShowHomeNetwork$ = this.store.select(selectMyBaseDashboardInternetShowHomeNetwork);
  myBaseDashboardInternetServices$ = this.store.select(selectMyBaseDashboardInternetServices);
  internetLines$ = this.store.select(selectInternetLines);

  // DTV observables
  myBaseDashboardDtvError$ = this.store.select(selectMyBaseDashboardDtvError);
  myBaseDashboardDtvLoading$ = this.store.select(selectMyBaseDashboardDtvLoading);
  myBaseDashboardDtvIdentifier$ = this.store.select(selectMyBaseDashboardDtvIdentifier);
  myBaseDashboardDtvSimpleCards$ = this.store.select(selectMyBaseDashboardDtvSimpleCards);
  myBaseDashboardDtvServices$ = this.store.select(selectMyBaseDashboardDtvServices);
  dtvLines$ = this.store.select(selectDtvLines);

  // Service moments
  myBaseServiceMoments$ = this.store.select(selectServiceMoments);

  loadMyBaseDashboard(): void {
    this.store.dispatch(loadMyBaseDashboard());
  }

  setMobileMsisdn(selectedMsisdn: MobileLine) {
    this.store.dispatch(setMobileMsisdn({ selectedMsisdn }));
  }

  loadMobileLines() {
    this.store.dispatch(loadMobileLines());
  }

  loadInternetLines() {
    this.store.dispatch(loadInternetLines());
  }

  setInterLine(selectedInternetLine: InternetLine) {
    this.store.dispatch(setInternetLine({ selectedInternetLine }));
  }

  loadDtvLines() {
    this.store.dispatch(loadDtvLines());
  }
}
