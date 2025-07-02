import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BillingOverviewIconComponent } from './billing-overview-icon.component';

describe('BillingOverviewIconComponent', () => {
  let component: BillingOverviewIconComponent;
  let fixture: ComponentFixture<BillingOverviewIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BillingOverviewIconComponent],
      declarations: [],
    }).compileComponents();

    fixture = TestBed.createComponent(BillingOverviewIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  [
    { invoiceAmount: 5, expectation: 'bill' },
    { invoiceAmount: -5, expectation: 'euro-arrow-counterclockwise' },
  ].forEach(({ invoiceAmount, expectation }) => {
    it('should format the icon for the amount ' + invoiceAmount, () => {
      component.invoiceAmount = invoiceAmount;
      fixture.detectChanges();
      expect(component.icon).toEqual(expectation);
    });
  });
});
