import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TranslateFakeLoader, TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { MyBaseDashboardBillingCardComponent } from './mybase-dashboard-billing-card.component';
import { BillingPaymentMethod, MyBaseDashboardBillingAccount } from '@mybase-dashboard/data-access';

describe('MyBaseDashboardBillingCardComponent', () => {
  let component: MyBaseDashboardBillingCardComponent;
  let fixture: ComponentFixture<MyBaseDashboardBillingCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useValue: TranslateFakeLoader },
        }),
      ],
      providers: [TranslateService, { provide: 'Window', useValue: { location: {} } }],
    });

    fixture = TestBed.createComponent(MyBaseDashboardBillingCardComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('should set up the billingCardViewModel when providing billing accounts', () => {
    it('should call setUpBillingCardViewModel and return a model', () => {
      jest.spyOn(component, 'setUpBillingCardViewModel');
      component.billingAccounts = [];
      expect(component.setUpBillingCardViewModel).toHaveBeenCalledWith([]);
    });
  });

  describe('setUpBillingCardViewModel', () => {
    it('should call setUpBillingCardViewModelForOneBillingAccount when only one billing account', () => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      jest.spyOn(component, 'setUpBillingCardViewModelForOneBillingAccount' as any);
      const billingAccounts: MyBaseDashboardBillingAccount[] = [
        {
          accountNumber: '123',
          openBills: [],
          refunds: [{ amount: 12.34 }],
        },
      ];
      component.setUpBillingCardViewModel(billingAccounts);

      expect(component['setUpBillingCardViewModelForOneBillingAccount']).toHaveBeenCalledWith(billingAccounts[0]);
    });

    it('should call setUpBillingCardViewModelForMultipleBillingAccounts when multiple billing accounts', () => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      jest.spyOn(component, 'setUpBillingCardViewModelForMultipleBillingAccounts' as any);
      const billingAccounts: MyBaseDashboardBillingAccount[] = [
        {
          accountNumber: '123',
          openBills: [],
          refunds: [{ amount: 12.34 }],
        },
        {
          accountNumber: '456',
          openBills: [],
          refunds: [{ amount: 43.21 }],
        },
      ];
      component.setUpBillingCardViewModel(billingAccounts);

      expect(component['setUpBillingCardViewModelForMultipleBillingAccounts']).toHaveBeenCalledWith(billingAccounts);
    });

    it('should return NO_OPEN_AMOUNT when no billing accounts', () => {
      const returnedValue = component.setUpBillingCardViewModel([]);

      expect(returnedValue).toEqual({ type: 'NO_OPEN_AMOUNT' });
    });
  });

  describe('setUpBillingCardViewModelForOneBillingAccount', () => {
    // Happy flow:
    // https://confluence.rel.apps.telenet.be/pages/viewpage.action?pageId=627704460

    // Unhappy flow:
    // https://confluence.rel.apps.telenet.be/pages/viewpage.action?pageId=630522201

    it('AC #2 (Happy flow)', () => {
      const billingAcc: MyBaseDashboardBillingAccount = {
        accountNumber: '123',
        openBills: [],
        refunds: [],
      };
      const returnedValue = component['setUpBillingCardViewModelForOneBillingAccount'](billingAcc);

      expect(returnedValue).toEqual({ type: 'NO_OPEN_AMOUNT' });
    });

    it('AC #5 (Unhappy flow)', () => {
      const billingAccRefundSingle: MyBaseDashboardBillingAccount = {
        accountNumber: '123',
        openBills: [],
        refunds: [{ amount: 12.34 }],
      };
      const billingAccRefundMultiple: MyBaseDashboardBillingAccount = {
        accountNumber: '123',
        openBills: [],
        refunds: [{ amount: 12.34 }, { amount: 45.67 }],
      };
      const returnedValueSingleRefund =
        component['setUpBillingCardViewModelForOneBillingAccount'](billingAccRefundSingle);
      const returnedValueMultipleRefund =
        component['setUpBillingCardViewModelForOneBillingAccount'](billingAccRefundMultiple);

      expect(returnedValueSingleRefund).toEqual({ type: 'REFUND_SINGLE', amount: -12.34 });
      expect(returnedValueMultipleRefund).toEqual({ type: 'REFUND_MULTIPLE' });
    });

    it('AC #4 (Happy flow) and AC #4 (Unhappy flow)', () => {
      const billingAccOverDueSinglePaymentManual: MyBaseDashboardBillingAccount = {
        accountNumber: '123',
        openBills: [
          {
            dueInDays: -4,
            openAmount: 12.34,
            paymentMethod: BillingPaymentMethod.MANUAL,
            showPayNowButton: true,
          },
        ],
        refunds: [],
      };
      const billingAccOverDueSinglePaymentDirectDebit: MyBaseDashboardBillingAccount = {
        accountNumber: '123',
        openBills: [
          {
            dueInDays: -4,
            openAmount: 12.34,
            paymentMethod: BillingPaymentMethod.DIRECT_DEBIT,
            showPayNowButton: true,
          },
        ],
        refunds: [],
      };
      const billingAccOverDueMultiple: MyBaseDashboardBillingAccount = {
        accountNumber: '123',
        openBills: [
          {
            dueInDays: -7,
            openAmount: 12.34,
            paymentMethod: BillingPaymentMethod.MANUAL,
            showPayNowButton: true,
          },
          {
            dueInDays: -4,
            openAmount: 45.67,
            paymentMethod: BillingPaymentMethod.MANUAL,
            showPayNowButton: true,
          },
        ],
        refunds: [],
      };
      const returnedValueDueSinglePaymentManual = component['setUpBillingCardViewModelForOneBillingAccount'](
        billingAccOverDueSinglePaymentManual
      );
      const returnedValueDueSinglePaymentDirectDebit = component['setUpBillingCardViewModelForOneBillingAccount'](
        billingAccOverDueSinglePaymentDirectDebit
      );
      const returnedValueDueMultiple =
        component['setUpBillingCardViewModelForOneBillingAccount'](billingAccOverDueMultiple);

      expect(returnedValueDueSinglePaymentManual).toEqual({
        type: 'OVERDUE_SINGLE_PAYMENT_MANUAL',
        amount: 12.34,
        dueInDays: 4,
        showButton: true,
        paymentMethod: BillingPaymentMethod.MANUAL,
      });
      expect(returnedValueDueSinglePaymentDirectDebit).toEqual({
        type: 'OVERDUE_SINGLE_PAYMENT_DIRECT_DEBIT',
        amount: 12.34,
        dueInDays: 4,
        showButton: true,
        paymentMethod: BillingPaymentMethod.DIRECT_DEBIT,
      });
      expect(returnedValueDueMultiple).toEqual({ type: 'OVERDUE_MULTIPLE' });
    });

    it('AC #3 (Happy flow)', () => {
      const billingAccDueSingle: MyBaseDashboardBillingAccount = {
        accountNumber: '123',
        openBills: [
          {
            dueInDays: 4,
            openAmount: 12.34,
            paymentMethod: BillingPaymentMethod.MANUAL,
            showPayNowButton: true,
          },
        ],
        refunds: [],
      };
      const billingAccDueMultiple: MyBaseDashboardBillingAccount = {
        accountNumber: '123',
        openBills: [
          {
            dueInDays: 4,
            openAmount: 12.34,
            paymentMethod: BillingPaymentMethod.MANUAL,
            showPayNowButton: true,
          },
          {
            dueInDays: 7,
            openAmount: 45.67,
            paymentMethod: BillingPaymentMethod.MANUAL,
            showPayNowButton: true,
          },
        ],
        refunds: [],
      };
      const returnedValueDueSingle = component['setUpBillingCardViewModelForOneBillingAccount'](billingAccDueSingle);
      const returnedValueDueMultiple =
        component['setUpBillingCardViewModelForOneBillingAccount'](billingAccDueMultiple);

      expect(returnedValueDueSingle).toEqual({ type: 'DUE_SINGLE', amount: 12.34, dueInDays: 4, showButton: true });
      expect(returnedValueDueMultiple).toEqual({ type: 'DUE_MULTIPLE' });
    });
  });

  describe('setUpBillingCardViewModelForMultipleBillingAccounts', () => {
    // Unhappy flow:
    // https://confluence.rel.apps.telenet.be/pages/viewpage.action?pageId=630522201

    it('AC #3 (Unhappy flow)', () => {
      const billingAccounts = [
        {
          accountNumber: '123',
          openBills: [
            {
              dueInDays: -10,
              openAmount: 12.34,
              paymentMethod: BillingPaymentMethod.DIRECT_DEBIT,
              showPayNowButton: true,
            },
          ],
          refunds: [],
        },
        {
          accountNumber: '456',
          openBills: [
            {
              dueInDays: -7,
              openAmount: 12.34,
              paymentMethod: BillingPaymentMethod.DIRECT_DEBIT,
              showPayNowButton: true,
            },
          ],
          refunds: [],
        },
      ];

      const returnedValue = component['setUpBillingCardViewModelForMultipleBillingAccounts'](billingAccounts);

      expect(returnedValue).toEqual({ type: 'OVERDUE_MULTIPLE', accountNumber: '123' });
    });

    it('AC #8 (Unhappy flow)', () => {
      const billingAccounts = [
        {
          accountNumber: '123',
          openBills: [
            {
              dueInDays: -10,
              openAmount: 12.34,
              paymentMethod: BillingPaymentMethod.MANUAL,
              showPayNowButton: true,
            },
          ],
          refunds: [],
        },
        {
          accountNumber: '456',
          openBills: [
            {
              dueInDays: -7,
              openAmount: 56.78,
              paymentMethod: BillingPaymentMethod.DIRECT_DEBIT,
              showPayNowButton: true,
            },
          ],
          refunds: [],
        },
      ];

      const returnedValue = component['setUpBillingCardViewModelForMultipleBillingAccounts'](billingAccounts);

      expect(returnedValue).toEqual({
        type: 'OVERDUE_SINGLE_PAYMENT_MANUAL',
        amount: 12.34,
        dueInDays: 10,
        showButton: true,
        paymentMethod: BillingPaymentMethod.MANUAL,
        accountNumber: '123',
      });
    });

    it('AC #2 (Unhappy flow)', () => {
      const billingAccounts = [
        {
          accountNumber: '123',
          openBills: [
            {
              dueInDays: 1,
              openAmount: 12.34,
              paymentMethod: BillingPaymentMethod.MANUAL,
              showPayNowButton: true,
            },
          ],
          refunds: [],
        },
        {
          accountNumber: '456',
          openBills: [
            {
              dueInDays: 7,
              openAmount: 12.34,
              paymentMethod: BillingPaymentMethod.DIRECT_DEBIT,
              showPayNowButton: true,
            },
          ],
          refunds: [],
        },
      ];

      const returnedValue = component['setUpBillingCardViewModelForMultipleBillingAccounts'](billingAccounts);

      expect(returnedValue).toEqual({ type: 'DUE_MULTIPLE', accountNumber: '123' });
    });
  });

  describe('goToBillingDetail', () => {
    it('should redirect to billing details URL', () => {
      jest.spyOn(component['urlService'], 'redirectTo');
      component.billingUrl = 'billingUrl';

      component.goToBillingDetail();

      expect(component['urlService'].redirectTo).toHaveBeenCalledWith('billingUrl');
    });
  });

  describe('goToPayNow', () => {
    it('should redirect to pay now URL', () => {
      jest.spyOn(component['urlService'], 'redirectTo');
      component.payNowUrl = 'goToPayNow';

      component.goToPayNow();

      expect(component['urlService'].redirectTo).toHaveBeenCalledWith('goToPayNow');
    });
  });

  describe('goToViewBills', () => {
    it('should redirect to view bills URL', () => {
      jest.spyOn(component['urlService'], 'redirectTo');
      component.viewBillsUrl = 'https://view-bills';

      component.goToViewBills();

      expect(component['urlService'].redirectTo).toHaveBeenCalledWith('https://view-bills');
    });
  });

  describe('goToViewDetails', () => {
    it('should redirect to view details URL', () => {
      jest.spyOn(component['urlService'], 'redirectTo');
      component.viewDetailsUrl = 'https://view-details';

      component.goToViewDetails();

      expect(component['urlService'].redirectTo).toHaveBeenCalledWith('https://view-details');
    });
  });
});
