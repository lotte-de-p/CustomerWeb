import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateFakeLoader, TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { BillingAccountStatusComponent } from './billing-account-status.component';
import { By } from '@angular/platform-browser';
import { PaymentStatus } from '@billing/invoice-overview/data-access';

const ICON_SELECTOR = '[data-testid="billing-accounts-option-status"] i';
const TEXT_SELECTOR = '[data-testid="billing-accounts-option-status"] .billing-status-text';

describe('BillingAccountStatusComponent', () => {
  let component: BillingAccountStatusComponent;
  let fixture: ComponentFixture<BillingAccountStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useClass: TranslateFakeLoader },
        }),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(BillingAccountStatusComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set correct classes for icon and text (overdue)', () => {
    component.paymentStatus = PaymentStatus.OVERDUE;
    fixture.detectChanges();
    const iconElement = fixture.debugElement.query(By.css(ICON_SELECTOR)).nativeElement;
    const textElement = fixture.debugElement.query(By.css(TEXT_SELECTOR)).nativeElement;
    expect(iconElement.className).toContain('icon-error-shape-filled');
    expect(textElement.className).toContain('color-notification--error--light');
    expect(textElement.textContent).toEqual('ng.billing-overview.billing-account-selector.lbl.status.OVERDUE');
  });

  it('should set correct classes for icon and text (unpaid)', () => {
    component.paymentStatus = PaymentStatus.UNPAID;
    fixture.detectChanges();
    const iconElement = fixture.debugElement.query(By.css(ICON_SELECTOR)).nativeElement;
    const textElement = fixture.debugElement.query(By.css(TEXT_SELECTOR)).nativeElement;
    expect(iconElement.className).toContain('icon-information-shape-filled');
    expect(textElement.className).toContain('color-notification--info--light');
    expect(textElement.textContent).toEqual('ng.billing-overview.billing-account-selector.lbl.status.UNPAID');
  });

  it('should set correct classes for icon and text (partially paid)', () => {
    component.paymentStatus = PaymentStatus.PARTIALLY_PAID;
    fixture.detectChanges();
    const iconElement = fixture.debugElement.query(By.css(ICON_SELECTOR)).nativeElement;
    const textElement = fixture.debugElement.query(By.css(TEXT_SELECTOR)).nativeElement;
    expect(iconElement.className).toContain('icon-information-shape-filled');
    expect(textElement.className).toContain('color-notification--info--light');
    expect(textElement.textContent).toEqual('ng.billing-overview.billing-account-selector.lbl.status.PARTIALLY_PAID');
  });

  it('should set correct classes for icon and text (paid)', () => {
    component.paymentStatus = PaymentStatus.PAID;
    fixture.detectChanges();
    const iconElement = fixture.debugElement.query(By.css(ICON_SELECTOR)).nativeElement;
    const textElement = fixture.debugElement.query(By.css(TEXT_SELECTOR)).nativeElement;
    expect(iconElement.className).toContain('icon-check-shape-filled');
    expect(textElement.className).toContain('color-notification--success--light');
    expect(textElement.textContent).toEqual('ng.billing-overview.billing-account-selector.lbl.status.PAID');
  });
});
