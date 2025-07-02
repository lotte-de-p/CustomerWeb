import { PaymentStatus } from './payment-status';

export type ExportType = 'csv' | 'pdf' | 'zip';

export interface Invoice {
  invoiceNumber: string;
  invoiceDate: Date;
  paymentDueDate?: Date;
  documentUrl: string;
  invoiceAmount: number;
  outstandingDebt: number;
  paymentStatus: PaymentStatus;
  ogmCode: string;
  billingScenarios?: BillingScenario[];
}

export interface UnpaidInvoices {
  totalAmount: number;
  invoices: Invoice[];
}

export interface PaidInvoice {
  invoiceYear: string;
  invoices: Invoice[];
}

export interface InvoiceOverview {
  unpaidInvoices: UnpaidInvoices;
  paidInvoices: PaidInvoice[];
}

export enum BillingScenarioType {
  EXTRA_COST = 'EXTRA_COST',
  CORRECTION = 'CORRECTION',
  DISCOUNT = 'DISCOUNT',
}

export enum BillingScenarioName {
  EXTRA_COST_ROAMING_OUTSIDE_EU = 'EXTRA_COST_ROAMING_OUTSIDE_EU',
  EXTRA_COST_INTERNATIONAL_CALLS = 'EXTRA_COST_INTERNATIONAL_CALLS',
  EXTRA_COST_OUT_OF_BUNDLE_MOBILE = 'EXTRA_COST_OUT_OF_BUNDLE_MOBILE',
  EXTRA_COST_SPECIAL_NUMBERS = 'EXTRA_COST_SPECIAL_NUMBERS',
  EXTRA_COST_THIRD_PARTY_USAGE = 'EXTRA_COST_THIRD_PARTY_USAGE',
  EXTRA_COST_VOD = 'EXTRA_COST_VOD',
  EXTRA_COST_HOME_DELIVERY = 'EXTRA_COST_HOME_DELIVERY',
  EXTRA_COST_ADDITIONAL_HARDWARE = 'EXTRA_COST_ADDITIONAL_HARDWARE',
  NEGLIGENCE_FEE = 'NEGLIGENCE_FEE',
  REMINDER_FEE = 'REMINDER_FEE',
  COLLECTIONS_INTERVENTION_COST = 'COLLECTIONS_INTERVENTION_COST',
  COLLECTIONS_REACTIVATION = 'COLLECTIONS_REACTIVATION',
  CABLE_CONNECTION = 'CABLE_CONNECTION',
  ACTIVATION_COST = 'ACTIVATION_COST',
  INSTALLATION_COST = 'INSTALLATION_COST',
  RESIDUAL_VALUE_STOP = 'RESIDUAL_VALUE_STOP',
  EARLY_TERMINATION_FEE = 'EARLY_TERMINATION_FEE',
  RESIDUAL_VALUE_RETURN = 'RESIDUAL_VALUE_RETURN',
  REPAIR_INTERVENTION_COST = 'REPAIR_INTERVENTION_COST',
  DUPLICATE = 'DUPLICATE',
  COMPENSATIONS = 'COMPENSATIONS',
  CREDITING_OVER_FIFTY_CENTS = 'CREDITING_OVER_FIFTY_CENTS',
  DISCOUNTS_PROMOTIONS_TEMPORARILY = 'DISCOUNTS_PROMOTIONS_TEMPORARILY',
  DISCOUNTS_PROMOTIONS = 'DISCOUNTS_PROMOTIONS',
}

export interface BillingScenario {
  name: BillingScenarioName;
  type: BillingScenarioType;
}
