import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateModule } from '@ngx-translate/core';
import { BillingOverviewDownloadErrorNotificationComponent } from './billing-overview-download-error-notification.component';

describe('BillingOverviewDownloadErrorNotificationComponent', () => {
  let component: BillingOverviewDownloadErrorNotificationComponent;
  let fixture: ComponentFixture<BillingOverviewDownloadErrorNotificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BillingOverviewDownloadErrorNotificationComponent, TranslateModule.forRoot()],
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

    fixture = TestBed.createComponent(BillingOverviewDownloadErrorNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
