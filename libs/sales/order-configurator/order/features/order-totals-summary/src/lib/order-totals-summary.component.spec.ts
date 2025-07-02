import { TranslateModule } from '@ngx-translate/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OrderTotalsSummaryComponent } from './order-totals-summary.component';
import { provideMockStore } from '@ngrx/store/testing';
import { defaultState } from '@sales/order-configurator/order/state';

describe('OrderTotalsComponent', () => {
  let component: OrderTotalsSummaryComponent;
  let fixture: ComponentFixture<OrderTotalsSummaryComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TranslateModule.forRoot()],
      providers: [provideMockStore({ initialState: defaultState })],
    }).compileComponents();

    fixture = TestBed.createComponent(OrderTotalsSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
