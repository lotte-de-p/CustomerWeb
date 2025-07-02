import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

import {
  loadMobileLines,
  loadMobileLinesSuccess,
  loadMobileLinesFailure,
  setMobileLineName,
  setMobileLineNameSuccess,
  setMobileLineNameFailure,
  blockMobileLine,
  blockMobileLineSuccess,
  blockMobileLineFailure,
  loadHouseholdUsers,
  loadHouseholdUsersSuccess,
  loadHouseholdUsersFailure,
  assignMobileLine,
  assignMobileLineSuccess,
  assignMobileLineFailure,
  unblockMobileLineSuccess,
  unblockMobileLineFailure,
  unblockMobileLine,
  getSimSwapSalesOrderIdFailure,
  getSimSwapSalesOrderIdSuccess,
  getSimSwapSalesOrderId,
  validateSim,
  validateSimSuccess,
  validateSimFailure,
  loadLoginDetails,
  loadLoginDetailsSuccess,
  activateSimSuccess,
  activateSimFailure,
  activateSim,
  loadLoginDetailsFailure,
  generateSMSVerificationCode,
  getESimSwapSalesOrderId,
  generateSMSVerificationCodeSuccess,
  getESimSwapSalesOrderIdSuccess,
  generateSMSVerificationCodeFailure,
  getESimSwapSalesOrderIdFailure,
  deactivateESimWearable,
  deactivateESimWearableSuccess,
  deactivateESimWearableFailure,
} from './sim-management.actions';

import { SimManagementService } from '../services/sim-management.service';
import { User } from '../entities/user.interface';
import { MobileLine } from '../entities/mobile-line.interface';
import { LoginDetails, UserDetailsService } from '@telenet/ng-lib-ocapi';

@Injectable({
  providedIn: 'root',
})
export class SimManagementEffects {
  loadMobileLines$;
  loadLoginDetails$;
  loadHouseholdUsers$;
  setMobileLineName$;
  blockMobileLine$;
  unblockMobileLine$;
  assignMobileLine$;
  getSimSwapSalesOrderId$;
  validateSim$;
  activateSim$;
  generateSMSVerificationCode$;
  getESimSwapSalesOrderId$;
  deactivateESimWearable$;

