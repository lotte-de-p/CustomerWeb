import { TestBed } from '@angular/core/testing';
import { Actions } from '@ngrx/effects';
import { provideMockActions } from '@ngrx/effects/testing';
import { MockProvider } from 'ng-mocks';

import { SimManagementEffects } from './sim-management.effects';
import { SimManagementService } from '../services/sim-management.service';
import { of, throwError } from 'rxjs';
import {
  activateSimFailure,
  activateSimSuccess,
  assignMobileLineFailure,
  assignMobileLineSuccess,
  blockMobileLineFailure,
  blockMobileLineSuccess,
  loadHouseholdUsersFailure,
  loadHouseholdUsersSuccess,
  loadLoginDetailsFailure,
  loadLoginDetailsSuccess,
  loadMobileLinesFailure,
  loadMobileLinesSuccess,
  setMobileLineNameFailure,
  setMobileLineNameSuccess,
  unblockMobileLineFailure,
  unblockMobileLineSuccess,
} from './sim-management.actions';
import { User } from '../entities/user.interface';
import { MobileLine } from '../entities/mobile-line.interface';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { LoginDetails, UserDetailsService } from '@telenet/ng-lib-ocapi';

describe('SimManagementEffects', () => {
  let effects: SimManagementEffects;
  let actions$: Actions;
  let service: SimManagementService;
  let userDetailsService: UserDetailsService;

  const mobileLines: MobileLine[] = require('../mock/mobile-lines-mock.json');
  const householdUsers: User[] = require('../mock/household-users-mock.json');
  const mobileLine: MobileLine = require('../mock/mobile-line-mock.json');
  const loginDetails: LoginDetails = require('../mock/login-details-mock.json');
  const errorResponse = new HttpErrorResponse({
    error: 'error',
    statusText: 'error',
    status: 500,
  });
  const expectedErrorMessage = 'Http failure response for (unknown url): 500 error';

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        SimManagementEffects,
        MockProvider(SimManagementService),
        MockProvider(UserDetailsService),
        provideMockActions(() => actions$),
        { provide: 'Window', useValue: {} },
      ],
    });

    effects = TestBed.inject(SimManagementEffects);
    actions$ = TestBed.inject(Actions);
    service = TestBed.inject(SimManagementService);
    userDetailsService = TestBed.inject(UserDetailsService);
  });

  it('should dispatch loadSimCardsSuccess action on successful loadMobileLines', (done) => {
    jest.spyOn(service, 'getMobileLines').mockReturnValue(of(mobileLines));

    actions$ = of({ type: '[sim-management] loadMobileLines' });
    effects.loadMobileLines$.subscribe((action) => {
      expect(action).toEqual(loadMobileLinesSuccess({ mobileLines }));
      done();
    });
  });

  it('should dispatch loadSimCardsFailure action on failure loadMobileLines', (done) => {
    jest.spyOn(service, 'getMobileLines').mockReturnValue(throwError(() => errorResponse));

    actions$ = of({ type: '[sim-management] loadMobileLines' });
    effects.loadMobileLines$.subscribe((action) => {
      expect(action).toEqual(
        loadMobileLinesFailure({
          error: expectedErrorMessage,
        })
      );
      done();
    });
  });

  it('should dispatch loadLoginDetailsSuccess action on successful loadLoginDetails', (done) => {
    jest.spyOn(userDetailsService, 'getUserDetails').mockReturnValue(of(loginDetails));

    actions$ = of({ type: '[sim-management] loadLoginDetails' });
    effects.loadLoginDetails$.subscribe((action) => {
      expect(action).toEqual(loadLoginDetailsSuccess({ loginDetails }));
      done();
    });
  });

  it('should dispatch loadSimCardsFailure action on failure loadMobileLines', (done) => {
    jest.spyOn(userDetailsService, 'getUserDetails').mockReturnValue(throwError(() => errorResponse));

    actions$ = of({ type: '[sim-management] loadLoginDetails' });
    effects.loadLoginDetails$.subscribe((action) => {
      expect(action).toEqual(
        loadLoginDetailsFailure({
          error: expectedErrorMessage,
        })
      );
      done();
    });
  });

  it('should dispatch loadHouseholdUsersSuccess action on successful loadHouseholdUsers', (done) => {
    jest.spyOn(service, 'getHouseholdUsers').mockReturnValue(of(householdUsers));

    actions$ = of({ type: '[sim-management] loadHouseholdUsers' });
    effects.loadHouseholdUsers$.subscribe((action) => {
      expect(action).toEqual(loadHouseholdUsersSuccess({ householdUsers }));
      done();
    });
  });

  it('should dispatch loadHouseholdUsersFailure action on failure loadHouseholdUsers', (done) => {
    jest.spyOn(service, 'getHouseholdUsers').mockReturnValue(throwError(() => errorResponse));

    actions$ = of({ type: '[sim-management] loadHouseholdUsers' });
    effects.loadHouseholdUsers$.subscribe((action) => {
      expect(action).toEqual(
        loadHouseholdUsersFailure({
          error: expectedErrorMessage,
        })
      );
      done();
    });
  });

  it('should dispatch setMobileLineNameSuccess action on successful setMobileLineName', (done) => {
    jest.spyOn(service, 'setMobileLine').mockReturnValue(of(mobileLine));

    actions$ = of({ type: '[sim-management] setMobileLineName', mobileLine: mobileLine });
    effects.setMobileLineName$.subscribe((action) => {
      expect(action).toEqual(setMobileLineNameSuccess({ mobileLine }));
      done();
    });
  });

  it('should dispatch setMobileLineNameFailure action on failure setMobileLineName', (done) => {
    jest.spyOn(service, 'setMobileLine').mockReturnValue(throwError(() => errorResponse));

    actions$ = of({ type: '[sim-management] setMobileLineName' });
    effects.setMobileLineName$.subscribe((action) => {
      expect(action).toEqual(
        setMobileLineNameFailure({
          error: expectedErrorMessage,
        })
      );
      done();
    });
  });

  it('should dispatch blockMobileLineSuccess action on successful blockMobileLine', (done) => {
    jest.spyOn(service, 'setMobileLine').mockReturnValue(of(mobileLine));

    actions$ = of({ type: '[sim-management] blockMobileLine', mobileLine });
    effects.blockMobileLine$.subscribe((action) => {
      expect(action).toEqual(blockMobileLineSuccess({ mobileLine }));
      done();
    });
  });

  it('should dispatch blockMobileLineFailure action on failure blockMobileLine', (done) => {
    jest.spyOn(service, 'setMobileLine').mockReturnValue(throwError(() => errorResponse));

    actions$ = of({ type: '[sim-management] blockMobileLine' });
    effects.blockMobileLine$.subscribe((action) => {
      expect(action).toEqual(
        blockMobileLineFailure({
          error: expectedErrorMessage,
        })
      );
      done();
    });
  });

  it('should dispatch unblockMobileLineSuccess action on successful unblockMobileLine', (done) => {
    jest.spyOn(service, 'setMobileLine').mockReturnValue(of(mobileLine));

    actions$ = of({ type: '[sim-management] unblockMobileLine', mobileLine });
    effects.unblockMobileLine$.subscribe((action) => {
      expect(action).toEqual(unblockMobileLineSuccess({ mobileLine }));
      done();
    });
  });

  it('should dispatch unblockMobileLineFailure action on failure unblockMobileLine', (done) => {
    jest.spyOn(service, 'setMobileLine').mockReturnValue(throwError(() => errorResponse));

    actions$ = of({ type: '[sim-management] unblockMobileLine' });
    effects.unblockMobileLine$.subscribe((action) => {
      expect(action).toEqual(
        unblockMobileLineFailure({
          error: expectedErrorMessage,
        })
      );
      done();
    });
  });

  it('should dispatch assignMobileLineSuccess action on successful assignMobileLine', (done) => {
    jest.spyOn(service, 'setMobileLine').mockReturnValue(of(mobileLine));

    actions$ = of({ type: '[sim-management] assignMobileLine', mobileLine });
    effects.assignMobileLine$.subscribe((action) => {
      expect(action).toEqual(assignMobileLineSuccess({ mobileLine }));
      done();
    });
  });

  it('should dispatch assignMobileLineFailure action on failure assignMobileLine', (done) => {
    jest.spyOn(service, 'setMobileLine').mockReturnValue(throwError(() => errorResponse));

    actions$ = of({ type: '[sim-management] assignMobileLine' });
    effects.assignMobileLine$.subscribe((action) => {
      expect(action).toEqual(
        assignMobileLineFailure({
          error: expectedErrorMessage,
        })
      );
      done();
    });
  });

  it('should dispatch activateSimFailure action on failure activateSim', (done) => {
    jest.spyOn(service, 'activateSim').mockReturnValue(throwError(() => errorResponse));

    actions$ = of({ type: '[sim-management] activateSim' });
    effects.activateSim$.subscribe((action) => {
      expect(action).toEqual(
        activateSimFailure({
          error: expectedErrorMessage,
        })
      );
      done();
    });
  });

  it('should dispatch activateSimSuccess action on succesful activateSim', (done) => {
    jest.spyOn(service, 'activateSim').mockReturnValue(of(new HttpResponse<null>({ status: 204 })));

    actions$ = of({ type: '[sim-management] activateSim' });
    effects.activateSim$.subscribe((action) => {
      expect(action).toEqual(activateSimSuccess());
      done();
    });
  });
});
