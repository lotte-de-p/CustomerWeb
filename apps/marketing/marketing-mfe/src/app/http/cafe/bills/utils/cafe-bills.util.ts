import { CafeBill, CafeBillStatement } from '../interfaces/cafe-bill.interface';

export class CafeBillsUtil {
  static hasBillsForAccount(accountNumber: string, bills: CafeBill[]): boolean {
    return bills && bills.some((bill) => bill.accountnumber === accountNumber);
  }

  static retrieveLastBillStatementByAccountNumber(accountNumber: string, bills: CafeBill[]): CafeBillStatement {
    const map: CafeBillStatement[] = bills
      .filter((bill) => bill.accountnumber === accountNumber)
      .map((billsByAccount) => billsByAccount.bills)
      .reduce((acc, val) => acc.concat(val), []);
    return map.reduce((a: CafeBillStatement, b: CafeBillStatement) => {
      return new Date(a.statementdate) > new Date(b.statementdate) ? a : b;
    });
  }
}
