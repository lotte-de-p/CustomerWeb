import { Company } from '../company.model';
import { ServiceTranslation } from '../service-translation.model';

export interface TransactionState {
  transaction: Transaction;
  company?: Company;
  expanded: boolean;
}

export interface Transaction {
  serviceName: string;
  companyId: number;
  date: Date;
  price: number;
  priceUnit: string;
  description: string;
  serviceTranslation: ServiceTranslation;
}

export interface InitialTransactions {
  totalNumberOfTransactions: number;
  transactions: Transaction[];
}

export interface TransactionDetails {
  description: string;
  company?: Company;
}
