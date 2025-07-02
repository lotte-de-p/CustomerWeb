import { CafeBillsUtil } from './cafe-bills.util';
import { cafeBillTestFactory } from '../factories/cafe-bill.interface.testfactory';

describe('CafeBillsUtil', () => {
  describe('hasBillsForAccount', () => {
    it('should return true when given an account in bills', () => {
      const hasBill = CafeBillsUtil.hasBillsForAccount('12345', [cafeBillTestFactory.build()]);
      expect(hasBill).toBe(true);
    });
    it('should return false when given no account in bills', () => {
      const hasBill = CafeBillsUtil.hasBillsForAccount('1', [cafeBillTestFactory.build()]);
      expect(hasBill).toBe(false);
    });
  });

  describe('retrieveLastBillStatementByAccountNumber', () => {
    it('should return the latest billstatement for an account nr', () => {
      const bill = cafeBillTestFactory.build();
      bill.bills.push({
        statementdate: '2020-11-03T00:00:00.0+01:00',
        billamount: {
          type: 'EUR',
          amount: 40.0,
        },
      });

      const cafeBillStatement = CafeBillsUtil.retrieveLastBillStatementByAccountNumber('12345', [bill]);
      expect(cafeBillStatement.statementdate).toEqual('2020-11-05T00:00:00.0+01:00');
      expect(cafeBillStatement.billamount.amount).toEqual(30.0);
    });
  });
});
