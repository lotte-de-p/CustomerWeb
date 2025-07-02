import { createAction, emptyProps, props } from '@ngrx/store';
import {
  InternetLine,
  MobileLine,
  MyBaseDashboard,
  MyBaseDashboardInternet,
  MyBaseDashboardMobile,
  MyBaseDashboardDtv,
  ServiceMoments,
} from '../entities/mybase-dashboard.interface';

// Dashboard
export const loadMyBaseDashboard = createAction('[mybase-dashboard] loadMyBaseDashboard', emptyProps);

export const loadMyBaseDashboardSuccess = createAction(
  '[mybase-dashboard] loadMyBaseDashboardSuccess',
  props<{
    myBaseDashboardObject: MyBaseDashboard;
  }>()
);

export const loadMyBaseDashboardFailure = createAction(
  '[mybase-dashboard] loadMyBaseDashboardFailure',
  props<{
    error: string;
  }>()
);

// Mobile
export const loadMyBaseDashboardMobileSuccess = createAction(
  '[mybase-dashboard-mobile] loadMyBaseDashboardMobileSuccess',
  props<{
    myBaseDashboardObject: MyBaseDashboardMobile;
  }>()
);

export const setMobileMsisdn = createAction(
  '[mybase-dashboard-mobile] setMobileMsisdn',
  props<{
    selectedMsisdn: MobileLine;
  }>()
);

export const loadMyBaseDashboardMobileFailure = createAction(
  '[mybase-dashboard-mobile] loadMyBaseDashboardMobileFailure',
  props<{
    error: string;
  }>()
);

// Line selector
export const loadMobileLines = createAction('[mybase-dashboard-mobile-lines] loadMobileLines', emptyProps);

export const loadMobileLinesSuccess = createAction(
  '[mybase-dashboard-mobile-lines] loadMobileLinesSuccess',
  props<{
    mobileLines: MobileLine[];
  }>()
);

export const loadMobileLinesFailure = createAction(
  '[mybase-dashboard-mobile-lines] loadMobileLinesFailure',
  props<{
    error: string;
  }>()
);

// Address selector
export const loadInternetLines = createAction('[mybase-dashboard-internet-lines] loadInternetLines', emptyProps);

export const loadInternetLinesSuccess = createAction(
  '[mybase-dashboard-internet-lines] loadInternetLinesSuccess',
  props<{
    internetLines: InternetLine[];
  }>()
);

export const loadInternetLinesFailure = createAction(
  '[mybase-dashboard-internet-lines] loadInternetLinesFailure',
  props<{
    error: string;
  }>()
);

// Internet

export const setInternetLine = createAction(
  '[mybase-dashboard-internet] setInternetLine',
  props<{
    selectedInternetLine: InternetLine;
  }>()
);

export const loadMyBaseDashboardInternetSuccess = createAction(
  '[mybase-dashboard-internet] loadMyBaseDashboardInternetSuccess',
  props<{
    myBaseDashboardObject: MyBaseDashboardInternet;
  }>()
);

export const loadMyBaseDashboardInternetFailure = createAction(
  '[mybase-dashboard-internet] loadMyBaseDashboardInternetFailure',
  props<{
    error: string;
  }>()
);

// DTV lines
export const loadDtvLines = createAction('[mybase-dashboard-dtv-lines] loadDtvLines', emptyProps);

export const loadDtvLinesSuccess = createAction(
  '[mybase-dashboard-dtv-lines] loadDtvLinesSuccess',
  props<{
    myBaseDashboardObject: MyBaseDashboardDtv;
  }>()
);

export const loadDtvLinesFailure = createAction(
  '[mybase-dashboard-dtv-lines] loadDtvLinesFailure',
  props<{
    error: string;
  }>()
);

// Service moments
export const loadServiceMomentsSuccess = createAction(
  '[mybase-dashboard] loadServiceMomentsSuccess',
  props<{
    serviceMoments: ServiceMoments[];
  }>()
);
export const loadServiceMomentsFailure = createAction(
  '[mybase-dashboard] loadServiceMomentsFailure',
  props<{
    error: string;
  }>()
);
