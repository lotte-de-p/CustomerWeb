import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { BillingOverviewNoBillingAccountsComponent } from './billing-overview-no-billing-accounts.component';
import { UrlService } from '@telenet/ng-lib-page';

describe('MobileActivationInProgressNotificationComponent', () => {
  let component: BillingOverviewNoBillingAccountsComponent;
  let fixture: ComponentFixture<BillingOverviewNoBillingAccountsComponent>;
  let urlService: UrlService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [
        UrlService,
        {
          provide: 'Window',
          useValue: {
            location: { href: '' },
          },
        },
      ],
      declarations: [],
      imports: [CommonModule, TranslateModule.forRoot()],
    }).compileComponents();
    urlService = TestBed.inject(UrlService);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BillingOverviewNoBillingAccountsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    jest.spyOn(urlService, 'redirectTo');
    expect(component).toBeTruthy();
  });

  it('should redirect to consult invoice link', () => {
    const homePageLink = 'some/link';
    component.homePageLink = homePageLink;
    const urlServiceSpy = jest.spyOn(urlService, 'redirectTo');
    component.redirectToConsultInvoice();
    expect(urlServiceSpy).toHaveBeenCalledWith(homePageLink);
  });
});
