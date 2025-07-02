import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BillingOverviewPaidStatusComponent } from './billing-overview-paid-status.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

describe('BillingOverviewPaidStatusComponent', () => {
  let component: BillingOverviewPaidStatusComponent;
  let fixture: ComponentFixture<BillingOverviewPaidStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BillingOverviewPaidStatusComponent, TranslateModule.forRoot()],
      declarations: [],
      providers: [
        TranslateService,
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

    fixture = TestBed.createComponent(BillingOverviewPaidStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
