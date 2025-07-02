const saveAsMock = jest.fn();

import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { MockProvider } from 'ng-mocks';
import { Invoice, InvoiceOverviewService } from '@billing/invoice-overview/data-access';
import { TranslateModule } from '@ngx-translate/core';
import { BillingOverviewDownloadComponent } from './billing-overview-download.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { By } from '@angular/platform-browser';
import { of, throwError } from 'rxjs';

const DOWNLOAD_SELECTOR = '[data-testid="billing-overview-download"]';
jest.mock('file-saver', () => ({ saveAs: saveAsMock }));

describe('BillingOverviewDownloadComponent', () => {
  let component: BillingOverviewDownloadComponent;
  let fixture: ComponentFixture<BillingOverviewDownloadComponent>;
  let invoiceService: InvoiceOverviewService;
  let dialog: MatDialog;
  const invoice = {
    documentUrl: '/documentUrl',
    invoiceDate: new Date(2024, 6, 2),
    invoiceNumber: '12345',
  } as Invoice;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BillingOverviewDownloadComponent, TranslateModule.forRoot(), MatDialogModule],
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
        MockProvider(MatDialog),
      ],
      declarations: [],
    }).compileComponents();

    fixture = TestBed.createComponent(BillingOverviewDownloadComponent);
    component = fixture.componentInstance;
    invoiceService = TestBed.inject(InvoiceOverviewService);
    dialog = TestBed.inject(MatDialog);
    component.invoice = invoice;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the correct ui depending on loading status', () => {
    expect(fixture.debugElement.query(By.css(DOWNLOAD_SELECTOR))).toBeDefined();
    expect(fixture.debugElement.query(By.css('[data-testid="billing-overview-loading"]'))).toBeNull();
    component.loading = true;
    fixture.detectChanges();
    expect(fixture.debugElement.query(By.css(DOWNLOAD_SELECTOR))).toBeNull();
    expect(fixture.debugElement.query(By.css('[data-testid="billing-overview-loading"]'))).toBeDefined();
  });

  it('should download the document', fakeAsync(() => {
    const data = new Uint8Array([1, 2, 3, 4]);
    const blob = new Blob([data]);
    jest.spyOn(invoiceService, 'downloadDocument').mockReturnValue(of(blob));
    component.downloadDocument();
    tick(500);
    expect(saveAsMock).toHaveBeenCalledWith(blob, '12345.pdf');
  }));

  it('should open dialog if download fails', fakeAsync(() => {
    saveAsMock.mockReset();
    jest.spyOn(invoiceService, 'downloadDocument').mockReturnValue(throwError(() => 'error'));
    jest.spyOn(dialog, 'open');
    fixture.debugElement.query(By.css(DOWNLOAD_SELECTOR)).nativeElement.click();
    tick(500);
    expect(saveAsMock).not.toHaveBeenCalled();
  }));
});
