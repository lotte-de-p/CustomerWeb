import { MapperInterface } from '@telenet/ng-lib-shared';
import { CafeBill } from '../interfaces/cafe-bill.interface';
import { Injectable } from '@angular/core';

export interface RawCafeBillsInterface {
  bills: [
    {
      accountnumber: string;
      bills: [
        {
          statementdate: string;
          billamount: {
            type: string;
            amount: number;
          };
        },
      ];
    },
  ];
}
@Injectable({
  providedIn: 'root',
})
export class CafeBillsMapper implements MapperInterface<RawCafeBillsInterface, CafeBill[]> {
  toModel(data: RawCafeBillsInterface, _httpStatus?: number): CafeBill[] {
    return data.bills.map((rawBill): CafeBill => {
      return {
        accountnumber: rawBill.accountnumber,
        bills: rawBill.bills,
      };
    });
  }
}
