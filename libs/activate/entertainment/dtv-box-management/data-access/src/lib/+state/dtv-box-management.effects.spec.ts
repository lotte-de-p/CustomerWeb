import { TestBed } from '@angular/core/testing';
import { HttpResponse } from '@angular/common/http';
import { of, throwError } from 'rxjs';
import { Actions } from '@ngrx/effects';
import { provideMockActions } from '@ngrx/effects/testing';
import { MockProvider } from 'ng-mocks';
import { DtvBoxManagementService } from '../services/dtv-box-management.service';
import { DtvBoxSubscription } from '../entities/subscription.model';
import { Address } from '../entities/address.model';
import { DtvBoxManagementEffects } from './dtv-box-management.effects';
import {
  loadSubscriptionsSuccess,
  loadAddressesFailure,
  loadAddressesSuccess,
  loadSubscriptionsFailure,
  resetPinCode,
  resetPinCodeSuccess,
  resetPinCodeFailure,
} from './dtv-box-management.actions';

describe('DtvBoxManagementEffects', () => {
  let effects: DtvBoxManagementEffects;
  let actions$: Actions;
  let service: DtvBoxManagementService;
  const subscriptions: DtvBoxSubscription[] = require('../mock/subscriptions-mock.json');
  const addresses: Address[] = require('../mock/addresses-mock.json');

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        DtvBoxManagementEffects,
        MockProvider(DtvBoxManagementService),
        provideMockActions(() => actions$),
        { provide: 'Window', useValue: {} },
      ],
    });

    effects = TestBed.inject(DtvBoxManagementEffects);
    actions$ = TestBed.inject(Actions);
    service = TestBed.inject(DtvBoxManagementService);
  });

  it('should dispatch loadSubscriptionsSuccess action on successful loadSubscriptions', (done) => {
    jest.spyOn(service, 'getSubscriptions').mockReturnValue(of(subscriptions));

    actions$ = of({ type: '[dtv-box-management] loadSubscriptions' });
    effects.loadSubscriptions$.subscribe((action) => {
      expect(action).toEqual(loadSubscriptionsSuccess({ subscriptions }));
      done();
    });
  });

  it('should dispatch loadSubscriptionsFailure action on failed loadSubscriptions', (done) => {
    const error = new Error('Error loading subscriptions');
    jest.spyOn(service, 'getSubscriptions').mockReturnValue(throwError(() => error));

    actions$ = of({ type: '[dtv-box-management] loadSubscriptions' });
    effects.loadSubscriptions$.subscribe((action) => {
      expect(action).toEqual(loadSubscriptionsFailure({ error }));
      done();
    });
  });

  it('should dispatch loadAddressesSuccess action on successful loadAddresses', (done) => {
    jest.spyOn(service, 'getAddresses').mockReturnValue(of(addresses));

    actions$ = of({ type: '[dtv-box-management] loadAddresses' });
    effects.loadAddresses$.subscribe((action) => {
      expect(action).toEqual(loadAddressesSuccess({ addresses }));
      done();
    });
  });

  it('should dispatch loadAddressesFailure action on failed loadAddresses', (done) => {
    const error = new Error('Error loading addresses');
    jest.spyOn(service, 'getAddresses').mockReturnValue(throwError(() => error));

    actions$ = of({ type: '[dtv-box-management] loadAddresses' });
    effects.loadAddresses$.subscribe((action) => {
      expect(action).toEqual(loadAddressesFailure({ error }));
      done();
    });
  });

  it('should dispatch resetPinCodeSuccess action on successful resetPinCode', (done) => {
    const response = new HttpResponse<null>({ status: 200 });
    jest.spyOn(service, 'resetPincode').mockReturnValue(of(response));

    actions$ = of(resetPinCode({ identifier: 'testIdentifier' }));
    effects.resetPinCode$.subscribe((action) => {
      expect(action).toEqual(resetPinCodeSuccess());
      done();
    });
  });

  it('should dispatch resetPinCodeFailure action on failed resetPinCode', (done) => {
    const response = new HttpResponse<null>({ status: 500, statusText: 'Internal Server Error' });
    jest.spyOn(service, 'resetPincode').mockReturnValue(of(response));

    actions$ = of(resetPinCode({ identifier: 'testIdentifier' }));
    effects.resetPinCode$.subscribe((action) => {
      expect(action).toEqual(resetPinCodeFailure({ error: { message: response.statusText } as Error }));
      done();
    });
  });
});
