import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateModule } from '@ngx-translate/core';
import { PaymentEncouragementComponent } from './billing-overview-payment-encouragement.component';
import { DispatchMethod, PaymentMethod } from '@billing/invoice-overview/data-access';

const DOCCLE_MESSAGE = 'ng.billing-overview.payment-encouragement.doccle';
const DIRECT_DEBIT_MESSAGE = 'ng.billing-overview.payment-encouragement.direct-debit';
describe('PaymentEncouragementComponent', () => {
  let component: PaymentEncouragementComponent;
  let fixture: ComponentFixture<PaymentEncouragementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaymentEncouragementComponent, TranslateModule.forRoot()],
      declarations: [],
      providers: [
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

    fixture = TestBed.createComponent(PaymentEncouragementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get the correct message', () => {
    setValues(PaymentMethod.MANUAL);
    expect(component.message).toEqual(DIRECT_DEBIT_MESSAGE);
    setValues(PaymentMethod.DIRECT_DEBIT, DispatchMethod.SMS);
    expect(component.message).toEqual(DOCCLE_MESSAGE);
    setValues(PaymentMethod.DIRECT_DEBIT, DispatchMethod.PAPER);
    expect(component.message).toEqual(DOCCLE_MESSAGE);
    setValues(PaymentMethod.DIRECT_DEBIT, DispatchMethod.EMAIL);
    expect(component.message).toEqual(DOCCLE_MESSAGE);
    setValues(PaymentMethod.DIRECT_DEBIT, DispatchMethod.EMAIL_SMS);
    expect(component.message).toEqual(DOCCLE_MESSAGE);
    setValues(PaymentMethod.DIRECT_DEBIT, DispatchMethod.SMS);
    expect(component.message).toEqual(DOCCLE_MESSAGE);
    setValues(PaymentMethod.DIRECT_DEBIT, DispatchMethod.DOCCLE);
    expect(component.message).toBeUndefined();
    setValues(PaymentMethod.DIRECT_DEBIT, DispatchMethod.ETIS);
    expect(component.message).toBeUndefined();
  });

  function setValues(paymentMethod: PaymentMethod, dispatchMethod?: DispatchMethod) {
    component.paymentMethod = paymentMethod;
    component.dispatchMethod = dispatchMethod as DispatchMethod;
    fixture.detectChanges();
  }
});
