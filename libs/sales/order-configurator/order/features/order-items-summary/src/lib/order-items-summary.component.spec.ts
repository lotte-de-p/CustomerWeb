import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateModule } from '@ngx-translate/core';
import { provideMockStore } from '@ngrx/store/testing';
import { defaultState } from '@sales/order-configurator/order/state';
import { OrderItemsSummaryComponent } from './order-items-summary.component';

describe('OrderItemsSummaryComponent', () => {
  let component: OrderItemsSummaryComponent;
  let fixture: ComponentFixture<OrderItemsSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TranslateModule.forRoot()],
      providers: [provideMockStore({ initialState: defaultState })],
    }).compileComponents();

    fixture = TestBed.createComponent(OrderItemsSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
