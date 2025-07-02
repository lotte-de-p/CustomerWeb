const saveAsMock = jest.fn();

import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MockProvider } from 'ng-mocks';
import { InvoiceOverviewDatalayerService, InvoiceOverviewService } from '@billing/invoice-overview/data-access';
import { TranslateModule } from '@ngx-translate/core';
import { LanguageEnum, LanguageService } from '@telenet/ng-lib-page';
import { BillingOverviewExportComponent } from './billing-overview-export.component';
import { of, throwError } from 'rxjs';

jest.mock('file-saver', () => ({ saveAs: saveAsMock }));

describe('BillingOverviewExportComponent', () => {
  let component: BillingOverviewExportComponent;
  let fixture: ComponentFixture<BillingOverviewExportComponent>;
  let invoiceOverviewService: InvoiceOverviewService;
  let datalayerService: InvoiceOverviewDatalayerService;
  let languageService: LanguageService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BillingOverviewExportComponent, TranslateModule.forRoot(), HttpClientTestingModule],
      providers: [
        {
          provide: 'Window',
          useValue: {
            document: {
              documentElement: {
                lang: 'en',
              },
            },
          },
        },
        MockProvider(InvoiceOverviewService),
        MockProvider(InvoiceOverviewDatalayerService),
      ],
      declarations: [],
    }).compileComponents();

    fixture = TestBed.createComponent(BillingOverviewExportComponent);
    component = fixture.componentInstance;
    invoiceOverviewService = TestBed.inject(InvoiceOverviewService);
    datalayerService = TestBed.inject(InvoiceOverviewDatalayerService);
    languageService = TestBed.inject(LanguageService);
    jest.spyOn(languageService, 'getLanguage').mockReturnValue(LanguageEnum.NL);
    jest.spyOn(datalayerService, 'sendExportInvoices');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should open and close', () => {
    component.open({
      stopPropagation() {
        console.log('stop');
      },
    } as Event);
    expect(component.showMenu).toBe(true);
    component.close();
    expect(component.showMenu).toBe(false);
  });

  it('should download the given export type', fakeAsync(() => {
    const data = new Uint8Array([1, 2, 3, 4]);
    const blob = new Blob([data]);
    jest.spyOn(invoiceOverviewService, 'exportInvoices').mockReturnValue(of(blob));
    component.export('pdf');
    tick(500);
    expect(saveAsMock).toHaveBeenCalledWith(blob, 'export.pdf');
    expect(datalayerService.sendExportInvoices).toHaveBeenCalledWith('pdf');
  }));

  it('should download the given export type and fail', fakeAsync(() => {
    saveAsMock.mockReset();
    jest.spyOn(invoiceOverviewService, 'exportInvoices').mockReturnValue(throwError(() => 'error'));
    component.export('pdf');
    tick(500);
    expect(saveAsMock).not.toHaveBeenCalled();
    expect(component.error).toEqual('pdf');
    expect(component.downloading).toBeUndefined();
  }));
});
