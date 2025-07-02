import { BillingPaymentMethod, SupportAssistanceType, UsageStatusEnum } from '../entities/mybase-dashboard.interface';
import {
  loadMyBaseDashboard,
  loadMyBaseDashboardFailure,
  loadMyBaseDashboardSuccess,
} from './mybase-dashboard.actions';
import { Dashboard, initialState, myBaseDashboardFeature } from './mybase-dashboard.reducer';

describe('mybase dashboard reducer', () => {
  const mybaseDashboardState: Dashboard = {
    billing: {
      showCard: true,
      pending: false,
      billingAccounts: [
        {
          accountNumber: '133742069',
          openBills: [
            { openAmount: 25.66, dueInDays: -3, showPayNowButton: true, paymentMethod: BillingPaymentMethod.MANUAL },
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
          productName: 'BASE Limited 1',
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
          productName: 'BASE Limited 23 ',
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
    products: {
      showCard: true,
      mobile: {
        pending: false,
        products: [{ productName: 'BASE 9' }],
      },
      internet: {
        pending: false,
        products: [{ productName: 'BASE Limited 111' }],
      },
      dtv: {
        pending: false,
        products: [{ productName: 'BASE TV' }],
      },
    },
    actions: [SupportAssistanceType.BEST_TARIFF, SupportAssistanceType.WATCH_TV],
    homeNetwork: {
      showCard: true,
      pending: false,
    },
    loading: false,
    loadError: undefined,
  };

  it('should return initial state', () => {
    const action = {
      type: 'Unknown',
    };

    const state = myBaseDashboardFeature.reducer(initialState, action);

    expect(state).toEqual(initialState);
  });

  describe('loadMyBaseDashboard', () => {
    it('should set the loading flag to true', () => {
      const action = loadMyBaseDashboard();

      const state = myBaseDashboardFeature.reducer(initialState, action);

      expect(state).toEqual({
        ...initialState,
        dashboard: {
          ...initialState.dashboard,
          loading: true,
        },
      });
    });
  });

  describe('loadMyBaseDashboardSuccess', () => {
    it('should save the new mybase dashboard data in the state', () => {
      const action = loadMyBaseDashboardSuccess({ myBaseDashboardObject: mybaseDashboardState });

      const state = myBaseDashboardFeature.reducer(
        {
          ...initialState,
        },
        action
      );
      expect(state).toEqual({ ...initialState, dashboard: mybaseDashboardState });
    });
  });

  describe('loadMyBaseDashboardFailure', () => {
    it('should save the new mybase dashboard data in the state', () => {
      const action = loadMyBaseDashboardFailure({ error: 'this is an error' });

      const state = myBaseDashboardFeature.reducer(
        {
          ...initialState,
          dashboard: {
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
            homeNetwork: {
              showCard: true,
              pending: false,
            },
            loading: true,
            loadError: undefined,
          },
        },
        action
      );

      expect(state).toEqual({
        ...initialState,
        dashboard: {
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
          homeNetwork: {
            showCard: true,
            pending: false,
          },
          loading: false,
          loadError: 'this is an error',
        },
      });
    });
  });
});
