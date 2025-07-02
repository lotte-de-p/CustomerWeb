import { BillingScenarioName, BillingScenarioType, InvoiceOverview, UnpaidInvoices } from '../entities/invoice';
import dayjs from 'dayjs';
import { BillingAccount, CollectionsTreatment, CustomerCategory, PaymentMethod } from '../entities/billing-account';
import { PaymentStatus } from '../entities/payment-status';
import {
  areExplicitBillScenariosAvailableSignal,
  arePaidInvoicesAvailableSignal,
  invoiceOverviewSignal,
  isBusinessCustomerSignal,
  isEligiblePaymentSignal,
  isPaymentPlanActiveSignal,
  shouldSendBillScenariosAttributesSignal,
  updatedPaymentMethodSignal,
} from './invoice-overview.selectors';
import { signal } from '@angular/core';

const documentUrl = '/documenturl';
describe('selectors', () => {
  const now = new Date();
  const invoiceOverview: InvoiceOverview = {
    paidInvoices: [
      {
        invoiceYear: `${now.getFullYear()}`,
        invoices: [
          {
            invoiceDate: dayjs(now).subtract(1, 'month').toDate(),
            documentUrl,
            invoiceAmount: 123.45,
            outstandingDebt: 123.45,
            invoiceNumber: '12345',
            paymentStatus: PaymentStatus.PAID,
            ogmCode: 'ogm',
          },
          {
            invoiceDate: dayjs(now).subtract(2, 'month').toDate(),
            documentUrl,
            invoiceAmount: 123.45,
            outstandingDebt: 123.45,
            invoiceNumber: '23456',
            paymentStatus: PaymentStatus.PAID,
            ogmCode: 'ogm',
          },
          {
            invoiceDate: dayjs(now).subtract(3, 'month').toDate(),
            documentUrl,
            invoiceAmount: 123.45,
            outstandingDebt: 123.45,
            invoiceNumber: '34567',
            paymentStatus: PaymentStatus.PAID,
            ogmCode: 'ogm',
          },
          {
            invoiceDate: dayjs(now).subtract(4, 'month').toDate(),
            documentUrl,
            invoiceAmount: 123.45,
            outstandingDebt: 123.45,
            invoiceNumber: '45678',
            paymentStatus: PaymentStatus.PAID,
            ogmCode: 'ogm',
          },
          {
            invoiceDate: dayjs(now).subtract(25, 'month').toDate(),
            documentUrl,
            invoiceAmount: 123.45,
            outstandingDebt: 123.45,
            invoiceNumber: '45678',
            paymentStatus: PaymentStatus.PAID,
            ogmCode: 'ogm',
          },
        ],
      },
      {
        invoiceYear: `${now.getFullYear() - 1}`,
        invoices: [
          {
            invoiceDate: dayjs(now).subtract(1, 'year').toDate(),
            documentUrl,
            invoiceAmount: 123.45,
            outstandingDebt: 123.45,
            invoiceNumber: '12345',
            paymentStatus: PaymentStatus.PAID,
            ogmCode: 'ogm',
          },
        ],
      },
      {
        invoiceYear: `${now.getFullYear() - 2}`,
        invoices: [
          {
            invoiceDate: dayjs(now).subtract(2, 'year').toDate(),
            documentUrl,
            invoiceAmount: 123.45,
            outstandingDebt: 123.45,
            invoiceNumber: '12345',
            paymentStatus: PaymentStatus.PAID,
            ogmCode: 'ogm',
          },
        ],
      },
      {
        invoiceYear: `${now.getFullYear() - 3}`,
        invoices: [
          {
            invoiceDate: new Date(`${now.getFullYear() - 3}-01-01`),
            documentUrl,
            invoiceAmount: 123.45,
            outstandingDebt: 123.45,
            invoiceNumber: '12345',
            paymentStatus: PaymentStatus.PAID,
            ogmCode: 'ogm',
          },
        ],
      },
    ],
    unpaidInvoices: {
      totalAmount: 12345.56,
      invoices: [
        {
          invoiceDate: new Date('2021-01-01'),
          documentUrl,
          invoiceAmount: 123.45,
          invoiceNumber: '12345',
          paymentStatus: PaymentStatus.UNPAID,
        },
      ],
    } as UnpaidInvoices,
  };

  it('should select the invoice overview (not present)', () => {
    const result = invoiceOverviewSignal(signal(undefined), signal(true))();
    expect(result).toBeUndefined();
  });

  it('should select the invoice overview (show All)', () => {
    const result = invoiceOverviewSignal(signal(invoiceOverview), signal(true))();
    expect(result).toEqual(invoiceOverview);
  });

  it('should select the invoice overview (filtered)', () => {
    const result = invoiceOverviewSignal(signal(invoiceOverview), signal(false))();

    expect(result).toEqual({
      ...invoiceOverview,
      paidInvoices: [
        {
          invoiceYear: `${now.getFullYear()}`,
          invoices: [
            {
              invoiceDate: dayjs(now).subtract(1, 'month').toDate(),
              documentUrl,
              invoiceAmount: 123.45,
              outstandingDebt: 123.45,
              invoiceNumber: '12345',
              paymentStatus: PaymentStatus.PAID,
              ogmCode: 'ogm',
            },
            {
              invoiceDate: dayjs(now).subtract(2, 'month').toDate(),
              documentUrl,
              invoiceAmount: 123.45,
              outstandingDebt: 123.45,
              invoiceNumber: '23456',
              paymentStatus: PaymentStatus.PAID,
              ogmCode: 'ogm',
            },
            {
              invoiceDate: dayjs(now).subtract(3, 'month').toDate(),
              documentUrl,
              invoiceAmount: 123.45,
              outstandingDebt: 123.45,
              invoiceNumber: '34567',
              paymentStatus: PaymentStatus.PAID,
              ogmCode: 'ogm',
            },
          ],
        },
      ],
    });
  });

  it('should say if more paid invoices are available', () => {
    expect(arePaidInvoicesAvailableSignal(signal(invoiceOverview))()).toBe(true);
    expect(arePaidInvoicesAvailableSignal(signal(undefined))()).toBe(false);
    expect(
      arePaidInvoicesAvailableSignal(
        signal({
          unpaidInvoices: invoiceOverview.unpaidInvoices,
          paidInvoices: [],
        })
      )()
    ).toBe(false);
  });

  it('should tell if there is an outstanding debt', () => {
    expect(
      isEligiblePaymentSignal(
        signal(invoiceOverview),
        signal({
          currentPaymentMethod: PaymentMethod.MANUAL,
        } as BillingAccount)
      )()
    ).toBe(true);
    expect(
      isEligiblePaymentSignal(
        signal(invoiceOverview),
        signal({
          currentPaymentMethod: PaymentMethod.DIRECT_DEBIT,
        } as BillingAccount)
      )()
    ).toBe(false);
    expect(isEligiblePaymentSignal(signal(invoiceOverview), signal(undefined))()).toBe(false);
    expect(
      isEligiblePaymentSignal(
        signal({
          unpaidInvoices: {
            totalAmount: 0,
            invoices: [],
          },
          paidInvoices: [],
        }),
        signal(undefined)
      )()
    ).toBe(false);
    expect(
      isEligiblePaymentSignal(
        signal({
          unpaidInvoices: {
            totalAmount: -40,
            invoices: [],
          },
          paidInvoices: [],
        }),
        signal(undefined)
      )()
    ).toBe(false);
    expect(
      isEligiblePaymentSignal(
        signal(invoiceOverview),
        signal({
          currentPaymentMethod: PaymentMethod.DIRECT_DEBIT,
          isEligibleForManualPayment: true,
        } as BillingAccount)
      )()
    ).toBe(true);
    expect(
      isBusinessCustomerSignal(
        signal({
          customerCategory: CustomerCategory.BUSINESS,
        } as BillingAccount)
      )()
    ).toBe(true);
    expect(
      isBusinessCustomerSignal(
        signal({
          customerCategory: CustomerCategory.RESIDENTIAL,
        } as BillingAccount)
      )()
    ).toBe(false);
  });

  it('should tell if a payment plan is active for a selected billing account', () => {
    expect(
      isPaymentPlanActiveSignal(
        signal({
          collectionsTreatment: CollectionsTreatment.PROMISE_TO_PAY,
        } as BillingAccount)
      )()
    ).toBe(false);
    expect(
      isPaymentPlanActiveSignal(
        signal({
          collectionsTreatment: CollectionsTreatment.PAYMENT_PLAN,
        } as BillingAccount)
      )()
    ).toBe(true);
  });

  it('should tell if a payment plan has been changed for a selected billing account', () => {
    expect(
      updatedPaymentMethodSignal(
        signal(invoiceOverview),
        signal({
          currentPaymentMethod: PaymentMethod.MANUAL,
          lastPaymentMethod: PaymentMethod.DIRECT_DEBIT,
        } as BillingAccount)
      )()
    ).toBe('DIRECT_DEBIT-UPDATED-PAYMENT-METHOD');
    expect(
      updatedPaymentMethodSignal(
        signal(invoiceOverview),
        signal({
          currentPaymentMethod: PaymentMethod.DIRECT_DEBIT,
          lastPaymentMethod: PaymentMethod.MANUAL,
        } as BillingAccount)
      )()
    ).toBe('MANUAL-UPDATED-PAYMENT-METHOD');
  });

  it('should tell if explicit bill scenarios are available for a selected billing account', () => {
    expect(areExplicitBillScenariosAvailableSignal(signal(invoiceOverview))()).toBe(false);
    const invoice = invoiceOverview;

    invoice.paidInvoices = [
      {
        invoiceYear: `${now.getFullYear()}`,
        invoices: [
          {
            invoiceDate: dayjs(now).subtract(1, 'month').toDate(),
            documentUrl,
            invoiceAmount: 123.45,
            outstandingDebt: 123.45,
            invoiceNumber: '12345',
            paymentStatus: PaymentStatus.PAID,
            ogmCode: 'ogm',
            billingScenarios: [
              {
                name: BillingScenarioName.EXTRA_COST_ROAMING_OUTSIDE_EU,
                type: BillingScenarioType.EXTRA_COST,
              },
              {
                name: BillingScenarioName.CABLE_CONNECTION,
                type: BillingScenarioType.EXTRA_COST,
              },
            ],
          },
          {
            invoiceDate: dayjs(now).subtract(2, 'month').toDate(),
            documentUrl,
            invoiceAmount: 123.45,
            outstandingDebt: 123.45,
            invoiceNumber: '23456',
            paymentStatus: PaymentStatus.PAID,
            ogmCode: 'ogm',
            billingScenarios: [
              {
                name: BillingScenarioName.EXTRA_COST_ROAMING_OUTSIDE_EU,
                type: BillingScenarioType.EXTRA_COST,
              },
              {
                name: BillingScenarioName.CABLE_CONNECTION,
                type: BillingScenarioType.EXTRA_COST,
              },
              {
                name: BillingScenarioName.DUPLICATE,
                type: BillingScenarioType.EXTRA_COST,
              },
              {
                name: BillingScenarioName.DISCOUNTS_PROMOTIONS_TEMPORARILY,
                type: BillingScenarioType.DISCOUNT,
              },
            ],
          },
          {
            invoiceDate: dayjs(now).subtract(3, 'month').toDate(),
            documentUrl,
            invoiceAmount: 123.45,
            outstandingDebt: 123.45,
            invoiceNumber: '34567',
            paymentStatus: PaymentStatus.PAID,
            ogmCode: 'ogm',
          },
        ],
      },
    ];
    expect(areExplicitBillScenariosAvailableSignal(signal(invoice))()).toBe(true);
  });

  describe('shouldSendBillScenariosAttributesSignal', () => {
    it('should return true when showBillScenario is true', () => {
      const showBillScenarioSignal = signal(true);
      const result = shouldSendBillScenariosAttributesSignal(showBillScenarioSignal)();
      expect(result()).toBe(true);
    });

    it('should return false when showBillScenario is false', () => {
      const showBillScenarioSignal = signal(false);
      const result = shouldSendBillScenariosAttributesSignal(showBillScenarioSignal)();
      expect(result()).toBe(false);
    });
  });
});
