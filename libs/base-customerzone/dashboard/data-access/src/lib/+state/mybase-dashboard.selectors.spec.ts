import {
  BillingPaymentMethod,
  MyBaseDashboardAddress,
  SupportAssistanceType,
  UsageStatusEnum,
} from '../entities/mybase-dashboard.interface';
import { initialState } from './mybase-dashboard.reducer';
import {
  selectMyBaseDashboardBillingAccounts,
  selectMyBaseDashboardError,
  selectMyBaseDashboardInternetUsage,
  selectMyBaseDashboardLoading,
  selectMyBaseDashboardMobileMobileUsage,
  selectMyBaseDashboardMobileUsage,
  selectMyBaseDashboardProducts,
  selectMyBaseDashboardShowBilling,
  selectMyBaseDashboardShowHomeNetwork,
  selectMyBaseDashboardShowMobileUsage,
  selectMyBaseDashboardSupportAssistance,
} from './mybase-dashboard.selectors';

describe('mybase dashboard selectors', () => {
  it('should select mybase dashboard billing accounts data from the store', () => {
    const result = selectMyBaseDashboardBillingAccounts.projector(initialState);

    expect(result).toEqual(initialState.dashboard.billing.billingAccounts);
  });

  it('should select mybase dashboard billing accounts data from the store with data', () => {
    const result = selectMyBaseDashboardBillingAccounts.projector({
      ...initialState,
      dashboard: {
        ...initialState.dashboard,
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
      },
    });

    expect(result).toEqual([
      {
        accountNumber: '133742069',
        openBills: [
          { openAmount: 25.66, dueInDays: -3, showPayNowButton: true, paymentMethod: BillingPaymentMethod.MANUAL },
        ],
        refunds: [],
      },
    ]);
  });

  it('should select mybase dashboard show card data from the store', () => {
    const result = selectMyBaseDashboardShowBilling.projector({
      ...initialState,
      dashboard: {
        ...initialState.dashboard,
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
      },
    });

    expect(result).toEqual(true);
  });

  it('should select mybase dashboard loading data from the store', () => {
    const result = selectMyBaseDashboardLoading.projector({
      ...initialState,
      dashboard: {
        ...initialState.dashboard,
        loading: true,
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
      },
    });

    expect(result).toEqual(true);
  });

  it('should select mybase dashboard error data from the store', () => {
    const result = selectMyBaseDashboardError.projector({
      ...initialState,
      dashboard: {
        ...initialState.dashboard,
        loadError: 'This is an error',
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
      },
    });

    expect(result).toEqual('This is an error');
  });

  describe('Products selector', () => {
    it('should select the products data from the store', () => {
      const result = selectMyBaseDashboardProducts.projector({
        ...initialState,
        dashboard: {
          ...initialState.dashboard,
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
        },
      });

      expect(result).toEqual({
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
      });
    });
  });

  describe('mobile usage selector', () => {
    it('should select mybase dashboard mobile usages data from the store with data', () => {
      const result = selectMyBaseDashboardMobileUsage.projector({
        ...initialState,
        dashboard: {
          ...initialState.dashboard,
          mobileUsage: {
            showCard: true,
            pending: false,
            products: [
              {
                productName: 'BASE 29',
                msisdn: '0454545641',
                usageStatus: UsageStatusEnum.OK,
              },
            ],
          },
        },
      });

      expect(result).toEqual([
        {
          productName: 'BASE 29',
          msisdn: '0454545641',
          usageStatus: UsageStatusEnum.OK,
        },
      ]);
    });

    it('should select mybase dashboard usages show card data from the store', () => {
      const result = selectMyBaseDashboardShowMobileUsage.projector({
        ...initialState,
        dashboard: {
          ...initialState.dashboard,
          mobileUsage: {
            showCard: true,
            pending: false,
            products: [
              {
                productName: 'BASE 29',
                msisdn: '0454545641',
                usageStatus: UsageStatusEnum.OK,
              },
            ],
          },
        },
      });

      expect(result).toEqual(true);
    });
  });

  describe('internet usage selector', () => {
    it('should select mybase dashboard internet usages data from the store with data', () => {
      const result = selectMyBaseDashboardInternetUsage.projector({
        ...initialState,
        dashboard: {
          ...initialState.dashboard,
          internetUsage: {
            showCard: true,
            pending: false,
            products: [
              {
                productName: 'BASE 29',
                address: {} as MyBaseDashboardAddress,
                usageStatus: UsageStatusEnum.OK,
              },
            ],
          },
        },
      });

      expect(result).toEqual([
        {
          productName: 'BASE 29',
          address: {} as MyBaseDashboardAddress,
          usageStatus: UsageStatusEnum.OK,
        },
      ]);
    });

    it('should select mybase dashboard usages show card data from the store', () => {
      const result = selectMyBaseDashboardShowMobileUsage.projector({
        ...initialState,
        dashboard: {
          ...initialState.dashboard,
          mobileUsage: {
            showCard: true,
            pending: false,
            products: [
              {
                productName: 'BASE 29',
                address: {} as MyBaseDashboardAddress,
                usageStatus: UsageStatusEnum.OK,
              },
            ],
          },
        },
      });

      expect(result).toEqual(true);
    });
  });

  describe('SupportAssistance selector', () => {
    it('should select the support & assistance data from the store', () => {
      const result = selectMyBaseDashboardSupportAssistance.projector({
        ...initialState,
        dashboard: {
          ...initialState.dashboard,
          actions: [SupportAssistanceType.BEST_TARIFF, SupportAssistanceType.WATCH_TV],
        },
      });

      expect(result).toEqual([SupportAssistanceType.BEST_TARIFF, SupportAssistanceType.WATCH_TV]);
    });
  });

  describe('Home Network selector', () => {
    it('should select the home network data from store', () => {
      const result = selectMyBaseDashboardShowHomeNetwork.projector({
        ...initialState,
        dashboard: {
          ...initialState.dashboard,
          homeNetwork: {
            showCard: true,
            pending: false,
          },
        },
      });

      expect(result).toEqual(true);
    });
  });

  describe('Mobile Dashboard Mobile usage selector', () => {
    it('should select the mobile usage from the mobile dashboard store', () => {
      const result = selectMyBaseDashboardMobileMobileUsage.projector({
        ...initialState,
        mobile: {
          ...initialState.mobile,
          mobileUsage: {
            showCard: true,
            postpaid: {
              data: { total: 25_000_000_000, carryOver: 2_000_000_000, remaining: 12_000_000_000 },
              daysUntilRenewal: 16,
              outOfBundleLimit: 10,
              status: UsageStatusEnum.LIMIT_EXCEEDED_SLOW_SPEED,
            },
          },
        },
      });

      expect(result).toEqual({
        showCard: true,
        postpaid: {
          data: { total: 25_000_000_000, carryOver: 2_000_000_000, remaining: 12_000_000_000 },
          daysUntilRenewal: 16,
          outOfBundleLimit: 10,
          status: UsageStatusEnum.LIMIT_EXCEEDED_SLOW_SPEED,
        },
      });
    });
  });
});
