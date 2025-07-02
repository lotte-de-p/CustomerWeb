import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateModule } from '@ngx-translate/core';
import { BillingOverviewNoBillsComponent } from './billing-overview-no-bills.component';
import { By } from '@angular/platform-browser';

const REIMBURSEMENT_SELECTOR = '[data-testid="billing-overview-no-bills-reimbursement"]';
describe('BillingOverviewNoBillsComponent', () => {
  let component: BillingOverviewNoBillsComponent;
  let fixture: ComponentFixture<BillingOverviewNoBillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BillingOverviewNoBillsComponent, TranslateModule.forRoot()],
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
      declarations: [],
    }).compileComponents();

    fixture = TestBed.createComponent(BillingOverviewNoBillsComponent);
    component = fixture.componentInstance;
    component.locale = 'nl';
    component.isTelenet = true;
    component.telenetImg = 'some-image.jpg';
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should not show reimbursement text if positive amount', () => {
    component.totalAmount = 123.45;
    fixture.detectChanges();
    expect(fixture.debugElement.query(By.css(REIMBURSEMENT_SELECTOR))).toBeFalsy();
  });

  it('should not show reimbursement text if 0', () => {
    component.totalAmount = 0;
    fixture.detectChanges();
    expect(fixture.debugElement.query(By.css(REIMBURSEMENT_SELECTOR))).toBeFalsy();
  });

  it('should show reimbursement text if negative amount', () => {
    component.totalAmount = -123.45;
    fixture.detectChanges();
    expect(fixture.debugElement.query(By.css(REIMBURSEMENT_SELECTOR))).toBeTruthy();
  });
});
