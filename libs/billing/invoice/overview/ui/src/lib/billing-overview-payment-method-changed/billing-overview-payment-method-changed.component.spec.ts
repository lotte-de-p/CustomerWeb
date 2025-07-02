import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BillingOverviewPaymentMethodChangedComponent } from './billing-overview-payment-method-changed.component';
import { TranslateModule } from '@ngx-translate/core';
import { By } from '@angular/platform-browser';
import { PaymentMethod, UPDATED_PAYMENT_METHOD } from '@billing/invoice-overview/data-access';

describe('BillingOverviewPaymentMethodChangedComponent', () => {
  let component: BillingOverviewPaymentMethodChangedComponent;
  let fixture: ComponentFixture<BillingOverviewPaymentMethodChangedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BillingOverviewPaymentMethodChangedComponent, TranslateModule.forRoot()],
      declarations: [],
    }).compileComponents();

    fixture = TestBed.createComponent(BillingOverviewPaymentMethodChangedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the correct header and message for MANUAL payment method', () => {
    component.updatedPaymentMethod = PaymentMethod.MANUAL + UPDATED_PAYMENT_METHOD;
    fixture.detectChanges();
    const { header, message } = getElements(fixture);

    expect(header.text).toBe('ng.billing-overview.lbl.payment-changed-to-manual-header');
    expect(message.textContent.trim()).toBe('ng.billing-overview.lbl.payment-changed-to-manual-info');
  });

  it('should display the correct header and message for DIRECT_DEBIT payment method', () => {
    component.updatedPaymentMethod = PaymentMethod.DIRECT_DEBIT + UPDATED_PAYMENT_METHOD;
    fixture.detectChanges();
    const { header, message } = getElements(fixture);
    expect(header.text).toBe('ng.billing-overview.lbl.payment-changed-to-direct-debit-header');
    expect(message.textContent.trim()).toBe('ng.billing-overview.lbl.payment-changed-to-direct-debit-info');
  });

  it('should display empty header and message for unknown payment method', () => {
    component.updatedPaymentMethod = 'UNKNOWN';
    fixture.detectChanges();
    const { header, message } = getElements(fixture);
    expect(header.text).toBe('');
    expect(message.textContent.trim()).toBe('');
  });

  it('should render wink-icon, wink-title, and wink-paragraph elements', () => {
    fixture.detectChanges();
    const icon = fixture.debugElement.query(By.css('[data-testid="billing-overview-payment-method-changed-icon"]'));
    const { header, message } = getElements(fixture);
    expect(icon).toBeTruthy();
    expect(header).toBeTruthy();
    expect(message).toBeTruthy();
  });

  function getElements(fixture: ComponentFixture<BillingOverviewPaymentMethodChangedComponent>) {
    const header = fixture.debugElement.query(
      By.css('[data-testid="billing-overview-payment-method-changed-header"]')
    ).nativeElement;
    const message = fixture.debugElement.query(
      By.css('[data-testid="billing-overview-payment-method-changed-description"]')
    ).nativeElement;
    return { header, message };
  }
});
