import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BillingOverviewCurrentSummaryComponent } from './billing-overview-current-summary.component';
import { TranslateModule } from '@ngx-translate/core';
import { By } from '@angular/platform-browser';
import { MockProvider } from 'ng-mocks';
import {
  InvoiceOverviewDatalayerService,
  PaymentMethod,
  UPDATED_PAYMENT_METHOD,
} from '@billing/invoice-overview/data-access';

describe('BillingOverviewCurrentSummaryComponent', () => {
  let component: BillingOverviewCurrentSummaryComponent;
  let fixture: ComponentFixture<BillingOverviewCurrentSummaryComponent>;
  let datalayerService: InvoiceOverviewDatalayerService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BillingOverviewCurrentSummaryComponent, TranslateModule.forRoot()],
      providers: [
        {
          provide: 'Window',
          useValue: { location: { href: '' } },
        },
        MockProvider(InvoiceOverviewDatalayerService),
      ],
      declarations: [],
    }).compileComponents();

    fixture = TestBed.createComponent(BillingOverviewCurrentSummaryComponent);
    component = fixture.componentInstance;
    datalayerService = TestBed.inject(InvoiceOverviewDatalayerService);
    jest.spyOn(datalayerService, 'sendChangeDeliveryMethod');
    jest.spyOn(datalayerService, 'sendChangePaymentMethod');
    component.descriptions = [{ caption: 'Test Description', value: 'Test Value' }];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display header text', () => {
    component.headerText = 'Test Header';
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('wink-paragraph').textContent).toContain('Test Header');
  });

  it('should display description text', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('h6').textContent).toContain('Test Description');
  });

  it('should redirect to manage billing settings PAYMENT_METHOD', () => {
    jest.spyOn(component['urlService'], 'redirectTo');
    component.billingSettingsUrl = 'test/url';
    component.type = 'PAYMENT_METHOD';
    component.redirectToManageBillingSettings();
    expect(component['urlService'].redirectTo).toHaveBeenCalledWith('test/url');
    expect(datalayerService.sendChangePaymentMethod).toHaveBeenCalled();
  });

  it('should redirect to manage billing settings DELIVERY_METHOD', () => {
    jest.spyOn(component['urlService'], 'redirectTo');
    component.billingSettingsUrl = 'test/url';
    component.type = 'DELIVERY_METHOD';
    component.redirectToManageBillingSettings();
    expect(component['urlService'].redirectTo).toHaveBeenCalledWith('test/url');
    expect(datalayerService.sendChangeDeliveryMethod).toHaveBeenCalled();
  });

  it('should display the paragraph and wink-paragraph when description.value is present', () => {
    fixture.detectChanges();
    const paragraph = fixture.debugElement.query(By.css('span.px--xxxs > h4.heading--nomargin.bullet'));
    const winkParagraph = fixture.debugElement.query(
      By.css('[data-testid="billing-overview-current-summary-method-description-text-value"]')
    );

    expect(paragraph).toBeTruthy();
    expect(winkParagraph).toBeTruthy();
    expect(paragraph.nativeElement.textContent.trim()).toBe('.');
    expect(winkParagraph.nativeElement.textContent.trim()).toBe('Test Value');
  });

  it('should not display the paragraph and wink-paragraph when description.value is absent', () => {
    component.descriptions = [{ value: '', caption: 'Test Caption' }];
    fixture.detectChanges();

    const paragraph = fixture.debugElement.query(By.css('p.heading--4'));
    const winkParagraph = fixture.debugElement.query(
      By.css('[data-testid="billing-overview-current-summary-method-description-text-value"]')
    );

    expect(paragraph).toBeNull();
    expect(winkParagraph).toBeNull();
  });

  it('should return true when updatedPaymentMethod is not empty', () => {
    component.updatedPaymentMethod = 'MANUAL';
    component.type = 'PAYMENT_METHOD';
    expect(component.isPaymentMethodUpdated).toBe(true);
  });

  it('should return false when updatedPaymentMethod is empty', () => {
    component.updatedPaymentMethod = '';
    expect(component.isPaymentMethodUpdated).toBe(false);
  });

  it('should display the correct notification in wink-paragraph', () => {
    component.updatedPaymentMethod = PaymentMethod.MANUAL + UPDATED_PAYMENT_METHOD;
    component.type = 'PAYMENT_METHOD';
    fixture.detectChanges();
    const paragraph = getParagraph(fixture);
    expect(paragraph.nativeElement.textContent.trim()).toBe(
      'ng.billing-overview.lbl.payment-changed-to-manual-notification'
    );
  });

  it('should render wink-paragraph when isPaymentMethodUpdated is true', () => {
    component.updatedPaymentMethod = 'some value';
    component.type = 'PAYMENT_METHOD';
    fixture.detectChanges();
    const paragraph = getParagraph(fixture);
    expect(paragraph).toBeTruthy();
  });

  it('should not render wink-paragraph when isPaymentMethodUpdated is false', () => {
    component.updatedPaymentMethod = '';
    fixture.detectChanges();
    const paragraph = getParagraph(fixture);
    expect(paragraph).toBeFalsy();
  });

  function getParagraph(fixture: ComponentFixture<BillingOverviewCurrentSummaryComponent>) {
    return fixture.debugElement.query(By.css('[data-testid="billing-overview-payment-method-change-notification"]'));
  }
});
