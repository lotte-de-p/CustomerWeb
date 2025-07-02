import { TestBed } from '@angular/core/testing';
import { MockProvider } from 'ng-mocks';
import { of, throwError } from 'rxjs';
import { OcapiCallConfig, OcapiService } from '@telenet/ng-lib-ocapi';
import { InvoiceOverviewService } from './invoice.service';
import { Invoice, InvoiceOverview, UnpaidInvoices } from '../entities/invoice';
import { LanguageEnum } from '@telenet/ng-lib-page';

const EXPECTED_MESSAGE_GROUP_NAME = 'billing-overview';

describe('InvoiceOverviewService', () => {
  let invoiceOverviewService: InvoiceOverviewService;
  let ocapiService: OcapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InvoiceOverviewService, MockProvider(OcapiService), { provide: 'Window', useValue: {} }],
    });

    invoiceOverviewService = TestBed.inject(InvoiceOverviewService);
    ocapiService = TestBed.inject(OcapiService);
  });

  it('should call the get invoices api', () => {
    const response: InvoiceOverview = {
      paidInvoices: [],
      unpaidInvoices: {} as UnpaidInvoices,
    } as InvoiceOverview;
    jest.spyOn(ocapiService, 'doGet').mockReturnValue(of(response));

    invoiceOverviewService.getInvoices('123456').subscribe((res) => {
      expect(res).toEqual(response);
      expect(ocapiService.doGet).toHaveBeenCalledWith(
        new OcapiCallConfig(
          EXPECTED_MESSAGE_GROUP_NAME,
          '/public/api/customer-web-billing-invoice-cs/v1/billing-accounts/123456/invoices'
        )
      );
    });
  });

  it('should call the download invoice api', () => {
    jest.spyOn(ocapiService, 'doGet').mockReturnValue(of({ body: 'document' }));
    invoiceOverviewService
      .downloadDocument({
        documentUrl: '/documenturl',
      } as Invoice)
      .subscribe((res) => {
        expect(res).toEqual('document');
        expect(ocapiService.doGet).toHaveBeenCalledWith(
          new OcapiCallConfig(EXPECTED_MESSAGE_GROUP_NAME, '/documenturl')
        );
      });
  });

  it('should call the get invoices api and fail', (done) => {
    jest.spyOn(ocapiService, 'doGet').mockReturnValue(throwError(() => 'error'));

    invoiceOverviewService.getInvoices('123456').subscribe({
      error: (error) => {
        expect(error).toEqual('error');
        done();
      },
    });
  });

  it('should call the export invoices api (csv)', () => {
    jest.spyOn(ocapiService, 'doGet').mockReturnValue(of({ body: 'document' }));
    invoiceOverviewService.exportInvoices('123456', 'csv', LanguageEnum.EN).subscribe((res) => {
      expect(res).toEqual('document');
      expect(ocapiService.doGet).toHaveBeenCalledWith(
        new OcapiCallConfig(
          EXPECTED_MESSAGE_GROUP_NAME,
          '/public/api/customer-web-billing-invoice-cs/v1/billing-accounts/123456/invoices-overview?type=csv&language=en'
        )
      );
    });
  });

  it('should call the export invoices api (zip)', () => {
    jest.spyOn(ocapiService, 'doGet').mockReturnValue(of({ body: 'document' }));
    invoiceOverviewService.exportInvoices('123456', 'zip', LanguageEnum.EN).subscribe((res) => {
      expect(res).toEqual('document');
      expect(ocapiService.doGet).toHaveBeenCalledWith(
        new OcapiCallConfig(
          EXPECTED_MESSAGE_GROUP_NAME,
          '/public/api/customer-web-billing-invoice-cs/v1/billing-accounts/123456/invoices-overview?type=csv&language=en'
        )
      );
    });
  });
});
