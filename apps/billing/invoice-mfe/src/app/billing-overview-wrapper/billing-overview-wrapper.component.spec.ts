import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BillingOverviewWrapperComponent } from './billing-overview-wrapper.component';
import { BillingOverviewComponent } from '@billing/invoice-overview/feat-billing-overview';
import { TranslateModule } from '@ngx-translate/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('BillingOverviewWrapperComponent', () => {
  let component: BillingOverviewWrapperComponent;
  let fixture: ComponentFixture<BillingOverviewWrapperComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        BillingOverviewWrapperComponent,
        BillingOverviewComponent,
        HttpClientTestingModule,
        TranslateModule.forRoot(),
      ],
      providers: [{ provide: 'Window', useValue: window }],
    });

    fixture = TestBed.createComponent(BillingOverviewWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('component should run', () => {
    expect(component).toBeTruthy();
  });
});
