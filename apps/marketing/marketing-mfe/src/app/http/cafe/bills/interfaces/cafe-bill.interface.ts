export interface CafeBill {
  accountnumber: string;
  bills: CafeBillStatement[];
}

export interface CafeBillStatement {
  statementdate: string;
  billamount: CafeBillAmount;
}

export interface CafeBillAmount {
  type: string;
  amount: number;
}
