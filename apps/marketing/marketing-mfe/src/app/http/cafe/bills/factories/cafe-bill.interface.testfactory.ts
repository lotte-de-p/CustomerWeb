import * as Factory from 'factory.ts';
import { CafeBill } from '../interfaces/cafe-bill.interface';

export const cafeBillTestFactory = Factory.Sync.makeFactory<CafeBill>({
  accountnumber: '12345',
  bills: [
    {
      statementdate: '2020-11-05T00:00:00.0+01:00',
      billamount: {
        type: 'EUR',
        amount: 30.0,
      },
    },
  ],
});
