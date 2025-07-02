import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BillingOverviewUnpaidStatusComponent } from './billing-overview-unpaid-status.component';
import { PaymentMethod, PaymentStatus } from '@billing/invoice-overview/data-access';
import dayjs from 'dayjs';

describe('BillingOverviewUnpaidStatusComponent', () => {
  let component: BillingOverviewUnpaidStatusComponent;
  let fixture: ComponentFixture<BillingOverviewUnpaidStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BillingOverviewUnpaidStatusComponent],
      declarations: [],
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
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(BillingOverviewUnpaidStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get the correct icon', () => {
    expect(component.getIcon(PaymentStatus.OVERDUE, PaymentMethod.MANUAL)).toEqual('icon-error-shape-filled');
    expect(component.getIcon(PaymentStatus.UNPAID, PaymentMethod.MANUAL)).toEqual('icon-information-shape-filled');
    expect(component.getIcon(PaymentStatus.PARTIALLY_PAID, PaymentMethod.MANUAL)).toEqual(
      'icon-information-shape-filled'
    );
    expect(component.getIcon(PaymentStatus.UNPAID, PaymentMethod.DIRECT_DEBIT)).toEqual('icon-calendar');
    expect(component.getIcon(PaymentStatus.PARTIALLY_PAID, PaymentMethod.DIRECT_DEBIT)).toEqual('icon-calendar');
  });

  it('should get correct number of days between today and the due date', () => {
    expect(component.getDaysPastPaymentDueDate(new Date())).toBe(0);
    expect(component.getDaysPastPaymentDueDate(dayjs().subtract(5, 'days').toDate())).toBe(5);
    expect(component.getDaysPastPaymentDueDate(dayjs().add(5, 'days').toDate())).toBe(-5);
  });

  it('should get the locale string', () => {
    expect(component.locale).toEqual('en-BE');
  });
});
