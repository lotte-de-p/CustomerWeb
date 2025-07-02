import { InvoiceService } from './invoice.service';
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('InvoiceService', () => {
  let service: InvoiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InvoiceService],
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(InvoiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe(`When calling getBillingEntries`, () => {
    it(`should return a list of invoices`, async () => {
      const invoices = await service.getBillingEntries();

      const companyName = 'Stad Oostende';
      expect(invoices).toEqual([
        {
          amount: 968.52,
          companyName: companyName,
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin varius condimentum nibh. Integer nulla diam, mattis eu semper in, ultricies.',
          expirationDate: new Date('2023-03-29T22:00:00.000Z'),
          id: 'Mar23 - 25695',
          invoiceDate: new Date('2023-02-28T23:00:00.000Z'),
          openFileLink: 'invoice.openFileLink1',
          status: 'open',
        },
        {
          amount: 132.23,
          companyName: companyName,
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin varius condimentum nibh. Integer nulla diam, mattis eu semper in, ultricies.',
          expirationDate: new Date('2023-02-27T23:00:00.000Z'),
          id: 'Feb23 - 25694',
          invoiceDate: new Date('2023-01-31T23:00:00.000Z'),
          openFileLink: 'invoice.openFileLink2',
          status: 'paid',
        },
        {
          amount: 2.5,
          companyName: companyName,
          description: 'Too late',
          expirationDate: new Date('2023-01-29T23:00:00.000Z'),
          id: 'Jan23 - 25693',
          invoiceDate: new Date('2022-12-31T23:00:00.000Z'),
          openFileLink: 'invoice.openFileLink3',
          status: 'overdue',
        },
      ]);
    });
  });
});
