export enum InvoiceStatus {
  OPEN = 'open',
  OVERDUE = 'overdue',
  PAID = 'paid',
}

export interface Invoice {
  status: InvoiceStatus;
  amount: number;
  id: string;
  companyName: string;
  expirationDate: Date;
  description: string;
  invoiceDate: Date;
  openFileLink: string;
}
