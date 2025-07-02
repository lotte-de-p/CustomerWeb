import { groupBy } from 'lodash-es';
import { InvoiceOverview, PaidInvoice } from '../entities/invoice';
import { BillingAccount, CollectionsTreatment, CustomerCategory, PaymentMethod } from '../entities/billing-account';
import { computed, Signal } from '@angular/core';
import { UPDATED_PAYMENT_METHOD } from '../invoice-overview.constants';

const DEFAULT_INVOICES = 3;

export const invoiceOverviewSignal = (invoiceOverview: Signal<InvoiceOverview | undefined>, showAll: Signal<boolean>) =>
  computed(() => calculateInvoiceOverview(showAll(), invoiceOverview()));

export const isEligiblePaymentSignal = (
  invoiceOverview: Signal<InvoiceOverview | undefined>,
  selectedBillingAccount: Signal<BillingAccount | undefined>
) => computed(() => isEligibleForPayment(invoiceOverview(), selectedBillingAccount()));

export const arePaidInvoicesAvailableSignal = (invoiceOverview: Signal<InvoiceOverview | undefined>) =>
  computed(() => arePaidInvoicesAvailable(invoiceOverview()));

export const isPaymentPlanActiveSignal = (billingAccount: Signal<BillingAccount | undefined>) =>
  computed(() => isPaymentPlanActive(billingAccount()));

export const isBusinessCustomerSignal = (billingAccount: Signal<BillingAccount | undefined>) =>
  computed(() => isBusinessCustomer(billingAccount()));

export const updatedPaymentMethodSignal = (
  invoiceOverview: Signal<InvoiceOverview | undefined>,
  billingAccount: Signal<BillingAccount | undefined>
) => computed(() => updatedPaymentMethod(invoiceOverview(), billingAccount()));

export const areExplicitBillScenariosAvailableSignal = (invoiceOverview: Signal<InvoiceOverview | undefined>) =>
  computed(() => areExplicitBillScenariosAvailable(invoiceOverview()));

export const shouldSendBillScenariosAttributesSignal = (showBillScenario: Signal<boolean>) =>
  computed(() => showBillScenario);

function isEligibleForPayment(invoiceOverview?: InvoiceOverview, selectedBillingAccount?: BillingAccount): boolean {
  return (
    selectedBillingAccount?.isEligibleForManualPayment ||
    (selectedBillingAccount?.currentPaymentMethod === PaymentMethod.MANUAL &&
      !!invoiceOverview?.unpaidInvoices.totalAmount &&
      invoiceOverview.unpaidInvoices.totalAmount > 0)
  );
}

function calculateInvoiceOverview(showAll: boolean, invoiceOverview?: InvoiceOverview) {
  if (!invoiceOverview) return undefined;
  if (showAll) return invoiceOverview;
  const paidInvoices: PaidInvoice[] = Object.entries(
    groupBy(
      invoiceOverview.paidInvoices.flatMap((year) => year.invoices).slice(0, DEFAULT_INVOICES),
      (invoice) => `${new Date(invoice.invoiceDate).getFullYear()}`
    )
  )
    .map(([invoiceYear, invoices]) => ({ invoiceYear, invoices }))
    .sort((invoiceYear1, invoiceYear2) => parseInt(invoiceYear2.invoiceYear) - parseInt(invoiceYear1.invoiceYear));
  return {
    unpaidInvoices: invoiceOverview.unpaidInvoices,
    paidInvoices,
  };
}

function arePaidInvoicesAvailable(invoiceOverview?: InvoiceOverview): boolean {
  return !!invoiceOverview?.paidInvoices.length;
}

function isPaymentPlanActive(billingAccount?: BillingAccount): boolean {
  return billingAccount?.collectionsTreatment === CollectionsTreatment.PAYMENT_PLAN;
}

function isBusinessCustomer(billingAccount?: BillingAccount): boolean {
  return billingAccount?.customerCategory === CustomerCategory.BUSINESS;
}

function getUpdatedPaymentMethod(lastPaymentMethod: PaymentMethod): string {
  const paymentMethodMap: { [key in PaymentMethod]?: string } = {
    [PaymentMethod.MANUAL]: PaymentMethod.MANUAL + UPDATED_PAYMENT_METHOD,
    [PaymentMethod.DIRECT_DEBIT]: PaymentMethod.DIRECT_DEBIT + UPDATED_PAYMENT_METHOD,
  };

  return paymentMethodMap[lastPaymentMethod] || '';
}

function updatedPaymentMethod(invoiceOverview?: InvoiceOverview, billingAccount?: BillingAccount): string {
  if (!billingAccount || !invoiceOverview) return '';

  const { unpaidInvoices } = invoiceOverview;
  const { currentPaymentMethod, lastPaymentMethod } = billingAccount;

  if (unpaidInvoices && lastPaymentMethod && currentPaymentMethod !== lastPaymentMethod) {
    return getUpdatedPaymentMethod(lastPaymentMethod);
  }

  return '';
}

function areExplicitBillScenariosAvailable(invoiceOverview?: InvoiceOverview): boolean {
  if (!invoiceOverview) {
    return false;
  }
  const hasUnpaidScenarios = invoiceOverview.unpaidInvoices?.invoices?.some(
    (invoice) => invoice.billingScenarios && invoice.billingScenarios.length > 0
  );
  const hasPaidScenarios = invoiceOverview.paidInvoices?.some((paid) =>
    paid.invoices?.some((invoice) => invoice.billingScenarios && invoice.billingScenarios.length > 0)
  );
  return hasUnpaidScenarios || hasPaidScenarios || false;
}
