import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BillingOverviewPayComponent } from './billing-overview-pay.component';
import { UrlService } from '@telenet/ng-lib-page';
import { By } from '@angular/platform-browser';
import { TranslateModule } from '@ngx-translate/core';

const PAY_SELECTOR = '[data-testid="billing-overview-invoice-pay"]';
describe('BillingOverviewUnpaidStatusComponent', () => {
  let component: BillingOverviewPayComponent;
  let fixture: ComponentFixture<BillingOverviewPayComponent>;
  let urlService: UrlService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BillingOverviewPayComponent, TranslateModule.forRoot()],
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

    fixture = TestBed.createComponent(BillingOverviewPayComponent);
    component = fixture.componentInstance;
    urlService = TestBed.inject(UrlService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should redirect to online payment url', () => {
    jest.spyOn(urlService, 'redirectTo');
    component.onlinePaymentLink = 'test/url';
    component.amount = 10.0;
    component.locale = 'nl';
    fixture.detectChanges();
    fixture.debugElement.query(By.css(PAY_SELECTOR)).nativeElement.click();
    expect(component['urlService'].redirectTo).toHaveBeenCalledWith('test/url');
  });

  it('should redirect to online payment url', () => {
    component.onlinePaymentLink = 'test/url';
    component.amount = undefined;
    fixture.detectChanges();
    expect(fixture.debugElement.query(By.css(PAY_SELECTOR))).toBeFalsy();
  });
});
