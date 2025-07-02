import { createFeature, createReducer, on } from '@ngrx/store';
import {
  DtvLine,
  InternetLine,
  InternetUsage,
  MobileLine,
  MobileUsage,
  MyBaseDashboardBilling,
  MyBaseDashboardHomeNetwork,
  MyBaseDashboardUsageStatus,
  NavigationCardType,
  ProductsResponse,
  ServiceMoments,
  ServiceType,
  SupportAssistanceType,
  UsageStatusEnum,
} from '../entities/mybase-dashboard.interface';
import {
  loadDtvLines,
  loadDtvLinesFailure,
  loadDtvLinesSuccess,
  loadInternetLines,
  loadInternetLinesFailure,
  loadInternetLinesSuccess,
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
  loadServiceMomentsSuccess,
  setInternetLine,
  setMobileMsisdn,
} from './mybase-dashboard.actions';

export const MYBASE_FEATURE_KEY = 'mybase';

export interface MyBaseState {
  dashboard: Dashboard;
  mobile: Mobile;
  internet: Internet;
  dtv: Dtv;
  serviceMoments: ServiceMoment;
}

export interface Dashboard {
  billing: MyBaseDashboardBilling;
  mobileUsage: MyBaseDashboardUsageStatus;
  internetUsage: MyBaseDashboardUsageStatus;
  products: ProductsResponse;
  actions: SupportAssistanceType[];
  homeNetwork: MyBaseDashboardHomeNetwork;
  loading: boolean;
  loadError: string | undefined;
}

export interface Mobile {
  actions: (NavigationCardType | ServiceType)[];
  mobileUsage: MobileUsage;
  selectedMsisdn: MobileLine | undefined;
  lines: MobileLine[];
  loading: boolean;
  loadError: string | undefined;
}

export interface Internet {
  lines: InternetLine[];
  usage: InternetUsage;
  actions: (NavigationCardType | ServiceType)[];
  homeNetwork: MyBaseDashboardHomeNetwork;
  selectedInternetLine: InternetLine | undefined;
  loading: boolean;
  loadError: string | undefined;
}

export interface Dtv {
  productIdentifier: string | undefined;
  actions: (NavigationCardType | ServiceType)[];
  lines: DtvLine[];
  loading: boolean;
  loadError: string | undefined;
}

export interface ServiceMoment {
  events: ServiceMoments[];
  loading: boolean;
  loadError: string | undefined;
}

export const initialState: MyBaseState = {
  dashboard: {
    billing: {
      showCard: false,
      pending: false,
      billingAccounts: [],
    },
    mobileUsage: {
      showCard: false,
      pending: false,
      products: [],
    },
    internetUsage: {
      showCard: false,
      pending: false,
      products: [],
    },
    products: {
      showCard: false,
      mobile: {
        pending: false,
        products: [],
      },
      internet: {
        pending: false,
        products: [],
      },
      dtv: {
        pending: false,
        products: [],
      },
    },
    actions: [],
    homeNetwork: {
      showCard: false,
      pending: false,
    },
    loading: false,
    loadError: undefined,
  },
  mobile: {
    actions: [],
    mobileUsage: {
      showCard: false,
      postpaid: {
        daysUntilRenewal: 0,
        data: {
          remaining: 0,
          total: 0,
          carryOver: 0,
        },
        outOfBundleLimit: 0,
        status: UsageStatusEnum.OK,
      },
    },
    loading: false,
    lines: [],
    selectedMsisdn: undefined,
    loadError: undefined,
  },
  internet: {
    lines: [],
    usage: {
      showCard: false,
    },
    actions: [],
    homeNetwork: {
      showCard: false,
      pending: false,
    },
    selectedInternetLine: undefined,
    loading: false,
    loadError: undefined,
  },
  dtv: {
    loading: false,
    loadError: undefined,
    productIdentifier: undefined,
    actions: [],
    lines: [],
  },
  serviceMoments: {
    loadError: undefined,
    loading: false,
    events: [],
  },
};

