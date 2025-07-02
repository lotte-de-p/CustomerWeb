import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PayByMobileMsisdnBlockedWarningComponent } from './pay-by-mobile-msisdn-blocked-warning.component';
import { TranslateFakeLoader, TranslateLoader, TranslateModule } from '@ngx-translate/core';

describe('PayByMobileMsisdnBlockedWarningComponent', () => {
  let component: PayByMobileMsisdnBlockedWarningComponent;
  let fixture: ComponentFixture<PayByMobileMsisdnBlockedWarningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useClass: TranslateFakeLoader },
        }),
      ],
    }).compileComponents();
    fixture = TestBed.createComponent(PayByMobileMsisdnBlockedWarningComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