  constructor(
    private readonly actions$: Actions,
    private readonly simManagementService: SimManagementService,
    private readonly userDetailsService: UserDetailsService
  ) {
    this.loadMobileLines$ = createEffect(() =>
      this.actions$.pipe(
        ofType(loadMobileLines),
        switchMap(() => this.simManagementService.getMobileLines()),
        map((mobileLines: MobileLine[]) => {
          return loadMobileLinesSuccess({ mobileLines: mobileLines });
        }),
        catchError((error) => of(loadMobileLinesFailure({ error: error.message })))
      )
    );

    this.loadLoginDetails$ = createEffect(() =>
      this.actions$.pipe(
        ofType(loadLoginDetails),
        switchMap(() => this.userDetailsService.getUserDetails()),
        map((loginDetails: LoginDetails) => {
          return loadLoginDetailsSuccess({ loginDetails: loginDetails });
        }),
        catchError((error) => of(loadLoginDetailsFailure({ error: error.message })))
      )
    );

    this.loadHouseholdUsers$ = createEffect(() =>
      this.actions$.pipe(
        ofType(loadHouseholdUsers),
        switchMap((action) => this.simManagementService.getHouseholdUsers(action.mobileLine)),
        map((householdUsers: User[]) => {
          return loadHouseholdUsersSuccess({ householdUsers });
        }),
        catchError((error) => of(loadHouseholdUsersFailure({ error: error.message })))
      )
    );

    this.setMobileLineName$ = createEffect(() =>
      this.actions$.pipe(
        ofType(setMobileLineName),
        mergeMap((action) => this.simManagementService.setMobileLine(action.mobileLine, { name: action.name })),
        map((mobileLine: MobileLine) => {
          return setMobileLineNameSuccess({ mobileLine });
        }),
        catchError((error) => of(setMobileLineNameFailure({ error: error.message })))
      )
    );

    this.blockMobileLine$ = createEffect(() =>
      this.actions$.pipe(
        ofType(blockMobileLine),
        mergeMap((action) => this.simManagementService.setMobileLine(action.mobileLine, { isSuspended: true })),
        map((mobileLine: MobileLine) => {
          return blockMobileLineSuccess({ mobileLine });
        }),
        catchError((error) => of(blockMobileLineFailure({ error: error.message })))
      )
    );

    this.unblockMobileLine$ = createEffect(() =>
      this.actions$.pipe(
        ofType(unblockMobileLine),
        mergeMap((action) => this.simManagementService.setMobileLine(action.mobileLine, { isSuspended: false })),
        map((mobileLine: MobileLine) => {
          return unblockMobileLineSuccess({ mobileLine });
        }),
        catchError((error) => of(unblockMobileLineFailure({ error: error.message })))
      )
    );

    this.assignMobileLine$ = createEffect(() =>
      this.actions$.pipe(
        ofType(assignMobileLine),
        mergeMap((action) =>
          this.simManagementService.setMobileLine(action.mobileLine, { identityId: action.identityId })
        ),
        map((mobileLine: MobileLine) => {
          return assignMobileLineSuccess({ mobileLine });
        }),
        catchError((error) => of(assignMobileLineFailure({ error: error.message })))
      )
    );

    this.getSimSwapSalesOrderId$ = createEffect(() =>
      this.actions$.pipe(
        ofType(getSimSwapSalesOrderId),
        mergeMap((action) => this.simManagementService.getSimSwapSalesOrderId(action.msisdn)),
        map((simSwapSalesOrderId: string) => {
          return getSimSwapSalesOrderIdSuccess({ simSwapSalesOrderId });
        }),
        catchError((error) => of(getSimSwapSalesOrderIdFailure({ error })))
      )
    );

    this.validateSim$ = createEffect(() =>
      this.actions$.pipe(
        ofType(validateSim),
        mergeMap((action) => this.simManagementService.validateSim(action.orderNumber, action.msisdn, action.iccid)),
        map((response) => validateSimSuccess(response)),
        catchError((error) => of(validateSimFailure({ error: error?.message })))
      )
    );

    this.activateSim$ = createEffect(() =>
      this.actions$.pipe(
        ofType(activateSim),
        mergeMap((action) => this.simManagementService.activateSim(action.activationParams)),
        map(() => activateSimSuccess()),
        catchError((error) => of(activateSimFailure({ error: error?.message })))
      )
    );

    this.generateSMSVerificationCode$ = createEffect(() =>
      this.actions$.pipe(
        ofType(generateSMSVerificationCode),
        mergeMap((action) => this.simManagementService.generateSMSVerificationCode(action.msisdn)),
        map(() => {
          return generateSMSVerificationCodeSuccess();
        }),
        catchError((error) => of(generateSMSVerificationCodeFailure({ error })))
      )
    );

    this.getESimSwapSalesOrderId$ = createEffect(() =>
      this.actions$.pipe(
        ofType(getESimSwapSalesOrderId),
        mergeMap((action) => this.simManagementService.getESimSwapSalesOrderId(action.msisdn, action.verificationCode)),
        map((eSimSwapSalesOrderId: string) => {
          return getESimSwapSalesOrderIdSuccess({ eSimSwapSalesOrderId });
        }),
        catchError((error) => of(getESimSwapSalesOrderIdFailure({ error })))
      )
    );

    this.deactivateESimWearable$ = createEffect(() =>
      this.actions$.pipe(
        ofType(deactivateESimWearable),
        mergeMap((action) => this.simManagementService.deactivateESimWearable(action.mobileLine)),
        map((mobileLine: MobileLine) => {
          return deactivateESimWearableSuccess({ mobileLine });
        }),
        catchError((error) => of(deactivateESimWearableFailure({ error: error.message })))
      )
    );
  }
}
