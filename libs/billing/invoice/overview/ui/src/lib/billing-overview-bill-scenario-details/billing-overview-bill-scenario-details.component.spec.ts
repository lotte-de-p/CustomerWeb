import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LanguageService, UrlService } from '@telenet/ng-lib-page';
import { TranslateModule } from '@ngx-translate/core';
import { MockComponent, MockProvider } from 'ng-mocks';
import {
  BillingScenario,
  BillingScenarioName,
  BillingScenarioType,
  Invoice,
  InvoiceOverviewDatalayerService,
  InvoiceOverviewService,
} from '@billing/invoice-overview/data-access';
import { BillingOverviewAmountComponent } from '../billing-overview-amount/billing-overview-amount.component';
import { BillingOverviewDownloadComponent } from '../billing-overview-download/billing-overview-download.component';
import { BillingOverviewIconComponent } from '../billing-overview-icon/billing-overview-icon.component';
import { BillingOverviewBillScenarioDetailsComponent } from './billing-overview-bill-scenario-details.component';
import FileSaver from 'file-saver';
import { of, throwError } from 'rxjs';
import { ElementRef } from '@angular/core';

describe('BillingOverviewBillScenarioDetailsComponent', () => {
  let component: BillingOverviewBillScenarioDetailsComponent;
  let fixture: ComponentFixture<BillingOverviewBillScenarioDetailsComponent>;
  let languageService: LanguageService;
  let urlService: UrlService;
  let datalayerService: InvoiceOverviewDatalayerService;
  let invoiceService: InvoiceOverviewService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BillingOverviewBillScenarioDetailsComponent, TranslateModule.forRoot()],
      declarations: [
        MockComponent(BillingOverviewAmountComponent),
        MockComponent(BillingOverviewDownloadComponent),
        MockComponent(BillingOverviewIconComponent),
      ],
      providers: [
        MockProvider(LanguageService),
        MockProvider(UrlService),
        MockProvider(InvoiceOverviewDatalayerService),
        MockProvider(InvoiceOverviewService),
        {
          provide: 'Window',
          useValue: {
            location: { href: '' },
            document: {
              documentElement: {
                lang: 'en',
              },
            },
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(BillingOverviewBillScenarioDetailsComponent);
    component = fixture.componentInstance;
    languageService = TestBed.inject(LanguageService);
    urlService = TestBed.inject(UrlService);
    datalayerService = TestBed.inject(InvoiceOverviewDatalayerService);
    invoiceService = TestBed.inject(InvoiceOverviewService);
    component.invoice = {} as Invoice;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize correctly in ngOnInit', () => {
    component.invoice.billingScenarios = [
      { type: BillingScenarioType.EXTRA_COST, name: BillingScenarioName.ACTIVATION_COST },
    ] as BillingScenario[];
    component.ngOnInit();
    expect(component.groupedScenarios.length).toBe(1);
  });

  it('should handle error notification in ngAfterViewInit', () => {
    component.showError = true;
    component.errorNotification = { nativeElement: { focus: jest.fn() } } as ElementRef;
    component.billScenarios = { nativeElement: { scrollTop: 0 } } as ElementRef;
    component.ngAfterViewInit();
    expect(component.billScenarios.nativeElement.scrollTop).toBe(0);
    expect(component.errorNotification.nativeElement.focus).toHaveBeenCalled();
  });

  it('should set showMenu to true in open method', () => {
    jest.spyOn(datalayerService, 'sendAdditionalBillScenarios');
    component.open();
    expect(component.showMenu).toBe(true);
    expect(datalayerService.sendAdditionalBillScenarios).toHaveBeenCalled();
  });

  it('should set showMenu to false in close method', () => {
    component.close();
    expect(component.showMenu).toBe(false);
  });

  it('should get the locale string', () => {
    jest.spyOn(languageService, 'getLocaleString').mockReturnValue('en');
    fixture.detectChanges();
    expect(component.locale).toEqual('en');
    expect(languageService.getLocaleString).toHaveBeenCalled();
  });

  it('should group scenarios correctly in getScenariosGroupedByName', () => {
    const scenarios: BillingScenario[] = [
      { type: BillingScenarioType.EXTRA_COST, name: BillingScenarioName.CABLE_CONNECTION },
      { type: BillingScenarioType.EXTRA_COST, name: BillingScenarioName.COMPENSATIONS },
      { type: BillingScenarioType.CORRECTION, name: BillingScenarioName.ACTIVATION_COST },
    ];
    const grouped = component.getScenariosGroupedByName(scenarios);
    expect(grouped.length).toBe(2);
    expect(grouped[0].scenarioNames.length).toBe(2);
    expect(grouped[1].scenarioNames.length).toBe(1);
  });

  it('should call urlService.redirectTo with correct URL in redirectToOnlinePayment', () => {
    component.onlinePaymentLink = 'http://example.com';
    jest.spyOn(urlService, 'redirectTo');
    component.redirectToOnlinePayment(new Event('click'));
    expect(urlService.redirectTo).toHaveBeenCalledWith('http://example.com');
  });

  it('should handle download process correctly in downloadInvoice', () => {
    jest.spyOn(datalayerService, 'sendDownloadInvoice');
    jest.spyOn(invoiceService, 'downloadDocument').mockReturnValue(of(new Blob()));
    jest.spyOn(FileSaver, 'saveAs');
    component.downloadInvoice();
    expect(datalayerService.sendDownloadInvoice).toHaveBeenCalled();
    expect(invoiceService.downloadDocument).toHaveBeenCalledWith(component.invoice);
    expect(FileSaver.saveAs).toHaveBeenCalled();
  });

  it('should handle error in downloadInvoice', () => {
    jest.spyOn(invoiceService, 'downloadDocument').mockReturnValue(throwError(() => new Error('error')));
    component.downloadInvoice();
    expect(component.showError).toBe(true);
    expect(component.loading).toBe(false);
  });
});
