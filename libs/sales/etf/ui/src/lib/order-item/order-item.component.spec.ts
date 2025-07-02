import { TranslateModule } from '@ngx-translate/core';
import { OrderItemComponent } from './order-item.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { orderItemsWithDiscountStateFactory } from '@sales/etf/data-access';

describe('OrderItemComponent', () => {
  let component: OrderItemComponent;
  let fixture: ComponentFixture<OrderItemComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TranslateModule.forRoot()],
    }).compileComponents();

    fixture = TestBed.createComponent(OrderItemComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('setOrderItemTerminationState', () => {
    it('should set the order termination state', () => {
      jest.spyOn(component.setOrderItemTerminationStateEvent, 'next');
      const orderItemWithDiscount = orderItemsWithDiscountStateFactory.build();
      component.setOrderItemTerminationState(orderItemWithDiscount, true);
      expect(component.setOrderItemTerminationStateEvent.next).toHaveBeenCalledWith({
        orderItemWithDiscount: orderItemWithDiscount,
        buyWithDiscount: true,
      });
    });
  });
});
