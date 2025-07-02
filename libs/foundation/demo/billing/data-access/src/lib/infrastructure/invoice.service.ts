import { Injectable } from '@angular/core';
import { firstValueFrom, of } from 'rxjs';
import { Invoice, InvoiceStatus } from '../entities/models/invoice.model';

@Injectable({
  providedIn: 'root',
})
export class InvoiceService {
  getBillingEntries(): Promise<Invoice[]> {
    const companyName = 'Stad Oostende';
    return firstValueFrom(
      of([
        {
          status: InvoiceStatus.OPEN,
          amount: 968.52,
          id: 'Mar23 - 25695',
          companyName,
          expirationDate: new Date('03/30/2023'),
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin varius condimentum nibh. Integer nulla diam, mattis eu semper in, ultricies.',
          invoiceDate: new Date('03/01/2023'),
          openFileLink: 'invoice.openFileLink1',
        },
        {
          status: InvoiceStatus.PAID,
          amount: 132.23,
          id: 'Feb23 - 25694',
          companyName,
          expirationDate: new Date('02/28/2023'),
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin varius condimentum nibh. Integer nulla diam, mattis eu semper in, ultricies.',
          invoiceDate: new Date('02/01/2023'),
          openFileLink: 'invoice.openFileLink2',
        },
        {
          status: InvoiceStatus.OVERDUE,
          amount: 2.5,
          id: 'Jan23 - 25693',
          companyName,
          expirationDate: new Date('01/30/2023'),
          description: 'Too late',
          invoiceDate: new Date('01/01/2023'),
          openFileLink: 'invoice.openFileLink3',
        },
      ])
    );
  }
}
