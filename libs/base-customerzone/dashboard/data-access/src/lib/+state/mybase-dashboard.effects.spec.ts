import { TestBed } from '@angular/core/testing';
import { Actions } from '@ngrx/effects';
import { provideMockActions } from '@ngrx/effects/testing';
import { MockProvider } from 'ng-mocks';
import { of, take, throwError } from 'rxjs';
import { BillingPaymentMethod, SupportAssistanceType, UsageStatusEnum } from '../entities/mybase-dashboard.interface';
import { MyBaseDashboardService } from '../services/mybase-dashboard.service';
import { MyBaseDashboardEffects } from './mybase-dashboard.effects';
import { provideMockStore } from '@ngrx/store/testing';

describe('mybase dashboard effects', () => {
  let actions$: Actions;
  let effects: MyBaseDashboardEffects;
  let service: MyBaseDashboardService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        MyBaseDashboardEffects,
        provideMockStore({}),
        MockProvider(MyBaseDashboardService),
        provideMockActions(() => actions$),
      ],
    });
    effects = TestBed.inject(MyBaseDashboardEffects);
    service = TestBed.inject(MyBaseDashboardService);
  });

  describe('loadMyBaseDashboard', () => {
    it('should trigger loadMyBaseDashboardSuccess', (done) => {
      jest.spyOn(service, 'loadMyBaseDashboard').mockReturnValue(
        of({
          billing: {
            showCard: true,
            pending: false,
            billingAccounts: [
              {
                accountNumber: '133742069',
                openBills: [
                  {
                    openAmount: 25.66,
                    dueInDays: -3,
                    showPayNowButton: true,
                    paymentMethod: BillingPaymentMethod.MANUAL,
                  },
                ],
                refunds: [],
              },
            ],
          },
          internetUsage: {
            showCard: true,
            pending: false,
            products: [
              {
                productName: 'BASE Limited',
                usageStatus: UsageStatusEnum.OK,
                address: {
                  street: 'Liersesteenweg',
                  houseNumber: '1',
                  subHouseNumber: '10',
                  boxNumber: '30',
                  floor: '0',
                  municipality: 'Mechelen',
                  country: 'België',
                  postalCode: '2800',
                },
              },
              {
                productName: 'BASE Limited 2 ',
                usageStatus: UsageStatusEnum.OK,
                address: {
                  street: 'Liersesteenweg',
                  houseNumber: '1',
                  subHouseNumber: '10',
                  boxNumber: '30',
                  floor: '0',
                  municipality: 'Mechelen',
                  country: 'België',
                  postalCode: '2800',
                },
              },
            ],
          },
          mobileUsage: {
            showCard: true,
            pending: false,
            products: [
              { productName: 'BASE 29', msisdn: '0412345678', usageStatus: UsageStatusEnum.LIMIT_EXCEEDED },
              { productName: 'BASE 29', msisdn: '0412345678', usageStatus: UsageStatusEnum.LIMIT_EXCEEDED },
            ],
          },
          homeNetwork: {
            showCard: true,
            pending: false,
          },
          products: {
            showCard: true,
            mobile: {
              pending: false,
              products: [{ productName: 'BASE 9' }],
            },
            internet: {
              pending: false,
              products: [{ productName: 'BASE Unlimited' }],
            },
            dtv: {
              pending: false,
              products: [{ productName: 'BASE TV' }],
            },
          },
          actions: [SupportAssistanceType.BEST_TARIFF, SupportAssistanceType.WATCH_TV],
        })
      );
      actions$ = of({ type: '[mybase-dashboard] loadMyBaseDashboard' });
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      effects.loadMyBaseDashboard$.subscribe((action: any) => {
        expect(action.type).toBe('[mybase-dashboard] loadMyBaseDashboardSuccess');
        expect(action.myBaseDashboardObject).toEqual({
          billing: {
            showCard: true,
            pending: false,
            billingAccounts: [
              {
                accountNumber: '133742069',
                openBills: [
                  {
                    openAmount: 25.66,
                    dueInDays: -3,
                    showPayNowButton: true,
                    paymentMethod: BillingPaymentMethod.MANUAL,
                  },
                ],
                refunds: [],
              },
            ],
          },
          internetUsage: {
            showCard: true,
            pending: false,
            products: [
              {
                productName: 'BASE Limited',
                usageStatus: UsageStatusEnum.OK,
                address: {
                  street: 'Liersesteenweg',
                  houseNumber: '1',
                  subHouseNumber: '10',
                  boxNumber: '30',
                  floor: '0',
                  municipality: 'Mechelen',
                  country: 'België',
                  postalCode: '2800',
                },
              },
              {
                productName: 'BASE Limited 2 ',
                usageStatus: UsageStatusEnum.OK,
                address: {
                  street: 'Liersesteenweg',
                  houseNumber: '1',
                  subHouseNumber: '10',
                  boxNumber: '30',
                  floor: '0',
                  municipality: 'Mechelen',
                  country: 'België',
                  postalCode: '2800',
                },
              },
            ],
          },
          mobileUsage: {
            showCard: true,
            pending: false,
            products: [
              { productName: 'BASE 29', msisdn: '0412345678', usageStatus: UsageStatusEnum.LIMIT_EXCEEDED },
              { productName: 'BASE 29', msisdn: '0412345678', usageStatus: UsageStatusEnum.LIMIT_EXCEEDED },
            ],
          },
          homeNetwork: {
            showCard: true,
            pending: false,
          },
          products: {
            showCard: true,
            mobile: {
              pending: false,
              products: [{ productName: 'BASE 9' }],
            },
            internet: {
              pending: false,
              products: [{ productName: 'BASE Unlimited' }],
            },
            dtv: {
              pending: false,
              products: [{ productName: 'BASE TV' }],
            },
          },
          actions: [SupportAssistanceType.BEST_TARIFF, SupportAssistanceType.WATCH_TV],
        });
        done();
      });
    });

    it('should trigger loadMyBaseDashboardFailure', (done) => {
      jest.spyOn(service, 'loadMyBaseDashboard').mockReturnValue(throwError(() => 'Error'));
      actions$ = of({ type: '[mybase-dashboard] loadMyBaseDashboard' });
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      effects.loadMyBaseDashboard$.pipe(take(1)).subscribe((action: any) => {
        expect(action.type).toBe('[mybase-dashboard] loadMyBaseDashboardFailure');
        expect(action.error).toEqual('Error');
        done();
      });
    });
  });
});
