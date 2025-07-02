import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BillingOverviewAmountComponent } from './billing-overview-amount.component';
import { TgTranslateTestingModule } from '@telenet/ng-lib-page';

describe('BillingOverviewAmountComponent', () => {
  let component: BillingOverviewAmountComponent;
  let fixture: ComponentFixture<BillingOverviewAmountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BillingOverviewAmountComponent, TgTranslateTestingModule],
      declarations: [],
      providers: [
        {
          provide: 'Window',
          useValue: {},
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(BillingOverviewAmountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  [
    { locale: 'nl', expectation: '€\xa0123,45' },
    { locale: 'fr', expectation: '123,45\xa0€' },
    { locale: 'en', expectation: '€123.45' },
  ].forEach(({ locale, expectation }) => {
    it('should format the amount for ' + locale, () => {
      component.invoiceAmount = 123.45;
      component.outstandingDebt = 123.45;
      component.locale = locale;
      fixture.detectChanges();
      expect(
        fixture.nativeElement.querySelector('[data-testid="billing-overview-amount"] .heading--nomargin').textContent
      ).toContain(expectation);
    });
  });

  [
    { invoiceAmount: 100, outstandingDebt: 100, expectation: '€\xa0100,00' },
    { invoiceAmount: 100, outstandingDebt: 0, expectation: '€\xa0100,00' },
  ].forEach(({ invoiceAmount, outstandingDebt, expectation }) => {
    it(`should show the correct amount for invoiceAmount ${invoiceAmount} and outstandingDebt ${outstandingDebt}`, () => {
      component.invoiceAmount = invoiceAmount;
      component.outstandingDebt = outstandingDebt;
      component.locale = 'nl';
      fixture.detectChanges();
      expect(
        fixture.nativeElement.querySelector('[data-testid="billing-overview-amount"] .heading--nomargin').textContent
      ).toContain(expectation);
    });

    [
      { invoiceAmount: 100, outstandingDebt: 100, expectation: false },
      { invoiceAmount: 100, outstandingDebt: 0, expectation: false },
      { invoiceAmount: 100, outstandingDebt: 1, expectation: true },
    ].forEach(({ invoiceAmount, outstandingDebt, expectation }) => {
      it(`should check isPartiallyPaid message for invoiceAmount ${invoiceAmount} and outstandingDebt ${outstandingDebt}`, () => {
        component.invoiceAmount = invoiceAmount;
        component.outstandingDebt = outstandingDebt;
        component.locale = 'nl';
        fixture.detectChanges();
        if (expectation) {
          expect(fixture.nativeElement.querySelector('[data-testid="billing-overview-amount-remaining"]')).toBeTruthy();
        } else {
          expect(fixture.nativeElement.querySelector('[data-testid="billing-overview-amount-remaining"]')).toBeFalsy();
        }
      });
    });
  });
});