export const myBaseDashboardReducer = createReducer(
  initialState,
  // Dashboard
  on(loadMyBaseDashboard, (state: MyBaseState) => ({
    ...state,
    dashboard: { ...state.dashboard, loading: true },
  })),
  on(loadMyBaseDashboardSuccess, (state: MyBaseState, action) => ({
    ...state,
    dashboard: { ...state.dashboard, ...action.myBaseDashboardObject, loading: false, loadError: undefined },
  })),
  on(loadMyBaseDashboardFailure, (state: MyBaseState, action) => ({
    ...state,
    dashboard: { ...state.dashboard, loading: false, loadError: action.error },
  })),
  // Mobile
  on(loadMyBaseDashboardMobileSuccess, (state: MyBaseState, action) => ({
    ...state,
    mobile: { ...state.mobile, ...action.myBaseDashboardObject, loading: false, loadError: undefined },
  })),
  on(loadMyBaseDashboardMobileFailure, (state: MyBaseState, action) => ({
    ...state,
    mobile: { ...state.mobile, loading: false, loadError: action.error },
  })),
  on(setMobileMsisdn, (state: MyBaseState, action) => ({
    ...state,
    mobile: {
      ...state.mobile,
      selectedMsisdn: { ...action.selectedMsisdn },
      loading: true,
    },
  })),
  // Mobile lines
  on(loadMobileLines, (state: MyBaseState) => ({
    ...state,
    mobile: { ...state.mobile, loading: true },
  })),
  on(loadMobileLinesSuccess, (state: MyBaseState, action) => ({
    ...state,
    mobile: { ...state.mobile, lines: action.mobileLines, loading: false, loadError: undefined },
  })),
  on(loadMobileLinesFailure, (state: MyBaseState, action) => ({
    ...state,
    mobile: { ...state.mobile, loading: false, loadError: action.error },
  })),
  // Internet lines
  on(loadInternetLines, (state: MyBaseState) => ({
    ...state,
    internet: { ...state.internet, loading: true },
  })),
  on(loadInternetLinesSuccess, (state: MyBaseState, action) => ({
    ...state,
    internet: { ...state.internet, lines: action.internetLines, loading: false, loadError: undefined },
  })),
  on(loadInternetLinesFailure, (state: MyBaseState, action) => ({
    ...state,
    internet: { ...state.internet, loading: false, loadError: action.error },
  })),
  // Internet
  on(loadMyBaseDashboardInternetSuccess, (state: MyBaseState, action) => ({
    ...state,
    internet: { ...state.internet, ...action.myBaseDashboardObject, loading: false, loadError: undefined },
  })),
  on(loadMyBaseDashboardInternetFailure, (state: MyBaseState, action) => ({
    ...state,
    internet: { ...state.internet, loading: false, loadError: action.error },
  })),
  on(setInternetLine, (state: MyBaseState, action) => ({
    ...state,
    internet: {
      ...state.internet,
      selectedInternetLine: { ...action.selectedInternetLine },
      loading: true,
    },
  })),
  // DTV lines
  on(loadDtvLines, (state: MyBaseState) => ({
    ...state,
    dtv: { ...state.dtv, loading: true },
  })),
  on(loadDtvLinesSuccess, (state: MyBaseState, action) => ({
    ...state,
    dtv: { ...state.dtv, ...action.myBaseDashboardObject, loading: false, loadError: undefined },
  })),
  on(loadDtvLinesFailure, (state: MyBaseState, action) => ({
    ...state,
    dtv: { ...state.dtv, loading: false, loadError: action.error },
  })),
  // Service Moments
  on(loadServiceMomentsSuccess, (state: MyBaseState, action) => ({
    ...state,
    serviceMoments: { ...state.serviceMoments, events: action.serviceMoments, loading: false, loadError: undefined },
  })),
  on(loadServiceMomentsFailure, (state: MyBaseState, action) => ({
    ...state,
    serviceMoments: { ...state.serviceMoments, loading: false, loadError: action.error },
  }))
);

export const myBaseDashboardFeature = createFeature({
  name: MYBASE_FEATURE_KEY,
  reducer: myBaseDashboardReducer,
});
