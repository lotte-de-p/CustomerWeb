import { Pipe, PipeTransform } from '@angular/core';
import { CurrencyPipe } from '@angular/common';

@Pipe({
  name: 'invoiceAmount',
  standalone: true,
})
export class InvoiceAmountPipe implements PipeTransform {
  transform(amount: number, locale: string): string | null {
    return new CurrencyPipe(locale).transform(amount, 'EUR', 'symbol', '1.2-2');
  }
}
